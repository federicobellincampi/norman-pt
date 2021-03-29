import { createAction, props } from "@ngrx/store";
import { MuscleGroupModel } from "../../../../../../models/muscle-group";

export const loadCardsTraining = createAction(
    '[Cards training] Load cards training',
)

export const loadCardsTrainingSuccess = createAction(
    '[Cards training] Load cards training success',
    props<{cards: MuscleGroupModel[]}>()
)

export const loadCardsTrainingFailed = createAction(
    '[Cards training] Load cards training failed',
    props<{error: any}>()
)