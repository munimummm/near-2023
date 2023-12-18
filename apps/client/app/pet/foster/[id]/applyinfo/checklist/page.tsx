'use client';

import { useForm } from '@near/react-hook-form';
import { createClientComponentClient, Session } from '@near/supabase';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import {
  Breadcrumb,
  Button,
  CheckBox,
  Footer,
  FooterShadowBox,
  TextEditorWriter,
  Top,
  TopSuspense,
} from 'ui';

interface CheckListProps {
  comment?: string;
  family?: boolean;
  owner?: boolean;
  share?: boolean;
  responsibility?: boolean;
  cooperation?: boolean;
  welfare?: boolean;
  notice?: boolean;
  monitor?: boolean;
  return?: boolean;
}

const Checklist = () => {
  const { control, handleSubmit, getValues, watch, setValue } =
    useForm<CheckListProps>({
      defaultValues: {
        family: false,
        owner: false,
        share: false,
        responsibility: false,
        cooperation: false,
        welfare: false,
        notice: false,
        monitor: false,
        return: false,
      },
      mode: 'onBlur',
    });
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [userSession, setUserSession] = useState<Session | null>();
  let { current: temp } = useRef([]) as string[] | any;

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data } = await supabase.auth.getSession();

        if (data) {
          setUserSession(data.session);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isValid = watch('return');

  // 임시 저장
  const onClickTempSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let comment = getValues('comment');

    localStorage.setItem('temp', JSON.stringify([comment]));
  };

  useEffect(() => {
    let watched = JSON.parse(localStorage.getItem('temp') as string);
    temp = watched;
    if (temp) {
      setValue('comment', temp[0]);
    }
  }, [temp]);

  const onSubmitChecklist = async (userData: CheckListProps) => {
    let { data: foster_detail, error } = await supabase
      .from('foster_detail')
      .insert({
        comment: userData.comment,
      });

    if (foster_detail === null) {
      console.log('지원 동기 및 각오를 입력해 주세요');
    }

    router.push('/pet');

    if (error instanceof Error) {
      throw new Error(error.message);
    }
  };

  return (
    <>
      <section>
        <div>{userSession ? <Top /> : <TopSuspense />}</div>
        <Breadcrumb
          items={['근처 동물', '임시 보호 신청', '체크리스트']}
          className='mt-[4.0625rem] ml-[1rem]'
        />
      </section>
      <form onSubmit={handleSubmit(onSubmitChecklist)}>
        <section>
          <div className='mobile:h-[5.875rem] mobile:mt-[2.875rem] tablet:h-[11.25rem] desktop:h-[13.75rem]'>
            <div className='font-bold mobile:text-lg mobile:pl-[2rem] mobile:pt-[0.625rem] tablet:text-2xl tablet:pl-[4.8125rem] tablet:pt-[2.125rem] desktop:text-4xl'>
              임시 보호 신청하기
            </div>
            <div className='flex justify-around mobile:w-[24rem] mobile:pt-[1rem] mobile:pl-[1.5rem] mobile:text-sm tablet:w-[30.5rem] tablet:pl-[2rem] tablet:mt-[1.5rem] desktop:mt-[3.75rem] desktop:text-lg'>
              <div className='text-slate-400'>1. 강아지 정보</div>
              <div className='text-slate-400'>2. 신청자 정보</div>
              <div className='text-indigo-900'>3. 체크리스트</div>
            </div>
          </div>
        </section>
        <section>
          <div className='h-[75.0625rem] grid pt-[1.875rem] mobile:px-[1.875rem] tablet:px-[3rem] desktop:px-[7.5rem] desktop:text-xl'>
            <ul className='list-decimal grid'>
              <li>
                <div className='flex justify-between w-full'>
                  <a
                    href='#!'
                    className='mobile:w-[19.375rem] mobile:text-sm tablet:w-[31.25rem] tablet:text-base desktop:w-[56.25rem] desktop:text-lg'
                  >
                    임시 보호 결정에 가족 모두 동의하십니까?
                  </a>
                  <div className='pt-[0.25rem]'>
                    <CheckBox
                      name={'family'}
                      control={control}
                      labelType='singletext'
                      label='동의합니다'
                      labelClassName='text-slate-500'
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className='flex justify-between w-full'>
                  <a
                    href='#!'
                    className='mobile:w-[19.375rem] mobile:text-sm tablet:w-[31.25rem] tablet:text-base desktop:w-[56.25rem] desktop:text-lg'
                  >
                    임대 주택인 경우 집주인의 동의를 얻으셨나요?
                  </a>
                  <div className='pt-[0.25rem]'>
                    <CheckBox
                      name={'owner'}
                      control={control}
                      labelType='singletext'
                      label='동의합니다'
                      labelClassName='text-slate-500'
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className='flex justify-between w-full'>
                  <a
                    href='#!'
                    className='mobile:w-[19.375rem] mobile:text-sm tablet:w-[31.25rem] tablet:text-base desktop:w-[56.25rem] desktop:text-lg'
                  >
                    임시 보호 후, 모니터링을 위한 연락이나 방문, 임보일기 작성,
                    인스타그램 게시물 공유에 동의하십니까?
                  </a>
                  <div className='pt-[0.25rem]'>
                    <CheckBox
                      name={'share'}
                      control={control}
                      labelType='singletext'
                      label='동의합니다'
                      labelClassName='text-slate-500'
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className='flex justify-between w-full'>
                  <a
                    href='#!'
                    className='mobile:w-[19.375rem] mobile:text-sm tablet:w-[31.25rem] tablet:text-base desktop:w-[56.25rem] desktop:text-lg'
                  >
                    본인은 임시보호를 함에 있어 책임 있는 보호자로서 입양
                    동물에게 최적의 환경과 보살핌을 제공할 것이며, 최선을 다해
                    동물을 보호할 의무가 있습니다.
                  </a>
                  <div className='pt-[0.25rem]'>
                    <CheckBox
                      name={'responsibility'}
                      control={control}
                      labelType='singletext'
                      label='동의합니다'
                      labelClassName='text-slate-500'
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className='flex justify-between w-full'>
                  <a
                    href='#!'
                    className='mobile:w-[19.375rem] mobile:text-sm tablet:w-[31.25rem] tablet:text-base desktop:w-[56.25rem] desktop:text-lg'
                  >
                    임보 동물이 양도, 매매, 유기, 유실된 경우에 즉시 NEAR 및
                    담당 보호소에 통지할 의무를 가지며, 협조할 의무가 있습니다.
                  </a>
                  <div className='pt-[0.25rem]'>
                    <CheckBox
                      name={'cooperation'}
                      control={control}
                      labelType='singletext'
                      label='동의합니다'
                      labelClassName='text-slate-500'
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className='flex justify-between w-full'>
                  <a
                    href='#!'
                    className='mobile:w-[19.375rem] mobile:text-sm tablet:w-[31.25rem] tablet:text-base desktop:w-[56.25rem] desktop:text-lg'
                  >
                    임보 동물에게 사료와 깨끗한 물을 공급하고, 적절한 운동,
                    질병에 대한 접종, 정기검진 등 필요한 복지를 제공할 의무가
                    있습니다.
                  </a>
                  <div className='pt-[0.25rem]'>
                    <CheckBox
                      name={'welfare'}
                      control={control}
                      labelType='singletext'
                      label='동의합니다'
                      labelClassName='text-slate-500'
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className='flex justify-between w-full'>
                  <a
                    href='#!'
                    className='mobile:w-[19.375rem] mobile:text-sm tablet:w-[31.25rem] tablet:text-base desktop:w-[56.25rem] desktop:text-lg'
                  >
                    임보 기간 동안 본인의 연락처가 변경되거나 주거지의 변동
                    사항이 있을 경우, 담당 보호소에 정보를 통지할 의무가
                    있습니다.
                  </a>
                  <div className='pt-[0.25rem]'>
                    <CheckBox
                      name={'notice'}
                      control={control}
                      labelType='singletext'
                      label='동의합니다'
                      labelClassName='text-slate-500'
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className='flex justify-between w-full'>
                  <a
                    href='#!'
                    className='mobile:w-[19.375rem] mobile:text-sm tablet:w-[31.25rem] tablet:text-base desktop:w-[56.25rem] desktop:text-lg'
                  >
                    임보 기간 동안 단체에서 시행하는 임보 동물의 모니터링을 위한
                    전화 또는 사진요청에 응할 것이며, 협조할 의무가 있습니다.
                  </a>
                  <div className='pt-[0.25rem]'>
                    <CheckBox
                      name={'monitor'}
                      control={control}
                      labelType='singletext'
                      label='동의합니다'
                      labelClassName='text-slate-500'
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className='flex justify-between w-full'>
                  <a
                    href='#!'
                    className='mobile:w-[19.375rem] mobile:text-sm tablet:w-[31.25rem] tablet:text-base desktop:w-[56.25rem] desktop:text-lg'
                  >
                    임보 기간 동안 단체에서 돌봄의 여건과 환경이 적합하지 않다고
                    판단해 반환을 요구하는 경우에는 이의를 제기하지 않고 협조할
                    의무가 있습니다.
                  </a>
                  <div className='pt-[0.25rem]'>
                    <CheckBox
                      name={'return'}
                      control={control}
                      labelType='singletext'
                      label='동의합니다'
                      labelClassName='text-slate-500'
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div className='h-[20.3125rem] grid mt-[3rem] flex justify-center'>
            <span className='text-xl'>임시 보호 지원 동기 및 각오</span>
            {/* <TextArea
              name={'comment'}
              control={control}
              placeholder='강아지의 특이사항이나 상세 정보를 자유롭게 작성해 주세요'
            /> */}
            <div className='tablet:w-[34.375rem] desktop:w-[1000px]'>
              <TextEditorWriter
                name={'comment'}
                control={control}
                placeholder='강아지의 특이사항이나 상세 정보를 자유롭게 작성해 주세요'
              />
            </div>
          </div>
        </section>
        <section>
          <div className='mt-[5.1875rem] mobile:w-[23.1875rem] desktop:w-[51.25rem] m-auto'>
            <CheckBox
              name={'result'}
              control={control}
              labelType='singletext'
              label='신청 결과는 니어팀과 담당 보호소 검토 후 회신됩니다. 신청서는 상황에 따라 반려될 수 있음에 동의합니다'
              labelClassName='text-slate-500'
            />
          </div>
        </section>
        <section>
          <div className='mt-[6.25rem]'>
            <Footer />
          </div>
          <FooterShadowBox>
            <div className='flex justify-around w-[21.875rem]'>
              <Button
                mode='outline'
                className='w-[8.125rem] h-[3.625rem]'
                onClick={onClickTempSave}
              >
                임시 저장
              </Button>
              <Button
                type='submit'
                isDisabled={!isValid}
                className='w-[8.125rem] h-[3.625rem]'
              >
                신청서 전송
              </Button>
            </div>
          </FooterShadowBox>
        </section>
      </form>
    </>
  );
};

export default Checklist;
