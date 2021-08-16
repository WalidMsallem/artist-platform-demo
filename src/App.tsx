import React, { useEffect, useState } from 'react'
import Login from './components/Login'
import Layout from './components/Layout'
import LandingPage from './components/LandingPage'
import PrivateRoute from './components/PrivateRoute'
import { useDispatch as _useDispatch, useSelector } from 'react-redux'
import userActionTypes from './features/constants/user.constants'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { selectisAuthenticated } from './features/selectors/user.selectors'
import history from './utils/history'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
// import MultiSelect from './components/shared/MultiSelect'
import ArtistsManagement from './components/ArtistsManagement'
// import Amplify, { Auth } from 'aws-amplify'
import './App.scss'



// Amplify.configure({
//   Auth: {
//     // REQUIRED - Amazon Cognito Region
//     region: 'eu-central-1',
//     // OPTIONAL - Amazon Cognito User Pool ID
//     // userPoolId: 'eu-central-1_dlAgn8kxw',
//     userPoolId: 'eu-central-1_dlAgn8kxw',

//     // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
//     userPoolWebClientId: '1u22tgfohkdggbgmn629kuabhv',
//   },
// })

// You can get the current config object
// const currentConfig = Auth.configure()

const App = () => {
  const dispatch = _useDispatch()
  const isAuthenticated = !!useSelector(selectisAuthenticated)

  // useEffect(() => {
  //   if (!isAuthenticated && localStorage.getItem('token')) {
  //     dispatch({ type: userActionTypes.GET_PROFILE.request })
  //   }
  // }, [])

  // useEffect(() => {
  //   Amplify.configure({
  //     Auth: {
  //       region: 'eu-central-1,',
  //       // identityPoolId: 'process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID',
  //       // identityPoolRegion: 'process.env.REACT_APP_AWS_COGNITO_REGION',
  //       userPoolId: 'eu-central-1_dlAgn8kxw',
  //       userPoolWebClientId:
  //         '1u22tgfohkdggbgmn629kuabhv)',
  //     },
  //   })
  // }, [])

  // async function signUp() {
  // try {
  //   const { user } = await Auth.signUp({
  //     username,
  //     password,
  //     attributes: {
  //       email, // optional
  //       phone_number, // optional - E.164 number convention
  //       // other custom attributes
  //     },
  //   })
  //   console.log(user)
  // } catch (error) {
  //   alert('nayek')
  //   console.log('====<  =>error signing up:', error)
  // }

  return (
    <Layout>
      <ArtistsManagement />
    </Layout>
  )
  //  return (
  //   <div>
  //     {/* <AmplifySignOut
  //     config = {}
  //       // userPoolId = 'eu-central-1_dlAgn8kxw'
  //   clientId ='1u22tgfohkdggbgmn629kuabhv)'
  //   region = 'eu-central-1'
  //     /> */}
  //     My App
  //   </div>
  // )

  // return (
  //   <Layout>
  //     <ConnectedRouter history={history}>
  //       <Switch>
  //         <Route exact path={'/login'} component={Login} />
  //         <PrivateRoute
  //           isAuthenticated={isAuthenticated}
  //           path="/"
  //           authenticationPath="/login"
  //           component={LandingPage}
  //         />
  //       </Switch>
  //     </ConnectedRouter>
  //   </Layout>
  // )
}

export default App
