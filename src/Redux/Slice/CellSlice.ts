import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BoardTS, IMoveFigure } from "../../Common/types/boardTS";

export interface ColorCell {
  board: BoardTS[][];
  walkingFigure:string
}

const initialState: ColorCell = {
  board:  [] as BoardTS[][] ,
  walkingFigure:"white"
};

export const cellSlice = createSlice({
  name: "cell",
  initialState,
  reducers: {
    addCell: (state, action: PayloadAction<BoardTS[][]>) => {
      debugger
     state.board = action.payload;
    },
    moveFigure: (state, action: PayloadAction<IMoveFigure>) => {
      let currentFigure =state.board[action.payload.selectedFigur.x][action.payload.selectedFigur.y];
        state.board[action.payload.currentFigure.x][action.payload.currentFigure.y].figure = null;

        debugger
      currentFigure.count = true;


      currentFigure.figure = action.payload.currentFigure.figure;


    },

    reverseMove:(state,action)=>{
       state.board[action.payload.x][action.payload.y]=action.payload
    },

    

    eatKing:(state,action)=>{
      let figure = state.board[action.payload.x][action.payload.y].figure
      if (figure) {
        figure.activeEat=true

      }
    
    },
    king:(state,action)=>{
      let figure = state.board[action.payload.x][action.payload.y].figure
      if (figure) {
        figure.activeEat=false

      }
    },

    
    activeAvalibel:(state,action:PayloadAction<{x:number,y:number}>)=>{
      debugger
state.board[action.payload.x][action.payload.y].avalibel=true
    },
    disableAvalibel: (state, action:PayloadAction<{i:number,j:number}>) => {
      debugger
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
