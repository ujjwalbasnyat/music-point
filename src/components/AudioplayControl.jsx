import { FaCirclePlay,FaCirclePause } from "react-icons/fa6";
import { IoPlaySkipForwardOutline, IoPlaySkipBackOutline  } from "react-icons/io5";
import { TfiControlShuffle } from "react-icons/tfi";
import { PiRepeatOnceThin } from "react-icons/pi";
import { LuVolumeX,LuVolume2,LuVolume1,LuVolume } from "react-icons/lu";
import Muskan from "../Music/Muskan.mp3";
import { useState } from "react";
function AudioplayContainer(){
    const[Play, setPlay]= useState(false);
    const[currentSong] = useState(Muskan)
    return(
        <div >
            <div className={` flex justify-between width-[100%] height-screen bg-slate-600 dark:bg-neutral-600 py-2`}>
                {/* Musician Profile icon container */}
                <div className={`flex justify-center items-center px-4 gap-4`}>
                    <img src="https://photo-cdn.urdupoint.com/show_img_new/profiles/2022/250x250/pic_67921_1663576316.jpg._2" className={`w-[40px] h-[40px] rounded-md`} />
                    <ul>
                        <li className="font-bold">Wound</li>
                        <li className="font-extralight">S.R Roe</li>
                    </ul>
                </div>

                {/* Music control container play/pause/forward/backward/shuffle/repeat icon container */}
                <div className="flex items-center gap-6 text-xl ">
                    <button><TfiControlShuffle/></button>
                    <button><IoPlaySkipBackOutline/></button>
                    <button onClick={()=>setPlay(!Play)}>{Play ?<FaCirclePause/>:<FaCirclePlay />}</button>
                    <button><IoPlaySkipForwardOutline/></button>
                    <button><PiRepeatOnceThin/></button>
                    <input min="1" max="" type="range" className="in-range:border-green-500 h-1 w-[100%] "/>
                        
                </div>

                {/* Volume icon container */}
                <div className={`flex items-center px-4`}>
                    <button><LuVolumeX /><LuVolume /><LuVolume1 /><LuVolume2 /></button>
                    <input type="range"/>
                    
                </div>
            </div>
            <audio src={currentSong}/>
        </div>
    )
}
export default AudioplayContainer;