import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { CardsTrainingState, reducer as cardsTrainingReducer } from './cards-training.reducer';
import { MuscleGroup, reducer as muscleGroupReducer } from './muscle-group.reducer';
import { LevelsState, reducer as levelsReducer } from './levels.reducer';


export interface WorkoutsState {
    cardsTraining: CardsTrainingState;
    muscleGroup: MuscleGroup;
    levels: LevelsState;
}

export const reducers: ActionReducerMap<WorkoutsState> =  {
    cardsTraining: cardsTrainingReducer,
    muscleGroup: muscleGroupReducer,
    levels: levelsReducer
};

export const selectWorkoutsState =
    createFeatureSelector<WorkoutsState>('workouts');
