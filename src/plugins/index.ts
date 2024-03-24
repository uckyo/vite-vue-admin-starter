import { App } from "vue";
import { setupElementIcons, setupElementPlus } from "@/plugins/element";
import { setupTailwindcss } from "./tailwindcss";
import { setupI18n } from "./i18n";
export function setupPlugins(app: App) {
  setupElementPlus(app);
  setupElementIcons(app);
  setupI18n(app);
  setupTailwindcss();
}
