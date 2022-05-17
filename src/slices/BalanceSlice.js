import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name:"",
  amount:10000,
}

export const BalanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
      checkBalance:(state,action)=>{
          state.name=action.payload
      },

      setBalance:(state,action)=>{
          state.amount=action.payload
      },

    
  },
})


export const {checkBalance,setBalance} =BalanceSlice.actions

export default BalanceSlice.reducer