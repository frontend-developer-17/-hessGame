import React from "react";
import { HodPodWax } from "./HodPodWax";
import { hod } from "./proverkaofWaxFunc";
import { BoardTS } from "../../../Common/types/boardTS";

export const proverkaMat = (
  board: BoardTS[][],
  activeKingHod: any,
  proverkaOfColor: any,
  currentKingCellFigure:any,
  eatKingHod:any
) => {
  debugger;

  let matKing!:string;

  let active = false;
  let currentKingCell:any

  let trus = [];
  debugger;
  debugger;
  activeKingHod.forEach((item: any) => {
    debugger
   
        active = true;
        debugger;
        let currentFigure= currentKingCellFigure
        let selectedFigure=item
      let result =  HodPodWax(board,currentFigure,selectedFigure)
      if (!result) {
        trus.push(false);

     
      }
  });
  
  if (activeKingHod.length == trus.length) {
    let r = false;//boolean флаг отвечающий за прикрытие короля 
    for (let index = 0; index < board.length; index++) {
      for (let j = 0; j < board.length; j++) {
        if (r) {
          return;
        }
        if (
          board[index][j].figure &&
          board[index][j].figure?.color === proverkaOfColor
        ) {
          let resultHod = hod(board, index, j);

          let result1;
          let selectedFigur1:any;
          if (resultHod && resultHod.result.length > 0) {
            result1 = resultHod.result;
            selectedFigur1 = resultHod.selectedFigur;
          
              result1.forEach((tyty: any) => {
                eatKingHod.some((other: any) => {
                 
                  if (other.x === tyty.x && other.y === tyty.y) {
                    currentKingCell=board[other.x][other.y]
                    
                      let currentFigure=selectedFigur1
                      let selectedFigure=tyty
                      debugger
                      let result =  HodPodWax(board,currentFigure,selectedFigure)
                    debugger;
                    if (result) {
                      r = true;

                    }

                  }
                });
              });
              continue;
            }
          } else {
            continue;
          }
        

        
      }
    }
    if (!r) {
      if (proverkaOfColor === "white") {
        debugger;
        matKing = "Белым фигурам мат! Черные фигуры победили";
      } else {
        debugger;
        matKing = "Черным фигурам мат! Белые фигуры победили!";
      }
    }else{
      matKing=""
    }
  }

  return matKing;
};


