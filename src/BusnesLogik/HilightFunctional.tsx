import React from "react";
import { HodPodWax } from "./HodPodWax";
import { addWalkFigure, disableAvalibel, moveFigure } from "../Redux/Slice/CellSlice";
import {
  addBlackFigure,
  addCellFigure,
  addNewFigure,
  addWhiteFigure,
} from "../Redux/Slice/EatenfiguresSlice";
import { isActive } from "./ActiveAvalibel";
import { Bishop } from "../Figure/bishop";
import { ColorCell } from "../types/CellTS";
import { Knight } from "../Figure/knight";
import { Queen } from "../Figure/queen";
import { Rook } from "../Figure/rook";

export const HilightFunctional = (
  dispatch: any,
  board: any,
  selectedFigur: any,
  setSelected: any,
  selected: any,
  setCurrentFigurMove: any,
  setShow: any,
  walkingFigure: any,
  setRestartBoard: any,
  setRokirovka: any,
  mat:any
) => {
  debugger;
  if (mat=="") {
    if (!!selectedFigur.figure) {
      if (selectedFigur.figure.color==walkingFigure) {
        setSelected(selectedFigur);
  
      }
  
    }
  
    if (!!selected && selectedFigur?.figure?.color !== selected?.figure.color) {
      if (!!selectedFigur.avalibel) {
        debugger;
        let activeHod = HodPodWax(board, selected, selectedFigur);
        debugger;
        if (activeHod === true) {
          debugger;
          setRestartBoard(true);
          debugger;
          if (selectedFigur.figure) {
            if (selectedFigur.figure.name !== "King") {
              let currentFigure = selectedFigur.figure;
              dispatch(moveFigure({ selected, selectedFigur }));
              setCurrentFigurMove(selectedFigur);
              if (selectedFigur.figure.color === "white") {
                dispatch(addWhiteFigure(selectedFigur.figure));
              } else {
                dispatch(addBlackFigure(selectedFigur.figure));
              }
              debugger;
              let color = selected.figure.color === "white" ? "black" : "white";
              dispatch(addWalkFigure(color))
             // setMove(color);
            }
          } else {
            debugger;
            if (
              selected.figure.name == "King" &&
              selected.count == false
            ) {
              if (selected.figure.color == "black") {
                if (selectedFigur.y == 6 && selectedFigur.x == 0) {
                  debugger;
                  let selected = board[0][7];
                  let selectedFigur = board[0][5];
                  dispatch(moveFigure({ selected, selectedFigur }));
  
                  setRokirovka(true);
                }
                if (selectedFigur.y == 2 && selectedFigur.x == 0) {
                  let selected = board[0][0];
                  let selectedFigur = board[0][3];
                  dispatch(moveFigure({ selected, selectedFigur }));
  
                  setRokirovka(true);
                }
              } else {
                if (selectedFigur.y == 6 && selectedFigur.x == 7) {
                  debugger;
                  let selected = board[7][7];
                  let selectedFigur = board[7][5];
                  dispatch(moveFigure({ selected, selectedFigur }));
  
                  setRokirovka(true);
                }
                if (selectedFigur.y == 2 && selectedFigur.x == 7) {
                  let selected = board[7][0];
                  let selectedFigur = board[7][3];
                  dispatch(moveFigure({ selected, selectedFigur }));
  
                  setRokirovka(true);
                }
              }
            }
  
            dispatch(moveFigure({ selected, selectedFigur }));
            setCurrentFigurMove(selectedFigur);
  
            let color = selected.figure.color === "white" ? "black" : "white";
            dispatch(addWalkFigure(color))
  
           // setMove(color);
          }
  
          if (
            selected.figure.name === "Pawn" &&
            selected.figure.color === "white"
          ) {
            debugger;
            if (selectedFigur.x == 0) {
              setShow(true);
  
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
          }
          if (
            selected.figure.name === "Pawn" &&
            selected.figure.color === "black"
          ) {
            debugger;
            if (selectedFigur.x == 7) {
              setShow(true);
  
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
  
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        let target = board[i][j];
  
        if (!!target.avalibel) {
          dispatch(disableAvalibel({ i, j }));
        }
      }
    }
    if (!!selectedFigur.figure && !selectedFigur.avalibel) {
      debugger
      if (walkingFigure === selectedFigur.figure.color) {
        debugger;
        isActive(selectedFigur, dispatch, board);
      }
    }
  }
  
};
