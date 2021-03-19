import { createAction } from "@ngrx/store"

export const checkGoalTrainingSelected = createAction(
    '[Goal training] check goal training selected',
)

export const muscleMassSelected = createAction(
    '[Goal training] muscle mass selected'
)

export const toningSelected = createAction(
    '[Goal training] toning selected'
)

export const loseWeightSelected = createAction(
    '[Goal training] lose weight selected'
)