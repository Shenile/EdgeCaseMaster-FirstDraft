import React, { useState } from 'react';
import { dbFirestore } from '../firebaseConfig'; // Import the Firestore instance
import { doc, setDoc } from 'firebase/firestore';
import LoadingCircle from '../Utils/Loading';
import { showToast } from '../toastUtils';
const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loading, setIsloading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsloading(true)
      const feedbackId = new Date().toISOString(); // Generate a unique ID based on the current timestamp
      await setDoc(doc(dbFirestore, 'feedback', feedbackId), {
        name,
        email,
        feedback,
        timestamp: new Date()
      });
      setIsloading(false);
      showToast('Feedback submitted Successfully', 'success')
   
      setName('');
      setEmail('');
      setFeedback('');
    } catch (error) {
       setIsloading(false);
  
    }
  };

  return (
   
      <form onSubmit={handleSubmit} className="mb-8">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            value={feedback}
            className="mb-4 p-2 border border-gray-300 rounded w-full"
            onChange={(e) => setFeedback(e.target.value)}
            rows="4"
            cols="50"
            required
          />
        </div>
        <button
          type="submit"
          className={`w-48 ${loading ? 'bg-white' : 'bg-red-500 text-center'} text-white mt-4 py-2 px-4 rounded-md  `}
          
        >  { loading ? (<div className=''><LoadingCircle/></div>):
          ('submit')}
        </button>
       
      </form>
   
  );
};

export default FeedbackForm;
