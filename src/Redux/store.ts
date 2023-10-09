import { configureStore } from '@reduxjs/toolkit'
import  cellSlice  from './Slice/CellSlice'
import  eatenFiguresSlice  from './Slice/EatenfiguresSlice'
import { authorisationApi } from './RTQ/Auto'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import TymerSlice from './Slice/TymerSlice'
import { userApi } from './RTQ/User'
import Auth from './Slice/Auth'
import  HahskaSlice  from './Slice/hahskaSlice'

export const store = configureStore({
  reducer: {
    cell: cellSlice,
    eatenFigures:eatenFiguresSlice,
    tymerSlice:TymerSlice,
    auth:Auth,
    hahskaBoard:HahskaSlice,
    [authorisationApi.reducerPath]: authorisationApi.reducer,
      [userApi.reducerPath]: userApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authorisationApi.middleware,userApi.middleware)
    
    
})
setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch