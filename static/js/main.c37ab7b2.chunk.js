(this["webpackJsonpnew-quiz"]=this["webpackJsonpnew-quiz"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),i=(n(9),n(1));n(10),n(11);var u=function(){var e=Object(a.useState)([{id:1,ques:"What is the current year",options:["2017","2018","2019","2020"],answer:"2020"},{id:2,ques:"What is the current Month",options:["Januaray","August","June","May"],answer:"June"}]),t=Object(i.a)(e,2),n=t[0],r=(t[1],Object(a.useState)(1)),c=Object(i.a)(r,2),u=c[0],s=c[1],l=Object(a.useState)(""),m=Object(i.a)(l,2),d=m[0],b=m[1],p=Object(a.useState)(""),f=Object(i.a)(p,2),w=(f[0],f[1]),h=n.filter((function(e){return e.id==u}));return o.a.createElement("div",{className:"App"},o.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),w(d),alert("Correct answer is "+h[0].answer)}(e)},className:"editForm"},o.a.createElement("div",null,h[0].ques),h[0].options.map((function(e){return o.a.createElement("div",{key:e},o.a.createElement("input",{onClick:function(t){return b(e)},type:"radio",value:e}),e)})),o.a.createElement("button",{disabled:1==u,type:"button",onClick:function(){s(u-1)}},"Previous"),o.a.createElement("button",{type:"submit"},"Submit"),o.a.createElement("button",{disabled:2==u,type:"button",onClick:function(){s(u+1)}},"Next"),o.a.createElement("button",{type:"button",onClick:function(){alert("You have selected "+d+"  Correct answer is "+h[0].answer),console.log(d)}},"Show Answer")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.c37ab7b2.chunk.js.map