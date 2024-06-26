'use client'

import React, {useState, useEffect} from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import {app} from '../config'
import Login from '../login'
import { useRouter } from 'next/navigation'

function page() {
    const auth = getAuth(app)
    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push('/dashboard')
            }
        })
    }, [auth, router]);

  return (
    <>
        <Login/>
    </>
  )
}

export default page