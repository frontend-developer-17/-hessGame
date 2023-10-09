export interface IRegister{
    name:string,
    email:string,
    password:string
}
export interface ILogin{
   
    email:string,
    password:string
}
export interface IBody{
token:string,
user:{
    email:string,name:string,image:string
}
}
