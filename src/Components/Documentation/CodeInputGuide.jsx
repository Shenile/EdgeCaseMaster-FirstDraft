import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default function CodeInputGuide() {
  return (
    <div className="flex-grow ">
      <section className="mb-8">
        <h2 className="xs:text-lg md:text-xl font-semibold mb-4 flex items-center">
          <FontAwesomeIcon icon={faCode} className="text-blue-500 mr-3" />
          Code Input Guide: Python Function Requirements
        </h2>
        <p className="text-base mb-4">
          For optimal processing and execution, ensure that your Python code adheres to the following guidelines:
        </p>
        
        <div className="flex flex-col bg-gray-200 xs:px-2 xs:py-3 md:p-4 rounded-lg mb-6">
          <h3 className="text-base font-semibold mb-2">Code Structure</h3>
          <p className="mb-2">
            The code should be written in Python and must be enclosed within a function. The function should accept parameters as needed and must return a result. Ensure that your function is well-defined and performs the intended operations correctly.
          </p>
          <pre className="w-full bg-white px-3 py-2 rounded-lg text-base overflow-x-auto">
            def example_function(param):
                # Your code here
                return result
          </pre>
        </div>

        <div className="flex flex-col gap-2 mb-8 text-gray-800">
          <h2 className="text-lg font-semibold mb-4">Code Submission Tips</h2>
          <p className="text-base mb-4">
            <span className='font-semibold text-base'>Function Name:</span> <br/>
            Choose a descriptive name for your function that reflects its purpose.
          </p>
          <p className="text-base mb-4">
            <span className='font-semibold text-base'>Parameters:</span> <br/>
            Define parameters clearly if your function requires inputs.
          </p>
          <p className="text-base mb-4">
            <span className='font-semibold text-base'>Return Value:</span> <br/>
            Ensure that your function returns a value that matches the expected output format.
          </p>
        </div>
      </section>
    </div>
  );
}
