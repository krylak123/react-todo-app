(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{178:function(e,t,n){},179:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(13),i=n.n(c),r=n(4),l=n(3),o="GET_TASKS",u="REMOVE_TASK",d="FINISH_TASK",j="CLEAR_FINISH_TASK",m="REORDER_STATE",b=function(e,t){switch(t.type){case o:return function(e,t){var n=[].concat(Object(l.a)(e),[t.task]);return localStorage.setItem("TASK_LIST",JSON.stringify(n)),n}(e,t.payload);case u:return function(e,t){var n=e.filter((function(e){return e.id!==t.id}));return localStorage.setItem("TASK_LIST",JSON.stringify(n)),n}(e,t.payload);case d:return function(e,t){var n=Object(l.a)(e);return n.forEach((function(e){e.id===t.id&&(e.isFinished=!t.isFinished)})),localStorage.setItem("TASK_LIST",JSON.stringify(n)),n}(e,t.payload);case j:return function(e){var t=e.filter((function(e){return!e.isFinished}));return localStorage.setItem("TASK_LIST",JSON.stringify(t)),t}(e);case m:return function(e,t){if(!t.result.destination)return e;var n=Object(l.a)(e),a=n.splice(t.result.source.index,1),s=Object(r.a)(a,1)[0];return n.splice(t.result.destination.index,0,s),localStorage.setItem("TASK_LIST",JSON.stringify(n)),n}(e,t.payload);default:return e}},f=n(1),h=Object(a.createContext)(null),O=function(e){var t=e.children,n=Object(a.useReducer)(b,function(){var e=JSON.parse(localStorage.getItem("TASK_LIST"));return e||[]}()),s=Object(r.a)(n,2),c=s[0],i=s[1];return Object(f.jsx)(h.Provider,{value:{state:c,addTask:function(e){i({type:o,payload:{task:e}})},removeTask:function(e){i({type:u,payload:{id:e}})},finishTask:function(e,t){i({type:d,payload:{id:e,isFinished:t}})},clearFinishTask:function(){i({type:j})},reorderState:function(e){i({type:m,payload:{result:e}})}},children:t})},_=n(70),p=n(41),x=function(){return p.a().shape({taskName:p.b().required("task name is required").trim().min(3,"task must have min 3 chars")})},v=function(){var e=Object(a.useContext)(h).addTask,t=Object(_.a)({initialValues:{taskName:""},validationSchema:x,onSubmit:function(n){var a=(new Date).getTime(),s=(new Date).toLocaleString(),c={id:a,name:n.taskName,isFinished:!1,dateAdd:s};t.values.taskName="",e(c)}});return Object(f.jsx)("form",{className:"form",onSubmit:t.handleSubmit,children:Object(f.jsx)("label",{className:"form__label",children:Object(f.jsx)("input",{type:"text",name:"taskName",className:"form__input",placeholder:"Create a new todo...",value:t.values.taskName,onChange:t.handleChange,onBlur:t.handleBlur})})})},k=n.p+"static/media/icon-sun.910b1f9a.svg",S=n.p+"static/media/icon-moon.6c03114b.svg",g=function(){var e=Object(a.useState)(!0),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(f.jsxs)("header",{className:"header",children:[Object(f.jsx)("h1",{className:"header__title",children:"TODO"}),Object(f.jsx)("div",{className:"header__toggle-wrap",children:Object(f.jsx)("img",{onClick:function(){n?document.documentElement.setAttribute("data-theme","light"):document.documentElement.setAttribute("data-theme","dark"),s((function(e){return!e}))},src:n?k:S,alt:"sun icon - dark mode turn off",className:"header__toggle"})})]})},N=n(7),T=n(20),C=n.p+"static/media/icon-check.a8fb15d0.svg",y=n.p+"static/media/icon-cross.6ee81d30.svg",A=function(e){var t=e.id,n=e.name,s=e.isFinished,c=e.dateAdd,i=e.index,r=Object(a.useContext)(h),l=r.finishTask,o=r.removeTask;return Object(f.jsx)(T.b,{draggableId:n,index:i,children:function(e){return Object(f.jsxs)("div",Object(N.a)(Object(N.a)(Object(N.a)({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{className:s?"task finish":"task",children:[Object(f.jsx)("div",{className:"task__finish-wrap",children:Object(f.jsx)("button",{name:"finish",className:"task__btn-finish",onClick:function(){return function(e){l(e,s)}(t)},children:Object(f.jsx)("img",{src:C,alt:"finish icon",className:"task__finish-icon"})})}),Object(f.jsxs)("div",{className:"task__info-wrap",children:[Object(f.jsx)("h2",{className:"task__name",children:n}),Object(f.jsxs)("p",{className:"task__date",children:["added: ",c]})]}),Object(f.jsx)("div",{className:"task__delete-wrap",children:Object(f.jsx)("button",{name:"delete",className:"task__btn-delete",onClick:function(){return function(e){o(e)}(t)},children:Object(f.jsx)("img",{src:y,alt:"delete icon",className:"task__delete-icon"})})})]}))}},t)},F=function(e){var t=e.currentFilter,n=e.count,s=Object(a.useContext)(h),c=s.state,i=s.reorderState,r=c;"active"===t?r=r.filter((function(e){return!e.isFinished})):"completed"===t&&(r=r.filter((function(e){return e.isFinished})));var l=r.map((function(e,t){return Object(f.jsx)(A,Object(N.a)(Object(N.a)({},e),{},{index:t}),e.id)}));return Object(a.useEffect)((function(){n(r.length)})),Object(f.jsx)(T.a,{onDragEnd:function(e){i(e)},children:Object(f.jsx)(T.c,{droppableId:"tasks",children:function(e){return Object(f.jsxs)("div",Object(N.a)(Object(N.a)({ref:e.innerRef},e.droppableProps),{},{className:"results__tasks",children:[l,e.placeholder]}))}})})},I=function(e){var t=e.onClickFilters,n=e.onClickClear,a=e.count;return Object(f.jsxs)("div",{className:"results__panel",children:[Object(f.jsx)("div",{className:"results__count-wrap",children:Object(f.jsxs)("p",{className:"results__count",children:[a," items left"]})}),Object(f.jsxs)("div",{className:"results__options-wrap",children:[Object(f.jsx)("button",{onClick:t,name:"all",className:"results__option active",children:"All"}),Object(f.jsx)("button",{onClick:t,name:"active",className:"results__option",children:"Active"}),Object(f.jsx)("button",{onClick:t,name:"completed",className:"results__option",children:"Completed"})]}),Object(f.jsx)("div",{className:"results__clear-wrap",children:Object(f.jsx)("button",{onClick:n,className:"results__clear",children:"Clear Completed"})})]})},E=function(){var e=Object(a.useContext)(h).clearFinishTask,t=Object(a.useState)("all"),n=Object(r.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)(0),l=Object(r.a)(i,2),o=l[0],u=l[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("section",{className:"results",children:[Object(f.jsx)(F,{currentFilter:s,count:u}),Object(f.jsx)(I,{onClickFilters:function(e){document.querySelectorAll(".results__option").forEach((function(e){return e.classList.remove("active")})),e.target.classList.add("active");var t=e.target.name;c(t)},onClickClear:function(){e(),document.querySelectorAll(".results__option").forEach((function(e){return e.classList.remove("active")})),document.querySelector(".results__option").classList.add("active"),c("all")},count:o})]}),Object(f.jsx)("p",{className:"results__info",children:"Drag and drop to reorder list"})]})},L=function(){return Object(a.useEffect)((function(){document.documentElement.setAttribute("data-theme","dark")}),[]),Object(f.jsx)(O,{children:Object(f.jsx)("main",{className:"content",children:Object(f.jsxs)("div",{className:"content__container",children:[Object(f.jsx)(g,{}),Object(f.jsx)(v,{}),Object(f.jsx)(E,{})]})})})},w=(n(178),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,180)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))});i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root")),w()}},[[179,1,2]]]);
//# sourceMappingURL=main.2d86d2ff.chunk.js.map