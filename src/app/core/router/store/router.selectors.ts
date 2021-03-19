import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector } from '@ngrx/store';
import { AppState } from '../../core.module';

export const getRouter = createFeatureSelector<AppState, RouterReducerState>('router');
