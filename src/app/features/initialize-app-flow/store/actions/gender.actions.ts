import { createAction } from "@ngrx/store"

export const checkGenderSelected = createAction(
    '[Gender] check gender selected'
)

export const manSelected = createAction(
    '[Gender] man selected'
)

export const womanSelected = createAction(
    '[Gender] woman selected'
)