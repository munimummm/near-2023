import { ButtonETC, ButtonXL, ButtonXS, ModifyPet, VerticalProfile } from 'ui';
// import { DummyPetProfile, DummyProfile } from './dummy';
import { Session, createClientComponentClient } from '@near/supabase';
import { useEffect, useState } from 'react';
import { getUsersession, useRecoilValue } from '@near/store';
interface ProfileBoxSectionProps {
  // href: string;
  src: '/images/profile/img_profile_default.png';
  level?: string;
  name: string;
  email: string;
}
function ProfileBoxSection({ ...props }: ProfileBoxSectionProps) {
  const supabase = createClientComponentClient();
  const getUserSession = useRecoilValue(getUsersession);
  const [petProfile, setPetProfile] = useState<any[] | null>();

  async function getPetData() {
    if (getUserSession?.user.role === 'normal_user') {
      const { data: pet } = await supabase
        .from('user_pet_profile')
        .select('user_pet_age, user_pet_gender, user_pet_name');
      setPetProfile(pet);
    }
  }

  useEffect(() => {
    getPetData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { src, level = 1, name, email } = props;
  return (
    <section className='flex flex-col gap-12 items-center justify-center rounded-none mobile:rounded-none tablet:rounded-[1.25rem] desktop:rounded-[1.25rem] bg-transparent mobile:bg-transparent p-0 mobile:p-0 tablet:p-6 tablet:pb-[4.5rem] tablet:bg-gray-3 desktop:p-6 desktop:pb-[4.5rem] desktop:bg-gray-3'>
      <VerticalProfile
        href={
          getUserSession?.user.role === 'normal_user'
            ? `/profile/personalchange`
            : ''
        }
        src={src}
        level={Number(level)}
        name={name}
        email={email}
      />
      {/* <AddPet backgroundColor='white' href={'/profile/pet'} /> */}
      {getUserSession?.user.role === 'normal_user' && (
        <ModifyPet
          href={`/profile/pet`}
          name={petProfile && petProfile[0].user_pet_name}
          src={'/images/profile/img_test.jpg'}
          gender={
            petProfile && petProfile[0].user_pet_gender === 'male' ? '남' : '여'
          }
          age={Number(petProfile && petProfile[0].user_pet_age)}
        />
      )}
    </section>
  );
}

export default ProfileBoxSection;
