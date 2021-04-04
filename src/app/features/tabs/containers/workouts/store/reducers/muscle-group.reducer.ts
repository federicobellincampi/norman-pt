import { Action, createReducer, on } from "@ngrx/store";
import * as MuscleGroupActions from '../actions/muscle-group.actions';

export interface MuscleGroup {
    muscleGroupSelected?: string;
    imgUrl: string;
    levelSelected?: string;
}

export const initialState: MuscleGroup = {
    imgUrl: '',
}

const CardsTrainingReducer = createReducer(
    initialState,
    on(MuscleGroupActions.muscleGroupSelected, (state, action) => (
        { 
            ...state, 
            muscleGroupSelected: action.muscleGroupSelected ,
            imgUrl: action.imgUrl 
    })),
    on(MuscleGroupActions.levelSelected, (state, action) => (
        { 
            ...state, 
            levelSelected: action.levelSelected 
    })),
)

export function reducer(state: MuscleGroup | undefined, action: Action) {
    return CardsTrainingReducer(state, action);
  }
  