import { isArray } from "util";
import { BoardTS } from "../../../Common/types/boardTS";

export const diagonalUpLeft = (
  selectedX: number,
  selectedY: number,
  selectedFigur: any,
  board: BoardTS[][],
  array:[{x:number,y:number}]|any[]
) => {
  let x = selectedX;
  let y = selectedY;
  if (x === selectedFigur.x && y === selectedFigur.y) {    diagonalUpLeft(x - 1, y - 1, selectedFigur, board,array);
  }
  if (board[x] && board[y]) {
    if (!board[x][y].figure) {
      
      array.push({ x, y });
      
      diagonalUpLeft(x - 1, y - 1, selectedFigur, board,array);
    } else if (board[x][y].figure?.color !== selectedFigur.figure.color) {
       array.push({ x, y });

      return array
    } else if (board[x][y].figure?.color === selectedFigur.figure.color) {
      return array
    }
  }

  return array

};

export const diagonalUpRight = (
  selectedX: number,
  selectedY: number,
  selectedFigur: any,
  board: any,
  array:any
) => {
  let x = selectedX;
  let y = selectedY;
  if (x === selectedFigur.x && y === selectedFigur.y) {

    diagonalUpRight(x - 1, y + 1, selectedFigur, board,array);
  }
  if (board[x] && board[y]) {
    if (!board[x][y].figure) {
        array.push({ x, y });
      diagonalUpRight(x - 1, y + 1, selectedFigur, board,array);
    } else if (board[x][y].figure.color !== selectedFigur.figure.color) {
        array.push({ x, y });
      return array
    } else if (board[x][y].figure.color === selectedFigur.figure.color) {
      return array
    }
  }
  return array
};

export const diagonalDownLeft = (
  selectedX: any,
  selectedY: any,
  selectedFigur: any,
  board: any,
  array:any
) => {
  let x = selectedX;
  let y = selectedY;
  if (x === selectedFigur.x && y === selectedFigur.y) {
    diagonalDownLeft(x + 1, y + 1, selectedFigur, board,array);
  }
  if (board[x] && board[y]) {
    if (!board[x][y].figure) {
        array.push({ x, y });
      diagonalDownLeft(x + 1, y + 1, selectedFigur, board,array);
    } else if (board[x][y].figure.color !== selectedFigur.figure.color) {
        array.push({ x, y });
        return array
    } else if (board[x][y].figure.color === selectedFigur.figure.color) {
        return array
    }
  }
  return array
};

export const diagonalDownRight = (
  selectedX: any,
  selectedY: any,
  selectedFigur: any,
  board: any,
  array:any
) => {
  let x = selectedX;
  let y = selectedY;
  if (x === selectedFigur.x && y === selectedFigur.y) {
    diagonalDownRight(x + 1, y - 1, selectedFigur, board,array);
  }
  if (board[x] && board[y]) {
    if (!board[x][y].figure) {
        array.push({ x, y });
      diagonalDownRight(x + 1, y - 1, selectedFigur, board,array);
    } else if (board[x][y].figure.color !== selectedFigur.figure.color) {
        array.push({ x, y });
      return  array
    } else if (board[x][y].figure.color === selectedFigur.figure.color) {
      return array
    }
  }
  return array
};
export const BishopLogic = (selectedFigur: any, board: any) => {
  let array: [{x:number,y:number}]|string[] = [];
   
  
  
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
  let eatKing:{}[]|[{x:number,y:number}]=[]
   
    const  checkToTheKing = (array:any[])=>{
      if (array.length>0) {
       eatKing=array
      }
      
    
    
    
    
    }
    if (upLeft.length>0) {
      checkToTheKing(proverkaKingEat(upLeft,board))

    }
    if (upRight.length>0) {
    checkToTheKing(proverkaKingEat(upRight,board))}
    if (downLeft.length>0) {

    checkToTheKing(proverkaKingEat(downLeft,board))}
    if (downRight.length>0) {

    checkToTheKing(proverkaKingEat(downRight,board))}
  
 
    
  
 
  array.push(...upLeft,...upRight,...downLeft,...downRight)
  return {array,eatKing};
};

 
export const proverkaKingEat = (arr:[{x:number,y:number}]|{}[],board:BoardTS[][])=>{
  let arrKing:[{x:number,y:number}]|{}[]=[]
   arr.forEach((item:any)=>{
if (board[item.x][item.y].figure&&board[item.x][item.y].figure?.name==="King" ) {
  arrKing=arr
}
  })
  return arrKing
}
