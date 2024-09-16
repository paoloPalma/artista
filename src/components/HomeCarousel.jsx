import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; // Stile personalizzato per il carosello, se necessario

const HomeCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000 // Velocità di scorrimento automatico in millisecondi
      };
  return (
    <Slider {...settings}>
      <div>
        <img src="magliettaGrigiaAvanti.webp" alt="Descrizione immagine 1" />
      </div>
      <div>
        <img src="magliettaGrigiaAvanti.webp" alt="Descrizione immagine 2" />
      </div>
      <div>
        <img src="magliettaGrigiaAvanti.webp" alt="Descrizione immagine 3" />
      </div>
      {/* Aggiungi altri div per più immagini */}
    </Slider>
  )
}

export default HomeCarousel