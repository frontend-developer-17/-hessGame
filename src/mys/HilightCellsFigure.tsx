import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { disableAvalibel, moveFigure } from "../Redux/Slice/CellSlice";
//import { ActiveAvalibelFigure } from "./ActiveAvalibel";
import { HodPodWax } from "../BusnesLogik/HodPodWax";
import { addBlackFigure, addCellFigure, addNewFigure, addWhiteFigure } from "../Redux/Slice/EatenfiguresSlice";
import { RootState } from "../Redux/store";
import { Bishop } from "../Figure/bishop";
import { ColorCell } from "../types/CellTS";
import { Knight } from "../Figure/knight";
import { Queen } from "../Figure/queen";
import { Rook } from "../Figure/rook";

function HilightCellsFigure(cellColor: any) {
  //const [isActive] = ActiveAvalibelFigure(cellColor);
 
  const [selected, setSelected] = useState<any>();
  const [show, setShow] = useState(false);
  const [move, setMove] = useState<any>("white");
  const dispatch = useDispatch();
  const [currentFigurMove, setCurrentFigurMove] = useState<any>();
  function hilight(selectedFigur: any) {
    if (!!selectedFigur.figure) {
      setSelected(selectedFigur);
    }

    if (!!selected && selectedFigur?.figure?.color !== selected?.figure.color) {
      if (!!selectedFigur.avalibel) {
        debugger;
        let activeHod = HodPodWax(cellColor, selected, selectedFigur);
        debugger;
        if (activeHod === true) {
          debugger;

          if (selectedFigur.figure) {
            if (selectedFigur.figure.name !== "King") {
              let currentFigure = selectedFigur.figure;
              dispatch(moveFigure({ selected, selectedFigur }));
              setCurrentFigurMove(selectedFigur);
             if (selectedFigur.figure.color === "white") {
              dispatch(addWhiteFigure(selectedFigur.figure))
             
               } else {
                 dispatch(addBlackFigure(selectedFigur.figure))
               }
              debugger;
              let color = selected.figure.color === "white" ? "black" : "white";
              setMove(color);
            }
          } else {
            dispatch(moveFigure({ selected, selectedFigur }));
            setCurrentFigurMove(selectedFigur);

            let color = selected.figure.color === "white" ? "black" : "white";
            setMove(color);
          }

          if (selected.figure.name==="Pawn"&& selected.figure.color==="white" ) {
            debugger
            if (selectedFigur.x==0) {
              setShow(true)

              let arr = []

              arr.push(Bishop(ColorCell.WHITE))
              arr.push(Knight(ColorCell.WHITE))
              arr.push(Queen(ColorCell.WHITE))
              arr.push(Rook(ColorCell.WHITE))

              let x=selectedFigur.x
              let y=selectedFigur.y
            dispatch(addNewFigure(arr))
            dispatch(addCellFigure({x:x,y:y}))

            }
          }
          if (selected.figure.name==="Pawn"&& selected.figure.color==="black" ) {
            debugger
            if (selectedFigur.x==7) {
              setShow(true)

              let arr = []

              arr.push(Bishop(ColorCell.BLACK))
              arr.push(Knight(ColorCell.BLACK))
              arr.push(Queen(ColorCell.BLACK))
              arr.push(Rook(ColorCell.BLACK))
              let x=selectedFigur.x
              let y=selectedFigur.y
           dispatch(addNewFigure(arr))
           dispatch(addCellFigure({x:x,y:y}))
            }
          }
        }
      }
    }

    for (let i = 0; i < cellColor.length; i++) {
      for (let j = 0; j < cellColor.length; j++) {
        let target = cellColor[i][j];

        if (!!target.avalibel) {
          dispatch(disableAvalibel({ i, j }));
        }
      }
    }
    if (!!selectedFigur.figure && !selectedFigur.avalibel) {
      if (move === selectedFigur.figure.color) {
      
     //   isActive(selectedFigur);
      }
    }
    return
  }

  return [
    hilight,
    selected,
    move,
    currentFigurMove,
    setMove,
    show,
    setShow

   
   
  ];
}

export { HilightCellsFigure };
