import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const supabase = createClientComponentClient();

// const userData: SignupProps = {
//   email: 'near_testt@near.com',
//   password: 'rkskek123!!',
//   role: 'shelter_user',
//   shelter_data: {
//     shelter_name: 'test',
//     ceo_phone: 'test',
//     shelter_address: 'test',
//     shelter_detail_address: 'test',
//     shelter_type: 'test',
//     shelter_scale: 'test',
//     ceo_name: 'test',
//     marketing_agree: false,]//     register_number: 'test',
//   },
// };
// () => handleSignUp(userData);
export interface SignupProps {
  email?: string;
  password?: string;
  role?: 'shelter_user' | 'normal_user';
  shelter_data?: {
    shelter_name: string;
    ceo_phone: string;
    shelter_address: string;
    shelter_detail_address: string;
    shelter_type: string;
    shelter_scale: string;
    ceo_name: string;
    marketing_agree: boolean;
    shelter_cooperation: boolean;
    register_number: string;
  };
  normal_data?: {
    name: string;
    phone: string;
    address: string;
    detail_address: string;
    marketing_agree: boolean;
  };
}

const changeCount = async () => {
  const { count, error } = await supabase
    .from('shelter_profile')
    .select('*', { count: 'exact', head: true });

  if (count === null || error) {
    throw new Error(error?.message);
  }
  const changeCount = (count + 1)?.toString().padStart(4, '0');
  console.log(changeCount);

  return { changeCount };
};

export const handleSignUp = async (userData: SignupProps) => {
  const countShelterUserId = (await changeCount()).changeCount;
  if (userData.role !== undefined) {
    await supabase.auth.signUp({
      email:
        userData.role === 'normal_user'
          ? (userData.email as string)
          : `near${countShelterUserId}@near.com`,
      password: userData.password as string,
      options: {
        data: {
          role: userData.role,
          ...(userData.role === 'normal_user'
            ? userData.normal_data
            : userData.shelter_data),
        },
      },
    });
  } else {
    throw new Error('role을 지정하지 않았습니다.');
  }
};
