import DefaultTheme from "vitepress/theme";
import { useRouter } from "vitepress";
import "./custom.css";

declare global {
  interface Window {
    _hmt?: any[];
  }
}

export default {
  extends: DefaultTheme,
  setup() {
    const router = useRouter();

    // 站内跳转不刷新页面，hm.js 只在首次加载时自动上报，需要手动补 PV
    router.onAfterRouteChanged = (to) => {
      window._hmt?.push(["_trackPageview", to]);
    };
  },
};
