import blackFigure from "../../../assets/ImageFigure/black-pawn.png"
import whiteFigure from "../../../assets/ImageFigure/white-pawn.png"
import { ColorCell } from "../../../Common/types/ColorCellTS"

export const Peshka = (color:any)=>{
    debugger
    let logo =color===ColorCell.BLACK?blackFigure:whiteFigure

return {name:"Peshka",logo,color,activeEatPeshka:false}

}