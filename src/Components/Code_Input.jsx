import React from 'react';
import { Editor } from '@monaco-editor/react';
import * as monaco from '@monaco-editor/react';

// atom one - Dark theme Definition


export default function Code_Input({ setCode }) {
  const handleEditorChange = (value) => {
    setCode(value);
  };

  return (
    <div className=' flex flex-col gap-2'>
      <p className='text-md  tracking-wide leading-normal text-gray-300 my-4'> <span className='font-semibold'>Instruction</span> : Ensure that all code is encapsulated within a function and that any necessary inputs are passed as arguments.</p>
      <div className='border border-gray-500 p-1 rounded'>
      <Editor
        height="275px" // Adjust height to fit your design
        language="python" // Set language to Python
        
        theme="vs-dark" // You can choose other themes like 'vs-light'
        onChange={handleEditorChange}
        options={{
          fontSize: 16, // Adjust font size if needed
          fontFamily: 'JetBrains Mono, Fira Code, Source Code Pro, monospace',
          minimap: { enabled: false }, // Disable minimap if not needed
          lineNumbers: "on", // Show line numbers
          wordWrap: "on", // Enable word wrap
          automaticLayout: true, // Enable automatic layout adjustments
        }}
        className="monaco-editor font-code" // Apply custom class for styling
      />
      </div>
    
    </div>
  );
}
