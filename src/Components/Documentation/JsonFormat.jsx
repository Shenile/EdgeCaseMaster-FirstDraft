import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import FeatureList from '../Home/Features';

export default function JsonFormat() { 

   
    const outputExamples = [
        {
          desc: 'A single number : ',
          code: '42',
        },
        {
          desc: 'An array of numbers : ',
          code: '[10, 20, 30]',
        },
        {
          desc: 'An array of strings : ',
          code: '["foo", "bar"]',
        },
      ];
  return (
    <div className="flex-grow ">
      <section className="mb-8">
        <h2 className="xs:text-lg md:text-xl font-semibold mb-4 flex items-center">
          <FontAwesomeIcon icon={faBook} className="text-green-500 mr-3" />
          JSON Array Structure: Input Requirements and Output Examples
        </h2>
        <p className="text-base mb-4">
          Our platform supports JSON arrays as input, which can be parsed and processed accordingly. The input must be a JSON array, and the output can be either a single value (number) or an array. Below are examples of valid JSON arrays to guide you on how to format your input.
        </p>
        
        {[
          {
            title: 'Array of Numbers',
            description: 'A simple JSON array containing numeric values.',
            example: '[1, 2, 3, 4, 5]',
          },
          {
            title: 'Array of Strings',
            description: 'A JSON array containing string values.',
            example: '["apple", "banana", "cherry"]',
          },
          {
            title: 'Array of Mixed Types',
            description: 'A JSON array containing mixed types, such as numbers and strings.',
            example: '[1, "two", 3, "four"]',
          },
          {
            title: 'Empty Array',
            description: 'A JSON array with no elements.',
            example: '[]',
          },
          {
            title: 'Nested Array',
            description: 'A JSON array that contains other arrays as elements.',
            example: '[ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]',
          },
          {
            title: 'Array with Boolean Values',
            description: 'A JSON array containing boolean values.',
            example: '[true, false, true]',
          },
          {
            title: 'Array with Null Values',
            description: 'A JSON array containing `null` values.',
            example: '[null, null, null]',
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col bg-gray-200 xs:px-2 xs:py-3 md:p-4 rounded-lg mb-6">
            <h3 className="text-base font-semibold mb-2">{item.title}</h3>
            <p className="mb-2">{item.description}</p>
            <pre className="w-full bg-white px-3 py-2 rounded-lg text-base overflow-x-auto">
              {item.example}
            </pre>
          </div>
        ))}

        <div className="flex flex-col gap-2 mb-8 text-gray-800">
          <h2 className="text-lg font-semibold mb-4">Input and Output Examples</h2>
          <p className="text-base mb-4">
            <span className='font-semibold text-base'>Valid JSON Array Inputs:</span> <br/>
            Ensure that your input adheres to these valid JSON formats. 
            The array must be enclosed in square brackets (<code>[]</code>) and elements should be separated by commas.
          </p>
          <p className="text mb-4">
          <span className='font-semibold text-base'>Output Examples:</span> <br/>
          The output can be either a single number or an array. For instance, given a valid JSON input, the output could be:
          </p>
      <div className='xs:flex flex-col md:flex-row gap-4'>
      {outputExamples.map((item, index) => (
        <div key={index} className="xs:flex xs:flex-col xs:px-2 xs:py-3  bg-gray-200 md:p-4 rounded-lg mb-6">
          <p className="mb-2 text-base">{item.desc}</p>
          <pre className="md:w-fit  bg-white px-3 py-2 rounded-lg text-base xs:overflow-x-auto xs:w-full">
            {item.code}
          </pre>
        </div>
      ))}
  
        </div> 
      
          
        </div>
      </section>
    </div>
  );
}
