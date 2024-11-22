import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faInfoCircle,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "react-toastify";
import { showToast } from "./toastUtils";
import TestButton from "./Utils/TestButtons";
import { runTests, generate_test_cases } from "../services/api";
import { parseData } from "../utils/utils";


const AIIcon = ({ color = "#800020", size = "20" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    fill={color}
    width={size}
    height={size}
  >
    <path d="m19.5,9c-.46,0-.874-.28-1.045-.708l-.853-1.911-1.914-.897c-.424-.179-.697-.597-.688-1.057.009-.46.297-.868.727-1.031l1.948-.738.78-1.951c.171-.427.584-.708,1.045-.708s.874.28,1.045.708l.785,1.963,1.963.785c.427.171.708.584.708,1.045s-.28.874-.708,1.045l-1.963.785-.785,1.963c-.171.427-.584.708-1.045.708Zm3.162,1.473c-1.222.505-2.618.675-4.076.388-2.72-.536-4.911-2.727-5.447-5.447-.287-1.458-.118-2.854.388-4.076.264-.639-.204-1.338-.895-1.338h-7.632C2.239,0,0,2.239,0,5v14c0,2.761,2.239,5,5,5h14c2.761,0,5-2.239,5-5v-7.632c0-.691-.699-1.159-1.338-.895Zm-8.964,8.527c-.443,0-.831-.294-.952-.72l-.643-2.28h-5.206l-.643,2.28c-.12.426-.509.72-.952.72h0c-.654,0-1.128-.624-.953-1.254l3.091-11.108c.141-.608.541-1.12,1.098-1.405.568-.292,1.22-.31,1.839-.05.587.246,1.037.817,1.204,1.535l3.071,11.029c.175.63-.298,1.254-.953,1.254Zm5.302-1c0,.552-.448,1-1,1s-1-.448-1-1v-4.912c0-.552.448-1,1-1s1,.448,1,1v4.912ZM9.39,7.165l-1.929,6.835h4.077l-1.929-6.835c-.029-.114-.191-.114-.219,0Z" />
  </svg>
);

export default function TestCase({
  setInput,
  setOutput,
  inputCollection,
  outputCollection,
  input,
  output,
  setResult,
  code,
  setIsLoading,
  setQuicktest,
  setTestSummary,
  set_AI_LoadingBar
}) {
  const handleAddTestCase = (input, output) => {
    setQuicktest(false);
    setResult([]);

    const { parsedInput, parsedOutput, error } = parseData(input, output);

    if (parsedInput && parsedOutput) {
      inputCollection.push(parsedInput);
      outputCollection.push(parsedOutput);
      console.log(inputCollection, outputCollection);
      setInput("");
      setOutput("");
    } else {
      showToast(error, "error");
    }
  };

  const handleQuickTest = async (code, input, output) => {
    try {
      if (input && output && code) {
        setIsLoading(true);
        const response = await runTests(code, input, output);

        if (response.error) {
          setIsLoading(false);

          showToast(response.error, "error");
        } else {
          setIsLoading(false);
          setResult(response.data);

          setQuicktest(true);
        }
      } else {
        setIsLoading(false);
        throw new Error("Code, input, and output data can't be empty");
      }
    } catch (err) {
      setIsLoading(false);
      showToast(err.message, "error");
    }
  };

  const handleAI = async (code) => {
    if (!code) {
      showToast("No code provided. Please input valid code.", "error");
      return;
    }

    try {
      setIsLoading(true);
      set_AI_LoadingBar(true);

      // Fetch test cases from the API
      const response = await generate_test_cases(code);

      // Check if response data is null or invalid
      if (!response?.data) {
        // If data is null, show the error message from response.err
        throw new Error(response?.err || "No data received from the API.");
      }

      const testCases = response?.data?.test_cases || [];

      // Extract inputs and expected outputs
      const inputs = testCases.map((testcase) => testcase.input);
      const outputs = testCases.map((testcase) => testcase.expected_output);

      // Update global collections
      inputCollection.push(...inputs);
      outputCollection.push(...outputs);
    } catch (error) {
      // Check if error is a specific message or contains response.err
      const errorMessage =
        error?.message ||
        error?.response?.data?.err ||
        "An unknown error occurred.";
      showToast(errorMessage, "error"); // Show error in toast
    } finally {
      setIsLoading(false);
      set_AI_LoadingBar(false);
    }
  };

  return (
    <div className="my-4 flex flex-col">
      <div className="w-full flex gap-4">
        <textarea
          rows="2"
          className="bg-surface-a20
                     text-gray-300 w-full h-fit my-2 p-2
                     border border-gray-300 border-opacity-25
                     font-code rounded 
                     focus:border-opacity-0 focus:outline-none 
                     focus:ring-1 focus:ring-blue-500
                     "
          placeholder="Enter input values (e.g., [[1,2,3], [4,5]])"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <textarea
          rows="2"
          className="bg-surface-a20 
                     text-gray-300 w-full h-fit 
                     border border-gray-300 border-opacity-25
                     my-2 p-2 font-code rounded 
                     focus:border-opacity-0 focus:outline-none 
                     focus:ring-1 focus:ring-blue-500"
          placeholder="Enter output values (e.g., [4,5])"
          value={output}
          onChange={(e) => setOutput(e.target.value)}
        />
      </div>

      <div className="w-full px-4 pr-0 py-2 mt-4  xs:flex-row xs:items-center  md:flex md:gap-4 md:justify-end ">
        <button
          onClick={() => handleQuickTest(code, input, output)}
          className="px-4 py-3 flex gap-2 items-center border border-gray-300 border-opacity-25 rounded-full text-gray-300 hover:bg-white hover:bg-opacity-5 xs:mb-4 md:mb-0 md:text-base"
        >
          <FontAwesomeIcon
            icon={faTachometerAlt}
            className="text-green-500 w-5 h-5"
          />
          Quick test
        </button>

        <button
          onClick={() => handleAddTestCase(input, output)}
          className="px-4 py-6 flex gap-2 items-center h-8 w-fit border border-gray-300 border-opacity-25 text-gray-300 rounded-full hover:bg-white hover:bg-opacity-5"
        >
          <FontAwesomeIcon icon={faPlus} className="text-gold" />
          <p>Add test case</p>
        </button>

        <button
          className="px-4 py-3 flex gap-2 items-center text-gray-300 font-semibold rounded-full border border-gray-300 border-opacity-25 hover:bg-white hover:bg-opacity-5"
          onClick={() => handleAI(code)}
        >
          <AIIcon color="#00FFFF" />
          <p>Generate Tests</p>
        </button>
      </div>

      {/* <div className='mt-2 flex gap-2 items-center bg-surface-a90 p-2 rounded-md'>
        <FontAwesomeIcon icon={faInfoCircle} className='p-2 text-red-700 ' />
        <p className='text-sm text-gray-200 tracking-wide leading-normal'>
          Note: <span className='font-semibold'>EdgeCaseMaster</span> currently supports creating and using test cases only for array data types. We’re working on adding more features soon. Thanks for your patience!
        </p>
      </div> */}

      <ToastContainer />
    </div>
  );
}
