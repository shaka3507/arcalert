'use client';

import React from 'react';

const BlendedImage = ({ imageSrc }: { imageSrc: string}) => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="relative h-1/4 overflow-hidden">
        <img
          src={imageSrc}
          alt="Blended Image"
          className="absolute inset-0 w-full h-full object-cover opacity-75"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>
      <div className="p-4">
        <h1 className="text-2xl">Your Main Content</h1>
        <p>This is some content below the blended image...</p>
      </div>
    </div>
  );
};


export default BlendedImage;