
import Slider from 'react-slick';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "" }}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, display: "block", background: "" }}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>

      </div>
    );
  }

const SliderMerch = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

  return (
    <div className="slider-container max-w-6xl mx-auto">
      <Slider {...settings} className='h-[200px] md:h-[550px]'>
        <div className='overflow-hidden h-[200px] md:h-[550px]'>
          <img className='w-[150%] md:w-[120%]' src='yugioh-Banner.avif'></img>
        </div>
        <div className='overflow-auto h-[200px] md:h-[550px]'>
          <img className='w-[150%] md:w-[120%]' src='bannerMerch2.jpg'></img>
        </div>
        <div className='overflow-hidden h-[200px] md:h-[550px]'>
          <img className='w-[150%] md:w-[120%]' src='bannerMerch3.jpg'></img>
        </div>
      </Slider>
    </div>
  )
}

export default SliderMerch