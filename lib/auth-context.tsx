"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
    email: string;
    name: string;
    role: 'admin' | 'investor';
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => boolean;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock credentials
const ADMIN_CREDENTIALS = {
    email: 'vitaliy.florin@balviaproperties.com',
    password: 'balvia6',
    name: 'Vitaliy Florin',
    role: 'admin' as const
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Check for existing session
        const storedUser = localStorage.getItem('balvia_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (email: string, password: string): boolean => {
        if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
            const userData = {
                email: ADMIN_CREDENTIALS.email,
                name: ADMIN_CREDENTIALS.name,
                role: ADMIN_CREDENTIALS.role
            };
            setUser(userData);
            localStorage.setItem('balvia_user', JSON.stringify(userData));
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('balvia_user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
