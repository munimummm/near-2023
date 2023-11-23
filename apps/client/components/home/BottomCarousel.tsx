import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from 'embla-carousel-react';
import { BottomData } from './dummy';
import { CarouselButton } from './CarouselButton';
import styles from './carousel.module.css';
// import Tabs from 'ui/components/tabs/Tabs';
// import Link from 'next/link';
import { MoreLink } from './MoreLink';
import Image from 'next/image';

type PreviewTextProps = {
  text: string;
};

type PropType = {
  slides: BottomData[];
  options?: EmblaOptionsType;
};

export function PreviewText({ text }: PreviewTextProps) {
  return <div className='px-8 mt-3 mb-8 whitespace-pre-line h-52'>{text}</div>;
}

const BottomCarousel: React.FC<PropType> = (props) => {
  const { slides } = props;
  const options: EmblaOptionsType = { loop: true };
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
    <section className={styles.b_carousel}>
      <MoreLink path='/aboutus' title='니어 소개 하기' />
      <div className='flex items-center justify-center mb-10'>
        {scrollSnaps.map((_, index) => (
          <div
            key={index}
            className='flex items-center justify-center gap-8 px-6 py-4 text-xl border-none text-text-gray2 '
          >
            <CarouselButton
              onClick={() => scrollTo(index)}
              className={`${
                index === selectedIndex
                  ? 'text-theme-main font-bold'
                  : 'text-text-gray2 '
              }
        `}
            >
              {slides[index]?.name}
            </CarouselButton>
          </div>
        ))}
      </div>
      <div className={styles.b_carousel__viewport} ref={emblaRef}>
        <div className={styles.b_carousel__container}>
          {slides.map((slide, index) => (
            <div className={styles.b_carousel__slide} key={index}>
              <div className={styles.b_carousel__slide_i}>
                <Image
                  fill
                  className={styles.b_carousel__slide__img}
                  src={slide.imageurl}
                  alt='Home Carousel 2'
                />
              </div>
              <PreviewText text={slide.text} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BottomCarousel;
