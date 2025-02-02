import EventSource from "eventsource";

class LangflowClient {
  constructor(baseURL, applicationToken) {
    if (!applicationToken) {
      throw new Error("Application token is required for LangflowClient");
    }
    this.baseURL = baseURL;
    this.applicationToken = applicationToken;
  }

  async post(endpoint, body, headers = { "Content-Type": "application/json" }) {
    headers["Authorization"] = `Bearer ${this.applicationToken}`;
    const url = `${this.baseURL}${endpoint}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body),
      });

      const responseMessage = await response.json();
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText} - ${JSON.stringify(responseMessage)}`);
      }
      return responseMessage;
    } catch (error) {
      console.error('Request Error:', { url, body, headers, message: error.message });
      throw error;
    }
  }

  async initiateSession(flowId, langflowId, inputValue, inputType = 'chat', outputType = 'chat', stream = false, tweaks = {}) {
    const endpoint = `/lf/${langflowId}/api/v1/run/${flowId}?stream=${stream}`;
    return this.post(endpoint, { input_value: inputValue, input_type: inputType, output_type: outputType, tweaks: tweaks });
  }

  handleStream(streamUrl, onUpdate, onClose, onError) {
    if (!streamUrl || typeof streamUrl !== "string") {
      throw new Error(`Invalid stream URL: ${streamUrl}`);
    }

    const eventSource = new EventSource(streamUrl);

    eventSource.onmessage = event => {
      const data = JSON.parse(event.data);
      onUpdate(data);
    };

    eventSource.onerror = event => {
      console.error('Stream Error:', event);
      onError(event);
      eventSource.close();
    };

    eventSource.addEventListener("close", () => {
      onClose('Stream closed');
      eventSource.close();
    });

    return eventSource;
  }

  async runFlow(flowIdOrName, langflowId, inputValue, inputType = 'chat', outputType = 'chat', tweaks = {}, stream = false, onUpdate, onClose, onError) {
    try {
      const initResponse = await this.initiateSession(flowIdOrName, langflowId, inputValue, inputType, outputType, stream, tweaks);
      console.log('Init Response:', initResponse);

      const streamUrl = initResponse?.outputs?.[0]?.outputs?.[0]?.artifacts?.stream_url;
      if (stream && streamUrl) {
        console.log(`Streaming from: ${streamUrl}`);
        this.handleStream(streamUrl, onUpdate, onClose, onError);
      } else if (stream) {
        throw new Error("Stream URL not found in the response");
      }

      return initResponse;
    } catch (error) {
      console.error('Error running flow:', error);
      onError('Error initiating session');
      throw error;
    }
  }
}

export async function processLangflowRequest(prompt, flowType, outputType, isStreaming) {
  try {
    const payload = { prompt, flowType, outputType, isStreaming };
    console.log("Payload Sent to Langflow API:", JSON.stringify(payload, null, 2));

    const response = await fetch("http://localhost:3000/api/langflow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    console.log("Langflow API Response:", responseText);

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText} - ${responseText}`);
    }

    if (!responseText) {
      throw new Error("Empty response received from Langflow API.");
    }

    return JSON.parse(responseText);
  } catch (error) {
    console.error("Error in LangflowClient.post:", error);
    throw new Error(error.message || "Error processing Langflow request.");
  }
}
