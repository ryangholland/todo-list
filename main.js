(()=>{let s=((s,a,e,t)=>{let l=!1;return{displayProps:()=>{console.log({title:"Default Task",description:"A default task.",dueDate:"Tomorrow",priority:"High",completed:l})},completeTask:()=>{l=!l}}})(),a=(s=>{let a=[];return{addTask:s=>{a.push(s)},displayTasks:()=>{a.forEach((s=>{s.displayProps()}))}}})();a.addTask(s),a.displayTasks()})();