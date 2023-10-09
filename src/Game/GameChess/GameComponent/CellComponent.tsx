const CellComponent: React.FC<any> = ({
    cell,
    selectFigure,
    possibleMoves,
    possibleEatenFigures,
    highLightCells,
    currentFigure
  }) => {
    return (
      <>
        {
          <div className={`${currentFigure ? "active" : cell.color}`}>
           <div style={{backgroundColor: possibleEatenFigures&&cell.figure?.activeEatPeshka?"green":""}}>
            <div
              style={ { background: possibleEatenFigures&&cell.avalibel && cell.figure ? "green" : "",backgroundColor: cell.figure&&cell.figure.name==="King" && cell.figure.activeEat ? "red":"" }}
              
              onClick={() => highLightCells(cell)}
              className='cell'
            >
              {cell?.figure?.logo && <img  src={cell?.figure?.logo} alt="" />}
              <div
                className={`${possibleMoves&&cell.avalibel && !cell.figure ? "avalibel" : ""}`}
              ></div>
            </div>
            </div>
          </div>
        }
      </>
    );
  };
  export default CellComponent;