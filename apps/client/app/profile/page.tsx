'use client';
import TextInput from 'ui/components/textinput/TextInput';
import { useForm } from 'react-hook-form';
// import { Icon } from 'ui/components/icon/Icon';
import Button from 'ui/components/buttons/Button';
import Tag from 'ui/components/tag/Tag';
import Image from 'next/image';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import InputFileButton from 'ui/components/Inputfilebutton/InputFileButton';

type PetTypes = {
  name?: string;
  weight?: string;
  age?: number;
  intro?: string;
  image?: string;
  message?: string;
};
// 프로필	사진 첨부	파일형식: jpg, jpeg, png,  형식의 파일만 지원함
// 		용량 :  5mb 이하 파일만 전송 가능
// 		첨부 개수 : 1회 최대 1개의 파일을 첨부 가능
// 	반려견 정보 (이름)	띄워쓰기 포함 20자 이내 (한글)
// 	반려견 정보 (성별)	띄워쓰기 포함 5자 이내 (
// 	생년월일	YYYY-MM-DD형식으로 작성 (유저에게는 숫자, db에는 문자)
// 	한줄소개	띄워쓰기 포함 20자 이내 (한글)

function ImageUpload({ setValue }) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string>('/default.jpg');

  // console.log(preview);
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    const maxSize = 5 * 1024 * 1024;
    if (file) {
      if (file.size > maxSize) {
        return alert('파일이 너무 큽니다');
      }
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
      setValue('image', file);
    }
  };

  return (
    <section className='flex gap-9'>
      <div className='relative flex items-center justify-center w-40 h-40 border rounded-sm border-text-gray '>
        <Image fill alt='Animal Profile' src={preview} />
      </div>
      <div className='flex items-end'>
        <InputFileButton onChange={handleChange} onClick={handleButtonClick} />
      </div>
    </section>
  );
}

function Page() {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<PetTypes>({
    defaultValues: {
      name: '',
      weight: '',
      // age: 0,
      intro: '',
      image: '/default.jpg',
    },
    mode: 'onChange',
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className='flex flex-col pt-11 tablet:pt-[4.25rem] desktop:pt-[4.25rem] gap-4 w-[480px] tablet:w-[768px] desktop:w-[1440px]'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className='flex justify-center py-10 text-xl font-bold tablet:justify-start desktop:justify-start tablet:py-8 desktop:py-8 tablet:px-20 desktop:px-20'>
          반려동물 정보
        </h1>
        <div className='flex justify-center'>
          <div className='flex flex-col items-start tablet: w-[480px] gap-4 p-8'>
            <ImageUpload setValue={setValue} />

            <div className='flex flex-col w-full gap-4 py-2'>
              <h2 className='text-lg text-left text-[#545454]'>이름</h2>
              <TextInput
                control={control}
                name='name'
                placeholder='이름을 입력해 주세요.'
                state='default'
                borderRadius
                rules={{
                  pattern: {
                    value: /^[가-힣\s]+$/,
                    message: '한글만 입력 가능합니다.',
                  },
                  maxLength: {
                    value: 20,
                    message: '20자 이내로 입력해 주세요',
                  },
                }}
              />
              {errors.name && (
                <span className='text-red-500'>{errors.name.message}</span>
              )}
            </div>

            <div className='flex justify-between items-center h-16 w-[26rem]'>
              <h2 className='text-lg text-left text-[#545454]'>성별</h2>
              <div className='flex gap-4'>
                <Tag mode='gray' className='px-4 py-2'>
                  암컷
                </Tag>
                <Tag mode='gray' className='px-4 py-2'>
                  수컷
                </Tag>
              </div>
            </div>

            <div className='flex justify-between items-center  h-16 w-[26rem]'>
              <h2 className='text-lg text-left text-[#545454]'>종</h2>
              <div className='flex gap-4'>
                <Tag mode='gray' className='px-4 py-2'>
                  강아지
                </Tag>
                <Tag mode='gray' className='px-4 py-2'>
                  고양이
                </Tag>
              </div>
            </div>

            <div className='flex flex-col w-full gap-4 py-2'>
              <h2 className='text-lg text-left text-[#545454]'>몸무게</h2>
              <TextInput
                control={control}
                name='weight'
                placeholder='몸무게를 입력해 주세요.'
                state='default'
                borderRadius
              />
            </div>

            <div className='flex flex-col w-full gap-4 py-2'>
              <h2 className='text-lg text-left text-[#545454]'>나이</h2>
              <TextInput
                inputProps={{ min: 0 }}
                type='number'
                control={control}
                name='age'
                placeholder='숫자만 입력해 주세요'
                state='default'
                borderRadius
              />
            </div>

            <div className='flex flex-col w-full gap-4 py-2'>
              <h2 className='text-lg text-left text-[#545454]'>한줄 소개</h2>
              <TextInput
                control={control}
                name='intro'
                placeholder='텍스트를 입력해 주세요'
                state='default'
                borderRadius
                rules={{
                  maxLength: {
                    value: 20,
                    message: '20자 이내로 입력해 주세요',
                  },
                }}
              />
              {errors.intro && (
                <span className='text-red-500'>{errors.intro.message}</span>
              )}
            </div>

            {/* <div className='flex justify-center items-center gap-4 py-[200px]'>
            반려동물 추가하기
            <Icon icon='ic_add' state='mild' sizes='lg'></Icon>
          </div> */}
            <Button mode='main' type='submit'>
              확인하기
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Page;

// 에러처리 메세지?
