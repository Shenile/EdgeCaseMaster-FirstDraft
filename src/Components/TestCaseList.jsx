import React from 'react';
import TestCaseCard from './TestCaseCards';

const TestCaseList = ({ results = [], testSummary = {} }) => {

  const { test_inputs: inputs = [], test_outputs: expectedOutputs = [] } = testSummary;

  return (
    <div className="flex-grow overflow-auto scrollbar-thin">
    <div className="flex flex-col flex-wrap gap-4">
      {inputs.map((testCase, index) => {
        const { status } = results[index]; 
        const {error} = results[index]// Handle case if results array is shorter
        return (
          <TestCaseCard
            key={index}
            testCase={testCase}
            expectedOutput={expectedOutputs[index]}
            status={status || 'Unknown'} // Default to 'Unknown' if status is not present
            index={index}
            error={error}
          />
        );
      })}
    </div>
    </div>
  );
};

export default TestCaseList;
