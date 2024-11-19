import React, { useState, useEffect } from 'react';
import TestCaseList from './TestCaseList';

export default function QuickTestResult({ quickTestResults, setTestSummary }) {
   

  const {tests_summary} = quickTestResults;
  setTestSummary(tests_summary);


  return (    
      <TestCaseList
        results={quickTestResults.results}
        tests_summary={tests_summary}
      />
  );
};