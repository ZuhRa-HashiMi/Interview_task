import React, { useState, useMemo, useEffect } from "react";
import useDebounce from "../hook/debounce";
import { countries } from "../utils/countries";

const SearchCountries = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // 500ms debounce
  const filteredCountries = useMemo(() => {
    console.log("Filtering countries...");
    return countries.filter((country) =>
      country.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [countries, debouncedSearchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    console.log("Debounced search term changed:", debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    console.log("Filtered countries changed:", filteredCountries);
  }, [filteredCountries]);

  return (
    <div>
      <form>
        <label>
          Search countries:
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
          />
        </label>
      </form>
      <ul>
        {filteredCountries.map((country, index) => (
          <li key={index}>{country}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchCountries;