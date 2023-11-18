import { atom } from 'recoil';

export const autoLoginUserState = atom({
  key: 'autoLoginUserState',
  default: {
    isSelectedAutoLogin: true,
  },
});
