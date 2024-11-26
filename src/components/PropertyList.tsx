import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Property } from '../types';

interface PropertyListProps {
  properties: Property[];
  onPropertySelect: (property: Property) => void;
  selectedProperty: Property | null;
}

export function PropertyList({ properties, onPropertySelect, selectedProperty }: PropertyListProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Properties Overview</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {properties.map((property) => (
          <div 
            key={property.id} 
            className={`flex-none w-[300px] bg-white dark:bg-gray-800 rounded-lg overflow-hidden border cursor-pointer transition-all
              ${selectedProperty?.id === property.id 
                ? 'border-blue-500 dark:border-blue-400 ring-2 ring-blue-200 dark:ring-blue-500/20' 
                : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500'}`}
            onClick={() => onPropertySelect(property)}
          >
            <div className="relative">
              <img
                src={property.image}
                alt={`Unit ${property.unit}`}
                className="w-full h-40 object-cover"
              />
              <div className="absolute top-2 right-2">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full
                  ${property.status === 'occupied' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 
                    property.status === 'vacant' ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200' : 
                    'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'}`}>
                  {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Unit {property.unit}</h3>
                <p className="text-lg font-bold text-blue-600 dark:text-blue-400">${property.rent.toLocaleString()}</p>
              </div>
              <div className="flex items-center space-x-3">
                {property.tenantImage ? (
                  <img
                    src={property.tenantImage}
                    alt={property.tenant}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400 text-xs">N/A</span>
                  </div>
                )}
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{property.tenant || 'Vacant'}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Last Payment: {property.lastPayment || 'N/A'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}