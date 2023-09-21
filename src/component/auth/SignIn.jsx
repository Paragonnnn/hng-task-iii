import React, { useState } from 'react'
import {auth} from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
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
    <div className='sign_in_container'>
        <form onSubmit={signIn}>
            <h1>Log In</h1>
            <section className='input_cont'>
                <input 
                type="email" 
                name="" 
                id="" 
                onChange={handleEmail}
                value={email}
                placeholder='enter your email...'
                className='input'
            />
            <input 
                type="password" 
                name=""
                onChange={handlePassword} 
                value={password}
                id="" 
                placeholder='enter your password...'
                className='input'
            />
            </section>
            
            <button className='log_in_btn'>Log In</button>
        </form>
    </div>
  )
}

export default SignIn