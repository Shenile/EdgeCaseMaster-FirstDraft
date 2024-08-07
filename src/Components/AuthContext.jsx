import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebaseConfig'; // Adjust the path as needed
import { onAuthStateChanged } from 'firebase/auth';

import { getAuth, signOut } from 'firebase/auth';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  
  const logout = async() => {
  
    return signOut(auth);

    
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);
  
  const value = {
    user,
    logout,

  };
  return (
    <AuthContext.Provider value={ value }>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
