export interface PlaylistItemsResponse {
    kind: string;
    etag: string;
    items: Array<Item>;
    pageInfo: PageInfo;
  }
  export interface Item {
    kind: string;
    etag: string;
    id: string;
    snippet: Snippet;
  }
  export interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    playlistId: string;
    position: number;
    resourceId: ResourceId;
    videoOwnerChannelTitle: string;
    videoOwnerChannelId: string;
  }
  export interface Thumbnails {
    default: DefaultOrMediumOrHighOrStandardOrMaxres;
    medium: DefaultOrMediumOrHighOrStandardOrMaxres;
    high: DefaultOrMediumOrHighOrStandardOrMaxres;
    standard: DefaultOrMediumOrHighOrStandardOrMaxres;
    maxres: DefaultOrMediumOrHighOrStandardOrMaxres;
  }
  export interface DefaultOrMediumOrHighOrStandardOrMaxres {
    url: string;
    width: number;
    height: number;
  }
  export interface ResourceId {
    kind: string;
    videoId: string;
  }
  export interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
  }
  