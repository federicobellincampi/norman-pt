import { Action, createReducer, on } from "@ngrx/store"
import * as GenderActions from "../actions/gender.actions";

export interface GenderState {
    manSelected: boolean
    womanSelected: boolean
}

export const initialUiState: GenderState = {
    manSelected: false,
    womanSelected: false
}

const footerReducer = createReducer (
    initialUiState,
    on(GenderActions.manSelected, (state, action) => ({ ...state, manSelected: true, womanSelected: false})),
    on(GenderActions.womanSelected, (state, action) => ({ ...state, manSelected: false, womanSelected: true}))
)

export function reducer(state: GenderState | undefined, action: Action) {
    return footerReducer(state, action);
  }