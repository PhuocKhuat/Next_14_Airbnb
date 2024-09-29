import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface I_Value {
  value: number
}

const initialState: I_Value = {
  value: 0
}

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    actionOne: state => {
      // logic của action 1
    },
    actionTwo: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    }
  }
})

export type counterSlice = ReturnType<typeof counterSlice.reducer>

export const { actionOne, actionTwo } = counterSlice.actions
export default counterSlice.reducer
