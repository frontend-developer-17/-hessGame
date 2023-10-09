import blackFigure from "../../../assets/ImageFigure/black-knight.png"
import whiteFigure from "../../../assets/ImageFigure/white-knight.png"
import { ColorCell } from "../../../Common/types/ColorCellTS"

export const Knight = (color:any)=>{
    debugger
    let logo =color===ColorCell.BLACK?blackFigure:whiteFigure
    
    return {logo,color,name:"Knight"}

}