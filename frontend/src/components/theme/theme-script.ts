/**
 * Inline script that runs before first paint to apply the stored theme and avoid a flash.
 * Keep the storage key in sync with theme-provider.tsx.
 */
export const THEME_STORAGE_KEY = "nexora-theme";

export const themeScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");var d=t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);var r=document.documentElement;r.classList.toggle("dark",d);r.classList.toggle("light",!d);r.style.colorScheme=d?"dark":"light";}catch(e){}})();`;
