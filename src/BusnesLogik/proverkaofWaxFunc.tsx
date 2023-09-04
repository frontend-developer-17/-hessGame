import { addWalkFigure, eatKing, king } from "../Redux/Slice/CellSlice";
import { BishopLogic } from "./BishopLogic";
import { RookLogis } from "./RookLogis";
import { QueenLogic } from "./QueenLogic";
import { PawnAvalib } from "./PawnAvalib";
import { KnightAvalib } from "./KnightLogic";
import { KingLogic } from "./KingLogic";
import { proverkaMat } from "./proverkaActive";

export const hod = (board: any, index: number, j: number) => {
  if (
    board[index][j].figure &&
    board[index][j].figure.name === "Bishop"
  ) {
    let selectedFigur = board[index][j];

    const resultHogov = BishopLogic(selectedFigur, (board = board));
    let result = resultHogov.array;
    let eatKing = resultHogov.eatKing;
    return { result, eatKing, selectedFigur };
  }
  if (
    board[index][j].figure &&
    board[index][j].figure.name === "Rook"
  ) {
    let selectedFigur = board[index][j];
    let resultHogov = RookLogis(selectedFigur, board);
    let result = resultHogov.array;
    let eatKing = resultHogov.eatKing;

    return { result, eatKing, selectedFigur };
  }
  if (
    board[index][j].figure &&
    board[index][j].figure.name === "Queen"
  ) {
    let selectedFigur = board[index][j];
    let resultHogov = QueenLogic(selectedFigur, board);
    let result = resultHogov.array;
    let eatKing = resultHogov.eatKing;
    return { result, eatKing, selectedFigur };
  }
  if (
    board[index][j].figure &&
    board[index][j].figure.name === "Pawn"
  ) {
    let selectedFigur = board[index][j];
    let result = PawnAvalib(selectedFigur, board);
    return { result, selectedFigur };
  }
  if (
    board[index][j].figure &&
    board[index][j].figure.name === "Knight"
  ) {
    let selectedFigur = board[index][j];
    let result = KnightAvalib(selectedFigur, board);
    return { result, selectedFigur };
  }
  if (
    board[index][j].figure &&
    board[index][j].figure.name === "King"
  ) {
    let selectedFigur = board[index][j];
    let result = KingLogic(selectedFigur, board);
    return { result, selectedFigur };
  }
};

export const activeKingFigure = (
  activation: boolean,
  dispatch: any,
  board: any,
  setEatKingMove: any,
  setMat: any
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
            setEatKingMove("");
            setMat("");
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
  setEatKingMove: any,
  setMat: any
) => {
  debugger;
  let result: any;
  let selectedFigur: any;
  let eatKingHod: any = [];
  let activation = false;
  let activeKingHod: any = [];
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
        let kingHod: any = hod(board, index, j);
        if (kingHod && kingHod.result.length > 0) {
          debugger
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
                    setEatKingMove,
                    setMat
                  );
                
              } else {
                debugger;


                eatKingFigure.push(result);
                dispatch(eatKing({ x, y }));
                setEatKingMove(board[x][y].figure);
              }
            }
            debugger;
            let proverkaOfColor = board[x][y].figure.color;
            if (eatKingHod&&eatKingHod.length>0) {
              let mat = proverkaMat(
                board,
                activeKingHod,
                proverkaOfColor,
                currentKingCellFigure,
                eatKingHod
              );
              debugger;
              if (mat) {
                debugger;
                setMat(mat);
              }
            }
           
          
          }
        });
      }
    }
  }
  debugger;

  activeKingFigure(activation, dispatch, board, setEatKingMove, setMat);
};
