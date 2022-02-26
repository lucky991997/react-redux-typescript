import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  depositBank,
  withdrawBank,
  bankrup,
} from "../action-creator/ActionCreator";

type AmountProps = {
    total: number
}

const DepositBank = ({total}: AmountProps) => {

  const dispatch = useDispatch();
  const deposit = bindActionCreators(depositBank, dispatch);
  const withdraw = bindActionCreators(withdrawBank, dispatch);
  const resetBank = bindActionCreators(bankrup, dispatch);
  const [amount, setAmount] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  const handleDeposit = () => {
    // dispatch({
    //     type: ActionType.DEPOSIT,
    //     payload: +amount, //convert number
    // })
    deposit(+amount);
    inputRef.current?.focus();
    setAmount("");
  };
  const handleWithDraw = () => {
    if(total > +amount) {
        withdraw(+amount);
        inputRef.current?.focus();
        setAmount("");
    }else {
        alert('deposit nhỏ hơn số tiền rút')
    }
  };
  const handleResetBank = () => {
    resetBank();
  };

  return (
    <>
      <h1>Deposit Bank</h1>
      <input
        value={amount}
        ref={inputRef}
        onChange={(event) => setAmount(event.target.value)}
        placeholder="Enter amount"
      />
      <br />
      <button onClick={() => handleDeposit()}>Deposit</button>
      <button onClick={() => handleWithDraw()}>Deposit</button>
      <button onClick={() => handleResetBank()}>Deposit</button>
    </>
  );
};

export default DepositBank;
