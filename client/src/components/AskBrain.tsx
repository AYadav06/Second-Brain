import React from "react";

export const AskBrain = () => {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center text-white mt-5">
      <h1 className="mb-6 text-3xl font-semibold">
        Good Morning,
        <span className="capitalize">adfd</span>
      </h1>

      <div className="h-40 w-full max-w-4xl rounded-2xl bg-dark-bg px-6 py-4 shadow-md border-2 border-gray-800">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Ask your brain..."
            className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
          />
        </div>

        <div className="mt-18 flex gap-2">
          {["Url", "Note", "Doc", "Video"].map((tag) => (
            <span
              key={tag}
              className="cursor-pointer rounded-full bg-dark-bg border border-gray-700 px-3 py-1 text-sm text-gray-200 hover:bg-primary-dark"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
