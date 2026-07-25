/* ============================================
   emirfaza.com — Theme Initializer
   Runs parser-blocking in <head> BEFORE the stylesheet
   renders, so the correct theme is applied immediately
   and there's no flash of the wrong theme (FOUC).
   Kept as an external file to comply with the WEB1201
   "no inline code" rubric requirement (I4).

   Precedence: a saved localStorage choice wins; a first
   visit always lands on the LIGHT TABLE (changed 25 Jul
   2026 — previously followed prefers-color-scheme, which
   made dark-OS visitors start in the darkroom).
   ============================================ */

(function () {
    try {
        var stored = localStorage.getItem('theme');
        if (stored === 'light' || stored === 'dark') {
            document.documentElement.setAttribute('data-theme', stored);
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    } catch (e) {
        document.documentElement.setAttribute('data-theme', 'light');
    }
})();
