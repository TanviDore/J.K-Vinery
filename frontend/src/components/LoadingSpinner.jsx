import React from 'react';
import { Grape } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-50">
      <div className="relative flex flex-col items-center">
        {/* Pulsing Grape Icon */}
        <div className="grape-pulse flex items-center justify-center rounded-full bg-purple-100 p-6">
          <Grape className="h-16 w-16 text-purple-700" />
        </div>
        
        {/* Premium Loading text */}
        <h2 className="mt-6 font-serif text-2xl font-bold tracking-wide text-purple-900">
          J.K. Farm
        </h2>
        <p className="mt-2 text-sm font-medium uppercase tracking-widest text-stone-500">
          Loading Experience...
        </p>
      </div>
    </div>
  );
}
