import { useParams } from "react-router-dom";
import { Merch } from "../components/Merch";
import RadioGroupSize from "../components/RadioGroupSize";
import ArrowLeft from "../components/icons/ArrowLeft";
import ArrowRight from "../components/icons/ArrowRight";
import SizeGuide from "../components/SizeGuide";
import AutoPlaySliderMerch from "../components/AutoPlaySliderMerch";
import { useState, useEffect } from "react";
import Breadcrumbss from "../components/Breadcrumbs";
import { useShop } from "../providers/ShopProvider";

const VestitiLayout = ({ size }) => { // Aggiungi category come prop
  const { id } = useParams();
  const prod = Merch.find((merch) => merch.id.toString() === id);

  // Genera una chiave unica per localStorage basata su id e categoria
  const localStorageKey = `merch-${id}`;

  // Recupera la quantità dal localStorage o usa prod.amount come predefinito
  const [numero, setNumero] = useState(() => {
    const savedAmount = localStorage.getItem(localStorageKey);
    return savedAmount !== null ? parseInt(savedAmount, 10) : prod.amount;
  });
  
  // Aggiorna il localStorage quando numero cambia
  useEffect(() => {
    localStorage.setItem(localStorageKey, numero);
  }, [localStorageKey, numero]);

  

  const [selectedSize, setSelectedSize] = useState(null);


  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    let sizeButton = document.querySelector('#sizeButton');
    if (selectedSize == null) {
      sizeButton.textContent = 'Select a size';
    } else {
      sizeButton.classList.remove('hover:cursor-not-allowed');
    }
  };

  // Aggiungi la taglia selezionata al prodotto quando viene aggiunto al carrello
  const { handleClick } = useShop();

  const handleAddToCart = () => {
    if (selectedSize) {
      const productWithSize = { ...prod, size: selectedSize, amount: numero };
      handleClick(productWithSize);
    }
  };

  

  return (
    <>
      <div className="max-w-6xl mx-auto my-10 p-6 border rounded-lg shadow-lg bg-white">
        <div className="w-full my-8">
          <Breadcrumbss prod={prod}></Breadcrumbss>
        </div>
        <div className="w-full grid grid-cols-2 gap-8">
          <div className="col-span-2 md:col-span-1 flex justify-center shadow-lg items-center rounded-lg">
            <img src={`/${prod.src}`} alt={prod.name} />
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-bold text-black">{prod.name}</p>
            <p className="text-xl text-red-500 mb-10">{prod.prezzo}</p>
            <p className="text-lg text-gray-700">Size *</p>
            <RadioGroupSize onSizeSelect={handleSizeSelect}></RadioGroupSize>
            <div className="flex my-4 items-center">
              <div className="border rounded-l-lg">
                <button onClick={() => setNumero(numero > 0 ? numero - 1 : 0)} className="p-2 hover:bg-red-500 hover:text-white transition-colors">
                  <ArrowLeft></ArrowLeft>
                </button>
              </div>
              <div className="text-center border w-[45px] flex items-center justify-center bg-gray-100">
                <p className="text-[13px]">{numero}</p>
              </div>
              <div className="border rounded-r-lg">
                <button onClick={() => setNumero(numero + 1)} className="p-2 hover:bg-red-500 hover:text-white transition-colors">
                  <ArrowRight></ArrowRight>
                </button>
              </div>
            </div>
            <button onClick={handleAddToCart} className={`mb-10 w-full py-2 text-white transition-colors ${selectedSize == null ? 'bg-black opacity-50 cursor-not-allowed' : 'bg-black hover:bg-red-500'}`} id="sizeButton" disabled={selectedSize == null}>
              Select a size
            </button>
            <SizeGuide></SizeGuide>
          </div>
        </div>
        <AutoPlaySliderMerch></AutoPlaySliderMerch>
      </div>
    </>
  );
};

export default VestitiLayout;
