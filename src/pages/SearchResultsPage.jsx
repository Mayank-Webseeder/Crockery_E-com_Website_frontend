import React from 'react';
import { useSearch } from '../context/SearchContext';
import { ProductCard } from '../components/ProductCard';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../components/ui/breadcrumb";

export function SearchResultsPage() {
  const { searchTerm, searchResults } = useSearch();

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
       <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Search Results</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="text-center mb-10">
        <h1 className="text-4xl font-playfair mb-2">Search Results</h1>
        {searchTerm && (
          <p className="text-lg text-gray-600">
            Showing results for: <span className="font-semibold text-gray-800">"{searchTerm}"</span>
          </p>
        )}
      </div>

      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {searchResults.map(product => (
            // ✨ FIX: Passing the entire 'product' object as a single prop
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500">No products found matching your search.</p>
        </div>
      )}
    </div>
  );
}