import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from 'firebase/auth'
import { auth } from "../Firebase";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [currUser, setCurrUser] = useState(null)
    const SigninWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
    }
    const logOut = () => {
        signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrUser(user)
        })
        return unsubscribe
    }, [])
    return (
        <AuthContext.Provider value={{ currUser, SigninWithGoogle, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return (
        useContext(AuthContext)
    )
}