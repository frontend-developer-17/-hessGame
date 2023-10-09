import React from 'react'
import { BoardTS } from '../../../Common/types/boardTS'
import { hod } from './proverkaofWaxFunc'

export const HodPodWax = (board:BoardTS[][],currentFigure:BoardTS,selectedFigure:BoardTS) => {

    let activePodWax:boolean=true
    let resultArray = structuredClone(board)
    resultArray[currentFigure.x][currentFigure.y].figure=null
    resultArray[selectedFigure.x][selectedFigure.y].figure=currentFigure.figure
   
   
    
 for (let index = 0; index < resultArray.length; index++) {
for (let j = 0; j < resultArray.length; j++) {
    let result =     hod(resultArray, index, j)
    if (result&& result.result) {
        result.result.forEach((item:{x:number,y:number})=>{
        if (resultArray[item.x][item.y].figure&&resultArray[item.x][item.y].figure?.name==="King") {
            if (currentFigure.figure?.color===resultArray[item.x][item.y].figure?.color) {
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

