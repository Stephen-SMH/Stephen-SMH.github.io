/**
 * Runs inline in <head>, before first paint and before React hydrates, so the
 * stored theme is applied with no flash. Dark is the default; we deliberately
 * ignore prefers-color-scheme. Also marks the page `.js` so scroll-reveal only
 * hides content when JavaScript is actually available.
 */
export const themeScript = `(function(){var d=document.documentElement;var t="dark";try{var s=localStorage.getItem("theme");if(s==="light"||s==="dark")t=s}catch(e){}d.dataset.theme=t;d.classList.add("js")})();`;

export const THEME_STORAGE_KEY = "theme";
