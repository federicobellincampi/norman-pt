import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { reducer as uiReducer, UiState } from './ui.reducer';
import { reducer as genderReducer, GenderState } from './gender.reducer';
import { reducer as goalTrainingReducer, GoalTrainingState } from './goal-training.reducer';

export interface InitAppFlowState {
    ui: UiState;
    gender: GenderState;
    goalTraining: GoalTrainingState;
}

export const reducers: ActionReducerMap<InitAppFlowState> =  {
    ui: uiReducer,
    gender: genderReducer,
    goalTraining: goalTrainingReducer
};

export const selectInitAppFlow =
    createFeatureSelector<InitAppFlowState>('initAppFlow');
