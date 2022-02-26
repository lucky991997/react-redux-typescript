import { ActionType }  from "../action-types/ActionType"

 const initialState = {
    amount: 0
}

type ActionBank = {
    type: string,
    payload: number
}
type ActionBankrup = {
    type : 'BANKRUP'
}
type ActionTypeReducer = ActionBank | ActionBankrup

const bankReducer = ( state: number = initialState.amount, action: ActionTypeReducer) => {
    switch (action.type) {
        case ActionType.DEPOSIT:
            return  state + action.payload
        case ActionType.WITHDRAW:
            return state - action.payload
        case ActionType.BANKRUP:
            return 0
        default:
            return state
    }
}

export {initialState}

export default bankReducer