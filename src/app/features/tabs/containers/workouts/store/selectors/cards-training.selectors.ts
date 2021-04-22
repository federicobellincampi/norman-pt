import { createSelector } from "@ngrx/store";
import { selectWorkoutsState, WorkoutsState } from "../reducers";

export const getCardsTrainer = createSelector(
    selectWorkoutsState,
    (state: WorkoutsState) => state.cardsTraining.cards
)
