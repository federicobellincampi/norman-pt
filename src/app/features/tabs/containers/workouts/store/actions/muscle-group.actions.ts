import { createAction, props } from "@ngrx/store";

export const muscleGroupSelected = createAction(
    '[Muscle group] Muscle group selected',
    props<{ muscleGroupSelected: string,  imgUrl: string }>()
)

export const levelSelected = createAction(
    '[Muscle group] Level selected',
    props<{ levelSelected: string }>()
)