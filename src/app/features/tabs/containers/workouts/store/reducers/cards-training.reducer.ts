import { Action, createReducer, on } from "@ngrx/store";
import { CardRepsLevelModel, ExerciseModel, LevelModel, MuscleGroupModel } from "../../../../../../models/muscle-group";
import * as CardsTrainingActions from '../actions/cards-training.actions';


export interface CardsTrainingState {
    loaded: boolean;
    error?: boolean;
    cards?: MuscleGroupModel[];
    exercises?: ExerciseModel[][];
    cardRepsLevel?: CardRepsLevelModel;
    cardLevels?: any;
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
    on(CardsTrainingActions.loadCardsTraining, (state, action) => ({ ...state, loaded: true, error: true })),
    on(CardsTrainingActions.loadExercisesSuccess, (state, action) => ({ ...state, exercises: action.exercies })),
    on(CardsTrainingActions.loadCardRepsLevelSuccess, (state, action) => ({ ...state, cardRepsLevel: action.repsLevel })),
    on(CardsTrainingActions.loadCardLevelsSuccess, (state, action) => ({ ...state, cardLevels: action.cardLevels[0] }))

)

export function reducer(state: CardsTrainingState | undefined, action: Action) {
    return CardsTrainingReducer(state, action);
  }
  