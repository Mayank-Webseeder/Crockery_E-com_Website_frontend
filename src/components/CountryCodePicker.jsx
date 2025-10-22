import { useState, useMemo } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { ChevronDown } from 'lucide-react';
import { countries } from './country-data';

export function CountryCodePicker({ selectedCountry, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const filteredCountries = useMemo(() => {
    if (!search.trim()) return countries;
    const lowercasedSearch = search.toLowerCase();
    return countries.filter(
      (country) =>
        country.name.toLowerCase().includes(lowercasedSearch) ||
        country.dial_code.includes(lowercasedSearch)
    );
  }, [search]);

  const handleSelect = (country) => {
    onSelect(country);
    setIsOpen(false);
    setSearch('');
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-between h-12 bg-gray-50 border-gray-200">
          <span className="flex items-center gap-2">
            <span className="text-xl">{selectedCountry.flag}</span>
            <span className="text-sm">{selectedCountry.dial_code}</span>
          </span>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0" align="start">
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
        <ScrollArea className="h-60">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
              <div
                key={country.code}
                className="flex items-center gap-3 px-3 py-2.5 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSelect(country)}
              >
                <span className="text-xl">{country.flag}</span>
                <span className="flex-1 text-sm whitespace-nowrap">{country.name}</span>
                <span className="text-sm text-muted-foreground">{country.dial_code}</span>
              </div>
            ))
          ) : (
            <div className="px-3 py-2.5 text-sm text-center text-muted-foreground">
              No countries found.
            </div>
          )}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}