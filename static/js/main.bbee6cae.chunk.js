(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{11:function(t,e,c){},13:function(t,e,c){"use strict";c.r(e);var n=c(3),i=c.n(n),a=c(4),d=c(1),s=(c(9),c(10),c(11),c(0)),b=function(t){var e=t.tabs,c=t.selectedTabId,n=(t.setSelectedTabId,t.onTabSelected),i=e.find((function(t){return t.id===c}))||e[0];return Object(s.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(s.jsx)("div",{className:"tabs is-boxed",children:Object(s.jsx)("ul",{children:e.map((function(t,e){return Object(s.jsx)("li",{"data-cy":"Tab",className:t.id===i.id?"is-active":"",children:Object(s.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){i.id!==t.id&&n(t)},children:t.title})},t.id)}))})}),Object(s.jsx)("div",{className:"block","data-cy":"TabContent",children:i.content})]})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],l=function(){var t=Object(d.useState)(o[0].id),e=Object(a.a)(t,2),c=e[0],n=e[1],i=o.find((function(t){return t.id===c}))||o[0];return Object(s.jsxs)("div",{className:"section",children:[Object(s.jsx)("h1",{className:"title",children:"Selected tab is ".concat(i.title)}),Object(s.jsx)(b,{selectedTabId:c,setSelectedTabId:n,onTabSelected:function(t){o.find((function(t){return t.id===c}))?n(t.id):n(o[0].id)},selectedTab:i,tabs:o})]})};i.a.render(Object(s.jsx)(l,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.bbee6cae.chunk.js.map