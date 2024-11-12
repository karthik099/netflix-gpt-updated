import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser }  from '../utils/store/userSlice' 
import { auth } from '../utils/firebase'
const Body = () => {

    const dispatch = useDispatch();
    const appRoute = createBrowserRouter([
        {
            path:"/",
            element: <Login/>
        },
        {
            path:"/browse",
            element: <Browse/>
        }
    ])

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                // Sign In
                const {uid, email} = user;
                dispatch(addUser({uid: uid, email: email}));
            } else{
                // Sign Out
                dispatch(removeUser());
            }
        })
    },[])

  return (
    <div>
        <RouterProvider router={appRoute}/>
    </div>
  )
}

export default Body