import { createSelector } from "@ngrx/store";
import { InitAppFlowState, selectInitAppFlow } from "../reducers";

export const getGoalTrainingState = createSelector(
    selectInitAppFlow,
    (state: InitAppFlowState) => state.goalTraining
)

export const getMuscleMassSelected = createSelector(
    selectInitAppFlow,
    (state: InitAppFlowState) => state.goalTraining.muscleMassSelected
);

export const getToningSelected = createSelector(
    selectInitAppFlow,
    (state: InitAppFlowState) => state.goalTraining.toningSelected
);

export const getLoseWeightSelected = createSelector(
    selectInitAppFlow,
    (state: InitAppFlowState) => state.goalTraining.loseWeightSelected
);