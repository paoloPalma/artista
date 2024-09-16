import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { useForm } from "react-hook-form";


const ContattiPage = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm();

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
      <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
        <div className="bg-[url('/contattiImg.webp')] w-full h-[92vh] bg-cover"></div>
        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 p-6 md:p-20'>
            <p className="font-semibold text-2xl mb-10">CONTATTACI</p>
            <div className="mb-3 h-[70px]">
              <Input type="text" variant={"underlined"} label="Nome" {...register("nome", { required: true })} />
              {errors.nome && <p className="text-red-500 mt-1">Il nome è richiesto</p>}
            </div>
            <div className="mb-3 h-[70px]">
              <Input type="text" variant={"underlined"} label="Cognome" {...register("cognome", { required: true })} />
              {errors.cognome && <p className="text-red-500 mt-1">Il cognome è richiesto</p>}
            </div>
            <div className="mb-3 h-[70px]">
              <Input type="email" variant={"underlined"} label="Email" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
              {errors.email && <p className="text-red-500 mt-1">Inserisci un'email valida</p>}
            </div>
            <div className="mb-3 h-[70px]">
              <Input type="text" variant={"underlined"} label="Messaggio" />
            </div>
            <div className="mb-3 h-[70px]">
              <input type="checkbox" {...register("privacy", { required: true })} />
              <label className="ml-2">Acconsento al trattamento dei dati personali secondo la normativa della Privacy vigente. Consulta la normativa online.</label>
              {errors.privacy && <p className="text-red-500 mt-1">È necessario accettare la normativa sulla privacy</p>}
            </div>
            <Button type='submit' className="bg-black w-full dark:border text-white shadow-lg mt-4">
              INVIA RICHIESTA
            </Button>
            {paymentSuccess && (
                <div className="border border-green-500 px-4 py-2 mt-3 rounded-2xl">
                    <p className="text-green-500 text-center font-bold">Richiesta inviata!</p>
                </div>
              )}
        </form>
      </div>
    </>
  )
}

export default ContattiPage

