import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';
import { ADMIN_EMAIL, ADMIN_PASSWORD } from '../constants';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => User;
  logout: () => void;
  register: (email: string, password: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, password: string): User => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const adminUser: User = { email: ADMIN_EMAIL, role: 'admin' };
      localStorage.setItem('user', JSON.stringify(adminUser));
      setUser(adminUser);
      return adminUser;
    }

    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = storedUsers.find((u: any) => u.email === email && u.password === password);

    if (foundUser) {
      const regularUser: User = { email: foundUser.email, role: 'user' };
      localStorage.setItem('user', JSON.stringify(regularUser));
      setUser(regularUser);
      return regularUser;
    } else {
      throw new Error('Invalid email or password');
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const register = (email: string, password: string) => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = storedUsers.find((u: any) => u.email === email);

    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    const newUser = { email, password };
    storedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(storedUsers));
  };
  

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
