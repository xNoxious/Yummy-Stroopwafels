import React, { useState, createContext } from 'react';
import { loginRequest, registerRequest } from './authentication.service'
import { getAuth } from 'firebase/auth';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const auth = getAuth();
    auth.onAuthStateChanged((u) => {
        if (u) {
            setUser(u);
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
    });

    const onLogout = () => {
        auth.signOut()
            .then(() => {
                setUser(null);
                setError(null);
            });
    }

    const userFriendlyError = (error, defaultError) => {
        switch (error.code) {
            case 'auth/email-already-in-use':
                return ('Email already in use!');
            case 'auth/invalid-email':
                return ('Please provide a valid email!');
            case 'auth/weak-password':
                return ('Your password must be at least 6 characters long!');
            default:
                return (defaultError);
        }
    }

    const onLogin = (email, password) => {
        setIsLoading(true);

        loginRequest(email, password)
            .then((u) => {
                setUser(u);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setError(userFriendlyError(err, 'Unable to log in. Verify your e-mail and password are correct and try again!'));
                setIsLoading(false);
            });
    };

    const onRegister = (email, password, repeatedPassword) => {
        setIsLoading(true);
        if (password !== repeatedPassword) {
            setError('Error: Passwords do not match!');
        }

        registerRequest(email, password)
            .then((u) => {
                setUser(u);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(userFriendlyError(err, 'Unable to register. Verify your e-mail and passwords are correct and try again!'));
                setIsLoading(false);
            });
    }

    const value = {
        user,
        isLoading,
        error,
        isAuthenticated: !!user,
        onRegister: onRegister,
        onLogin: onLogin,
        onLogout: onLogout
    }

    return (
        <AuthenticationContext.Provider value={value}>
            {children}
        </AuthenticationContext.Provider>
    )
}