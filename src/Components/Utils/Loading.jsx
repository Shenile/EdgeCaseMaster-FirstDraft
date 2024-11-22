import React from "react";
import { useState } from "react";

export default function LoadingCircle({ ai_loading_bar = false }) {
  return (
    <>
      {ai_loading_bar ? (
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-xl text-gray-300 font-bold mb-4">Generating Test Cases with AI..</h1>
            <div class="relative">
              <div class="h-16 w-16 rounded-full border-t-8 border-b-8 border-surface-a90"></div>
              <div class="absolute top-0 left-0 h-16 w-16 rounded-full border-t-8 border-b-8 border-gray-300 animate-spin"></div>
            </div>
            <p className="mt-4 text-gray-600 font-sans text-sm">
              Please wait while we process your request.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          <div className="relative inline-flex">
            <div className="w-6 h-6 bg-blue-600 bg-opacity-75 rounded-full"></div>
            <div className="w-6 h-6 bg-blue-600 rounded-full absolute top-0 left-0 animate-ping"></div>
            <div className="w-6 h-6 bg-blue-600 rounded-full absolute top-0 left-0 animate-pulse"></div>
          </div>
        </div>
      )}
    </>
  );
}
