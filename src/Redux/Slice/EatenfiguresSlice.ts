import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FigureTS, eatenFiguresInitial } from "../../Common/types/boardTS";

const initialState: eatenFiguresInitial = {
  whiteFigure:  [],
  blackFigure:  [],

  newFigure: [],
  cell: {x:0,y:0},
};

export const eatenFiguresSlice = createSlice({
  name: "eatenFigures",
  initialState,
  reducers: {
    addWhiteFigure: (state, action: PayloadAction<FigureTS>) => {
      let eatenFigura = action.payload;
      let matchingShapes = false;
      let indexFigur!: number;
      if (state.whiteFigure?.length > 0) {
        state.whiteFigure?.forEach((item: any, index: number) => {
          debugger;
          debugger;
          if (item.eatenFigura.name === eatenFigura.name) {
            debugger;
            matchingShapes = true;
            indexFigur = index;
          }
          debugger;
        });
        debugger;
        if (!!matchingShapes) {
          state.whiteFigure[indexFigur].count++;
        } else {
          //@ts-ignore
          state.whiteFigure?.push({ eatenFigura, count: 1 });
        }
      } else {
        debugger;
        //@ts-ignore

        state.whiteFigure?.push({ eatenFigura, count: 1 });
      }
    },
    addBlackFigure: (state, action: PayloadAction<FigureTS>) => {
      debugger;
      let eatenFigura = action.payload;
      let matchingShapes = false;
      let indexFigur!: number;
      debugger;
      if (state.blackFigure.length > 0) {
        state.blackFigure?.forEach((item: any, index: number) => {
          if (item.eatenFigura.name === eatenFigura.name) {
            matchingShapes = true;
            indexFigur = index;
          }
        });
        if (!!matchingShapes) {
          state.blackFigure[indexFigur].count++;
        } else {
          //@ts-ignore

          state.blackFigure?.push({ eatenFigura, count: 1 });
        }
      } else {
        debugger;
        //@ts-ignore

        state.blackFigure?.push({ eatenFigura, count: 1 });
      }
    },

    addNewFigure: (state, action) => {
      state.newFigure = action.payload;
    },
    addCellFigure: (state, action) => {
      state.cell = action.payload;
    },

    restart: (state) => {
      state.whiteFigure = [];
      state.blackFigure = [];
    },
    beforeDownloadWhiteFigure: (state, action) => {
      state.whiteFigure = action.payload;
    },
    beforeDownloadBlackFigure: (state, action) => {
      state.blackFigure = action.payload;
    },
  },
});
export const {
  addWhiteFigure,
  addBlackFigure,
  addNewFigure,
  addCellFigure,
  restart,
  beforeDownloadWhiteFigure,
  beforeDownloadBlackFigure,
} = eatenFiguresSlice.actions;

export default eatenFiguresSlice.reducer;
