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
import { useEffect } from "react";
import axios from "axios";

function Dashboard() {
    async  function FetchData(){
            try {
                let Resp=await axios.get(`https://hiring.reachinbox.xyz/api/v1/onebox/list`);
                console.log(Resp)
            } catch (error) {
                
            }
      }

    useEffect(()=>{
       FetchData()
    },[])
  return (
    <div className="Dashboard flex text-[#fff] bg-black">
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
        <div className="top-[3px] h-[64px] z-20 left px-4 flex justify-between border items-center border-r-2 sticky border-grey-500 ">
          <Text>Onebox</Text>
          <div className="flex gap-6">
            <DarkModeToggle />
            <Select className="bg-[black]" placeholder="Tim's Workspace"></Select>
          </div>
        </div>
        {/* --------------------- */}
        <div className="w-[278px] flex flex-col border-r-2 border-grey-500 ">
          <div className="border-r-2 flex border-grey-500 w-[278px]">
            <div className="w-[100%] h-[71px] pt-[7px] gap-4 ">
              <div className="w-[171px] flex justify-center items-center">
                <div className="w-160px h-[47px[ top-[7px]  pt-3 pl-3">
                  <Text className="text-[#4285F4] text-left text-[20px] font-[700] w-[112px] h-[27px]">
                    All Inboxes
                  </Text>
                </div>
                <div className="w-[24px] h-[24px] ">
                  <AiOutlineDown className="w-[16px] h-[14px]" />
                </div>
              </div>
              <div className="w-[100%] h-[23px] top-[48px] py-1 px-4 gap-4">
                <Text className="text-left text-[20px]">
                  <span className="font-[800]">25/25</span> Inboxes Selected
                </Text>
              </div>
            </div>
            <div className="w-[32px] h-[32px] pt-3 gap-2 border-r-4">
              <div className="w-[26px] h-[26px]">
                <GrFormRefresh className="w-[26px] h-[26px]" />
              </div>
            </div>
          </div>

          {/* --------------------- */}
          <div className="h-[76px]">
            <div className="p-[8px] gap-[16px] my-4">
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
          <div className="w-[278px] h-[969px] px-[9px] border-r-2  border-grey-500 ">
            <div className="w-[255px] border-b-2  border-green-900 h-[100px] py-[12px] px-[8px]">
              <div className="w-[247px] h-[76px] p-[4px] gap-[8px]">
                <div className="w-[243px] h-[68px] gap-[8px]">
                  <div className="w-[243px] h-[40px]">
                    <div className="flex justify-between items-center">
                      <Text className="text-[14px] font-[500]">
                        Beata@gmail.com
                      </Text>
                      <Text>MAR-7</Text>
                    </div>
                    <Text className="text-left ">I've tried a lot and </Text>
                  </div>
                  <div className="w-[100%]  my-4 flex justify-between items-center ">
                    <div className="w-[83px]  h-[20px] py-[3px] px-[8px]">
                      <div className="w-[67px] h-[14px] gap-[4px] flex justify-center items-center">
                        <div
                          className="w-[12px] h-[12px] rounde-[50px] bg-[#57E0A6] rounded-full"
                        ></div>
                        <Text className="text-[10px] text-left font-[800] text-[#57E0A6]">
                          Interested
                        </Text>
                      </div>
                    </div>
                    <div className="py-[3px] px-[8px] gap-[8px]">
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



            <div className="w-[255px] border-b-2  border-green-900 h-[100px] py-[12px] px-[8px]">
              <div className="w-[247px] h-[76px] p-[4px] gap-[8px]">
                <div className="w-[243px] h-[68px] gap-[8px]">
                  <div className="w-[243px] h-[40px]">
                    <div className="flex justify-between items-center">
                      <Text className="text-[14px] font-[500]">
                        Beata@gmail.com
                      </Text>
                      <Text>MAR-7</Text>
                    </div>
                    <Text className="text-left ">I've tried a lot and </Text>
                  </div>
                  <div className="w-[100%]  my-4 flex justify-between items-center ">
                    <div className="w-[83px]  h-[20px] py-[3px] px-[8px]">
                      <div className="w-[67px] h-[14px] gap-[4px] flex justify-center items-center">
                        <div
                          className="w-[12px] h-[12px] rounde-[50px] bg-[#57E0A6] rounded-full"
                        ></div>
                        <Text className="text-[10px] text-left font-[800] text-[#57E0A6]">
                          Interested
                        </Text>
                      </div>
                    </div>
                    <div className="py-[3px] px-[8px] gap-[8px]">
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



            <div className="w-[255px] border-b-2  border-green-900 h-[100px] py-[12px] px-[8px]">
              <div className="w-[247px] h-[76px] p-[4px] gap-[8px]">
                <div className="w-[243px] h-[68px] gap-[8px]">
                  <div className="w-[243px] h-[40px]">
                    <div className="flex justify-between items-center">
                      <Text className="text-[14px] font-[500]">
                        Beata@gmail.com
                      </Text>
                      <Text>MAR-7</Text>
                    </div>
                    <Text className="text-left ">I've tried a lot and </Text>
                  </div>
                  <div className="w-[100%]  my-4 flex justify-between items-center ">
                    <div className="w-[83px]  h-[20px] py-[3px] px-[8px]">
                      <div className="w-[67px] h-[14px] gap-[4px] flex justify-center items-center">
                        <div
                          className="w-[12px] h-[12px] rounde-[50px] bg-[#57E0A6] rounded-full"
                        ></div>
                        <Text className="text-[10px] text-left font-[800] text-[#57E0A6]">
                          Interested
                        </Text>
                      </div>
                    </div>
                    <div className="py-[3px] px-[8px] gap-[8px]">
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

            <div className="w-[255px] border-b-2  border-green-900 h-[100px] py-[12px] px-[8px]">
              <div className="w-[247px] h-[76px] p-[4px] gap-[8px]">
                <div className="w-[243px] h-[68px] gap-[8px]">
                  <div className="w-[243px] h-[40px]">
                    <div className="flex justify-between items-center">
                      <Text className="text-[14px] font-[500]">
                        Beata@gmail.com
                      </Text>
                      <Text>MAR-7</Text>
                    </div>
                    <Text className="text-left ">I've tried a lot and </Text>
                  </div>
                  <div className="w-[100%]  my-4 flex justify-between items-center ">
                    <div className="w-[83px]  h-[20px] py-[3px] px-[8px]">
                      <div className="w-[67px] h-[14px] gap-[4px] flex justify-center items-center">
                        <div
                          className="w-[12px] h-[12px] rounde-[50px] bg-[#57E0A6] rounded-full"
                        ></div>
                        <Text className="text-[10px] text-left font-[800] text-[#57E0A6]">
                          Interested
                        </Text>
                      </div>
                    </div>
                    <div className="py-[3px] px-[8px] gap-[8px]">
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

            <div className="w-[255px] border-b-2  border-green-900 h-[100px] py-[12px] px-[8px]">
              <div className="w-[247px] h-[76px] p-[4px] gap-[8px]">
                <div className="w-[243px] h-[68px] gap-[8px]">
                  <div className="w-[243px] h-[40px]">
                    <div className="flex justify-between items-center">
                      <Text className="text-[14px] font-[500]">
                        Beata@gmail.com
                      </Text>
                      <Text>MAR-7</Text>
                    </div>
                    <Text className="text-left ">I've tried a lot and </Text>
                  </div>
                  <div className="w-[100%]  my-4 flex justify-between items-center ">
                    <div className="w-[83px]  h-[20px] py-[3px] px-[8px]">
                      <div className="w-[67px] h-[14px] gap-[4px] flex justify-center items-center">
                        <div
                          className="w-[12px] h-[12px] rounde-[50px] bg-[#57E0A6] rounded-full"
                        ></div>
                        <Text className="text-[10px] text-left font-[800] text-[#57E0A6]">
                          Interested
                        </Text>
                      </div>
                    </div>
                    <div className="py-[3px] px-[8px] gap-[8px]">
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
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
