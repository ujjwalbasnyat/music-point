import './App.css';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import RightSidebar from "./components/RightSidebar";

function App() {

  return (
   <div>
    <div className='flex bg-white font-sans'>
        <div className='text-md'>
          <Sidebar />
        </div>
        <div>
          <Navbar/>
        </div>
        <div>
          <RightSidebar/>
        </div>
    </div>
   </div>
  )
}

export default App
