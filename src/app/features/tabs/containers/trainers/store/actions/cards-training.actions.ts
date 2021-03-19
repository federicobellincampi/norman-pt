import { createAction, props } from "@ngrx/store";
import { CardTraining } from "../../../../../../models/card-training.model";

export const loadCardsTraining = createAction(
    '[Cards training] Load cards training',
)

export const loadCardsTrainingSuccess = createAction(
    '[Cards training] Load cards training success',
    props<{cards: CardTraining[]}>()
)

export const loadCardsTrainingFailed = createAction(
    '[Cards training] Load cards training failed',
    props<{error: any}>()
)