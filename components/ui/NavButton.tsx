import React from 'react'
import { Button } from './button'

const NavButton = () => {
  return (
    <Button variant='ghost' className='text-sm w-12 h-8 font-normal z-10 text-white shadow-2xl hover:text-white hover:bg-slate-300 bg-opacity-100 hover:bg-opacity-45'>Home</Button>
  )
}

export default NavButton