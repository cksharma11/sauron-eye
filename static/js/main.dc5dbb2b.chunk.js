(this["webpackJsonpsauron-reports"]=this["webpackJsonpsauron-reports"]||[]).push([[0],{19:function(e,t,a){e.exports=a(31)},24:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c);a(24),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(18),u=a(8),i=a.n(u),l=a(9),m=a(5),d=a(2),h=function(e){var t=e.headings;return r.a.createElement("tr",null,t.map((function(e){return r.a.createElement("th",{key:e},e)})))},p=function(e){var t=e.pusher,a=e.number,n=t.name,c=t.sha,o=t.passed,s=t.total,u=t.project;return r.a.createElement("tr",null,r.a.createElement("td",{className:"serial-number"},a),r.a.createElement("td",null,r.a.createElement(l.b,{to:"history?username=".concat(n)},n)),r.a.createElement("td",null,r.a.createElement("a",{href:"https://github.com/step-batch-7/".concat(u,"-").concat(n,"/commit/").concat(c)},c.substr(0,6))),r.a.createElement("td",null,"".concat(o,"/").concat(s)),r.a.createElement("td",null,"--"))},f=function(e){return e.dashboard.map((function(e,t){return r.a.createElement(p,{pusher:e,key:"".concat(e).concat(t),number:t+1})}))},E=function(e){var t=e.dashboard;return r.a.createElement("table",{border:"1"},r.a.createElement("thead",null,r.a.createElement(h,{headings:["No","Pusher","SHA","Passed/Total","Graph"]}),r.a.createElement(f,{dashboard:t})))},v=function(e,t){return new Date(t.time)-new Date(e.time)},b=function(e){var t=function(e){return Object.keys(e).map((function(t){if(!e[t].length)return{total:0,passed:0,name:t,sha:"-",project:""};var a=e[t].sort(v)[0],n=a.passed;return{total:a.total,passed:n,name:t,sha:a.sha,project:a.project}})).sort((function(e,t){return t.passed-e.passed}))}(e.pushers);return r.a.createElement("div",{className:"dashboard"},r.a.createElement(E,{dashboard:t}))},w=function(e){var t=e.failedSuites;return r.a.createElement("ul",{className:"failed-cases-container"},t.map((function(e){return r.a.createElement("li",{key:e},e)})))},g=function(e){var t=e.detail,a=e.username,n=t.time,c=t.sha,o=t.failedSuites,s=function(e,t){var a=e-t;return a<6e4?Math.round(a/1e3)+" seconds ago":a<36e5?Math.round(a/6e4)+" minutes ago":a<864e5?Math.round(a/36e5)+" hours ago":a<2592e6?"approximately "+Math.round(a/864e5)+" days ago":a<31536e6?"approximately "+Math.round(a/2592e6)+" months ago":"approximately "+Math.round(a/31536e6)+" years ago"}((new Date).getTime(),new Date(n).getTime());return r.a.createElement("div",{className:"report"},r.a.createElement("p",null,"".concat(a," | ").concat(c," | ").concat(s)),r.a.createElement(w,{failedSuites:o}))},y=function(e){var t=e.details,a=e.username;return r.a.createElement("div",{className:"details"},t.map((function(e){return r.a.createElement(g,{detail:e,username:a,key:e})})))},j=function(e){var t=e.pushers,a=function(){var e=window.location.hash.split("?")[1];return new URLSearchParams(e).get("username")}(),n=t[a];return r.a.createElement(y,{details:n,username:a})},k=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){setInterval((function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(fetch("https://gollum-ji.herokuapp.com").then((function(e){return e.json()})));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}})));case 2:e=t.sent,c(e);case 4:case"end":return t.stop()}}))}),5e3)}),[]),r.a.createElement(l.a,{history:Object(d.a)()},r.a.createElement(m.a,{exact:!0,path:"/",component:b.bind(void 0,{pushers:a})}),r.a.createElement(m.a,{path:"/history",component:j.bind(void 0,{pushers:a})}))};o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.dc5dbb2b.chunk.js.map