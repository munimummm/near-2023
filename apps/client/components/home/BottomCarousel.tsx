import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from 'embla-carousel-react';
import { Product } from './dummy';
import { DotButton } from './CarouselDotButtons';
import styles from './carousel.module.css';
// import Image from 'next/image';
import Tabs from 'ui/components/tabs/Tabs';
import Link from 'next/link';
import { MoreLink } from './MoreLink';

type PreviewTextProps = {
  text: string;
};

type PropType = {
  slides: Product[];
  options?: EmblaOptionsType;
};

export function PreviewText({ text }: PreviewTextProps) {
  return <div className='px-8 mt-3 mb-8 h-[7.5rem]'>{text}</div>;
}

const BottomCarousel: React.FC<PropType> = (props) => {
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
  const tabs = [
    {
      label: 'Goal',
      value: 'Goal',
      path: '/',
    },
    {
      label: 'History',
      value: 'History',
      path: '/',
    },
    {
      label: 'outCom',
      value: 'outCom',
      path: '/',
    },
  ];
  return (
    <section className={styles.carousel}>
      <MoreLink path='/test' title='니어 소개 하기' />
      <Tabs items={tabs} size='sm'>
        <div className={styles.carousel__viewport} ref={emblaRef}>
          <div className={styles.carousel__container}>
            {slides.map((slide, index) => (
              <div className={styles.carousel__slide} key={index}>
                <Link href={'/test'}>
                  <img
                    className={styles.carousel__slide__img}
                    src={slide.imageurl}
                    alt='Home 2'
                  />
                </Link>
                <PreviewText text={slide.text} />
              </div>
            ))}
          </div>
        </div>
      </Tabs>
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
    </section>
  );
};

export default BottomCarousel;
