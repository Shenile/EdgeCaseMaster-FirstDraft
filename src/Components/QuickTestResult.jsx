import React, { useState, useEffect } from 'react';
import TestCaseList from './TestCaseList';

export default function QuickTestResult({ quickTestResults }) {
   
  console.log('quicktest and results', quickTestResults, )
  const {testSummary } = quickTestResults;

  console.log('result and text summary from quicktestresult', testSummary)

  return (

      
      <TestCaseList
        results={quickTestResults.results}
        testSummary={testSummary}
      />

  );
};