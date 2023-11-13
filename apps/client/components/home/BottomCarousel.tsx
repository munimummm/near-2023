import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from 'embla-carousel-react';
import { Product } from './dummy';
import { DotButton } from './CarouselDotButtons';
import './css/carousel.css';
// import Image from 'next/image';
import Tabs from 'ui/components/tabs/Tabs';
import Link from 'next/link';

import { Icon } from 'ui/components/icon/Icon';

type TextPreviewProps = {
  text: string;
};

type TitleMoreProps = {
  title: string;
  path: string;
};
type PropType = {
  slides: Product[];
  options?: EmblaOptionsType;
};
export function TitleMore({ title, path }: TitleMoreProps) {
  return (
    <Link
      href={path}
      className='relative flex items-center justify-center gap-[0.375rem] mb-8'
    >
      <div className='text-xl font-bold'>{title}</div>
      <div>
        <Icon sizes='sm' state='default' icon='ic_chevron_right' />
      </div>
    </Link>
  );
}

export function TextPreview({ text }: TextPreviewProps) {
  return (
    <div>
      <div className='px-8 mt-3 mb-8 h-[7.5rem]'>{text}</div>
    </div>
  );
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
    <div className='relative w-full p-6'>
      <TitleMore path='/test' title='니어 소개 하기' />
      <Tabs items={tabs} size='sm'>
        <div className='pb-4 overflow-hidden' ref={emblaRef}>
          <div className='flex -ml-4 touch-pan-y'>
            {slides.map((slide, index) => (
              <div className='relative min-w-0 pl-4 embla__slide ' key={index}>
                <Link href={'/test'}>
                  <img
                    className='embla__slide__img'
                    src={slide.imageurl}
                    alt='Your alt text'
                  />
                </Link>
                <TextPreview text={slide.text} />
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
    </div>
  );
};

export default BottomCarousel;
