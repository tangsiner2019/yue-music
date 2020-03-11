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

// 歌曲
export interface Song {
  id: number;
  dt: number; // 时长
  name: string;
  alia: string;
  ar: [ // 歌手
    {
      id: number;
      name: string;
    }
  ];
  al: {
    id: number;
    name: string;
    picUrl: string;
  };
}
