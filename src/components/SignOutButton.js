import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const SignOutButton = () => {
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('User signed out');
    }).catch((error) => {
      // An error happened.
      console.error('Error during sign-out:', error);
    });
  };

  return (
    <button onClick={handleSignOut}>Sign Out</button>
  );
};

export default SignOutButton;
