import { Dispatch } from "redux";
import { ActionType } from "../action-types/ActionType";
import { Action } from "../actions/Action";

export const depositBank = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: amount,
    });
  };
};
export const withdrawBank = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.WITHDRAW,
      payload: amount,
    });
  };
};
export const bankrup = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BANKRUP,
    });
  };
};