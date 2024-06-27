'use client'

import React, { useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import {app} from '../config'
import Login from '../Login'
import { useRouter } from 'next/navigation'

function Page() {
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

export default Page