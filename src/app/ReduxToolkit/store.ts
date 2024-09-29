import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const store = configureStore({
  reducer: {}
})

export type RootState = ReturnType<typeof store.getState>
// Hook useDispatch
export const useAppDispatch: () => typeof store.dispatch = useDispatch
// // Hook useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
