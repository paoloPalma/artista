
import { useState, useEffect } from 'react';
import { vestiti } from './VestitiArray';

const SlideShowHome = ({width}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Funzione per passare alla prossima immagine
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % vestiti.length);
  };

  useEffect(() => {
    // Avvia lo slider automatico
    const intervalId = setInterval(nextSlide, 1000);

    // Pulisce l'intervallo quando il componente viene smontato
    return () => clearInterval(intervalId);
  }, []); // Questo effetto viene eseguito solo una volta al montaggio

  return (
    <div className='max-w-[300px] lg:max-w-[450px] mx-auto'>
      <img src={vestiti[currentIndex].src} id="slider" className={width} alt="Slide" />
    </div>
  );
};

export default SlideShowHome;