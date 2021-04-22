import { createSelector } from "@ngrx/store";
import { selectWorkoutsState, WorkoutsState } from "../reducers";

export const getExercieses = createSelector(
    selectWorkoutsState,
    (state: WorkoutsState) => state.exercises.exercises
)