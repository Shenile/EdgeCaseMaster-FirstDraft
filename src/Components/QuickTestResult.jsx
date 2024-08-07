import React, { useState, useEffect } from 'react';
import TestCaseList from './TestCaseList';

export default function QuickTestResult({ quickTestResults }) {
   

  const {testSummary } = quickTestResults;



  return (

      
      <TestCaseList
        results={quickTestResults.results}
        testSummary={testSummary}
      />

  );
};