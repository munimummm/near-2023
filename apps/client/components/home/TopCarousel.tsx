import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from 'embla-carousel-react';
import { Product } from './dummy';
import { DotButton } from './CarouselDotButtons';
import './css/carousel.css';
// import Image from 'next/image';

type PropType = {
  slides: Product[];
  options?: EmblaOptionsType;
};

const TopCarousel: React.FC<PropType> = (props) => {
  const { slides } = props;
  const options: EmblaOptionsType = {};
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);
  return (
    <div className='relative w-full p-6'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex -ml-4 touch-pan-y'>
          {slides.map((product, index) => (
            <div className='relative min-w-0 pl-4 embla__slide ' key={index}>
              <img
                className='embla__slide__img'
                src={product.imageurl}
                alt='Your alt text'
              />
            </div>
          ))}
        </div>
      </div>
      <div className='flex items-center justify-center'>
        {scrollSnaps.map((_, index) => (
          <div key={index} className='flex items-center justify-center p-2.5'>
            <DotButton
              onClick={() => scrollTo(index)}
              className={`
          rounded-full border cursor-pointer
          ${
            index === selectedIndex
              ? 'bg-theme-main w-[12px] h-[12px]'
              : 'bg-text-gray2 w-[8px] h-[8px]'
          }
        `}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCarousel;
