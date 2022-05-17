import React,{useState} from 'react'
import '../App.css';
import { useSelector, useDispatch } from 'react-redux'
import { checkBalance,setBalance } from '../slices/BalanceSlice'

const Account = () => {
     
    const[username,setUserName]=useState('');
    const[withdraw,setWithdraw]=useState('');
    const[flag,setFlag]=useState(false);

    const dispatch = useDispatch()
    const amount = useSelector((state) => state.balance.amount)
    const name= useSelector((state) => state.balance.name)

    const handleAmount=(event)=>{
        setUserName(event.target.value);
    }

    
    const withdrawMoney=(event)=>{
         setWithdraw(event.target.value)
    }

    const balanceBtn=()=>{
        dispatch(checkBalance(username))
        setFlag(true);
    }


    const withdrawBtn=()=>{
        dispatch(setBalance((+amount)-(+withdraw)));
    }



  return (
      <>
       <div className="head">
           <img className="image" src={"https://tse3.mm.bing.net/th?id=OIP.48v0-izHjDQw6I9nZXqO9gHaE8&pid=Api&P=0&w=228&h=152"} alt="photographer" />
           <h2>Welcome! To SBI.</h2>
       </div>
       <div className='Balance'>
           <input type="text"  value={username} onChange={handleAmount}/>
           <br/>
           
           <button onClick={balanceBtn}>Check Balance</button>
       </div>
      <div className='withdraw'>
        {flag?
         <h3>Welcome,{name} Your account balance is ${amount}</h3>
         :
         null
        }
    
    

        <input type="number" value={withdraw} onChange={withdrawMoney}/>
          <br/>
          <br/>
        <button onClick={withdrawBtn}>Withdraw Amount</button>
      </div>
      </>
   
  )
}

export default Account