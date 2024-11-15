import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const Header = () => {
// const navigate = useNavigate()
const handleSignout = ()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
    // navigate("/")
  }).catch((error) => {
    // An error happened.
    // navigate("/error")
  });
  
}

  return (
    <div className='w-screen flex jus justify-between p-4'>
        <img alt="logo" className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'/>
        <div className='flex'>
          <img className='w-6 h-6' src='https://avatars.githubusercontent.com/u/864046?v=4'/>
          <button onClick={handleSignout} className=''>Signout</button>
        </div>
    </div>
  )
}

export default Header