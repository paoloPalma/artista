import { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, Input } from "@nextui-org/react";
import { useTheme } from "../providers/ThemeProvider";
import { Link } from "react-router-dom";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { useShop } from "../providers/ShopProvider";
import IconShop from "./icons/IconShop";
import SearchIcon from "./icons/SearchIcon";
import { Merch } from "./Merch";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";


const HeaderLayout2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState('2xl');
  const variants = ["underlined"];
  const { prodotti } = useShop();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const menuItems = [
    {
      to: 'home',
      name: 'Home'
    },
    {
      to: 'chisono',
      name: 'Chi sono'
    },
    {
      to: 'merch',
      name: 'Merch'
    },
    {
      to: 'contatti',
      name: 'Contatti'
    },
  ];

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleReset = () => {
    setSearchTerm('');
  };

  useEffect(() => {
    if (isOpen) {
      // Non fare nulla quando la modal si apre
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      const filtered = Merch.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
      onOpen(); // Apri la modal solo quando c'è un termine di ricerca
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm]);

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="bg-white dark:bg-black h-[80px]">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link to={''}>
              <img src="/logo3.png" className="w-[50px]"></img>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4 " justify="center">
          <NavbarItem>
            <Link color="foreground" to="/" className="darkCrystal_font text-xl me-4">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/merch" className="darkCrystal_font text-xl me-4">
              Merch
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/chisono" className="darkCrystal_font text-xl me-4">
              Chi siamo
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" to="/contatti" className="darkCrystal_font text-xl">
              Contatti
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">

          <Link className="relative" to={'carrello'}>
            <span className="ms-[12px] mt-[5.5px] md:ms-[0] md:mt-[0] absolute left-[20%] top-[-30%] md:left-[50%] md:top-[-20%] text-[10px] bg-[#e33632] text-white py-1 px-2 rounded-full">{prodotti.length}</span>
            <IconShop />
          </Link>
          <NavbarItem>
            <Button isIconOnly size="md" className=" bg-transparent border "  onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <MoonIcon /> : <SunIcon />}
            </Button>
          </NavbarItem>

          <NavbarItem className="">
            <div className="flex flex-wrap gap-3">
              <Button isIconOnly key={size} className="bg-transparent border" onPress={() => handleOpen(size)}>
                <SearchIcon className={'w-[20px] block'} />
              </Button>
            </div>
           <Modal size={size} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
        <ModalHeader className="flex flex-col pb-0">
                      <form className="flex w-full justify-between items-center">
                        <div className="w-[83%]">
                          <div className="w-full flex">
                            {variants.map((variant) => (
                              <div key={variant} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                <Input value={searchTerm} onChange={handleSearchTermChange} type="text" variant={variant} label="Che cosa cerchi?" />
                              </div>
                            ))}
                          </div>
                        </div>
                        <button
                          type="reset"
                          onClick={handleReset}
                          className="flex text-sm items-center justify-center dark:text-white  text-black underline underline-offset-2"
                        >
                          CANCELLA
                        </button>
                      </form>
                    </ModalHeader>
          <ModalBody style={{ maxHeight: "70vh", overflowY: "auto" }}>
            {/* Corpo della modal */}
            {/* Il contenuto sarà scrollabile */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-4 gap-4 max-w-lg">
                {filteredProducts.map((prod) => (
                  <Link to={`/prodotti/${prod.id}`} key={prod.id}>
                    <img src={prod.src} alt={prod.name} />
                    <p className="text-center">{prod.name}</p>
                  </Link>
                ))}
              </div>
            ) : (
              <p>Nessun risultato trovato</p>
            )}
          </ModalBody>
          <ModalFooter>
            {/* Footer della modal */}
          </ModalFooter>
        </ModalContent>
      </Modal>
          </NavbarItem>

        </NavbarContent>
        <NavbarMenu className="px-16 pt-10">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                to={item.to === 'home' ? '/' : `/${item.to}`}
                size="lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex justify-between mt-4  ">
                  <div>
                    <p className="sottolineato2 my-0">
                      {item.name}
                    </p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  )
}

export default HeaderLayout2;

