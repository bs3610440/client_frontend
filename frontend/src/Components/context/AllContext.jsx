import { use } from 'react';
import { useState, createContext, useContext } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}



export function AuthProvider({ children }) {

  const [login, setLogIn] = useState(false);
  const [Profile, setProfile] = useState({})
 console.log(Profile)
  const value = { login, setLogIn, Profile, setProfile }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}