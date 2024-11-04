import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { solutions } from '../data/mockData';
import type { Solution } from '../types';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Solution[]>([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length > 2) {
      const filtered = solutions.filter(
        solution =>
          solution.errorCode?.toLowerCase().includes(query.toLowerCase()) ||
          solution.title.toLowerCase().includes(query.toLowerCase()) ||
          solution.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setShowResults(true);
    } else {
      setResults([]);
      setShowResults(false);
    }
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleResultClick = (solution: Solution) => {
    navigate(`/solutions/${solution.id}`);
    setShowResults(false);
    setQuery('');
  };

  return (
    <div className="w-full max-w-3xl relative">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by error code or describe your problem..."
            className="w-full px-4 py-3 pl-12 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </form>

      {showResults && results.length > 0 && (
        <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-50">
          {results.map((result) => (
            <button
              key={result.id}
              onClick={() => handleResultClick(result)}
              className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b last:border-b-0"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">{result.title}</h4>
                  {result.errorCode && (
                    <span className="inline-block px-2 py-1 mt-1 text-xs bg-blue-100 text-blue-800 rounded">
                      Error: {result.errorCode}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}