import { AppDispatch } from "../../Redux/store";
import { BoardTS } from "./boardTS";

export interface propsHilightFunctional{
    dispatch: AppDispatch,
  board: BoardTS[][],
  selectedFigur: BoardTS,
  setCurrentFigure: ()=>void,
  currentFigure: BoardTS,
  setCurrentFigurMove: any,
  setReturnFigure: any,
  walkingFigure: any,
  setRestartBoard: any,
  setRokirovka: any,
  checkmate:any
}