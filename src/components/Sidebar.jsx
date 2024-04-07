import { HiHome } from "react-icons/hi2";
import { PiPlaylistThin } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { BiSolidPlaylist } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
function Sidebar({active}){
    const[expanded,setexpanded] = useState(true)
    const togglesidebar =()=>{
        setexpanded(!expanded)
    }
    return(
        <div>
                <div className=" p-4 h-screen border-r-[1px]">
                <div className={`text-xl font-bold flex items-center gap-3 overflow-hidden transition-all`}>
                    <button onClick={togglesidebar}><RxHamburgerMenu /></button>
                     <h1 className={`overflow-hidden transition all ${expanded ? "w-32" :"w-0"}`}>MusicPoint</h1>
                     </div>
                <div >
                    <h1 className={` my-4 border-b-[1px] overflow-hidden transition all ${expanded ? "w-32" :"w-0"}`}>Menu</h1>
                    <div>{sidebarlist.map((s)=>(
                    <div className={``}>
                        <a href="#" className={` flex items-center 
                        rounded-md gap-2 py-2 px-2
                        transition-colors ${active
                        ? "bg-indigo-100": "hover:bg-indigo-50  "}`}>{s.icon}<a className={`overflow-hidden transition all ${expanded ? "w-54":"w-0"}`}>{s.name}</a></a>
                    </div>
                ))}</div>
                    <div className={`mt-10 overflow-hidden transition all ${expanded ? "w-54" : "w-0"}`} >
                        <h1 className={`flex items-center mx-1 gap-2 border-b-[1px] my-4 `}><BiSolidPlaylist/>My Playlist</h1>
                        <div>
                            {playlist.map((p)=>(
                                <div className={`flex items-center rounded-md py-2 px-2 
                                transition-colors ${active ? "bg-indigo-100" : "hover:bg-indigo-50 "} `}>{p.playlistname}</div>
                            ))}
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
export default Sidebar;

const playlist = [{playlistname : "Pop"},{playlistname : "Melody"},{playlistname : "Rock"}];
const sidebarlist = [
    {name:"Home",icon : <HiHome />},{name:"Playlist",icon : <PiPlaylistThin/>},{name:"Favourites",icon :<IoMdHeartEmpty/>},{name:"Settings",icon: <IoSettingsOutline/> }]