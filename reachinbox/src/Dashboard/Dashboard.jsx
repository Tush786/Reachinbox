import { Select, Text } from "@chakra-ui/react";
import DarkModeToggle from "../Theam/Theam";
import HomeIcon from '@mui/icons-material/Home';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import MailIcon from '@mui/icons-material/Mail';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Dashboard() {
  return (
    <div className="Dashboard flex">
       <div>
        <div>
            <img src="../Imges/Logo_holder.png"/>
        </div>
        <div>
            <div className="flex flex-col">
                <HomeIcon/>
                <PersonSearchIcon/>
                <MailIcon/>
                <FormatListBulletedIcon/>
         <NotificationsIcon/>
                <BarChartIcon/>
            </div>
            <div></div>
        </div>
       </div>
      <div className="top-[3px] left flex justify-between border border-yellow-600 w-[100%]">
        <Text>Onebox</Text>
        <div className="flex gap-6">
          <DarkModeToggle />
          <Select placeholder="Select option">
            <option value="option1">Tim's Workspace</option>
           
          </Select>
        </div>
      </div>
      
    </div>
  );
}

export default Dashboard;

// width: Fixed (1,383px)px;
// height: Fixed (64px)px;
// top: 3px;
// left: 57px;
// padding: 24px 0px 0px 0px;
// gap: 24px;
// border: 1px 1px 1px 0px;
// opacity: 0px;

