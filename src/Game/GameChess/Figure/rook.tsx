import blackFigure from "../../../assets/ImageFigure/black-rook.png"
import whiteFigure from "../../../assets/ImageFigure//white-rook.png"
import { ColorCell } from "../../../Common/types/ColorCellTS"

export const Rook = (color:any)=>{
    debugger
    let logo =color===ColorCell.BLACK?blackFigure:whiteFigure
    return{logo,color,name:"Rook"}

}