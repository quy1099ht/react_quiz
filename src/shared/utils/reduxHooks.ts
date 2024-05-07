import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../../reducer/store"
import { useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;