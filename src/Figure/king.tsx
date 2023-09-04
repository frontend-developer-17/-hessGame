import blackFigure from "../assets/ImageFigure/black-king.png"
import whiteFigure from "../assets/ImageFigure/white-king.png"
import { ColorCell } from "../types/CellTS"

export const King= (color:any)=>{
    debugger
    let logo =color===ColorCell.BLACK?blackFigure:whiteFigure
return {logo,color,name:"King",activeEat:false}

}