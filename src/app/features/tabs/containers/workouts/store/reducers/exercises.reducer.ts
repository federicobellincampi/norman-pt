import { Action, createReducer, on } from "@ngrx/store";
import { ExerciseModel } from "../../../../../../models/muscle-group";
import * as ExercisesAction from "../actions/exercises.action";


export interface ExercisesState {
    loaded: boolean;
    exercises?: ExerciseModel[][];
}

export const initialState: ExercisesState = {
    loaded: false
}

const ExercisesReducer = createReducer(
    initialState,
    on(ExercisesAction.loadExercisesSuccess, (state, action) => ({ ...state, exercises: action.exercies })),
    on(ExercisesAction.loadCardRepsLevelSuccess, (state, action) => ({ ...state, cardRepsLevel: action.repsLevel })),
)

export function reducer(state: ExercisesState | undefined, action: Action) {
    return ExercisesReducer(state, action);
  }
  