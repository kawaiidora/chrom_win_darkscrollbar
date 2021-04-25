// ==UserScript==
// @name           chrom_win_darkscrollbar
// @namespace      https://github.com/kawaiidora
// @match          *://*/*
// @grant          none
// @version        0.1
// @author         Dora
// @updateURL      geasyfork said it will change
// @homepageurl    https://github.com/kawaiidora/chrom_win_darkscrollbar
// @supporturl     https://github.com/kawaiidora/chrom_win_darkscrollbar/issues
// @run-at         document-start
// @description    Just change the color of the scrollbar when website applies dark theme but forgots the scrollbar. Works on Windows Chromium-based browser. 
// @description:zh 作用在Win上的Chromium浏览器，当网页应用暗色模式却忘了把滚动条也变成暗色时，帮它变暗，不改变滚动条外观。
// ==/UserScript==

var meta = document.createElement('meta');
meta.name = "color-scheme";
meta.content = "light dark";
document.getElementsByTagName('head')[0].appendChild(meta);