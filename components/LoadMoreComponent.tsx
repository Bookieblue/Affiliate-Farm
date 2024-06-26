'use client'

import React, { useState, useEffect } from 'react';
import Programs from '../components/Programs';
import { fetchPrograms, programData } from '../lib/data';
import { ArrowDown } from 'lucide-react';
import Image from "next/image";

interface LoadMoreProgramsProps {
  searchQuery: string;
}

const LoadMorePrograms: React.FC<LoadMoreProgramsProps> = ({ searchQuery }) => {
  const [programs, setPrograms] = useState<typeof programData>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadPrograms = async (initialLoad = false) => {
    setLoading(true);
    const newPrograms = await fetchPrograms(initialLoad ? 0 : offset, 9, searchQuery);
    setPrograms(prevPrograms => initialLoad ? newPrograms : [...prevPrograms, ...newPrograms]);
    setOffset(prevOffset => initialLoad ? 9 : prevOffset + 9);
    setLoading(false);
    if (newPrograms.length < 9) {
      setHasMore(false); // No more programs to load
    }
  };

  useEffect(() => {
    loadPrograms(true); // Load initial programs
  }, [searchQuery]);

  if (programs.length === 0) {
    return (
      <div className="flexCenter mt-20 flex-col  h-full w-full">
        <Image src="/empty-state.svg" alt="No Programs" width={200} height={200} />
        <p className="text-gray-600 mt-4">No affiliate program added yet</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-7">
        {programs.map((program, index) => (
          <Programs key={index} {...program} />
        ))}
      </div>
      {hasMore && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => loadPrograms()}
            className="px-2 py-2 bg-[#8D8885] text-[#14181A] font-medium text-sm rounded hover:bg-yellow-50 mt-5 flexCenter gap-2"
            disabled={loading}
          >
            <ArrowDown className='size-4 text-[#14181A]' /> {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default LoadMorePrograms;
