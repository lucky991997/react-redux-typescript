import { ActionType } from "../action-types/ActionType"

type DepositBank = {
    type: ActionType.DEPOSIT;
    payload: number;
}

type WithdrawBank = {
    type: ActionType.WITHDRAW;
    payload: number;
}
type Bankrup = {
    type: ActionType.BANKRUP
}


export  type Action = DepositBank | WithdrawBank | Bankrup