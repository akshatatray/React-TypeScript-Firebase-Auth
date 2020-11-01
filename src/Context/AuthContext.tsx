import React, { useContext, useState, useEffect } from "react"
import { auth } from "../Config/Firebase"

const AuthContext = React.createContext<any>(null)

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const signup = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  const signin = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  const signout = () => {
    return auth.signOut()
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signin,
    signup,
    signout,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}