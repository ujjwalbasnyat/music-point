import './App.css';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import RightSidebar from "./components/RightSidebar";
import AudioplayContainer from "./components/AudioplayControl";
import { useState } from 'react';
import { MdOutlineLightMode,MdDarkMode } from "react-icons/md";
function App() {
  const[DarkMode,setDarkMode] = useState(false)
  return (
    <div className={`${DarkMode && "dark"}`}>
   <div className={`bg-white dark:bg-neutral-900`}>
    <div className='flex font-sans'>
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
    <AudioplayContainer />
    <button onClick={()=>setDarkMode(!DarkMode)} className={`text-2xl absolute top-[25px] right-[250px]`}>{DarkMode ? <MdOutlineLightMode className='text-slate-400'/> : <MdDarkMode />}</button>
   </div>
   </div>
  )
}

export default App
