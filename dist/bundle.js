(()=>{var n={2:()=>{document.addEventListener("DOMContentLoaded",(()=>{const n=document.getElementById("information"),e=document.getElementById("info-dropdown"),t=document.getElementById("info-input"),o="Enter information here...";t.placeholder=o,n.addEventListener("click",(()=>{e.classList.toggle("visible")})),document.getElementById("language-select").addEventListener("click",(()=>{const n="en"===(localStorage.getItem("language")||"en")?"es":"en";var e;localStorage.setItem("language",n),e=n,t.placeholder="es"===e?"Ingresa información aquí...":o}))})),document.addEventListener("DOMContentLoaded",(()=>{const n=document.getElementById("convert"),e=document.getElementById("converter-container");function t(n){return 25.4*n}n.addEventListener("click",(()=>{e.classList.toggle("visible")}));const o=document.getElementById("inches-input"),r=document.getElementById("mm-input");function i(n){if(n.includes(" ")){let e=n.split(" "),t=parseInt(e[0]),o=e[1],[r,i]=o.split("/").map(Number);return t+r/i}if(n.includes("/")){let[e,t]=n.split("/").map(Number);return e/t}return parseFloat(n)}function a(n){if(""===n)return"";let e={numerator:0,denominator:1},t=Number.MAX_VALUE;for(let o=1;o<=16;o++){let r=Math.round(n*o),i=Math.abs(n-r/o);i<t&&(e={numerator:r,denominator:o},t=i)}return`${e.numerator}/${e.denominator}`}o.addEventListener("input",(()=>{let n=i(o.value);r.value=n?t(n).toFixed(2):""})),r.addEventListener("input",(()=>{const n=parseFloat(r.value);o.value=n?a(function(n){return n/25.4}(n)):""})),n.addEventListener("click",(()=>{const n=i(o.value);if(!isNaN(n)){let e=a(n),i=t(n);o.value=e,r.value=i.toFixed(2)}}))})),document.getElementById("search-ship-button").addEventListener("click",(()=>{const n=localStorage.getItem("selectedBoat");if(!n)return void alert("Select a vessel");const e=`https://www.marinetraffic.com/en/ais/index/search/all?keyword=${encodeURIComponent(n)}`;window.open(e,"_blank")})),document.addEventListener("DOMContentLoaded",(()=>{const n=document.getElementById("return-button"),e=document.getElementById("vessel-title"),t=document.getElementById("vessel-form"),o=document.getElementById("task-menu"),r=document.getElementById("task-data-container"),i=document.getElementById("vessel-name"),a=document.getElementById("autocomplete-suggestions");n.addEventListener("click",(()=>{e.textContent="",o.style.display="none",r.innerHTML="",t.style.display="block",i.value="",a.innerHTML="",i.disabled=!1}))}));const n=document.getElementById("language-select"),e=n.querySelector("img");function t(){const n=localStorage.getItem("language")||"en";e.src="en"===n?"icons/usa.svg":"icons/mexico.svg"}document.addEventListener("DOMContentLoaded",t),n.addEventListener("click",(()=>{setTimeout(t,50)}))},6:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,"#alert-popup {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: rgba(0, 0, 0, 0.8);\n    width: 100%; \n    border: 2px solid;\n    padding: 20px;\n    text-align: center;\n    display: none;\n    z-index: 1000;\n}\n\n.error-message {\n    color: #ff0000;\n    border-color: #ff0000;\n    font-size: 24px;\n    animation: flicker 1.5s infinite alternate;\n}\n\n.success-message {\n    color: #00ff00;\n    border-color: #00ff00;\n    font-size: 24px;\n}\n\n@keyframes flicker {\n    0% { opacity: 1; }\n    50% { opacity: 0.5; }\n    100% { opacity: 1; }\n}",""]);const s=a},56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var l=n[s],c=o.base?l[0]+o.base:l[0],d=i[c]||0,u="".concat(c," ").concat(d);i[c]=d+1;var p=t(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var l=o(n,r),c=0;c<i.length;c++){var d=t(i[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=l}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},234:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,"@keyframes shake {\n    0%, 100% { transform: translateX(0); }\n    25% { transform: translateX(-5px); }\n    50% { transform: translateX(5px); }\n    75% { transform: translateX(-5px); }\n}\n\n.shake {\n    animation: shake 0.5s;\n}\n\n.popup {\n    position: fixed; \n    transform: translateX(-50%);\n    background-color: rgb(134, 222, 134);\n    color: white;\n    padding: 10px 20px;\n    border-radius: 5px;\n    opacity: 0;\n    transition: opacity 0.5s ease-in-out;\n    bottom: 15%; \n    left: 50%; \n}\n\n.popup.show {\n    opacity: 1;\n}",""]);const s=a},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},528:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,".vesselForm {\n    width: 60%; \n    margin-left: 20%; \n    margin-top: 30%; \n    cursor: pointer;\n    position: relative;\n    transition: transform 0.3s ease;\n    text-align: center;\n    color: white;\n}\n\n.vesselDataForm {\n    margin-bottom: 10%; \n}\n\n.vesselFormLabel {\n    display: flex; \n    justify-content: flex-start;\n    margin-bottom: 2%; \n}\n\n.vesselForm::before {\n    content: '';\n    position: absolute;\n    top: -2px;\n    left: -2px;\n    right: -2px;\n    bottom: -2px;\n    z-index: -1;\n    transition: opacity 0.3s ease;\n    opacity: 0;\n}\n\n.vesselForm:hover::before {\n    opacity: 1;\n}\n\n.vesselForm input,\n\n.vesselForm input {\n    width: 75%;\n    height: 41px;\n    padding: 2%; \n    box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff;\n}\n\n.suggestion {\n    padding: 4%; \n    padding-top: 0px; \n    display: flex;\n    justify-content: center;\n}\n\n#vessel-title {\n    display: none; /* Hidden until a vessel is selected */\n    position: fixed;\n    top: 0;\n    width: 100%;\n    background-color: white;\n    color: black;\n    text-align: center;\n    font-size: 24px;\n    font-weight: bold;\n    padding: 15px 0;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n    z-index: 9999;\n}\n\n",""]);const s=a},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},601:n=>{"use strict";n.exports=function(n){return n[1]}},659:n=>{"use strict";var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},743:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap);"]),a.push([n.id,"*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section {\n    display: block;\n}\n\nol, ul {\n    list-style: none;\n}\n\nblockquote, q {\n    quotes: none;\n}\n\nblockquote::before, blockquote::after,\nq::before, q::after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}  \n\n.none {\n    display: none;\n}\n\n.hidden {\n    opacity: 0;\n}\n\nbody {\n    background: radial-gradient(circle, #1b2735, #090a0f);\n    color: #00ff99;\n    font-family: 'Orbitron', sans-serif;\n    justify-content: center;\n    align-items: center;\n    overflow-y: scroll;\n    margin-bottom: 20%; \n    margin: 0;\n    padding: 0;\n}\n\n#form-container {\n    padding-bottom: 100px; \n    margin-bottom: 20px; \n}\n\n.vesselDisplay, #task-main-block {\n    overflow-y: auto;\n}\n\n.padding {\n    padding: 2%; \n}\n\n.marginTop {\n    margin-top: 5%; \n}\n\nh2 {\n    margin-bottom: 2%; \n}\n\n\n",""]);const s=a},746:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,"/* Menu Button */\n.button {\n    position: relative; /* Ensure the pseudo-element is positioned relative to the button */\n    width: 40px; \n    height: 40px; \n    padding: 8px; \n    border-radius: 50%; \n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); \n    cursor: pointer;\n    border: solid 1px black; \n    background-color: white; \n    transition: background-color 0.3s ease;\n}\n\n.button::before {\n    content: '';\n    position: absolute;\n    top: -5px; /* Adjust to move the glow behind the button */\n    left: -5px; /* Adjust to move the glow behind the button */\n    right: -5px; /* Adjust to move the glow behind the button */\n    bottom: -5px; /* Adjust to move the glow behind the button */\n    border: 2px solid #0ff;\n    border-radius: 50%; /* Match the button's border-radius */\n    box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff;\n    z-index: -1; /* Ensure the glow is behind the button */\n    transition: opacity 0.3s ease;\n    opacity: 0;\n}\n\n.button:hover::before {\n    opacity: 1;\n}\n\n\n.button img {\n    width: 100%;\n    height: 100%;\n    display: block;\n}\n\n.svg-icon {\n    filter: brightness(0) invert(1); /* Changes black SVGs to white */\n    width: 100%; /* Adjust as needed */\n    height: auto; /* Adjust as needed */\n}\n\n #change-vessel-button {\n    margin-left: 88%;\n    position: fixed; \n    z-index: 999;  \n    top: 2px; \n    width: 55px;\n    height: 55px; \n}\n\n.saveVesselButton {\n    float: right; \n    padding: 0px; \n    margin-left: -5px\n}\n\n#shared-submit-button {\n    padding: 0px;\n}\n\n/* Toggle Switch */\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n    margin-right: 10px;\n}\n\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: -11px;\n    bottom: -3px;\n    background-color: white;\n    border: 2px solid black; \n    transition: .4s;\n    border-radius: 34px; \n}\n\n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white; \n    border: 2px solid black; \n    transition: .4s;\n    border-radius: 50%; /* Circular handle */\n}\n\ninput:checked + .slider {\n    background-color: white; \n}\n\ninput:checked + .slider:before {\n    transform: translateX(26px);\n    border: 2px solid #0ff;\n    border-radius: 50%; /* Match the button's border-radius */\n    box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff;\n    background-color: hsl(54, 50%, 58%); \n    border-color: black;\n}\n\n/* Styling for the menu item */\n.menu-item {\n    display: flex;\n    align-items: center;\n    color: #fff; /* White text for the label */\n    font-family: 'Courier New', Courier, monospace; /* Retro font */\n    margin-bottom: 15px;\n}\n\n.menu-item span {\n    font-size: 16px;\n    margin-left: 5px;\n}\n\n\n",""]);const s=a},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},914:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,".task-menu {\n    position: fixed;\n    bottom: 60px; /* Places it above the bottom menu */\n    width: 100%;\n    background-color: radial-gradient(circle, #1b2735, #090a0f);\n    overflow-x: auto; /* Enables horizontal scrolling */\n    white-space: nowrap;\n    padding: 10px 0;\n    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.3);\n    z-index: 9999;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.task-menu {\n    display: none; \n}\n\n.task-container {\n    display: flex;\n    gap: 10px;\n    padding: 0 10px;\n    overflow-x: auto;\n    scrollbar-width: none; /* Hide scrollbar for modern browsers */\n    -ms-overflow-style: none; /* Hide scrollbar for IE/Edge */\n}\n\n.task-container::-webkit-scrollbar {\n    display: none; /* Hide scrollbar for Webkit browsers */\n}\n\n.task-option {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    min-width: 80px;\n    height: 80px;\n    padding: 5px;\n    border-radius: 50%;\n    cursor: pointer;\n    transition: transform 0.3s ease, background-color 0.3s ease;\n    text-align: center;\n    color: white;\n}\n\n.task-option:hover, .task-option.active {\n    border: 2px solid #0ff;\n    border-radius: 50%; \n    box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff;\n}\n\n.task-option img {\n    max-width: 40px;\n    margin-bottom: 5px;\n}\n\n#task-data-container {\n    margin-top: 20px;\n}\n\n.task-item {\n    margin: 10px 0;\n    padding: 5px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n}\n\n.task-item strong {\n    font-weight: bold;\n}\n\n\n/* Styling for tasks that are disabled (greyed out and unclickable) */\n.task-option.disabled {\n    color: black;\n    cursor: not-allowed;\n    pointer-events: none;  /* Prevent clicks on disabled tasks */\n    opacity: 0.4; /* Optional: Make it visually clear that it's disabled */\n}\n\n/* Styling for tasks that are clickable (enabled and interactive) */\n.task-option.clickable {\n    color: white;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n\n\n\n\n\n\n",""]);const s=a},947:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,".vesselDisplay {\n    position: fixed;\n    min-width: 100%;\n    top: 0;\n    height: 10%;\n    background-color: white;\n    border-bottom: 3px #333 solid;\n    color: black;\n    text-shadow: 1px 1px #00ff99;\n    z-index: 9;\n    text-align: center;\n    font-size: 2rem;\n    font-weight: bold;\n    padding: 2%;\n}\n\n.taskIdentifier {\n    position: fixed; \n    width: 80px; \n    height: 80px; \n    padding: 1%; \n    border-radius: 50%;\n    left: 2px; \n    top: -10px; \n    z-index: 999;\n} \n\n.logo {\n    background-color: black; \n    width: 50px; \n    height: 50px; \n    top: 0px; \n}\n\n.taskIdentifier img {\n    width: 100%; \n    height: 100%; \n    display: block; \n}\n\n.taskIdentifier::before {\n    content: '';\n    position: absolute;\n    top: -5px; \n    left: -5px; \n    right: -5px;\n    bottom: -5px; \n    border: 2px solid #0ff;\n    border-radius: 50%; \n    box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff;\n    z-index: -1; \n    transition: opacity 0.3s ease;\n    opacity: 0;\n} \n\n/* Converter CSS */\n\n/* Hidden by default */\n.hidden {\n    display: none;\n}\n\n/* Cyberpunk-style Converter UI */\n#converter-container {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 80vh; /* Adjust to fit above the menu */\n    background-color: rgba(0, 0, 0, 0.9); /* Semi-transparent black background */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    color: #00ff99; /* Neon green text for cyberpunk feel */\n    font-size: 1.5rem;\n    z-index: 1000; /* Ensure it stays above other elements */\n    box-shadow: 0 0 20px rgba(0, 255, 153, 0.6); /* Glowing effect */\n    opacity: 0; /* Start hidden */\n    transition: opacity 0.3s ease, transform 0.5s ease-in-out; /* Smooth transition for appearing */\n    transform: translateY(-100%); /* Initially off-screen */\n}\n\n/* When visible, bring the container into view */\n#converter-container.visible {\n    opacity: 1;\n    transform: translateY(0); /* Slide into view */\n}\n\n/* Input fields with a neon glowing effect */\n#inches-input, #mm-input {\n    font-size: 1.5rem;\n    padding: 15px;\n    margin: 15px;\n    width: 70%;\n    text-align: center;\n    border: 2px solid #00ff99; /* Neon border */\n    background-color: rgba(0, 0, 0, 0.7); /* Dark background for inputs */\n    color: #00ff99; /* Neon text color */\n    border-radius: 8px;\n    outline: none;\n    transition: all 0.3s ease; /* Smooth transition for border and focus effects */\n}\n\n/* Input focus effect */\n#inches-input:focus, #mm-input:focus {\n    border-color: #ffffff; /* Change border to neon pink when focused */\n    box-shadow: 0 0 10px #5b5e76; /* Neon pink glowing effect */\n}\n\n/* Apply the neon animation to the converter's text */\n#converter-container {\n    animation: neon-glow 1.5s ease-in-out infinite alternate;\n}\n\n/* Bottom Menu Bar */\n.menu {\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    background-color: white;\n    color: white;\n    text-align: center;\n    padding: 10px 0;\n    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.3);\n    z-index: 9999;\n    justify-content: center;\n}\n\n.menuBoxItems {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n}\n\n#task-identifier {\n    opacity: 0;\n    transition: opacity 0.5s ease-in-out;\n}\n\n#task-identifier.visible {\n    opacity: 1;\n}\n\n/* Information dropdown styling */\n#info-dropdown {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 80%;\n    background-color: rgba(0, 0, 0, 0.9);\n    color: white;\n    display: none;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 20px;\n    border-radius: 8px;\n}\n\n#info-dropdown.visible {\n    display: flex;\n}\n\n#info-input {\n    font-size: 1.5rem;\n    padding: 10px;\n    margin-top: 20px;\n    text-align: center;\n    background-color: #222;\n    border: 1px solid #444;\n    width: 80%;\n    color: white;\n}\n",""]);const s=a}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{"use strict";var n=t(72),e=t.n(n),o=t(825),r=t.n(o),i=t(659),a=t.n(i),s=t(56),l=t.n(s),c=t(540),d=t.n(c),u=t(113),p=t.n(u),f=t(914),m={};m.styleTagTransform=p(),m.setAttributes=l(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),e()(f.A,m),f.A&&f.A.locals&&f.A.locals;var g=t(528),h={};h.styleTagTransform=p(),h.setAttributes=l(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),e()(g.A,h),g.A&&g.A.locals&&g.A.locals;var b=t(234),x={};x.styleTagTransform=p(),x.setAttributes=l(),x.insert=a().bind(null,"head"),x.domAPI=r(),x.insertStyleElement=d(),e()(b.A,x),b.A&&b.A.locals&&b.A.locals;var y=t(746),v={};v.styleTagTransform=p(),v.setAttributes=l(),v.insert=a().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=d(),e()(y.A,v),y.A&&y.A.locals&&y.A.locals;var k=t(947),w={};w.styleTagTransform=p(),w.setAttributes=l(),w.insert=a().bind(null,"head"),w.domAPI=r(),w.insertStyleElement=d(),e()(k.A,w),k.A&&k.A.locals&&k.A.locals;var E=t(6),A={};A.styleTagTransform=p(),A.setAttributes=l(),A.insert=a().bind(null,"head"),A.domAPI=r(),A.insertStyleElement=d(),e()(E.A,A),E.A&&E.A.locals&&E.A.locals;var I=t(743),L={};L.styleTagTransform=p(),L.setAttributes=l(),L.insert=a().bind(null,"head"),L.domAPI=r(),L.insertStyleElement=d(),e()(I.A,L),I.A&&I.A.locals&&I.A.locals;let S=localStorage.getItem("language")||"en";const C=document.getElementById("language-select");function B(n){fetch(`https://lukskul.github.io/Vessel-Mechanic-Log-V.2/App/language/${n}.json`).then((n=>n.json())).then((e=>{document.querySelectorAll("[data-translate]").forEach((n=>{const t=n.getAttribute("data-translate");n.textContent=e[t]})),S=n,localStorage.setItem("language",n)})).catch((n=>console.error("Error loading translation:",n)))}C&&C.addEventListener("click",(()=>{const n="en"===(localStorage.getItem("language")||"en")?"es":"en";document.documentElement.lang=n,B(n)})),document.addEventListener("DOMContentLoaded",(()=>{const n=localStorage.getItem("language")||"en";document.documentElement.lang=n,B(n)}));const M=document.getElementById("alert-popup");let T=0;function j(){const n=document.getElementById("data-form");n.classList.add("shake"),n.addEventListener("animationend",(function(){n.classList.remove("shake")}),{once:!0}),T++,T>2&&"en"===S?(z("Please select a vessel."),T=0):T>2&&"es"===S&&(z("Por favor, seleccione una embarcación"),T=0)}function z(n){M.innerHTML="";const e=document.createElement("div");e.className="error-message",e.textContent=n,M.appendChild(e),M.style.display="block",setTimeout((()=>{M.style.display="none"}),5e3)}let $="";document.addEventListener("DOMContentLoaded",(async()=>{var n,e,t;n=document.getElementById("vessel-name"),e=document.getElementById("autocomplete-suggestions"),t=await async function(){try{const n=await fetch("https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/fileIndex.json");return await n.json()}catch(n){return console.error("Error fetching vessel data:",n),{}}}(),n.addEventListener("input",(()=>{const o=n.value.toLowerCase();if(e.innerHTML="",!o)return;const r=Object.keys(t).filter((n=>n.toLowerCase().includes(o)));r.forEach((o=>{const r=document.createElement("div");r.textContent=o,r.classList.add("suggestion"),r.addEventListener("click",(()=>async function(n,e,t,o){$=n,localStorage.setItem("selectedBoat",n),n=String(n),document.getElementById("vessel-form").style.display="none";const r=document.getElementById("vessel-title");r.textContent=n,r.style.display="block",t.value=n,t.disabled=!0,o.innerHTML="",document.getElementById("task-menu").style.display="block";const i=document.querySelectorAll(".task-option"),a=localStorage.getItem("language")||"en",s=await async function(n,e){const t="https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/fileIndex.json";try{const o=await fetch(t);if(!o.ok)throw new Error(`Failed to fetch ${t}`);const r=await o.json();if(r[n]&&r[n][e]){const t=r[n][e],o=[];for(let r of t){const t=`https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/${n}/${e}/${r}`;try{const n=await fetch(t),e=await n.json();o.push({file:r,data:e})}catch(n){console.error(`Error fetching ${r}:`,n)}}return o}return console.error(`Error: No files found for ${n} in ${e}`),[]}catch(e){return console.error(`Error fetching file index for ${n}:`,e),[]}}(n,a),l=new Set(s.map((n=>"string"==typeof n.file?n.file.replace(".json",""):"")));i.forEach((n=>{const e=n.getAttribute("data-task");l.has(e)?(n.classList.remove("disabled"),n.classList.add("clickable")):(n.classList.remove("clickable"),n.classList.add("disabled"))})),function(n,e){const t=document.getElementById("task-menu"),o=document.querySelector(".task-container").querySelectorAll(".task-option");if(!e||0===e.length)return void j();t.style.display="block";const r=new Set(e.map((n=>n.file.replace(".json",""))));o.forEach((n=>{const e=n.getAttribute("data-task");r.has(e)?(n.classList.remove("disabled"),n.classList.add("clickable")):(n.classList.remove("clickable"),n.classList.add("disabled"))}))}(0,s)}(o,t[o],n,e))),e.appendChild(r)})),0===r.length&&j()}));const o=document.querySelectorAll(".task-option");o.forEach((n=>{n.addEventListener("click",(function(){if(o.forEach((n=>n.classList.remove("active"))),this.classList.add("active"),$){const n=this.getAttribute("data-task");!async function(n,e){const t="es"===(localStorage.getItem("language")||"en")?"es":"en",o=`https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/${n}/${t}/${e}.json`;console.log(`Fetching data from: ${t} folder`);try{const t=await fetch(o);if(!t.ok)throw new Error(`Failed to fetch ${o}`);const r=await t.json(),i=document.getElementById("task-data-container");i.innerHTML="";const a=document.createElement("h3");a.textContent=`${e} for ${n}`,i.appendChild(a);for(let n in r)if(r.hasOwnProperty(n)){const e=document.createElement("div");e.classList.add("task-item"),e.innerHTML=`<strong>${n}:</strong> ${r[n]}`,i.appendChild(e)}}catch(n){console.error("Error loading task data:",n),document.getElementById("task-data-container").innerHTML="<p>Error loading task data. Please try again later.</p>"}}($,n)}else console.error("Vessel name is not defined")}))}))})),t(2)})()})();