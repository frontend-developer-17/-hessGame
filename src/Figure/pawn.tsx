import blackFigure from "../assets/ImageFigure/black-pawn.png"
import whiteFigure from "../assets/ImageFigure/white-pawn.png"
import { ColorCell } from "../types/CellTS"

export const Pawn = (color:any)=>{
    debugger
    let logo =color===ColorCell.BLACK?blackFigure:whiteFigure

return {logo,color,name:"Pawn"}

}