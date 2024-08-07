// Login.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom';
import { showToast } from './toastUtils';
import LoadingCircle from './Utils/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      showToast('Signed in successfully', 'success');
      navigate('/')
      
    } catch (error) {
      setLoading(false);
      let errorMessage = 'An error occurred';
  
      switch (error.code) {
        case 'auth/invalid-credential':
          errorMessage = 'Invalid email address / password';
          break;
        case 'auth/user-disabled':
          errorMessage = 'User account is disabled.';
          break;
        case 'auth/user-not-found':
          errorMessage = 'No user found with this email.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password.';
          break;
        case 'auth/network-request-failed':
          errorMessage = 'Network error. Please try again.';
          break;
        default:
          errorMessage = error.message;
      }
      showToast(errorMessage, 'error');
    
    }
  };
  
  const handleBack = (e) => {
    e.preventDefault();
    navigate('/'); // Navigate to the previous page
  };

  
  return (
    <div className="xs:mx-8 md:max-w-md md:mx-auto mt-10">
      <button><FontAwesomeIcon icon={faArrowLeft} className='p-3 bg-gray-200 rounded-full mb-4' onClick={handleBack} /></button>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
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
          className={`w-full ${loading ? 'bg-white' : 'bg-red-500 '}text-white mt-4 py-2 px-4 rounded-md hover:bg-red-600 `}
          
        >  { loading ? (<div className=''><LoadingCircle/></div>):
          ('Login')}
        </button>

        
       
       
      </form>

      <div className='xs:flex xs:flex-col xs:items-center md:flex md:gap-4 justify-center p-4'>
            <p >Don't Have an account ? </p>
            <button className='text-red-500 hover:text-red-600 underline' onClick={()=> navigate('/signup')}>Sign up</button>
        </div>
    </div>
  );
};

export default Login;
