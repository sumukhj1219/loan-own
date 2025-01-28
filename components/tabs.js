import React from 'react';

const Showcase = () => {
  return (
    <div className="max-w-6xl p-6 mx-auto">
       <span className="mt-10 text-3xl font-semibold text-center flex items-center justify-center">
              We work with over 50 lenders so you can be sure of us finding the right loan to suit your individual circumstances.
        </span>
      <div className="bg-sky-400 mt-10 rounded-lg shadow-xl overflow-hidden relative border border-sky-400">
        <div className="absolute inset-0 bg-sky-400 rounded-xl p-6">
          <div className="relative bg-black rounded-lg overflow-hidden">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              controls={false}  
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              alt="Sample Video"
            />
          </div>

          {/* Text Content */}
          {/* <div className="absolute top-0 left-0 w-full p-6 text-white bg-gradient-to-t from-black to-transparent">
            <span className="text-3xl font-semibold text-center">
              We work with over 50 lenders so you can be sure of us finding the right loan to suit your individual circumstances.
            </span>
          </div> */}
        </div>

        {/* Bottom Text */}
        <div className="max-w-6xl mx-auto p-6">
          <div className="grid grid-cols-2 gap-4 p-6">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-3xl font-semibold text-gray-800">
                Your trusted partner in achieving your financial goals.
              </h1>
              {/* <p className="font-thin text-gray-700">
                Sandie Foreman is the Director and leading Mortgage Broker of Home Loan
                Finance, servicing the Northern Beaches of Sydney and surrounds.
              </p>
              <p className="font-thin text-gray-700">
                I am dedicated to providing my clients with an impeccable level of
                service and commitment. Whether you are a first-time buyer, looking to
                expand your property portfolio, or seeking to secure the best possible
                deal on your mortgage, Sandie Foreman is your trusted partner in
                achieving your financial goals.
              </p> */}
              {/* <p>
                <span className="font-thin text-gray-700">Call us on:</span> +61413219624 <br />
                <span className="font-thin text-gray-700">Email us on:</span>{" "}
                <a href="mailto:mohit@lnomortgages.com.au" className="text-blue-500">
                  mohit@lnomortgages.com.au
                </a>
              </p>
              <p className="text-sm text-gray-600">
                Finance Home Loans is open from 10:00am to 5:00pm Monday to Friday.
              </p> */}
            </div>

            <div className="flex justify-center items-center">
              <img
                src="https://d3debuvrkv6iuf.cloudfront.net/media/2023/06/Sandie-Circle.png"
                alt="Home Loan Finance"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
