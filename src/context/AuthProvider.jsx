import React, { createContext, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState(null)

    setUserData(getLocalStorage())

  return (
    <div>
      <AuthContext.Provider value={"Aarya"}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
