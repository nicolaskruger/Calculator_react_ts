(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{23:function(n,t,c){},24:function(n,t,c){},26:function(n,t,c){},27:function(n,t,c){},35:function(n,t){},36:function(n,t,c){},37:function(n,t,c){"use strict";c.r(t);var e=c(4),i=c.n(e),s=c(16),a=c.n(s),r=(c(23),c(5)),u=(c(24),c(1));var o=function(n){var t=n.info,c=n.result;return Object(u.jsxs)("section",{className:"display__section",children:[Object(u.jsx)("h1",{className:"h1__display",children:t}),Object(u.jsx)("h2",{className:"h2__display",children:c})]})};c(26);var l=function(n){var t=n.writeInfo,c={back:n.back,"=":n.resultFunc};return Object(u.jsx)("section",{className:"section__buttons",children:Object(u.jsx)("ul",{className:"ul__buttons",children:["","","back","/","7","8","9","*","4","5","6","-","1","2","3","+","","0",".","="].map((function(n,e){return Object(u.jsx)("li",{onClick:function(){!function(n){var e=c[n];void 0!==e?e():t(n)}(n)},className:"li__butons",children:n},e)}))})})},j=(c(27),c(39));var b=function(n){try{return String(Object(j.a)(n))}catch(t){return"Invalid Exprecion"}};var f=function(){var n=e.useState(""),t=Object(r.a)(n,2),c=t[0],i=t[1],s=e.useState(""),a=Object(r.a)(s,2),j=a[0],f=a[1];return Object(u.jsxs)("main",{className:"calculator__main",children:[Object(u.jsx)(o,{info:c,result:j}),Object(u.jsx)(l,{back:function(){i(c.slice(0,-1))},resultFunc:function(){f(b(c))},writeInfo:function(n){i(c+n)}})]})};c(36);var d=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(f,{})})},h=function(n){n&&n instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,e=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(n),e(n),i(n),s(n),a(n)}))};a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),h()}},[[37,1,2]]]);
//# sourceMappingURL=main.1d9dac59.chunk.js.map