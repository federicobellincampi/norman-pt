import { Action, createReducer, on } from "@ngrx/store";
import { LevelModel } from "../../../../../../models/muscle-group"
import * as LevelsActions from '../actions/levels.actions';

export interface LevelsState {
    loaded: boolean;
    levels?: LevelModel;
}

export const initialState: LevelsState = {
    loaded: false
}

const LevelsReducer = createReducer(
    initialState,
    on(LevelsActions.loadLevels, (state, action) => ({ ...state, loaded: false })),
    on(LevelsActions.loadLevelsSuccess, (state, action) => ({ ...state, loaded: true, levels: action.levels[0] })),
)

export function reducer(state: LevelsState | undefined, action: Action) {
    return LevelsReducer(state, action);
}
  