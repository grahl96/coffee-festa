'use client';

import React from 'react';

export default function Gallery() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">보정동 카페거리는?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">이미지 {index}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 