import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Form,
  Tab,
  Tabs,
} from "react-bootstrap";
import {
  useUpdateUserMutation,
  useUploadImageMutation,
} from "../Redux/RTQ/User";
import UpdateUser from "../Component/Autorisation/UpdateProfile/UpdateUser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, addImageProfile } from "../Redux/Slice/Auth";
import { RootState } from "../Redux/store";
import GradientKit from "./FormsKit";
import UpdatePassword from "../Component/Autorisation/UpdateProfile/UpdatePassword";
import DeleteUser from "../Component/Autorisation/UpdateProfile/DeleteUser";
import UploadImage from "../Component/Autorisation/UpdateProfile/UploadImage";
import logoutIcon from "../assets/logout_Icon.png";

function Settings() {
  //let {user} = JSON.parse(sessionStorage.getItem("user")||"{}")

  const [resultServer, setResultServer] = useState<null | string>(null);

  const [errorApi, setErrorApi] = useState<any>();

  const navigate = useNavigate();

  if (resultServer !== "") {
    setTimeout(() => {
      setResultServer("");
    }, 3000);
  }

  return (
    <>
      <div onClick={() => navigate("/")} className="exit">
        <Button variant="outline-warning">
          {" "}
          <img src={logoutIcon} alt="" />
        </Button>{" "}
      </div>
      <Container style={{ paddingTop: "10px" }}>
        <h3
          className="title_text"
          style={{
            position: "absolute",
            top: "14px",
            left: "50px",
            right: "0",
            textAlign: "center",
          }}
        >
          Изменение данных профиля!
        </h3>
        <Tabs
          defaultActiveKey="profile"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab
            style={{ backgroundColor: "transparent" }}
            eventKey="profile"
            title="Profile"
          >
            <GradientKit>
              <UploadImage />

              <UpdateUser />
            </GradientKit>
          </Tab>
          <Tab
            style={{ backgroundColor: "transparent" }}
            eventKey="updatePassword"
            title="UpdatePassword"
          >
            <UpdatePassword />
          </Tab>

          <Tab
            style={{ backgroundColor: "transparent" }}
            eventKey="deleteAccount"
            title="DeleteAccount"
          >
            <DeleteUser />
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

export default Settings;
