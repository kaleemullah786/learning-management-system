import { createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from  './firebase'

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {

    // create new user
    const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user
    const login = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
    }

    return (
      <UserContext.Provider value={{createUser, login}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
  return useContext(UserContext);
};