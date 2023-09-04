import React, { useRef } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useBeforeUnload } from 'react-router-dom';

const Timer:React.FC<any> = ({move,restartTymer,setRestartTymer,setStartTymer,mat,setMat,selected}) => {
    const [whiteTymer,setWhiteTymer]=useState<number|null>(null)
    const[blackTymer,setBlackTymer]=useState<number|null>(null)
const [tymer,setTymer]=useState<number>(900)
const [activeTymer,setActiveTymer]=useState<boolean>(false)
const ref=useRef<null|ReturnType<typeof setInterval>>(null)
 //@ts-ignore
 let white= JSON.parse(sessionStorage.getItem("whiteTymer"))
 //@ts-ignore

let black=JSON.parse(sessionStorage.getItem("blackTymer"))
//let whiteTymer
if(whiteTymer==0){
    setMat("У белых фигур истекло время! Черные фигуры победили!")
    if (ref.current) {    clearInterval(ref.current)
    }


}

useBeforeUnload((event: BeforeUnloadEvent)=>{
    event.preventDefault()
    if (whiteTymer) {
        debugger
        sessionStorage.setItem("whiteTymer",JSON.stringify(whiteTymer))

    }
    if (blackTymer) {
        sessionStorage.setItem("blackTymer",JSON.stringify(blackTymer))

    }
})


if (blackTymer==0) {
    setMat("У черных фигур истекло время! Белые фигуры победили!")
    if (ref.current) {    clearInterval(ref.current)
    }

}
if (mat) {
    if (ref.current) {    clearInterval(ref.current)
    }
}
useEffect(()=>{
   
   debugger
   if (!whiteTymer&&white&&black) {
    setWhiteTymer(white)
    setBlackTymer(black)
   setStartTymer(true)
    setActiveTymer(true)

   }
   debugger
   
// return()=>{
//     if (whiteTymer) {
//         debugger
//         localStorage.setItem("whiteTymer",JSON.stringify(whiteTymer))

//     }
//     if (blackTymer) {
//         localStorage.setItem("blackTymer",JSON.stringify(blackTymer))

//     }
// }
},[])

// let whiteTymer:any=useCallback(()=>{whiteFigureTymer?whiteFigureTymer:white?white:null},[whiteFigureTymer,white])
// let blackTymer:any=useCallback(()=>{blackFigureTymer?blackFigureTymer:black?black:null},[blackFigureTymer,black])
useEffect(()=>{
    if (!!restartTymer) {
        debugger
        setBlackTymer(null)
        setWhiteTymer(null)

        setActiveTymer(false)
        setRestartTymer(false)
        setStartTymer(false)
    }else {
        
        dicrement()

    }
},[move,restartTymer,selected])
const dicrement = ()=>{
    debugger
if (ref.current) {
    
    clearInterval(ref.current)
    console.log("ref.currentC",ref.current);

}

    if (whiteTymer!=null&&blackTymer!=null) {
        let callback = move==="white"?setWhiteTymer:setBlackTymer
        ref.current= setInterval(()=>{
           
                callback((prev:any)=>prev-1)
             },1000 )
    
    }


debugger




}


const addTymer=()=>{
    debugger
    if (tymer!=0) {
    setStartTymer(true)

    setWhiteTymer(tymer)
    setBlackTymer(tymer)
   }

}


  return (
    <div>

        {!activeTymer  ?   
           
        <Button variant="outline-secondary" onClick={()=>setActiveTymer(true)} >Играть с таймером!</Button>
:<>

{blackTymer==null&&whiteTymer==null?<>
<span>Укажите время, s</span> <input style={{width:"50px"}}  onChange={(event:React.ChangeEvent<HTMLInputElement>)=>setTymer(Number(event.target.value))} value={tymer}  />
<Button style={{marginLeft:"5px"}}  onClick={addTymer}>Сохранить</Button>
</>:<><div>Белые: {whiteTymer}</div>
<div>Черные: {blackTymer}</div></>}


</>}
      
    </div>
  )
}

export default React.memo(Timer)


