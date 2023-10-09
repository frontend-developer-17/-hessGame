import { Modal, ModalBody } from "react-bootstrap"
import { useEffect, useState } from 'react';

export const ModalChekmate:React.FC<any> = ({checkmate})=>{
    debugger
    const [activeModal,setActiveModal]=useState(false)
    useEffect(()=>{
        if (checkmate!=="") {
            setActiveModal(true)
        }
    },[checkmate])
   
return(
    <>

    <Modal show={activeModal}  onHide={()=> setActiveModal(false)}>
        
        
        <ModalBody>
            <h5 className="text-info">{checkmate}</h5>
        </ModalBody>
       
    </Modal>
    
    </>
)
}