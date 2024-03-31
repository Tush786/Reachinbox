import { Text } from '@chakra-ui/react'
import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import axios from 'axios'

function Login() {

async  function HandleGoogle(){
    try {
      let resp=await axios.post(`https://hiring.reachinbox.xyz/api/v1/auth/google-login`)
      console.log(resp)
    } catch (error) {
       console.log(error)
    }
  }
  return (
<div className='border-solid border-2 border-indigo-600 h-screen flex justify-center items-center '>
  <div className='w-[460px] h-[312px] pt-[24px] px-[40px] pb-[40px] text-center  bg-white-500 shadow-lg '>
  
    <Text className='text-[20px] font-[600] text-center'>Create a new account</Text>
    <div  className='flex w-[300px] m-auto justify-center gap-4 items-center px-2 py-2 my-6 border-solid border-2 cursor-pointer border-yellow-600'>
    <div onClick={HandleGoogle}>
    <GoogleIcon  />
    </div>
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

  )
}

export default Login





