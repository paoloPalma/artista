import { useParams } from "react-router-dom";
import { Merch } from "../components/Merch";
import SizeGuide from "../components/SizeGuide";
import AutoPlaySliderMerch from "../components/AutoPlaySliderMerch";
import Breadcrumbss from "../components/Breadcrumbs";

const VestitiLayout = () => {

  const { id } = useParams();
  const prod = Merch.find((merch) => merch.id.toString() === id);

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
            <SizeGuide></SizeGuide>
            <button className={`mb-10 w-full py-2 text-white transition-colors bg-black hover:bg-red-500`} id="sizeButton">
              Select a size
            </button>
          </div>
        </div>
        <AutoPlaySliderMerch></AutoPlaySliderMerch>
      </div>
    </>
  );
};

export default VestitiLayout;
