import React from "react";

const TestCaseCard = ({
  testCase,
  expectedOutput,
  status,
  index,
  error,
  execution_time,
}) => {
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
    <div className="flex-grow overflow-auto px-4 mb-4 scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-gray-800">
      <div className="flex flex-col flex-wrap gap-4">
        <div
          className={`flex-1 md:min-w-[300px] xs:min-w-[150px] rounded-md text-gray-300 shadow-lg bg-surface-a90 border ${getStatusClassBorder(
            status
          )} ${getStatusClass(status)}`}
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
          </div>
          <div className="mb-4 px-4">
            <h3 className="text-base font-semibold">Input:</h3>
            <p className="my-1 text-blue-400 tracking-wide font-code">
              {JSON.stringify(testCase)}
            </p>
          </div>
          <div className="mb-4 px-4">
            <h3 className="text-base font-semibold">Expected Output:</h3>
            <p className="my-1 text-blue-400 font-code">
              {JSON.stringify(expectedOutput)}
            </p>
          </div>
          {status && (
            <div className="px-4 mb-4">
              <h3 className="font-semibold">Status:</h3>
              <p
                className={`text-green-500 font-code ${
                  status === "Passed"
                    ? "text-green-500"
                    : status === "Failed"
                    ? "text-red-500"
                    : "text-gray-500"
                }`}
              >
                {status.toUpperCase()}
              </p>
              {status === "Failed" && error && (
                <div className="mt-4">
                  <h3 className="font-semibold">Error:</h3>
                  <p className="text-red-500 font-code">{error}</p>
                </div>
              )}

              {status && (
                <div className="my-4">
                  <h3 className="font-semibold">Execution time :</h3>
                  <p className=" text-gray-400 content-center ">
                    {execution_time + "ms.."}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestCaseCard;
