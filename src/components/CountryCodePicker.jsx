// src/components/CountryCodePicker.jsx
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { countries } from './country-data';
import { Input } from './ui/input';
import { ChevronDown } from 'lucide-react';
import { cn } from './ui/utils';

// The 'onSelect' prop will be a function passed from the parent (ContactPage)
export function CountryCodePicker({ onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(
    countries.find(c => c.code === 'IN') || countries[0]
  );
  const dropdownRef = useRef(null);

  const filteredCountries = useMemo(() => {
    if (!search.trim()) return countries;
    const lowercasedSearch = search.toLowerCase();
    return countries.filter(country =>
      country.name.toLowerCase().includes(lowercasedSearch) ||
      country.dial_code.includes(lowercasedSearch)
    );
  }, [search]);

  // Effect to close the dropdown when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Handle selecting a country from the list
  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    onSelect(country); // Pass the selected country object to the parent
    setIsOpen(false);
    setSearch('');
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className={cn(
          "flex items-center justify-between w-full h-12 rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center gap-2">
          <span className="text-xl">{selectedCountry.flag}</span>
        </span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu Container */}
      {isOpen && (
        <div className="absolute z-50 mt-2 w-[300px] bg-white shadow-lg rounded-md border border-gray-200">
          <div className="p-2 border-b">
            <Input
              type="text"
              placeholder="Search country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-9"
              autoFocus
            />
          </div>
          
          {/* Scrollable List with custom class */}
          <ul className="max-h-60 overflow-y-auto country-list-scroll">
            {filteredCountries.length > 0 ? (
              filteredCountries.map(country => (
                <li
                  key={country.code}
                  className="flex items-center gap-3 px-3 py-2.5 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSelectCountry(country)}
                >
                  <span className="text-xl">{country.flag}</span>
                  <span className="flex-1 text-sm whitespace-nowrap">{country.name}</span>
                  <span className="text-sm text-muted-foreground">{country.dial_code}</span>
                </li>
              ))
            ) : (
              <li className="px-3 py-2.5 text-sm text-center text-muted-foreground">
                No countries found.
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}