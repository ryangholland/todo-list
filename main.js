(()=>{var e={104:e=>{var t="undefined"!=typeof process&&process.pid?process.pid.toString(36):"";function r(){var e=Date.now(),t=r.last||e;return r.last=e>t?e:t+1}e.exports=e.exports.default=function(e,o){return(e||"")+""+t+r().toString(36)+(o||"")},e.exports.process=function(e,o){return(e||"")+t+r().toString(36)+(o||"")},e.exports.time=function(e,t){return(e||"")+r().toString(36)+(t||"")}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(104),t=r.n(e);const o=(()=>{let e=[],r=null;const o=r=>{let o=(e=>({title:e,id:t()(),tasks:[]}))(r);e.push(o)},n=(e,o,n,a)=>{let c=((e,r,o,n)=>({title:e,id:t()(),description:r,dueDate:o,priority:n,completed:!1}))(e,o,n,a);r.tasks.push(c)};var a;return o("Default Project"),a=e[0],r=a,n("Task One","The first task","Tomorrow","High"),n("Task Two","Another task","Next Week","Medium"),console.log(e),{getProjects:()=>e,getActiveProject:()=>r,createProject:o,createTask:n}})(),n=((()=>{const e=document.querySelector("[data-new-project-input]"),t=document.querySelector("[data-new-project-btn]"),r=document.querySelector("[data-task-title-input]"),a=document.querySelector("[data-task-description-input]"),c=document.querySelector("[data-task-date-input]"),s=document.querySelector("[data-task-priority-input]"),i=document.querySelector("[data-new-task-btn]");t.addEventListener("click",(()=>{""!==e.value&&(o.createProject(e.value),e.value="",n.renderProjectList())})),i.addEventListener("click",(()=>{""!==r.value&&(o.createTask(r.value,a.value,c.value,s.value),r.value="",a.value="",c.value="",s.value="",n.renderTasks())}))})(),(()=>{const e=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)},t=()=>{const t=document.getElementById("project-list");let r=o.getProjects();e(t),r.forEach((e=>{let r=document.createElement("div");r.textContent=e.title,t.append(r)}))},r=()=>{const e=o.getActiveProject();document.querySelector("[data-active-project-title]").textContent=e.title},n=()=>{const t=o.getActiveProject().tasks,r=document.getElementById("task-list");e(r),t.forEach((e=>{let t=document.createElement("div");t.textContent=e.title,r.append(t)}))};return t(),r(),n(),{renderProjectList:t,renderActiveProject:r,renderTasks:n}})())})()})();