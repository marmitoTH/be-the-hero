import React from 'react'
import AuthRoute from './components/AuthRoute'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import GlobalStyles from './assets/styles/global'
import { AuthProvider } from './hooks/auth'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AuthRoute
          path='/'
          exact
          redirectTo='/dashboard'
          component={Home}
        />
        <AuthRoute
          path='/cadastrar'
          redirectTo='/dashboard'
          component={SignUp}
        />
        <AuthRoute
          path='/dashboard'
          isPrivate
          redirectTo='/'
          component={Dashboard}
        />
        <AuthRoute
          path='/cadastrar-caso'
          isPrivate
          redirectTo='/'
          component={Register}
        />
      </AuthProvider>
      <GlobalStyles />
    </BrowserRouter>
  )
}

export default App
