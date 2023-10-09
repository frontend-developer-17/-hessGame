import React from 'react'
import { BishopLogic } from '../FigureHod/BishopLogic';
import { useDispatch } from 'react-redux';
import { activeAvalibel } from '../../../Redux/Slice/CellSlice';
import { RookLogis } from '../FigureHod/RookLogis';
import { PawnAvalib } from '../FigureHod/PawnLogic';
import { KnightAvalib } from '../FigureHod/KnightLogic';
import { QueenLogic } from '../FigureHod/QueenLogic';
import { KingLogic } from '../FigureHod/KingLogic';

// function ActiveAvalibelFigure(cellColor:any) {
// const dispatch = useDispatch()
export const  isActive =  (selectedFigur:any,dispatch:any,board:any)=> {
 //let active = proverkaActive(cellColor,selectedFigur)
  debugger
 
  const activeAvalibelHod = (result:any)=>{
    let figureName=selectedFigur.figure.name
    if (figureName=="Bishop"||figureName=="Rook"||figureName=="Queen") {
      if (result) {
        result.array.forEach((item: any) => {
          if (item) {
            let x = item.x;
            let y = item.y;
            dispatch(activeAvalibel({ x, y }));
          }
        });
      }
    }else{
      if (result) {
        result.forEach((item: any) => {
          if (item) {
            let x = item.x;
            let y = item.y;
            dispatch(activeAvalibel({ x, y }));
          }
        });
      }
    }
   
  }
    if (selectedFigur.figure.name === "Bishop") {
      let result: any = BishopLogic(selectedFigur, board);
      activeAvalibelHod(result)
    }
    if (selectedFigur.figure.name === "Rook") {
      let result: any = RookLogis(selectedFigur, board);
      activeAvalibelHod(result)

    }
    if (selectedFigur.figure.name === "Pawn") {
      let result: any = PawnAvalib(selectedFigur, board);
      debugger
      activeAvalibelHod(result)

    }
    if (selectedFigur.figure.name === "Knight") {
      let result: any = KnightAvalib(selectedFigur, board);
      debugger
      activeAvalibelHod(result)

    }
    if (selectedFigur.figure.name === "Queen") {
      let result: any = QueenLogic(selectedFigur, board);
      activeAvalibelHod(result)

    }
    if (selectedFigur.figure.name === "King") {
      let result: any = KingLogic(selectedFigur, board);
      debugger;
      activeAvalibelHod(result)

    }
  
  
  
  
  
  


}
 // return[isActive]


