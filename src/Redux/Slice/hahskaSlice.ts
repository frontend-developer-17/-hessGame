import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BoardTS, IMoveFigure } from "../../Common/types/boardTS";

export interface ColorCell {
  board: BoardTS[][];
  walkingFigure: string;
  eatenPeshs:any[];
  unFinishedMove:boolean

}

const initialState: ColorCell = {
  board: [] as BoardTS[][],
  walkingFigure: "white",
  eatenPeshs:[],
  unFinishedMove:false

};

export const HahskaSlice = createSlice({
  name: "hahskaBoard",
  initialState,
  reducers: {
    addBoardHaska: (state, action: PayloadAction<any>) => {
      debugger;
      state.board = action.payload;
    },
    activeAvalibelHod: (
      state,
      action: PayloadAction<{ x: number; y: number }>
    ) => {
      state.board[action.payload.x][action.payload.y].avalibel = true;
    },
    movePeshka: (state, action: PayloadAction<IMoveFigure>) => {
      debugger
      state.board[action.payload.selectedFigur.x][
          action.payload.selectedFigur.y].figure =  action.payload.currentFigure.figure;
     
     
          state.board[action.payload.currentFigure.x][
        action.payload.currentFigure.y
      ].figure = null;
debugger
    
    },
    disableAvalibelHod: (state, action:PayloadAction<{i:number,j:number}>) => {
      state.board[action.payload.i][action.payload.j].avalibel = false;
     },
     eatPeshka:(state,action)=>{
      debugger
      state.board[action.payload.x][action.payload.y].figure = null;
    
    },
    addWalkPeshka:(state,action)=>{
      state.walkingFigure=action.payload
    },
    eatPeshkaActive:(state,action)=>{
      let figure = state.board[action.payload.x][action.payload.y].figure
      if (figure) {
        figure.activeEatPeshka=true

      }
      
    
    },
    addUnFinishedMove:(state,action)=>{
      debugger
state.unFinishedMove=action.payload
    },
    eatPeshkaDisable:(state,action)=>{
      debugger
      let figure = state.board[action.payload.x][action.payload.y].figure
      if (figure) {
        figure.activeEatPeshka=false

      }
    
    },

    addEatenPeshka:(state,action)=>{
      state.eatenPeshs.push({x:action.payload.x,y:action.payload.y})
    }
  },
});
export const { addBoardHaska, activeAvalibelHod, 
  movePeshka,disableAvalibelHod,eatPeshka,
  addWalkPeshka,eatPeshkaActive,
  addEatenPeshka,eatPeshkaDisable,
  addUnFinishedMove } =
  HahskaSlice.actions;

export default HahskaSlice.reducer;
