import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProfile, IUser } from "../../Common/types/Profile/IProfile";

const initialState:IProfile = {
 infoProfile:{
  token:null,
  user:{
email:null,name:null,image:null
  }
 }
};

export const Auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
   
      addUser:(state,action:PayloadAction<{token:null|string,user:IUser}>)=>{
        state.infoProfile=action.payload
      },
      addImageProfile:(state,action:PayloadAction<string>)=>{
          state.infoProfile.user.image=action.payload

      }

    },})
    export const {
      addImageProfile,
      addUser
  } = Auth.actions
    export default Auth.reducer;