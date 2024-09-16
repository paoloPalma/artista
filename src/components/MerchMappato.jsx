import { Link } from "react-router-dom";
import { useShop } from "../providers/ShopProvider";
import IconShop from "./icons/IconShop";

const MerchMappato = ({ singolo }) => {
  const { handleClick } = useShop();

  return (
    <div className="border rounded-xl p-3 shadow-md hover:shadow-xl hover:shadow-red-300 shadow-red-300 transition-shadow duration-300 ease-in-out">
      <button className="w-full flex justify-end" onClick={() => handleClick(singolo)}>
        <IconShop />
      </button>
      <Link to={`/merch/${singolo.id}`} className="block mt-2">
        <img src={singolo.src} alt={singolo.name} className="my_dropshadow w-full h-auto rounded-lg mb-2" />
        <p className="text-center font-semibold text-base">{singolo.name}</p>
        <p className="text-center text-sm text-gray-600">{singolo.des ? singolo.des : ''}</p>
        <p className="text-center text-gray-600">{singolo.prezzo}</p>
      </Link>
    </div>
  );
}

export default MerchMappato;
