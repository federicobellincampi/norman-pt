import { createSelector } from '@ngrx/store';
import { AppState } from '../../core.module';
import { ProfileState } from './profile.reducer';

export const selectUser = (state: AppState) => state.profile

export const getProfile = createSelector(
    selectUser,
    (state: ProfileState) => state
);

export const getGenderProfile = createSelector(
    selectUser,
    (state: ProfileState) => state.gender
);

export const getGoalTrainingProfile = createSelector(
    selectUser,
    (state: ProfileState) => state.goalTraining
);