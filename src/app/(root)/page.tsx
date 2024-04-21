import React from 'react'
import { SignedOut, UserButton } from '@clerk/nextjs'

const Home = () => {
  return (
    <>
    <h1>Hello</h1>
    <UserButton afterSignOutUrl='/'/>
    <SignedOut>
      <p>Sign in to get started</p>
    </SignedOut>
    </>
  )
}

export default Home