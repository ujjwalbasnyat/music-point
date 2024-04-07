import React from "react";
import { useState } from "react";
import { CiCircleChevLeft ,CiCircleChevRight } from "react-icons/ci";

function Navbar(){
    return(
        <div className="mx-2 p-3">
            <div>
                <div className="flex items-center">
                    <input type="search" placeholder="Songs Albums or Podcasts" className="bg-neutral-200 text-neutral-700 rounded-3xl px-5 h-10 w-80" />   
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
                <SimpleSlider/>
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

function SimpleSlider(){
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
            
            <div className={`my-10`}>
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
