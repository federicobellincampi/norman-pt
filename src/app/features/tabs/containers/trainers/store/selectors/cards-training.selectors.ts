import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CardsTrainingState } from "../reducers/cards-training.reducer";

export const cardsTrainerSelector = createFeatureSelector<CardsTrainingState>('cards-training');

export const getCardsTrainer = createSelector(
    cardsTrainerSelector,
    (state: CardsTrainingState) => state.cards
)

