import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo, faInfoCircle, faTachometerAlt  } from '@fortawesome/free-solid-svg-icons';
import { faEdit as faEditRegular, faTrashAlt as faTrashAltRegular } from '@fortawesome/free-regular-svg-icons';
import { ToastContainer } from 'react-toastify';
import { showToast } from './toastUtils';
import TestButton from './Utils/TestButtons';
import { runTests } from '../services/api';
import { parseData } from '../utils/utils';
import QuickTestResult from './QuickTestResult';
import LoadingCirce from './Utils/Loading';

export default function DisplayArray({ 
  inputCollection, outputCollection, result, 
  setInputCollection, setOutputCollection, code, 
  setResult, setQuicktest, isQuicktest, isloading, setIsLoading 
}) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [statuses, setStatuses] = useState([]);
  const [editIndex, setEditIndex] = useState(null); 
  const [editInput, setEditInput] = useState('');
  const [editOutput, setEditOutput] = useState('');
  const [shouldRunTests, setShouldRunTests] = useState(false);


  console.log(isloading)

  useEffect(() => {
    updateStatuses();
  }, [inputCollection, result]);
  
  useEffect(() => {
    if (shouldRunTests) {
      runAllTests();
      setShouldRunTests(false);
    }
  }, [shouldRunTests]);
    
  const updateStatuses = () => {
    setStatuses(inputCollection.map((_, index) => 
      result.length === 0 ? null : result[index]?.status || 'Pending'
    ));
  };

  const runAllTests = async () => {
    setIsLoading(true);
    setResult([]);

    const inputString = JSON.stringify(inputCollection);
    const outputString = JSON.stringify(outputCollection);

    
    try{
      
      const response = await runTests(code, inputString, outputString);
      if (response.error) {
        setIsLoading(false);
        showToast(response.error, 'error');
    } else {
        console.log(response.data.results);
        
        setResult(response.data.results);
        setQuicktest(false);
        setIsLoading(false);
    }
 
    } catch (err) {
      setIsLoading(false);
      showToast(err.message, 'error');
  }
    
  };
  
  const handleDelete = (index) => {
    setInputCollection(prevInputCollection => prevInputCollection.filter((_, i) => i !== index));
    setOutputCollection(prevOutputCollection => prevOutputCollection.filter((_, i) => i !== index));
    setStatuses(prevStatuses => prevStatuses.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditInput(JSON.stringify(inputCollection[index]));
    setEditOutput(JSON.stringify(outputCollection[index]));
  };

  const handleUpdate = async() => {
    console.log('i am clicked')
    if (editIndex !== null) {
      const { parsedInput, parsedOutput, error } = parseData(editInput, editOutput);
      if (parsedInput && parsedOutput) {
        const updatedInputs = [...inputCollection];
        const updatedOutputs = [...outputCollection];
       
        updatedInputs[editIndex] = parsedInput;
        updatedOutputs[editIndex] = parsedOutput;
    
        setInputCollection(updatedInputs);
        setOutputCollection(updatedOutputs);
       
        setShouldRunTests(true);
        setEditIndex(null);
        setEditInput('');
        setEditOutput(''); 
        
     
      } else {
        showToast(error, 'error');
      }
    }
  };

  const handleClick = (setQuicktest) => {
    setQuicktest(false);
    
    setResult([]);
  };

  const spinStyle = {
    transition: 'transform 1s linear',
    transform: isSpinning ? 'rotate(360deg)' : 'none',
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Passed':
        return 'bg-green-100 bg-opacity-50';
      case 'Failed':
        return 'bg-red-100 bg-opacity-50';
      case 'Pending':
        return 'bg-yellow-100 bg-opacity-50';
      default:
        return 'bg-gray-100 bg-opacity-50';
    }
  };



  return (
    <div className="container mx-auto p-4 flex flex-col h-full tracking-wide">
      <div className="flex justify-between items-center gap-4 text-base font-semibold mb-4">
        <div className="flex items-center gap-2">
          <h1 className='text-base text-gray-900'>Test Cases and Outputs</h1>
          <button onClick={() => handleClick(setQuicktest) } className="w-8 h-8 hover:bg-gray-200 rounded-md flex items-center justify-center">
            <FontAwesomeIcon icon={faRedo} className={`text-gray-700 ${isSpinning ? 'animate-spin-once' : ''}`} style={spinStyle} />
          </button>
          
        </div>
        <button
          onClick={() => {
            setInputCollection([]);
            setOutputCollection([]);
            setResult([]);
            setQuicktest(false);
          }}
          className="px-3 py-1 text-base text-white bg-red-500  hover:bg-red-600 shadow-md rounded-md"
        >
          Clear All
        </button>
      </div>
      {isQuicktest ? (
        <>
        {(isloading) ? (( <LoadingCirce/>)):(
          <>
        <div className='my-2 flex gap-2 items-center bg-red-500 bg-opacity-15 p-2 border rounded-md'>
        <FontAwesomeIcon icon={faInfoCircle} className='p-2 text-yellow-700 text-opacity-75'/>
        <p className='text-sm tracking-wide leading-normal'>Please note that quick test results are dynamic and not stored permanently. 
        They will update based on the current data or inputs provided.
        </p>
        
        </div>
        
        <QuickTestResult quickTestResults={result} /></>) }
        
        </>
       
      ) : (
      <>
       {(isloading) ? (<LoadingCirce/>): ( 
        <div className="flex-grow overflow-auto">
          <div className="flex flex-col flex-wrap gap-4">
            {inputCollection.map((testCase, index) => {
              const expectedOutput = outputCollection[index];
              const status = statuses[index];
              const testResult = result[index] || {};
              
              return (
                <div
                  key={index}
                  className={`flex-1 min-w-[300px] rounded-md shadow-lg p-4 border ${getStatusClass(status)}`}
                > 

                  <div className='flex justify-between'>
                  <h2 className="text-base font-semibold mb-2">Test Case {index + 1}</h2>
                  <div className='flex justify-end gap-2'>
                  <button  className='px-2 bg-transperant text-gray-700 hover:bg-gray-300 rounded-md'
                           onClick={()=> handleEdit(index)}>
                   <FontAwesomeIcon icon={faEditRegular} />
                   </button> 
                   <button  className='px-2 bg-transperant text-red-500 hover:bg-gray-300 rounded-md' 
                            onClick={()=> handleDelete(index)}>
                   <FontAwesomeIcon icon={faTrashAltRegular} />
                   </button> 
            
                  </div>
                  
                  </div>
                 
                  <div className="mb-4">
                    <h3 className="text-base font-semibold">Input :</h3>
                    {editIndex === index ? 
                    ( <div className='w-full flex gap-4'>
                      <textarea
                        rows='1'
                        className=" w-full h-fit my-1 p-2 text-gray-700 tracking-wide 
                                  font-code border border-gray-500 rounded focus:border-opacity-0 
                                  focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder=''
                        value={editInput}
                        onChange={(e) => setEditInput(e.target.value)}
                      />
                      
                    </div>):
                     (
                      <p className="my-1 text-gray-700 tracking-wide font-code">
                      {JSON.stringify(testCase)}</p>
                     )
                    }
                    
                  </div>
                  <div className="mb-4">
                    <h3 className="text-base font-semibold">Expected Output :</h3>
                    {editIndex === index ? 
                    (
                      <div className='w-full flex gap-4'>
                      <textarea
                        rows='1'
                        className="w-full h-fit my-1 p-2 text-gray-700 tracking-wide 
                                  font-code border border-gray-500 rounded focus:border-opacity-0 
                                  focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder=''
                        value={editOutput}
                        onChange={(e) => setEditOutput(e.target.value)}
                      />
                      
                    </div>
                    ):
                    (<p className="my-1 text-gray-700 font-code">{JSON.stringify(expectedOutput)}</p>)
                    }
                    {editIndex === index && (

                    <TestButton label="Update" 
                    className="my-2 w-fit h-8 text-white px-2 rounded-md " 
                    onClick={handleUpdate} />
                    
                    )}
                  </div>
                  {status && (
                    <div>
                      <h3 className="font-semibold">Status:</h3>
                      <p className={`text-base ${status === 'Passed' ? 'text-green-500' : status === 'Failed' ? 'text-red-500' : 'text-gray-500'}`}>
                        {status}
                      </p>
                    </div>
                    
                  )}
                  {status === 'Failed' && testResult.error && (
                    <div className="mt-4">
                      <h3 className="font-semibold">Error:</h3>
                      <p className="text-red-500 font-code">{result[index].error}</p>
                   </div>
                 )}
                </div>
              );
            })}
          </div>
          <div>
        
          </div>
        </div>  )}
        
       </> 
      )}
        <div className='w-full border border-red-500 px-4 py-2 mt-4 flex gap-4 justify-end'>
 
          <TestButton label="test" className="w-fit h-8 text-white px-2 rounded-md " />
          <TestButton label="Run all tests" onClick={runAllTests} className="w-fit h-8 text-white px-2 rounded-md " />
        </div>
        
    </div>
    
  );
}
