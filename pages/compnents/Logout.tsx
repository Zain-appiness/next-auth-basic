import React from 'react'
import { doLogout } from '../actions'

const Logout = () => {
  return (
    <div>
      <form action={doLogout}>
        <button 
        className='bg-blue-400 my-4 text-black p-2 rounded'
        type='submit'>
            LOGOUT
        </button>

      </form>
    </div>
  )
}

export default Logout
