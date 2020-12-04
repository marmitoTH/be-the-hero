import React from 'react'
import { useAuth } from '../../hooks/auth'
import { Redirect, Route, RouteProps } from 'react-router-dom'

interface Props extends RouteProps {
  isPrivate?: boolean
  redirectTo: string
  component: React.ComponentType
}

const AuthRoute: React.FC<Props> = ({
  isPrivate = false,
  redirectTo,
  component: Component,
  ...rest
}) => {
  const { ong } = useAuth()

  return (
    <Route
      {...rest}
      render={() => {
        if (isPrivate === !!ong) {
          return <Component />
        }

        console.log('redirecting')
        return <Redirect to={{ pathname: redirectTo }} />
      }}
    />
  )
}

export default AuthRoute
