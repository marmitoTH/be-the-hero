import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import GlobalStyles from './assets/styles/global'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path='/cadastrar' component={SignUp} />
      <Route path='/dashboard' component={Dashboard} />
      <GlobalStyles />
    </BrowserRouter>
  )
}

export default App
