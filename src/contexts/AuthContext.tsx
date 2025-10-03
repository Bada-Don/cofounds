"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthUser {
  id: string;
  email: string;
  fullName: string;
}

interface SignInData {
  email: string;
  password: string;
}

interface SignUpData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  signIn: (data: SignInData) => Promise<void>;
  signUp: (data: SignUpData) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(false);

  const signIn = async (data: SignInData) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Demo: Accept any email/password combination for demo purposes
      if (data.email && data.password) {
        const mockUser: AuthUser = {
          id: '1',
          email: data.email,
          fullName: 'Demo User'
        };
        setUser(mockUser);
      } else {
        throw new Error('Invalid credentials');
      }
    } catch {
      throw new Error('Sign in failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (data: SignUpData) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Basic validation
      if (data.password !== data.confirmPassword) {
        throw new Error('Passwords do not match');
      }
      
      if (data.password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }
      
      // Demo: Create account for any valid data
      const mockUser: AuthUser = {
        id: '1',
        email: data.email,
        fullName: data.fullName
      };
      setUser(mockUser);
    } catch (error: unknown) {
      throw error instanceof Error ? error : new Error('Sign up failed');
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      // Simulate Google OAuth
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: AuthUser = {
        id: '1',
        email: 'demo@google.com',
        fullName: 'Google Demo User'
      };
      setUser(mockUser);
    } catch {
      throw new Error('Google sign in failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      setUser(null);
    } catch {
      throw new Error('Sign out failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const value: AuthContextType = {
    user,
    loading,
    signIn,
    signUp,
    signInWithGoogle,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}