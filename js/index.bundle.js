!function(){var t={523:function(){["workstyle","for-all-teams"].forEach((t=>{const e=document.querySelector(`.${t}`),o=e.querySelectorAll(".tabs__button"),n=e.querySelectorAll(".tabs__content");function c(t){let e=0;const o=setInterval((()=>{t.style.opacity=e,e+=.05,e>=1&&clearInterval(o)}),20)}function a(t){const e=t.scrollHeight;t.style.height=e+"px"}o.forEach((r=>{r.addEventListener("click",(()=>{const s=r.getAttribute("data-tab");o.forEach((t=>{t.classList.remove("tabs__button--active")})),n.forEach((t=>{t.style.opacity=0,t.classList.remove("tabs__content--active")})),r.classList.add("tabs__button--active");const l=e.querySelector(`#${s}`);l.classList.add("tabs__content--active"),a(l),c(l),localStorage.setItem(`lastOpenTab_${t}`,s)}))}));const r=localStorage.getItem(`lastOpenTab_${t}`);if(r){const t=e.querySelector(`#${r}`);if(t){t.classList.add("tabs__content--active");const o=e.querySelector(`[data-tab="${r}"]`);o&&(o.classList.add("tabs__button--active"),a(t),c(t))}}}))}},e={};function o(n){var c=e[n];if(void 0!==c)return c.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,o),a.exports}o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";var t=o(523),e=o.n(t);(function(){const t=document.querySelector(".mobile-nav-btn"),e=document.querySelector(".mobile-nav"),o=document.querySelector(".nav-icon");t.onclick=function(){e.classList.toggle("mobile-nav--open"),o.classList.toggle("nav-icon--active"),document.body.classList.toggle("no-scroll")}})(),e()()}()}();