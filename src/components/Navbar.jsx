import React from "react";
import { useState,useRef } from "react";
import { CiCircleChevLeft ,CiCircleChevRight,CiSearch } from "react-icons/ci";


function Navbar(){
    const SearchInputRef = useRef(null);
    const handleClickSearch =()=>{
        SearchInputRef.current.focus();
    }
    return(
        <div className="mx-2 p-3">
            <div>
                <div className="flex items-center">
                    <button onClick={handleClickSearch}><CiSearch/></button>
                    <input type="search" ref={SearchInputRef} placeholder="Songs Albums or Podcasts" className="bg-neutral-200 text-neutral-700 rounded-3xl px-5 h-10 w-80" />   
                    <div className="flex justify-right ml-8">
                        {Navitems.map((e)=>(
                            <div className={`mr-8 hover:text-yellow-400 cursor-pointer`}>
                                <h2>{e.NavTitle}</h2>
                            </div>
                        ))}
                    </div>     
                </div>
            </div>
            <div>
                <MainSlider/>
                <ListSlider/>
            </div>

        </div>
    )
}
export default Navbar;
const Navitems = [
    {
        NavTitle: "New Releases",
    },
    {
        NavTitle: "Top Mixes",
    },
    {
        NavTitle: "Top 100",
    },
    {
        NavTitle: "Popular Album",
    }
]

function MainSlider(){
    const[currentIndex,setcurrentIndex] = useState(0);
    const prevSlide =()=>{
        const isFirstSlide = currentIndex ===0;
        const newIndex = isFirstSlide ? Slides.length-1 :currentIndex - 1;
        setcurrentIndex(newIndex);
    };
    const nextSlide =()=>{
        const islastSlide = currentIndex === Slides.length - 1 ;
        const newIndex = islastSlide ? 0 : currentIndex +1 ;
        setcurrentIndex(newIndex)
    }
    const Slides = [
        {
            name: 'Tylor Swift',
            url : 'https://i.ytimg.com/vi/-BjZmE2gtdo/maxresdefault.jpg'

        },
        {
            name : 'Ed sheeran',
            url :'https://i.ytimg.com/vi/2Vv-BfVoq4g/sddefault.jpg'
        },
        {
            name :'Passenger',
            url : 'https://i.ytimg.com/vi/RBumgq5yVrA/maxresdefault.jpg'
        },
        {
            name : 'Salena Gomez & Rema',
            url : 'https://i.ytimg.com/vi/A7ijl8aiGKs/maxresdefault.jpg'
        },
        {
            name : 'Dan Reynolds',
            url : 'https://www.udiscovermusic.com/wp-content/uploads/2019/05/Imagine-Dragons-Believer-Press-Shot-Eliot-Lee-Hazel-1000x600.jpg'
        }
    ]
    return(
        <div>
            
            <div className={`my-6`}>
                <div style={{backgroundImage:`url(${Slides[currentIndex].url})`}} className={`  h-60 bg-center  rounded-2xl`}><p className={`text-white font-bold text-[30px] mx-10 py-20`}>{Slides[currentIndex].name}</p></div>
                {/* left arrow */}
                <div className=" absolute top-[55%] translate-x-0 translate-y-[-500%] left-50 text-3xl text-white cursor-pointer">
                    <CiCircleChevLeft onClick={prevSlide}/>
                </div>
                {/* right arrow */}
                <div className=" absolute top-[55%] translate-x-0 translate-y-[-500%] right-[345px] text-3xl text-white cursor-pointer">
                    <CiCircleChevRight onClick={nextSlide}/>
                </div>
            </div>
            
        </div>
    )
}
function ListSlider(){
    const songscollection = [
        {
            genre : 'Chill Hits',
            img_url : 'https://external-preview.redd.it/soul-music-soothe-your-soul-chill-r-b-soul-mix-the-best-v0-9rZPdRCz8ch7HFVkqXspDgljZfksWtSt32AePKeDhCI.jpg?auto=webp&s=c5ad2800f9ca82c621c0eaced09e9b66e991c5c2'
        },
        {
            genre : 'Pop Mix',
            discription : '',
            img_url :'https://yt3.googleusercontent.com/F2KGkl_71449K671_T9htBNhoAEtl4k-ZAmu0eHowvBxC2ebhrN0QIzYUJ0rmrVOY9IygVNG=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            genre : 'Travel Songs',
            discription : '',
            img_url : 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Road_Trip.JPG'
        },
        {
            genre : 'Party Songs',
            discription : '',
            img_url : 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-27086-rectangle.jpg?w=624'
        },
        {
            genre : 'Workout Mix',
            discription : '',
            img_url : 'https://images.squarespace-cdn.com/content/v1/582b3c8220099eab9d5921b1/b8eb883e-d6e2-465c-a6cb-25d7b1fc2375/JLab_Flex_Sport_9309_39d903f9-4715-4762-9a5c-8f731def5cee_2000x.jpeg'
        }
    ]
    return(
        <div>
            See all
            <div className="flex ustify-center gap-12 py-1"> 
                {songscollection.map((e)=>(
                    <div className={`cursor-pointer`}>
                        <img src={e.img_url} className={`rounded-xl h-[120px] w-[120px] object-center flex`}/>
                        <p align="center" className={`font-bold py-1`}>{e.genre}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
