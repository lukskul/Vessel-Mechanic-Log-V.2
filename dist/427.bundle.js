"use strict";(self.webpackChunkvml_v2=self.webpackChunkvml_v2||[]).push([[427],{427:(e,t,n)=>{function i(e){document.querySelector(".props-html");const t=document.querySelector(".details"),n=localStorage.getItem("language")||"en";if(!e||!Array.isArray(e.propDetails))return void console.error("Missing or incorrect prop details. Expecting an array.");t.innerHTML="";const i={"diameter x pitch":"es"===n?"Diámetro x Paso":"Diameter x Pitch",markings:"es"===n?"Marcas":"Markings",Bore:"es"===n?"Agujero":"Bore",Material:"Material"};e.propDetails.forEach(((e,i)=>{const a=document.createElement("div");a.classList.add("dropdown-section");const d=document.createElement("details"),s=document.createElement("summary");d.setAttribute("open",""),s.textContent=e.direction||("es"===n?"Dirección desconocida":"Unknown Direction"),d.appendChild(s);const c=document.createElement("div");c.classList.add("section-info"),c.innerHTML=`<strong>${"es"===n?"Número de Serie":"Serial Num."}</strong> ${e.serialNumber||"<i>N/A</i>"}`,d.appendChild(c);const r=document.createElement("div");r.classList.add("section-info"),r.innerHTML=` ${e.info||'<i>""</i>'}`,d.appendChild(r),a.appendChild(d),t.appendChild(a)}));const a=document.createElement("div");a.classList.add("heading");const d=document.createElement("h3");d.textContent="es"===n?"Tuerca:":"Nut:",a.appendChild(d),["PropNutSize","NutRestraint"].forEach((t=>{const n=document.createElement("div");n.classList.add("detail-b-row"),n.innerHTML=`\n            <div class="detail-b-key">${t.replace(/([A-Z])/g," $1")}: </div>\n            <div class="detail-b-value">${e.propDetails[0][t]||""}</div>\n        `,a.appendChild(n)})),t.appendChild(a);const s=document.createElement("div");s.classList.add("heading");const c=document.createElement("h3");c.textContent="es"===n?"Especificaciones:":"Specs:",s.appendChild(c),Object.keys(i).forEach((t=>{const n=document.createElement("div");n.classList.add("detail-b-row"),n.innerHTML=`\n            <div class="detail-b-key">${i[t]}: </div>\n            <div class="detail-b-value">${e.propDetails[0][t]||""}</div>\n        `,s.appendChild(n)})),t.appendChild(s)}n.r(t),n.d(t,{propsPopulate:()=>i})}}]);