import { Dispatch } from "@reduxjs/toolkit";
import { BoardTS, FigureTS } from "../../../Common/types/boardTS";
import { ColorCell } from "../../../Common/types/ColorCellTS";
import {
  activeAvalibelHod,
  eatPeshkaActive,
} from "../../../Redux/Slice/hahskaSlice";

export const proverkaAvalibHodov=(board:BoardTS[][],currentFigure:BoardTS)=>{
  debugger
  let xUp=currentFigure.x+1
  let xDown=currentFigure.x+1
  let yLeft=currentFigure.y-1
  let yRight=currentFigure.y+1
  let arrayHodov=[]
if (board[xUp]&&board[yLeft]&&board[xUp][yLeft].avalibel) {
  arrayHodov.push({x:xUp,y:yLeft})
}
if (board[xUp]&&board[yRight]&&board[xUp][yRight]?.avalibel) {
  arrayHodov.push({x:xUp,y:yRight})
}
if (board[xDown]&&board[yLeft]&&board[xDown][yLeft]?.avalibel) {
  arrayHodov.push({x:xDown,y:yLeft})
}
if (board[xDown]&&board[yRight]&&board[xDown][yRight]?.avalibel) {
  arrayHodov.push({x:xDown,y:yRight})
}
return arrayHodov
}



export const avalibelHod = (
  selectedFigure: BoardTS,
  dispatch: Dispatch,
  board: BoardTS[][],
  singleStroke:boolean
) => {
  let arrayHodov: { x: number; y: number }[] = [];
  let eatHod = false;
  let arrayHods: { x: number; y: number }[] = [];
  const hods = () => {
    let result=false
    if (arrayHodov.length < 1) {
      arrayHods.forEach((item:any) => {
        activeAvalib(item.x, item.y);
      });
    } else {
      arrayHods.forEach((item)=>{
        result=false
       
        arrayHodov.forEach((other)=>{
          if (item.x===other.x&&item.y===other.y) {
            result =true
          }
        })
        if (!result) {
          activeAvalib(item.x, item.y);
        }
      })
    

      
    }
  };

  let activeAvalib = (xHod: number, yHod: number) => {
    console.log("fff", xHod, yHod);

    if (board[xHod] && board[yHod] && board[xHod][yHod]) {
      if (!board[xHod][yHod].figure) {
        dispatch(activeAvalibelHod({ x: xHod, y: yHod }));
      }
      if (!!eatHod) {
        arrayHodov.push({ x: xHod, y: yHod });

      

        let xUp = xHod + 1;
        let xDown = xHod - 1;
        let yLeft = yHod - 1;
        let yRight = yHod + 1;
        eatenFiguries(xUp, xDown, yLeft, yRight);
      }
    }
    return;
  };

  const proverkaFigure = (figura: FigureTS | null, x: number, y: number) => {
    if (figura && figura.color !== selectedFigure.figure?.color) {
      let body = board[x]&&board[y]?board[x][y]:null;
      if (body && !body.figure) {
          if (arrayHodov.length > 0) {
            let notResult = true;
            arrayHodov.forEach((item: any) => {
              if (item.y === y) {
                notResult = false;
              }
            });
            if (!!notResult) {
              return true;
            }
          } else {
            return true;
          }
      }
    }
    return false;
  };

  const eatenFiguries = (
    figureHodUp: number,
    figureHodDown: number,
    figureHodLeft: number,
    figureHodRight: number
  ) => {
    let figuraRightBlack =
      board[figureHodUp] &&
      board[figureHodLeft] &&
      board[figureHodUp][figureHodLeft].figure;
    let figuraLeftBlack =
      board[figureHodUp] &&
      board[figureHodRight] &&
      board[figureHodUp][figureHodRight].figure;
    let figuraLeftWhite =
      board[figureHodDown] &&
      board[figureHodLeft] &&
      board[figureHodDown][figureHodLeft].figure;
    let figuraRightWhite =
      board[figureHodDown] &&
      board[figureHodRight] &&
      board[figureHodDown][figureHodRight].figure;

    if (
      !!proverkaFigure(figuraRightBlack, figureHodUp + 1, figureHodLeft - 1)
    ) {
      arrayHods.push({ x: figureHodUp + 1, y: figureHodLeft - 1 });
      eatHod = true;
      dispatch(eatPeshkaActive({ x: figureHodUp, y: figureHodLeft }));
    }
    if (
      !!proverkaFigure(figuraLeftBlack, figureHodUp + 1, figureHodRight + 1)
    ) {
      arrayHods.push({ x: figureHodUp + 1, y: figureHodRight + 1 });
      eatHod = true;
      dispatch(eatPeshkaActive({ x: figureHodUp, y: figureHodRight }));
    }
    if (
      !!proverkaFigure(figuraLeftWhite, figureHodDown - 1, figureHodLeft - 1)
    ) {
      eatHod = true;
      arrayHods.push({ x: figureHodDown - 1, y: figureHodLeft - 1 });

      dispatch(eatPeshkaActive({ x: figureHodDown, y: figureHodLeft }));
    }
    if (
      !!proverkaFigure(figuraRightWhite, figureHodDown - 1, figureHodRight + 1)
    ) {
      eatHod = true;
      arrayHods.push({ x: figureHodDown - 1, y: figureHodRight + 1 });
      debugger;
      dispatch(eatPeshkaActive({ x: figureHodDown, y: figureHodRight }));
    }

    hods();
  };

  if (selectedFigure.figure) {
    arrayHodov = [];
    let xCell = selectedFigure.x + 1;
    let yCell = selectedFigure.y + 1;
    let aCell = selectedFigure.x - 1;
    let bCell = selectedFigure.y - 1;
    if (selectedFigure.figure?.color === ColorCell.BLACK) {
      if (!!singleStroke) {
        activeAvalib(xCell, yCell);
        activeAvalib(xCell, bCell);
      }
     
      eatenFiguries(xCell, aCell, bCell, yCell);
    } else if (selectedFigure.figure?.color === ColorCell.WHITE) {
      if (!!singleStroke) {
      activeAvalib(aCell, yCell);
      activeAvalib(aCell, bCell);
      }
      eatenFiguries(xCell, aCell, bCell, yCell);

    }
  }
  return arrayHods
};
