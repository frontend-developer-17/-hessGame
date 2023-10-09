import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../Redux/store';
import { newFigureWhite } from '../../../Redux/Slice/CellSlice';
import React from 'react';
import { FigureTS } from '../../../Common/types/boardTS';

 const  ReplaseShapeModal:React.FC<any>  =
  (props) =>{
    debugger
    const {newFigure,cell}=useSelector((state:RootState)=>state.eatenFigures)
    
    const dispatch = useDispatch()
    const addNewFigur=(figura:FigureTS)=>{
    dispatch(newFigureWhite({x:cell.x,y:cell.y,figura:figura}))
    props.setReturnFigure(false)
    }
    
    return (
        <Modal
          size="lg"
          show={!!props.returnFigure}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
           Выберите, какую фигуру хотите заменить!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className='modalEatenFigure'      
    >
         {newFigure?newFigure.map((item:FigureTS)=>(
          <div className='modalEatenFigure_figur'  >
            <div className=""><img className='modalEatenFigure_figur_logo' src={item.logo} alt=""   />
    </div>
    <div style={{marginLeft:"22px"}} >{item.name}</div>
    <div className='modalEatenFigure_figur_button'><Button  onClick={()=>addNewFigur(item)} variant="secondary"     >Заменить</Button>
    </div>
          </div>
            
    
    
         )):""}
          
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
 

export default  ReplaseShapeModal