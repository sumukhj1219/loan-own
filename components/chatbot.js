"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I am Loanown's personalized chatbot. How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await axios.post("/api/chat", { input });

      if (response.status === 200) {
        const botReply = response.data.data || "I'm here to help!";
        setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
      } else {
        console.error("Unexpected response:", response);
      }
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Oops! Something went wrong.", sender: "bot" },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {isOpen && (
        <Card className="w-80 p-4 shadow-xl bg-white border rounded-2xl">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-lg font-semibold">Chatbot</h2>
            <X className="cursor-pointer" onClick={() => setIsOpen(false)} />
          </div>

          <div ref={chatRef} className="h-64 overflow-y-auto p-2 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-[80%] text-sm ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white ml-auto"
                    : "bg-gray-200"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="p-2 rounded-lg bg-gray-200 text-sm">Typing...</div>
            )}
          </div>

          <div className="flex items-center mt-2">
            <Input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <Button onClick={sendMessage} className="ml-2">
              Send
            </Button>
          </div>
        </Card>
      )}

      <Button
        className="rounded-full p-3 shadow-lg bg-blue-600 text-white hover:bg-blue-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle size={24} />
      </Button>
    </div>
  );
}
