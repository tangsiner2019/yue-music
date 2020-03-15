// 轮播图
export interface Banner {
  targetId: number;
  url: string;
  imageUrl: string;
  typeTitle: string;
}

// 歌单 ( 网友精选碟 )
export interface PlayList {
  id: number;
  name: string;
  coverImgUrl: string;
  playCount: number;
}

// 歌单 标签
export interface PlayListTag {
  id: number;
  name: string;
  position: number;
}

// 歌手
export interface Artist {
  id: number;
  name: string;
  picUrl?: string;
  albumSize?: number;
  musicSize?: number;
}

// 专辑
export interface Album {
  id: number;
  name: string;
  picUrl?: string;
  artist?: Artist;
  size?: number;
}

// 歌曲
export interface Song {
  id: number;
  name: string;
  isPlay?: boolean;
  dt?: number; // 时长
  duration?: number;
  alia?: string;
  ar?: [ // 歌手
    Artist
  ];
  artists?: [
    Artist
  ];
  al?: Album; // 专辑
  album?: Album;
}
