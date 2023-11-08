'use client';
import Logo from 'ui/components/logo/Logo';
import TextInput from 'ui/components/textinput/TextInput';
import { useForm, useController, UseControllerProps } from 'react-hook-form';
import Checkbox from 'ui/components/checkbox/Checkbox';
import Button from 'ui/components/buttons/Button';
import { useEffect, useState } from 'react';
import { clsx } from 'clsx';
interface LoginProps {
  email?: string;
  password?: string;
}

export default function SignInPage() {
  const { control } = useForm<LoginProps>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const toolgeid = [
    { id: '개인회원', order: 'order-1' },
    { id: '보호소 회원', order: 'order-3' },
  ];
  const [pick] = useState(toolgeid);
  const [selected, setSelected] = useState<string[]>([toolgeid[0].id]);
  useEffect(() => {
    console.log(selected);
  }, [selected]);
  return (
    <section className='py-[8.5rem] flex flex-col items-center'>
      <form action=''>
        <fieldset>
          <legend className='m-auto'>
            <Logo size='lg' />
          </legend>
          <section className='mt-20 flex fle'>
            {pick.map((item) => {
              return (
                <option
                  key={`item_${item.id}`}
                  onClick={() => {
                    !selected.includes(item.id)
                      ? setSelected(() => [item.id])
                      : setSelected(
                          selected.filter((button) => button !== item.id),
                        );
                  }}
                  className={clsx(
                    item.order,
                    'inline-block  font-normal text-[#8B8B8B]',
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

          <div className='flex flex-col gap-6 my-6'>
            <TextInput
              name={'email'}
              control={control}
              borderRadius={true}
              state={'default'}
              size={'md'}
              placeholder={
                selected.includes('개인회원')
                  ? '이메일을 입력해주세요.'
                  : '보호소 번호를 입력해주세요.'
              }
            />
            <TextInput
              name={'password'}
              control={control}
              borderRadius={true}
              state={'default'}
              size={'md'}
              placeholder='비밀번호를 입력해주세요.'
            />
          </div>
          <section className='flex mobile:mb-40 tablet:mb-20 desktop:mb-20'>
            <Checkbox />
            <span className='text-[#333] font-normal text-center leading-6'>
              로그인 상태 유지
            </span>
          </section>
          <Button mode='main' className='w-full'>
            로그인
          </Button>
        </fieldset>
      </form>
    </section>
  );
}
