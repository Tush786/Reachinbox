import { Image } from '@chakra-ui/react'
import React from 'react'
import Logo from '../Images/Logo.png'

function Navbar() {
  return (
    <div className='bg-black  py-[10px] px-[100px] border-b-2 border-[#4d3939] flex justify-center items-center'>
    

        <img src={Logo}/>
      
    </div>
  )
}

export default Navbar

