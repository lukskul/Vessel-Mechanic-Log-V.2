(()=>{var n,e,t={2:(n,e,t)=>{"use strict";t.r(e);var o=t(891);document.addEventListener("DOMContentLoaded",(()=>{const n=document.getElementById("information"),e=document.getElementById("info-dropdown"),t=document.getElementById("info-input"),o="Forms coming soon...";t.placeholder=o,n.addEventListener("click",(()=>{e.classList.toggle("visible")})),document.getElementById("language-select").addEventListener("click",(()=>{const n="en"===(localStorage.getItem("language")||"en")?"es":"en";var e;localStorage.setItem("language",n),e=n,t.placeholder="es"===e?"Formularios próximamente...":o}))})),document.addEventListener("DOMContentLoaded",(()=>{const n=document.getElementById("convert"),e=document.getElementById("converter-container");function t(n){return 25.4*n}n.addEventListener("click",(()=>{e.classList.toggle("visible")}));const o=document.getElementById("inches-input"),r=document.getElementById("mm-input");function a(n){if(n.includes(" ")){let e=n.split(" "),t=parseInt(e[0]),o=e[1],[r,a]=o.split("/").map(Number);return t+r/a}if(n.includes("/")){let[e,t]=n.split("/").map(Number);return e/t}return parseFloat(n)}function i(n){if(""===n)return"";let e={numerator:0,denominator:1},t=Number.MAX_VALUE;for(let o=1;o<=16;o++){let r=Math.round(n*o),a=Math.abs(n-r/o);a<t&&(e={numerator:r,denominator:o},t=a)}return`${e.numerator}/${e.denominator}`}o.addEventListener("input",(()=>{let n=a(o.value);r.value=n?t(n).toFixed(2):""})),r.addEventListener("input",(()=>{const n=parseFloat(r.value);o.value=n?i(function(n){return n/25.4}(n)):""})),n.addEventListener("click",(()=>{const n=a(o.value);if(!isNaN(n)){let e=i(n),a=t(n);o.value=e,r.value=a.toFixed(2)}}))})),document.getElementById("search-ship-button").addEventListener("click",(()=>{const n=localStorage.getItem("selectedBoat");if(!n)return void alert("Select a vessel");const e=`https://www.marinetraffic.com/en/ais/index/search/all?keyword=${encodeURIComponent(n)}`;window.open(e,"_blank")})),document.addEventListener("DOMContentLoaded",(()=>{const n=document.getElementById("return-button"),e=document.getElementById("vessel-title"),t=document.getElementById("vessel-form"),r=document.getElementById("task-menu"),a=document.getElementById("task-data-container"),i=document.getElementById("vessel-name"),s=document.getElementById("autocomplete-suggestions");n.addEventListener("click",(()=>{(0,o.clearPageContent)(),localStorage.removeItem("selectedBoat"),localStorage.removeItem("currentTask"),e&&(e.textContent=""),r&&(r.style.display="none"),a&&(a.innerHTML=""),t&&(t.style.display="block"),i&&(i.value="",i.disabled=!1),s&&(s.innerHTML="")}))}));const r=document.getElementById("language-select"),a=r.querySelector("img");function i(){const n=localStorage.getItem("language")||"en";a.src="en"===n?"//lukskul.github.io/Vessel-Mechanic-Log-V.2/App/icons/usa.svg":"//lukskul.github.io/Vessel-Mechanic-Log-V.2/App/icons/mexico.svg"}document.addEventListener("DOMContentLoaded",i),r.addEventListener("click",(()=>{setTimeout(i,50)}))},6:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,"#alert-popup {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: rgba(0, 0, 0, 0.8);\n    width: 100%; \n    border: 2px solid;\n    padding: 20px;\n    text-align: center;\n    display: none;\n    z-index: 1000;\n}\n\n.error-message {\n    color: #ff0000;\n    border-color: #ff0000;\n    font-size: 24px;\n    animation: flicker 1.5s infinite alternate;\n}\n\n.success-message {\n    color: #00ff00;\n    border-color: #00ff00;\n    font-size: 24px;\n}\n\n@keyframes flicker {\n    0% { opacity: 1; }\n    50% { opacity: 0.5; }\n    100% { opacity: 1; }\n}",""]);const s=i},56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var l=n[s],c=o.base?l[0]+o.base:l[0],d=a[c]||0,u="".concat(c," ").concat(d);a[c]=d+1;var p=t(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var l=o(n,r),c=0;c<a.length;c++){var d=t(a[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=l}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},138:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,"/* General Styles for Task Menu */\n.task-menu {\n    position: fixed;\n    bottom: 60px; /* Places it above the bottom menu */\n    width: 100%;\n    background-color: #222237;\n    overflow-x: auto; /* Enables horizontal scrolling */\n    white-space: nowrap;\n    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.3);\n    z-index: 9999;\n    display: none; /* Initially hidden, controlled by JS */\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.task-container {\n    display: flex;\n    margin-left: 2%; \n    padding: 0 10px;\n    overflow-x: auto;\n    scrollbar-width: none; /* Hide scrollbar for modern browsers */\n    -ms-overflow-style: none; /* Hide scrollbar for IE/Edge */\n}\n\n.task-container::-webkit-scrollbar {\n    display: none; /* Hide scrollbar for Webkit browsers */\n}\n\n/* Task Option - Styling Each Task in Menu */\n.task-option {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    min-width: 80px;\n    height: 80px;\n    padding: 5px;\n    border-radius: 50%;\n    cursor: pointer;\n    transition: transform 0.3s ease, background-color 0.3s ease;\n    text-align: center;\n    color: white;\n}\n\n.task-option {\n    color: white;  \n}\n\n.task-option img {\n    max-width: 40px;\n    margin-bottom: 5px;\n    fill: white; \n} \n\n/* Hover and Active state for .task-option */\n.task-option:hover, .task-option.active {\n    border: 2px solid #0ff;\n    border-radius: 30%;\n    box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff;\n}\n\n/* Disabled Task Option (Greyed Out and Unclickable) */\n.task-option.disabled {\n    color: black;\n    cursor: not-allowed;\n    pointer-events: none;  /* Prevent clicks on disabled tasks */\n    opacity: 0.4; /* Optional: Make it visually clear that it's disabled */\n}\n\n/* Styling for Clickable Tasks */\n.task-option.clickable {\n    color: white;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n/* Task Data Container (where JSON or task-specific data appears) */\n#task-data-container {\n    margin-top: 17%;\n    margin-bottom: 65%; \n}\n\n/* Task Item in Task Data Container */\n.task-item {\n    margin: 10px 0;\n    padding: 5px;\n}\n\n.task-item strong {\n    font-weight: bold;\n}\n\n/* Menu Buttons */\n.menuBoxItems {\n    display: flex;\n    gap: 10px;\n}\n\n.button {\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    padding: 10px;\n}\n\n.button img {\n    width: 24px;\n    height: 24px;\n}\n\n/* Hidden Elements for Dropdowns and Converters */\n.hidden {\n    display: none;\n}\n\n",""]);const s=i},234:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,"@keyframes shake {\n    0%, 100% { transform: translateX(0); }\n    25% { transform: translateX(-5px); }\n    50% { transform: translateX(5px); }\n    75% { transform: translateX(-5px); }\n}\n\n.shake {\n    animation: shake 0.5s;\n}\n\n.popup {\n    position: fixed; \n    transform: translateX(-50%);\n    background-color: rgb(134, 222, 134);\n    color: white;\n    padding: 10px 20px;\n    border-radius: 5px;\n    opacity: 0;\n    transition: opacity 0.5s ease-in-out;\n    bottom: 15%; \n    left: 50%; \n}\n\n.popup.show {\n    opacity: 1;\n}",""]);const s=i},291:(n,e,t)=>{"use strict";t.r(e),t.d(e,{language:()=>o});let o=localStorage.getItem("language")||"en";const r=document.getElementById("language-select");function a(n){fetch(`https://lukskul.github.io/Vessel-Mechanic-Log-V.2/App/language/${n}.json`).then((n=>n.json())).then((e=>{document.querySelectorAll("[data-translate]").forEach((n=>{const t=n.getAttribute("data-translate");n.textContent=e[t]})),o=n,localStorage.setItem("language",n)})).catch((n=>console.error("Error loading translation:",n)))}r&&r.addEventListener("click",(()=>{const n="en"===(localStorage.getItem("language")||"en")?"es":"en";document.documentElement.lang=n,a(n)})),document.addEventListener("DOMContentLoaded",(()=>{const n=localStorage.getItem("language")||"en";document.documentElement.lang=n,a(n)}))},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},329:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,"#html-container {\n    position: relative; \n    z-index: 9998; \n    padding-top: 17%; \n    margin-bottom: 60%;\n}\n\n#task-data-container {\n    opacity: 0; /* Start hidden */\n    transition: opacity 0.5s ease-in-out;\n}\n\n.details {\n    display: grid;\n    padding-left: 2%; \n    max-width: 600px; /* Adjust as needed */\n}\n\n.detail-row {\n    display: flex; /* Switch to flex for inline behavior */\n    justify-content: space-between; /* Ensures spacing between key and value */\n    align-items: center; /* Aligns items properly */\n    padding: 8px 0;\n    border-bottom: solid grey .01px; \n}\n\n.detail-key {\n    font-weight: bold;\n    color: #555;\n    text-align: left;\n    min-width: 200px; /* Ensures labels stay aligned */\n}\n\n.detail-value {\n    color: #00ff99;\n    padding: 5px 10px;\n    text-align: left;\n    flex: 1; /* Allows it to take up remaining space */\n}\n",""]);const s=i},395:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,".vesselForm {\n    width: 60%; \n    margin-left: 20%; \n    margin-top: 30%; \n    cursor: pointer;\n    position: relative;\n    transition: transform 0.3s ease;\n    text-align: center;\n    color: white;\n}\n\n.vesselDataForm {\n    margin-bottom: 10%; \n}\n\n.vesselFormLabel {\n    display: flex; \n    justify-content: flex-start;\n    margin-bottom: 2%; \n}\n\n.vesselForm::before {\n    content: '';\n    position: absolute;\n    top: -2px;\n    left: -2px;\n    right: -2px;\n    bottom: -2px;\n    z-index: -1;\n    transition: opacity 0.3s ease;\n    opacity: 0;\n}\n\n.vesselForm:hover::before {\n    opacity: 1;\n}\n\n.vesselForm input,\n\n.vesselForm input {\n    width: 75%;\n    height: 41px;\n    padding: 2%; \n    box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff;\n}\n\n.suggestion {\n    padding: 4%; \n    padding-top: 0px; \n    display: flex;\n    justify-content: center;\n}\n\n#vessel-title {\n    display: none; /* Hidden until a vessel is selected */\n    position: fixed;\n    top: 0;\n    width: 100%;\n    background-color: white;\n    color: black;\n    text-align: center;\n    font-size: 24px;\n    font-weight: bold;\n    padding: 15px 0;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n    z-index: 9999;\n}\n\n",""]);const s=i},499:(n,e,t)=>{"use strict";t.r(e),t.d(e,{resetShakeAlert:()=>s,shakeAlert:()=>i,showError:()=>c,showSuccessPopup:()=>l});var o=t(291);const r=document.getElementById("alert-popup");let a=0;function i(){const n=document.getElementById("data-form");n.classList.add("shake"),n.addEventListener("animationend",(function(){n.classList.remove("shake")}),{once:!0}),a++,a>2&&"en"===o.language?(c("Please select a vessel."),a=0):a>2&&"es"===o.language&&(c("Por favor, seleccione una embarcación"),a=0)}function s(){a=0}function l(n){r.innerHTML="";const e=document.createElement("div");e.className="success-message",e.textContent=n,r.appendChild(e),r.style.display="block",setTimeout((()=>{r.style.display="none"}),2e3)}function c(n){r.innerHTML="";const e=document.createElement("div");e.className="error-message",e.textContent=n,r.appendChild(e),r.style.display="block",setTimeout((()=>{r.style.display="none"}),5e3)}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},596:(n,e,t)=>{var o={"./alert.js":[499],"./index.js":[733],"./info.js":[73,73],"./language.js":[291],"./menu.js":[2],"./props.js":[427,427],"./vessel.js":[891]};function r(n){if(!t.o(o,n))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=o[n],r=e[0];return Promise.all(e.slice(1).map(t.e)).then((()=>t(r)))}r.keys=()=>Object.keys(o),r.id=596,n.exports=r},601:n=>{"use strict";n.exports=function(n){return n[1]}},659:n=>{"use strict";var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},679:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,".vesselDisplay {\n    position: fixed;\n    min-width: 100%;\n    top: 0;\n    height: 10%;\n    background-color: white;\n    border-bottom: 3px #333 solid;\n    color: black;\n    text-shadow: 1px 1px #00ff99;\n    z-index: 9;\n    text-align: center;\n    font-size: 2rem;\n    font-weight: bold;\n    padding: 2%;\n}\n\n.taskIdentifier {\n    position: fixed; \n    width: 80px; \n    height: 80px; \n    padding: 1%; \n    border-radius: 50%;\n    left: 2px; \n    top: -10px; \n    z-index: 999;\n} \n\n.logo {\n    background-color: black; \n    width: 50px; \n    height: 50px; \n    top: 0px; \n}\n\n.taskIdentifier img {\n    width: 100%; \n    height: 100%; \n    display: block; \n}\n\n.taskIdentifier::before {\n    content: '';\n    position: absolute;\n    top: -5px; \n    left: -5px; \n    right: -5px;\n    bottom: -5px; \n    border: 2px solid #0ff;\n    border-radius: 50%; \n    box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff;\n    z-index: -1; \n    transition: opacity 0.3s ease;\n    opacity: 0;\n} \n\n/* Converter CSS */\n\n/* Hidden by default */\n.hidden {\n    display: none;\n}\n\n/* Cyberpunk-style Converter UI */\n#converter-container {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 94vh; /* Adjust to fit above the menu */\n    background-color: rgba(0, 0, 0, 0.9); /* Semi-transparent black background */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    color: #00ff99; /* Neon green text for cyberpunk feel */\n    font-size: 1.5rem;\n    z-index: 1000; /* Ensure it stays above other elements */\n    box-shadow: 0 0 20px rgba(0, 255, 153, 0.6); /* Glowing effect */\n    opacity: 0; /* Start hidden */\n    transition: opacity 0.3s ease, transform 0.5s ease-in-out; /* Smooth transition for appearing */\n    transform: translateY(-100%); /* Initially off-screen */\n}\n\n/* When visible, bring the container into view */\n#converter-container.visible {\n    opacity: 1;\n    transform: translateY(0); /* Slide into view */\n}\n\n/* Input fields with a neon glowing effect */\n#inches-input, #mm-input {\n    font-size: 1.5rem;\n    padding: 15px;\n    margin: 15px;\n    width: 70%;\n    text-align: center;\n    border: 2px solid #00ff99; /* Neon border */\n    background-color: rgba(0, 0, 0, 0.7); /* Dark background for inputs */\n    color: #00ff99; /* Neon text color */\n    border-radius: 8px;\n    outline: none;\n    transition: all 0.3s ease; /* Smooth transition for border and focus effects */\n}\n\n/* Input focus effect */\n#inches-input:focus, #mm-input:focus {\n    border-color: #ffffff; /* Change border to neon pink when focused */\n    box-shadow: 0 0 10px #5b5e76; /* Neon pink glowing effect */\n}\n\n/* Apply the neon animation to the converter's text */\n#converter-container {\n    animation: neon-glow 1.5s ease-in-out infinite alternate;\n}\n\n/* Bottom Menu Bar */\n.menu {\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    background-color: white;\n    color: white;\n    text-align: center;\n    padding: 10px 0;\n    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.3);\n    z-index: 9999;\n    justify-content: center;\n}\n\n.menuBoxItems {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n}\n\n#task-identifier {\n    opacity: 0;\n    transition: opacity 0.5s ease-in-out;\n}\n\n#task-identifier.visible {\n    opacity: 1;\n}\n\n/* Information dropdown styling */\n#info-dropdown {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 94vh; /* Adjust to fit above the menu */\n    background-color: rgba(0, 0, 0, 0.9); /* Semi-transparent black background */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    color: #00ff99; /* Neon green text for cyberpunk feel */\n    font-size: 1.5rem;\n    z-index: 1000; /* Ensure it stays above other elements */\n    box-shadow: 0 0 20px rgba(0, 255, 153, 0.6); /* Glowing effect */\n    opacity: 0; /* Start hidden */\n    transition: opacity 0.3s ease, transform 0.5s ease-in-out; /* Smooth transition for appearing */\n    transform: translateY(-100%); /* Initially off-screen */\n}\n\n#info-dropdown.visible {\n    opacity: 1;\n    transform: translateY(0); /* Slide into view */\n}\n\n#info-input {\n    font-size: 1.5rem;\n    padding: 10px;\n    margin-top: 20px;\n    text-align: center;\n    background-color: #222;\n    border: 1px solid #444;\n    width: 80%;\n    color: white;\n}\n",""]);const s=i},733:(n,e,t)=>{"use strict";var o=t(72),r=t.n(o),a=t(825),i=t.n(a),s=t(659),l=t.n(s),c=t(56),d=t.n(c),u=t(540),p=t.n(u),f=t(113),m=t.n(f),g=t(743),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=l().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),r()(g.A,h),g.A&&g.A.locals&&g.A.locals;var b=t(6),y={};y.styleTagTransform=m(),y.setAttributes=d(),y.insert=l().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=p(),r()(b.A,y),b.A&&b.A.locals&&b.A.locals;var v=t(234),x={};x.styleTagTransform=m(),x.setAttributes=d(),x.insert=l().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=p(),r()(v.A,x),v.A&&v.A.locals&&v.A.locals;var k=t(679),w={};w.styleTagTransform=m(),w.setAttributes=d(),w.insert=l().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=p(),r()(k.A,w),k.A&&k.A.locals&&k.A.locals;var E=t(395),A={};A.styleTagTransform=m(),A.setAttributes=d(),A.insert=l().bind(null,"head"),A.domAPI=i(),A.insertStyleElement=p(),r()(E.A,A),E.A&&E.A.locals&&E.A.locals;var I=t(138),S={};S.styleTagTransform=m(),S.setAttributes=d(),S.insert=l().bind(null,"head"),S.domAPI=i(),S.insertStyleElement=p(),r()(I.A,S),I.A&&I.A.locals&&I.A.locals;var L=t(329),T={};T.styleTagTransform=m(),T.setAttributes=d(),T.insert=l().bind(null,"head"),T.domAPI=i(),T.insertStyleElement=p(),r()(L.A,T),L.A&&L.A.locals&&L.A.locals;var j=t(746),M={};M.styleTagTransform=m(),M.setAttributes=d(),M.insert=l().bind(null,"head"),M.domAPI=i(),M.insertStyleElement=p(),r()(j.A,M),j.A&&j.A.locals&&j.A.locals,t(291),t(499),t(891),t(2)},743:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap);"]),i.push([n.id,"*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section {\n    display: block;\n}\n\nol, ul {\n    list-style: none;\n}\n\nblockquote, q {\n    quotes: none;\n}\n\nblockquote::before, blockquote::after,\nq::before, q::after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}  \n\n.none {\n    display: none;\n}\n\n.hidden {\n    opacity: 0;\n}\n\nbody {\n    background: radial-gradient(circle, #1b2735, #090a0f);\n    color: #00ff99;\n    font-family: 'Orbitron', sans-serif;\n    justify-content: center;\n    align-items: center;\n    overflow-y: scroll;\n    margin-bottom: 20%; \n    margin: 0;\n    padding: 0;\n}\n\n#form-container {\n    padding-bottom: 100px; \n    margin-bottom: 20px; \n}\n\n.vesselDisplay, #task-main-block {\n    overflow-y: auto;\n}\n\n.padding {\n    padding: 2%; \n}\n\n.marginTop {\n    margin-top: 5%; \n}\n\nh2 {\n    margin-bottom: 2%; \n}\n\n\n",""]);const s=i},746:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,"/* Menu Button */\n.button {\n    position: relative; /* Ensure the pseudo-element is positioned relative to the button */\n    width: 40px; \n    height: 40px; \n    padding: 8px; \n    border-radius: 50%; \n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); \n    cursor: pointer;\n    border: solid 1px black; \n    background-color: white; \n    transition: background-color 0.3s ease;\n}\n\n.button::before {\n    content: '';\n    position: absolute;\n    top: -5px; /* Adjust to move the glow behind the button */\n    left: -5px; /* Adjust to move the glow behind the button */\n    right: -5px; /* Adjust to move the glow behind the button */\n    bottom: -5px; /* Adjust to move the glow behind the button */\n    border: 2px solid #0ff;\n    border-radius: 50%; /* Match the button's border-radius */\n    box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff;\n    z-index: -1; /* Ensure the glow is behind the button */\n    transition: opacity 0.3s ease;\n    opacity: 0;\n}\n\n.button:hover::before {\n    opacity: 1;\n}\n\n\n.button img {\n    width: 100%;\n    height: 100%;\n    display: block;\n}\n\n.svg-icon {\n    filter: brightness(0) invert(1); /* Changes black SVGs to white */\n    width: 100%; /* Adjust as needed */\n    height: auto; /* Adjust as needed */\n}\n\n #change-vessel-button {\n    margin-left: 88%;\n    position: fixed; \n    z-index: 999;  \n    top: 2px; \n    width: 55px;\n    height: 55px; \n}\n\n.saveVesselButton {\n    float: right; \n    padding: 0px; \n    margin-left: -5px\n}\n\n#shared-submit-button {\n    padding: 0px;\n}\n\n/* Toggle Switch */\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n    margin-right: 10px;\n}\n\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: -11px;\n    bottom: -3px;\n    background-color: white;\n    border: 2px solid black; \n    transition: .4s;\n    border-radius: 34px; \n}\n\n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white; \n    border: 2px solid black; \n    transition: .4s;\n    border-radius: 50%; /* Circular handle */\n}\n\ninput:checked + .slider {\n    background-color: white; \n}\n\ninput:checked + .slider:before {\n    transform: translateX(26px);\n    border: 2px solid #0ff;\n    border-radius: 50%; /* Match the button's border-radius */\n    box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff;\n    background-color: hsl(54, 50%, 58%); \n    border-color: black;\n}\n\n/* Styling for the menu item */\n.menu-item {\n    display: flex;\n    align-items: center;\n    color: #fff; /* White text for the label */\n    font-family: 'Courier New', Courier, monospace; /* Retro font */\n    margin-bottom: 15px;\n}\n\n.menu-item span {\n    font-size: 16px;\n    margin-left: 5px;\n}\n\n\n",""]);const s=i},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},891:(n,e,t)=>{"use strict";t.r(e),t.d(e,{clearPageContent:()=>c,loadHTML:()=>s});var o=t(499);let r=localStorage.getItem("selectedBoat")||"",a="";function i(n){if(document.querySelectorAll(".task-option").forEach((n=>n.classList.remove("active"))),a&&r){const e=document.querySelector(`.task-option[data-task="${n}"]`);e?(e.classList.add("active"),a=n,localStorage.setItem("currentTask",n),async function(n,e){n&&e?(console.log(`Loading HTML for: ${e}`),s()):console.warn("Vessel or task not selected. Aborting load.")}(r,n)):console.warn(`Task '${n}' not found.`)}else console.warn("currentTask or currentVesselName is missing. Skipping task activation.")}function s(){const n=`https://lukskul.github.io/Vessel-Mechanic-Log-V.2/App/html/${localStorage.getItem("currentTask")}.html`;console.log(n),fetch(n).then((n=>n.text())).then((n=>{document.getElementById("html-container").innerHTML=n,l(),function(){const n=document.getElementById("html-container");n?new MutationObserver(((n,e)=>{n.forEach((n=>{"childList"===n.type&&(l(),e.disconnect())}))})).observe(n,{childList:!0,subtree:!0}):console.error("html-container not found.")}()})).catch((n=>console.error("Error loading HTML:",n)))}async function l(){const n=localStorage.getItem("selectedBoat"),e=localStorage.getItem("language")||"en",o=localStorage.getItem("currentTask");if(!n){console.warn("Missing vessel. JSON not loaded.");const n=document.getElementById("task-data-container");return void(n&&(n.innerHTML=""))}const r=`https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/${n}/${e}/${o}.json`;try{const a=await fetch(r);if(!a.ok)throw new Error(`Failed to fetch ${r}`);const i=await a.json();console.log("Loaded taskData:",i),console.log("selected Vessel",n),console.log("selectedLanguage",e),console.log("current task",o);try{const n=await t(596)(`./${o}.js`),e=`${o}Populate`;"function"==typeof n[e]?n[e](i):console.error(`Function ${e} does not exist in ${o}.js`)}catch(n){console.error(`Error importing ${o}.js:`,n)}}catch(n){console.error("Error loading task JSON:",n)}}async function c(){const n=document.getElementById("html-container");n&&(n.innerHTML="");const e=document.getElementById("task-data-container");e&&(e.innerHTML="");const t=document.getElementById("task-menu");t&&(t.style.display="none");const o=document.getElementById("vessel-form");o&&(o.style.display="block")}document.addEventListener("DOMContentLoaded",(async()=>{var n,e,t;n=document.getElementById("vessel-name"),e=document.getElementById("autocomplete-suggestions"),t=await async function(){try{const n=await fetch("https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/fileIndex.json");return await n.json()}catch(n){return console.error("Error fetching vessel data:",n),{}}}(),n.addEventListener("input",(()=>{const s=n.value.toLowerCase();if(e.innerHTML="",!s)return;const l=Object.keys(t).filter((n=>n.toLowerCase().includes(s)));l.forEach((s=>{const l=document.createElement("div");l.textContent=s,l.classList.add("suggestion"),l.addEventListener("click",(()=>async function(n,e,t,s){r=n,localStorage.setItem("selectedBoat",n),a="info",localStorage.setItem("currentTask",a),document.getElementById("vessel-form").style.display="none";const l=document.getElementById("vessel-title");l.textContent=n,l.style.display="block",t.value=n,t.disabled=!0,s.innerHTML="",document.getElementById("task-menu").style.display="block";const c=document.querySelectorAll(".task-option"),d=localStorage.getItem("language")||"en",u=await async function(n,e){const t="https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/fileIndex.json";try{const o=await fetch(t);if(!o.ok)throw new Error(`Failed to fetch ${t}`);const r=await o.json();if(r[n]&&r[n][e]){const t=r[n][e],o=[];for(let r of t){const t=`https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/${n}/${e}/${r}`;try{const n=await fetch(t),e=await n.json();o.push({file:r,data:e})}catch(n){console.error(`Error fetching ${r}:`,n)}}return o}return console.error(`Error: No files found for ${n} in ${e}`),[]}catch(e){return console.error(`Error fetching file index for ${n}:`,e),[]}}(n,d),p=new Set(u.map((n=>n.file.replace(".json",""))));c.forEach((n=>{const e=n.getAttribute("data-task");p.has(e)?(n.classList.remove("disabled"),n.classList.add("clickable")):(n.classList.remove("clickable"),n.classList.add("disabled"))})),function(n,e){const t=document.getElementById("task-menu"),r=document.querySelector(".task-container").querySelectorAll(".task-option");if(!e||0===e.length)return void(0,o.shakeAlert)(`No tasks available for ${n}`);t.style.display="block";const a=new Set(e.map((n=>n.file.replace(".json",""))));r.forEach((n=>{const e=n.getAttribute("data-task");a.has(e)?(n.classList.remove("disabled"),n.classList.add("clickable")):(n.classList.remove("clickable"),n.classList.add("disabled"))}))}(n,u),i("info")}(s,t[s],n,e))),e.appendChild(l)})),0===l.length&&(0,o.shakeAlert)("No Matches")})),document.querySelectorAll(".task-option").forEach((n=>{n.addEventListener("click",(function(){i(this.getAttribute("data-task"))}))})),r&&a&&i(a)}))}},o={};function r(n){var e=o[n];if(void 0!==e)return e.exports;var a=o[n]={id:n,exports:{}};return t[n](a,a.exports,r),a.exports}r.m=t,r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.f={},r.e=n=>Promise.all(Object.keys(r.f).reduce(((e,t)=>(r.f[t](n,e),e)),[])),r.u=n=>n+".bundle.js",r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),n={},e="vml.v2:",r.l=(t,o,a,i)=>{if(n[t])n[t].push(o);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==e+a){s=u;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",e+a),s.src=t),n[t]=[o];var p=(e,o)=>{s.onerror=s.onload=null,clearTimeout(f);var r=n[t];if(delete n[t],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((n=>n(o))),e)return e(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}},r.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=t[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),(()=>{var n={792:0};r.f.j=(e,t)=>{var o=r.o(n,e)?n[e]:void 0;if(0!==o)if(o)t.push(o[2]);else{var a=new Promise(((t,r)=>o=n[e]=[t,r]));t.push(o[2]=a);var i=r.p+r.u(e),s=new Error;r.l(i,(t=>{if(r.o(n,e)&&(0!==(o=n[e])&&(n[e]=void 0),o)){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}}),"chunk-"+e,e)}};var e=(e,t)=>{var o,a,[i,s,l]=t,c=0;if(i.some((e=>0!==n[e]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);l&&l(r)}for(e&&e(t);c<i.length;c++)a=i[c],r.o(n,a)&&n[a]&&n[a][0](),n[a]=0},t=self.webpackChunkvml_v2=self.webpackChunkvml_v2||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})(),r.nc=void 0,r(733)})();