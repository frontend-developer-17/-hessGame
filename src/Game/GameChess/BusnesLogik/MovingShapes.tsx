import React from "react";
import { HodPodWax } from "./HodPodWax";
import {
  addWalkFigure,
  disableAvalibel,
  moveFigure,
} from "../../../Redux/Slice/CellSlice";
import {
  addBlackFigure,
  addCellFigure,
  addNewFigure,
  addWhiteFigure,
} from "../../../Redux/Slice/EatenfiguresSlice";
import { isActive } from "./ActiveAvalibel";
import { Bishop } from "../Figure/bishop";
import { Knight } from "../Figure/knight";
import { Queen } from "../Figure/queen";
import { Rook } from "../Figure/rook";
import { ColorCell } from "../../../Common/types/ColorCellTS";
import { BoardTS } from "../../../Common/types/boardTS";
import { AppDispatch } from "../../../Redux/store";
export interface propsHilightFunctional {
  dispatch: AppDispatch;
  board: BoardTS[][];
  selectedFigur: BoardTS;
  setCurrentFigure: () => void;
  currentFigure: BoardTS;
  setCurrentFigurMove: any;
  setReturnFigure: any;
  walkingFigure: any;
  setRestartBoard: any;
  setRokirovka: any;
  checkmate: any;
}
export const MovingShapes = (
  dispatch: AppDispatch,
  board: BoardTS[][],
  selectedFigur: BoardTS,
  setCurrentFigure: (selectedFigur: BoardTS) => void,
  currentFigure: BoardTS,
  setCurrentFigurMove: (selectedFigur: BoardTS) => void,
  setReturnFigure: (a: boolean) => void,
  walkingFigure: string,
  setRestartBoard: (a: boolean) => void,
  setRokirovka: (a: boolean) => void,
  checkmate: string
) => {
  debugger;
  if (checkmate === "") {
    if (!!selectedFigur.figure) {
      if (selectedFigur.figure.color === walkingFigure) {
        setCurrentFigure(selectedFigur);
      }
    }

    if (
      !!currentFigure &&
      selectedFigur?.figure?.color !== currentFigure?.figure?.color
    ) {
      if (!!selectedFigur.avalibel) {
        debugger;
        let activeHod = HodPodWax(board, currentFigure, selectedFigur);
        debugger;
        if (activeHod === true) {
          debugger;
          setRestartBoard(true);
          debugger;
          if (selectedFigur.figure) {
            if (selectedFigur.figure.name !== "King") {
              dispatch(moveFigure({ currentFigure, selectedFigur }));
              setCurrentFigurMove(selectedFigur);
              if (selectedFigur.figure.color === "white") {
                dispatch(addWhiteFigure(selectedFigur.figure));
              } else {
                dispatch(addBlackFigure(selectedFigur.figure));
              }
              debugger;
              let color =
                currentFigure?.figure?.color === "white" ? "black" : "white";
              dispatch(addWalkFigure(color));
            }
          } else {
            debugger;
            if (
              currentFigure?.figure?.name === "King" &&
              currentFigure.count == false
            ) {
              if (currentFigure.figure.color === "black") {
                if (selectedFigur.y === 6 && selectedFigur.x === 0) {
                  debugger;
                  let currentFigure = board[0][7];
                  let selectedFigur = board[0][5];
                  dispatch(moveFigure({ currentFigure, selectedFigur }));

                  setRokirovka(true);
                }
                if (selectedFigur.y === 2 && selectedFigur.x === 0) {
                  let currentFigure = board[0][0];
                  let selectedFigur = board[0][3];
                  dispatch(moveFigure({ currentFigure, selectedFigur }));

                  setRokirovka(true);
                }
              } else {
                if (selectedFigur.y === 6 && selectedFigur.x === 7) {
                  debugger;
                  let currentFigure = board[7][7];
                  let selectedFigur = board[7][5];
                  dispatch(moveFigure({ currentFigure, selectedFigur }));

                  setRokirovka(true);
                }
                if (selectedFigur.y === 2 && selectedFigur.x === 7) {
                  let currentFigure = board[7][0];
                  let selectedFigur = board[7][3];
                  dispatch(moveFigure({ currentFigure, selectedFigur }));

                  setRokirovka(true);
                }
              }
            }

            dispatch(moveFigure({ currentFigure, selectedFigur }));
            setCurrentFigurMove(selectedFigur);

            let color =
              currentFigure?.figure?.color === "white" ? "black" : "white";
            dispatch(addWalkFigure(color));
          }
          if (currentFigure.figure?.name === "Pawn") {
            if (currentFigure.figure.color === "white") {
              debugger;
              if (selectedFigur.x == 0) {
                setReturnFigure(true);

                let arr = [];

                arr.push(Bishop(ColorCell.WHITE));
                arr.push(Knight(ColorCell.WHITE));
                arr.push(Queen(ColorCell.WHITE));
                arr.push(Rook(ColorCell.WHITE));

                let x = selectedFigur.x;
                let y = selectedFigur.y;
                dispatch(addNewFigure(arr));
                dispatch(addCellFigure({ x: x, y: y }));
              }
            } else if (currentFigure.figure.color === "black") {
              if (selectedFigur.x == 7) {
                setReturnFigure(true);

                let arr = [];

                arr.push(Bishop(ColorCell.BLACK));
                arr.push(Knight(ColorCell.BLACK));
                arr.push(Queen(ColorCell.BLACK));
                arr.push(Rook(ColorCell.BLACK));
                let x = selectedFigur.x;
                let y = selectedFigur.y;
                dispatch(addNewFigure(arr));
                dispatch(addCellFigure({ x: x, y: y }));
              }
            }
          }
        }
      }
    }

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        let target = board[i][j];

        if (!!target.avalibel) {
          dispatch(disableAvalibel({ i, j }));
        }
      }
    }
    if (!!selectedFigur.figure && !selectedFigur.avalibel) {
      debugger;
      if (walkingFigure === selectedFigur.figure.color) {
        debugger;
        isActive(selectedFigur, dispatch, board);
      }
    }
  }
};
