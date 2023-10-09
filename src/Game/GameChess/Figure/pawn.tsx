import blackFigure from "../../../assets/ImageFigure/black-pawn.png"
import whiteFigure from "../../../assets/ImageFigure/white-pawn.png"
import { ColorCell } from "../../../Common/types/ColorCellTS"

export const Pawn = (color:any)=>{
    debugger
    let logo =color===ColorCell.BLACK?blackFigure:whiteFigure

return {logo,color,name:"Pawn"}

}