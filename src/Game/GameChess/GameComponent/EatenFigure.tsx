import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../Redux/store';

const EatenFigure:React.FC<any> = ({whiteFigure,blackFigure}) => {
  return (
    <div>
       <div className="">
        
          {whiteFigure.length>0?
          
     
          <div className="menu_eatenFigure_blokWhite">
           
              <>
                {whiteFigure &&
                  whiteFigure.map((item: any) => (



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
           
          </div>
        : ""
       }
       {blackFigure.length>0?
        <div className="menu_eatenFigure_blokBlack">
         
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
     
    </div>:""}
          
    </div>
    </div>
  )
}

export default EatenFigure
