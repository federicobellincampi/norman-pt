import { createSelector } from "@ngrx/store";
import { selectWorkoutsState, WorkoutsState } from "../reducers";

export const getCardsTrainer = createSelector(
    selectWorkoutsState,
    (state: WorkoutsState) => state.cardsTraining.cards
)

export const getLevelCards = createSelector(
    selectWorkoutsState,
    (state: WorkoutsState) => state.cardsTraining.cards.forEach(val => val.schede)
)

export const getExercieses = createSelector(
    selectWorkoutsState,
    (state: WorkoutsState) => state.cardsTraining.exercises
)
