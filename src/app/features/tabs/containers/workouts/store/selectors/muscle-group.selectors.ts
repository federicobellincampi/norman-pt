import { createSelector } from "@ngrx/store";
import { selectWorkoutsState, WorkoutsState } from "../reducers";

export const getMuscleGroupSelected = createSelector(
    selectWorkoutsState,
    (state: WorkoutsState) => state.muscleGroup.muscleGroupSelected
)

export const getLevelSelected = createSelector(
    selectWorkoutsState,
    (state: WorkoutsState) => state.muscleGroup.levelSelected
)
