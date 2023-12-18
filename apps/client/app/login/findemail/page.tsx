'use client';

import { useForm } from '@near/react-hook-form';
import { useTimer } from '@near/react-timer-hook';
import { createClientComponentClient } from '@near/supabase';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Logo, TextInput } from 'ui';
import { useRecoilState, userFindEmailState } from '@near/store';
const supabase = createClientComponentClient();

const TESTNUMBER = 111111;

// const generate4DigitRandom = () => {
//   const min = 100000;
//   const max = 999999;
//   const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//
//   return randomNumber;
// };

interface FieldValues {
  phone?: string;
  number?: string;
}

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
    getValues,
    formState: { errors: formError },
  } = useForm<FieldValues>();
  const router = useRouter();
  const ref = useRef<HTMLButtonElement>(null);
  const [error, setError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [disable, setDisbale] = useState(false);
  const [correctNumber, setCorrectNumber] = useState(false);
  const [show, setShow] = useState(false);
  const [findEmail, setFindEmail] = useRecoilState(userFindEmailState);
  async function getProfile(phone: string) {
    const { data: data } = await supabase
      .from('all_user_phone_list')
      .select(
        `*,
      user_email_list(
        *
        )`,
      )
      .eq('phone', phone);

    if (data?.length === 0) {
      setShow(false);
      setError(true);
    } else {
      setShow(true);
      setError(false);
      setDisbale(true);
      setFindEmail(data?.[0]['user_email_list'].email);
      start();
    }
  }
  const date = new Date();
  date.setSeconds(date.getSeconds() + 60);

  const { restart, start, totalSeconds } = useTimer({
    autoStart: false,
    expiryTimestamp: date,
  });

  return (
    <>
      <form
        className='my-8 mobile:mt-[8.5rem] tablet:mt-[8.5rem] desktop:mt-0'
        onSubmit={handleSubmit((data) => {
          getProfile(data.phone as string);

          if (totalSeconds > 0 && Number(getValues().number) === TESTNUMBER) {
            setNumberError(false);
            setCorrectNumber(true);
          }
        })}
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

              <div className='flex gap-2 mt-2.5'>
                <TextInput
                  state={error ? 'error' : 'default'}
                  defaultValue=''
                  borderRadius
                  isDisabled={disable}
                  name='phone'
                  type='text'
                  placeholder='ex)01012345678'
                  className={'text-xs'}
                  control={control}
                  rules={{
                    min: 9,
                    pattern: /^[0-9]+$/,
                  }}
                />

                <button
                  type='submit'
                  disabled={disable}
                  onClick={() => {}}
                  className='bg-bg-blue1 border-bg-blue1 text-theme-main py-1 px-3 rounded-2xl text-sm font-medium  hover:bg-bg-blue1 hover:border-bg-blue1 hover:text-theme-main hover:shadow-button disabled:bg-gray-2 disabled:text-neutral-400 disabled:hover:shadow-none'
                >
                  <small className=' text-xs whitespace-nowrap'>
                    인증번호 받기
                  </small>
                </button>
              </div>
              <div className='flex flex-col'>
                {formError.phone && (
                  <small className='text-red-500 text-[10px] block indent-3'>
                    전화번호 형식이 아닙니다
                  </small>
                )}
                {error && (
                  <small className='text-red-500 text-[10px] inline-block indent-3'>
                    입력된 번호로 가입된 번호가 없습니다
                  </small>
                )}
              </div>
            </section>

            {show && (
              <>
                <div className='flex gap-2 mt-2'>
                  <TextInput
                    defaultValue=''
                    borderRadius
                    name='number'
                    type='text'
                    placeholder='인증번호 6자리를 입력해주세요'
                    control={control}
                    isDisabled={correctNumber}
                    state={numberError ? 'error' : 'default'}
                  />
                  <button
                    type='submit'
                    onClick={() => {
                      setShow(true);
                      if (Number(getValues().number) !== TESTNUMBER) {
                        setNumberError(true);
                      }
                      if (totalSeconds <= 0) {
                        setNumberError(true);
                      }
                    }}
                    disabled={correctNumber}
                    className='bg-bg-blue1 border-bg-blue1 text-theme-main py-1 px-3 rounded-3xl text-sm font-medium  hover:bg-bg-blue1 hover:border-bg-blue1 hover:text-theme-main hover:shadow-button disabled:bg-gray-2 disabled:text-neutral-400 disabled:hover:shadow-none'
                  >
                    <span className='text-xs whitespace-nowrap'>
                      인증번호 확인
                    </span>
                  </button>
                </div>
                {numberError ? (
                  <small className='text-red-500 inline-block indent-3'>
                    인증 번호가 올바르지 않습니다
                  </small>
                ) : null}

                <div className='text-end pr-2 mt-1'>
                  {!correctNumber && (
                    <>
                      <small className='text-xs text-end'>
                        인증 번호를 못받으셨나요?&nbsp;&nbsp;
                      </small>
                      <button
                        type='button'
                        onClick={() => restart(date)}
                        ref={ref}
                        className='text-xs text-end font-semibold'
                      >
                        &nbsp;인증 번호 다시 받기
                      </button>
                    </>
                  )}
                </div>
                {!correctNumber && (
                  <small className='block text-xs text-end pr-2 text-red-500'>
                    유효 시간: {getSeconds(totalSeconds)}초
                  </small>
                )}

                <Button
                  className='w-full mobile:h-12 tablet:h-12 desktop:h-12 mobile:mt-5 tablet:mt-4 desktop:mt-10'
                  type='button'
                  isDisabled={!numberError && !correctNumber}
                  onClick={() => {
                    if (findEmail !== '') {
                      typeof window !== 'undefined' &&
                        sessionStorage.setItem('findEmail', findEmail);

                      router.push('/login/findresult');
                    }
                  }}
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
