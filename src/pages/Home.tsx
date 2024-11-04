import React from 'react';
import SearchBar from '../components/SearchBar';
import BrandGrid from '../components/BrandGrid';
import SolutionCard from '../components/SolutionCard';
import { solutions } from '../data/mockData';

export default function Home() {
  const handleSearch = (query: string) => {
    // Implement search functionality
    console.log('Searching for:', query);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Technical Support & Parts
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Find solutions to common problems or shop for quality spare parts
        </p>
        <SearchBar onSearch={handleSearch} />
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Brands</h2>
        <BrandGrid />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Common Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map(solution => (
            <SolutionCard key={solution.id} solution={solution} />
          ))}
        </div>
      </section>
    </div>
  );
}