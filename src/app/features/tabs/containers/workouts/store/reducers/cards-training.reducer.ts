import { Action, createReducer, on } from "@ngrx/store";
import { CardRepsLevelModel, ExerciseModel, LevelModel, MuscleGroupModel } from "../../../../../../models/muscle-group";
import * as CardsTrainingActions from '../actions/cards-training.actions';


export interface CardsTrainingState {
    loaded: boolean;
    error?: boolean;
    cards?: MuscleGroupModel[];
}

export const initialState: CardsTrainingState = {
    loaded: false
}

const CardsTrainingReducer = createReducer(
    initialState,
    on(CardsTrainingActions.loadCardsTraining, (state, action) => ({ ...state, loaded: false, error: false })),
    on(CardsTrainingActions.loadCardsTrainingSuccess, (state, action) => ({ 
        ...state, 
        loaded: true, 
        error: false, 
        cards: action.cards,
    })),
)

export function reducer(state: CardsTrainingState | undefined, action: Action) {
    return CardsTrainingReducer(state, action);
  }
  