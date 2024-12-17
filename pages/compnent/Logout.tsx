import React from 'react'
import { doLogout } from '../../lib'
import {Button } from '../../components/ui/button';

const Logout = () => {
  return (
    <div>
      <form action={doLogout}>
        <Button 
        className='bg-blue-400 my-4 text-black p-2 rounded'
        type='submit'>
            LOGOUT
        </Button>

      </form>
    </div>
  )
}

export default Logout
