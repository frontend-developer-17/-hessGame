import { Dispatch } from "@reduxjs/toolkit";
import { BoardTS } from "../../../Common/types/boardTS";
import { avalibelHod, proverkaAvalibHodov } from "./AvalibelHod";
import {
  activeAvalibelHod,
  addUnFinishedMove,
  addWalkPeshka,
  disableAvalibelHod,
  eatPeshka,
  eatPeshkaDisable,
  movePeshka,
} from "../../../Redux/Slice/hahskaSlice";
import { ColorCell } from "../../../Common/types/ColorCellTS";

export const movingFigure = (
  board: BoardTS[][],
  currentFigure: BoardTS,
  setCurrentFigure: any,
  selectedFigur: BoardTS,
  walkingFigure: string,
  dispatch: Dispatch,
  unFinishedMove: boolean
) => {
  let isEatenFigure = false;
  debugger;
  let isSelected = true;
  let canFindFigure = true;

  let arrayCurrentFigure = [];
  if (!!selectedFigur.figure) {
    if (selectedFigur.figure.color === walkingFigure) {
      if (!!isEatenFigure) {
        if (
          !currentFigure ||
          currentFigure.x !== selectedFigur.x ||
          currentFigure.y !== selectedFigur.y
        ) {
          for (let index = 0; index < board.length; index++) {
            for (let j = 0; j < board.length; j++) {
              let target = board[index][j];
              if (target.figure?.color === walkingFigure) {
                let result = avalibelHod(target, dispatch, board, false);
                if (result.length > 0) {
                  debugger;
                  isSelected = false;
                  //  dispatch(addUnFinishedMove(true));

                  arrayCurrentFigure.push(target);
                }
              }
            }
          }
        }else{
          isSelected=false
        }

        if (arrayCurrentFigure.length === 0) {
          setCurrentFigure(selectedFigur);
          dispatch(addUnFinishedMove(false));
        } else if (arrayCurrentFigure.length === 1) {
          arrayCurrentFigure.forEach((item) => {
            setCurrentFigure(item);
          });
        } else {
          arrayCurrentFigure.forEach((item) => {
            if (selectedFigur.x === item.x && selectedFigur.y === item.y) {
              setCurrentFigure(selectedFigur);
              debugger;
              isSelected = true;
              canFindFigure = false;
            }
          });
          if (!isSelected) {
            setCurrentFigure(null);
          }
        }
      } else if (!unFinishedMove) {
        setCurrentFigure(selectedFigur);
      }

      debugger;
    } else {
      isSelected = false;
    }
  }
  debugger;
  if (!unFinishedMove && !!isSelected) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        let target = board[i][j];
        if (!!target.avalibel) {
          debugger;
          dispatch(disableAvalibelHod({ i, j }));
        }
        if (!!target.figure?.activeEatPeshka) {
          debugger;
          dispatch(eatPeshkaDisable({ x: i, y: j }));
        }
      }
    }
  }
  debugger;
  if (!!selectedFigur.figure && !selectedFigur.avalibel) {
    debugger;
    if (
      walkingFigure === selectedFigur.figure.color &&
      !unFinishedMove &&
      isSelected
    ) {
      debugger;
      if (selectedFigur.figure.name==="Peshka") {
        if (!!canFindFigure) {
        avalibelHod(selectedFigur, dispatch, board, true);
      } else {
        avalibelHod(selectedFigur, dispatch, board, false);
      }
      }else if(selectedFigur.figure.name==="Damka"){
//дамки ход
      }
      
    }
  }
  const removePeshka = () => {
    let figura = currentFigure.figure;
    let posit =
      currentFigure.x < selectedFigur.x
        ? selectedFigur.y < currentFigure.y
          ? "right"
          : "left"
        : selectedFigur.y < currentFigure.y
        ? "left"
        : "right";

    if (figura?.name === "Peshka") {
      let color = currentFigure?.figure?.color === "white" ? "black" : "white";
      let currentFigureOfCell = structuredClone(selectedFigur);
      currentFigureOfCell.figure = currentFigure.figure;
      ///let resultHodov = proverkaAvalibHodov(board, selectedFigur);
      debugger;
      if (
        currentFigure.x + 1 < selectedFigur.x ||
        currentFigure.x - 1 > selectedFigur.x
      ) {
        let result = avalibelHod(currentFigureOfCell, dispatch, board, false);
        if (result.length > 0) {
          setCurrentFigure(currentFigureOfCell);
          dispatch(addUnFinishedMove(true));
        } else {
          dispatch(addUnFinishedMove(false));
          dispatch(addWalkPeshka(color));
        }
      } else {
        dispatch(addUnFinishedMove(false));
        dispatch(addWalkPeshka(color));
      }

      if (selectedFigur.avalibel) {
        dispatch(
          disableAvalibelHod({ i: selectedFigur.x, j: selectedFigur.y })
        );
      }
      if (currentFigure.x < selectedFigur.x) {
        if (currentFigure.x + 1 < selectedFigur.x) {
          if (posit === "left") {
            debugger;
            dispatch(
              eatPeshka({ x: currentFigure.x + 1, y: currentFigure.y + 1 })
            );
          } else if (posit === "right") {
            dispatch(
              eatPeshka({ x: currentFigure.x + 1, y: currentFigure.y - 1 })
            );
          }
        }
      } else if (currentFigure.x > selectedFigur.x) {
        debugger;
        if (currentFigure.x - 1 > selectedFigur.x) {
          if (posit === "left") {
            dispatch(
              eatPeshka({ x: currentFigure.x - 1, y: currentFigure.y - 1 })
            );
          } else if (posit === "right") {
            dispatch(
              eatPeshka({ x: currentFigure.x - 1, y: currentFigure.y + 1 })
            );
          }
        }
      }
    }
  };
  debugger;

  if (!!currentFigure && !selectedFigur?.figure) {
    debugger;
    if (!!selectedFigur.avalibel) {
      debugger;
      if (currentFigure.figure?.color === walkingFigure) {
        if (selectedFigur.x===0||selectedFigur.x===7) {
          debugger
          let figureDamka=structuredClone(currentFigure)
          if ( figureDamka.figure!==null) {
            figureDamka.figure.name = "Damka"
  
          }
          if (currentFigure.figure.color===ColorCell.WHITE&&selectedFigur.x===0) {
            
  
          dispatch(movePeshka({ currentFigure:figureDamka, selectedFigur }));
          }else if(currentFigure.figure.color===ColorCell.BLACK&&selectedFigur.x===7){
            dispatch(movePeshka({ currentFigure:figureDamka, selectedFigur }));
  
          }
          removePeshka();

        }else{
          dispatch(movePeshka({ currentFigure, selectedFigur }));

          removePeshka();
        }
       
        
      }
    }
  }
};
