
export const PawnAvalib = (selectedFigur: any, board: any) => {
  let array = [];

  const move = (x: number, y: number) => {
    if (board[x] && board[y] && board[x][y].figure) {
      if (board[x][y].figure.color !== selectedFigur.figure.color) {
        array.push({ x, y });
      }
    }
  };




  if (selectedFigur.figure.color === "white") {
    move(selectedFigur.x - 1, selectedFigur.y + 1);
    move(selectedFigur.x - 1, selectedFigur.y - 1);
  } else {
    move(selectedFigur.x + 1, selectedFigur.y + 1);
    move(selectedFigur.x + 1, selectedFigur.y - 1);
  }

  if (selectedFigur.figure.color == "white") {
    let x = selectedFigur.x - 1;
    let y = selectedFigur.y;
   
    if (board[x]&&board[y]&&!board[x][y].figure) {
      array.push({ x, y });

    }
    if (!selectedFigur.count) {
      if ( board[x]&&board[y]&&!board[x][y].figure ) {
        let x = selectedFigur.x - 2;
        let y = selectedFigur.y;
        if (board[x]&&board[y]&&!board[x][y].figure) {
          array.push({ x, y });
  
        }
      }
     
    }
  } else {
    let x:number = selectedFigur.x + 1;
    let y:number = selectedFigur.y;
    if (board[x]&&board[y]&&!board[x][y].figure) {
      array.push({ x, y });

    }
    if (!selectedFigur.count) {
      if ( board[x]&&board[y]&&!board[x][y].figure ) {
        let x = selectedFigur.x + 2;
        let y = selectedFigur.y;
        if (board[x]&&board[y]&&!board[x][y].figure) {
          array.push({ x, y });
  
        }

      }
     
    }
  }
  return array;

};
