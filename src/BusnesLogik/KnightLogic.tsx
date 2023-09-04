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
  // const figureColorEat = (currentFigure: any, target: any) => {
  //   if (currentFigure.figure.color !== target.figure.color) {
  //     return true;
  //   }
  //   return false;
  // };
  // const figureProv = (a: any, b: any) => {
  //   let x = props.target.x;
  //   let y = props.target.y;
  //   if (a === x && b === y) {
  //     return true;
  //   }
  //   return false;
  // };

  // const proverka = (a: any, b: any) => {
  //   if (figureProv(a, b)) {
  //     if (props.target.figure) {
  //       if (figureColorEat(props.selectedFigur, props.target)) {
  //         return { a, b };
  //       }
  //     } else {
  //       return { a, b };
  //     }
  //   }
  // };
  // let a!: number;
  // let b!: number;
  // let c!: number;
  // let d!: number;
  // let e!: number;
  // let f!: number;
  // let g!: number;
  // let l!: number;

  // if (props.selectedFigur?.figure?.color == "white") {
  //   let res1 = proverka(props.selectedFigur.x - 2, props.selectedFigur.y + 1);
  //   let res2 = proverka(props.selectedFigur.x - 2, props.selectedFigur.y - 1);
  //   let res3 = proverka(props.selectedFigur.x + 1, props.selectedFigur.y - 2);
  //   let res4 = proverka(props.selectedFigur.x + 1, props.selectedFigur.y + 2);
  //   let res5 = proverka(props.selectedFigur.x - 1, props.selectedFigur.y + 2);
  //   let res6 = proverka(props.selectedFigur.x - 1, props.selectedFigur.y - 2);
  //   let res7 = proverka(props.selectedFigur.x + 2, props.selectedFigur.y - 1);
  //   let res8 = proverka(props.selectedFigur.x + 2, props.selectedFigur.y + 1);

  //   if (res1) {
  //     a = res1.a;
  //     b = res1.b;
  //   }
  //   if (res2) {
  //     a = res2.a;
  //     c = res2.b;
  //   }
  //   if (res3) {
  //     d = res3.a;
  //     f = res3.b;
  //   }
  //   if (res4) {
  //     d = res4.a;
  //     e = res4.b;
  //   }
  //   if (res5) {
  //     g = res5.a;
  //     e = res5.b;
  //   }
  //   if (res6) {
  //     g = res6.a;
  //     f = res6.b;
  //   }
  //   if (res7) {
  //     l = res7.a;
  //     c = res7.b;
  //   }
  //   if (res8) {
  //     l = res8.a;
  //     b = res8.b;
  //   }
  // } else {
  //   let res1 = proverka(props.selectedFigur.x + 2, props.selectedFigur.y - 1);
  //   let res2 = proverka(props.selectedFigur.x + 2, props.selectedFigur.y + 1);
  //   let res3 = proverka(props.selectedFigur.x - 1, props.selectedFigur.y + 2);
  //   let res4 = proverka(props.selectedFigur.x - 1, props.selectedFigur.y - 2);
  //   let res5 = proverka(props.selectedFigur.x + 1, props.selectedFigur.y - 2);
  //   let res6 = proverka(props.selectedFigur.x + 1, props.selectedFigur.y + 2);
  //   let res7 = proverka(props.selectedFigur.x - 2, props.selectedFigur.y + 1);
  //   let res8 = proverka(props.selectedFigur.x - 2, props.selectedFigur.y - 1);

  //   if (res1) {
  //     a = res1.a;
  //     b = res1.b;
  //   }
  //   if (res2) {
  //     a = res2.a;
  //     c = res2.b;
  //   }
  //   if (res3) {
  //     d = res3.a;
  //     f = res3.b;
  //   }
  //   if (res4) {
  //     d = res4.a;
  //     e = res4.b;
  //   }
  //   if (res5) {
  //     g = res5.a;
  //     e = res5.b;
  //   }
  //   if (res6) {
  //     g = res6.a;
  //     f = res6.b;
  //   }
  //   if (res7) {
  //     l = res7.a;
  //     c = res7.b;
  //   }
  //   if (res8) {
  //     l = res8.a;
  //     b = res8.b;
  //   }
  // }

  // return { a, b, c, d, e, f, g, l };
  return array
};
