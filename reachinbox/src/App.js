
import './App.css';
import FormPropsTextFields from './Component/Login';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import Dashboard from './Dashboard/Dashboard';
import DarkModeToggle from './Theam/Theam';
import Allroutes from './router/Allroutes';

function App() {
  return (
    <div className="App">
    {/* <h1 className='bg-black'>ReachInbox</h1> */}
    {/* <Navbar/> */}
 <Allroutes/>
    </div>
  );
}

export default App;
