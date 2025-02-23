(()=>{var n,e,t={2:(n,e,t)=>{"use strict";t.r(e);var o=t(891);document.addEventListener("DOMContentLoaded",(()=>{const n=document.getElementById("information"),e=document.getElementById("info-dropdown"),t=document.getElementById("info-input"),o="Forms coming soon...";t.placeholder=o,n.addEventListener("click",(()=>{e.classList.toggle("visible")})),document.getElementById("language-select").addEventListener("click",(()=>{const n="en"===(localStorage.getItem("language")||"en")?"es":"en";var e;localStorage.setItem("language",n),e=n,t.placeholder="es"===e?"Formularios próximamente...":o}))})),document.addEventListener("DOMContentLoaded",(function(){const n=document.getElementById("convert"),e=document.getElementById("converter-container"),t=document.getElementById("converter"),o=document.getElementById("toggle-table-button");let i=!0;const a=[{inches:"5/32",decimal:.15625,mm:4},{inches:"3/16",decimal:.1875,mm:5},{inches:"7/32",decimal:.21875,mm:5.5},{inches:"1/4",decimal:.25,mm:6},{inches:"9/32",decimal:.28125,mm:7},{inches:"5/16",decimal:.3125,mm:8},{inches:"11/32",decimal:.34375,mm:9},{inches:"3/8",decimal:.375,mm:10},{inches:"7/16",decimal:.4375,mm:11},{inches:"1/2",decimal:.5,mm:13},{inches:"9/16",decimal:.5625,mm:14},{inches:"5/8",decimal:.625,mm:16},{inches:"11/16",decimal:.6875,mm:17},{inches:"3/4",decimal:.75,mm:19},{inches:"13/16",decimal:.8125,mm:21},{inches:"7/8",decimal:.875,mm:22},{inches:"15/16",decimal:.9375,mm:24},{inches:"1",decimal:1,mm:25},{inches:"1-1/16",decimal:1.0625,mm:27},{inches:"1-1/8",decimal:1.125,mm:29},{inches:"1-3/16",decimal:1.1875,mm:30},{inches:"1-1/4",decimal:1.25,mm:32},{inches:"1-5/16",decimal:1.3125,mm:34},{inches:"1-3/8",decimal:1.375,mm:35},{inches:"1-7/16",decimal:1.4375,mm:36},{inches:"1-1/2",decimal:1.5,mm:38},{inches:"1-9/16",decimal:1.5625,mm:40},{inches:"1-5/8",decimal:1.625,mm:41},{inches:"1-11/16",decimal:1.6875,mm:43},{inches:"1-3/4",decimal:1.75,mm:44},{inches:"1-13/16",decimal:1.8125,mm:46},{inches:"1-7/8",decimal:1.875,mm:48},{inches:"1-15/16",decimal:1.9375,mm:49},{inches:"2",decimal:2,mm:50},{inches:"2-1/16",decimal:2.0625,mm:52},{inches:"2-1/8",decimal:2.125,mm:54},{inches:"2-3/16",decimal:2.1875,mm:55},{inches:"2-1/4",decimal:2.25,mm:57},{inches:"2-5/16",decimal:2.3125,mm:59},{inches:"2-3/8",decimal:2.375,mm:60},{inches:"2-7/16",decimal:2.4375,mm:62},{inches:"2-1/2",decimal:2.5,mm:63},{inches:"2-9/16",decimal:2.5625,mm:65},{inches:"2-5/8",decimal:2.625,mm:67},{inches:"2-11/16",decimal:2.6875,mm:68},{inches:"2-3/4",decimal:2.75,mm:70},{inches:"2-13/16",decimal:2.8125,mm:72},{inches:"2-7/8",decimal:2.875,mm:73},{inches:"2-15/16",decimal:2.9375,mm:75},{inches:"3",decimal:3,mm:76}],r=[{tap:"4-40",drill:{inches:"#43",decimal:.089,mm:2.26}},{tap:"6-32",drill:{inches:"#36",decimal:.1065,mm:2.71}},{tap:"8-32",drill:{inches:"#29",decimal:.136,mm:3.45}},{tap:"10-24",drill:{inches:"#25",decimal:.1495,mm:3.8}},{tap:"10-32",drill:{inches:"#21",decimal:.159,mm:4.04}},{tap:'1/4"-20',drill:{inches:"#7",decimal:.201,mm:5.11}},{tap:'5/16"-18',drill:{inches:"F",decimal:.257,mm:6.53}},{tap:'3/8"-16',drill:{inches:'5/16"',decimal:.3125,mm:7.94}},{tap:'7/16"-14',drill:{inches:"U",decimal:.368,mm:9.35}},{tap:'1/2"-13',drill:{inches:'27/64"',decimal:.4219,mm:10.72}},{tap:'5/8"-11',drill:{inches:'17/32"',decimal:.5312,mm:13.49}},{tap:'3/4"-10',drill:{inches:'21/32"',decimal:.6562,mm:16.67}},{tap:"M3 x 0.5",drill:{inches:"",decimal:.0984,mm:2.5}},{tap:"M4 x 0.7",drill:{inches:"",decimal:.1299,mm:3.3}},{tap:"M5 x 0.8",drill:{inches:"",decimal:.1654,mm:4.2}},{tap:"M6 x 1.0",drill:{inches:"",decimal:.1969,mm:5}},{tap:"M8 x 1.25",drill:{inches:"",decimal:.2677,mm:6.8}},{tap:"M10 x 1.5",drill:{inches:"",decimal:.3346,mm:8.5}},{tap:"M12 x 1.75",drill:{inches:"",decimal:.4016,mm:10.2}},{tap:"M14 x 2.0",drill:{inches:"",decimal:.4724,mm:12}},{tap:"M16 x 2.0",drill:{inches:"",decimal:.5512,mm:14}},{tap:"M20 x 2.5",drill:{inches:"",decimal:.6889,mm:17.5}}];function s(n,e){const t=document.createElement("table");t.classList.add("socket-table");const o=document.createElement("thead");o.innerHTML="socket"===e?'\n            <tr class="fixed">\n                <th>Standard</th>\n                <th>Decimal</th>\n                <th>Metric</th>\n            </tr>':'\n            <tr class="fixed">\n                <th>Tap Size</th>\n                <th>Drill Bit Size</th>\n            </tr>',t.appendChild(o);const i=document.createElement("tbody");return n.forEach((n=>{const t=document.createElement("tr");t.innerHTML="socket"===e?`\n                <td>${n.inches}</td>\n                <td class="decimal">${n.decimal}</td>\n                <td>${n.mm} mm</td>`:`\n                <td>${n.tap}</td>\n                <td>${n.drill.inches}</td>\n                <td>${n.drill.decimal}</td>`,i.appendChild(t)})),t.appendChild(i),t}n.addEventListener("click",(()=>{e.classList.toggle("visible")})),o.addEventListener("click",(function(){t.innerHTML="",i?(t.appendChild(s(r,"tap")),o.textContent="<"):(t.appendChild(s(a,"socket")),o.textContent=">"),i=!i})),t.appendChild(s(a,"socket"))})),document.getElementById("search-ship-button").addEventListener("click",(()=>{const n=localStorage.getItem("selectedBoat");if(!n)return void alert("Select a vessel");const e=`https://www.marinetraffic.com/en/ais/index/search/all?keyword=${encodeURIComponent(n)}`;window.open(e,"_blank")})),document.addEventListener("DOMContentLoaded",(()=>{const n=document.getElementById("return-button"),e=document.getElementById("vessel-title"),t=document.getElementById("vessel-form"),i=document.getElementById("task-menu"),a=document.getElementById("task-data-container"),r=document.getElementById("vessel-name"),s=document.getElementById("autocomplete-suggestions");n.addEventListener("click",(()=>{(0,o.clearPageContent)(),localStorage.removeItem("selectedBoat"),localStorage.removeItem("currentTask"),e&&(e.textContent=""),i&&(i.style.display="none"),a&&(a.innerHTML=""),t&&(t.style.display="block"),r&&(r.value="",r.disabled=!1),s&&(s.innerHTML="")}))}));const i=document.getElementById("language-select"),a=i.querySelector("img");function r(){const n=localStorage.getItem("language")||"en";a.src="en"===n?"//lukskul.github.io/Vessel-Mechanic-Log-V.2/App/icons/usa.svg":"//lukskul.github.io/Vessel-Mechanic-Log-V.2/App/icons/mexico.svg"}document.addEventListener("DOMContentLoaded",r),i.addEventListener("click",(()=>{setTimeout(r,50)}))},6:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var o=t(601),i=t.n(o),a=t(314),r=t.n(a)()(i());r.push([n.id,"#alert-popup {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: rgba(0, 0, 0, 0.8);\n    width: 100%; \n    border: 2px solid;\n    padding: 20px;\n    text-align: center;\n    display: none;\n    z-index: 1000;\n}\n\n.error-message {\n    color: #ff0000;\n    border-color: #ff0000;\n    font-size: 24px;\n    animation: flicker 1.5s infinite alternate;\n}\n\n.success-message {\n    color: #00ff00;\n    border-color: #00ff00;\n    font-size: 24px;\n}\n\n@keyframes flicker {\n    0% { opacity: 1; }\n    50% { opacity: 0.5; }\n    100% { opacity: 1; }\n}",""]);const s=r},56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},r=[],s=0;s<n.length;s++){var l=n[s],c=o.base?l[0]+o.base:l[0],d=a[c]||0,m="".concat(c," ").concat(d);a[c]=d+1;var p=t(m),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var h=i(u,o);o.byIndex=s,e.splice(s,0,{identifier:m,updater:h,references:1})}r.push(m)}return r}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=o(n=n||[],i=i||{});return function(n){n=n||[];for(var r=0;r<a.length;r++){var s=t(a[r]);e[s].references--}for(var l=o(n,i),c=0;c<a.length;c++){var d=t(a[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=l}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},138:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var o=t(601),i=t.n(o),a=t(314),r=t.n(a)()(i());r.push([n.id,"/* General Styles for Task Menu */\n.task-menu {\n    position: fixed;\n    bottom: 60px; /* Places it above the bottom menu */\n    width: 100%;\n    background-color: #090a0f;\n    overflow-x: auto; /* Enables horizontal scrolling */\n    white-space: nowrap;\n    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.3);\n    z-index: 9999;\n    display: none; /* Initially hidden, controlled by JS */\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.task-container {\n    display: flex;\n    margin-left: 2%; \n    padding: 0 10px;\n    overflow-x: auto;\n    scrollbar-width: none; /* Hide scrollbar for modern browsers */\n    -ms-overflow-style: none; /* Hide scrollbar for IE/Edge */\n}\n\n.task-container::-webkit-scrollbar {\n    display: none; /* Hide scrollbar for Webkit browsers */\n}\n\n/* Task Option - Styling Each Task in Menu */\n.task-option {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    min-width: 80px;\n    height: 80px;\n    padding: 5px;\n    border-radius: 50%;\n    cursor: pointer;\n    transition: transform 0.3s ease, background-color 0.3s ease;\n    text-align: center;\n    color: white;\n}\n\n.task-option {\n    color: white;  \n}\n\n.task-option img {\n    max-width: 40px;\n    margin-bottom: 5px;\n    fill: white; \n} \n\n/* Hover and Active state for .task-option */\n.task-option:hover, .task-option.active {\n    border: 2px solid #0ff;\n    border-radius: 30%;\n    box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff;\n}\n\n/* Disabled Task Option (Greyed Out and Unclickable) */\n.task-option.disabled {\n    color: black;\n    cursor: not-allowed;\n    pointer-events: none;  /* Prevent clicks on disabled tasks */\n    opacity: 0.4; /* Optional: Make it visually clear that it's disabled */\n}\n\n/* Styling for Clickable Tasks */\n.task-option.clickable {\n    color: white;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n/* Task Data Container (where JSON or task-specific data appears) */\n#task-data-container {\n    margin-top: 17%;\n    margin-bottom: 65%; \n}\n\n/* Task Item in Task Data Container */\n.task-item {\n    margin: 10px 0;\n    padding: 5px;\n}\n\n.task-item strong {\n    font-weight: bold;\n}\n\n/* Menu Buttons */\n.menuBoxItems {\n    display: flex;\n    gap: 10px;\n}\n\n.button {\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    padding: 10px;\n}\n\n.button img {\n    width: 24px;\n    height: 24px;\n}\n\n/* Hidden Elements for Dropdowns and Converters */\n.hidden {\n    display: none;\n}\n\n",""]);const s=r},234:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var o=t(601),i=t.n(o),a=t(314),r=t.n(a)()(i());r.push([n.id,"@keyframes shake {\n    0%, 100% { transform: translateX(0); }\n    25% { transform: translateX(-5px); }\n    50% { transform: translateX(5px); }\n    75% { transform: translateX(-5px); }\n}\n\n.shake {\n    animation: shake 0.5s;\n}\n\n.popup {\n    position: fixed; \n    transform: translateX(-50%);\n    background-color: rgb(134, 222, 134);\n    color: white;\n    padding: 10px 20px;\n    border-radius: 5px;\n    opacity: 0;\n    transition: opacity 0.5s ease-in-out;\n    bottom: 15%; \n    left: 50%; \n}\n\n.popup.show {\n    opacity: 1;\n}",""]);const s=r},291:(n,e,t)=>{"use strict";t.r(e),t.d(e,{language:()=>o});let o=localStorage.getItem("language")||"en";const i=document.getElementById("language-select");function a(n){fetch(`https://lukskul.github.io/Vessel-Mechanic-Log-V.2/App/language/${n}.json`).then((n=>n.json())).then((e=>{document.querySelectorAll("[data-translate]").forEach((n=>{const t=n.getAttribute("data-translate");n.textContent=e[t]})),o=n,localStorage.setItem("language",n)})).catch((n=>console.error("Error loading translation:",n)))}i&&i.addEventListener("click",(()=>{const n="en"===(localStorage.getItem("language")||"en")?"es":"en";document.documentElement.lang=n,a(n)})),document.addEventListener("DOMContentLoaded",(()=>{const n=localStorage.getItem("language")||"en";document.documentElement.lang=n,a(n)}))},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(r[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);o&&r[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},329:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var o=t(601),i=t.n(o),a=t(314),r=t.n(a)()(i());r.push([n.id,'#html-container {\n    position: relative; \n    z-index: 900; \n    padding-top: 17%; \n    margin-bottom: 60%;\n}\n\n#task-data-container {\n    opacity: 0; /* Start hidden */\n    transition: opacity 0.5s ease-in-out;\n}\n\n.details {\n    display: grid;\n    padding-left: 2%; \n    max-width: 600px; /* Adjust as needed */\n}\n\n.detail-row {\n    display: flex; /* Switch to flex for inline behavior */\n    justify-content: space-between; /* Ensures spacing between key and value */\n    align-items: center; /* Aligns items properly */\n    padding: 8px 0;\n    border-bottom: solid grey .01px; \n}\n\n.detail-key {\n    font-weight: bold;\n    color: #555;\n    text-align: left;\n    min-width: 200px; /* Ensures labels stay aligned */\n}\n\n.detail-value {\n    color: #00ff99;\n    padding: 5px 10px;\n    text-align: left;\n    flex: 1; /* Allows it to take up remaining space */\n}\n\n.dropdown-section {\n    float: right;\n    width: 95%; \n}\n\ndetails {\n    display: block;\n    margin-bottom: 10px;\n    text-align: right; /* Align contents inside dropdown */\n}\n\ndetails[open] summary::before {\n    transform: rotate(90deg);\n}\n\ndetails summary {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    cursor: pointer;\n    font-weight: bold;\n    list-style: none;\n}\n\ndetails summary::-webkit-details-marker {\n    display: none;\n    -webkit-appearance: none;\n}\n\ndetails summary::before {\n    content: "▶";\n    display: inline-block;\n    margin-right: 3%;\n    transition: transform 0.3s ease;\n}\n\n.section-info {\n    margin-top: 1%; \n    text-align: right; /* Ensures serial number and info are right-aligned */\n}\n\n.heading h3 {\n    margin-top: 5%; \n    margin-bottom: 3%; \n    border-bottom: 1px solid; \n}\n\n.detail-b-row {\n    overflow: hidden;  /* Clear the float */\n    padding: 4px 0;\n}\n\n.detail-b-key {\n    float: left;\n    color: #555;\n    width: 50%;  /* You can adjust this width */\n    text-align: left;\n    line-height: 2rem; \n}\n\n.detail-b-value {\n    color: #00ff99;\n    float: right;\n    width: 50%;  /* You can adjust this width */\n    text-align: left;\n    line-height: 1.5rem; \n}',""]);const s=r},395:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var o=t(601),i=t.n(o),a=t(314),r=t.n(a)()(i());r.push([n.id,".vesselForm {\n    width: 60%; \n    margin-left: 20%; \n    margin-top: 30%; \n    cursor: pointer;\n    position: relative;\n    transition: transform 0.3s ease;\n    text-align: center;\n    color: white;\n}\n\n.vesselDataForm {\n    margin-bottom: 10%; \n}\n\n.vesselFormLabel {\n    display: flex; \n    justify-content: flex-start;\n    margin-bottom: 2%; \n}\n\n.vesselForm::before {\n    content: '';\n    position: absolute;\n    top: -2px;\n    left: -2px;\n    right: -2px;\n    bottom: -2px;\n    z-index: -1;\n    transition: opacity 0.3s ease;\n    opacity: 0;\n}\n\n.vesselForm:hover::before {\n    opacity: 1;\n}\n\n.vesselForm input,\n\n.vesselForm input {\n    width: 75%;\n    height: 41px;\n    padding: 2%; \n    box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff;\n}\n\n.suggestion {\n    padding: 4%; \n    padding-top: 0px; \n    display: flex;\n    justify-content: center;\n}\n\n#vessel-title {\n    display: none; /* Hidden until a vessel is selected */\n    position: fixed;\n    top: 0;\n    width: 100%;\n    background-color: white;\n    color: black;\n    text-align: center;\n    font-size: 24px;\n    font-weight: bold;\n    padding: 15px 0;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n    z-index: 9999;\n}\n\n",""]);const s=r},499:(n,e,t)=>{"use strict";t.r(e),t.d(e,{resetShakeAlert:()=>s,shakeAlert:()=>r,showError:()=>c,showSuccessPopup:()=>l});var o=t(291);const i=document.getElementById("alert-popup");let a=0;function r(){const n=document.getElementById("data-form");n.classList.add("shake"),n.addEventListener("animationend",(function(){n.classList.remove("shake")}),{once:!0}),a++,a>2&&"en"===o.language?(c("Please select a vessel."),a=0):a>2&&"es"===o.language&&(c("Por favor, seleccione una embarcación"),a=0)}function s(){a=0}function l(n){i.innerHTML="";const e=document.createElement("div");e.className="success-message",e.textContent=n,i.appendChild(e),i.style.display="block",setTimeout((()=>{i.style.display="none"}),2e3)}function c(n){i.innerHTML="";const e=document.createElement("div");e.className="error-message",e.textContent=n,i.appendChild(e),i.style.display="block",setTimeout((()=>{i.style.display="none"}),5e3)}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},596:(n,e,t)=>{var o={"./alert.js":[499],"./bowThruster.js":[192,192],"./couplers.js":[906,906],"./index.js":[733],"./info.js":[73,73],"./language.js":[291],"./menu.js":[2],"./props.js":[427,427],"./vessel.js":[891]};function i(n){if(!t.o(o,n))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=o[n],i=e[0];return Promise.all(e.slice(1).map(t.e)).then((()=>t(i)))}i.keys=()=>Object.keys(o),i.id=596,n.exports=i},601:n=>{"use strict";n.exports=function(n){return n[1]}},659:n=>{"use strict";var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},679:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var o=t(601),i=t.n(o),a=t(314),r=t.n(a)()(i());r.push([n.id,".vesselDisplay {\n    position: fixed;\n    min-width: 100%;\n    top: 0;\n    height: 10%;\n    background-color: white;\n    border-bottom: 3px #333 solid;\n    color: black;\n    text-shadow: 1px 1px #00ff99;\n    z-index: 9;\n    text-align: center;\n    font-size: 2rem;\n    font-weight: bold;\n    padding: 2%;\n}\n\n.taskIdentifier {\n    position: fixed; \n    width: 80px; \n    height: 80px; \n    padding: 1%; \n    border-radius: 50%;\n    left: 2px; \n    top: -10px; \n    z-index: 999;\n} \n\n.logo {\n    background-color: black; \n    width: 50px; \n    height: 50px; \n    top: 0px; \n}\n\n.taskIdentifier img {\n    width: 100%; \n    height: 100%; \n    display: block; \n}\n\n.taskIdentifier::before {\n    content: '';\n    position: absolute;\n    top: -5px; \n    left: -5px; \n    right: -5px;\n    bottom: -5px; \n    border: 2px solid #0ff;\n    border-radius: 50%; \n    box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff;\n    z-index: -1; \n    transition: opacity 0.3s ease;\n    opacity: 0;\n} \n\n/* Bottom Menu Bar */\n.menu {\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    background-color: white;\n    color: white;\n    text-align: center;\n    padding: 10px 0;\n    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.3);\n    z-index: 9999;\n    justify-content: center;\n}\n\n.menuBoxItems {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n}\n\n#task-identifier {\n    opacity: 0;\n    transition: opacity 0.5s ease-in-out;\n}\n\n#task-identifier.visible {\n    opacity: 1;\n}\n\n/* Information dropdown styling */\n#info-dropdown {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 94vh; /* Adjust to fit above the menu */\n    background-color: rgba(0, 0, 0, 0.9); /* Semi-transparent black background */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    color: #00ff99; /* Neon green text for cyberpunk feel */\n    font-size: 1.5rem;\n    z-index: 1000; /* Ensure it stays above other elements */\n    box-shadow: 0 0 20px rgba(0, 255, 153, 0.6); /* Glowing effect */\n    opacity: 0; /* Start hidden */\n    transition: opacity 0.3s ease, transform 0.5s ease-in-out; /* Smooth transition for appearing */\n    transform: translateY(-100%); /* Initially off-screen */\n}\n\n#info-dropdown.visible {\n    opacity: 1;\n    transform: translateY(0); /* Slide into view */\n}\n\n#info-input {\n    font-size: 1.5rem;\n    padding: 10px;\n    margin-top: 20px;\n    text-align: center;\n    background-color: #222;\n    border: 1px solid #444;\n    width: 80%;\n    color: white;\n}\n/* Hidden by default */\n.hidden {\n    display: none;\n    pointer-events: none;\n}\n\n/* Converter Container */\n#converter-container {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.95);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 1000;\n    box-shadow: 0 0 20px rgba(0, 255, 153, 0.6);\n    opacity: 0;\n    transition: opacity 0.3s ease, transform 0.5s ease-in-out;\n    transform: translateY(-100%);\n    padding: 20px;\n    overflow: hidden; /* Prevents page scrolling */\n}\n\n/* Scrollable Div */\n.converter {\n    width: 100%;\n    max-height: 80vh;\n    overflow-y: auto; /* Table scrolls inside here */\n    background: black;\n    padding: 20px;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 255, 153, 0.6);\n}\n\n/* When visible, bring the container into view */\n#converter-container.visible {\n    opacity: 1;\n    transform: translateY(0);\n    display: flex; /* Show when visible */\n    pointer-events: auto;\n}\n\n/* Table Styling */\n.socket-table {\n    width: 100%;\n    border-collapse: collapse;\n    color: #00ff99;\n}\n\n.socket-table th, .socket-table td {\n    border: 1px solid grey;\n    padding: 8px;\n    text-align: left;\n}\n\n.socket-table th {\n    background-color: #111;\n    font-weight: bold;\n}\n\n.decimal {\n    color: grey;\n    font-size: 0.9em;\n}\n\n#toggle-table-button {\n    position: fixed;\n    top: 10%;\n    right: 20px;\n    background-color:rgba(0, 0, 0, 0.3);\n    color: white; \n  }\n  \n\n  \n  \n",""]);const s=r},733:(n,e,t)=>{"use strict";var o=t(72),i=t.n(o),a=t(825),r=t.n(a),s=t(659),l=t.n(s),c=t(56),d=t.n(c),m=t(540),p=t.n(m),u=t(113),h=t.n(u),f=t(743),g={};g.styleTagTransform=h(),g.setAttributes=d(),g.insert=l().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=p(),i()(f.A,g),f.A&&f.A.locals&&f.A.locals;var b=t(6),x={};x.styleTagTransform=h(),x.setAttributes=d(),x.insert=l().bind(null,"head"),x.domAPI=r(),x.insertStyleElement=p(),i()(b.A,x),b.A&&b.A.locals&&b.A.locals;var y=t(234),v={};v.styleTagTransform=h(),v.setAttributes=d(),v.insert=l().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=p(),i()(y.A,v),y.A&&y.A.locals&&y.A.locals;var k=t(679),w={};w.styleTagTransform=h(),w.setAttributes=d(),w.insert=l().bind(null,"head"),w.domAPI=r(),w.insertStyleElement=p(),i()(k.A,w),k.A&&k.A.locals&&k.A.locals;var E=t(395),A={};A.styleTagTransform=h(),A.setAttributes=d(),A.insert=l().bind(null,"head"),A.domAPI=r(),A.insertStyleElement=p(),i()(E.A,A),E.A&&E.A.locals&&E.A.locals;var I=t(138),S={};S.styleTagTransform=h(),S.setAttributes=d(),S.insert=l().bind(null,"head"),S.domAPI=r(),S.insertStyleElement=p(),i()(I.A,S),I.A&&I.A.locals&&I.A.locals;var L=t(329),T={};T.styleTagTransform=h(),T.setAttributes=d(),T.insert=l().bind(null,"head"),T.domAPI=r(),T.insertStyleElement=p(),i()(L.A,T),L.A&&L.A.locals&&L.A.locals;var M=t(746),j={};j.styleTagTransform=h(),j.setAttributes=d(),j.insert=l().bind(null,"head"),j.domAPI=r(),j.insertStyleElement=p(),i()(M.A,j),M.A&&M.A.locals&&M.A.locals,t(291),t(499),t(891),t(2)},743:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var o=t(601),i=t.n(o),a=t(314),r=t.n(a)()(i());r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap);"]),r.push([n.id,"*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section {\n    display: block;\n}\n\nol, ul {\n    list-style: none;\n}\n\nblockquote, q {\n    quotes: none;\n}\n\nblockquote::before, blockquote::after,\nq::before, q::after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}  \n\n.none {\n    display: none;\n}\n\n.hidden {\n    opacity: 0;\n}\n\nbody {\n    background: radial-gradient(circle, #1b2735, #090a0f);\n    color: #00ff99;\n    font-family: 'Orbitron', sans-serif;\n    justify-content: center;\n    align-items: center;\n    overflow-y: scroll;\n    margin-bottom: 20%; \n    margin: 0;\n    padding: 0;\n}\n\n#form-container {\n    padding-bottom: 100px; \n    margin-bottom: 20px; \n}\n\nselect {\n    -webkit-appearance: none; \n    -moz-appearance: none;    \n    appearance: none;         \n}\n\n.vesselDisplay, #task-main-block {\n    overflow-y: auto;\n}\n\n.padding {\n    padding: 2%; \n}\n\n.marginTop {\n    margin-top: 5%; \n}\n\nh2 {\n    margin-bottom: 2%; \n}\n\n.fixed {\n    position: fixed; \n    top: 9%; \n}\n\n\n",""]);const s=r},746:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var o=t(601),i=t.n(o),a=t(314),r=t.n(a)()(i());r.push([n.id,"/* Menu Button */\n.button {\n    position: relative; /* Ensure the pseudo-element is positioned relative to the button */\n    width: 40px; \n    height: 40px; \n    padding: 8px; \n    border-radius: 50%; \n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); \n    cursor: pointer;\n    border: solid 1px black; \n    background-color: white; \n    transition: background-color 0.3s ease;\n}\n\n.button::before {\n    content: '';\n    position: absolute;\n    top: -5px; /* Adjust to move the glow behind the button */\n    left: -5px; /* Adjust to move the glow behind the button */\n    right: -5px; /* Adjust to move the glow behind the button */\n    bottom: -5px; /* Adjust to move the glow behind the button */\n    border: 2px solid #0ff;\n    border-radius: 50%; /* Match the button's border-radius */\n    box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff;\n    z-index: -1; /* Ensure the glow is behind the button */\n    transition: opacity 0.3s ease;\n    opacity: 0;\n}\n\n.button:hover::before {\n    opacity: 1;\n}\n\n\n.button img {\n    width: 100%;\n    height: 100%;\n    display: block;\n}\n\n.svg-icon {\n    filter: brightness(0) invert(1); /* Changes black SVGs to white */\n    width: 100%; /* Adjust as needed */\n    height: auto; /* Adjust as needed */\n}\n\n #change-vessel-button {\n    margin-left: 88%;\n    position: fixed; \n    z-index: 999;  \n    top: 2px; \n    width: 55px;\n    height: 55px; \n}\n\n.saveVesselButton {\n    float: right; \n    padding: 0px; \n    margin-left: -5px\n}\n\n#shared-submit-button {\n    padding: 0px;\n}\n\n/* Toggle Switch */\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n    margin-right: 10px;\n}\n\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: -11px;\n    bottom: -3px;\n    background-color: white;\n    border: 2px solid black; \n    transition: .4s;\n    border-radius: 34px; \n}\n\n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white; \n    border: 2px solid black; \n    transition: .4s;\n    border-radius: 50%; /* Circular handle */\n}\n\ninput:checked + .slider {\n    background-color: white; \n}\n\ninput:checked + .slider:before {\n    transform: translateX(26px);\n    border: 2px solid #0ff;\n    border-radius: 50%; /* Match the button's border-radius */\n    box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff;\n    background-color: hsl(54, 50%, 58%); \n    border-color: black;\n}\n\n/* Styling for the menu item */\n.menu-item {\n    display: flex;\n    align-items: center;\n    color: #fff; /* White text for the label */\n    font-family: 'Courier New', Courier, monospace; /* Retro font */\n    margin-bottom: 15px;\n}\n\n.menu-item span {\n    font-size: 16px;\n    margin-left: 5px;\n}\n\n\n",""]);const s=r},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},891:(n,e,t)=>{"use strict";t.r(e),t.d(e,{clearPageContent:()=>c,loadHTML:()=>s});var o=t(499);let i=localStorage.getItem("selectedBoat")||"",a="";function r(n){if(document.querySelectorAll(".task-option").forEach((n=>n.classList.remove("active"))),a&&i){const e=document.querySelector(`.task-option[data-task="${n}"]`);e?(e.classList.add("active"),a=n,localStorage.setItem("currentTask",n),async function(n,e){n&&e?s():console.warn("Vessel or task not selected. Aborting load.")}(i,n)):console.warn(`Task '${n}' not found.`)}else console.warn("currentTask or currentVesselName is missing. Skipping task activation.")}function s(){const n=localStorage.getItem("currentTask");fetch(`https://lukskul.github.io/Vessel-Mechanic-Log-V.2/App/html/${n}.html`).then((n=>n.text())).then((n=>{document.getElementById("html-container").innerHTML=n,l(),function(){const n=document.getElementById("html-container");n?new MutationObserver(((n,e)=>{n.forEach((n=>{"childList"===n.type&&(l(),e.disconnect())}))})).observe(n,{childList:!0,subtree:!0}):console.error("html-container not found.")}()})).catch((n=>console.error("Error loading HTML:",n)))}async function l(){const n=localStorage.getItem("selectedBoat"),e=(localStorage.getItem("language"),localStorage.getItem("currentTask"));if(!n){console.warn("Missing vessel. JSON not loaded.");const n=document.getElementById("task-data-container");return void(n&&(n.innerHTML=""))}const o=`https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/${n}/${e}.json`;try{const n=await fetch(o);if(!n.ok)throw new Error(`Failed to fetch ${o}`);const i=await n.json();try{const n=await t(596)(`./${e}.js`),o=`${e}Populate`;"function"==typeof n[o]?n[o](i):console.error(`Function ${o} does not exist in ${e}.js`)}catch(n){console.error(`Error importing ${e}.js:`,n)}}catch(n){console.error("Error loading task JSON:",n)}}async function c(){const n=document.getElementById("html-container");n&&(n.innerHTML="");const e=document.getElementById("task-data-container");e&&(e.innerHTML="");const t=document.getElementById("task-menu");t&&(t.style.display="none");const o=document.getElementById("vessel-form");o&&(o.style.display="block")}document.addEventListener("DOMContentLoaded",(async()=>{var n,e,t;n=document.getElementById("vessel-name"),e=document.getElementById("autocomplete-suggestions"),t=await async function(){try{const n=await fetch("https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/fileIndex.json");return await n.json()}catch(n){return console.error("Error fetching vessel data:",n),{}}}(),n.addEventListener("input",(()=>{const s=n.value.toLowerCase();if(e.innerHTML="",!s)return;const l=Object.keys(t).filter((n=>n.toLowerCase().includes(s)));l.forEach((s=>{const l=document.createElement("div");l.textContent=s,l.classList.add("suggestion"),l.addEventListener("click",(()=>async function(n,e,t,s){i=n,localStorage.setItem("selectedBoat",n),a="info",localStorage.setItem("currentTask",a),document.getElementById("vessel-form").style.display="none";const l=document.getElementById("vessel-title");l.textContent=n,l.style.display="block",t.value=n,t.disabled=!0,s.innerHTML="",document.getElementById("task-menu").style.display="block";const c=document.querySelectorAll(".task-option"),d=(localStorage.getItem("language"),await async function(n){const e="https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/fileIndex.json";try{const t=await fetch(e);if(!t.ok)throw new Error(`Failed to fetch ${e}`);const o=await t.json();if(o[n]){const e=o[n],t=[];for(let o of e){const e=`https://lukskul.github.io/Vessel-Mechanic-Log-V.2/DataFiles/${n}/${o}`;try{const n=await fetch(e);if(!n.ok)throw new Error(`Failed to fetch ${e}`);const i=await n.json();t.push({file:o,data:i})}catch(n){console.error(`Error fetching ${o}:`,n)}}return t}return console.error(`Error: No files found for ${n}`),[]}catch(e){return console.error(`Error fetching file index for ${n}:`,e),[]}}(n)),m=new Set(d.map((n=>n.file.replace(".json",""))));c.forEach((n=>{const e=n.getAttribute("data-task");m.has(e)?(n.classList.remove("disabled"),n.classList.add("clickable")):(n.classList.remove("clickable"),n.classList.add("disabled"))})),function(n,e){const t=document.getElementById("task-menu"),i=document.querySelector(".task-container").querySelectorAll(".task-option");if(!e||0===e.length)return void(0,o.shakeAlert)(`No tasks available for ${n}`);t.style.display="block";const a=new Set(e.map((n=>n.file.replace(".json",""))));i.forEach((n=>{const e=n.getAttribute("data-task");a.has(e)?(n.classList.remove("disabled"),n.classList.add("clickable")):(n.classList.remove("clickable"),n.classList.add("disabled"))}))}(n,d),r("info")}(s,t[s],n,e))),e.appendChild(l)})),0===l.length&&(0,o.shakeAlert)("No Matches")})),document.querySelectorAll(".task-option").forEach((n=>{n.addEventListener("click",(function(){r(this.getAttribute("data-task"))}))})),i&&a&&r(a)}))}},o={};function i(n){var e=o[n];if(void 0!==e)return e.exports;var a=o[n]={id:n,exports:{}};return t[n](a,a.exports,i),a.exports}i.m=t,i.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return i.d(e,{a:e}),e},i.d=(n,e)=>{for(var t in e)i.o(e,t)&&!i.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},i.f={},i.e=n=>Promise.all(Object.keys(i.f).reduce(((e,t)=>(i.f[t](n,e),e)),[])),i.u=n=>n+".bundle.js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),i.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),n={},e="vml.v2:",i.l=(t,o,a,r)=>{if(n[t])n[t].push(o);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var m=c[d];if(m.getAttribute("src")==t||m.getAttribute("data-webpack")==e+a){s=m;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",e+a),s.src=t),n[t]=[o];var p=(e,o)=>{s.onerror=s.onload=null,clearTimeout(u);var i=n[t];if(delete n[t],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((n=>n(o))),e)return e(o)},u=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}},i.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{var n;i.g.importScripts&&(n=i.g.location+"");var e=i.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=t[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=n})(),(()=>{var n={792:0};i.f.j=(e,t)=>{var o=i.o(n,e)?n[e]:void 0;if(0!==o)if(o)t.push(o[2]);else{var a=new Promise(((t,i)=>o=n[e]=[t,i]));t.push(o[2]=a);var r=i.p+i.u(e),s=new Error;i.l(r,(t=>{if(i.o(n,e)&&(0!==(o=n[e])&&(n[e]=void 0),o)){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",s.name="ChunkLoadError",s.type=a,s.request=r,o[1](s)}}),"chunk-"+e,e)}};var e=(e,t)=>{var o,a,[r,s,l]=t,c=0;if(r.some((e=>0!==n[e]))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);l&&l(i)}for(e&&e(t);c<r.length;c++)a=r[c],i.o(n,a)&&n[a]&&n[a][0](),n[a]=0},t=self.webpackChunkvml_v2=self.webpackChunkvml_v2||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})(),i.nc=void 0,i(733)})();