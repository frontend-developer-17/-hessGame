import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getToken } from './User'
import { IBody, ILogin, IRegister } from '../../Common/types/Auth/Autorisation..types'


//const user = JSON.parse(sessionStorage.getItem("user")||"{}")
// Define a service using a base URL and expected endpoints
export const authorisationApi = createApi({
  reducerPath: 'authorisationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/auth/'  }),
  tagTypes:['Get'],
  endpoints: (build) => ({
    registerUser: build.mutation<IBody,IRegister>({
        query(body) {
          return {
            url: `register`,
            method: 'POST',
            body,
          }
        },
       
      }),
      loginUser: build.mutation<IBody,ILogin>({
        query(body) {
          return {
            url: `login`,
            method: 'POST',
            body,
          }
        },
       
      }),
      fethUser:build.query({
        query() {
          return {
            url: `fethUser`,
            method: 'GET',
            headers: {
              Authorization: `Bearer ${getToken()}`,
            },
          }
        },
      })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterUserMutation,useLoginUserMutation,useFethUserQuery} = authorisationApi

