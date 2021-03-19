import { createSelector } from '@ngrx/store';
import { InitAppFlowState, selectInitAppFlow } from '../reducers';

export const getFooterDisable = createSelector(
    selectInitAppFlow,
    (state: InitAppFlowState) => state.ui.footerDisable
);

