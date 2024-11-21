import React, { useState } from 'react';
import { dbFirestore } from '../firebaseConfig'; // Import the Firestore instance
import { doc, setDoc } from 'firebase/firestore';
import { showToast } from '../toastUtils';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const feedbackId = new Date().toISOString(); // Generate a unique ID based on the current timestamp
      await setDoc(doc(dbFirestore, 'feedback', feedbackId), {
        name,
        email,
        feedback,
        timestamp: new Date(),
      });
      setIsLoading(false);
      showToast('Feedback submitted successfully', 'success');

      setName('');
      setEmail('');
      setFeedback('');
    } catch (error) {
      setIsLoading(false);
      showToast('Error submitting feedback. Please try again.', 'error');
    }
  };

  return (
    <div className="relative h-fit mt-12 border border-surface-a90 rounded-lg p-4">
      {/* Loading Bar */}
      {loading && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy via-blue-300 to-blue-500 animate-gradient rounded-t"></div>

      )}

      <form onSubmit={handleSubmit} className="relative">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="mb-2 text-gray-300">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 p-2 bg-surface-a10 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="mb-2 text-gray-300">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 p-2 bg-surface-a10 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="feedback" className="text-gray-300">
            Feedback:
          </label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="mb-4 p-2 bg-surface-a10 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows="4"
            cols="50"
            required
          />
        </div>

        {/* Conditionally Render Button */}
        {!loading && (
          <button
            type="submit"
            className="text-white px-4 py-2 rounded-full bg-blue-600 border border-blue-600 hover:bg-blue-700 focus:outline-none"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default FeedbackForm;
