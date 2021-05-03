import { createAction, props } from '@ngrx/store';
import { User } from '../../../models/user.model';

export const saveProfile = createAction(
    '[Profile] save profile ',
)

export const loadProfile = createAction(
    '[Profile] load profile',
    props<{ user: User }>()
)

export const saveProfileGender = createAction(
    '[Profile] save gender ',
    props<{ gender: 'uomo' | 'donna' }>()
)

export const saveProfileGoalTraining = createAction(
    '[Profile] save goal training',
    props<{ goalTraining: 'massa muscolare' | 'perdere peso' | 'tonificarsi' }>()
)

