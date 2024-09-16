import { Link } from "react-router-dom";

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className='w-full bg-black h-[80px] md:h-[110px] flex justify-between text-white md:text-[25px] px-6 md:px-40 items-center darkCrystal_font'>
        <Link to={'/chisono'}>Chi sono</Link>
        <button onClick={() => scrollToSection('tour')} className="text-white">Tour</button>
        <Link to={''}><img src="/logo3.png" className="w-[50px] md:w-[100px] md:mt-[35px] relative z-50"></img></Link>
        <Link to={'/merch'}>Merch</Link>
        <Link to={'/contatti'}>Contatti</Link>
      </div>
    </>
  );
};

export default Header;