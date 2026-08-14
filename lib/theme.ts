export const THEME_STORAGE_KEY = "dlm-theme";

/**
 * Runs before hydration (inlined into <head> in app/[locale]/layout.tsx) so
 * the correct theme class is present for the very first paint — otherwise
 * the page would flash light mode before React mounts and ThemeToggle
 * corrects it. Mirrors the same precedence ThemeToggle uses at runtime: an
 * explicit saved choice wins, otherwise the OS preference decides.
 */
export function getThemeInitScript(): string {
  return `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var s=localStorage.getItem(k);var d=s==="dark"||s==="light"?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d){document.documentElement.classList.add("dark")}}catch(e){}})();`;
}
