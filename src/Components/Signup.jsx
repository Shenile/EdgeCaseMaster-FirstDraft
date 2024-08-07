// SignUp.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom';
import LoadingCircle from './Utils/Loading';
import { showToast } from './toastUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false)
      showToast('Signed Up Successfully', 'success')
      navigate('/')
      // Redirect to a protected page or show success message
    } catch (error) {
      // Handle error
      setLoading(false);
      showToast(error, 'error')
    }
  };
  
  const handleBack = (e) => {
    e.preventDefault();
    navigate('/'); // Navigate to the previous page
  };

  
  return (
    <div className="xs:mx-8 md:max-w-md md:mx-auto mt-10">
      <button><FontAwesomeIcon icon={faArrowLeft} className='p-3 bg-gray-200 rounded-full mb-4' onClick={handleBack} /></button>
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className={`w-full ${loading ? 'bg-white ' : 'bg-red-500 hover:bg-red-600'}text-white mt-4 py-2 px-4 rounded-md  `}
          
        >  { loading ? (<div className=''><LoadingCircle/></div>):
          ('Login')}
        </button>

        
       
        
      </form>
    </div>
  );
};

export default SignUp;
