(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[13],{101:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"e",(function(){return r})),a.d(t,"d",(function(){return i})),a.d(t,"f",(function(){return l})),a.d(t,"i",(function(){return o})),a.d(t,"j",(function(){return c})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u})),a.d(t,"g",(function(){return m})),a.d(t,"h",(function(){return d}));var n={position:"absolute",transform:"translate3d(-20rem, 0, 0)",height:"100vh",zIndex:-1},r={position:"absolute",transform:"translate3d(10rem, 0, 0)"},i={opacity:1,position:"absolute",height:"100vh",top:64,zIndex:999},l={opacity:1,position:"absolute",height:"100vh",top:64,zIndex:999},o={opacity:1,transform:"translate3d(0, 0px, 0)",zIndex:999,position:"absolute",pointerEvents:"none"},c={opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999,position:"absolute",pointerEvents:"none"},s={opacity:1,marginTop:"7.5rem",marginBottom:"30rem"},u={opacity:0,height:"0rem",marginTop:"0rem",marginBottom:"0rem"},m={opacity:1,transform:"translate3d(0, 0px, 0)",height:200},d={opacity:0,transform:"translate3d(0, 2px, 0)",height:0}},112:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(206),l=a(207),o=a(208),c=a(209),s=a(210),u=a(255);t.default=r.a.memo((function(){var e=Object(u.a)().t;return r.a.createElement("footer",null,r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:"https://github.com/covid19india",target:"_blank",rel:"noopener noreferrer"},"covid19india")),r.a.createElement("h5",null,e("We stand with everyone fighting on the frontlines")),r.a.createElement("div",{className:"links"},r.a.createElement("a",{href:"https://github.com/covid19india/covid19india-react",className:"github",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(i.a,null)),r.a.createElement("a",{className:"api",href:"https://api.covid19india.org",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(l.a,null)),r.a.createElement("a",{href:"https://t.me/covid19indiaorg",className:"telegram",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.a,null)),r.a.createElement("a",{href:"https://twitter.com/covid19indiaorg",target:"_blank",rel:"noopener noreferrer",className:"twitter"},r.a.createElement(c.a,null)),r.a.createElement("a",{href:"mailto:hello@covid19india.org",className:"mail",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s.a,null))))}))},125:function(e){e.exports=JSON.parse('{"english":"English","hindi":"\u0939\u093f\u0902\u0926\u0940","bengali":"\u09ac\u09be\u0982\u09b2\u09be","gujarati":"\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0","kannada":"\u0c95\u0ca8\u0ccd\u0ca8\u0ca1","malayalam":"\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02","marathi":"\u092e\u0930\u093e\u0920\u0940","odiya":"\u0b13\u0b21\u0b3f\u0b06","punjabi":"\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40","tamil":"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd","telugu":"\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"}')},149:function(e,t,a){},249:function(e,t,a){"use strict";a.r(t);var n=a(81),r=(a(149),a(112)),i=a(38),l=a(0),o=a.n(l),c=a(106);var s=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),a=t[0],s=t[1];Object(l.useEffect)((function(){u()}),[]),Object(l.useEffect)((function(){window.scrollTo(0,0)}),[]);var u=function(){fetch("https://mnrlive.github.io/api/website_data.json").then((function(e){return e.json()})).then((function(e){s(e.faq)})).catch((function(e){console.log(e)}))};return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,null,o.a.createElement("title",null,"News On Covid19"),o.a.createElement("meta",{name:"title",content:"Coronavirus Outbreak in India: Latest Map and Case Count"})),o.a.createElement("div",{className:"About"},a.map((function(e,t){return o.a.createElement("div",{key:t,className:"faq fadeInUp",style:{animationDelay:"".concat(.5+.1*t,"s")}},o.a.createElement(i.c,{to:e.answer,className:"navLink",key:t},o.a.createElement("img",{className:"image",src:e.image,alt:e.question}),o.a.createElement("a",{href:e.answer}," ",e.question)))}))),o.a.createElement(r.default,null))},u=a(101),m=a(125),d=a(212),h=a(213),b=a(214),f=a(215),p=a(216),v=a(255),g=a(84),E=a(211),w=a(246);function k(e){var t=this,a=e.pages,n=e.setExpand,r=e.darkMode,c=e.windowSize,s=Object(l.useRef)(null),u=Object(v.a)().t,m=Object(l.useCallback)((function(){c.width>768&&n(!1)}),[n,c.width]);return o.a.createElement("div",{className:"expand",ref:s,onMouseLeave:m},a.map((function(e,a){return!0===e.showInNavbar?o.a.createElement(i.b,Object.assign({to:e.pageLink,key:a},c.width<769&&{onClick:n.bind(t,!1)}),o.a.createElement("span",j(e.pageLink,e.animationDelayForNavbar),u(e.displayName))):null})),c.width<768&&o.a.createElement(O,{darkMode:r}),o.a.createElement("div",{className:"expand-bottom"},o.a.createElement("h5",null,u("A crowdsourced initiative."))))}var y=function(e){var t,a=e.pages,r=e.darkMode,c=e.showLanguageSwitcher,s=e.setShowLanguageSwitcher,f=Object(v.a)(),p=f.i18n,y=f.t,j=Object.keys(m).includes(null===p||void 0===p?void 0:p.language)?null===p||void 0===p?void 0:p.language:null===p||void 0===p||null===(t=p.options)||void 0===t?void 0:t.fallbackLng[0],S=Object(l.useState)(!1),L=Object(n.a)(S,2),x=L[0],C=L[1];Object(E.a)(x);var I=Object(w.a)(),M=Object(g.c)((function(){return{opacity:0}})),z=Object(n.a)(M,3),_=z[0],A=z[1],T=z[2];A({opacity:1}),T();var q=Object(g.f)(x,null,{from:I.width<769?u.d:u.c,enter:I.width<769?u.f:u.e,leave:I.width<769?u.d:u.c,config:{mass:1,tension:210,friction:26}}),B=Object(l.useCallback)((function(){I.width>769&&C(!0)}),[I.width]),F=Object(l.useCallback)((function(){x&&C(!1),s(!c)}),[x,c,C,s]);return o.a.createElement(g.a.div,{className:"Navbar",style:_},o.a.createElement("div",{className:"navbar-left",onClick:F.bind(this)},m[j]),o.a.createElement("div",{className:"navbar-middle"},o.a.createElement(i.b,{to:"/",onClick:C.bind(this,!1)},"Covid19",o.a.createElement("span",null,"India"))),o.a.createElement("div",Object.assign({className:"navbar-right",onMouseEnter:B},I.width<769&&{onClick:C.bind(this,!x)}),I.width<769&&o.a.createElement("span",null,y(x?"Close":"Menu")),I.width>769&&o.a.createElement(o.a.Fragment,null,o.a.createElement(i.b,{to:"/"},o.a.createElement("span",null,o.a.createElement(d.a,N("/")))),o.a.createElement(i.b,{to:"/blog"},o.a.createElement("span",null,o.a.createElement(h.a,N("/blog")))),o.a.createElement(i.b,{to:"/about"},o.a.createElement("span",null,o.a.createElement(b.a,N("/about")))),o.a.createElement("span",null,o.a.createElement(O,{darkMode:r})))),q.map((function(e){var t=e.item,n=e.key,i=e.props;return t?o.a.createElement(g.a.div,{key:n,style:i},o.a.createElement(k,{pages:a,setExpand:C,darkMode:r,windowSize:I})):o.a.createElement(g.a.div,{key:n,style:i})})))},j=function(e,t){return{className:"".concat(window.location.pathname===e?"focused":"")}},N=function(e){return{style:{stroke:window.location.pathname===e?"#4c75f2":""}}},O=function(e){var t=e.darkMode;return o.a.createElement("div",{className:"SunMoon",onClick:t.toggle},o.a.createElement("div",null,t.value?o.a.createElement(f.a,{color:"#ffc107"}):o.a.createElement(p.a,null)))},S=a(5),L=a(159),x=Object(l.lazy)((function(){return Promise.all([a.e(4),a.e(15)]).then(a.bind(null,253))})),C=Object(l.lazy)((function(){return a.e(26).then(a.bind(null,218))})),I=Object(l.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(4),a.e(12)]).then(a.bind(null,240))})),M=Object(l.lazy)((function(){return a.e(17).then(a.bind(null,254))}));t.default=function(){var e=Object(L.a)(!1),t=Object(l.useState)(!1),a=Object(n.a)(t,2),r=a[0],i=a[1],c=Object(S.h)(),u=[{pageLink:"/",view:x,displayName:"Home",showInNavbar:!0},{pageLink:"/Blog",view:s,displayName:"Blog",showInNavbar:!0},{pageLink:"/About",view:C,displayName:"About",showInNavbar:!0},{pageLink:"/state/:stateCode",view:I,displayName:"State",showInNavbar:!1}];return Object(l.useEffect)((function(){r&&(document.documentElement.scrollTo({top:0,behavior:"smooth"}),document.body.scrollTo({top:0,behavior:"smooth"}))}),[r]),o.a.createElement("div",{className:"App"},o.a.createElement(l.Suspense,{fallback:o.a.createElement("div",null)},o.a.createElement(M,{showLanguageSwitcher:r,setShowLanguageSwitcher:i})),o.a.createElement(y,Object.assign({pages:u},{darkMode:e},{showLanguageSwitcher:r,setShowLanguageSwitcher:i})),o.a.createElement(l.Suspense,{fallback:o.a.createElement("div",null)},o.a.createElement(S.d,{location:c},u.map((function(e,t){return o.a.createElement(S.b,{exact:!0,path:e.pageLink,render:function(t){t.match;return o.a.createElement(e.view,null)},key:t})})),o.a.createElement(S.a,{to:"/"}))))}}}]);
//# sourceMappingURL=13.66026e65.chunk.js.map