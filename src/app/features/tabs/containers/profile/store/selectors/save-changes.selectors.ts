import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SaveChangesState } from "../reducers/save-changes.reducer";

export const selectSaveChanges =  createFeatureSelector<SaveChangesState>('save-changes');

export const getButtonDisable = createSelector(
    selectSaveChanges,
    (state: SaveChangesState) => state.buttonDisable
)