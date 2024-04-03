import { BsSend } from "react-icons/bs";

import { Text } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import { GrFormRefresh } from "react-icons/gr";
import { AiOutlineDown } from "react-icons/ai";
import { BiVector } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineMailOpen } from "react-icons/hi";
import { useEffect, useState } from "react";
import Emailcard from "./Emailcard";
import axios from "axios";
import NewProduct from "./NewProduct";

function Mail() {

  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");


  const [arr, setArr] = useState([]);
  // const theam = useSelector((state) => state.theam.theam);
  // console.log(theam);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidHVzaGFyc2FwYXRlMzRAZ21haWwuY29tIiwiaWQiOjMyLCJmaXJzdE5hbWUiOiJUdXNoYXIiLCJsYXN0TmFtZSI6IlNhcGF0ZSJ9LCJpYXQiOjE3MTE5NzI0OTQsImV4cCI6MTc0MzUwODQ5NH0.vK5jGzfQEPnoGXjuvPLYA9sRUpmv6uriFCD-9ZAcc3M";
  // if(!token){
  //   return
  // }
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  async function FetchData() {
    try {
      let Resp = await axios.get(
        `https://hiring.reachinbox.xyz/api/v1/onebox/list`,
        config
      );
      console.log(Resp.data);
      setArr(Resp.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    FetchData();
  }, []);



  return (
    <div className="flex ">
   
      <div className="w-[300px] h-screen flex flex-col border-r-2 pr-6 ml-4 border-[#291c1c]">
        <div className="flex w-[278px] mt-2">
          <div className="w-[100%] h-[71px] pt-[7px] gap-4 ">
            <div className="w-[171px] flex justify-center items-center">
              <div className="w-160px ">
                <Text className="text-[#4285F4] text-left text-[20px] font-[700] w-[112px] h-[27px]">
                  All Inboxes
                </Text>
              </div>
              <div className="flex justify-center items-center">
                <AiOutlineDown className="w-[16px] h-[14px]" />
              </div>
            </div>
            <div className="w-[100%] h-[23px] top-[48px] py-1 px-4 gap-4">
              <Text className="text-left text-[20px]">
                <span className="font-[800]">25/25</span> Inboxes Selected
              </Text>
            </div>
          </div>
          <div className="w-[32px] h-[32px] pt-3 gap-2">
            <div className="w-[26px] h-[26px]">
              <GrFormRefresh className="w-[26px] h-[26px]" />
            </div>
          </div>
        </div>

        {/* --------------------- */}
        <div className="h-[76px]">
          <div className=" gap-[16px] my-4">
            <input
              className="w-[100%] p-2 bg-[#23272C]"
              type="text"
              placeholder="search"
            ></input>
          </div>
          <div></div>
        </div>

        {/* --------------------- */}
        <div className="w-[275px] h-[32px] py-2 px-3">
          <div className="w-[256px] h-[26px] flex justify-between items-center">
            <div className="flex justify-between items-center gap-4">
              <div>
                <Text className="font-[600] text-[16px] text-[#5C7CFA]">
                  26
                </Text>
              </div>
              <div>
                <Text>New Replies</Text>
              </div>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <Text>Newest</Text>
              </div>
              <IoIosArrowDown />
            </div>
          </div>
        </div>

        {/* --------------------- */}
        {
          arr.map((el,ind)=>{
               return <Emailcard key={ind} {...el}/>
            })
        }
     
      </div>

      {/* --------------------- Mid Section------------------- */}
      <div className="w-[100%]">
      <div className="w-[100%] h-[70px] flex justify-between items-center pr-[8px] pl-[17px] border-2 border-[#291c1c]">
        <div className=" gap-[8px]">
          <div className="">
            <Text className="text-left font-inter text-[#fff]">Orladom</Text>
            <Text className="text-left ">orladom@gmail.com</Text>
          </div>
        </div>

        {/* ---------- */}
        <div className=" gap-[14px] flex ">
          <div className=" gap-[16px] rounded-sm">
            <div className=" flex justify-between items-center h-[33px] py-[6px] px-[8px] bg-[#23272C] gap-[6px]">
              <div className=" gap-[8px] flex justify-between items-center">
                <div className="rec">
                  <div className="w-[12px] h-[12px] rounded-full bg-[#E6D162]"></div>
                </div>
                <div className="">
                  <Text className="">Meeting Completed</Text>
                </div>
              </div>
              <div className="arr">
                <MdKeyboardArrowDown className="" />
              </div>
            </div>
          </div>

          <div className=" gap-[16px] ">
            <div className=" flex justify-between items-center rounded-sm h-[33px]  px-8px] py-2 px-4 bg-[#23272C] gap-[6px]">
              <div className=" gap-[8px] flex justify-between items-center ">
                <div className="">
                  <Text className="">Move</Text>
                </div>
              </div>
              <div className="arr">
                <MdKeyboardArrowDown className="" />
              </div>
            </div>
          </div>

          <div className="flex items-center bg-[#23272C] rounded-sm">
            <div className="p-2">
              <BsThreeDots />
            </div>
          </div>
        </div>
      </div>

      {
        <NewProduct/>
      }
      </div>

      {/* --------------------End Section --------------------- */}
      <div className="w-[600px] px-4 border-l-2 border-[#291c1c] h-[1010px] top-[68px] py-[16px] flex flex-col items-center gap-[16px] ">
        <div className="w-[100%] px-4 h-[36px] py-[8px]  gap-[16px] bg-[#23272C] rounded-[6px]">
          <div className="w-[237px] h-[20px] gap-[16px]">
            <div className="w-[246px] h-[20px] flex justify-start items-center">
              <Text>Lead Details</Text>
            </div>
          </div>
        </div>

        <div className="w-[100%]  pt-[8px]  pb-[16px] gap-[20px]">
          <div className=" h-[17px] py-4 flex justify-between items-center">
            <Text>Name</Text>
            <Text>Orlando</Text>
          </div>
          <div className=" h-[17px] py-4 flex justify-between items-center">
            <Text>Contact No</Text>
            <Text>+54-9062827869</Text>
          </div>
          <div className=" h-[17px] py-4 flex justify-between items-center">
            <Text>Email ID</Text>
            <Text>orlando@gmail.com</Text>
          </div>
          <div className=" h-[17px] py-4 flex justify-between items-center">
            <Text>Linkedin</Text>
            <Text>linkedin.com/in/timvadde/</Text>
          </div>
          <div className=" h-[17px] py-4 flex justify-between items-center">
            <Text>Company Name</Text>
            <Text>Reachinbox</Text>
          </div>
        </div>

        <div className="w-[100%] px-4 h-[36px] py-[8px]  gap-[16px] bg-[#23272C] rounded-[6px]">
          <div className="w-[237px] h-[20px] gap-[16px]">
            <div className="w-[246px] h-[20px] flex justify-start items-center">
              <Text>Activities</Text>
            </div>
          </div>
        </div>

        {/* ---------------------------- */}
        <div className="w-[100%] h-[356px] gap-[12px]">
          <div className="h-[326px] gap-[32px]">
            <div className="h-[260px] border-1">
              <div className="flex flex-col gap-6 mb-6">
                <Text className="text-left text-[20px]">Campaign Name</Text>
                <div className="flex items-end gap-12">
                  <Text>3 Steps </Text>
                  <Text>5 Days in Sequence</Text>
                </div>
              </div>
              <div className='flex flex-col gap-8'>
                <div className=" gap-[56px] flex items-center">
                  <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#23272C] border-1 border-[#291c1c] rounded-full">
                    <AiOutlineMail className="Icon" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div>
                      <Text className="text-left">Step 1 : Email</Text>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        <BsSend className="Icon2" />
                      </div>
                      <div className="flex items-center">
                        <Text>
                          Sent : <span>3 rd Feb</span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" gap-[56px] flex items-center">
                  <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#23272C] border-1 border-[#291c1c] rounded-full">
                    <AiOutlineMail className="Icon" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div>
                      <Text className="text-left">Step 1 : Email</Text>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        <HiOutlineMailOpen className="Icon2 " />
                      </div>
                      <div className="flex items-center">
                        <Text>
                          Sent : <span>3 rd Feb</span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="gap-[56px] flex items-center">
                  <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#23272C] border-1 border-[#291c1c] rounded-full">
                    <AiOutlineMail className="Icon" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div>
                      <Text className="text-left">Step 1 : Email</Text>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        <HiOutlineMailOpen className="Icon2" />
                      </div>
                      <div className="flex items-center">
                        <Text>
                          Sent : <span>3 rd Feb</span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Mail;
