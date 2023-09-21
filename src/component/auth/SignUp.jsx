import React, { useState } from 'react'
import {auth} from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUp = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
  return (
    <div className='sign_up_container'>
        <form onSubmit={signUp}>
            <h1>Sign Up</h1>
            <input 
                type="email" 
                name="" 
                id="" 
                onChange={handleEmail}
                value={email}
                placeholder='enter your email...'
            />
            <input 
                type="password" 
                name=""
                onChange={handlePassword} 
                value={password}
                id="" 
                placeholder='enter your password...'
            />
            <button>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp