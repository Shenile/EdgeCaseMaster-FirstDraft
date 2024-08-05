import React from 'react'

export default function Documentation() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">EdgeCaseMaster Help</h1>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
          <p className="text-lg mb-6">
            EdgeCaseMaster allows you to test your code against various edge cases and scenarios. Below are some examples demonstrating how to use our platform effectively.
          </p>
        </section>
        
        <section>
          <h2 className="text-3xl font-semibold mb-4">Example 1: Array Reversal</h2>
          <p className="text-lg mb-4">
            This example demonstrates how to reverse an array and handle edge cases such as empty arrays and single-element arrays.
          </p>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-4">
            <h3 className="text-xl font-semibold mb-2">Function</h3>
            <pre className="text-gray-300">
              {`function reverseArray(arr) {
  // Handle edge cases
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  return arr.reverse();
}`}
            </pre>
            <h3 className="text-xl font-semibold mt-4 mb-2">Example Input</h3>
            <pre className="text-gray-300">
              {`{
  "input": [1, 2, 3, 4, 5]
}`}
            </pre>
            <h3 className="text-xl font-semibold mt-4 mb-2">Example Output</h3>
            <pre className="text-gray-300">
              {`{
  "output": [5, 4, 3, 2, 1]
}`}
            </pre>
          </div>

          <h2 className="text-3xl font-semibold mb-4">Example 2: Finding Maximum Value</h2>
          <p className="text-lg mb-4">
            This example shows how to find the maximum value in an array and handle cases where the array might be empty.
          </p>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-4">
            <h3 className="text-xl font-semibold mb-2">Function</h3>
            <pre className="text-gray-300">
              {`function findMaxValue(arr) {
  // Handle edge cases
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  if (arr.length === 0) {
    throw new Error("Array is empty");
  }
  return Math.max(...arr);
}`}
            </pre>
            <h3 className="text-xl font-semibold mt-4 mb-2">Example Input</h3>
            <pre className="text-gray-300">
              {`{
  "input": [10, 20, 30, 40, 50]
}`}
            </pre>
            <h3 className="text-xl font-semibold mt-4 mb-2">Example Output</h3>
            <pre className="text-gray-300">
              {`{
  "output": 50
}`}
            </pre>
          </div>

          <h2 className="text-3xl font-semibold mb-4">Example 3: Array Sum</h2>
          <p className="text-lg mb-4">
            This example demonstrates how to calculate the sum of all elements in an array, including handling non-numeric values.
          </p>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-4">
            <h3 className="text-xl font-semibold mb-2">Function</h3>
            <pre className="text-gray-300">
              {`function sumArray(arr) {
  // Handle edge cases
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  return arr.reduce((sum, num) => {
    if (typeof num !== 'number') {
      throw new Error("Array must contain only numbers");
    }
    return sum + num;
  }, 0);
}`}
            </pre>
            <h3 className="text-xl font-semibold mt-4 mb-2">Example Input</h3>
            <pre className="text-gray-300">
              {`{
  "input": [1, 2, 3, 4, 5]
}`}
            </pre>
            <h3 className="text-xl font-semibold mt-4 mb-2">Example Output</h3>
            <pre className="text-gray-300">
              {`{
  "output": 15
}`}
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}
