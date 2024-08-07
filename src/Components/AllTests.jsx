import React from "react";
import TestCaseList from "./TestCaseList";

export default function AllTests({ results }) {

  const { testSummary } = results;

  console.log("result and text summary from quicktestresult", testSummary);
  return (
    <TestCaseList
      results={results.results}
      testSummary={testSummary}
    />
  );
}
