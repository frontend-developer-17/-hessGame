import React, { useEffect, useMemo, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import useAddBoard from "../../Helpers/useAddBoard";
import { addCell, addWalkFigure } from "../../../Redux/Slice/CellSlice";
import ReplaseShapeModal from "../Modals/ModalEatenFigure";
import Button from "react-bootstrap/esm/Button";
import { Card } from "react-bootstrap";
import { MovingShapes } from "../BusnesLogik/MovingShapes";
import { proverkaWax } from "../BusnesLogik/proverkaofWaxFunc";
import logoutIcons from "../../../assets/logout_Icon.png"
import {
  beforeDownloadBlackFigure,
  beforeDownloadWhiteFigure,
  restart,
} from "../../../Redux/Slice/EatenfiguresSlice";
import { useBeforeUnload, useNavigate } from "react-router-dom";
import { ModalChekmate } from "../Modals/ModalCheckmate";
import { BoardTS } from "../../../Common/types/boardTS";
import SettingsGameModal from "../Modals/ModalSettings";
import { addBlackTymer, addWhiteTymer } from "../../../Redux/Slice/TymerSlice";
import CellComponent from "./CellComponent";
import EatenFigure from "./EatenFigure";
import Tymer from "./Tymer";

const BoardComponent = () => {
  const { board, walkingFigure } = useSelector(
    (state: RootState) => state.cell
  ); //исходный массив  и ходящие фигуры
  const { startTymer,whiteTymer } = useSelector(
    (state: RootState) => state.tymerSlice
  ); 
  const [addBoard,cells]=useAddBoard("chess")
const navigate = useNavigate()
  const { whiteFigure, blackFigure } = useSelector(
    (state: RootState) => state.eatenFigures
  ); //массивы съеденных фигур
  const dispatch = useDispatch();

  const [currentFigure, setCurrentFigure] = useState<any>(); //текущая выбранная фигура
  const [returnFigure, setReturnFigure] = useState(false); //boolean флаг отвечающий за возврат фигуры
  const [restartBoard, setRestartBoard] = useState(false); //boolean флаг отвечающий за обновление доски
  const [currentFigurMove, setCurrentFigurMove] = useState<any>(); //ячейка,по которой хотят сходить
  const [check, setCheck] = useState<any>(); //шах
  const [checkmate, setCheckmate] = useState<string>(""); //мат
  const [rokirovka, setRokirovka] = useState<boolean>(); //рокировка
  const [restartTymer, setRestartTymer] = useState<boolean>(false); //обновление таймера
 // const [startTymer, setStartTymer] = useState<boolean>(false); //старт таймера
  //const [tymer,setTymer]=useState<number|null>(null)
  const [possibleMoves,setPossibleMoves]=useState<boolean>(true)//возможность ходов
  const [possibleEatenFigures,setPossibleEatenFigures]=useState<boolean>(true)//возможно съеденные фигуры
  
  const[activeSettingsModal,setActiveSettingsModal]=useState<boolean>(true)
  useBeforeUnload((event: BeforeUnloadEvent) => {
    event.preventDefault();
    sessionStorage.setItem("board", JSON.stringify(board));
    sessionStorage.setItem("moveFigur", walkingFigure);
    sessionStorage.setItem("whiteFigureEaten", JSON.stringify(whiteFigure));

    console.log("blackFigure", blackFigure);

    debugger;
    sessionStorage.setItem("blackFigureEaten", JSON.stringify(blackFigure));
  }); // при обновлении страницы запрашиваются данные из sessionStorage

  useEffect(() => {
 if (board.length < 1) {
      let resultBoard = JSON.parse(sessionStorage.getItem("board") || "[]");
      let moveFigure = sessionStorage.getItem("moveFigur");
      let whiteFigureEatenResult = JSON.parse(sessionStorage.getItem("whiteFigureEaten") || "[]" );
      let blackFigureEatenResult = JSON.parse(sessionStorage.getItem("blackFigureEaten") || "[]" );
      let white= JSON.parse(sessionStorage.getItem("whiteTymer")||"[]")
     let black=JSON.parse(sessionStorage.getItem("blackTymer")||"[]")
      if (!resultBoard || resultBoard.length < 1) {
        addBoard()
        dispatch(addCell(cells));

    //    addBoard(dispatch);
      } else {
        setActiveSettingsModal(false)
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
        if (!whiteTymer&&white&&black) {
       //  setTymer(white)
       //  setStartTymer(true)
       dispatch(addWhiteTymer(white))
       dispatch(addBlackTymer(black))
      
         }
         setRestartBoard(true)
      }
    }
  }, [board,dispatch]);//создание доски

  useEffect(() => {
    if (currentFigurMove) {
      proverkaWax(board, currentFigurMove, dispatch, setCheck, setCheckmate);
    }
  }, [board,currentFigurMove,dispatch]);//при изменение доски проверяется на шах
  const highLightCells = (selectedFigur: BoardTS) => {
    MovingShapes(
      dispatch,
      board,
      selectedFigur,
      setCurrentFigure,
      currentFigure,
      setCurrentFigurMove,
      setReturnFigure,
      walkingFigure,
      setRestartBoard,
      setRokirovka,
      checkmate
    );
  }; //метод, который при клике изменяет доску
  const restartGame = () => {
    addBoard()

    dispatch(addCell(cells));

   // addBoard(dispatch);
    dispatch(restart());
    dispatch(addWalkFigure("white"));

    setRestartBoard(false);
    setCurrentFigure(null);
    setCheck("");
    setCheckmate("");
    setRestartTymer(false);
    sessionStorage.removeItem("board");
    sessionStorage.removeItem("moveFigur");
    sessionStorage.removeItem("whiteFigureEaten");
    sessionStorage.removeItem("blackFigureEaten");
    sessionStorage.removeItem("whiteTymer");
    sessionStorage.removeItem("blackTymer");
   // setStartTymer(false);
    setActiveSettingsModal(true)
    setPossibleMoves(true)
    setPossibleEatenFigures(true)
   dispatch(addWhiteTymer(null))
       dispatch(addBlackTymer(null))
  };//обновление игры

  if (rokirovka === true) {
    setTimeout(() => {
      setRokirovka(false);
    }, 2000);
  }
  const exist = ()=>{
    navigate(-1)
    restartGame()
  }
  return (
    <div className="wrapper">
      <div className="board">
        {board.map((item: BoardTS[], index: number) => (
          <React.Fragment key={index}>
            {item.map(
              (
                cell: { x: number; y: number; figure: { logo: string } | null },
                index: number
              ) => (
                <CellComponent
                possibleMoves={possibleMoves}
                possibleEatenFigures={possibleEatenFigures}
                  selectFigure={currentFigure}
                  highLightCells={highLightCells}
                  currentFigure={
                    cell?.figure &&
                    cell?.x === currentFigure?.x &&
                    cell?.y === currentFigure?.y
                  }
                  key={index}
                  cell={cell}
                />
              )
            )}
          </React.Fragment>
        ))}
        {!!activeSettingsModal&&        <SettingsGameModal
         possibleMoves={possibleMoves}
         possibleEatenFigures={possibleEatenFigures}
        setPossibleMoves={setPossibleMoves} 
        setPossibleEatenFigures={setPossibleEatenFigures}
        activeSettingsModal={activeSettingsModal} setActiveSettingsModal={setActiveSettingsModal}/>
}
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
          {whiteTymer!==null&& whiteTymer>0 ? (
            <Tymer
              currentFigure={currentFigure}
              move={walkingFigure}
              restartTymer={restartTymer}
              setRestartTymer={setRestartTymer}
              startTymer={startTymer}
              checkmate={checkmate}
              setCheckmate={setCheckmate}
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

        {check ? (
          check.color === "black" ? (
            <span style={{ color: "red" }}>Черным фигурам шах!</span>
          ) : (
            <span style={{ color: "red" }}>Белым фигурам шах!</span>
          )
        ) : (
          ""
        )}

        <div className="">
          {checkmate !== "" ? (
            <span style={{ color: "red" }}>{checkmate} </span>
          ) : (
            ""
          )}
        </div>
         <div className="">
          {(blackFigure && blackFigure.length > 0) ||
          (whiteFigure && whiteFigure.length > 0) ? (
            <>
            <h5>Съеденные фигуры:</h5>
            <EatenFigure whiteFigure={whiteFigure} blackFigure={blackFigure}/>
            </>
          ) : ("")}
          
        </div>
        {!!returnFigure && (
          <>
            
                <ReplaseShapeModal
                  returnFigure={returnFigure}
                 
                  selectedCell={currentFigure}
                  setReturnFigure={setReturnFigure}
                />
              
          </>
        )}

        {checkmate !== "" && <ModalChekmate checkmate={checkmate} />}

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
      <div className="exit"> <img className="exit_logo" onClick={exist} src={logoutIcons} alt=""  />  
</div>
    </div>
  );
};
export default BoardComponent;
