import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'

export type ProtectedRouteProps = {
  isAuthenticated: boolean
  authenticationPath: string
} & RouteProps

export default function ProtectedRoute({
  isAuthenticated,
  authenticationPath,
  ...routeProps
}: ProtectedRouteProps): JSX.Element {
  if (isAuthenticated) {
    return <Route {...routeProps} />
  } else {
    return <Redirect to={{ pathname: authenticationPath }} />
  }
}
