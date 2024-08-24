import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "@/config/firebase";
import { userSliceActions } from "@/redux/user/index"; // Adjust the path as needed

interface AuthContextType {
  isLoggedIn: boolean;
  loading: boolean;
  currentUser: User | null; // Add this line
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<User | null>(null); // Add this line
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setCurrentUser(user); // Set current user
        dispatch(userSliceActions.setUserData({
          displayName: user.displayName || "",
          email: user.email || "",
          isMember: true,
          photoUrl: user.photoURL || "",
          uid: user.uid || "",
        }));
      } else {
        setIsLoggedIn(false);
        setCurrentUser(null); // Clear current user
        dispatch(userSliceActions.clearUserData());
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [dispatch]);

  const login = () => setIsLoggedIn(true);
  const logout = async () => {
    await signOut(auth);
    setIsLoggedIn(false);
    setCurrentUser(null); // Clear current user
    dispatch(userSliceActions.clearUserData());
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, loading, currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
