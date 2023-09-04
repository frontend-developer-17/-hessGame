import { diagonalDownLeft, diagonalDownRight, diagonalUpLeft, diagonalUpRight, proverkaKingEat } from "./BishopLogic";
import { horisontal, vertical } from "./RookLogis";

export const QueenLogic = (selectedFigur: any, board: any) => {
     let array: any = [];
     let upLeft =  diagonalUpLeft(
        selectedFigur.x,
        selectedFigur.y,
        selectedFigur,
        board,
        []
      );
      let upRight =diagonalUpRight(
        selectedFigur.x,
        selectedFigur.y,
        selectedFigur,
        board,
        []
      );
      let downLeft= diagonalDownLeft(
        selectedFigur.x,
        selectedFigur.y,
        selectedFigur,
        board,
        []
      );
      let downRight=diagonalDownRight(
        selectedFigur.x,
        selectedFigur.y,
        selectedFigur,
        board,
        []
      );

      let eatKing:any=[]


      if (upLeft||upRight||downLeft||downRight) {
        let upLeft1:any = proverkaKingEat(upLeft,board)
        if (upLeft1.length>0) {
         eatKing=upLeft1
        }
          let upLeft2:any = proverkaKingEat(upRight,board)
           if (upLeft2.length>0) {
             eatKing=upLeft2
            }
          let down1:any = proverkaKingEat(downLeft,board)
       if (down1.length>0) {
         eatKing=down1
       
       }
       
          let down2:any = proverkaKingEat(downRight,board)
          if (down2.length>0) {
           eatKing=down2
       
          }
        }
    array.push(...upLeft,...upRight,...downLeft,...downRight)

    let moveHorisontal: any = horisontal(board, selectedFigur);
    let moveVertical: any = vertical(board, selectedFigur);
    moveHorisontal.forEach((item:any)=>{
      if (board[item.x][item.y].figure&&board[item.x][item.y].figure.name==="King" ) {
        eatKing=moveHorisontal
      
      }
    })
  
    moveVertical.forEach((item:any)=>{
      if (board[item.x][item.y].figure&&board[item.x][item.y].figure.name==="King" ) {
        eatKing=moveVertical
      
      }
    })
    array.push(...moveHorisontal, ...moveVertical);
  
    return {array,eatKing};
  };