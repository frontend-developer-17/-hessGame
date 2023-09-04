import blackFigure from "../assets/ImageFigure/black-queen.png"
import whiteFigure from "../assets/ImageFigure/white-queen.png"
import { ColorCell } from "../types/CellTS"

export const Queen = (color:any)=>{
    debugger
    let logo =color===ColorCell.BLACK?blackFigure:whiteFigure
return {logo,color,name:"Queen"}

}