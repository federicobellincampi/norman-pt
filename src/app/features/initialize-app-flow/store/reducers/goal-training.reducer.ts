import { Action, createReducer, on } from "@ngrx/store"
import * as GaolTrainingActions from '../actions/goal-training.actions';

export interface GoalTrainingState {
    muscleMassSelected: boolean;
    toningSelected: boolean;
    loseWeightSelected: boolean;
}

export const initialGoalTrainingState: GoalTrainingState = {
    muscleMassSelected: false,
    toningSelected: false,
    loseWeightSelected: false
}

const GoalTrainingReducer = createReducer (
    initialGoalTrainingState,
    on(GaolTrainingActions.muscleMassSelected, (state, action) => ({ 
        ...state,
        muscleMassSelected: true, 
        toningSelected: false,
        loseWeightSelected: false
    })),
    on(GaolTrainingActions.toningSelected, (state, action) => ({ 
        ...state, 
        muscleMassSelected: false, 
        toningSelected: true,
        loseWeightSelected: false
    })),
    on(GaolTrainingActions.loseWeightSelected, (state, action) => ({ 
        ...state, 
        muscleMassSelected: false, 
        toningSelected: false,
        loseWeightSelected: true
    }))
)

export function reducer(state: GoalTrainingState | undefined, action: Action) {
    return GoalTrainingReducer(state, action);
  }