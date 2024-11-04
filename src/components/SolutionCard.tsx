import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Solution } from '../types';

interface SolutionCardProps {
  solution: Solution;
}

export default function SolutionCard({ solution }: SolutionCardProps) {
  return (
    <Link
      to={`/solutions/${solution.id}`}
      className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{solution.title}</h3>
          {solution.errorCode && (
            <span className="inline-block px-2 py-1 mt-2 text-sm bg-blue-100 text-blue-800 rounded">
              Error: {solution.errorCode}
            </span>
          )}
          <p className="mt-2 text-gray-600">{solution.description}</p>
        </div>
        <ArrowRight className="text-gray-400" />
      </div>
    </Link>
  );
}