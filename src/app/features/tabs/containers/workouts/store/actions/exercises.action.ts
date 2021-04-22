import { createAction, props } from "@ngrx/store"
import { CardRepsLevelModel, ExerciseModel } from "../../../../../../models/muscle-group"

export const loadExercises = createAction(
    '[Cards training] Load exercises',
)

export const loadExercisesSuccess = createAction(
    '[Cards training] Load exercises success',
    props<{ exercies: ExerciseModel[][] }>()
)

export const loadCardRepsLevel = createAction(
    '[Cards training] Load card reps level',
)

export const loadCardRepsLevelSuccess = createAction(
    '[Cards training] Load cards reps level',
    props<{ repsLevel: CardRepsLevelModel}>()
)