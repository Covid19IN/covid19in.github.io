(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[30],{252:function(e,t,a){"use strict";a.r(t);var n=a(81),c=a(74),i=a(238),s=a(36),l=a(0),o=a.n(l),r=a(218),u=a(219),d=a(84),m=Object(l.lazy)((function(){return Promise.all([a.e(13),a.e(35)]).then(a.bind(null,230))})),p=function(e){var t=e.lastViewedLog,a=e.newUpdate,n=e.isTimelineMode,p=e.setIsTimelineMode,f=e.showUpdates,b=e.setDate,v=e.dates,j=e.setNewUpdate,E=e.setShowUpdates,O=Object(l.useMemo)((function(){return o.a.createElement(r.a,{onClick:function(){E(!f),j(!1)}})}),[j,E,f]),w=Object(l.useMemo)((function(){return o.a.createElement(u.a,{onClick:function(){E(!f)}})}),[E,f]),h=Object(l.useMemo)((function(){return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-.2 -.2 17 17",width:"16",height:"16"},o.a.createElement("path",{fillRule:"evenodd",d:"M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"}))}),[]),g=Object(d.c)({opacity:n?1:0,transform:"perspective(600px) rotateX(".concat(n?180:0,"deg)"),config:{mass:5,tension:500,friction:80}}),M=g.transform,y=g.opacity,U=Object(l.useMemo)((function(){var e=[];return[0,0,0].map((function(t,a){return e.push({animationDelay:"".concat(500+250*a,"ms")}),null})),e}),[]),k=Object(l.useCallback)((function(){p(!0),f&&E(!f)}),[p,E,f]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a.div,{className:"actions",style:{opacity:y.interpolate((function(e){return 1-e})),transform:M,pointerEvents:n?"none":""}},o.a.createElement("h5",{className:"fadeInUp",style:U[0]},"".concat(function(e){return Object(c.a)(Object(s.a)(Object(i.a)(e,"T",new Date),"Asia/Kolkata"),"dd MMM, p")}(t)," IST")),o.a.createElement("div",{className:"bell-icon fadeInUp",style:U[1]},f?w:O,a&&o.a.createElement("div",{className:"indicator"})),o.a.createElement("div",{className:"timeline-icon fadeInUp",onClick:k,style:U[2]},h)),o.a.createElement(d.a.div,{className:"actions timeline",style:{opacity:y,transform:M.interpolate((function(e){return"".concat(e," rotateX(180deg)")})),pointerEvents:n?"":"none"}},n&&o.a.createElement(l.Suspense,{fallback:o.a.createElement("div",null)},o.a.createElement(m,{setIsTimelineMode:p,setDate:b,dates:v}))))},f=a(31),b=a(163),v=a(107),j=Object(l.lazy)((function(){return a.e(29).then(a.bind(null,229))}));t.default=o.a.memo((function(e){var t=e.setDate,a=e.dates,c=Object(l.useState)(!1),i=Object(n.a)(c,2),s=i[0],r=i[1],u=Object(b.a)("newUpdate",!1),d=Object(n.a)(u,2),m=d[0],E=d[1],O=Object(b.a)("lastViewedLog",0),w=Object(n.a)(O,2),h=w[0],g=w[1],M=Object(l.useState)(!1),y=Object(n.a)(M,2),U=y[0],k=y[1],N=Object(v.a)("https://api.covid19india.org/updatelog/log.json",f.b,{revalidateOnFocus:!0}).data;return Object(l.useEffect)((function(){if(void 0!==N){var e=1e3*N.slice().reverse()[0].timestamp;e!==h&&(E(!0),g(e))}}),[h,N,g,E]),o.a.createElement(o.a.Fragment,null,o.a.createElement(p,{lastViewedLog:h,newUpdate:m,isTimelineMode:U,setIsTimelineMode:k,showUpdates:s,setDate:t,dates:a,setNewUpdate:E,setShowUpdates:r}),s&&o.a.createElement(l.Suspense,{fallback:o.a.createElement("div",null)},o.a.createElement(j,{updates:N})))}),(function(e,t){return!0}))}}]);
//# sourceMappingURL=30.b8140486.chunk.js.map