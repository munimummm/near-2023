'use client';

import { useState, useRef, ChangeEvent } from 'react';
import Image from 'next/image';
import IconImageDefault from '../../assets/icons/imagebox/icon_imagebox_default.svg';
import IconCancel from '../../assets/icons/imagebox/icon_cancel.svg';

interface ImageButtonProps {
  onClick: () => void;
  size?: 'sm' | 'lg';
}

interface ImagePreviewProps {
  image: File;
  size?: 'sm' | 'lg';
}
interface DeleteButtonProps {
  onDelete: () => void;
  size?: 'sm' | 'lg';
}
interface TitleImageProps {
  size?: 'sm' | 'lg';
}
interface ImageBoxProps {
  size?: 'sm' | 'lg';
}

const ImageBoxStyles = {
  imageButton:
    'flex items-center justify-center  bg-white border-[0.0938rem] border-text-gray rounded',
  imagePreview: 'relative  rounded-lg border-text-gray',
  imagePreviewImage: 'object-cover w-full h-full rounded-md',
  deleteButton:
    'absolute flex items-center justify-center  rounded-full bg-theme-main ',
  titleImage: 'rounded-b-lg bg-theme-main text-text-white',
};
const sizes = {
  sm: {
    button: 'w-20 h-20',
    preview: 'w-20 h-20',
    deleteButton: '-top-2 -right-2 w-4 h-4',
    titleImage: 'w-20 h-4',
  },
  lg: {
    button: 'w-40 h-40',
    preview: 'w-40 h-40',
    deleteButton: '-top-4 -right-4 -w-8 -h-8',
    titleImage: 'w-[10rem] h-8',
  },
};

function ImageButton({ onClick, size = 'sm' }: ImageButtonProps) {
  const sizeClasses = sizes[size].button;
  return (
    <button
      onClick={onClick}
      className={`${ImageBoxStyles.imageButton} ${sizeClasses}`}
    >
      <IconImageDefault />
    </button>
  );
}

export function ImagePreview({ image, size = 'sm' }: ImagePreviewProps) {
  const sizeClasses = sizes[size].preview;
  return (
    <div className={`${ImageBoxStyles.imagePreview} ${sizeClasses}`}>
      <Image
        className={ImageBoxStyles.imagePreviewImage}
        fill
        src={URL.createObjectURL(image)}
        alt={`Preview`}
      />
    </div>
  );
}
function DeleteButton({ onDelete, size = 'sm' }: DeleteButtonProps) {
  const sizeClasses = sizes[size].deleteButton;
  return (
    <button
      onClick={onDelete}
      className={`${ImageBoxStyles.deleteButton} ${sizeClasses}`}
    >
      <IconCancel />
    </button>
  );
}
export function TitleImage({ size = 'sm' }: TitleImageProps) {
  const sizeClasses = sizes[size].titleImage;
  return (
    <div className={`${ImageBoxStyles.titleImage} ${sizeClasses}`}>
      대표사진
    </div>
  );
}

function ImageBox({ size = 'sm' }: ImageBoxProps) {
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const newFiles = Array.from(files);
      setUploadedImages([...uploadedImages, ...newFiles]);
      // handleOnChange(newFiles);
    }
  };
  // const handleOnChange = (files: File[]) => {};

  const handleDeleteImage = (indexToDelete: number) => {
    const updatedImages = [...uploadedImages];
    updatedImages.splice(indexToDelete, 1);
    setUploadedImages(updatedImages);
  };

  return (
    <div className='flex space-x-4 '>
      <ImageButton size={size} onClick={() => fileInputRef.current?.click()} />

      <div className='flex flex-wrap space-x-4'>
        {uploadedImages.map((image, index) => (
          <div key={index} className='relative'>
            <ImagePreview size={size} image={image} />
            <DeleteButton
              size={size}
              onDelete={() => handleDeleteImage(index)}
            />
          </div>
        ))}
        <input
          type='file'
          accept='image/*'
          onChange={handleImageUpload}
          className='hidden'
          ref={fileInputRef}
          multiple // 다중 이미지 선택
        />
      </div>
    </div>
  );
}

export default ImageBox;
