import { MdOutlineLightMode,MdDarkMode } from "react-icons/md";
import { GoBell, GoBellFill } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
function RightSidebar(){
    return(
        <div className="border-l-[1px] px-4 my-6 w-[300px]">
            <SideNavbar />
            <FollowArtist />
            <RecentPlay/>
        </div>
    )
}
export default RightSidebar;

function SideNavbar(){
    const[darkMode,setdarkMode]=useState(false);
    const[Notification,setNotification]=useState(false)
    const toggledarkMode =()=>{
        setdarkMode(!darkMode);
    }
    const toggleNotification=()=>{
        setNotification(!Notification);
    }
    return(
        <div>
            <div className=" flex justify-center items-center gap-12 mb-4 text-2xl">
            <button onClick={toggledarkMode}>{darkMode ? <MdOutlineLightMode/> : <MdDarkMode />}</button>
            <button onClick={toggleNotification}>{Notification ? <GoBellFill/> : <GoBell/>}</button>
            <button><CgProfile/></button>
            </div>
        </div>
    )
}

function FollowArtist(){
    const artists = [
        {
            name : 'Arijit Singh',
            profile_url : 'https://scontent.fktm16-1.fna.fbcdn.net/v/t39.30808-6/378171276_332675412464289_2258064259726142828_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zOIuSFBZ0SAAb7OrbWB&_nc_ht=scontent.fktm16-1.fna&oh=00_AfCaPt1kfIEEZNxN_qSZtiVPT3JmTVNOmbnhw9vbonVSKQ&oe=6619637C'
        },
        {
            name : 'Alan Walker',
            profile_url : 'https://i0.wp.com/discotech.me/wp-content/uploads/2020/04/Alan-Walker-2018.jpg?fit=1030%2C579&ssl=1'
        },
        {
            name : 'Ed Sheeran',
            profile_url : 'https://cdn.britannica.com/17/249617-050-4575AB4C/Ed-Sheeran-performs-Rockefeller-Plaza-Today-Show-New-York-2023.jpg'
        }
    ]
    return(
        <div className={`border-b-[1px]`}>
            <h1>Follow artist</h1>
            <div>
                {artists.map((e)=>(
                    <div className="flex justify-between items-center my-2 ">
                        <img src={e.profile_url} className={`rounded-full w-[30px] h-[30px] object-center`}/>
                        <h1>{e.name}</h1>
                        <button className={`text-black bg-yellow-400 rounded-md px-3 `}>Follow</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

function RecentPlay(){
    const artists = [
        {
            name : 'Arijit Singh',
            musicname : 'Satrangi',
            profile_url : 'https://scontent.fktm16-1.fna.fbcdn.net/v/t39.30808-6/378171276_332675412464289_2258064259726142828_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zOIuSFBZ0SAAb7OrbWB&_nc_ht=scontent.fktm16-1.fna&oh=00_AfCaPt1kfIEEZNxN_qSZtiVPT3JmTVNOmbnhw9vbonVSKQ&oe=6619637C'
        },
        {
            name : 'Alan Walker',
            musicname :'Alone',
            profile_url : 'https://i0.wp.com/discotech.me/wp-content/uploads/2020/04/Alan-Walker-2018.jpg?fit=1030%2C579&ssl=1'
        },
        {
            name : 'Ed Sheeran',
            musicname : 'Perfect',
            profile_url : 'https://cdn.britannica.com/17/249617-050-4575AB4C/Ed-Sheeran-performs-Rockefeller-Plaza-Today-Show-New-York-2023.jpg'
        },
        {
            name : 'Atif Aslam',
            musicname :'O Saathi',
            profile_url :'https://static.toiimg.com/thumb/msid-107303378,width-400,resizemode-4/107303378.jpg'
        }
    ]
    return(
        <div>
            <div className="flex justify-between items-center">
            <h1>Recent Play</h1>
            <p>See All</p>
            </div>
            <div>
                {artists.map((e)=>(
                    <div className="flex justify-between items-center my-4">
                        <img src={e.profile_url} className="rounded-3xl w-[30px] h-[30px] object-cover" />
                        <ul>
                            <li>{e.musicname}</li>
                            <li className="text-[10px] text-slate-300">{e.name}</li>
                        </ul>
                        <div>Min Ago</div>
                    </div>
                ))}
            </div>

        </div>
    )
}