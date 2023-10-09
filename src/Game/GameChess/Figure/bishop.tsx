import blackFigure from "../../../assets/ImageFigure/black-bishop.png"
import whiteFigure from "../../../assets/ImageFigure/white-bishop.png"
import { ColorCell } from "../../../Common/types/ColorCellTS"

export const Bishop = (color:any)=>{
    let logo =color===ColorCell.BLACK?blackFigure:whiteFigure
return {logo,color,name:"Bishop"}

}
