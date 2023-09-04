import { configureStore } from '@reduxjs/toolkit'
import  cellSlice  from './Slice/CellSlice'
import  eatenFiguresSlice  from './Slice/EatenfiguresSlice'

export const store = configureStore({
  reducer: {
    cell: cellSlice,
    eatenFigures:eatenFiguresSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch