(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[26],{218:function(e,t,n){"use strict";n.r(t);var a=n(81),c=n(112),i=n(0),o=n.n(i),s=n(106);t.default=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),n=t[0],l=t[1];Object(i.useEffect)((function(){r()}),[]),Object(i.useEffect)((function(){window.scrollTo(0,0)}),[]);var r=function(){fetch("https://api.covid19india.org/website_data.json").then((function(e){return e.json()})).then((function(e){l(e.faq)})).catch((function(e){console.log(e)}))};return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,null,o.a.createElement("title",null,"About - covid19india.org"),o.a.createElement("meta",{name:"title",content:"Coronavirus Outbreak in India: Latest Map and Case Count"})),o.a.createElement("div",{className:"About"},n.map((function(e,t){return o.a.createElement("div",{key:t,className:"faq fadeInUp",style:{animationDelay:"".concat(.5+.1*t,"s")}},o.a.createElement("h2",{className:"question",dangerouslySetInnerHTML:{__html:e.answer}}),o.a.createElement("h2",{className:"answer"},e.question))}))),o.a.createElement(c.default,null))}}}]);
//# sourceMappingURL=26.6cf10457.chunk.js.map