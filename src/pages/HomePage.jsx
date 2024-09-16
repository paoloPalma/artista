import { useEffect, useState } from "react";
import SlideShowHome from "../components/SlideShowHome";
import { Button, Input } from "@nextui-org/react";
import AccordionHome from "../components/AccordionHome";
import { biglietti } from "../components/Biglietti";
import { Link } from "react-router-dom";
import MyComponent from "../components/MyComponent";
import ScrollToTop from "../components/ScrollToTop";

const HomePage = () => {
  // Funzione per applicare la trasformazione al caricamento della pagina
  const windowWidth = window.innerWidth;
  /* const [controllo, setControllo] = useState(windowWidth); */
  const showRedDiv = () => {
    if (windowWidth >= 1024) {
      // Attiva la transizione solo se la larghezza dello schermo è maggiore o uguale a md in Tailwind CSS (768px)
      const redDiv = document.getElementById("redDiv");
      redDiv.style.transition = "transform 2s ease "; // Applica la transizione con una durata di 2 secondi
      redDiv.style.transform = "translateX(100%)"; // Sposta il redDiv sopra il blackDiv rendendolo visibile
      /* setControllo(windowWidth) */
    }
  };
  // Applica la trasformazione dopo il caricamento della pagina e ogni volta che il componente viene montato o aggiornato
  useEffect(() => {
    showRedDiv();
  }, []);

  /*  useEffect(() => {
    if(controllo == 1){
      const redDiv = document.getElementById("redDiv");
      redDiv.style.transition = "transform 4s ease"; // Applica la transizione con una durata di 2 secondi
      redDiv.style.transform = "translateX(100%)"; // Sposta il redDiv sopra il blackDiv rendendolo visibile
    }
  }, [windowWidth < 1024]); */

  //errore

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = () => {
    if (validateEmail(email)) {
      setIsError(false);
      setMessage("Successfully registered to the newsletter!");
      setEmail("");
      // Logica per mandare l'email al server o eseguire altre azioni di registrazione
    } else {
      setIsError(true);
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <>
      <div className="relative flex justify-center items-center h-[100vh]">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <video
          src="kidyugi.mp4"
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
        ></video>
        {/* <div className="z-10 absolute text-white text md:flex w-[87%] h-[80%] md:w-[56%] md:h-[60%]"> */}
        <div className="pt-20 md:pt-0 z-10 absolute text-white text lg:flex w-[400px] h-[800px] lg:w-[940px] lg:h-[550px] ">
          <div
            className="bg-black order-2  lg:order-1 w-[100%] h-[50%] lg:w-[50%] lg:h-[100%] lg:absolute z-[-1]"
            id="redDiv"
          >
            <div className="w-full h-[70%] ">
              <SlideShowHome width={"my_dropshadow mx-auto"}></SlideShowHome>
            </div>
            <div className="w-full h-[30%] text-center flex justify-center items-end">
              <div className="w-full pb-5 lg:pb-12">
                <p className="mb-2">Vinyl, CD, Zine & Merch</p>
                <Link to={'/merch'}><button className="bg-[#e33632] px-20 py-2">Buy now</button></Link>
              </div>
            </div>
          </div>
          <div
            className="bg-black order-1  lg:order-2 w-[100%] h-[50%] lg:w-[50%] lg:h-[100%]"
            id="blackDiv"
          >
            <img src="rosso_logo_home.webp" className="md:h-full object-cover"></img>
          </div>
        </div>
      </div>
      <div id="tour" className="relative">
        <img
          src="sfondo-home.jpg"
          className="absolute z-[-1] object-fill h-[110%] md:h-auto  "
        ></img>
        <p className="pt-40 lg:pt-0 text-center text-[41px] md:text-[3.125vw] text-white mb-16 darkCrystal_font">
          Tour
        </p>
        <div className="w-[87.0513vw] md:w-[56.4063vw] mx-auto  bg-white">
          {biglietti.map((biglietto, key) => (
            <>
              <div
                key={key}
                className="lg:flex md:justify-between w-full py-[2.60417vw] px-10 mb-6 md:mb-0 text-black"
              >
                <div className="w-[20%] lg:w-[15%] text-center my-auto mx-auto">
                  <p className="text-[ 5.1282vw]  md:text-[1.5625vw] ">
                    {biglietto.date}
                  </p>
                </div>
                <div className="w-full lg:w-[50%] mb-6 md:mb-0">
                  <div className="text-center">
                    <p className="font-bold text-[5.1282vw] md:text-[1.4583vw] leading-[7.4359vw] md:leading-[1.6146vw] md:mb-3">
                      {biglietto.where}
                    </p>
                    <p className="text-[5.1282vw] md:text-[1.4583vw] leading-[ 7.4359vw] md:leading-[1.6146vw] opacity-[0.5] md:mt-3">
                      {biglietto.title}
                    </p>
                    <p className="text-[5.1282vw] md:text-[1.4583vw] leading-[ 7.4359vw] md:leading-[1.6146vw] opacity-[0.5] md:mt-2">
                      {biglietto.des}
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-[30%] mt-4 ">
                  <div className="bg-black w-full  hover:bg-[#000000a1] transition duration-1000">
                    <Link to={`/${biglietto.id}`}>
                      <p className="text-center text-white text-[ 4.6154vw] md:text-[1.2583vw] leading-[12.3077vw] md:leading-[3.3333vw]">
                        Tickets
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <hr className="bg-black h-[1.5px]"></hr>
            </>
          ))}
        </div>
      </div>
      <div className=" md:h-[100vh] flex justify-center mt-[100px] items-center  w-full  bg-black">
        <div>
          <p className="text-center text-white text-[41px] md:text-[3.125vw] darkCrystal_font">
            Merch
          </p>
          <div className="md:flex mx-auto w-full">
            <div className="w-full md:w-[33,3%]">
              <img src="iNomiDel-removebg-preview.png"></img>
              <p className="text-center mt-[-60px] md:mt-[0] text-white text-[5.1282vw] md:text-[1.3021vw]">
                I Nomi Del Diavolo
              </p>
              <Link to={'/merch'}>
                <div className="text-black text-center mx-auto mb-10 mt-2 md:mt-6 py-[10px] bg-white w-[65.3846vw] md:w-[13.6875vw]">
                  Buy now
                </div>
              </Link>
            </div>
            <div className="w-full md:w-[33,3%]">
              <img src="magliettaGrigiaAvanti.png"></img>
              <p className="text-center  text-white text-[5.1282vw] md:text-[1.3021vw]">
                T-Shirt Lucifero Gray
              </p>
              <Link to={'/merch'}>
                <div className="text-black text-center mx-auto mb-10 mt-2 md:mt-6 py-[10px] bg-white w-[65.3846vw] md:w-[13.6875vw]">
                  Buy now
                </div>
              </Link>
            </div>
            <div className="w-full md:w-[33,3%]">
              <img src="quartoDiBue-removebg-preview.png"></img>
              <p className="text-center mt-[-60px] md:mt-[0] text-white text-[5.1282vw] md:text-[1.3021vw]">
                Quarto Di Bue
              </p>
              <Link to={'/merch'}>
                <div className="text-black text-center mx-auto mb-10 mt-2 md:mt-6 py-[10px] bg-white w-[65.3846vw] md:w-[13.6875vw]">
                  Buy now
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-white bg-black text-[41px] md:text-[3.125vw] darkCrystal_font">
        Music
      </p>
      <MyComponent></MyComponent>
      <div className="w-full h-[100vh] bg-black flex justify-center items-center">
        <div
          className="w-[80%] md:w-[30%]  md:h-[50%] text-white text-center"
          id="contentInputHome"
        >
          <p className="text-[41px] md:text-[3vw] mb-3 darkCrystal_font">
            Sign Up
          </p>
          <p className="text-[5.1282vw] md:text-[1.5625vw]">
            Follow and subscribe to be one of the first to know the latest on Ed
            sdfgsdf sdfg
          </p>
          <Input
            type="email"
            id="registration"
            variant="underlined"
            placeholder="Enter your email"
            className="mb-1 mt-5"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {message && (
            <p
              className={`text-[3.8462vw] md:text-[1.3vw] ${
                isError ? "text-red-500" : "text-green-500"
              }`}
            >
              {message}
            </p>
          )}
          <Button
            color=""
            id="buttonSing"
            variant="bordered"
            className="rounded-none w-full h-[10.7692vw] md:h-[3.4896vw] text-[3.8462vw] md:text-[1.5625vw] mt-10"
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <AccordionHome />
        </div>
      </div>
      <div className="">
        <ScrollToTop></ScrollToTop>
      </div>
    </>
  );
};

export default HomePage;