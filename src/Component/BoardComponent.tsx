import React, { useEffect, useState } from "react";

import CeilComponent from "./CellComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";

import { addBoard } from "../BusnesLogik/AddBoard";
import {
  addCell,
  addWalkFigure,
  newFigureBlack,
  newFigureWhite,
} from "../Redux/Slice/CellSlice";
import Example from "../Modals/ModalEatenFigure";
import ExampleModal from "../Modals/ModalEatenFigure";
import Button from "react-bootstrap/esm/Button";
import { Card } from "react-bootstrap";
import { HilightFunctional } from "../BusnesLogik/HilightFunctional";
import { proverkaWax } from "../BusnesLogik/proverkaofWaxFunc";
import {
  addBlackFigure,
  addWhiteFigure,
  beforeDownloadBlackFigure,
  beforeDownloadWhiteFigure,
  restart,
} from "../Redux/Slice/EatenfiguresSlice";
import Timer from "../BusnesLogik/Timer";
import { useBeforeUnload } from "react-router-dom";
import { ModalChekmate } from "../Modals/ModalCheckmate";

const BoardComponent = () => {
  const { board, walkingFigure } = useSelector(
    (state: RootState) => state.cell
  ); //исходный массив  и ходящие фигуры

  const { whiteFigure, blackFigure } = useSelector(
    (state: RootState) => state.eatenFigures
  ); //массивы съеденных фигур
  const [selected, setSelected] = useState<any>(); //текущая выбранная фигура
  const [show, setShow] = useState(false); //boolean флаг отвечающий за возврат фигуры
  const [restartBoard, setRestartBoard] = useState(false); //boolean флаг отвечающий за обновление доски
  const [currentFigurMove, setCurrentFigurMove] = useState<any>(); //ячейка,по которой хотят сходить
  const [eatKingMove, setEatKingMove] = useState<any>(); //шах
  const [mat, setMat] = useState<string>(""); //мат
  const [rokirovka, setRokirovka] = useState<boolean>(); //мат
  const [restartTymer, setRestartTymer] = useState<boolean>(false); //мат
  const [startTymer, setStartTymer] = useState<boolean>(false);

  const dispatch = useDispatch();

  useBeforeUnload((event: BeforeUnloadEvent) => {
    event.preventDefault();
    sessionStorage.setItem("board", JSON.stringify(board));
    sessionStorage.setItem("moveFigur", walkingFigure);

    console.log("whiteFigure", whiteFigure);
    sessionStorage.setItem("whiteFigureEaten", JSON.stringify(whiteFigure));

    console.log("blackFigure", blackFigure);

    debugger;
    sessionStorage.setItem("blackFigureEaten", JSON.stringify(blackFigure));
  });
  console.log("currentFigurMove", currentFigurMove);

  useEffect(() => {
    debugger;
    console.log("board", board);

    if (board.length < 1) {
      debugger;
      let resultBoard = JSON.parse(sessionStorage.getItem("board") || "[]");
      let moveFigure = sessionStorage.getItem("moveFigur");
      let whiteFigureEatenResult = JSON.parse(
        sessionStorage.getItem("whiteFigureEaten") || "[]"
      );
      let blackFigureEatenResult = JSON.parse(
        sessionStorage.getItem("blackFigureEaten") || "[]"
      );
      if (!resultBoard || resultBoard.length < 1) {
        addBoard(dispatch);
      } else {
        dispatch(addCell(resultBoard));
        if (moveFigure) {
          dispatch(addWalkFigure(moveFigure));
        }

        if (whiteFigureEatenResult.length > 0) {
          dispatch(beforeDownloadWhiteFigure(whiteFigureEatenResult));
        }
        if (blackFigureEatenResult.length > 0) {
          dispatch(beforeDownloadBlackFigure(blackFigureEatenResult));
        }
        setRestartBoard(true);
      }
    }
  }, [board]);

  useEffect(() => {
    if (currentFigurMove) {
      proverkaWax(board, currentFigurMove, dispatch, setEatKingMove, setMat);
    }
  }, [board]);
  const highLightCells = (selectedFigur: any) => {
    HilightFunctional(
      dispatch,
      board,
      selectedFigur,
      setSelected,
      selected,
      setCurrentFigurMove,
      setShow,
      walkingFigure,
      setRestartBoard,
      setRokirovka,
      mat
    );
  }; //метод, который при клике изменяет доску
  const restartGame = () => {
    addBoard(dispatch);
    dispatch(restart());
    dispatch(addWalkFigure("white"));

    setRestartBoard(false);
    setSelected("");
    setEatKingMove("");
    setMat("");
    setRestartTymer(true);
    sessionStorage.clear();
    localStorage.clear();
    setStartTymer(false);
  };

  if (rokirovka === true) {
    setTimeout(() => {
      setRokirovka(false);
    }, 2000);
  }
  return (
    <div className="wrapper">
      <div className="board">
        {board.map((item: [], index: any) => (
          <React.Fragment key={index}>
            {item.map(
              (
                cell: { x: number; y: number; figure: { logo: string } },
                index
              ) => (
                <CeilComponent
                  selectFigure={selected}
                  highLightCells={highLightCells}
                  selected={
                    cell?.figure &&
                    cell?.x === selected?.x &&
                    cell?.y === selected?.y
                  }
                  key={index}
                  cell={cell}
                />
              )
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="menu">
        <Card.Header className="menu_hod">
          <h4>
            {" "}
            Ходят:{" "}
            {walkingFigure === "white" ? (
              <span>Белые</span>
            ) : (
              <span>Черные</span>
            )}
          </h4>
        </Card.Header>
        <div style={{ marginTop: "10px" }}>
          {!restartBoard || !!startTymer ? (
            <Timer
              selected={selected}
              move={walkingFigure}
              restartTymer={restartTymer}
              setRestartTymer={setRestartTymer}
              startTymer={startTymer}
              setStartTymer={setStartTymer}
              mat={mat}
              setMat={setMat}
            />
          ) : (
            ""
          )}

          {rokirovka === true ? (
            <span style={{ padding: "5px" }} className="alert alert-secondary">
              Была выполнена рокировка!
            </span>
          ) : (
            ""
          )}
        </div>

        {eatKingMove ? (
          eatKingMove.color === "black" ? (
            <span style={{ color: "red" }}>Черным фигурам шах!</span>
          ) : (
            <span style={{ color: "red" }}>Белым фигурам шах!</span>
          )
        ) : (
          ""
        )}

        <div className="">
          {mat!=="" ? <span style={{ color: "red" }}>{mat} </span> : ""}
        </div>

        <div className="">
          {(blackFigure && blackFigure.length > 0) ||
          (whiteFigure && whiteFigure.length > 0) ? (
            <h5>Съеденные фигуры:</h5>
          ) : (
            ""
          )}
          <div className="menu_eatenFigure_blokBlack">
            {blackFigure && blackFigure.length > 0 ? (
              <>
                {blackFigure &&
                  blackFigure.map((item: any) => (
                    <div className="menu_eatenFigure">
                      <div style={{ display: "flex" }}>
                        <img
                          src={item.eatenFigura.logo}
                          alt=""
                          style={{ width: "30px", height: "30px" }}
                        />
                        <h5 style={{ margin: "10px 0 0px 10px " }}>
                          {item.eatenFigura.name}
                        </h5>
                        {item.count > 1 ? (
                          <div className="menu_eatenFigure_count">
                            {item.count > 1 ? item.count : ""}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ))}
              </>
            ) : (
              ""
            )}
          </div>

          <div>
            {whiteFigure && whiteFigure.length > 0 ? (
              <div className="menu_eatenFigure_blokWhite">
                {whiteFigure.map((item: any) => (
                  <div className="menu_eatenFigure">
                    <div style={{ display: "flex" }}>
                      <img
                        src={item.eatenFigura.logo}
                        alt=""
                        style={{ width: "30px", height: "30px" }}
                      />
                      <h5 style={{ margin: "10px 0 0px 10px " }}>
                        {item.eatenFigura.name}
                      </h5>
                      {item.count > 1 ? (
                        <div className="menu_eatenFigure_count">
                          {item.count > 1 ? item.count : ""}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {selected && selected.figure.name == "Pawn" && (
          <>
            {selected.x == 0 ||
              (selected.x == 6 && (
                <ExampleModal
                  show={show}
                  onHide={() => setShow(false)}
                  selectedCell={selected}
                />
              ))}
          </>
        )}

        {mat!==""&&
        <ModalChekmate mat={mat}/>
        }

        {!!restartBoard ? (
          <div className="">
            {" "}
            <Button
              variant="outline-secondary"
              style={{ marginTop: "10px" }}
              onClick={restartGame}
            >
              Начать заново
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default BoardComponent;
