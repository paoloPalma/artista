
import { Input } from '@nextui-org/react'
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const inputRef = useRef(null);

  const onSubmit = (data) => {
    console.log(data); // Puoi gestire qui la logica per inviare i dati
    setPaymentSuccess(true);
    setTimeout(() => {
      setPaymentSuccess(false);
    }, 5000); // Nascondi il messaggio dopo 5 secondi
  };

  useEffect(() => {
    if (paymentSuccess && inputRef.current) {
      inputRef.current.value = '';
    }
  }, [paymentSuccess]);

  return (
    <footer className='w-full pb-10 bg-black pt-20 '>
      <div className='max-w-6xl mx-auto px-6 md:px-0' >
        <div className='md:flex'>
          <div className='w-full md:w-[50%]'>
            <p className='text-[#808080] font-bold text-[12px]'>COME POSSIAMO AIUTARTI?</p>
            <Link to={'contatti'}>
              <p className='text-white text-[14px] underline underline-offset-4 mt-6'>Contattaci per maggiori informazioni</p>
            </Link>
            <Link to={'prodotti'}>
              <p className='text-white text-[14px] underline underline-offset-4 mt-4'>Tutte le borse</p>
            </Link>
            <Link to={'collab'}>
              <p className='text-white text-[14px] underline underline-offset-4 mt-4'>Scopri le collaborazioni di gucci</p>
            </Link>
            <Link to={''}>
              <p className='text-white text-[14px] underline underline-offset-4 mt-4'>Pagina home</p>
            </Link>
            <Link to={'chisiamo'}>
              <p className='text-white text-[14px] underline underline-offset-4 mt-4'>Scopri la storia di gucci</p>
            </Link>

          </div>
          <div className='w-full md:w-[50%] flex flex-col  relative z-[0] justify-between mt-10 md:mt-0'>
            <form className='h-[70px]' onSubmit={handleSubmit(onSubmit)}>
              <p className='text-[#808080] font-bold text-[12px]'>INSCRIVITI ALLA NEWSLETTER</p>
              <Input className='mt-4' type="email" variant={'borded'} ref={inputRef} label="Email" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}/>
              {errors.email && <p className="text-red-500 mt-1">Inserisci un'email valida</p>}
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" absolute top-[27%] md:top-[24.5%] right-6 w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </form>
              {paymentSuccess && (
                <div className="">
                    <p className="text-green-500">Richiesta inviata!</p>
                </div>
              )}
            <div className='mt-16 md:mt-0'>
              <p className='text-[#808080] font-bold text-[12px]'>SCOPRICI ANCHE SUI SOCIAL</p>
              <div className='flex items-center mt-2'>
                <div className='w-[6%] me-4'>
                  <img className='w-full ' src="/logo_insta.png" alt="" />
                </div>
                <div className='w-[4.5%] me-4'>
                  <img className='w-full ' src="/Logo_of_Twitter.png" alt="" />
                </div>
                <div className='w-[3.5%]'>
                  <img className='w-full  ' src="/logo_tiktok.png" alt="" />
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <p className='text-white mt-24'>© 2016 - 2021 Guccio Gucci S.p.A. - Tutti i Diritti Riservati. G Commerce Europe S.p.A. - IT VAT nr 05142860484. LICENZA SIAE N. 2294/I/1936 e 5647/I/1936</p>
      </div>
    </footer>
  )
}

export default Footer
