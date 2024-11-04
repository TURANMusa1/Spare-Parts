import React from 'react';
import { brands } from '../data/mockData';
import { Link } from 'react-router-dom';

export default function BrandGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {brands.map((brand) => (
        <Link
          key={brand.id}
          to={`/brands/${brand.id}`}
          className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
            <img
              src={brand.logo}
              alt={brand.name}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{brand.name}</h3>
          <p className="text-sm text-gray-600 mt-1">
            {brand.commonIssues.length} solutions available
          </p>
        </Link>
      ))}
    </div>
  );
}