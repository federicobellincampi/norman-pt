import { createAction } from "@ngrx/store";

export const buttonDisable = createAction(
    '[Save changes] button disable',
)

export const buttonActive = createAction(
    '[Save changes] button active'
)

export const saveChanges = createAction(
    '[Save changes] save changes success'
)