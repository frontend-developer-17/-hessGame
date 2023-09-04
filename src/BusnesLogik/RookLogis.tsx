
export const horisontal = (board: any, selectedFigur: any) => {
  let array = [];
  if (board[selectedFigur.x][selectedFigur.y]) {
    let x = selectedFigur.x;
    for (let y = selectedFigur.y + 1; y < 8; y++) {
      if (!board[x][y].figure) {
        array.push({ x, y });
      } else if (board[x][y].figure.color !== selectedFigur.figure.color) {
        array.push({ x, y });
        break;
      } else if (board[x][y].figure.color === selectedFigur.figure.color) {
        break;
      }
    }

    for (let y = selectedFigur.y - 1; y > -1; y--) {
      if (!board[x][y].figure) {
        array.push({ x, y });
      } else if (board[x][y].figure.color !== selectedFigur.figure.color) {
        array.push({ x, y });
        break;
      } else if (board[x][y].figure.color === selectedFigur.figure.color) {
        break;
      }
    }
    return array;
  }
};

export const vertical = (board: any, selectedFigur: any) => {
  let array = [];
  if (board[selectedFigur.x][selectedFigur.y]) {
    let y = selectedFigur.y;
    for (let x = selectedFigur.x + 1; x < 8; x++) {
      if (!board[x][y].figure) {
        array.push({ x, y });
      } else if (board[x][y].figure.color !== selectedFigur.figure.color) {
        array.push({ x, y });
        break;
      } else if (board[x][y].figure.color === selectedFigur.figure.color) {
        break;
      }
    }
    for (let x = selectedFigur.x - 1; x > -1; x--) {
      if (!board[x][y].figure) {
        array.push({ x, y });
      } else if (board[x][y].figure.color !== selectedFigur.figure.color) {
        array.push({ x, y });
        break;
      } else if (board[x][y].figure.color === selectedFigur.figure.color) {
        break;
      }
    }
  }
  return array;
};

export const RookLogis = (selectedFigur: any, board: any) => {
  let array: any = [];
  let eatKing:any=[]

  let moveHorisontal: any = horisontal(board, selectedFigur);
  let moveVertical: any = vertical(board, selectedFigur);

  moveHorisontal.forEach((item:any)=>{
    if (board[item.x][item.y].figure&&board[item.x][item.y].figure.name==="King" ) {
      eatKing=moveHorisontal
    
    }
  })

  moveVertical.forEach((item:any)=>{
    if (board[item.x][item.y].figure&&board[item.x][item.y].figure.name==="King" ) {
      eatKing=moveVertical
    
    }
  })
 
  array.push(...moveHorisontal, ...moveVertical);

  return {array,eatKing};
};
