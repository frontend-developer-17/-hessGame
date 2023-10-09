import React, { EventHandler, FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Register from "../Component/Autorisation/Register";
import Autorisation from "../Component/Autorisation/Autorisation";
import { useEffect } from "react";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "../Redux/RTQ/Auto";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/Slice/Auth";
import FormsKit from "./FormsKit";

function Auto() {
  debugger;
  const [registerUser, { data, error }] = useRegisterUserMutation();

  const [loginUser, body] = useLoginUserMutation(); //
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [errorApi, setErrorApi] = useState<any>();
  const dispatch = useDispatch();
  //    let errorApi:any = error

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    debugger;
    if (location.pathname.slice(6) === "login") {
      if (email && password) {
        loginUser({ email, password });
      } else {
        setErrorApi("Введите все поля!");
      }
    } else {
      debugger;
      if (email && userName && password) {
        const body = {
          email,
          name: userName,
          password,
        };
        registerUser(body);
      } else {
        debugger;
        setErrorApi("Введите все поля!");
      }
    }
  };
  useEffect(() => {
    debugger;
    if (body?.data?.token) {
      sessionStorage.setItem("token", JSON.stringify(body?.data?.token));
      dispatch(addUser(body?.data));
      navigate("/");
    }
    if (body?.error) {
      let errorApi: any = body.error;

      setErrorApi(errorApi.data.message);
    }
  }, [body]);
  useEffect(() => {
    debugger;
    if (error) {
      let errorApi: any = error;
      if (errorApi?.data) {
        setErrorApi(errorApi.data.message);
      }
    }

    debugger;

    if (data?.token) {
      sessionStorage.setItem("token", JSON.stringify(data?.token));
      dispatch(addUser(data));

      navigate("/");
    }
  }, [data, error]);
  return (
    
    <FormsKit>
        <Form onSubmit={handleSubmit}>
          {errorApi && (
            <Form.Label>
              <span style={{ color: "red" }}>Ошибка: {errorApi}</span>
            </Form.Label>
          )}

          {location.pathname.slice(6) == "login" ? (
            <Autorisation
              navigate={navigate}
              setEmail={setEmail}
              setPassword={setPassword}
              setErrorApi={setErrorApi}
            />
          ) : (
            <Register
              navigate={navigate}
              setEmail={setEmail}
              setUserName={setUserName}
              setPassword={setPassword}
              setErrorApi={setErrorApi}
            />
          )}
          <Button
            style={{ marginLeft: "10px" }}
            variant="primary"
            onClick={() => setErrorApi(null)}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      
        </FormsKit>
  );
}

export default Auto;
