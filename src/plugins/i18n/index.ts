import { App } from "vue";
import { createI18n } from "vue-i18n";
import zhCN from "@/locals/zh-CN.json";
import en from "@/locals/en.json";

export function setupI18n(app: App) {
  const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem("locale") || "zh-CN", // zh-CN
    fallbackLocale: "zh-CN",
    messages: {
      "zh-CN": zhCN,
      en: en
    }
  });
  app.use(i18n);
}
