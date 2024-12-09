export interface lessonAssetsInterface {
  id: number;
  content_title: string;
  content_free: boolean;
  src: string;
  type: lectureContentTypes;
}

export enum lectureContentTypes {
  video,
  audio,
  pdf,
}
