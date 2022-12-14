import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from  './firebase'

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})
    // create new user
    const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user
    const login = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
    }

    //get current user information
    useEffect(() => {
      const user = onAuthStateChanged(auth, (currentUser)=>{
        console.log(currentUser);
        setUser(currentUser)
      })
      return () =>{
        user()
      }
    }, [])
    return (
      <UserContext.Provider value={{createUser, login, user}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
  return useContext(UserContext);
};