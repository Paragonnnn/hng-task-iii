import React from 'react'
import SignIn from './component/auth/SignIn'
import SignUp from './component/auth/SignUp'
import AuthDetails from './component/auth/AuthDetails'

const App = () => {
  return (
    <div className='body'>
      <SignIn />
      {/* <SignUp /> */}
      {/* <AuthDetails /> */}
    </div>
  )
}

export default App