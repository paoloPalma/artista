import { useForm } from "react-hook-form";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useShop } from "../providers/ShopProvider";
import { useState } from "react";

const PagamentoPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {roundedPrice} = useShop();
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const onSubmit = (data) => {
    console.log(data); // Puoi gestire qui la logica per inviare i dati
    setPaymentSuccess(true);
    setTimeout(() => {
      setPaymentSuccess(false);
    }, 5000); // Nascondi il messaggio dopo 3 secondi
  };

  return (
    <>
      <p className='font-semibold text-2xl max-w-6xl mx-auto mt-10 ps-10 md:ps-0'>CHECKOUT</p>
      <form className='mb-20 grid grid-cols-1 md:grid-cols-12 max-w-6xl mx-auto mt-6' onSubmit={handleSubmit(onSubmit)}>
        <div className='col-span-1 md:col-span-8 pe-10 ps-10 md:ps-0 '>
          <div className='grid grid-cols-2 md:grid-cols-2 gap-x-10 h-[80px]'>
            <div className=" mb-6 md:mb-0 ">
              <Input type="text" variant={"underlined"} label="Nome" {...register("nome", { required: true })} />
              {errors.nome && <p className="text-red-500 mt-1">Il nome è richiesto</p>}
            </div>
            <div className=" mb-6 md:mb-0 ">
              <Input type="text" variant={"underlined"} label="Cognome" {...register("cognome", { required: true })} />
              {errors.cognome && <p className="text-red-500 mt-1">Il cognome è richiesto</p>}
            </div>
          </div>
          <div className='grid grid-cols-1 gap-10 h-[80px] '>
            <div className=" mb-6 md:mb-0 ">
              <Input type="text" variant={"underlined"} label="Indirizzo Linea 1" {...register("indirizzo", { required: true })} />
              {errors.indirizzo && <p className="text-red-500 mt-1">L'indirizzo è richiesto</p>}
            </div>
          </div>
          <div className='grid grid-cols-1 gap-10 mt-4 h-[80px] '>
            <div className=" mb-6 md:mb-0 ">
              <Input type="email" variant={"underlined"} label="Email" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
              {errors.email && <p className="text-red-500 mt-1">Inserisci un'email valida</p>}
            </div>
          </div>
          <p className="font-medium text-[12px] mt-10">PAESE/REGIONE</p>
          <div className="grid grid-cols-10 mt-2 gap-10 items-center">
            <div className="col-span-5 md:col-span-2 flex items-center ">
              <img src="italia.png" className="w-[20px] h-[15px] me-2 order-1 md:order-1" alt="Bandiera Italia" />
              <p className="me-3">Italia</p>
            </div>
            <div className="col-span-5 md:col-span-4 order-3 md:order-2 h-[80px]">
              <div className=" mb-6 md:mb-0 ">
                <Input type="text" variant={"underlined"} label="CITTA" {...register("citta", { required: true })} />
                {errors.citta && <p className="text-red-500 mt-1">La città è richiesta</p>}
              </div>
            </div>
            <div className="col-span-5 md:col-span-2 order-4 md:order-3 h-[80px]">
              <div className=" mb-6 md:mb-0 ">
                <Input type="text" variant={"underlined"} label="CAP" {...register("cap", { required: true })} />
                {errors.cap && <p className="text-red-500 mt-1">Il CAP è richiesto</p>}
              </div>
            </div>
            <div className="col-span-5  md:col-span-2 order-2 md:order-4 h-[80px]">
              <Select
                placeholder="PROVINCIA"
                className="max-w-xs"
                {...register("provincia", { required: true })}
              >
                <SelectItem>AG</SelectItem>
                <SelectItem>AL</SelectItem>
                <SelectItem>AN</SelectItem>
                <SelectItem>AO</SelectItem>
                <SelectItem>AP</SelectItem>
                <SelectItem>AT</SelectItem>
                <SelectItem>AV</SelectItem>
              </Select>
              {errors.provincia && <p className="text-red-500 mt-1">La provincia è richiesta</p>}
            </div>
          </div>
          <p className="font-medium text-[12px] mt-10">NUMERO DI TELEFONO*</p>
          <p className="font-normal text-[12px] m">Ti contatteremo solo ai fini della consegna.</p>
          <div className="grid grid-cols-1 h-[80]">
            <div className=" my-4 md:mb-0 ">
              <Input type="text" variant={"underlined"} label="Numero" {...register("numeroTelefono", { required: true, pattern: /^((00|\+)39[\. ]??)??3\d{2}[\. ]??\d{6,7}$/ })} />
              {errors.numeroTelefono && <p className="text-red-500 mt-1">Il numero di telefono è richiesto</p>}
            </div>
          </div>
            {/* Altri campi di input con validazione */}
        </div>
        <div className='col-span-1 md:col-span-4 border p-6 mt-10 md:mt-0'>
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
              <Button type='submit' className="bg-black w-full dark:border text-white shadow-lg mt-4">
                PROCEDI AL PAGAMENTO
              </Button>
              {paymentSuccess && (
                <div className="border border-green-500 px-4 py-2 mt-3 rounded-2xl">
                    <p className="text-green-500 text-center font-bold">Pagamento effettuato con successo!</p>
                </div>
              )}
        </div>
      </form>
    </>
  )
}

export default PagamentoPage;