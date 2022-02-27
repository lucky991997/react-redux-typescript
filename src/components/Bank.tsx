import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  depositBank,
  withdrawBank,
  bankrup,
} from "../action-creator/ActionCreator";

type AmountProps = {
  total: number;
};

const DepositBank = ({ total }: AmountProps) => {
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
    if (amount !== "") {
      deposit(+amount);
      inputRef.current?.focus();
      setAmount("");
    } else {
      alert("Vui lòng nhập số tiền cần giao dịch");
    }
  };
  const handleWithDraw = () => {
    if (amount !== "") {
      if (total > +amount) {
        withdraw(+amount);
        inputRef.current?.focus();
        setAmount("");
      } else {
        alert("số tiền cần rút lớn hơn số tiền có trong tài khoản");
      }
    }else {
      alert("Vui lòng nhập số tiền cần giao dịch");

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
      <button onClick={() => handleWithDraw()}>withdraw</button>
      {/* <button onClick={() => handleResetBank()}>resetBank</button> */}
    </>
  );
};

export default DepositBank;
