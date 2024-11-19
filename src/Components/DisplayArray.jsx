import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit as faEditRegular,
  faTrashAlt as faTrashAltRegular,
} from "@fortawesome/free-regular-svg-icons";
import { ToastContainer } from "react-toastify";
import { showToast } from "./toastUtils";
import TestButton from "./Utils/TestButtons";
import { runTests } from "../services/api";
import { parseData } from "../utils/utils";
import QuickTestResult from "./QuickTestResult";
import LoadingCircle from "./Utils/Loading";

export default function DisplayArray({
  inputCollection,
  outputCollection,
  result,
  setInputCollection,
  setOutputCollection,
  code,
  setResult,
  setQuicktest,
  isQuicktest,
  isloading,
  setIsLoading,
}) {
  const [statuses, setStatuses] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editInput, setEditInput] = useState("");
  const [editOutput, setEditOutput] = useState("");
  const [shouldRunTests, setShouldRunTests] = useState(false);
  const [tests_summary, setTestSummary] = useState({});

  useEffect(() => {
    updateStatuses();
  }, [inputCollection, result]);

  useEffect(() => {
    if (shouldRunTests) {
      runAllTests();
      setShouldRunTests(false);
    }
  }, [shouldRunTests]);

  const updateStatuses = () => {
    setStatuses(
      inputCollection.map((_, index) =>
        result.length === 0 ? null : result[index]?.status || "Pending"
      )
    );
  };

  const runAllTests = async () => {
    setIsLoading(true);
    setResult([]);

    const inputString = JSON.stringify(inputCollection);
    const outputString = JSON.stringify(outputCollection);

    try {
      const response = await runTests(code, inputString, outputString);
      if (response.error) {
        setIsLoading(false);
        showToast(response.error, "error");
      } else {
        setTestSummary(response.data.tests_summary);
        console.log(response.data);
        setResult(response.data.results);
        setQuicktest(false);
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
      showToast(err.message, "error");
    }
  };

  const handleDelete = (index) => {
    setInputCollection((prevInputCollection) =>
      prevInputCollection.filter((_, i) => i !== index)
    );
    setOutputCollection((prevOutputCollection) =>
      prevOutputCollection.filter((_, i) => i !== index)
    );
    setStatuses((prevStatuses) => prevStatuses.filter((_, i) => i !== index));
    setTestSummary({});
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditInput(JSON.stringify(inputCollection[index]));
    setEditOutput(JSON.stringify(outputCollection[index]));
    setTestSummary({});
  };

  const handleUpdate = async () => {
    if (editIndex !== null) {
      const { parsedInput, parsedOutput, error } = parseData(
        editInput,
        editOutput
      );
      if (parsedInput && parsedOutput) {
        const updatedInputs = [...inputCollection];
        const updatedOutputs = [...outputCollection];

        updatedInputs[editIndex] = parsedInput;
        updatedOutputs[editIndex] = parsedOutput;

        setInputCollection(updatedInputs);
        setOutputCollection(updatedOutputs);

        setShouldRunTests(true);
        setEditIndex(null);
        setEditInput("");
        setEditOutput("");
      } else {
        showToast(error, "error");
      }
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Passed":
        return "bg-green-100 bg-opacity-50";
      case "Failed":
        return "bg-red-100 bg-opacity-50";
      case "Pending":
        return "bg-yellow-100 bg-opacity-50";
      default:
        return "bg-gray-100 bg-opacity-50";
    }
  };

  const getStatusClassBorder = (status) => {
    switch (status) {
      case "Passed":
        return "border-green-900 bg-opacity-50";
      case "Failed":
        return "border-red-900 bg-opacity-50";
      case "Pending":
        return "border-yellow-900 bg-opacity-50";
      default:
        return "border-gray-600 bg-opacity-50";
    }
  };

  return (
    <div className="container mx-auto pt-0 py-4 px-4 flex flex-col h-full tracking-wide">
      <div className="flex py-4 px-4 mb-4 bg-navy justify-between items-center gap-4 text-base font-semibold rounded-md">
        <div className="flex items-center gap-2 ">
          <h1 className="text-base text-gray-100">Test Cases and Outputs</h1>
        </div>
        <button
          onClick={() => {
            setInputCollection([]);
            setOutputCollection([]);
            setResult([]);
            setTestSummary({});
            setQuicktest(false);
          }}
          className="xs:px-2 xs:py-1  md:px-3 md:py-1 text-base text-white bg-burgundy  hover:bg-red-800 shadow-md rounded-md"
        >
          Clear All
        </button>
      </div>

      {inputCollection.length === 0 && !isQuicktest && (
        // Render SVG when `inputCollection` is empty
        <div className="flex flex-col justify-center items-center h-full px-4">
          <img src="/Idle_Icon.svg" alt="IdleIcon" className="w-48 h-48" />

          <p className="text-gray-400 mt-4 text-center text-base">
            No tests added yet. Start by adding a test case.
          </p>
        </div>
      )}

      {isQuicktest ? (
        <>
          {isloading ? (
            <LoadingCircle />
          ) : (
            <>
              {/* <div className="flex gap-2 items-center bg-surface-a90 px-4 p-2 rounded-md mb-4">
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  className="p-2 text-yellow-500"
                />
                <p className="text-sm tracking-wide leading-normal text-gray-400">
                  Please note that quick test results are dynamic and not stored
                  permanently. They will update based on the current data or
                  inputs provided.
                </p>
              </div> */}

              <QuickTestResult
                quickTestResults={result}
                setTestSummary={setTestSummary}
              />
            </>
          )}
        </>
      ) : (
        <>
          {isloading ? (
            <LoadingCircle />
          ) : (
            <div className="flex-grow overflow-auto px-4 mb-4 scrollbar-thin scrollbar-thumb-surface-a90 scrollbar-track-surface-a10">
              <div className="flex flex-col flex-wrap gap-4 ">
                {inputCollection.map((testCase, index) => {
                  const expectedOutput = outputCollection[index];
                  const status = statuses[index];
                  const testResult = result[index] || {};

                  return (
                    <div
                      key={index}
                      className={`flex-1 md:min-w-[300px] xs:min-w-[150px] rounded-md text-gray-300 bg-surface-a90 shadow-lg border ${getStatusClassBorder(
                        status
                      )} ${getStatusClass(status)} `}
                    >
                      <div
                        className={`flex justify-between border-b ${getStatusClassBorder(
                          status
                        )} py-2 mb-4 px-4`}
                      >
                        <div className="flex gap-4 items-center">
                          {status && (
                            <div className="">
                              {status == "Passed" ? (
                                <img
                                  src="/checkmark.png"
                                  alt="passed-Icon"
                                  className="w-6 h-6"
                                />
                              ) : (
                                <img
                                  src="/Wrong.png"
                                  alt="failed-Icon"
                                  className="w-6 h-6"
                                />
                              )}
                            </div>
                          )}

                          <h2 className="text-lg font-semibold self-center">
                            Case {index + 1}
                          </h2>
                        </div>

                        <div className="flex justify-end gap-2 px-2">
                          <button
                            className="p-2 px-3 bg-transperant text-gold hover:bg-surface-a90 rounded-md"
                            onClick={() => handleEdit(index)}
                          >
                            <FontAwesomeIcon icon={faEditRegular} />
                          </button>

                          <button
                            className="p-2 px-3 bg-transperant text-red-500 hover:bg-surface-a90 rounded-md"
                            onClick={() => handleDelete(index)}
                          >
                            <FontAwesomeIcon icon={faTrashAltRegular} />
                          </button>
                        </div>
                      </div>

                      <div className="mb-4 px-4">
                        <h3 className="text-base font-semibold">Input :</h3>
                        {editIndex === index ? (
                          <div className="w-full flex gap-4">
                            <textarea
                              rows="1"
                              className="bg-surface-a10 w-full h-fit my-2 p-2 text-blue-400 tracking-wide 
                                  font-code border border-gray-500 rounded focus:border-opacity-0 
                                  focus:outline-none focus:ring-1 focus:ring-blue-500"
                              placeholder=""
                              value={editInput}
                              onChange={(e) => setEditInput(e.target.value)}
                            />
                          </div>
                        ) : (
                          <p className="my-1 text-blue-400 tracking-wide font-code">
                            {JSON.stringify(testCase)}
                          </p>
                        )}
                      </div>
                      <div className="mb-4 px-4">
                        <h3 className="text-base font-semibold">
                          Expected Output :
                        </h3>
                        {editIndex === index ? (
                          <div className="w-full flex gap-4">
                            <textarea
                              rows="1"
                              className="bg-surface-a10 w-full h-fit my-2 p-2 text-blue-400 tracking-wide 
                                  font-code border border-gray-500 rounded focus:border-opacity-0 
                                  focus:outline-none focus:ring-1 focus:ring-blue-500"
                              placeholder=""
                              value={editOutput}
                              onChange={(e) => setEditOutput(e.target.value)}
                            />
                          </div>
                        ) : (
                          <p className="my-1 text-blue-400 font-code">
                            {JSON.stringify(expectedOutput)}
                          </p>
                        )}
                        {editIndex === index && (
                          <TestButton
                            label="Update"
                            className="my-2 w-fit h-8 text-white px-2 rounded-md "
                            onClick={handleUpdate}
                          />
                        )}
                      </div>
                      {status && (
                        <div className="px-4">
                          <h3 className="font-semibold">Status:</h3>
                          <p
                            className={`text-base ${
                              status === "Passed"
                                ? "text-green-500"
                                : status === "Failed"
                                ? "text-red-500"
                                : "text-gray-500"
                            }`}
                          >
                            {status.toUpperCase()}
                          </p>
                        </div>
                      )}
                      {status === "Failed" && testResult.error && (
                        <div className="mt-4 px-4">
                          <h3 className="font-semibold">Error:</h3>
                          <p className="text-red-500 font-code">
                            {result[index].error}
                          </p>
                        </div>
                      )}

                      {status && (
                        <div className="px-4 my-4">
                          <h3 className="font-semibold">Execution time :</h3>
                          <p className=" text-gray-400 content-center ">
                            {testResult["execution_time"] + "ms.."}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div></div>
            </div>
          )}
        </>
      )}

      <div
        className={`w-full px-4 py-2 py-4 flex gap-4 items-center border-t border-surface-a70 
                      ${
                        tests_summary &&
                        (tests_summary.passed || tests_summary.failed)
                          ? "justify-between"
                          : "justify-end"
                      }`}
      >
        {tests_summary && (tests_summary.passed || tests_summary.failed) && (
          <div className="flex gap-2 text-gray-300 font-semibold font-code">
            <p>{`TOTAL (`}</p>
            <p className="text-green-500">PASSED : {tests_summary.passed}</p>
            <p>{`,`}</p>
            <p className="text-red-500">FAILED : {tests_summary.failed}</p>
            <p>{` )`}</p>
          </div>
        )}
        <div>
          <TestButton
            label="Run all tests"
            onClick={runAllTests}
            className="w-fit h-8 text-white px-2 rounded-md "
          />
        </div>
      </div>
    </div>
  );
}
