import Image from 'next/image';
import React from 'react';

interface ImageBoxProps {
  images: { id: number; src: string | null }[];
}

function ImageBox({ images }: ImageBoxProps) {
  return (
    <div className='flex space-x-4'>
      {images.map((img) => (
        <div
          key={img.id}
          className='relative w-40 h-40 border rounded border-text-gray'
        >
          {img.src ? (
            <Image
              fill
              src={img.src}
              alt={`${img.id}`}
              className='object-cover w-full h-full rounded-md'
            />
          ) : (
            <div className='absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
              이미지아이콘
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ImageBox;
