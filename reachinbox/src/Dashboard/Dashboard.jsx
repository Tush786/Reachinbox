import {
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import DarkModeToggle from "../Theam/Theam";
import { BsInboxFill } from "react-icons/bs";
import { BsSend } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlinePersonSearch } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { MdBarChart } from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GrFormRefresh } from "react-icons/gr";
import { AiOutlineDown } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
import Mail from "./Mail";
import Emptyui from "./Emptyui";
import Logo from '../Images/Logo_holder.png'

function Dashboard() {
    const [seemail,setSeemail]=useState(false)
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidHVzaGFyc2FwYXRlMzRAZ21haWwuY29tIiwiaWQiOjMyLCJmaXJzdE5hbWUiOiJUdXNoYXIiLCJsYXN0TmFtZSI6IlNhcGF0ZSJ9LCJpYXQiOjE3MTE5NzI0OTQsImV4cCI6MTc0MzUwODQ5NH0.vK5jGzfQEPnoGXjuvPLYA9sRUpmv6uriFCD-9ZAcc3M"
    // if(!token){
    //   return  
    // }
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
  
    async  function FetchData(){
            try {
                let Resp=await axios.get(`https://hiring.reachinbox.xyz/api/v1/onebox/list`,config);
                console.log(Resp.data)
            } catch (error) {
                console.log(error)
            }
      }

    useEffect(()=>{
       FetchData()
    },[])
  return (
    <div className="Dashboard flex text-[#fff] bg-black">
      <div className="border-r-2 sticky border-[#291c1c] w-[76px] h-screen px-[4px] flex flex-col items-center">
        <div className="w-[48px] h-[70px] mb-[40px] border-t-0 flex justify-center">
          <img src={Logo} />
        </div>
        <div className="my-4 w-[48px] h-full flex justify-between flex-col items-center">
          <div className="Icon_Div flex flex-col gap-12 cursor-pointer">
            <BiHomeAlt className="Icon" />
            <MdOutlinePersonSearch className="Icon" />
            <AiOutlineMail className="Icon" />
            <BsSend className="Icon" />
            <AiOutlineUnorderedList className="Icon" />
            <BsInboxFill onClick={()=>{setSeemail(true)}} className="Icon" />
            <MdBarChart className="Icon" />
          </div>
          <div>
            <CgProfile className="Icon" />
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-black">
        <div className="top-[3px] h-[64px] z-20 left px-4 flex justify-between border items-center border-b-2 sticky  border-[#291c1c] ">
          <Text className="text-[16px] font-[700]">Onebox</Text>
          <div className="flex items-center gap-6">
            <DarkModeToggle />
            <Select className="bg-[black]" placeholder="Tim's Workspace"></Select>
          </div>
        </div>
        {/* --------------------- */}
        {
           seemail?<Mail/>:<Emptyui/>
        }
       
      </div>
    </div>
  );
}

export default Dashboard;
