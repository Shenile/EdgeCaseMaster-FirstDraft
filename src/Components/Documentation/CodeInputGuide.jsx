import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; 
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'; 

export default function CodeInputGuide() {
  const codeString = `def example_function(param):
    # Code logic here
    return result`;

  return (
    <div className="flex-grow text-gray-300">
      <section className="mb-8">
        <h2 className="xs:text-lg md:text-2xl font-semibold mb-4 flex items-center">
          <FontAwesomeIcon icon={faCode} className="text-2xl text-blue-500 mr-3" />
          Python Function Guidelines
        </h2>
        <p className="text-lg mb-4">
          Follow these essential guidelines to ensure your Python code is structured properly for optimal processing and execution:
        </p>

        <div className="flex flex-col bg-surface-a10 xs:px-2 xs:py-3 md:p-4 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-2">Code Structure</h3>
          <p className="text-lg mb-2">
            Your code must be written as a Python function. The function should accept parameters, if necessary, and return a result. Ensure it’s well-structured and performs the desired operations correctly.
          </p>
       
          <SyntaxHighlighter
            language="python"
            style={dracula}
          >
            {codeString}
          </SyntaxHighlighter>

        </div>

        <div className="flex flex-col text-lg gap-2 mb-8 text-gray-300">
          <h2 className="font-semibold mb-4">Code Submission Tips</h2>
          <p className="mb-4">
            <span className="font-semibold">Function Name:</span> <br/>
            Use a descriptive name that clearly indicates the purpose of your function.
          </p>
          <p className="mb-4">
            <span className="font-semibold">Parameters:</span> <br/>
            Define parameters clearly, especially if your function requires inputs to work.
          </p>
          <p className="mb-4">
            <span className="font-semibold">Return Value:</span> <br/>
            Make sure your function returns a value that matches the expected output format.
          </p>
        </div>
      </section>
    </div>
  );
}
