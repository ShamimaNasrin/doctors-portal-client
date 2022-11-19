import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);


    //create user
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //Login
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //input userName 
    const UpdateUser = (userInfo) =>{
        return updateProfile(user, userInfo)

    }

    //save user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, [])

    //Log Out
    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        signUp,
        user,
        signIn,
        logOut,
        UpdateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;