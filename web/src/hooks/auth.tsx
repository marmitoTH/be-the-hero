import React, {
  createContext,
  useContext,
  useState
} from 'react'

import api from '../services/api'

interface IAuthContext {
  ong: object
  token: string

  signIn(id: string): Promise<void>
  signOut(): void
}

interface IAuth {
  ong: object
  token: string
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState<IAuth>(() => {
    const token = localStorage.getItem('@be-the-hero/token')
    const ong = localStorage.getItem('@be-the-hero/ong')

    if (token && ong) {
      return {
        token,
        ong: JSON.parse(ong)
      }
    }

    return {} as IAuth
  })

  const signIn = async (id: string) => {
    await api.post('/sessions', { id })
      .then(response => {
        const { token, ong } = response.data

        localStorage.setItem('@be-the-hero/token', token)
        localStorage.setItem('@be-the-hero/ong', token)

        setAuth({ token, ong })
      })
  }

  const signOut = () => {
    localStorage.removeItem('@be-the-hero/token')
    localStorage.removeItem('@be-the-hero/ong')

    setAuth({} as IAuth)
  }

  return (
    <AuthContext.Provider value={{
      token: auth.token,
      ong: auth.ong,
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
