import { createContext, useContext, useEffect, useState } from "react"
import { biglietti } from "../components/Biglietti";

const ThemeContext = createContext({
    darkMode:false,
});

export const useTheme = () => useContext(ThemeContext);

const isDark = localStorage.getItem('darkMode');

const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(isDark === 'true');

    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (searchWord) => {
          const newFilter = biglietti.filter((value) => {
            console.log(searchWord);
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
          });
          setFilteredData(newFilter);
    }
    
    useEffect(() => {
        console.log(darkMode);
        const html = document.querySelector('html');
        localStorage.setItem('darkMode', darkMode)
        if (darkMode) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }, [darkMode]);
    
    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode, handleFilter, filteredData, setFilteredData }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider