import React from 'react';

const TestCaseCard = ({ testCase, expectedOutput, status, index, error, execution_time }) => {
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

  const getStatusClassBorder = (status) =>{
    switch (status) {
      case 'Passed':
        return 'border-green-300 bg-opacity-50';
      case 'Failed':
        return 'border-red-300 bg-opacity-50';
      case 'Pending':
        return 'border-yellow-300 bg-opacity-50';
      default:
        return 'border-gray-300 bg-opacity-50';
    }
  }
  

  return (
    <div className={`flex-1 min-w-[300px] rounded-md shadow-lg p-4 border ${getStatusClassBorder(status)} ${getStatusClass(status)}`}>
      <div className={`flex justify-between border-b ${getStatusClassBorder(status)} pb-2 mb-4`}>
                
                <h2 className="text-base font-semibold self-center">Case {index + 1}</h2>
          
              
              <div className='flex justify-end gap-2 px-2'>

                {
                  status && 
                    (<p className='px-2 text-gray-700 content-center'>Execution time : {execution_time + 'ms..'}</p>)
                }
      </div>
      </div>
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
