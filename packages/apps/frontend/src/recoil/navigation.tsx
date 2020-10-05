import { atom, selectorFamily, DefaultValue } from 'recoil';

export const navigationStatusAtom = atom<boolean[]>({
  key: 'navigationStatus',
  default: []
});

export const stepStatusSelector = selectorFamily<boolean, number>({
  key: 'stepStatus',
  get: (index) => ({ get }) => get(navigationStatusAtom)[index],
  set: (index) => ({ get, set }, status) => {
    if (status instanceof DefaultValue) return;

    const updatedNavigationStatus = [...get(navigationStatusAtom)];
    updatedNavigationStatus[index] = status;
    set(navigationStatusAtom, updatedNavigationStatus);
  }
});
