export const KnightAvalib = (selectedFigur: any,board:any) => {


let array:any=[]
  const move = (x: number, y: number) => {
    if (board[x] && board[y] ) {
      if (board[x][y].figure) {
        if (selectedFigur.figure.color!==board[x][y].figure.color) {
          array.push({x,y})
        }
      }else{
        array.push({x,y})

      }
    }
  };

move(selectedFigur.x-2,selectedFigur.y + 1)
move(selectedFigur.x-2,selectedFigur.y-1)
move(selectedFigur.x + 1,selectedFigur.y - 2)
move(selectedFigur.x + 1,selectedFigur.y + 2)
move(selectedFigur.x - 1,selectedFigur.y + 2)
move(selectedFigur.x - 1,selectedFigur.y - 2)
move(selectedFigur.x+2,selectedFigur.y - 1)
move(selectedFigur.x+2,selectedFigur.y + 1)
  
  return array
};
