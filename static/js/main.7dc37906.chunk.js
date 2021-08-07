(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{24:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var i=s(1),c=s.n(i),a=s(17),n=s.n(a),o=(s(24),s(19)),r=s(11),l=s(7),d=s(0);function b(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("nav",{className:"navbar is-primary",role:"navigation","aria-label":"main navigation",children:[Object(d.jsxs)("div",{className:"navbar-brand",children:[Object(d.jsx)(l.b,{className:"navbar-item",to:"/",children:Object(d.jsx)("h2",{className:"title",children:e.title})}),Object(d.jsxs)("button",{type:"button",className:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",onClick:function(t){e.burger(t)},children:[Object(d.jsx)("span",{"aria-hidden":"true"}),Object(d.jsx)("span",{"aria-hidden":"true"}),Object(d.jsx)("span",{"aria-hidden":"true"})]})]}),Object(d.jsx)("div",{id:"navbarBasicExample",className:"navbar-menu",children:Object(d.jsxs)("div",{className:"navbar-start",children:[Object(d.jsx)(l.b,{to:"/",className:"navbar-item",children:"Home"}),Object(d.jsx)(l.b,{to:"/about",className:"navbar-item",children:"About"})]})})]})})}function j(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"column notification is-6-desktop is-size-3-desktop is-size-5-touch is-box m-2",children:[Object(d.jsx)("h4",{className:"title is-size-3-desktop is-size-5-touch mb-0",children:e.todo.title}),Object(d.jsx)("p",{className:"content my-2 pt-0",children:e.todo.desc}),Object(d.jsx)("button",{className:"button is-danger is-pulled-right",onClick:function(){e.onDelete(e.todo)},children:"Delete"})]})})}function h(e){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h3",{className:"title is-size-3-desktop is-size-5-touch notification is-box is-primary  has-text-centered",children:"Todos List"}),Object(d.jsx)("hr",{style:{backgroundColor:"#00d1b2"}}),Object(d.jsx)("hr",{className:"mb-6",style:{backgroundColor:"#00d1b2"}}),Object(d.jsx)("div",{className:"columns is-centered is-mobile is-multiline",children:0===e.todo.length?Object(d.jsx)("h3",{className:"notification is-box is-warning is-light mb-3 is-size-3-desktop is-size-5-touch m-1 p-3",children:"No Todos to display"}):e.todo.map((function(t){return Object(d.jsx)(j,{todo:t,onDelete:e.onDelete},t.sno)}))}),Object(d.jsx)("hr",{style:{backgroundColor:"#00d1b2"}})]})}b.defaultProps={title:"Your Title Here"};var u=function(){return Object(d.jsx)("footer",{className:"footer has-background-dark",style:{position:"relative",top:"40vh"},children:Object(d.jsx)("div",{class:"content has-text-centered has-text-white",children:Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{className:"has-text-white is-family-code",children:"Todos List"})," Created by"," ",Object(d.jsx)("a",{href:"https://github.com/ankit1509",children:"Ankit Choudhary"}),"."]})})})},m=function(e){var t=Object(i.useState)(""),s=Object(r.a)(t,2),c=s[0],a=s[1],n=Object(i.useState)(""),o=Object(r.a)(n,2),l=o[0],b=o[1];return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h3",{className:"notification is-primary title is-size-3-desktop is-size-5-touch has-text-centered",children:"Add a Todo"}),Object(d.jsx)("hr",{style:{backgroundColor:"#00d1b2"}}),Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),c&&l&&" "!==c&&" "!==l?(e.addTodo(c,l),a(""),b("")):alert("Title or Description cannot be blank")},children:[Object(d.jsx)("div",{className:"field",children:Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("input",{className:"input",value:c,onChange:function(e){a(e.target.value)},type:"text",id:"title",placeholder:"Todo Title"})})}),Object(d.jsx)("div",{className:"field",children:Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("textarea",{className:"textarea",id:"desc",value:l,onChange:function(e){b(e.target.value)},placeholder:"Todo Description"})})}),Object(d.jsx)("div",{className:"field is-grouped",children:Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{className:"button is-primary",children:"Add Todo"})})})]}),Object(d.jsx)("hr",{style:{backgroundColor:"#00d1b2"}}),Object(d.jsx)("hr",{style:{backgroundColor:"#00d1b2"}})]})},x=s(2),O=function(){return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"columns is-mobile m-6 is-box notification",children:Object(d.jsxs)("div",{className:"column is-full",children:[Object(d.jsx)("h3",{className:"title is-3 has-text-centered",children:"About Todos List"}),Object(d.jsx)("hr",{style:{backgroundColor:"#00d1b2"}}),Object(d.jsx)("div",{className:"content",children:Object(d.jsx)("p",{children:"The Todos List is a basic application that allows you to maintain the your Todo to performed by you. It a basic application for maintaining our works to do."})})]})})})};var p=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=Object(i.useState)(e),s=Object(r.a)(t,2),c=s[0],a=s[1];Object(i.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(c))}),[c]);var n=function(e,t){var s=0;0!==c.length&&(s=c[c.length-1].sno+1);var i={sno:s,title:e,desc:t};a([].concat(Object(o.a)(c),[i]))},l=function(e){a(c.filter((function(t){return t!==e})))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{title:"My TodosList",burger:function(e){document.querySelector("#"+e.target.dataset.target).classList.toggle("is-active"),e.target.classList.toggle("is-active")}}),Object(d.jsxs)(x.c,{children:[Object(d.jsx)(x.a,{exact:!0,path:"/",render:function(){return Object(d.jsxs)("div",{className:"columns is-mobile is-centered is-vcentered m-0",children:[Object(d.jsx)("div",{className:"column is-5-mobile is-8-desktop notification is-box is-primary is-light mr-2 mt-6",children:Object(d.jsx)(h,{todo:c,onDelete:l})}),Object(d.jsx)("div",{className:"column is-5-mobile is-3-desktop notification is-box is-primary is-light ml-2 mt-6",children:Object(d.jsx)(m,{addTodo:n})})]})}}),Object(d.jsx)(x.a,{exact:!0,path:"/about",children:Object(d.jsx)(O,{})})]}),Object(d.jsx)(u,{})]})},v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,35)).then((function(t){var s=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,n=t.getTTFB;s(e),i(e),c(e),a(e),n(e)}))};n.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(l.a,{children:Object(d.jsx)(p,{})})}),document.getElementById("root")),v()}},[[34,1,2]]]);
//# sourceMappingURL=main.7dc37906.chunk.js.map