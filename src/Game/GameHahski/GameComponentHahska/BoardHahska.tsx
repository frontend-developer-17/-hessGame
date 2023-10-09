import React, { useState } from 'react'
import useAddBoard from '../../Helpers/useAddBoard'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../Redux/store';
import { BoardTS } from '../../../Common/types/boardTS';
import CellComponent from '../../GameChess/GameComponent/CellComponent';
import { addBoardHaska } from '../../../Redux/Slice/hahskaSlice';
import logoutIcons from "../../../assets/logout_Icon.png"
import { useNavigate } from 'react-router-dom';
import { movingFigure } from '../BusnesLogic/moveFigure';

function BoardHahska() {
  const [addBoard,cells]=useAddBoard("hahska")
  const [currentFigure, setCurrentFigure] = useState<any>(); //текущая выбранная фигура
    const {board,walkingFigure,unFinishedMove}=useSelector((state:RootState)=>state.hahskaBoard)
    const navigate=useNavigate()
    const dispatch=useDispatch()
useEffect(()=>{
    if (board.length<1) {
      addBoard()
       dispatch(addBoardHaska(cells))

    }
},[board,dispatch])

const highLightCells=(selectedFigur:BoardTS)=>{
  movingFigure(board,currentFigure,setCurrentFigure,selectedFigur,walkingFigure,dispatch,unFinishedMove)

}

const exist=()=>{
  navigate(-1)
}
  return (
    <div className="wrapper">
      <div className="board">
        {board.length>1&&board.map((item: BoardTS[], index: number) => (
          <React.Fragment key={index}>
            {item.map(
              (
                cell: { x: number; y: number; figure: { logo: string } | null },
                index: number
              ) => (
                <CellComponent
                possibleMoves={true}
                possibleEatenFigures={true}
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
        </div>
        <div className="exit"> <img className="exit_logo" onClick={exist} src={logoutIcons} alt=""  />  
</div>
        </div>
  )
}

export default BoardHahska
