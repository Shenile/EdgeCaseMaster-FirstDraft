import React, { useState, useEffect } from 'react';
import TestCaseList from './TestCaseList';

export default function QuickTestResult({ quickTestResults }) {
   

  const {tests_summary} = quickTestResults;



  return (    
      <TestCaseList
        results={quickTestResults.results}
        tests_summary={tests_summary}
      />
  );
};