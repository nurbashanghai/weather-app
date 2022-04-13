import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { bindActionCreators, Dispatch } from "redux";

export const useActions = (actions: any) => {
  const dispatch: Dispatch<any> = useDispatch();

  return useMemo(() => {
    return bindActionCreators(actions, dispatch);
  }, []);
};
