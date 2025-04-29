import { createContext, useEffect, useState } from "react";
import { auth } from "../Config/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signinUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        setLoading(true);
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => unSubscribe();
    }, []);

    const sign_out = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authData = {
        user, loading, createUser, signinUser, sign_out
    };

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;