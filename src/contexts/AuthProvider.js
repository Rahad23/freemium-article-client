import React, { useState, useEffect } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebaseConfig";

export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loginUser, setLoginUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //Create User Account
  const createUserAccount = (email, password) => {
    setLoading(true);
    localStorage.setItem("userId", loginUser?._id);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Login with Password
  const loginUserAccount = (email, password) => {
    setLoading(true);
    // localStorage.setItem("userId", loginUser?._id);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Update Name
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //Google Signin
  const signInWithGoogle = () => {
    setLoading(true);
    // localStorage.setItem("userId", loginUser?._id);
    return signInWithPopup(auth, googleProvider);
  };

  //Logout
  const logoutUserAccount = () => {
    setLoading(true);
    localStorage.removeItem("userId");
    localStorage.removeItem("freeMiumToken");
    return signOut(auth);
  };

  const deleteUserAccount = (email) => {
    setLoading(true);
    return deleteUser(auth, email);
  };

  //Forget Password
  const resetUserAccountPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setLoginUser(data));
  }, [user]);

  useEffect(() => {
    //this part will execute once the component is mounted.
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (user?.uid) {
        return localStorage.setItem("userId", loginUser?._id);
      }
      setLoading(false);
    });

    return () => {
      //this part will execute once the component is unmounted.

      return unSubscribe();
    };
  }, [user, loginUser]);

  const authInfo = {
    user,
    createUserAccount,
    updateUserProfile,
    signInWithGoogle,
    logoutUserAccount,
    loginUserAccount,
    deleteUserAccount,
    resetUserAccountPassword,
    loading,
    setLoading,
    loginUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
