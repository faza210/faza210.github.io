/* ============================================
   emirfaza.com — Portfolio JavaScript (Darkroom redesign)
   Two jobs:
     1. Theme toggle (light table <-> darkroom), persisted
        in localStorage, with aria-pressed state
     2. Mobile hamburger menu
   theme-init.js runs first in <head> and applies the saved
   theme before first paint, so there is no theme flash.
   (The entrance animation is pure CSS — see style.css.)
   ============================================ */

(function () {
    'use strict';

    /* --- 1. Theme toggle ---
       The button always offers the OTHER room: in the light table
       theme it reads "Darkroom", in the darkroom theme "Light table"
       (the label swap is pure CSS keyed off [data-theme]). */
    var root = document.documentElement;
    var toggle = document.querySelector('.theme-toggle');

    function currentTheme() {
        return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    }

    function syncToggle() {
        if (!toggle) return;
        var dark = currentTheme() === 'dark';
        toggle.setAttribute('aria-pressed', String(dark));
        toggle.setAttribute('aria-label', dark ? 'Switch to light table theme' : 'Switch to darkroom theme');
    }

    if (toggle) {
        toggle.addEventListener('click', function () {
            var next = currentTheme() === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', next);
            try { localStorage.setItem('theme', next); } catch (e) { /* private mode */ }
            syncToggle();
        });
        syncToggle();
    }

    /* --- 2. Mobile hamburger --- */
    var burger = document.querySelector('.nav-hamburger');
    var navLinks = document.getElementById('nav-links');

    if (burger && navLinks) {
        burger.addEventListener('click', function () {
            var open = navLinks.classList.toggle('open');
            burger.setAttribute('aria-expanded', String(open));
        });
        /* Close the menu after choosing a section */
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('open');
                burger.setAttribute('aria-expanded', 'false');
            });
        });
        /* Close on any tap outside the menu/button, and on Escape */
        function closeMenu() {
            navLinks.classList.remove('open');
            burger.setAttribute('aria-expanded', 'false');
        }
        document.addEventListener('click', function (e) {
            if (!navLinks.classList.contains('open')) return;
            if (navLinks.contains(e.target) || burger.contains(e.target)) return;
            closeMenu();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && navLinks.classList.contains('open')) closeMenu();
        });
    }

})();
