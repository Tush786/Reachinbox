
import { useState } from 'react';
import Logo from '../Images/Frame 2087326090.png'


function Emptyui() {
    const [value,setValue]=useState()
  return (
    <div className="Emptyui w-[100%] h-[693px] flex justify-center items-center  ">
    <div className='w-[832px] h-[392px] top-[209px] left-[332px] gap-[48px]'>
    <img  src={Logo}/>
    </div>
 

    </div>
  );
}

export default Emptyui;



