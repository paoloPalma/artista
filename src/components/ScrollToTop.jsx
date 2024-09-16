import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {

    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            /* if(window.scrollY > 400 ) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            } */
            if(window.scrollY > 400 ) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
            
        })
    }, []);
    
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

  return (
    <>
        <div className='fixed top-[80%] left-[85%] md:left-[95%]'>
            {showTopBtn && (
                <button className='' onClick={goToTop}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bg-white dark:bg-black rounded-full shadow-md shadow-[#e33632] p-2 size-10 md:size-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                    </svg>
                </button>
            )}
        </div>
    </>
  )
}

export default ScrollToTop