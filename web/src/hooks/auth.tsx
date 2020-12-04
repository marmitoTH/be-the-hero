import React, {
  createContext,
  useContext,
  useState
} from 'react'

import api from '../services/api'

interface IAuthContext {
  token: string

  signIn(id: string): Promise<void>
  signOut(): void
}

interface IAuth {
  token: string
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState<IAuth>(() => {
    const token = localStorage.getItem('@be-the-hero/token')

    if (token) {
      return { token }
    }

    return {} as IAuth
  })

  const signIn = async (id: string) => {
    await api.post('/sessions', { id })
      .then(response => {
        const { token } = response.data

        localStorage.setItem('@be-the-hero/token', token)

        setAuth({ token })
      })
  }

  const signOut = () => {
    localStorage.removeItem('@be-the-hero/token')
    setAuth({} as IAuth)
  }

  return (
    <AuthContext.Provider value={{
      token: auth.token,
      signIn,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthContext')
  }

  return context
}

export { AuthProvider, useAuth }
