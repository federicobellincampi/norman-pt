import { createSelector } from "@ngrx/store";
import { selectWorkoutsState, WorkoutsState } from "../reducers";

export const getLevels = createSelector(
    selectWorkoutsState,
    (state: WorkoutsState) => state.levels.levels
)