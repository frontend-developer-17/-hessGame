import React, { useEffect, useState } from 'react'
import { useDeleteUserMutation } from '../../../Redux/RTQ/User'
import {  useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {  addUser } from '../../../Redux/Slice/Auth'
import { Button } from 'react-bootstrap'

function DeleteUser() {
    const [deleteAccount,setDeleteAccount]=useState(true)
    const[deleteUser,body]=useDeleteUserMutation()
    const dispatch=useDispatch()
    const navigate = useNavigate()
   

      

        const removeUser=()=>{
          deleteUser(null) 

        }
    useEffect(()=>{
      debugger
if (body.data===true) {
  debugger
 const removeUser={
  token:null,
  user:{
    email:null,name:null,image:null
  }
 }
  dispatch(addUser(removeUser))
  sessionStorage.setItem("token","")
  navigate("/")
  setDeleteAccount(true)
}
    },[body,dispatch,navigate])
  return (
    <div >
    <h5 className='title_text'>Уважаемый пользователь, удаляя аккаунт вы удаляете все сохраненные данные!</h5>
    <input type="checkbox" onClick={() => setDeleteAccount(!deleteAccount)} /> <span>Я согласен</span>
    <Button
      style={{ marginLeft: '10px' }}
      disabled={deleteAccount}
      variant="success"
    
      onClick={removeUser}>
      Удалить
    </Button>
  </div>
  )
}

export default DeleteUser
