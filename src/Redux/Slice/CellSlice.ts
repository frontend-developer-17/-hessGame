import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ColorCell {
  board: [];
}

const initialState: any = {
  board: [],
  walkingFigure:"white"
};

export const cellSlice = createSlice({
  name: "cell",
  initialState,
  reducers: {
    addCell: (state, action: PayloadAction<any>) => {
      debugger
     state.board = action.payload;
    },
    moveFigure: (state, action: PayloadAction<any>) => {
      let currentFigure =state.board[action.payload.selectedFigur.x][action.payload.selectedFigur.y];
      state.board[action.payload.selected.x][action.payload.selected.y].figure = null;
        debugger
      currentFigure.count = true;


      currentFigure.figure = action.payload.selected.figure;


    },

    reverseMove:(state,action)=>{
      debugger

     state.board[action.payload.x][action.payload.y]=action.payload
    },

    

    eatKing:(state,action)=>{
      
     debugger
state.board[action.payload.x][action.payload.y].figure.activeEat=true
    },
    king:(state,action)=>{
     state.board[action.payload.x][action.payload.y].figure.activeEat=false

    },

    
    activeAvalibel:(state,action)=>{
state.board[action.payload.x][action.payload.y].avalibel=true
    },
    disableAvalibel: (state, action) => {
     state.board[action.payload.i][action.payload.j].avalibel = false;
    },

    newFigureWhite:(state,action)=>{
      debugger
     state.board[action.payload.x][action.payload.y].figure=action.payload.figura

    },
    newFigureBlack:(state,action)=>{
      debugger
     state.board[action.payload.x][action.payload.y].figure=action.payload.figura

    },
    addWalkFigure:(state,action)=>{
      state.walkingFigure=action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  addCell,
  moveFigure,
  disableAvalibel,
  activeAvalibel,
  eatKing,
  reverseMove,
  king,
  newFigureWhite,
  newFigureBlack,
  addWalkFigure
} = cellSlice.actions;

export default cellSlice.reducer;
