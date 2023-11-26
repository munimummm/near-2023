'use client';
import TextInput from 'ui/components/textinput/TextInput';
import { useForm } from '@near/react-hook-form';
import { ButtonXL } from 'ui/components/buttons/Button';
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import FooterShadowBox from 'ui/components/footer/FooterShadowBox';
import RadioTag from 'ui/components/tags/RadioTag';
// import { UserPetProfileProps } from '../../../../global';

type UserPetTypes = {
  name?: string;
  age?: number;
  intro?: string;
  message?: string;
};

// 프로필	사진 첨부	파일형식: jpg, jpeg, png,  형식의 파일만 지원함
// 		용량 :  5mb 이하 파일만 전송 가능
// 		첨부 개수 : 1회 최대 1개의 파일을 첨부 가능
// 	반려견 정보 (이름)	띄워쓰기 포함 20자 이내 (한글)
// 	반려견 정보 (성별)	띄워쓰기 포함 5자 이내 (
// 	생년월일	YYYY-MM-DD형식으로 작성 (유저에게는 숫자, db에는 문자)
// 	한줄소개	띄워쓰기 포함 20자 이내 (한글)

function Page() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserPetTypes>({
    defaultValues: {
      name: '',
      // age: 0,
      intro: '',
    },
    mode: 'onChange',
  });
  // const supabase = createClientComponentClient();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div className='flex flex-col pt-11 tablet:pt-[4.25rem] desktop:pt-[4.25rem] gap-4 w-[30rem] tablet:w-[48rem] desktop:w-[90rem] mb-40'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className='flex justify-center py-10 text-xl font-bold tablet:justify-start desktop:justify-start tablet:py-8 desktop:py-8 tablet:px-20 desktop:px-20'>
          반려동물 정보
        </h1>
        <div className='flex justify-center'>
          <div className='flex flex-col items-start tablet: w-[30rem] gap-4 p-8'>
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
                <RadioTag name='gender' control={control} value='female'>
                  암컷
                </RadioTag>
                <RadioTag name='gender' control={control} value='male'>
                  수컷
                </RadioTag>
              </div>
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

            <FooterShadowBox>
              <ButtonXL type='submit'>확인하기</ButtonXL>
            </FooterShadowBox>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Page;
