import React from 'react'
import TestCaseList from './TestCaseList';

export default function AllTestsResults({ result }) {
   
  console.log('quicktest and results', result, )
  const {testSummary } = result;

  console.log('result and text summary from quicktestresult', testSummary)

  return (
    <div>
      <h1>Test Case Results</h1>
      <TestCaseList
        results={result.results}
        testSummary={testSummary}
      />
    </div>
  );
};