import type { TypedUseSelectorHook } from "react-redux";
import type { AppDispath, RootState } from "../store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const useTypedSelecter: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch = () => useDispatch<AppDispath>();
