'use client';
import React, { useState } from 'react';
import { Input } from './ui/input';
import Image from 'next/image';

interface ImageUploadProps {
  onImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({onImageSelect}) => {
  const [image, setImage] = useState<string | null>(null); 

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onImageSelect(e)
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Ensure result is a string before setting the state
        if (typeof reader.result === 'string') {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1 className='font-bold mb-2'>Upload your Image</h1>
      <Input
        type='file'
        id='uploadImage'
        className='hidden'
        name='image'
        onChange={handleFileChange}
      />
      <label htmlFor='uploadImage'>
        <div className='flex items-center justify-center border-dashed border-2 border-black cursor-pointer bg-slate-200 rounded-xl p-5 h-72 overflow-hidden'>
          {image ? (
            <Image
              src={image}
              alt='Uploaded Image'
              width={400}
              height={48}
              className='object-contain h-full w-full'
            />
          ) : (
            <Image
              src='/assets/upload.png'
              alt='Upload Image'
              width={300}
              height={48}
              className='object-contain'
            />
          )}
        </div>
      </label>
    </div>
  );
};

export default ImageUpload;
