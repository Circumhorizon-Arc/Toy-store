import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // { name, email, role: 'user' | 'admin' }
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (email, password) => {
        // Mock login
        if (email === 'admin@toys.com' && password === 'admin') {
            setUser({ name: 'Admin User', email, role: 'admin' });
            setIsAuthenticated(true);
            return true;
        }
        // Mock user login
        setUser({ name: 'John Doe', email, role: 'user' });
        setIsAuthenticated(true);
        return true;
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
    };

    const signup = (name, email, password) => {
        setUser({ name, email, role: 'user' });
        setIsAuthenticated(true);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout, signup }}>
            {children}
        </AuthContext.Provider>
    );
};
