import React from 'react'
import { Form, FormControl } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Autorisation:React.FC<any> = ({navigate,setEmail,setPassword,setErrorApi}) => {
  debugger
  const handler = ()=>{
    setErrorApi(null)
    setEmail(null)
    setPassword(null)
    navigate('register')

  }
  return (
    <>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Электронная почта</Form.Label>
    <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Пароль</Form.Label>
    <Form.Control  onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
  </Form.Group>
  


 
  <Form.Text className="text-info">
    Нет аккаунта? <span               style={{ color: '#1988D0', cursor: 'pointer' }}
 onClick={handler}>Зарегестрируйтесь</span>
    </Form.Text>
    </>
  )
}

export default Autorisation
