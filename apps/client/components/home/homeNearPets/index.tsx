'use client';

import { clsx } from '@near/clsx';
import { CardWithLike, HeaderButton, HeaderSubTitle, HeaderTitle } from 'ui';
import { DummyNearPets } from '../dummy';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Session, createClientComponentClient } from '@near/supabase';

function HomeNearPets() {
  const router = useRouter();
  const [data, setData] = useState(DummyNearPets);
  const [isClient, setIsClient] = useState(false);
  const supabase = createClientComponentClient();
  const [userSession, setuserSession] = useState<Session | null>();
  const [name, setName] = useState<string | null>();
  const handleIsLiked = (index: number) => {
    let newData = [...data];
    newData[index].isLiked = !newData[index].isLiked;
    setData(newData);
  };

  async function getUserSession() {
    const { data, error } = await supabase.auth.getSession();
    if (data) {
      setuserSession(data.session);
    }

    if (data.session?.user.role === 'normal_user') {
      const { data: user } = await supabase.from('user_profile').select('name');
      user && setName(user[0].name);
    }
    if (data.session?.user.role === 'shelter_user') {
      const { data: user } = await supabase
        .from('shelter_profile')
        .select('shelter_name');
      user && setName(user[0].shelter_name);
    }

    if (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setIsClient(true);
    getUserSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    isClient && (
      <section
        className={clsx(
          'flex flex-col items-center justify-center w-full gap-10 overflow-hidden',
          'mobile:gap-10',
          'tablet:gap-20',
          'desktop:gap-20',
        )}
      >
        <div className='flex flex-col items-center justify-center gap-1 mobile:gap-1 tablet:gap-2 tablet:py-[2.125rem] desktop:gap-2 desktop:py-[2.125rem]'>
          <HeaderTitle
            title={
              userSession ? '우리 동네 근처 (NEAR) 관리 동물' : '니어 관리 동물'
            }
          >
            <HeaderButton href='/pet' />
          </HeaderTitle>
          <HeaderSubTitle
            subTitle={
              userSession
                ? `${name} 님의 근처 보호소에 들어와 니어 서비스에서 관리 중인 동물입니다.`
                : '보호소에 들어와 니어 서비스에 등록되어 관리중인 동물입니다.'
            }
          />
        </div>

        {/* !! 캐러셀, 로직 수정 필요 */}
        <ul className='overflow-x-auto grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-7 place-items-center mobile:grid-cols-2 mobile:grid-rows-2 mobile:gap-x-5 mobile:gap-y-7 mobile:place-items-center tablet:grid-cols-4 tablet:grid-rows-1 tablet:gap-x-10 tablet:gap-y-0 tablet:place-items-center tablet:min-w-[78.25rem] desktop:grid-cols-4 desktop:grid-rows-1 desktop:gap-x-10 desktop:gap-y-0 desktop:place-items-center desktop:min-w-[78.25rem]'>
          {data.map((item, index) => {
            return (
              <li key={`home_near_pets_${index}`}>
                <CardWithLike
                  petData={item.petData}
                  src={item.src}
                  tags={item.tags}
                  isLiked={item.isLiked}
                  setIsLiked={() => handleIsLiked(index)}
                  handleLikeButtonClick={
                    userSession
                      ? () => {
                          handleIsLiked(index);
                        }
                      : () => {
                          router.push('/login');
                        }
                  }
                />
              </li>
            );
          })}
        </ul>
      </section>
    )
  );
}

export default HomeNearPets;
