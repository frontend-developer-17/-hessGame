import { Button, Container, Nav, Navbar, Image } from "react-bootstrap";
import { navMenu } from "../Common/Navigate";
import { useNavigate } from "react-router-dom";
import Carusel from "../helpers/Carusel";
import settings from "../assets/Icons/settings.png";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import useFetchUser from "../helpers/GetUser";

function Home() {
  const navigate = useNavigate();
  const [fetchUser, data] = useFetchUser();

  const { infoProfile } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    debugger;
    if (infoProfile?.user?.name === null) {
      debugger;
      fetchUser();
    }
  }, [infoProfile, data]);

  return (
    <>
      <Navbar className="headerBlock">
        {infoProfile?.user && infoProfile.user.name !== null ? (
          <>
            {infoProfile?.user?.image ? (
              <Image src={infoProfile?.user?.image} alt="" />
            ) : (
              ""
            )}

            <Navbar.Brand>
              Никнейм:
              <span style={{ textDecoration: "underline", paddingLeft: "5px" }}>
                {infoProfile?.user?.name}
              </span>
            </Navbar.Brand>
            <img onClick={() => navigate("/settings")} src={settings} alt="" />

            <Nav>
              <Button
                className="mr-8"
                onClick={() => navigate(navMenu.autorisation.auto.path)}
                variant="warning"
              >
                Выйти
              </Button>
            </Nav>
          </>
        ) : (
          <Nav>
            <Button
              className="mr-8"
              onClick={() => navigate(navMenu.autorisation.login.path)}
              variant="outltne-secondary"
            >
              Войти
            </Button>
            <Button
              className="mr-8"
              onClick={() => navigate(navMenu.autorisation.register.path)}
              variant="outltne-secondary"
            >
              Регистрация
            </Button>
          </Nav>
        )}
      </Navbar>
      <Container fluid style={{ textAlign: "center" }}>
        <div className="title">
          <div className="">
            {" "}
            <h2 className="">
              {" "}
              <span className="title_text">
                Добро пожаловать в мир игр!
              </span>{" "}
            </h2>
          </div>
        </div>
        <div className="">
          {" "}
          <span className="title_text">
            Начните играть и прокачивать свои навыки!
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="carusel"
        >
          {" "}
          <Carusel />
        </div>
      </Container>
    </>
  );
}

export default Home;
