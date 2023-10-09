export const KingLogic = (selectedFigur:any,board:any)=>{

let array:any = []
if (selectedFigur.figure.color==="black") {
    if (selectedFigur.count==false&& board[0][7].count==false) {
        if (!board[0][5].figure&&!board[0][6].figure) {
            array.push({x:0,y:6})
        }
    }

    if (selectedFigur.count==false&& board[0][0].count==false) {
        if (!board[0][1].figure&&!board[0][2].figure&&!board[0][3].figure) {
            array.push({x:0,y:2})
        }
    }
}else{
    if (selectedFigur.count==false&& board[7][7].count==false) {
        if (!board[7][5].figure&&!board[7][6].figure) {
            array.push({x:7,y:6})
        }
    }

    if (selectedFigur.count==false&& board[7][0].count==false) {
        if (!board[7][1].figure&&!board[7][2].figure&&!board[7][3].figure) {
            array.push({x:7,y:2})
        }
    }
}



const move = (x:number,y:number)=>{
    if (board[x]&&board[y]) {
if (!board[x][y].figure) {
    array.push({x,y})
}else if(board[x][y].figure.color!==selectedFigur.figure.color){
    array.push({x,y})

}
      
   }
}
move(selectedFigur.x+1,selectedFigur.y)
move(selectedFigur.x+1,selectedFigur.y+1)
move(selectedFigur.x,selectedFigur.y+1)
move(selectedFigur.x-1,selectedFigur.y+1)
move(selectedFigur.x-1,selectedFigur.y)
move(selectedFigur.x,selectedFigur.y-1)
move(selectedFigur.x-1,selectedFigur.y-1)
move(selectedFigur.x+1,selectedFigur.y-1)


return array
}