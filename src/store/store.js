import { configureStore } from '@reduxjs/toolkit'
import BalanceSlice from '../slices/BalanceSlice'

export const store = configureStore({
  reducer: {
      balance: BalanceSlice
  },
})