import { Link, useParams } from "react-router-dom";
import { biglietti } from "../components/Biglietti";
import Minus from "../components/icons/Minus";
import Plus from "../components/icons/Plus";
import RadioComponentsTickets from "../components/RadioComponentsTickets";
import AccordionTickets from "../components/AccordionTickets";
import StarsRow from "../components/icons/StarsRow";
import Accordion2Tickets from "../components/Accordion2Tickets";
import { useEffect, useState } from "react";


const BigliettoPage = () => {
  const { id } = useParams();
  const prod = biglietti.find((merch) => merch.id.toString() === id);


  const localStorageKey = `biglietto-${id}`;

  // Recupera la quantità dal localStorage o usa prod.amount come predefinito
  const [numero, setNumero] = useState(() => {
    const savedAmount = localStorage.getItem(localStorageKey);
    return savedAmount !== null ? parseInt(savedAmount, 10) : prod.amount;
  });

  // Aggiorna il localStorage quando numero cambia
  useEffect(() => {
    localStorage.setItem(localStorageKey, numero);
  }, [localStorageKey, numero]);

 




  


  return (
    <>
      <div className="bg-[#e5e5e5] pb-10 ">
        <div className="shadow-xl relative max-w-[1450px] mx-auto flex justify-center items-end margine">
          <div className="relative md:h-[300px] w-full h-[50vh] overflow-hidden">
            <img
              className={`object-cover object-right w-full h-full hi ${prod.classImgBg}`}
              src={prod.imgBg}
              alt="Background" 
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-black"></div>
          </div>
          <div className="bg-black md:bg-transparent absolute text-center md:text-left text-white md:top-10 md:left-[20%] z-10 larghezza_pp margine-tolto py-3 md:py-0">
            <p className="text-lg md:text-3xl mb-2 md:mb-4">{prod.title}</p>
            <div className="flex justify-center md:justify-start items-center md:mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#e33632"
                className="size-5 md:size-7 me-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
              <p>{prod.dataCompleta}</p>
            </div>

            <div className="flex md:justify-start justify-center items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#e33632"
                className="size-5 md:size-7 me-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>

              <p >
                {prod.where} | {prod.des}
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[1450px] bg-red-50  shadow-xl  mx-auto">
          <div className="h-full max-w-[1064px] mx-auto px-2 ">
            <div className="flex justify-normal items-center py-6 text-[10px] ">
              <p className="dark:text-black">
                Call Center Kid Yugi 892.101 // LU-VE: 8-21; SA: 9-17,30; DO:
                chiuso
              </p>
              <img src="call-center_logo_IT.png"></img>
            </div>
            <div className="flex justify-normal items-center pb-6 text-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={4}
                stroke="#e33632"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
              <Link to={"/"}>
                <p className="ms-2 dark:text-black">Torna all'elenco delle date</p>
              </Link>
            </div>
            <div className="w-full h-full bg-white dark:bg-black rounded-lg shadow-lg">
              <div className="flex justify-between py-[26px] px-6 border-b-1">
                <p className="text-xl">
                  1. Per favore seleziona il numero di biglietti desiderati:
                </p>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setNumero(numero > 0 ? numero - 1 : 0)}
                    className="bg-[#e33632] hover:bg-[#522626] rounded-xl p-2"
                  >
                    <Minus></Minus>
                  </button>
                  <p className="text-xl mx-3">{numero}</p>
                  <button
                    onClick={() => setNumero(numero + 1)}
                    className="bg-[#e33632] hover:bg-[#522626] rounded-xl p-2"
                  >
                    <Plus></Plus>
                  </button>
                </div>
              </div>
              <div className="flex py-[26px] px-6 border-b-1">
                <p className="text-xl">
                  2. Per favore seleziona la categoria di posto:
                </p>
              </div>
              <RadioComponentsTickets numero={numero} prod={prod}></RadioComponentsTickets>
            </div>
            <div className="bg-white dark:bg-black rounded-lg shadow-lg mt-4">
              <AccordionTickets></AccordionTickets>
            </div>
            <p className="text-[12px] py-4 text-[#666]">
              Il prezzo, ove riferito a Titoli di Ingresso, s’intende inclusivo
              del diritto di prevendita fissato dall’Organizzatore. Per
              conoscere la composizione del prezzo del tuo biglietto clicca qui
              Il prezzo in ogni caso non include le commissioni e le spese
              relative al servizio di vendita online (anche tramite Call Center)
              prestato da TicketOne Maggiori informazioni.
            </p>
          </div>
        </div>
        <div className="max-w-[1450px] bg-white dark:bg-black mx-auto">
          <div className="max-w-[1064px] mx-auto px-2 py-4">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-[25px] me-2">{prod.des}</p>
              <div className="bg-[#e5e5e5] w-full h-3 mt-3"></div>
            </div>
            <div className="flex justify-normal items-center">
              <p className="me-1 text-[#005388] text-[14px]">
                2 Fan report (Ø 5,0)
              </p>
              <StarsRow></StarsRow>
            </div>
            <div className="md:flex justify-between mt-2 w-full px-">
              <img
                className="rounded-xl w-[50%] md:w-[17%]"
                src={prod.imgIndirizzo}
              ></img>
              <div className="w-full md:w-[80%]">
                <div className="mb-4">
                  <p>Indirizzo</p>
                  <p>{prod.indirizzo}</p>
                </div>
                <div className="md:flex justify-between">
                  <div className="md:w-[32%]">
                    <div className="flex justify-between w-full">
                      <p>Atmosfera</p>
                      <StarsRow></StarsRow>
                    </div>
                    <div className="flex justify-between w-full">
                      <p>Acustica e visuale</p>
                      <StarsRow></StarsRow>
                    </div>
                  </div>
                  <div className="md:w-[32%]">
                    <div className="flex justify-between w-full">
                      <p>Servizi igienici</p>
                      <StarsRow></StarsRow>
                    </div>
                    <div className="flex justify-between w-full">
                      <p>Parcheggi</p>
                      <StarsRow></StarsRow>
                    </div>
                  </div>
                  <div className="md:w-[32%]">
                    <div className="flex justify-between w-full">
                      <p>Servizi</p>
                      <StarsRow></StarsRow>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Accordion2Tickets prod={prod}></Accordion2Tickets>
          </div>
        </div>
        <div className="max-w-[1450px] bg-red-50 shadow-xl  mx-auto">
          <div className="h-full max-w-[1064px] mx-auto py-4">
            <p className="text-2xl mb-6 text-center md:text-left dark:text-black">
              I tuoi vantaggi
            </p>
            <div className="flex justify-between  md:w-[45%] mx-3">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#fff"
                  className="size-12 bg-[#68c2c0] rounded-full p-2 mx-auto mb-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
                <p className="text-[12px] text-[#666]">
                  Sicurezza dei tuoi dati
                </p>
              </div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#fff"
                  className="size-12 bg-[#ceb891] rounded-full p-2 mx-auto mb-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
                <p className="text-[12px] text-[#666]">
                  Biglietti originali garantiti
                </p>
              </div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#fff"
                  className="size-12 bg-[#a4c5aa] rounded-full p-2 mx-auto mb-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>

                <p className="text-[12px] text-[#666]">
                  Sicurezza dei tuoi dati
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BigliettoPage