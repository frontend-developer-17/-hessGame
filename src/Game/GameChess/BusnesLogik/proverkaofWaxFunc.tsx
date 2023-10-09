import { addWalkFigure, eatKing, king } from "../../../Redux/Slice/CellSlice";
import { BishopLogic } from "../FigureHod/BishopLogic";
import { RookLogis } from "../FigureHod/RookLogis";
import { QueenLogic } from "../FigureHod/QueenLogic";
import { PawnAvalib } from "../FigureHod/PawnLogic";
import { KnightAvalib } from "../FigureHod/KnightLogic";
import { KingLogic } from "../FigureHod/KingLogic";
import { proverkaMat } from "./proverkaActive";
import { BoardTS } from "../../../Common/types/boardTS";

export const hod = (board: BoardTS[][], index: number, j: number) => {
const returnHodov = (resultHogov:{array:{x:number,y:number}[]|any[],eatKing:{x:number,y:number}[]|{}[]},selectedFigur:BoardTS)=>{
  let result =resultHogov.array
   let eatKing = resultHogov.eatKing;
 return { result, eatKing, selectedFigur };}

 
 
 
 
 let figureName= board[index][j].figure?.name
if (figureName) {
  if (figureName === "Bishop" ) {
    let selectedFigur = board[index][j];
     const resultHogov = BishopLogic(selectedFigur, board);
    return returnHodov(resultHogov,selectedFigur)
  }
  if (
    figureName === "Rook"
  ) {
    let selectedFigur = board[index][j];
    let resultHogov = RookLogis(selectedFigur, board);
    return returnHodov(resultHogov,selectedFigur)

  }
  if (
    figureName === "Queen"
  ) {
    let selectedFigur = board[index][j];
    let resultHogov = QueenLogic(selectedFigur, board);
    debugger
    return returnHodov(resultHogov,selectedFigur)

  }
  if (
    figureName === "Pawn"
  ) {
    let selectedFigur = board[index][j];
    let result:{x:number,y:number}[] = PawnAvalib(selectedFigur, board);
    return { result, selectedFigur };
  }
  if (
    figureName=== "Knight"
  ) {
    let selectedFigur = board[index][j];
    let result:{x:number,y:number}[] = KnightAvalib(selectedFigur, board);
    return { result, selectedFigur };
  }
  if (
    figureName=== "King"
  ) {
    let selectedFigur = board[index][j];
    let result:{x:number,y:number}[] = KingLogic(selectedFigur, board);
    return { result, selectedFigur };
  }
}
 
};

export const activeKingFigure = (
  activation: boolean,
  dispatch: any,
  board: any,
  setCheck: any,
  setCheckmate: any
) => {
  for (let index = 0; index < board.length; index++) {
    for (let j = 0; j < board.length; j++) {
      if (
        board[index][j].figure &&
        board[index][j].figure.name === "King"
      ) {
        debugger;
        if (board[index][j].figure.activeEat === true) {
          debugger;

          if (!activation) {
            debugger;
            dispatch(king({ x: index, y: j }));
            setCheck("");
            setCheckmate("");
          }
        }
      }
    }
  }
};

export const proverkaWax = (
  board: any,
  currentFigurMove: any,
  dispatch: any,
  setCheck: any,
  setCheckmate: any
) => {
  debugger;
  let result: any;
  let selectedFigur: any;
  let eatKingHod: any = [];
  let activation = false;
  let activeKingHod: [] = [];
  let currentKingCellFigure: any;
  let eatKingFigure: any = [];
  for (let index = 0; index < board.length; index++) {
    for (let j = 0; j < board.length; j++) {
      let aaa: any = hod(board, index, j);
      if (
        board[index][j].figure &&
        board[index][j].figure.name === "King"
      ) {
        debugger
        let kingHod = hod(board, index, j);

        if (kingHod && kingHod.result.length > 0) {
          debugger
          //@ts-ignore
          activeKingHod.push(...kingHod.result);
          currentKingCellFigure = board[index][j];
        }
      }

      if (aaa) {
        result = aaa.result;
        selectedFigur = aaa.selectedFigur;
        let xFigure = selectedFigur.x;
        let yFigure = selectedFigur.y;
        eatKingHod = aaa.eatKing;
        if (eatKingHod) {
          eatKingHod.push({ x: xFigure, y: yFigure });
        }
      }
      if (result) {
        result.forEach((item: any) => {
          let x = item.x;
          let y = item.y;
          if (
            board[x][y].figure &&
            board[x][y].figure.name === "King"
          ) {
            debugger;
            if (selectedFigur.figure.color !== board[x][y].figure.color) {
              activation = true;
             
                let currentFigure =
                  board[currentFigurMove.x][currentFigurMove.y];
                if (
                  board[x][y].figure &&
                  board[x][y].figure.color === currentFigure.figure.color
                ) {
                  debugger;

                 // setMove(currentFigure.figure.color);
                 dispatch(addWalkFigure(currentFigure.figure.color))

                  activeKingFigure(
                    activation,
                    dispatch,
                    board,
                    setCheck,
                    setCheckmate
                  );
                
              } else {
                debugger;


                eatKingFigure.push(result);
                dispatch(eatKing({ x, y }));
                setCheck(board[x][y].figure);
              }
            }
            debugger;
            let proverkaOfColor = board[x][y].figure.color;
            if (eatKingHod&&eatKingHod.length>0) {
              let checkmate = proverkaMat(
                board,
                activeKingHod,
                proverkaOfColor,
                currentKingCellFigure,
                eatKingHod
              );
              debugger;
              if (checkmate) {
                debugger;
                setCheckmate(checkmate);
              }
            }
           
          
          }
        });
      }
    }
  }
  debugger;

  activeKingFigure(activation, dispatch, board, setCheck, setCheckmate);
};
