import { Text } from '@chakra-ui/react'
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import axios from 'axios'
import Navbar from './Navbar';

function Login() {

async  function HandleGoogle(){

  
    // try {
    //   let resp=await axios.get(`https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reachinbox-five.vercel.app`)
    //   console.log(resp)
    // } catch (error) {
    //    console.log(error)
    // }
  }
  return (
    <>
    <Navbar/>
<div className='border-solid  bg-black text-[#fff] h-screen flex justify-center items-center '>
  <div className='w-[460px]  h-[312px] pt-[24px] px-[40px] pb-[40px] text-center  bg-white-500 shadow-lg  bg-[#101011]'>
  
 
    <Text className='text-[20px] font-[600] text-center'>Create a new account</Text>
    <div  className='flex w-[300px] m-auto justify-center gap-4 items-center px-2 py-2 my-6 border-solid border-2 cursor-pointer rounded-md border-[#4d3939]'>
    <a href='https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reachinbox-flame.vercel.app/dashboard'>
    <div onClick={HandleGoogle}>
    <FcGoogle  />
    </div>
    </a>
      Sign Up with Google
    
    </div>
    <div className='my-8'>
      <button className='bg-[blue] px-6 py-2 text-[white] font-[400] text-[16px] text-center'>Create An Account</button>
    </div>
    <div>
      <Text className=''>Already Have An Account ? <span>Sign in</span></Text>
    </div>
  </div>
</div>
</>
  )
}

export default Login





