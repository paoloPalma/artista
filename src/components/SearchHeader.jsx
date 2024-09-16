import { Input } from "@nextui-org/react";
import { useState } from "react";
import { biglietti } from "./Biglietti";

const SearchHeader = () => {

    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
          const newFilter = biglietti.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
          });

          if(searchWord === '') {
            setFilteredData([]);
          } else {
            setFilteredData(newFilter);
          }
    };

    return (
        <div className="hidden md:block">
            <Input
                type="text"
                label="Search"
                labelPlacement="outside-left"
                placeholder="Ciao"
                onChange={handleFilter}
            />
            {filteredData.length != 0 && (
                <div className="dataResults">
                    {filteredData.slice(0, 15).map((value, key) => {
                        return <div key={key}>{value.title}</div>;
                    })}
                </div>
            )}
        </div>
    );
}

export default SearchHeader;