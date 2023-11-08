import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from 'embla-carousel-react';
import { DotButton } from './CarouselDotButtons';
import imageByIndex from '../imageByIndex';
import Image from 'next/image';
import './carousel.css';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const TopCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
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

  const styles = {
    sectionContainer: 'w-[30rem]',
    embla: 'pb-4',
    embla__viewport: 'overflow-hidden',
    embla__container: 'flex touch-pan-y -ml-4 ',
    embla__slide: 'flex-none w-full min-w-0 pl-4 relative',
    embla__slide__img: 'block h-[12.6875rem] w-full object-cover',
  };

  return (
    <section className={`${styles.sectionContainer}`}>
      <div className={`${styles.embla}`}>
        <div className={`${styles.embla__viewport}`} ref={emblaRef}>
          <div className={`${styles.embla__container}`}>
            {slides.map((index) => (
              <div className={`${styles.embla__slide}`} key={index}>
                <Image
                  className={`${styles.embla__slide__img}`}
                  src={imageByIndex(index)}
                  alt='Your alt text'
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center '>
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
    </section>
  );
};

export default TopCarousel;
