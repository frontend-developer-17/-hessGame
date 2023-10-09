import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUpdatePassword, IUpdateUser } from '../../Common/types/Profile/IProfile'
import { IBody } from '../../Common/types/Auth/Autorisation..types'

// Define a service using a base URL and expected endpoints
debugger
//const user = JSON.parse(sessionStorage.getItem("user")||"{}")
export const getToken=()=>{
  debugger
   let token =  JSON.parse(sessionStorage.getItem("token")||"{}")
  return token
}
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/user/',
  }),
 
  endpoints: (build) => ({
    uploadImage: build.mutation({
        query(body) {
          return {
            url: `upload`,
            method: 'POST',
            body,
            headers: {
              Authorization: `Bearer ${getToken()}`,
            },
          }
        },
       
      }),
      updateUser: build.mutation<IBody,IUpdateUser>({
        query(body) {
          return {
            url: `update`,
            method: 'PATCH',
            body,
            headers: {
              Authorization: `Bearer ${getToken()}`,
            },
          }
        },
       
      }),
      updatePassword: build.mutation<IBody,IUpdatePassword>({
        query(body) {
          return {
            url: `updatePassword`,
            method: 'PATCH',
            body,
            headers: {
              Authorization: `Bearer ${getToken()}`,
            },
          }
        },
       
      }),
      deleteUser: build.mutation({
        query() {
          return {
            url: `delete`,
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${getToken()}`,
            },
          }
        },
       
      }),
      
      
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useUploadImageMutation, useUpdateUserMutation,useUpdatePasswordMutation,useDeleteUserMutation} = userApi