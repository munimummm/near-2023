import { useState, useRef, ChangeEvent } from 'react';
import Image from 'next/image';
import IconImageDefault from '../../assets/icons/imagebox/icon_imagebox_default.svg';
import IconCancel from '../../assets/icons/imagebox/icon_cancel.svg';

interface ImageButtonProps {
  onClick: () => void;
}

interface ImagePreviewProps {
  image: File;
  onDelete: () => void;
}

const ImageBoxStyles = {
  imageButton:
    'flex items-center justify-center w-20 h-20 bg-white border-[1.5px] border-text-gray rounded',
  imagePreview: 'relative w-20 h-20 rounded-lg border-text-gray',
  imagePreviewImage: 'object-cover w-full h-full rounded-md',
  deleteButton:
    'absolute flex top-[-10px] right-[-10px] w-[20px] h-[20px] rounded-full bg-black',
};

function ImageButton({ onClick }: ImageButtonProps) {
  return (
    <button onClick={onClick} className={ImageBoxStyles.imageButton}>
      <IconImageDefault />
    </button>
  );
}

function ImagePreview({ image, onDelete }: ImagePreviewProps) {
  return (
    <div className={ImageBoxStyles.imagePreview}>
      <Image
        className={ImageBoxStyles.imagePreviewImage}
        fill
        src={URL.createObjectURL(image)}
        alt={`Preview`}
      />
      <button onClick={onDelete} className={ImageBoxStyles.deleteButton}>
        <IconCancel stroke='#ffffff' />
      </button>
    </div>
  );
}

function ImageBox() {
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
    <div className='flex space-x-4'>
      <ImageButton onClick={() => fileInputRef.current?.click()} />

      <div className='flex flex-wrap space-x-4'>
        {uploadedImages.map((image, index) => (
          <ImagePreview
            key={index}
            image={image}
            onDelete={() => handleDeleteImage(index)}
          />
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
