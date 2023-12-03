import { createClientComponentClient } from '@near/supabase';
import { userSessionState } from '../atoms/userSessionState';
import { selector } from 'recoil';
const supabase = createClientComponentClient();

export const getUsersession = selector({
  key: 'getUserSession',
  get: async ({ get }) => {
    const userSession = get(userSessionState);
    if (userSession === null) {
      const { data, error } = await supabase.auth.getSession();
      if (data) {
        return data.session;
      }
      if (error) {
        console.log(
          `에러 상태: ${error.status}, 에러 이름: ${error.name}, 에러 메세지${error.message}`,
        );
      }
    }
  },
  set: async ({ set }, newValue) => {
    set(userSessionState, newValue);
  },
});
