import React from 'react';
import { auth, GoogleAuthProvider, signInWithPopup } from '../firebase';

const SignInButton = () => {
  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Sign-in successful.
        console.log('User signed in:', result.user);
      })
      .catch((error) => {
        // Handle errors here.
        console.error('Error during sign-in:', error);
      });
  };

  return (
    <button onClick={handleSignIn}>Sign in with Google</button>
  );
};

export default SignInButton;
