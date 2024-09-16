import Slider from "react-slick";


const AutoPlaySliderMerch = () => {

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

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
      };

  return (
    <div className="slider-container m-4 md:m-10">
      <Slider {...settings}>
        <div>
          <img src='/felpaBiancaAvanti.png'></img>
        </div>
        <div>
          <img src="/iNomiDel-removebg-preview.png"></img>
        </div>
        <div>
          <img src="/felpaNeraAvanti.png"></img>
        </div>
        <div>
          <img src="/CDKid.png"></img>
        </div>
        <div>
          <img src="/magliettaGrigiaAvanti.png"></img>
        </div>
        <div>
          <img src="/LP-Ombra.png"></img>
        </div>
      </Slider>
    </div>
  )
}

export default AutoPlaySliderMerch