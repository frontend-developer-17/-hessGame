import { useState } from "react";
export interface IResultProps{
    err:string|null,
    succ:string|null

  };

 const useResultServer=()=>{
 
    const [resultServer, setResultServer] = useState<null | any>(null);
    const [errorApi, setErrorApi] = useState<null | any>(null);

const addResult=(resp:IResultProps)=>{
if (resp.err) {
  setErrorApi(resp.err)
}
if (resp.succ) {
  setResultServer(resp.succ)
}

}
if (resultServer !== null||errorApi!==null) {

  const callback = resultServer?setResultServer:setErrorApi
  setTimeout(() => {
    callback(null)        
  }, 3000);
}



   

    return [resultServer,errorApi,addResult]
}
export default useResultServer