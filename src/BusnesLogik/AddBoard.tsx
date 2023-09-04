
import { addCell } from "../Redux/Slice/CellSlice";
import { Bishop } from "../Figure/bishop";
import { ColorCell } from "../types/CellTS";
import { Rook } from "../Figure/rook";
import { Knight } from "../Figure/knight";
import { King } from "../Figure/king";
import { Queen } from "../Figure/queen";
import { Pawn } from "../Figure/pawn";

export const  addBoard = (dispatch:any) => {
  let cells: any = [];
 
 
 
  const resultBoard = (color: string, x: number, y: number, figure: string) => {
    return {
      color,
      x,
      y,
      figure,
      avalibel: false,
      count: false,
    };
  };

  const addFigure:any = (x: number, y: number) => {
    if (x === 0 && y === 2) {
      return Bishop(ColorCell.BLACK);
    }

    if (x === 7 && y === 2) {
      return Bishop(ColorCell.WHITE);
    }

    if (x === 0 && y === 0) {
      return Rook(ColorCell.BLACK);
    }
    if (x === 7 && y === 0) {
      return Rook(ColorCell.WHITE);
    }

    if (x === 0 && y === 1) {
      return Knight(ColorCell.BLACK);
    }
    if (x === 7 && y === 1) {
      return Knight(ColorCell.WHITE);
    }
    if (x === 7 && y === 1) {
      return Knight(ColorCell.WHITE);
    }
    if (x === 0 && y === 4) {
      return King(ColorCell.BLACK);
    }
    if (x === 7 && y === 4) {
      return King(ColorCell.WHITE);
    }
    if (x === 0 && y === 3) {
      return Queen(ColorCell.BLACK);
    }
    if (x === 7 && y === 3) {
      return Queen(ColorCell.WHITE);
    }
    if (x === 0 && y === 5) {
      return Bishop(ColorCell.BLACK);
    }
    if (x === 7 && y === 5) {
      return Bishop(ColorCell.WHITE);
    }
    if (x === 0 && y === 6) {
      return Knight(ColorCell.BLACK);
    }
    if (x === 7 && y === 6) {
      return Knight(ColorCell.WHITE);
    }
    if (x === 0 && y === 7) {
      return Rook(ColorCell.BLACK);
    }
    if (x === 7 && y === 7) {
      return Rook(ColorCell.WHITE);
    }
    if (x === 1) {
      return Pawn(ColorCell.BLACK);
    }
    if (x === 6) {
      return Pawn(ColorCell.WHITE);
    }
  };

 
    for (let i = 0; i < 8; i++) {
      cells[i] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          cells[i].push(resultBoard(ColorCell.BLACK, i, j, addFigure(i, j)));
        } else {
        
          cells[i].push(resultBoard(ColorCell.WHITE, i, j, addFigure(i, j)));
        }
      }
    }

    dispatch(addCell(cells));
  
  
    
   
  

}
