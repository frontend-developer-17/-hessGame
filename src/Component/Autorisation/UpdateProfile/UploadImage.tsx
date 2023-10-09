import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useUploadImageMutation } from '../../../Redux/RTQ/User';
import { addImageProfile } from '../../../Redux/Slice/Auth';
import useResultServer from '../../../helpers/UseResulrServer';
import downloadImage from '../../../assets/Icons/download.png'

function UploadImage() {
    const [file, setFile] = useState<any>();
  const [uploadFile, body] = useUploadImageMutation();
  const [resultServer,errorApi,addResult]=useResultServer()
const ref=useRef<any>()
  const dispatch=useDispatch()
  const addImage = () => {
    debugger;
  //  setErrorApi(null);
    const formData = new FormData();
    formData.append("file", file);

    uploadFile(formData);
    setFile(null)
  };
  useEffect(() => {
    debugger;
    let result: any = body?.error;
    if (result?.data?.error) {
    //  setErrorApi(result.data.message);
    setFile(null);
    addResult({ err: result.data.message, succ: null })
    } else {
      if (result?.data) {
        debugger;
        dispatch(addImageProfile(result?.data));
       // setResultServer("Фотография загружена!");
       addResult({ err:null, succ: "Фотография загружена!" })

      }
    }
  }, [body])
  const handleChange = (e:any) => {
//setErrorApi(null);

    setFile(e.target.files[0]);
  };
  const handlePick=()=>{
    ref?.current.click()
  }
  
  return (
    <div>
      {resultServer ? (
        <div>
          <span className="text-success">{resultServer}</span>
          </div>      ) : (
        ""
      )}
      {errorApi && (
        <div>
          <span style={{ color: "red" }}>Ошибка: {errorApi}</span>
        </div>
      )}
            <span>Изменить фотографию:</span>{" "}
            <Button onClick={handlePick}  variant="outline-info"><img src={downloadImage} alt="" /></Button>{' '}
            <input className='hiddenInputFile' ref={ref} onChange={handleChange} type="file" accept="png,svg," />
          {file&&            <Button onClick={addImage}>Сохранить</Button>
}
    </div>
  )
}

export default UploadImage
