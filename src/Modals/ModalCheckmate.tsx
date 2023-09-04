import { Modal, ModalBody } from "react-bootstrap"
import { useEffect, useState } from 'react';

export const ModalChekmate:React.FC<any> = ({mat})=>{
    const [activeModal,setActiveModal]=useState(false)
    useEffect(()=>{
        if (mat!="") {
            setActiveModal(true)
        }
    },[mat])
   
return(
    <>

    <Modal show={activeModal}  onHide={()=> setActiveModal(false)}>
        
        
        <ModalBody>
            <h5 className="text-info">{mat}</h5>
        </ModalBody>
       
    </Modal>
    
    </>
)
}