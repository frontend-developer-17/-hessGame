import React, { FormEvent, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useUpdateUserMutation } from "../../../Redux/RTQ/User";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../../Redux/Slice/Auth";
import useResultServer from "../../../helpers/UseResulrServer";
import { RootState } from "../../../Redux/store";

const UpdateUser = () => {
  debugger;
  const { infoProfile } = useSelector((state: RootState) => state.auth);

  const [email, setEmail] = useState<string>(String(infoProfile?.user?.email));
  const [userName, setUserName] = useState<string>(
    String(infoProfile?.user?.name)
  );
  const [updateUser, data] = useUpdateUserMutation();
  //const [resultServer, setResultServer] = useState<null | string>(null);
  const [resultServer, errorApi, addResult] = useResultServer();
  const dispatch = useDispatch();
  //const [errorApi, setErrorApi] = useState<any>();
console.log("resultServer",resultServer);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    debugger;
    if (email === "" || userName === "") {
      addResult({ err: "Введите все поля", succ: null });
    } else {
      let bodyData = {
        email,
        name: userName,
      };
      updateUser(bodyData);
    }
  };
  // if (resultServer !== "") {
  //   // setTimeout(() => {
  //   //   setResultServer(null);
  //   // }, 3000);
  // }
  useEffect(() => {
    debugger;
    let resultUser: any = data;
    if (resultUser?.data?.token) {
      sessionStorage.setItem("token", JSON.stringify(resultUser?.data?.token));
      dispatch(addUser(resultUser?.data));
      debugger;
      addResult({ err: null, succ: "Данные изменились!" });
    }
  }, [data, dispatch]);
  return (
    <Form onSubmit={handleSubmit}>
      {resultServer ? (
        <Form.Label>
          <span className="text-success">{resultServer}</span>
        </Form.Label>
      ) : (
        ""
      )}
      {errorApi && (
        <Form.Label>
          <span style={{ color: "red" }}>Ошибка: {errorApi}</span>
        </Form.Label>
      )}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Электронная почта</Form.Label>
        <Form.Control
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Никнейм</Form.Label>
        <Form.Control
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="UserName"
        />
      </Form.Group>
      <Button variant='secondary' className="mb-3" type="submit">
            Изменить
          </Button>
    </Form>
  );
};

export default UpdateUser;
