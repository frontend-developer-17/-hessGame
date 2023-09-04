
const CeilComponent: React.FC<any> = ({
  cell,
  selected,
  highLightCells,
}) => {
  debugger
  return (
    <>
      {
        <div className={`${selected ? "active" : cell.color}`}>
         
          <div
            style={ { background: cell.avalibel && cell.figure ? "green" : "",backgroundColor: cell.figure&&cell.figure.name==="King" && cell.figure.activeEat ? "red":"" }}
            
            onClick={() => highLightCells(cell)}
            className='cell'
          >
            {cell?.figure?.logo && <img  src={cell?.figure?.logo} alt="" />}
            <div
              className={`${cell.avalibel && !cell.figure ? "avalibel" : ""}`}
            ></div>
          </div>
        </div>
      }
    </>
  );
};
export default CeilComponent;
