import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../firebase.config/firebase.config';
import { current } from 'daisyui/src/colors';

const auth = getAuth(app);

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const providerLogin = (provider) => {
        signInWithPopup(auth, provider)

    }

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => {
            unsubscribe()
        }
    }, [])


    const authInfo = {
        user,
        providerLogin,
        logOut,
        createUser,
        signInUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider