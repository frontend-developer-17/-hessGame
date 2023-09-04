import React from "react";

let arrayUpLeft:any=[]
let arrayUpRight:any=[]
let arrayDownLeft:any=[]
let arrayDownRight:any=[]

export const diagonalUpLeft = (
  selectedX: number,
  selectedY: number,
  selectedFigur: any,
  board: any,
  array:any
) => {
  let x = selectedX;
  let y = selectedY;
  if (x === selectedFigur.x && y === selectedFigur.y) {
    diagonalUpLeft(x - 1, y - 1, selectedFigur, board,array);
  }
  if (board[x] && board[y]) {
    if (!board[x][y].figure) {
      array.push({ x, y });
      diagonalUpLeft(x - 1, y - 1, selectedFigur, board,array);
    } else if (board[x][y].figure.color !== selectedFigur.figure.color) {
      array.push({ x, y });
      return array
    } else if (board[x][y].figure.color === selectedFigur.figure.color) {
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
  return {array,eatKing};
};


export const proverkaKingEat = (arr:[],board:any)=>{
  let arrKing:any=[]
  arr.forEach((item:any)=>{
if (board[item.x][item.y].figure&&board[item.x][item.y].figure.name==="King" ) {
  arrKing=arr

}
  })
  return arrKing
}
