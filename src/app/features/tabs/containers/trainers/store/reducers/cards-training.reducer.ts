import { Action, createReducer, on } from "@ngrx/store";
import { CardTraining } from "../../../../../../models/card-training.model";
import * as CardsTrainingActions from '../actions/cards-training.actions';


export interface CardsTrainingState {
    loaded: boolean;
    error?: boolean;
    cards?: CardTraining[];
}

export const initialState: CardsTrainingState = {
    loaded: false
}

const CardsTrainingReducer = createReducer(
    initialState,
    on(CardsTrainingActions.loadCardsTraining, (state, action) => ({ ...state, loaded: false, error: false })),
    on(CardsTrainingActions.loadCardsTrainingSuccess, (state, action) => ({ ...state, loaded: true, error: false, cards: action.cards})),
    on(CardsTrainingActions.loadCardsTraining, (state, action) => ({ ...state, loaded: true, error: true }))

)

export function reducer(state: CardsTrainingState | undefined, action: Action) {
    return CardsTrainingReducer(state, action);
  }
  