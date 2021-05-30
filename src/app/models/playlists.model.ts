export interface PlaylistsResponse {
    kind: string;
    etag: string;
    pageInfo: PageInfo;
    items: Array<Item>;
  }
  export interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
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
    localized: Localized;
  }
  export interface Thumbnails {
    default: DefaultOrMediumOrHighOrStandardOrMaxres;
    medium: DefaultOrMediumOrHighOrStandardOrMaxres;
    high: DefaultOrMediumOrHighOrStandardOrMaxres;
    standard: DefaultOrMediumOrHighOrStandardOrMaxres;
    maxres?: DefaultOrMediumOrHighOrStandardOrMaxres1 | null;
  }
  export interface DefaultOrMediumOrHighOrStandardOrMaxres {
    url: string;
    width: number;
    height: number;
  }
  export interface DefaultOrMediumOrHighOrStandardOrMaxres1 {
    url: string;
    width: number;
    height: number;
  }
  export interface Localized {
    title: string;
    description: string;
  }
  