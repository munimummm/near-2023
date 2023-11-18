'use client';
import Logo from 'ui/components/logo/Logo';
import TextInput from 'ui/components/textinput/TextInput';
import { useForm } from '@near/react-hook-form';
import Checkbox from 'ui/components/checkbox/Checkbox';
import { ButtonXL } from 'ui/components/buttons/Button';
import { useEffect, useState } from 'react';
import { clsx } from '@near/clsx';
import Google from 'ui/assets/icons/social/google.svg';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { handleSignUp, SignupProps } from '@near/apis';
interface LoginProps {
  email?: string;
  password?: string;
}

export default function SignIn() {
  const { control, handleSubmit, reset } = useForm<LoginProps>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const toggleId = [
    { id: '개인회원', order: 'order-1' },
    { id: '보호소 회원', order: 'order-3' },
  ];

  const [pick] = useState(toggleId);
  const [selected, setSelected] = useState<string[]>([toggleId[0].id]);
  const [error, setError] = useState(false);
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    console.log(selected);
    const test = async () => {
      // const { data } = await supabase.auth.getUser();
      const { data, error } = await supabase.auth.getSession();
      console.log(data);
    };
    test();
  }, [selected]);

  //   const handleSignUp = async () => {
  //     const { data } = await supabase.auth.signUp({
  //       email: 'near_test2@near.com',
  //       password: 'rkskek123!!',
  //       options: {
  //         data: {
  //           role: 'shelter_user',
  //           shelter_name: 'test',
  //           ceo_phone: 'test',
  //           shelter_address: 'test',
  //           shelter_detail_address: 'test',
  //           shelter_type: 'test',
  //           shelter_scale: 'test',
  //           ceo_name: 'test',
  //           marketing_agree: false,
  //           shelter_cooperation: false,
  //           register_number: 'test',
  //           // role: 'normal_user',
  //           // birth: 'test',
  //           // phone: 'test',
  //           // name: 'test',
  //           // address: 'test',
  //           // detail_address: 'test',
  //           // level: 'test',
  //           // shelter_scale: 'test',
  //           // ceo_name: 'test',
  //           // marketing_agree: false,
  //           // user_img_path: 'test.jpg',
  //         },
  //       },
  //     });
  //
  //     console.log(data);
  //
  //     // router.refresh();
  //   };

  const userData: SignupProps = {
    email: 'near_testt@near.com',
    password: 'rkskek123!!',
    role: 'shelter_user',
    shelter_data: {
      shelter_name: 'test',
      ceo_phone: 'test',
      shelter_address: 'test',
      shelter_detail_address: 'test',
      shelter_type: 'test',
      shelter_scale: 'test',
      ceo_name: 'test',
      marketing_agree: false,
      shelter_cooperation: false,
      register_number: 'test',
    },
  };
  // () => handleSignUp(userData);
  return (
    <main className='py-[8.5rem] flex flex-col items-center'>
      <form
        onSubmit={handleSubmit(async (data) => {
          console.log(data);
          const { data: session, error } =
            await supabase.auth.signInWithPassword({
              email: selected.includes('개인회원')
                ? data.email || ''
                : `${data.email}@near.com`,
              password: 'rkskek123!!',
            });
          console.log(session);
          if (error) {
            setError(true);
          }
        })}
      >
        <fieldset>
          <legend className='m-auto'>
            <Logo size='lg' />
          </legend>
        </fieldset>
        <section className='mt-20 flex fle'>
          {pick.map((item) => {
            return (
              <option
                key={`item_${item.id}`}
                onClick={() => {
                  reset();
                  setError(false);
                  setSelected(() => [item.id]);
                }}
                className={clsx(
                  item.order,
                  'inline-block  font-normal text-[#8B8B8B] cursor-pointer',
                  !selected.includes(item.id)
                    ? null
                    : 'text-theme-main_dark active:text-theme-main_dark',
                )}
              >
                {item.id}
              </option>
            );
          })}
          <span className='order-2 mx-4 text-[#8B8B8B]'>|</span>
        </section>

        <div className='flex flex-col gap-6 my-6 '>
          <div className='relative'>
            <TextInput
              // className={'w-[26.25rem]'}
              name={'email'}
              type='text'
              control={control}
              borderRadius={true}
              state={error ? 'error' : 'default'}
              // size={'lg'}
              aria-errormessage='이메일을 다시 확인해주세요'
              placeholder={
                selected.includes('개인회원')
                  ? '이메일을 입력해주세요.'
                  : '발급 받은 아이디를 입력해주세요.'
              }
            />
            {error && (
              <p
                id='이메일을 다시 확인해주세요'
                className='text-[0.75rem] text-[#CC3B3B] mt-[0.204375rem] pl-4 absolute'
              >
                {selected.includes('개인회원')
                  ? '이메일을 다시 확인해주세요'
                  : '아이디를 다시 확인해주세요'}
              </p>
            )}
          </div>

          <div className='relative'>
            <TextInput
              // width={420}
              type='password'
              name={'password'}
              control={control}
              borderRadius={true}
              state={error ? 'error' : 'password'}
              // size={'lg'}
              aria-errormessage='비밀번호를 다시 확인해주세요'
              placeholder='비밀번호를 입력해주세요.'
            />
            {error && (
              <p
                id='비밀번호를 다시 확인해주세요'
                className='text-[0.75rem] text-[#CC3B3B] mt-[0.204375rem] pl-4 absolute'
              >
                비밀번호를 다시 입력해주세요
              </p>
            )}
          </div>
        </div>
        <section
          className='flex mobile:pb-40 tablet:pb-20 desktop:pb-20
  
          '
        >
          <Checkbox
            labelType='singletext'
            control={control}
            name='checkbox_login'
            type='checkbox'
            label='로그인 상태 유지'

            // isChecked={false && 'signipud'}
          />
          {/* <span className='text-[#333] font-normal leading-6'>
              로그인 상태 유지
            </span> */}
        </section>
        <ButtonXL type='submit' mode='main'>
          로그인
        </ButtonXL>
      </form>
      <section>
        {selected.includes('개인회원') && (
          <>
            <ul className='text-[#8B8B8B] flex flex-col items-center gap-8 mt-8'>
              <li>다른 계정으로 로그인</li>
              <ul className='flex gap-6'>
                <li className='text-[0.75rem] text-center'>
                  <div className='bg-white p-[0.9375rem] rounded-full border border-[#E6E6EA] mb-2'>
                    <Google />
                  </div>
                  kakao
                </li>
                <li className='text-[0.75rem] text-center'>
                  <div className='bg-white p-[0.9375rem] rounded-full border border-[#E6E6EA] mb-2'>
                    <Google />
                  </div>
                  google
                  {/* <span>구글 로그인</span> */}
                </li>
              </ul>
            </ul>
          </>
        )}
      </section>
      <section className='mt-8 text-[#8B8B8B]'>
        아이디 찾기 | 비밀번호 찾기 | 회원가입하기
      </section>
    </main>
  );
}
