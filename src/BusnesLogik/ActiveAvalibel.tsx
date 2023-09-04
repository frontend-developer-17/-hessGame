import React from 'react'
import { BishopLogic } from './BishopLogic';
import { useDispatch } from 'react-redux';
import { activeAvalibel } from '../Redux/Slice/CellSlice';
import { RookLogis } from './RookLogis';
import { PawnAvalib } from './PawnAvalib';
import { KnightAvalib } from './KnightLogic';
import { QueenLogic } from './QueenLogic';
import { KingLogic } from './KingLogic';
import { useWax } from '../mys/wax';

// function ActiveAvalibelFigure(cellColor:any) {
// const dispatch = useDispatch()
export const  isActive =  (selectedFigur:any,dispatch:any,board:any)=> {
 //let active = proverkaActive(cellColor,selectedFigur)
  debugger
  
    if (selectedFigur.figure.name === "Bishop") {
      let result: any = BishopLogic(selectedFigur, board);
      if (result) {
        result.array.forEach((item: any) => {
          if (item) {
            let x = item.x;
            let y = item.y;
            dispatch(activeAvalibel({ x, y }));
          }
        });
      }
    }
    if (selectedFigur.figure.name === "Rook") {
      let result: any = RookLogis(selectedFigur, board);
      if (result) {
        result.array.forEach((item: any) => {
          let x = item.x;
          let y = item.y;
          dispatch(activeAvalibel({ x, y }));
        });
      }
    }
    if (selectedFigur.figure.name === "Pawn") {
      let result: any = PawnAvalib(selectedFigur, board);
      debugger
      if (result) {
        debugger
        result.forEach((item: any) => {
          if (item) {
            let x = item.x;
            let y = item.y;
            dispatch(activeAvalibel({ x, y }));
          }
        });
      }
    }
    if (selectedFigur.figure.name === "Knight") {
      let result: any = KnightAvalib(selectedFigur, board);
      debugger
      if (result) {
        debugger
        result.forEach((item: any) => {
          if (item) {
            let x = item.x;
            let y = item.y;
            dispatch(activeAvalibel({ x, y }));
          }
        });
      }
    }
    if (selectedFigur.figure.name === "Queen") {
      let result: any = QueenLogic(selectedFigur, board);
      if (result) {
        result.array.forEach((item: any) => {
          let x = item.x;
          let y = item.y;
          dispatch(activeAvalibel({ x, y }));
        });
      }
    }
    if (selectedFigur.figure.name === "King") {
      let result: any = KingLogic(selectedFigur, board);
      debugger;
      if (result) {
        result.forEach((item: any) => {
          debugger;
          let x = item.x;
          let y = item.y;
          dispatch(activeAvalibel({ x, y }));
        });
      }
    }
  
  
  
  
  
  


}
 // return[isActive]


