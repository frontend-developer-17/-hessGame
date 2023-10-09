import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FigureTS, eatenFiguresInitial } from "../../Common/types/boardTS";

const initialState: any = {
  whiteTymer:  null,
  blackTymer:  null,

 startTymer:false,
  restartTymer:false,
};

export const TymerSlice = createSlice({
  name: "tymer",
  initialState,
  reducers: {
    addWhiteTymer: (state, action: PayloadAction<number|null>) => {
      state.whiteTymer=action.payload
      state.startTymer=true
    },
    addBlackTymer: (state, action: PayloadAction<number|null>) => {
      state.blackTymer=action.payload
      state.startTymer=true

    },

    
  },
});
export const {
    addWhiteTymer,
    addBlackTymer
} = TymerSlice.actions;

export default TymerSlice.reducer;