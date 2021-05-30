import { Action, createReducer, on } from "@ngrx/store";
import * as PlaylistsActions from '../actions/playlists.actions';


export interface PlaylistsState {
    loaded: boolean;
}

export const initialState: PlaylistsState = {
    loaded: false
}

const PlaylistsReducer = createReducer(
    initialState,
    on(PlaylistsActions.playListsLoad, (state, action) => ({ ...state, loaded: false })),
    on(PlaylistsActions.playListsSuccess, (state, action) => ({ 
        ...state, 
        loaded: true 
    })),
    on(PlaylistsActions.playListsFailed, (state, action) => ({ 
        ...state, 
        loaded: true 
    })),
);

export function reducer(state: PlaylistsState | undefined, action: Action) {
    return PlaylistsReducer(state, action);
}