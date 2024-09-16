import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

const ShopProvider = ({ children }) => {
  const [warning, setWarning] = useState(false);
  const [show, setShow] = useState();
  const [count, setCount] = useState(1);
  const [countTickets, setCountTickets] = useState(1);
  const [prodotti, setProdotti] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (num, change) => {
    setCount(prevCount => {
      const newCount = prevCount + change;
      return newCount < 1 ? 1 : newCount;
    });
  };

  const handleChangeTickets = (num, change) => {
    setCountTickets(prevCount => {
      const newCount = prevCount + change;
      return newCount < 1 ? 1 : newCount;
    });
  };

  const handleClick = (prod, quantity = 1) => {
    let isPresent = false;
    prodotti.forEach((prodotto) => {
      if (prod.id === prodotto.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      setAlertMessage("Prodotto gia aggiunto al carrello");
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
        setAlertMessage("");
      }, 5000);
      return;
    }
    const prodWithQuantity = { ...prod, amount: quantity };
    setProdotti([...prodotti, prodWithQuantity]);
    setAlertMessage("Prodotto aggiunto al carrello");
    setWarning(true);
    setTimeout(() => {
      setWarning(false);
      setAlertMessage("");
    }, 4000);
  };

  const price = prodotti.reduce((prev, borsa) => {
    const prezzo = borsa.prezzoVero !== undefined ? borsa.prezzoVero : borsa.prezzoCar;
    return prev + prezzo * borsa.amount;
  }, 0);

  const roundedPrice = price.toFixed(2);

  return (
    <ShopContext.Provider value={{
      prodotti, setProdotti, handleClick, count, setCount, handleChange, countTickets, setCountTickets, handleChangeTickets, price, roundedPrice, alertMessage, warning, setAlertMessage, 
    }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;