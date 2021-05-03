import { Action, createReducer, on } from '@ngrx/store';
import * as ProfileActions from './profile.actions';

export interface ProfileState {
    gender: 'uomo' | 'donna';
    goalTraining: 'massa muscolare' | 'perdere peso' | 'tonificarsi';
}

export const initialState: ProfileState = {
    gender: null,
    goalTraining: null
};

const clientReducer = createReducer(
    initialState,
    on(ProfileActions.saveProfileGender, (state, action) => ({ 
        ...state, 
        gender: action.gender,    
    })),
    on(ProfileActions.saveProfileGoalTraining , (state, action) => ({ ...state, goalTraining: action.goalTraining })),
    on(ProfileActions.loadProfile , (state, action) => ({ ...state, gender: action.user.gender, goalTraining: action.user.goalTraining })),
);

export function reducer(state: ProfileState | undefined, action: Action) {
    return clientReducer(state, action);
}
