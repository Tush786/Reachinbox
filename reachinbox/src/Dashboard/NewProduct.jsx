import { AbsoluteCenter, Box, Button, Divider, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import { BsReply } from "react-icons/bs";

function NewProduct() {
    const [signlemail,setSinglemail]=useState()
  return (
    <div className='w-[96%] m-auto '>
    <Box position='relative' className='my-4' padding='10'>
        <Divider borderColor='yellow' />
        <AbsoluteCenter bg='black' px='4'>
            21 Feb
        </AbsoluteCenter>
    </Box>
    <div className='p-4 rounded-sm border-2 border-[#291c1c] bg-[#121418] flex flex-col gap-8'>
        <div className='flex flex-col gap-3'>
            <div className='flex justify-between items-center'>
                <div>
                    <Text>Re:New Product Launch</Text>
                </div>
                <Text>20 june 2022 : 9:16AM</Text>
            </div>
            <div className='text-left'>
                <Text>from : jeanne@icloud.com cc : lennon.j@mail.com</Text>
            </div>
            <div className='text-left'>
                <Text>to : lennon.j@mail.com</Text>
            </div>
        </div>
        <div className='text-left flex flex-col gap-4 w-[70%]'>
            <Text>Hii</Text>
            <Text>
                I would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.
            </Text>
        </div>
       
    </div>

    <div className='flex justify-between items-end'> {/* Modified this line */}
            <div>
                <Button className='flex gap-4'>
                    <BsReply/>
                    <Text>Reply</Text>
                </Button>
            </div>
        </div>
</div>

  )
}

export default NewProduct


