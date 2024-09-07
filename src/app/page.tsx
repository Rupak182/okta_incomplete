import { signIn } from 'next-auth/react'
import React from 'react'
import { enter } from './action'

export default function page() {
  return (
    <div>
      <form action={enter}>
        <button type="submit">Signin with Okta</button>
      </form>
    </div>
  )
}
