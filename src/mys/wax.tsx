// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import {
//   eatKing,
//   king,
 
// } from "../Redux/Slice/CellSlice";
// import { BishopLogic } from "../BusnesLogik/FigureHod/BishopLogic";
// import { RookLogis } from "../BusnesLogik/FigureHod/RookLogis";
// import { QueenLogic } from "../BusnesLogik/FigureHod/QueenLogic";
// import { PawnAvalib } from "../BusnesLogik/FigureHod/PawnLogic";
// import { KnightAvalib } from "../BusnesLogik/FigureHod/KnightLogic";
// import { KingLogic } from "../BusnesLogik/FigureHod/KingLogic";

// export const hod = (cellColor: any, index: number, j: number) => {
//   if (
//     cellColor[index][j].figure &&
//     cellColor[index][j].figure.name === "Bishop"
//   ) {
//     let selectedFigur = cellColor[index][j];

//     const resultHogov = BishopLogic(selectedFigur, (cellColor = cellColor));
//     let result = resultHogov.array;
//     let eatKing = resultHogov.eatKing;
//     return { result, eatKing, selectedFigur };
//   }
//   if (
//     cellColor[index][j].figure &&
//     cellColor[index][j].figure.name === "Rook"
//   ) {
//     let selectedFigur = cellColor[index][j];
//     let resultHogov = RookLogis(selectedFigur, cellColor);
//     let result = resultHogov.array;
//     let eatKing = resultHogov.eatKing;

//     return { result, eatKing, selectedFigur };
//   }
//   if (
//     cellColor[index][j].figure &&
//     cellColor[index][j].figure.name === "Queen"
//   ) {
//     let selectedFigur = cellColor[index][j];
//     let resultHogov = QueenLogic(selectedFigur, cellColor);
//     let result = resultHogov.array;
//     let eatKing = resultHogov.eatKing;
//     return { result, eatKing, selectedFigur };
//   }
//   if (
//     cellColor[index][j].figure &&
//     cellColor[index][j].figure.name === "Pawn"
//   ) {
//     let selectedFigur = cellColor[index][j];
//     let result = PawnAvalib(selectedFigur, cellColor);
//     return { result, selectedFigur };
//   }
//   if (
//     cellColor[index][j].figure &&
//     cellColor[index][j].figure.name === "Knight"
//   ) {
//     let selectedFigur = cellColor[index][j];
//     let result = KnightAvalib(selectedFigur, cellColor);
//     return { result, selectedFigur };
//   }
//   if (
//     cellColor[index][j].figure &&
//     cellColor[index][j].figure.name === "King"
//   ) {
//     let selectedFigur = cellColor[index][j];
//     let result = KingLogic(selectedFigur, cellColor);
//     return { result, selectedFigur };
//   }
// };

// function useWax(
//   cellColor: any,
//   currentFigurMove: any,
//   setMove: any,
 
// ) {
//   const [check, setCheck] = useState<any>();
//   const [olhib, setolhib] = useState<string>();
//   const [checkmate, setCheckmate] = useState<string>();
//   let eatKingFigure: any = [];
//   const dispatch = useDispatch();

//   let activeKing: any = [];

//   const activeKingFigure = (activation: boolean) => {
//     for (let index = 0; index < cellColor.length; index++) {
//       for (let j = 0; j < cellColor.length; j++) {
//         if (
//           cellColor[index][j].figure &&
//           cellColor[index][j].figure.name === "King"
//         ) {
//           debugger;
//           if (cellColor[index][j].figure.activeEat === true) {
//             debugger;

//             if (!activation) {
//               debugger;
//               dispatch(king({ x: index, y: j }));
//               setCheck("");
//               setCheckmate("");
//             }
//             // }
//           }
//         }
//       }
//     }
//   };

//   const proverkaWax = async () => {
//     let result: any;
//     let selectedFigur: any;
//     let eatKingHod:any=[];
//     let activation = false;
// let activeKingHod:any=[]
// let currentKingCellFigure:any
//     for (let index = 0; index < cellColor.length; index++) {
//       for (let j = 0; j < cellColor.length; j++) {
//         let aaa: any = hod(cellColor, index, j);
//         if (cellColor[index][j].figure&&cellColor[index][j].figure.name==="King") {
//          let kingHod:any = hod(cellColor, index, j);
//          if (kingHod&&kingHod.result.length>0) {
//           activeKingHod.push(...kingHod.result)
//           currentKingCellFigure=cellColor[index][j]
//          }
//         }

//         if (aaa) {
//           result = aaa.result;
//           selectedFigur = aaa.selectedFigur;
//           let xFigure = selectedFigur.x
//           let yFigure = selectedFigur.y
//          eatKingHod= aaa.eatKing
//          if (eatKingHod) {
//           eatKingHod.push({x:xFigure,y:yFigure})

//          }

//         }
//         if (result) {
//           result.forEach((item: any) => {
//             let x = item.x;
//             let y = item.y;
//             if (
//               cellColor[x][y].figure &&
//               cellColor[x][y].figure.name === "King"
//             ) {
//               debugger
//               if (selectedFigur.figure.color !== cellColor[x][y].figure.color) {
//                 activation = true;
//                 let currentFigure =
//                   cellColor[currentFigurMove.x][currentFigurMove.y];
//                 if (
//                   cellColor[x][y].figure &&
//                   cellColor[x][y].figure.color === currentFigure.figure.color
//                 ) {
//                   debugger;
//                   activeKing = cellColor[x][y].figure;

//                   setMove(currentFigure.figure.color);
//                   activeKingFigure(activation);

//                   setolhib(currentFigure.figure.color);
//                 } else {
//                   debugger;

//                   sessionStorage.setItem("hax", JSON.stringify(eatKingHod));

//                   eatKingFigure.push(result);
//                   dispatch(eatKing({ x, y }));

//                   activeKing = cellColor[x][y].figure;
//                   setCheck(cellColor[x][y].figure);
//                 }
//               }
//               debugger
//               let dd = currentFigurMove
//               let proverkaOfColor =  cellColor[x][y].figure.color
//                // let checkmate = proverkaMat(cellColor, activeKingHod, proverkaOfColor,currentKingCellFigure);
//                 debugger;
//                 if (checkmate) {
//                   debugger;
//                   setCheckmate(checkmate);
//                 }
              
//             }
//           });
//         }
        
//       }
//     }
//     debugger;

//     activeKingFigure(activation);

//     return;
//   };
//   // React.useEffect(() => {
//   //   debugger;
//   //   console.log("cellColorPovtor", cellColor);

//   //   proverkaWax();
//   // }, [cellColor]);
//   return [check, olhib, checkmate];
// }
// export { useWax };
import React from 'react'

function wax() {
  return (
    <div>
      
    </div>
  )
}

export default wax
