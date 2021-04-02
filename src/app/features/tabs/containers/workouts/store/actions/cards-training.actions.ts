import { createAction, props } from "@ngrx/store";
import { CardRepsLevelModel, ExerciseModel, LevelModel, MuscleGroupModel } from "../../../../../../models/muscle-group";

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

// spostare in un altro store
export const loadExercises = createAction(
    '[Cards training] Load exercises',
)

export const loadExercisesSuccess = createAction(
    '[Cards training] Load exercises success',
    props<{ exercies: ExerciseModel[][] }>()
)

export const loadCardLevels = createAction(
    '[Cards training] Load card reps level',
)

export const loadCardLevelsSuccess = createAction(
    '[Cards training] Load cards reps level',
    props<{ cardLevels: any }>()
)

export const loadCardRepsLevel = createAction(
    '[Cards training] Load card reps level',
)

export const loadCardRepsLevelSuccess = createAction(
    '[Cards training] Load cards reps level',
    props<{ repsLevel: CardRepsLevelModel}>()
)