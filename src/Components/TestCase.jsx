import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faInfoCircle, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer } from 'react-toastify';
import { showToast } from './toastUtils';
import TestButton from './Utils/TestButtons';
import { runTests } from '../services/api';
import { parseData } from '../utils/utils';


export default function TestCase({ setInput, setOutput, inputCollection, outputCollection, input, output, setResult, code, setIsLoading, setQuicktest, quickTestResults }) {

  const handleAddTestCase = (input, output) => {
    setQuicktest(false);
    setResult([]);
    const { parsedInput, parsedOutput, error } = parseData(input, output);

    if (parsedInput && parsedOutput) {

        inputCollection.push(parsedInput);
        outputCollection.push(parsedOutput);
        setInput('');
        setOutput('');

    }else{
        showToast(error, 'error');
    }

    console.log('inputCollection:', inputCollection);
    console.log('outputCollection:', outputCollection);
  };

  const handleQuickTest = async (code, input, output) => {
    try {
        if (input && output && code) {
             
            console.log("I am executed");
            setIsLoading(true);
            const response = await runTests(code, input, output);
            
            if (response.error) {
              setIsLoading(false);
              console.log('i am the error')
              showToast(response.error, 'error');
            } else {
                setIsLoading(false);
                setResult(response.data);
                
                setQuicktest(true);
            }
        } else {
            setIsLoading(false);
            throw new Error('Code, input, and output data can\'t be empty');
        }
    } catch (err) {
      setIsLoading(false);
      console.log('i am the error')
        showToast(err.message, 'error');
    }
};

  

  return (
    <div className='flex flex-col'>
      
      <div className='w-full flex gap-4'>
        <textarea
          rows='2'
          className="w-full h-fit my-2 p-2 font-code border border-gray-500 rounded focus:border-opacity-0 focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder='Enter input values (e.g., [[1,2,3], [4,5]])'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <textarea
          rows='2'
          className="w-full h-fit my-2 p-2 font-code border border-gray-500 rounded focus:border-opacity-0 focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder='Enter output values (e.g., [4,5])'
          value={output}
          onChange={(e) => setOutput(e.target.value)}
        />
      </div>

      <div className='w-full px-4 py-2 mt-4  xs:flex-row xs:items-center  md:flex md:gap-4 md:justify-end '>
        <button onClick={() => handleQuickTest(code, input, output)} className='w-fit h-8 px-1 pr-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md xs:mb-4 md:mb-0 md:text-base' >
        <FontAwesomeIcon icon={faTachometerAlt} className='px-2'/>Quick test
        </button>
        
        <button onClick={() => handleAddTestCase(input, output)}
          className='flex gap-2 items-center h-8 w-fit bg-blue-600 text-white px-2 rounded hover:bg-blue-700'>
          <FontAwesomeIcon icon={faPlus} />
          <p>Add test case</p>
        </button>
      </div>

      <div className='mt-2 flex gap-2 items-center bg-red-500 bg-opacity-15 p-2 border rounded-md'>
        <FontAwesomeIcon icon={faInfoCircle} className='p-2 text-red-700 text-opacity-75' />
        <p className='text-sm tracking-wide leading-normal'>
          Note: <span className='font-semibold'>EdgeCaseMaster</span> currently supports creating and using test cases only for array data types. We’re working on adding more features soon. Thanks for your patience!
        </p>
      </div>

     <ToastContainer/>
    </div>
  );
}
