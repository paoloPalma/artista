import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomNextArrow from "./CustomNextArrow";
import CustomPrevArrow from "./CustomPrevArrow";

const colors = ['#d3d3d3', '#33FF57', '#582222', '#F333FF', '#33FFF5', '#FF8333']; // Array di colori
const images = ['.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg']; // Array di URL delle immagini

const MyComponent = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(images[0]);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const sliderContainerRef = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const handleBeforeChange = (oldIndex, newIndex) => {
    const newImage = images[newIndex % images.length];
    setBackgroundImage(newImage);
  };

  const settings = {
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    beforeChange: handleBeforeChange,
  };

  const settingsSec = {
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  }

  return (
    <>
      <div className="relative slider-container  bg-black/90 overflow-hidden" id="SliderPrinciple" ref={sliderContainerRef} style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <img src="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2024/4/30/rwk31h91wjkwwirrhvu0/kid-yugi-red-bull-64-bars" className=" absolute h-[770px] object-cover object-center left-0 w-full opacity-80"></img>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        <Slider 
          {...settings}
          asNavFor={nav1}
          ref={sliderRef2}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          className="relative"
        >
          <div>
            <img src="iNomiDel-removebg-preview.png" alt="Slide 1" className="my_dropshadow mx-auto"></img>
          </div>
          <div>
            <img src="iNomiDelDIavoloDark.png" alt="Slide 2" className="my_dropshadow mx-auto"></img>
          </div>
          <div>
            <img src="LP-Ombra.png" alt="Slide 3" className="my_dropshadow mx-auto"></img>
          </div>
          <div>
            <img src="quartoDiBue-removebg-preview.png" alt="Slide 4" className="my_dropshadow mx-auto"></img>
          </div>
          <div>
            <img src="QuartoDIBueLimitata.png" alt="Slide 5" className="my_dropshadow mx-auto"></img>
          </div>
        </Slider>
        <Slider {...settingsSec} className="text-center text-white" asNavFor={nav2} ref={sliderRef1}>
        <div>
          <p className="text-xl">I NOMI DEL DIAVOLO</p>
          <a 
            href="https://open.spotify.com/intl-it/album/2Mf7h5v9Fxlbke064Sd6aC" 
            target="_blank" 
          >
            <button className="px-8 py-1 bg-[#e33632] text-white text-lg mt-6">Listen</button>
          </a>
        </div>
          <div>
            <p className="text-xl">I NOMI DEL DIAVOLO DARK</p>
            <a href="https://open.spotify.com/intl-it/album/2Mf7h5v9Fxlbke064Sd6aC" target="_blank" ><button className="px-8 py-1 bg-[#e33632] text-white text-lg mt-6">Listen</button></a>
          </div>
          <div>
            <p className="text-xl">QUARTO DI BUE</p>
            <a href="https://open.spotify.com/intl-it/album/7LAZxfodTzgKt3qwGqgCMf" target="_blank" ><button className="px-8 py-1 bg-[#e33632] text-white text-lg mt-6">Listen</button></a>
          </div>
          <div>
            <p className="text-xl">I NOMI DEL DIAVOLO OMBRA</p>
            <a href="https://open.spotify.com/intl-it/album/2Mf7h5v9Fxlbke064Sd6aC" target="_blank" ><button className="px-8 py-1 bg-[#e33632] text-white text-lg mt-6">Listen</button></a>
          </div>
          <div>
            <p className="text-xl">QUARTO DI BUE LIMITATA</p>
            <a href="https://open.spotify.com/intl-it/album/7LAZxfodTzgKt3qwGqgCMf" target="_blank" ><button className="px-8 py-1 bg-[#e33632] text-white text-lg mt-6">Listen</button></a>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default MyComponent;
