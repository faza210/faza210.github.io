/* ============================================
   emirfaza.com — Theme Initializer
   Runs parser-blocking in <head> BEFORE the stylesheet
   renders, so the correct theme is applied immediately
   and there's no flash of the wrong theme (FOUC).
   Kept as an external file to comply with the WEB1201
   "no inline code" rubric requirement (I4).
   ============================================ */

(function () {
    try {
        var stored = localStorage.getItem('theme');
        if (stored === 'light' || stored === 'dark') {
            document.documentElement.setAttribute('data-theme', stored);
        } else {
            var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        }
    } catch (e) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
})();
