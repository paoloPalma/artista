import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useShop } from "../providers/ShopProvider";
import ScrollToTop from "../components/ScrollToTop";
import { useTheme } from "../providers/ThemeProvider";



const CarrelloPage = () => {
  const { darkMode } = useTheme();
  const { prodotti, setProdotti, roundedPrice } = useShop();

  const handleRemove = (id) => {
    const arr = prodotti.filter((prodotto) => prodotto.id !== id);
    setProdotti(arr);
  };

  const handleChange = (prodotto, d) => {
    let ind = -1;
    prodotti.forEach((data, index) => {
      if (data.id === prodotto.id) ind = index;
    });
    const tempArr = [...prodotti];
    if (tempArr[ind].amount + d >= 1) {
      tempArr[ind].amount += d;
      setProdotti(tempArr);
    }
  };

  return (
    <div className="pb-14 bg-white dark:bg-black">
      <div className="fixed top-14 z-[-1] h-[450px] w-full">
        <img src="banner_home2.jpg" alt="" className=" w-full" />
      </div>
      <div className="w-full mt-[130px] md:mt-[60vh] bg-white dark:bg-black">
        <div className=" max-w-6xl  mx-auto h-full  grid grid-cols-1 md:grid-cols-12 md:pt-14">
          <div className=" col-span-8 flex flex-col md:pe-6">
            <div className="md:flex justify-between w-full hidden ">
              <p className="text-[12px]  font-semibold">LE TUE SELEZIONI</p>
            </div>
            <hr className="mt-2 hidden md:block" />
            {prodotti.map((prodotto, index) => (
              <div key={index}>
                <div className="grid md:grid-cols-12 grid-cols-1 items-center text-center md:text-start md:h-[200px]">
                  <div className={`col-span-3 mx-auto md:p-2`}>
                    <img
                      src={prodotto.img_carrello ? prodotto.img_carrello : prodotto.src}
                      alt=""
                      className={darkMode ? "my_dropshadow" : ""}
                      id="img_carrello_shadow"
                    />
                  </div>
                  <div className="col-span-5">
                    <div>
                      <p>{prodotto.title ? prodotto.title : prodotto.name}</p>
                      {prodotto.size && <p className="text-sm font-light">Taglia: {prodotto.size}</p>} {/* Aggiungi la taglia selezionata */}
                    </div>
                    <div className="grid grid-cols-1 mt-10 ">
                      <button onClick={() => handleRemove(prodotto.id)} className="md:text-start font-semibold underline underline-offset-2">
                        RIMUOVI
                      </button>
                    </div>
                  </div>
                  <div className="col-span-4 grid grid-cols-2 my-6 md:my-0">
                    <div>
                      <button onClick={() => handleChange(prodotto, -1)}>-</button>
                      <button className="mx-2">{prodotto.amount}</button>
                      <button onClick={() => handleChange(prodotto, +1)}>+</button>
                    </div>
                    <div>
                      {prodotto.prezzoFalso ? prodotto.prezzoFalso : prodotto.prezzo}
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
          <div className=" col-span-4 p-6 border ">
            <p className="font-semibold">RIEPILOGO ORDINI</p>
            <hr className="my-1 w-[10%]" />
            <p className="mb-4 text-[11px] font-semibold">ITCART395190030</p>
            <hr className="mt-1" />
            <div className="my-4 flex justify-between">
              <p className="text-[13px] font-normal">Subtotale</p>
              <p className="text-sm font-normal">€ {roundedPrice}</p>
            </div>
            <div className="my-4 flex justify-between">
              <p className="text-[13px] font-normal">Spedizione</p>
              <p className="text-sm f">GLS</p>
            </div>
            <div className="my-4 flex justify-between">
              <p className="text-sm font-semibold">TOTALE STIMATO</p>
              <p className="text-2xl font-normal">€ {roundedPrice}</p>
            </div>
            <div className="my-4 flex justify-between">
              <p className="text-sm">IVA(inclusa)</p>
            </div>
            <div className="mb-4 mt-20">
              <p className="text-[14px] font-light">Il pagamento sarà addebitato solo al momento della spedizione, eccetto nel caso degli ordini DIY, per cui il pagamento totale è richiesto al momento dell'acquisto.</p>
            </div>
            <Button as={Link} to={'/checkout'} className="bg-black w-full dark:border  text-white shadow-lg mt-4">
              PAGAMENTO
            </Button>
          </div>
        </div>
      </div>
      <div className="">
        <ScrollToTop></ScrollToTop>
      </div>
    </div>
  );
};

export default CarrelloPage;
