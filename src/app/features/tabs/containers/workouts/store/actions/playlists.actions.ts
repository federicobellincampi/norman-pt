import { createAction } from "@ngrx/store";

export const playListsLoad = createAction(
    '[Playlists] Playlists load'
);

export const playListsSuccess = createAction(
    '[Playlists] Playlists success'
    );

export const playListsFailed = createAction(
    '[Playlists] Playlists failed'
);