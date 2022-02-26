import React from 'react';
import DepositBank from './components/DepositBank';
import {useSelector} from 'react-redux'
import { State } from './redux/index'

function App() {
  const amount = useSelector((state:State) => state.bank)
  // console.log(amount)
  // const eArabic = (x:number) => {
  //   return x.toLocaleString('ar-EG')
  // } 
  // console.log(eArabic(amount))
  return (
    <div className="App" style={{textAlign:'left'}}>
      <h1>Amount : {amount.toLocaleString()} VND</h1>
      <DepositBank total = {amount}/>
    </div>
  );
}

export default App;
