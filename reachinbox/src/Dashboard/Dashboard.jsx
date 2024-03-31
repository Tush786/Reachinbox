import { Input, InputGroup, InputLeftElement, Select, Stack, Text } from "@chakra-ui/react";
import DarkModeToggle from "../Theam/Theam";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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
import { CiSearch } from "react-icons/ci";

function Dashboard() {
  return (
    <div className="Dashboard flex">
      <div className="border-r-2 sticky border-grey-500 w-[56px] h-screen px-[4px] flex flex-col items-center">
        <div className="w-[48px] h-[70px] mb-[40px] border-t-0 flex justify-center">
          <img src="https://ibb.co/N7K2HtW" />
        </div>
        <div className="my-4 w-[48px] h-full flex justify-between flex-col items-center">
          <div className="Icon_Div flex flex-col gap-12 cursor-pointer">
            <BiHomeAlt className="Icon" />
            <MdOutlinePersonSearch className="Icon" />
            <AiOutlineMail className="Icon" />
            <BsSend className="Icon" />
            <AiOutlineUnorderedList className="Icon" />
            <BsInboxFill className="Icon" />
            <MdBarChart className="Icon" />
          </div>
          <div>
            <CgProfile className="Icon" />
          </div>
        </div>
      </div>
      <div className="w-[100%]">
        <div className="top-[3px] h-[64px] left px-4 flex justify-between border items-center border-r-2 sticky border-grey-500 ">
          <Text>Onebox</Text>
          <div className="flex gap-6">
            <DarkModeToggle />
            <Select placeholder="Tim's Workspace"></Select>
          </div>
        </div>

         <div>
        <div className="border-r-2 flex border-grey-500 w-[300px]">
          <div className="w-[100%] h-[71px] pt-[7px] gap-4 ">
            <div className="w-[171px] flex justify-center items-center">
              <div className="w-160px h-[47px[ top-[7px]  pt-3 pl-3">
                <Text
                  className="text-[#4285F4] text-left text-[20px] font-[700] w-[112px] h-[27px]"
                >
                  All Inboxes
                </Text>
              </div>
              <div className="w-[24px] h-[24px] ">
                <AiOutlineDown className="w-[16px] h-[14px]" />
              </div>
            </div>
            <div className="w-[100%] h-[23px] top-[48px] py-1 px-4 gap-4">
                <Text className="text-left text-[20px]"><span className="font-[800]">25/25</span> Inboxes Selected</Text>
            </div>
          </div>
          <div className="w-[32px] h-[32px] pt-3 gap-2 border-r-4">
                <div className="w-[26px] h-[26px]">
                        <GrFormRefresh className="w-[26px] h-[26px]"/>
                </div>
          </div>
        </div>
        
        <div className="h-[76px]">
            <div className="p-[8px] gap-[16px]">
             <input type="text" placeholder="search"></input>
            </div>
            <div></div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;




