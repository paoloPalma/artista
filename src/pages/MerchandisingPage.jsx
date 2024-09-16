/* import SliderMerch from "../components/SliderMerch" */
"use client";
import { motion } from "framer-motion";
import { ImagesSlider } from "../@/components/ui/images-slider";
import { useTheme } from "../providers/ThemeProvider";
import MerchMappato from "../components/MerchMappato";
import { Merch } from "../components/Merch";
import { categoryMerch } from "../components/categoryMerch";
import { useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import { useShop } from "../providers/ShopProvider";


const MerchandisingPage = () => {
  const {darkMode} = useTheme();
  const {warning} = useShop();
  const {alertMessage} = useShop();
  
  

  const filtri = document.querySelectorAll('#filtri p');

  if(darkMode){
    filtri.forEach(paragrafo => {
      paragrafo.classList.add('sottolineatoH');
    });
  } else {
    filtri.forEach(paragrafo => {
      paragrafo.classList.remove('sottolineatoH');
    })
  }

  //filtri 
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const images = [
    'bannerMerch2.jpg',
    'bannerMerch3.jpg',
  ];

  return (
    <>
      {/* <SliderMerch></SliderMerch> */}
      {/* slider ace */}
          <ImagesSlider className="h-[80vh]" images={images}>
          <motion.div 
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center h-[80vh]">
            <motion.p
              className="darkCrystal_font text-[50px] md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              CARRELLO <br />
            </motion.p>
          </motion.div>
        </ImagesSlider>
        {/* slider ace */}
        {warning && <div className=" text-[16px] md:text-[20px] darkCrystal_font fixed top-[10%] w-[250px] md:w-[400px] left-[35%] md:left-[75%] p-4 md:p-10 bg-white text-center shadow-md shadow-[#e33632] rounded-xl z-[10000]">{alertMessage}</div>}
          <div className="flex mx-auto max-w-lg px-10 justify-between mt-10 mb-10  " id="filtri">
            {
              categoryMerch.map((category, key) => (
                <p
                  key={key}
                  className={`${category.name === activeCategory ? 'text-[#e33632] underline underline-offset-4 my-[20px] mx-auto' : category.class}`} 
                  onClick={() => setActiveCategory(category.name)}
                  id={category.id}
                >
                  {category.name}
                </p>
              ))
            }
          </div>
          <div className="grid grid-cols-1  md:grid-cols-4 max-w-6xl mx-auto pb-20 gap-6">
            {
              Merch
              .filter(singolo =>{
                return activeCategory === 'All' || singolo.filtro.includes(activeCategory);
              })
              .map((singolo) => (
                <MerchMappato singolo={singolo} key={singolo.id}></MerchMappato>
              ))
            }
          </div>
          <div className="">
            <ScrollToTop></ScrollToTop>
          </div>
    </>
  )
}

export default MerchandisingPage