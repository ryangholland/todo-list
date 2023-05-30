(()=>{var e={426:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,'*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/* CSS Reset above, Custom Code below */\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nh1 {\n  font-size: 3rem;\n}\n\n.main-container {\n  height: 90%;\n  display: grid;\n  grid-template: 175px 1fr / 300px 600px;\n  grid-template-areas:\n    "header header"\n    "sidebar content";\n  max-width: 1000px;\n  border: solid 1px black;\n  overflow: scroll;\n}\n\n.header {\n  grid-area: header;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(209, 201, 191);\n}\n\n.sidebar {\n  grid-area: sidebar;\n  border-right: solid 1px black;\n  padding: 1rem;\n}\n\n.content {\n  grid-area: content;\n  padding: 1rem;\n\n  display: flex;\n  flex-direction: column;\n}\n\nhr {\n  margin-block: 1rem;\n}\n\n.new-task-form {\n  width: 350px;\n  border: solid 1px black;\n  align-self: center;\n  text-align: center;\n  padding-bottom: 1rem;\n}\n\n.new-task-line {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n  padding-inline: 1rem;\n}\n\nh3 {\n  margin-top: 1rem;\n}\n\n.project-item {\n  border: solid 1px black;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  padding: 0.25rem;\n}\n\n.project-link:hover {\n  opacity: 0.7;\n  cursor: pointer;\n}\n\n#task-list > div {\n  display: flex;\n  gap: 1rem;\n  border: solid 1px black;\n  padding: 1rem;\n  margin: 0.5rem;\n\n  justify-content: space-between;\n  align-items: center;\n}',""]);const s=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=a(m,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var c=r(e,a),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},104:e=>{var t="undefined"!=typeof process&&process.pid?process.pid.toString(36):"";function n(){var e=Date.now(),t=n.last||e;return n.last=e>t?e:t+1}e.exports=e.exports.default=function(e,r){return(e||"")+""+t+n().toString(36)+(r||"")},e.exports.process=function(e,r){return(e||"")+t+n().toString(36)+(r||"")},e.exports.time=function(e,t){return(e||"")+n().toString(36)+(t||"")}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(104),t=n.n(e),r=n(379),a=n.n(r),o=n(795),i=n.n(o),s=n(569),c=n.n(s),d=n(565),l=n.n(d),u=n(216),p=n.n(u),m=n(589),f=n.n(m),v=n(426),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),a()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals;const h=(()=>{let e=[],n=null;const r=n=>{let r=(e=>({title:e,id:t()(),tasks:[]}))(n);e.push(r)},a=(e,r,a,o)=>{let i=((e,n,r,a)=>({title:e,id:t()(),description:n,dueDate:r,priority:a,completed:!1}))(e,r,a,o);n.tasks.push(i)};var o;return r("Default Project"),o=e[0],n=o,a("Task One","The first task","Tomorrow","High"),a("Task Two","Another task","Next Week","Medium"),console.log(e),{getProjects:()=>e,getActiveProject:()=>n,createProject:r,createTask:a,deleteProject:t=>{1!==e.length&&(e=e.filter((e=>e.id!=t)),e.includes(n)||(n=e[0]),y.renderAll())},deleteTask:e=>{let t=n.tasks;n.tasks=t.filter((t=>t.id!=e)),y.renderTasks()}}})(),y=((()=>{const e=document.querySelector("[data-new-project-input]"),t=document.querySelector("[data-new-project-btn]"),n=document.querySelector("[data-task-title-input]"),r=document.querySelector("[data-task-description-input]"),a=document.querySelector("[data-task-date-input]"),o=document.querySelector("[data-task-priority-input]"),i=document.querySelector("[data-new-task-btn]");t.addEventListener("click",(()=>{""!==e.value&&(h.createProject(e.value),e.value="",y.renderProjectList())})),i.addEventListener("click",(()=>{""!==n.value&&(h.createTask(n.value,r.value,a.value,o.value),n.value="",r.value="",a.value="",o.value="",y.renderTasks())})),document.addEventListener("click",(e=>{e.target.dataset.deleteProjectId&&h.deleteProject(e.target.dataset.deleteProjectId),e.target.dataset.deleteTaskId&&h.deleteTask(e.target.dataset.deleteTaskId)}))})(),(()=>{const e=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)},t=()=>{const t=document.getElementById("project-list");let n=h.getProjects();e(t),n.forEach((e=>{let n=document.createElement("div"),r=document.createElement("div"),a=document.createElement("button");r.textContent=e.title,a.textContent="X",a.dataset.deleteProjectId=e.id,r.classList.add("project-link"),n.classList.add("project-item"),n.append(r),n.append(a),t.append(n)}))},n=()=>{const e=h.getActiveProject();document.querySelector("[data-active-project-title]").textContent=e.title},r=()=>{const t=h.getActiveProject().tasks,n=document.getElementById("task-list");e(n),t.forEach((e=>{let t=document.createElement("div"),r=document.createElement("button"),a=document.createElement("div"),o=document.createElement("button");o.dataset.deleteTaskId=e.id,r.textContent="...",a.textContent=e.title,o.textContent="X",t.append(r),t.append(a),t.append(o),n.append(t)}))},a=()=>{t(),n(),r()};return a(),{renderProjectList:t,renderActiveProject:n,renderTasks:r,renderAll:a}})())})()})();