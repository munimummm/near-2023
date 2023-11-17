import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const supabase = createClientComponentClient();

export interface SignupProps {
  email: string;
  password: string;
  role: 'shelter_user' | 'normal_user';
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
    shelter_address: string;
    shelter_detail_address: string;
    shelter_type: string;
    shelter_scale: string;
    ceo_name: string;
    marketing_agree: boolean;
    shelter_cooperation: boolean;
    register_number: string;
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

  return { changeCount };
};

export const handleSignUp = async (userData: SignupProps) => {
  const countShelterUserId = (await changeCount()).changeCount;
  await supabase.auth.signUp({
    email:
      userData.role === 'normal_user'
        ? userData.email
        : `near${countShelterUserId}@near.com`,
    password: userData.password,
    options: {
      data: {
        role: userData.role,
        ...(userData.role === 'normal_user'
          ? userData.normal_data
          : userData.shelter_data),
      },
    },
  });
};
