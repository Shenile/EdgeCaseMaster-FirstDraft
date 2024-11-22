import React from 'react'
import JsonFormat from '../Components/Documentation/JsonFormat';
import CodeInputGuide from '../Components/Documentation/CodeInputGuide';
import Footer from '../Components/Footer';


export default function Documentation() {
  return (
    <div className='pt-8 p-4 bg-surface-a0 lg:px-48 md:px-24 sm:px-8 xs:px-8'>
    <CodeInputGuide />
    <JsonFormat />
    </div>
    
  );
}
