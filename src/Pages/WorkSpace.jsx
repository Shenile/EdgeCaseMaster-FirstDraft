import React, { useState } from 'react';
import Code_Input from '../Components/Code_Input';
import TestCase from '../Components/TestCase';
import DisplayArray from '../Components/DisplayArray';
import Navbar from '../Components/Navbar';
import { faL } from '@fortawesome/free-solid-svg-icons';

export default function WorkSpace() {
    const [code, setCode] = useState('');
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [result, setResult] = useState([]);
    

    const [inputCollection, setInputCollection] = useState([]);
    const [outputCollection, setOutputCollection] = useState([]);
    const [isQuicktest, setQuicktest] = useState(false);
    const [quickTestResults, setQuickTestResults] = useState([]);
    const [isloading, setIsLoading] = useState(false)
    

    return (
        <div className="bg-surface-a0 flex flex-col h-full py-2">
             
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center px-4 h-full md:overflow-hidden xs:overflow-auto">
                <div className='bg-surface-a10 px-4 py-4 w-full md:w-1/2 flex flex-col gap-4 rounded-md h-full'>
                    <div className='px-2 flex flex-col h-full md:overflow-hidden xs:overflow-auto'>
                        <Code_Input setCode={setCode} />
                        <TestCase
                            setInput={setInput}
                            setOutput={setOutput}
                            inputCollection={inputCollection}
                            outputCollection={outputCollection}
                            code={code}
                            input={input}
                            output={output}
                            setResult={setResult}
                            setIsLoading = {setIsLoading}
                            setQuicktest={setQuicktest}
                            quickTestResults={quickTestResults}
                        />
                    </div>
                </div>
                <div className='w-full md:w-1/2 h-full flex flex-col  rounded-md md:overflow-hidden xs:overflow-auto'>
                    <DisplayArray
                        inputCollection={inputCollection}
                        outputCollection={outputCollection}
                        setInputCollection={setInputCollection}
                        setOutputCollection={setOutputCollection}
                        setResult={setResult}
                        setQuicktest={setQuicktest}
                        isQuicktest={isQuicktest}
                        code={code}
                        result={result}
                        quickTestResults={quickTestResults}
                        setIsLoading = {setIsLoading}
                        isloading={isloading}
                       
                    />
                </div>
            </div>
        </div>
    );
}
