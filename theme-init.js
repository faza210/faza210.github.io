/* theme-init.js — runs in <head> before the stylesheet, so the first
   paint already has the saved theme and there's no flash of the wrong
   one. External file because the WEB1201 rubric bans inline code (I4). */

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
