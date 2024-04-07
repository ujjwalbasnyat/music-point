import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <div>
            <h1>hero section</h1>
            <div className="flex">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
            
        </div>
    )
}
