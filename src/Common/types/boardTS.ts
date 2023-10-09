export interface BoardTS {
avalibel: boolean;
color: string;
count: boolean;
figure:FigureTS|null;
x: number;
y: number
}


export interface FigureTS{
    logo:string;
    color:string;
    name:string;
    activeEat?: boolean;
    activeEatPeshka?:boolean
}
export interface eatenFiguresInitial {
    whiteFigure: [
        { eatenFigura: FigureTS; count: number; } 
    ]|[],
    blackFigure: [ { eatenFigura: FigureTS; count: number; } ]|[],
    newFigure:[],
    cell:{x:number,y:number}
  }

  export interface IMoveFigure{
    selectedFigur:BoardTS,
    currentFigure:BoardTS
  }
