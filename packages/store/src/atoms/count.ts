import { atom } from "recoil";

export const countAtom = atom<Number>({
  key: "countAtom",
  default: 111,
});
