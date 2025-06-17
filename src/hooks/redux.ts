import type { TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";

// ✅ 함수명 오타 수정
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch = () => useDispatch<AppDispatch>();
