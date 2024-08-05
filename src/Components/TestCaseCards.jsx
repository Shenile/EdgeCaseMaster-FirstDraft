import React from 'react';

const TestCaseCard = ({ testCase, expectedOutput, status, index, error }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'Passed':
        return 'bg-green-100 bg-opacity-50';
      case 'Failed':
        return 'bg-red-100 bg-opacity-50';
      case 'Pending':
        return 'bg-yellow-100 bg-opacity-50';
      default:
        return 'bg-gray-100 bg-opacity-50';
    }
  };
  

  return (
    <div className={`flex-1 min-w-[300px] rounded-md shadow-lg p-4 border ${getStatusClass(status)}`}>
      <h2 className="text-base font-semibold mb-2">Test Case {index + 1}</h2>
      <div className="mb-4">
        <h3 className="text-base font-semibold">Input:</h3>
        <p className="text-gray-700 tracking-wide font-code">{JSON.stringify(testCase)}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-base font-semibold">Expected Output:</h3>
        <p className="text-gray-700 font-code">{JSON.stringify(expectedOutput)}</p>
      </div>
      {status && (
    <div>
      <h3 className="font-semibold">Status:</h3>
      <p className={`text-green-500 font-code ${status === 'Passed' ? 'text-green-500' : status === 'Failed' ? 'text-red-500' : 'text-gray-500'}`}>
        {status}
      </p>
      {status === 'Failed' && error && (
        <div className="mt-4">
          <h3 className="font-semibold">Error:</h3>
          <p className="text-red-500 font-code">{error}</p>
        </div>
      )}
    </div>
  )}
    </div>
  );
};

export default TestCaseCard;
