(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(3),i=n.n(c),a=n(5),d=n(1),s=(n(10),n(11),n(12),n(4)),o=n.n(s),b=n(0),l=function(t){var e=t.tabs,n=t.selectedTabId,c=(t.setSelectedTabId,t.onTabSelected),i=e.find((function(t){return t.id===n}))||e[0];return Object(b.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(b.jsx)("div",{className:"tabs is-boxed",children:Object(b.jsx)("ul",{children:e.map((function(t,e){var n=t.id,a=t.title,d=t.content;return Object(b.jsx)("li",{"data-cy":"Tab",className:o()({"is-active":n===i.id}),children:Object(b.jsx)("a",{href:"#".concat(n),"data-cy":"TabLink",onClick:function(){!function(t){var e=t.id,n=t.title,a=t.content;i.id!==e&&c({id:e,title:n,content:a})}({id:n,title:a,content:d})},children:a})},n)}))})}),Object(b.jsx)("div",{className:"block","data-cy":"TabContent",children:i.content})]})},r=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t=Object(d.useState)(r[0].id),e=Object(a.a)(t,2),n=e[0],c=e[1],i=r.find((function(t){return t.id===n}))||r[0];return Object(b.jsxs)("div",{className:"section",children:[Object(b.jsx)("h1",{className:"title",children:"Selected tab is ".concat(i.title)}),Object(b.jsx)(l,{selectedTabId:n,setSelectedTabId:c,onTabSelected:function(t){var e=t.id;t.title,t.content;r.find((function(t){return t.id===n}))?c(e):c(r[0].id)},tabs:r})]})};i.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.72d6297f.chunk.js.map