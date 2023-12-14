'use client';

import { useForm } from '@near/react-hook-form';

// import { createClientComponentClient } from '@near/supabase';
import { useEffect, useRef, useState } from 'react';

import { Button, Logo, TextInput } from 'ui';
// const supabase = createClientComponentClient();

interface FieldValues {
  phone?: string;
  number?: string;
}
// async function getProfile() {
//   const { data } = await supabase.from('all_user_phone_list').select('*');
//   return data;
// }

const getSeconds = (time) => {
  const second = Number(time);
  if (second < 10) {
    return '0' + String(second);
  } else {
    return String(second);
  }
};

function FindEmail() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const ref = useRef<HTMLButtonElement>(null);
  const InitialTime = parseInt('60');
  const [time, setTime] = useState(InitialTime);
  const [show, setShow] = useState(false);
  const [re] = useState(false);

  const timer = () => {
    const id = setTimeout(() => {
      if (show === true) setTime((time) => time - 1);
    }, 1000);
    return id;
  };

  useEffect(() => {
    const timerId = timer();
    if (time === 0) {
      clearTimeout(timerId);
    }

    ref.current?.addEventListener('click', () => {
      clearTimeout(timerId);
      setTime(InitialTime);
    });

    return () => clearTimeout(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time, show, re]);

  // const { data, isLoading } = useQuery(['getuser-key'], () => getProfile());

  return (
    <>
      {/* <div>{JSON.stringify(data)}</div> */}
      <form
        className='my-8'
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <section className='layout_max_width flex flex-col items-center gap-5'>
          <Logo />
          <fieldset>
            <legend className='text-3xl text-text-black1 font-semibold mb-3 text-center'>
              계정을 잊어버리셨나요?
            </legend>
            <h3 className='text-text-gray font-medium text-center'>
              저희가 찾아드릴게요
            </h3>

            <section className='mt-14 mb-3'>
              <h4 className='text-xs text-text-gray indent-2'>
                가입하신 휴대폰 번호를 입력해주세요
              </h4>
              <div className='flex gap-2 mt-2'>
                <TextInput
                  defaultValue=''
                  borderRadius
                  name='number'
                  type='text'
                  placeholder='ex)01012345678'
                  className='text-xs'
                  control={control}
                />
                {errors.number && <p>제대로해라</p>}

                <button
                  type='button'
                  onClick={() => {
                    setShow(true);
                  }}
                  className='bg-bg-blue1 border-bg-blue1 text-theme-main py-1 px-3 rounded-2xl text-sm font-medium  hover:bg-bg-blue1 hover:border-bg-blue1 hover:text-theme-main hover:shadow-button'
                >
                  <span className='text-xs whitespace-nowrap'>
                    인증번호 받기
                  </span>
                </button>
              </div>
            </section>
            {show && (
              <>
                <div className='flex gap-2 mt-2'>
                  <TextInput
                    defaultValue=''
                    borderRadius
                    name='phone'
                    type='text'
                    placeholder='인증번호 6자리를 입력해주세요'
                    control={control}
                  />
                  <button
                    type='button'
                    onClick={() => {
                      setShow(true);
                    }}
                    className='bg-bg-blue1 border-bg-blue1 text-theme-main py-1 px-3 rounded-xl text-sm font-medium  hover:bg-bg-blue1 hover:border-bg-blue1 hover:text-theme-main hover:shadow-button'
                  >
                    <span className='text-xs whitespace-nowrap'>
                      인증번호 확인
                    </span>
                  </button>
                </div>

                <div className='text-end pr-2'>
                  <small className='text-xs text-end'>
                    인증 번호를 못받으셨나요?
                  </small>
                  <button ref={ref} className='text-xs text-end font-semibold'>
                    &nbsp;인증 번호 다시 받기
                  </button>
                </div>
                <small className='block text-xs text-end pr-2 text-red-500'>
                  유효시간: {getSeconds(time)}초
                </small>

                <Button
                  className='w-full mobile:h-12 tablet:h-12 desktop:h-12 mobile:mt-5 tablet:mt-4 desktop:mt-10'
                  type='submit'
                >
                  인증 확인 후, 계정 찾기
                </Button>
              </>
            )}
          </fieldset>
        </section>
      </form>
    </>
  );
}

export default FindEmail;
