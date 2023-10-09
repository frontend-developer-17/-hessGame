import React from 'react'
import Form from 'react-bootstrap/Form';

const  Register:React.FC<any> = ({navigate,setEmail,setUserName,setPassword,setErrorApi}) => {
  const handler = ()=>{
    setErrorApi(null)
    setEmail(null)
    setPassword(null)
    setUserName(null)
    navigate('login')
  
  }
  return (
    <>

      <Form.Group  className="mb-3" controlId="formBasicEmail">
        <Form.Label>Электронная почта</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control onChange={(e)=>setPassword(e.target.value)}  type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Label>Никнейм</Form.Label>
      <Form.Control onChange={(e)=>setUserName(e.target.value)}  placeholder="UserName" />

      </Form.Group  >


     
      <Form.Text className="text-info">
         Есть уже акккаунт? <span               style={{ color: '#1988D0', cursor: 'pointer' }}
 onClick={handler}>Войти</span>
        </Form.Text>
        </>
  );
}

export default Register
