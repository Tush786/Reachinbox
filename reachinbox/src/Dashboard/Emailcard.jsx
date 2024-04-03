import { Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsSend } from 'react-icons/bs'

function Emailcard({ id, fromEmail, createdAt ,threadId}) {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    const date = new Date(createdAt);
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    setMonth(month);
    setDay(day);
  }, [createdAt]);

  async function handleDelete(event) {
    const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidHVzaGFyc2FwYXRlMzRAZ21haWwuY29tIiwiaWQiOjMyLCJmaXJzdE5hbWUiOiJUdXNoYXIiLCJsYXN0TmFtZSI6IlNhcGF0ZSJ9LCJpYXQiOjE3MTE5NzI0OTQsImV4cCI6MTc0MzUwODQ5NH0.vK5jGzfQEPnoGXjuvPLYA9sRUpmv6uriFCD-9ZAcc3M";

  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };


    if (event.key === "d" || event.key === "D") {
      try {
        // Delete from backend
        let resp=await axios.delete(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`,config);
        console.log(resp.data)
        // Delete from the array
        console.log("Object deleted from backend");
      } catch (error) {
        console.log(error);
      }
    }
  }

 
  useEffect(() => {
    document.addEventListener("keydown", handleDelete);
    return () => {
      document.removeEventListener("keydown", handleDelete);
    };
  }, [threadId]);

  return (
    <div className="w-[308px] h-auto px-[9px] ">
      <div className="w-[100%] border-b-2 border-[#291c1c] h-[100px] py-[12px] px-[8px]">
        <div className="w-[100%] h-[76px] p-[4px] gap-[8px]">
          <div className="w-[100%] h-[68px] gap-[8px]">
            <div className="w-[278px] h-[40px]">
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center gap-2 ">
                  <div className="w-[10px] h-[10px] ml-[-18px] bg-[#6464f1] rounded-full"></div>
                  <Text className="text-[14px] font-[500]">
                    {fromEmail}
                  </Text>
                </div>

                <Text></Text>
              </div>
              <Text className="text-left ">I've tried a lot and </Text>
            </div>
            <div className="w-[100%]  my-4 flex justify-between items-center">
              <div className="w-[83px] bg-[#222426] rounded-[20px] h-[20px] py-[3px] px-[8px]">
                <div className="w-[67px] h-[14px] gap-[4px] flex justify-center items-center">
                  <div className="w-[12px] h-[12px] rounde-[50px] bg-[#57E0A6] rounded-full"></div>
                  <Text className="text-[10px] text-left font-[800] text-[#57E0A6]">
                    Interested
                  </Text>
                </div>
              </div>
              <div className="py-[3px] px-[8px]  bg-[#222426] rounded-[20px] gap-[8px]">
                <div className="w-[100%] h-[14px] gap-2 flex justify-center items-center">
                  <BsSend />
                  <Text className="text-[10px] font-[800]">
                    Campaign Name
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Emailcard
