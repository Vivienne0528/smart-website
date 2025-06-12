import { createContext, RefObject } from "react";
// interface RefStore {
//   heroRef: RefObject<HTMLDivElement>;
//   projectRef: RefObject<HTMLDivElement>;
//   aboutRef: RefObject<HTMLDivElement>;
//   contactRef: RefObject<HTMLDivElement>;
// }

// 创建默认上下文值
const defaultRefStore = {
  heroRef: { current: null },
  actionRef: { current: null },
  comedyRef: { current: null },
  romanceRef: { current: null },
  scienceRef: { current: null },
  thrillerRef: { current: null },
  animeRef: { current: null },
  varietyRef: { current: null },
};

// 创建上下文
export const useRefStore = createContext(defaultRefStore);
