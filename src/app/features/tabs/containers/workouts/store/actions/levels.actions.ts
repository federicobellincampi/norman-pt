import { createAction, props } from "@ngrx/store"
import { LevelModel } from "../../../../../../models/muscle-group"

export const loadLevels = createAction(
    '[Levels] Load levels',
)

export const loadLevelsSuccess = createAction(
    '[Levels] Load levels success',
    props<{ levels: LevelModel[] }>()
)