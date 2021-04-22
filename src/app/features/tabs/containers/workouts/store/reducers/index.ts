import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { CardsTrainingState, reducer as cardsTrainingReducer } from './cards-training.reducer';
import { MuscleGroup, reducer as muscleGroupReducer } from './muscle-group.reducer';
import { LevelsState, reducer as levelsReducer } from './levels.reducer';
import { ExercisesState, reducer as exercisesReducer } from './exercises.reducer';


export interface WorkoutsState {
    cardsTraining: CardsTrainingState;
    muscleGroup: MuscleGroup;
    levels: LevelsState;
    exercises: ExercisesState
}

export const reducers: ActionReducerMap<WorkoutsState> =  {
    cardsTraining: cardsTrainingReducer,
    muscleGroup: muscleGroupReducer,
    levels: levelsReducer,
    exercises: exercisesReducer
};

export const selectWorkoutsState =
    createFeatureSelector<WorkoutsState>('workouts');
