
import { addCell } from "../../Redux/Slice/CellSlice";
import { Bishop } from "../GameChess/Figure/bishop";
import { Rook } from "../GameChess/Figure/rook";
import { Knight } from "../GameChess/Figure/knight";
import { King } from "../GameChess/Figure/king";
import { Queen } from "../GameChess/Figure/queen";
import { Pawn } from "../GameChess/Figure/pawn";
import { ColorCell } from "../../Common/types/ColorCellTS";
import { Peshka } from "../GameHahski/Figure.tsx";

 const  useAddBoard = (game:string) => {
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
    if (game==="chess") {
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
    }else if(game==='hahska'){
      if(x===0||x===2){

       if (y % 2===0) {
        return Peshka(ColorCell.BLACK)

       } }
if (x===1) {
  if (y % 2!==0) {
    return Peshka(ColorCell.BLACK)

   }
}

      if(x===5||x===7){
        if (y % 2!==0) {
 return Peshka(ColorCell.WHITE)
          }
  }if(x===6){
    if (y % 2===0) {
      return Peshka(ColorCell.WHITE)
               }
  }
    }
   
  };

 const addBoard = ()=>{
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
 }
   

  
  return[addBoard,cells]
    
   
  

}
export default useAddBoard
