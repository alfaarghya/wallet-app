import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "../atoms/count";

export const useCountValue = () => {
  const value = useRecoilValue(countAtom);
  return value;
};
export const useSetCountState = () => {
  const setValue = useSetRecoilState(countAtom);
  return setValue;
};
export const useCountState = () => {
  const [value, setValue] = useRecoilState(countAtom);
  return { value, setValue };
};
