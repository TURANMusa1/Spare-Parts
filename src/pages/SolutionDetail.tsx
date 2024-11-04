import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { solutions } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import { ArrowLeft, PlayCircle } from 'lucide-react';

export default function SolutionDetail() {
  const { id } = useParams();
  const solution = solutions.find(s => s.id === id);

  if (!solution) {
    return <div>Solution not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/" className="flex items-center text-blue-600 mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Solutions
      </Link>

      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {solution.title}
          </h1>
          {solution.errorCode && (
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              Error Code: {solution.errorCode}
            </span>
          )}
          <p className="text-gray-600 mt-4">{solution.description}</p>
        </div>

        {solution.videoUrl && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Video Tutorial
            </h2>
            <a
              href={solution.videoUrl}
              className="flex items-center text-blue-600 hover:text-blue-700"
            >
              <PlayCircle className="h-5 w-5 mr-2" />
              Watch Video Guide
            </a>
          </div>
        )}

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Step-by-Step Guide
          </h2>
          <ol className="space-y-4">
            {solution.steps.map((step, index) => (
              <li key={index} className="flex">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold mr-3">
                  {index + 1}
                </span>
                <p className="text-gray-700 pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {solution.relatedProducts.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Recommended Parts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solution.relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}