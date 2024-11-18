import React from 'react';
import TestCaseCard from './TestCaseCards';

const TestCaseList = ({ results = [], tests_summary = {} }) => {

  const { test_inputs: inputs = [], test_outputs: expectedOutputs = [] } = tests_summary;

  return (
    <div className="flex-grow overflow-auto scrollbar-thin">
    <div className="flex flex-col flex-wrap gap-4">
      {inputs.map((testCase, index) => {
        const {execution_time} = results[index];
        const { status } = results[index]; 
        const {error} = results[index]// Handle case if results array is shorter
        return (
          <TestCaseCard
            key={index}
            testCase={testCase}
            expectedOutput={expectedOutputs[index]}
            status={status} // Default to 'Unknown' if status is not present
            index={index}
            error={error}
            execution_time = {execution_time}
          />
        );
      })}
    </div>
    </div>
  );
};

export default TestCaseList;
