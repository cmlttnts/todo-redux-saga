(this["webpackJsonptodo-redux-saga"]=this["webpackJsonptodo-redux-saga"]||[]).push([[0],{149:function(e,t,n){},217:function(e,t,n){"use strict";n.r(t);var r,a=n(11),c=n(49),o=n(50),i=n(221),s=(n(148),n(149),n(140)),d=n(43),u=n(224),l=n(225),p=n(222),f=n(54),b=n(223),j=n(78),O=n(138),x=36e5,h=864e5;function m(e,t){return[e>=0?Math.floor(e/t):Math.ceil(e/t),e%t]}var g={alphabetical:"Alphabetical",createdAt:"Creation Time",untilDeadline:"Until Deadline"},v=g.createdAt,y=(r={},Object(j.a)(r,g.alphabetical,(function(e,t){return e.content[0].toLowerCase().localeCompare(t.content[0].toLowerCase())})),Object(j.a)(r,g.createdAt,(function(e,t){return e.createdAt-t.createdAt})),Object(j.a)(r,g.untilDeadline,(function(e,t){return e.isComplete||!e.deadline?1:t.isComplete||!t.deadline?-1:e.deadline-t.deadline})),r),w=b.a.Option,T=function(e){var t=e.onSortSelect;return Object(a.jsx)(b.a,{defaultValue:v,onChange:function(e){t(g[e])},children:Object.entries(g).map((function(e){var t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(a.jsx)(w,{value:n,children:r},n)}))})},C=n(0),k=n.n(C),A=n(42),S="INITAL_LOAD_SUCCESS",E="INITAL_LOAD_FAILURE",_="INITIATE_UPDATE_TODO",D="ADD_TODO_SUCCESS",L="TOGGLE_TODO_SUCCESS",U="TOGGLE_TODO_FAILURE",I="REMOVE_TODO_SUCCESS",N="UPDATE_TODO_FAILURE",F="USER_CONFIRMS_UPDATE_FAILURE",R="INITAL_LOAD_REQUEST",M="ADD_TODO_REQUEST",G="TOGGLE_TODO_REQUEST",P="REMOVE_TODO_REQUEST",J="ACKNOWLEDGE_UPDATE_FAILURE",Q=function(){return{type:R}},V=function(e){return{type:M,payload:e}},z=function(e){return{type:G,payload:e}},W=function(e){return{type:P,payload:e}},Y=function(){return{type:J}},B={loadInitSuccess:function(e){return{type:S,payload:e}},loadInitFailure:function(){return{type:E}},initiateUpdateTodo:function(){return{type:_}},addTodoSuccess:function(e){return{type:D,payload:e}},toggleTodoSuccess:function(e){return{type:L,payload:e}},toggleTodoFailure:function(e){return{type:U,payload:e}},removeTodoSuccess:function(e){return{type:I,payload:e}},updateTodoFailure:function(){return{type:N}},userAckFailure:function(){return{type:F}}};function H(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  & > .add-todo-inputs {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    label > * {\n      margin-bottom: 12px;\n      margin-left: 10px;\n    }\n    @media (min-width: 768px) {\n      flex-direction: row;\n      label > .ant-picker {\n        margin-left: 0px;\n      }\n    }\n  }\n  .content-label {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    & > textarea {\n      margin-left: 1rem;\n      font-size: 1.1rem;\n      @media (min-width: 768px) {\n        max-width: 70%;\n      }\n    }\n  }\n\n  & > .add-todo-actions {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 5px;\n    & > *:not(:last-child) {\n      margin-right: 1rem;\n    }\n  }\n"]);return H=function(){return e},e}var K=l.a.TextArea,q=function(e){var t=e.onSortChange,n=Object(A.c)((function(e){return e.isLoading.update})),r=Object(A.b)(),c=Object(C.useState)(""),o=Object(d.a)(c,2),i=o[0],s=o[1],u=Object(C.useState)(""),l=Object(d.a)(u,2),b=l[0],j=l[1];return Object(a.jsxs)(X,{children:[Object(a.jsxs)("div",{className:"add-todo-inputs",children:[Object(a.jsxs)("label",{className:"content-label",children:["Todo:",Object(a.jsx)(K,{value:i,onChange:function(e){s(e.target.value)}})]}),Object(a.jsx)("div",{children:Object(a.jsxs)("label",{children:["Deadline:",Object(a.jsx)(p.a,{showTime:!0,showSecond:!1,onChange:function(e){j(e.valueOf())}})]})})]}),Object(a.jsxs)("div",{className:"add-todo-actions",children:[Object(a.jsxs)("label",{children:["Sort: ",Object(a.jsx)(T,{onSortSelect:t})]}),Object(a.jsx)(f.a,{onClick:function(){return s("")},children:"Clear"}),Object(a.jsx)(f.a,{type:"primary",loading:n,onClick:function(){r(V({content:i,deadline:b})),s("")},disabled:!i,children:"Add"})]})]})},X=o.a.div(H()),Z=n(227);function $(){var e=Object(c.a)(['\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  & > button {\n    margin-bottom: 5px;\n  }\n  & > button[role="switch"] {\n    width: 90%;\n  }\n']);return $=function(){return e},e}function ee(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n"]);return ee=function(){return e},e}function te(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  border: 2px solid grey;\n  border-radius: 4px;\n  padding: 5px 10px;\n  margin: 10px 0;\n  background-color: ",";\n  & > .deadline {\n    border-top: 2px solid grey;\n    padding-left: 5px;\n  }\n  & > .created-at {\n    border-top: 2px solid grey;\n    padding-left: 5px;\n  }\n\n  & .warn-deadline {\n    padding: 0 4px;\n    margin-right: 4px;\n    font-size: 1.1rem;\n    color: red;\n    border: 2px dashed red;\n  }\n"]);return te=function(){return e},e}var ne=function(e){var t=e.todo,n=e.isLoading,r=Object(A.b)(),c=Object(C.useState)(!1),o=Object(d.a)(c,2),i=o[0],s=o[1],l=t.deadline?function(e){var t=e-Date.now(),n=m(t,h),r=Object(d.a)(n,2),a=r[0],c=m(r[1],x),o=Object(d.a)(c,2),i=o[0],s=o[1],u=Math.floor(s/6e4);return[Object(O.a)({days:a,hours:i,minutes:u},{delimiter:","}),t<0]}(t.deadline):[null,null],p=Object(d.a)(l,2),b=p[0],j=p[1];return Object(a.jsxs)(re,{isComplete:t.isComplete,children:[Object(a.jsxs)(ae,{children:[Object(a.jsx)("div",{children:t.content}),Object(a.jsxs)(ce,{children:[Object(a.jsx)(Z.a,{checkedChildren:"Done",unCheckedChildren:"Doing",checked:t.isComplete,onChange:function(){r(z({id:t.id,isComplete:!t.isComplete}))}}),Object(a.jsx)(f.a,{danger:!0,type:"primary",onClick:function(){return s(!0)},children:"Delete"})]}),Object(a.jsx)(u.a,{visible:i,onCancel:g,footer:[Object(a.jsx)(f.a,{onClick:g,children:"Cancel"},"back"),Object(a.jsx)(f.a,{type:"primary",loading:n,onClick:function(){r(W(t.id))},children:"Yes"},"submit")],children:"Are you sure you want to delete this todo?"})]}),!t.isComplete&&b&&Object(a.jsxs)("div",{className:"deadline",children:[j&&Object(a.jsx)("span",{className:"warn-deadline",children:"!"}),"Until deadline: ",b]}),Object(a.jsxs)("div",{className:"created-at",children:["Created at: ",new Date(t.createdAt).toLocaleString()]})]});function g(){s(!1)}},re=o.a.div(te(),(function(e){return e.isComplete?"rgba(186, 252, 3, 0.6)":"lavender"})),ae=o.a.div(ee()),ce=o.a.div($());function oe(){var e=Object(c.a)(["\n  width: 90%;\n  max-width: 800px;\n"]);return oe=function(){return e},e}var ie=function(){var e=Object(A.c)((function(e){return e})),t=e.todos,n=e.errors,r=e.isLoading,c=Object(A.b)(),o=Object(C.useState)(v),i=Object(d.a)(o,2),l=i[0],p=i[1],f=Object(s.a)(t).sort(y[l]);return Object(C.useEffect)((function(){n.update&&u.a.error({title:"Connection Error",content:"Your changes were not successful. Please try again",onOk:function(){c(Y())}})})),Object(a.jsxs)(se,{children:[Object(a.jsx)(q,{onSortChange:p}),f.map((function(e){return Object(a.jsx)(ne,{todo:e,isLoading:r.update},e.id)}))]})},se=o.a.div(oe());function de(){var e=Object(c.a)(["\n  display: grid;\n  place-items: center;\n  width: 100vw;\n  height: 100vh;\n"]);return de=function(){return e},e}var ue=function(){var e=Object(A.c)((function(e){return e})),t=e.errors,n=e.isLoading,r=Object(A.b)();return Object(C.useEffect)((function(){r(Q())}),[r]),t.init?Object(a.jsx)("p",{children:"Cannot reach the server, please try again after some time"}):n.init?Object(a.jsxs)(le,{children:[Object(a.jsx)(i.a,{}),";"]}):Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Todo App"}),Object(a.jsx)(ie,{})]})},le=o.a.div(de()),pe=n(26),fe=n.n(pe),be=n(60),je=n(134),Oe=n(141),xe=n(135),he={todos:[],errors:{init:!1,update:!1},isLoading:{init:!0,update:!1}};var me=n(104),ge=n(15),ve=n.n(ge),ye=n(79),we={_fetch:function(e,t){return Object(ye.a)(ve.a.mark((function n(){var r,a;return ve.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={data:null,error:null},n.prev=1,n.next=4,fetch(e,t);case 4:if(!(a=n.sent).ok){n.next=11;break}return n.next=8,a.json();case 8:r.data=n.sent,n.next=12;break;case 11:r.error=!0;case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(1),r.error=!0;case 17:return n.abrupt("return",r);case 18:case"end":return n.stop()}}),n,null,[[1,14]])})))()},fetchInitialTodosApi:function(){return Object(ye.a)(ve.a.mark((function e(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",we._fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5"));case 1:case"end":return e.stop()}}),e)})))()},addTodoApi:function(e){return Object(ye.a)(ve.a.mark((function t(){return ve.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",we._fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}}));case 1:case"end":return t.stop()}}),t)})))()},toggleTodoApi:function(e){return Object(ye.a)(ve.a.mark((function t(){return ve.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",we._fetch("https://jsonplaceholder.typicode.com/posts/".concat(e.id),{method:"PATCH",body:JSON.stringify({id:e.id,isComplete:e.isComplete}),headers:{"Content-type":"application/json; charset=UTF-8"}}));case 1:case"end":return t.stop()}}),t)})))()},removeTodoApi:function(e){return Object(ye.a)(ve.a.mark((function t(){return ve.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",we._fetch("https://jsonplaceholder.typicode.com/posts/".concat(e),{method:"DELETE"}));case 1:case"end":return t.stop()}}),t)})))()}},Te=we,Ce=n(24),ke=n(226),Ae=ve.a.mark(Me),Se=ve.a.mark(Ge),Ee=ve.a.mark(Pe),_e=ve.a.mark(Je),De=ve.a.mark(Qe),Le=ve.a.mark(Ve),Ue=ve.a.mark(ze),Ie=ve.a.mark(We),Ne=ve.a.mark(Ye),Fe=ve.a.mark(Be),Re=ve.a.mark(He);function Me(){var e,t;return ve.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Ce.a)(Te.fetchInitialTodosApi);case 2:return e=n.sent,t=e.error?B.loadInitFailure:B.loadInitSuccess,e.error||(e.data=e.data.map((function(e){return{id:Object(ke.a)(),createdAt:Date.now()-Math.random()*x,content:e.body.slice(0,50),isComplete:Math.random()>.5,deadline:Date.now()+Math.random()*h}}))),n.next=7,Object(Ce.c)(t(e.data));case 7:case"end":return n.stop()}}),Ae)}function Ge(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.d)(R,Me);case 2:case"end":return e.stop()}}),Se)}function Pe(e){var t,n,r;return ve.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(Ce.c)(B.initiateUpdateTodo());case 2:return(t=Object(me.a)({},e)).payload=Object(me.a)(Object(me.a)({},e.payload),{},{createdAt:Date.now(),isComplete:!1}),a.next=6,Object(Ce.a)(Te.addTodoApi,t.payload);case 6:return n=a.sent,r=n.error?B.updateTodoFailure:B.addTodoSuccess,n.error||(n.data.id=Object(ke.a)()),a.next=11,Object(Ce.c)(r(n.data));case 11:case"end":return a.stop()}}),Ee)}function Je(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.d)(M,Pe);case 2:case"end":return e.stop()}}),_e)}function Qe(e){return ve.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Ce.c)(B.toggleTodoSuccess(e.payload));case 2:return t.next=4,Object(Ce.a)(Te.toggleTodoApi,e.payload);case 4:if(!t.sent.error){t.next=8;break}return t.next=8,Object(Ce.c)(B.toggleTodoFailure(e.payload));case 8:case"end":return t.stop()}}),De)}function Ve(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.d)(G,Qe);case 2:case"end":return e.stop()}}),Le)}function ze(e){var t,n;return ve.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(Ce.c)(B.initiateUpdateTodo());case 2:return r.next=4,Object(Ce.a)(Te.removeTodoApi,e.payload);case 4:return t=r.sent,n=t.error?B.updateTodoFailure:B.removeTodoSuccess,r.next=8,Object(Ce.c)(n(e.payload));case 8:case"end":return r.stop()}}),Ue)}function We(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.d)(P,ze);case 2:case"end":return e.stop()}}),Ie)}function Ye(e){return ve.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Ce.c)(B.userAckFailure(e));case 2:case"end":return t.stop()}}),Ne)}function Be(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.d)(J,Ye);case 2:case"end":return e.stop()}}),Fe)}function He(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.b)(Ge);case 2:return e.next=4,Object(Ce.b)(Je);case 4:return e.next=6,Object(Ce.b)(Ve);case 6:return e.next=8,Object(Ce.b)(We);case 8:return e.next=10,Object(Ce.b)(Be);case 10:case"end":return e.stop()}}),Re)}var Ke=Object(Oe.a)(),qe=Object(je.composeWithDevTools)(Object(be.applyMiddleware)(Ke)),Xe=Object(be.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;return Object(xe.a)(e,(function(e){switch(t.type){case S:e.todos=t.payload,e.isLoading.init=!1,e.errors.init=!1;break;case E:e.errors.init=!0,e.isLoading.init=!1;break;case _:e.isLoading.update=!0;break;case D:e.isLoading.update=!1,e.todos.push(t.payload);break;case L:var n=e.todos.find((function(e){return e.id===t.payload.id}));n?n.isComplete=t.payload.isComplete:console.error("Non-existing todo toggling attempt");break;case U:var r=e.todos.find((function(e){return e.id===t.payload.id}));r?(r.isComplete=!t.payload.isComplete,e.errors.update=!0):console.error("Non-existing todo toggling attempt");break;case I:e.isLoading.update=!1;var a=e.todos.findIndex((function(e){return e.id===t.payload}));a>-1?e.todos.splice(a,1):console.error("Non-existing todo removal attempt");break;case N:e.errors.update=!0;break;case F:e.errors.update=!1,e.isLoading.update=!1}}))}),qe);Ke.run(He);var Ze=Xe;fe.a.render(Object(a.jsx)(k.a.StrictMode,{children:Object(a.jsx)(A.a,{store:Ze,children:Object(a.jsx)(ue,{})})}),document.getElementById("root"))}},[[217,1,2]]]);
//# sourceMappingURL=main.9fe4c94e.chunk.js.map