import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import type { Provider } from '../../../node_modules/@supabase/gotrue-js/src/lib/types';
const supabase = createClientComponentClient();
type Providers = Extract<Provider, 'google' | 'kakao'>;

export async function handleSocialSignin(provider: Providers) {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      redirectTo: `${new URL(location.href).origin}/auth/callback`,
      // queryParams: {
      //   access_type: 'offline',
      //   prompt: 'consent',
      // },
    },
    // options: {
    //   redirectTo: `http://localhost:3003/auth/callback/route`,
    // },
  });

  if (error) {
    throw new TypeError(
      `에러 이름: ${error?.name}, 에러 코드: ${error?.status} ,에러 메세지: ${error?.message}`,
    );
  }
  return { data, error };
}
