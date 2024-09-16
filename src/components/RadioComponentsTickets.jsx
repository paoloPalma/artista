import {RadioGroup, Radio} from "@nextui-org/react";
import { useShop } from "../providers/ShopProvider";
import { useState } from "react";

const RadioComponentsTickets = ({prod, numero}) => {

    const [selected, setSelected] = useState("34,50");
    const { handleClick } = useShop();


  return (
    <div className="flex flex-col gap-3 ">
      <RadioGroup label="" value={selected} onValueChange={setSelected}>
        <div className="flex justify-between w-full py-[26px] px-6 md:px-[43px] border-b-1">
          <div className="flex justify-normal items-center">
            <div className="md:flex">
              <p className="text-xl">Posto Unico</p>
              <p className="text-sm md:ms-[215px] text-[#666]">Intero</p>
            </div>
          </div>
          <Radio className="radio" value="34,50">
            € 34,50
          </Radio>
        </div>
        <div className="flex justify-between w-full py-[26px] px-6 md:px-[43px] border-b-1">
          <div className="flex justify-normal items-center">
            <div className="md:flex">
              <p className="text-xl">Early Entry dalle 18:30 alle 20:00</p>
              <p className="text-sm md:ms-10 text-[#666]">Intero</p>
            </div>
          </div>
          <Radio className="radio" value="46,00">
            € 46,00
          </Radio>
        </div>
      </RadioGroup>
      <div className="flex justify-end w-full py-[26px] px-6 border-b-1">
        <button onClick={() => handleClick(prod, numero)} className=" w-full md:w-1/3 bg-[#e33632] hover:bg-[#522626] py-2 rounded-xl">
          <div className="flex justify-between mx-auto w-[40%] md:w-[45%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fff"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <p className="text-white">Biglietti, € {selected}</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default RadioComponentsTickets