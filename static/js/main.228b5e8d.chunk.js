(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,,,,function(e,a,l){},function(e,a,l){},function(e,a,l){},function(e,a,l){"use strict";l.r(a);var c=l(0),t=l(1),n=l.n(t),s=l(4),u=l.n(s),i=l(2),r=(l(11),l(5)),j=function(e){var a=e.value,l=e.label,t=e.handleClick,n=e.className;return Object(c.jsx)("button",{value:a,onClick:function(e){return t(e.target.value)},className:Object(r.a)("button",n),children:l||a})},b=(l(12),function(e){var a=e.display;return Object(c.jsx)("div",{className:"display",children:Object(c.jsx)("p",{children:a.match(/\d/g)&&a.match(/\d/g).length>9?Number(a).toExponential(2):function(e){var a=e.split(".");return a[0]=a[0].replace(/(\d)(?=(\d{3})+$)/g,"$1,"),a.join(".")}(a)})})}),d=(l(13),function(){var e=Object(t.useState)(null),a=Object(i.a)(e,2),l=a[0],n=a[1],s=Object(t.useState)("0"),u=Object(i.a)(s,2),r=u[0],d=u[1],o=Object(t.useState)(null),O=Object(i.a)(o,2),h=O[0],v=O[1],k=Object(t.useState)(!1),x=Object(i.a)(k,2),C=x[0],m=x[1],f={"/":function(e,a){return e/a},"*":function(e,a){return e*a},"+":function(e,a){return e+a},"-":function(e,a){return e-a},"=":function(e,a){return a}},g=function(e){switch(e){case"C":n(null),d("0"),v(null),m(!1);break;case"+/-":!function(){var e=-1*parseFloat(r);d(String(e))}();break;case"b":d(r.substring(0,r.length-1)||"0");break;case".":/\./.test(r)||(d(r+"."),m(!1));break;case"+":case"-":case"*":case"/":case"=":!function(e){var a=parseFloat(r);if(null==l)n(a);else if(h){var c=l||0,t=f[h](c,a);n(t),d(String(t))}m(!0),v(e)}(e);break;default:a=e,C?(d(String(a)),m(!1)):d("0"===r?String(a):r+a)}var a},N=function(e){return h===e?"selected":"orange"};return Object(c.jsx)("main",{className:"main",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(b,{display:r}),Object(c.jsx)(j,{value:"C",handleClick:g,className:"gray"}),Object(c.jsx)(j,{value:"+/-",handleClick:g,className:"gray"}),Object(c.jsx)(j,{label:"\u232b",value:"b",handleClick:g,className:"gray"}),Object(c.jsx)(j,{label:"\xf7",value:"/",handleClick:g,className:N("/")}),Object(c.jsx)(j,{value:"7",handleClick:g}),Object(c.jsx)(j,{value:"8",handleClick:g}),Object(c.jsx)(j,{value:"9",handleClick:g}),Object(c.jsx)(j,{label:"\xd7",value:"*",handleClick:g,className:N("*")}),Object(c.jsx)(j,{value:"4",handleClick:g}),Object(c.jsx)(j,{value:"5",handleClick:g}),Object(c.jsx)(j,{value:"6",handleClick:g}),Object(c.jsx)(j,{label:"\u2212",value:"-",handleClick:g,className:N("-")}),Object(c.jsx)(j,{value:"1",handleClick:g}),Object(c.jsx)(j,{value:"2",handleClick:g}),Object(c.jsx)(j,{value:"3",handleClick:g}),Object(c.jsx)(j,{label:"+",value:"+",handleClick:g,className:N("+")}),Object(c.jsx)(j,{value:"0",handleClick:g,className:"button_0"}),Object(c.jsx)(j,{value:".",handleClick:g}),Object(c.jsx)(j,{value:"=",handleClick:g,className:"orange"})]})})});u.a.render(Object(c.jsx)(n.a.Fragment,{children:Object(c.jsx)(d,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.228b5e8d.chunk.js.map