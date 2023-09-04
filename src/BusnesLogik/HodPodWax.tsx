import React from 'react'
import { hod } from '../mys/wax'

export const HodPodWax = (board:any,selected:any,selectedFigure:any) => {

    let activePodWax:boolean=true
    let resultArray = structuredClone(board)
    resultArray[selected.x][selected.y].figure=null
    resultArray[selectedFigure.x][selectedFigure.y].figure=selected.figure
    debugger
    // if (selected.figure.name=='King'&&selected.figure.color=="white") {
    //     if (selected.figure.name=='King'&& selectedFigure.y==2) {
    //         debugger
    //         let rook = board[7][0]
    //         resultArray[rook.x][rook.y].figure=null
    //         resultArray[7][3].figure=rook.figure
    //     }
    //     if (selected.figure.name=='King'&& selectedFigure.y==6) {
    //         debugger
    //         let rook = board[7][7]
    //         resultArray[rook.x][rook.y].figure=null
    //         resultArray[7][5].figure=rook.figure
    //     }
    // }else if(selected.figure.name=='King'&&selected.figure.color=="black"){
    //     if (selected.figure.name=='King'&& selectedFigure.y==2) {
    //         debugger
    //         let rook = board[0][0]
    //         resultArray[rook.x][rook.y].figure=null
    //         resultArray[0][3].figure=rook.figure
    //     }
    //     if (selected.figure.name=='King'&& selectedFigure.y==6) {
    //         debugger
    //         let rook = board[0][7]
    //         resultArray[rook.x][rook.y].figure=null
    //         resultArray[0][5].figure=rook.figure
    //     }
    // }
   
    
 for (let index = 0; index < resultArray.length; index++) {
for (let j = 0; j < resultArray.length; j++) {
    let result:any =     hod(resultArray, index, j)
    if (result&& result.result) {
        result.result.forEach((item:any)=>{
        if (resultArray[item.x][item.y].figure&&resultArray[item.x][item.y].figure.name==="King") {
            if (selected.figure.color===resultArray[item.x][item.y].figure.color) {
                debugger
                activePodWax=false
            }
        }
           }) 
    }


   
}    
 }
 return activePodWax
}

