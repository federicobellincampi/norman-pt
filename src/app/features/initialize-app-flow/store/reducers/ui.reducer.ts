import { Action, createReducer, on } from "@ngrx/store"
import * as UiActions from "../actions/ui.actions";

export interface UiState {
    footerDisable: boolean
}

export const initialUiState: UiState = {
    footerDisable: true,
}

const footerReducer = createReducer (
    initialUiState,
    on(UiActions.footerActive, (state, action) => ({ ...state, footerDisable: false})),
    on(UiActions.footerDisable, (state, action) => ({ ...state, footerDisable: true})),
)

export function reducer(state: UiState | undefined, action: Action) {
    return footerReducer(state, action);
  }