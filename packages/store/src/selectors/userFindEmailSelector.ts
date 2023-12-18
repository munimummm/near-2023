import { userFindEmailState } from '../atoms/userFindEmail';
import { selector } from 'recoil';

export const userFindEmailSelector = selector({
  key: 'userEmailStateSelector',
  get: ({ get }) => get(userFindEmailState),
  set: ({ set }, newValue) => set(userFindEmailState, newValue),
});
