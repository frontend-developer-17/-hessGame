import React, { useRef } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useBeforeUnload } from 'react-router-dom';
import { RootState } from '../../../Redux/store';

const Timer:React.FC<any> = ({move,checkmate,setCheckmate,currentFigure,setRestartTymer,restartTymer}) => {
    const {whiteTymer,blackTymer,startTymer}=useSelector((state:RootState)=>state.tymerSlice)
    const [currentWhiteTymer,setCurrentWhiteTymer]=useState<number|null>(null)
    const[currentBlackTymer,setCurrentBlackTymer]=useState<number|null>(null)
const ref=useRef<null|ReturnType<typeof setInterval>>(null)
 let white= JSON.parse(sessionStorage.getItem("whiteTymer")||"{}")

let black=JSON.parse(sessionStorage.getItem("blackTymer")||"{}")
//let whiteTymer
if(currentWhiteTymer==0){
    setCheckmate("У белых фигур истекло время! Черные фигуры победили!")
    if (ref.current) {    clearInterval(ref.current)
    }


}

console.log("currentWhiteTymer");
useEffect(()=>{
    debugger
    if (whiteTymer>0&&!!startTymer) {
        setCurrentWhiteTymer(whiteTymer)
        setCurrentBlackTymer(blackTymer)
    
       }
    debugger
if (whiteTymer<1&&white) {
    setCurrentWhiteTymer(white)
}
if (blackTymer<1&&black) {
    setCurrentBlackTymer(black)
}
},[])
useBeforeUnload((event: BeforeUnloadEvent)=>{
    event.preventDefault()
    if (currentWhiteTymer) {
        debugger
        sessionStorage.setItem("whiteTymer",JSON.stringify(currentWhiteTymer))

    }
    if (currentBlackTymer) {
        sessionStorage.setItem("blackTymer",JSON.stringify(currentBlackTymer))

    }
})


if (currentBlackTymer==0) {
    setCheckmate("У черных фигур истекло время! Белые фигуры победили!")
    if (ref.current) {    clearInterval(ref.current)
    }

}
if (checkmate) {
    if (ref.current) {    clearInterval(ref.current)
    }
}




useEffect(()=>{
    
        if (currentFigure) {
            dicrement()

        }

    
},[move,restartTymer,startTymer,currentFigure])
const dicrement = ()=>{
    debugger
if (ref.current) {
    
    clearInterval(ref.current)
    console.log("ref.currentC",ref.current);

}

    if (whiteTymer!=null&&blackTymer!=null) {
        let callback = move==="white"?setCurrentWhiteTymer:setCurrentBlackTymer
        ref.current= setInterval(()=>{
debugger
                callback((prev:any)=>prev-1)
             },1000 )
    
    }


debugger



}





  return (
    <div>
        {!!startTymer?
        <>
        <div>Белые: {currentWhiteTymer}</div>
        <div>Черные: {currentBlackTymer}</div>
        </>
:""        
    }


      
    </div>
  )
}

export default Timer