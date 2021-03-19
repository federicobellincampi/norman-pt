import { createSelector } from "@ngrx/store";
import { InitAppFlowState, selectInitAppFlow } from "../reducers";

export const getGenderState = createSelector(
    selectInitAppFlow,
    (state: InitAppFlowState) => state.gender
);

export const getManSelected = createSelector(
    selectInitAppFlow,
    (state: InitAppFlowState) => state.gender.manSelected
);

export const getWomanSelected = createSelector(
    selectInitAppFlow,
    (state: InitAppFlowState) => state.gender.womanSelected
);