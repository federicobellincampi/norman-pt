import { Action, createReducer, on } from '@ngrx/store';
import * as SaveChangesActions from '../actions/save-changes.actions';

export interface SaveChangesState {
    buttonDisable: string;
}

export const initialState: SaveChangesState = {
    buttonDisable: "true",
};

const saveChangesReducer = createReducer(
    initialState,
    on(SaveChangesActions.buttonDisable, (state, action) => ({ 
        ...state, 
        buttonDisable: "true"
    })),
    on(SaveChangesActions.buttonActive , (state, action) => ({ 
        ...state, 
        buttonDisable: "false"
     })),
    on(SaveChangesActions.saveChanges , (state, action) => ({ 
        ...state, 
        buttonDisable: "true"
    })),

);

export function reducer(state: SaveChangesState | undefined, action: Action) {
    return saveChangesReducer(state, action);
}
