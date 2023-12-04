'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from 'embla-carousel-react';
import { TopData } from './dummy';
import { CarouselButton } from './CarouselButton';
import styles from './carousel.module.css';
import Image from 'next/image';

type PropType = {
  slides: TopData[];
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
    <section className={styles.carousel}>
      <div className={styles.carousel__viewport} ref={emblaRef}>
        <div className={styles.carousel__container}>
          {slides.map((product, index) => (
            <div className={styles.carousel__slide} key={index}>
              <Image
                fill
                priority
                className={styles.carousel__slide__img}
                src={product.imageurl}
                alt='Home Carousel 1'
              />
            </div>
          ))}
        </div>
      </div>
      <div className='flex items-center justify-center '>
        {scrollSnaps.map((_, index) => (
          <div key={index} className='flex items-center justify-center p-2.5'>
            <CarouselButton
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
    </section>
  );
};

export default TopCarousel;
