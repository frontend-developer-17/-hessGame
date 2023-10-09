import React, { FormEvent, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import GradientKit from '../../../Pages/FormsKit'
import { useUpdatePasswordMutation } from '../../../Redux/RTQ/User'
import { useEffect } from 'react';
import useResultServer from '../../../helpers/UseResulrServer';

const UpdatePassword:React.FC = () => {
  debugger
  const [oldPassword, setOldPassword] = useState<string >("");
  const [newPassword, setNewPassword] = useState<string >("");
  // const [errorApi, setErrorApi] = useState<any>(null);
  // const [resultServer, setResultServer] = useState<any>(null);
  const [updatePassword,body]=useUpdatePasswordMutation()
  const [resultServer,errorApi,addResult]=useResultServer()

  const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
    debugger
e.preventDefault()
if (oldPassword!=""&&newPassword!="") {
    updatePassword({oldPassword,newPassword})
}else{
  addResult({ err: "Введите все поля", succ: null });
}
  }
  useEffect(()=>{
    debugger
if (body?.data) {
   // setResultServer("Парроль обновлен!")
   addResult({ err: null, succ: "Парроль обновлен!" });

}else{
    let error: any = body.error;

      //setErrorApi(String(error?.data?.message));
      addResult({ err: error?.data?.message, succ: null });

}
  },[body])
  // if (resultServer!="") {
  //   // setTimeout(()=>{
  //   //   setResultServer("")
  
  //   // },3000)
  // }
  return (
    <GradientKit >


         <Form onSubmit={handleSubmit}>
            {resultServer?<Form.Label>
              <span className='text-success'>{resultServer}</span>
            </Form.Label>:""}
        { errorApi && (
            <Form.Label>
              <span style={{ color: "red" }}>Ошибка: {errorApi}</span>
            </Form.Label>
          )}
       <Form.Group className="mb-3" >
    <Form.Label>Текущий парроль</Form.Label>
    <Form.Control value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)} type="password" placeholder="OldPassword" />
   
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Новый пароль</Form.Label>
    <Form.Control  value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}  placeholder="NewPassword" />
  </Form.Group>
  <Button variant='secondary' className="mb-3" type="submit">
            Изменить
          </Button>
  </Form>

 
  
   </GradientKit>
  )
}

export default UpdatePassword
