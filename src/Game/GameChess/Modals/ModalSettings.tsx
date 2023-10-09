import React from "react"
import { useRef, useState } from "react"
import { Button, Modal, ModalBody,  ModalHeader } from "react-bootstrap"
import togleOf from '../../../assets/Icons/toggle_off.png'
import togleOn from '../../../assets/Icons/toggle_on.png'
import { useDispatch } from "react-redux"
import { addBlackTymer, addWhiteTymer } from "../../../Redux/Slice/TymerSlice"

 const SettingsGameModal:React.FC<any> = ({possibleMoves,possibleEatenFigures,setPossibleMoves,setPossibleEatenFigures,activeSettingsModal,
    
   
   setActiveSettingsModal})=>{
    debugger
    const dispatch = useDispatch()

   const [startTymer,setStartTymer]=useState<boolean>(false)
   const [currentTymer,setCurrentTymer]=useState<number>(900)

   const addSettingsGame=()=>{
if (!!startTymer&&currentTymer) {
    dispatch(addWhiteTymer(currentTymer))
    dispatch(addBlackTymer(currentTymer))
}
setActiveSettingsModal(false)
   }
   
let togglePossibleMoves = possibleMoves?togleOn:togleOf
let togglePossibleEatenFigures = possibleEatenFigures?togleOn:togleOf
return(
    <>

    <Modal show={activeSettingsModal} >
        <ModalHeader><h3>Настройте игру!</h3></ModalHeader>
        <ModalBody>
            {!startTymer?<div style={{display:"flex",marginRight:"5px"}}> 
            <h6>Играть с таймером:</h6>
            <div style={{margin:"-5px  0 0 5px"}} className="">            <Button size="sm" variant="outline-primary" onClick={()=>setStartTymer(true)}>Настроить</Button> 
</div>
             </div>:
           <div style={{display:"flex"}}>
           
            <h6>Укажите время таймера, s</h6> <input style={{width:"50px",margin:"-2px 0 5px 5px"}}  onChange={(event:React.ChangeEvent<HTMLInputElement>)=>setCurrentTymer(Number(event.target.value))} value={currentTymer}  />
            <Button size="sm" style={{margin:"-3px  0 0 5px"}} variant="outline-primary" onClick={()=>setStartTymer(false)}>Отменить</Button>
            </div>
            }
            <div style={{display:"flex"}} className="">
            <h6>Подсвечивать возможные ходы:</h6>
            <span style={{
                marginTop:"-8px"
            }}><img onClick={()=>setPossibleMoves(!possibleMoves)}  src={togglePossibleMoves} alt=""  /></span>
            </div>
            <div style={{display:"flex"}} className="">
            <h6>Подсвечивать возможные съеденные фигуры:</h6>
            <span style={{
                marginTop:"-8px"
            }}><img onClick={()=>setPossibleEatenFigures(!possibleEatenFigures)}  src={togglePossibleEatenFigures} alt=""  /></span>
            </div>
        </ModalBody>
      <Modal.Footer>
      <Button onClick={addSettingsGame}>Сохранить</Button>

            <Button onClick={()=>setActiveSettingsModal(false)}>Close</Button>
          </Modal.Footer>
    </Modal>
    
    </>
)
}
export default React.memo(SettingsGameModal)

