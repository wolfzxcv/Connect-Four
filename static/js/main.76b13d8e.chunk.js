(window.webpackJsonpconnect4=window.webpackJsonpconnect4||[]).push([[0],{14:function(e,t,n){e.exports=n(25)},19:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(9),i=n.n(a),c=(n(19),n(1)),u=n(7),l=function(e){var t=Object(r.useState)(e),n=Object(c.a)(t,2),o=n[0],a=n[1],i=Object(r.useState)(-2),l=Object(c.a)(i,2),s=l[0],d=l[1];return[o,function(e){var t=JSON.parse(JSON.stringify(o));a([].concat(Object(u.a)(t),[e])),d(s+1),console.log("set history",[].concat(Object(u.a)(t),[e]).slice(0,-1))},{history:o,index:s,setIndex:d}]},s=Object(r.createContext)(),d=function(e){for(var t=[],n=5;n>=0;n-=1)for(var a=0;a<7;a+=1)t.push([a,n,"white"]);var i=l([]),u=Object(c.a)(i,3),d=u[0],f=u[1],h=u[2],b=h.history,m=h.index,p=h.setIndex,x=Object(r.useState)([]),w=Object(c.a)(x,2),g=w[0],v=w[1],y=Object(r.useState)(!0),O=Object(c.a)(y,2),j=O[0],E=O[1],k=Object(r.useState)(!1),R=Object(c.a)(k,2),S=R[0],N=R[1],I=Object(r.useState)(""),B=Object(c.a)(I,2),G=B[0],H=B[1],C=function(e){H(e),N(!0)},J=function(e,t,n,r){return"white"!==e&&e===t&&e===n&&e===r},W={board:t,boardResult:g,setBoardResult:v,isRedsNext:j,setIsRedsNext:E,playAgain:function(){window.localStorage.clear(),window.location.reload()},checkIfWin:function(e){var t,n;for(t=0;t<3;t++)for(n=0;n<7;n++)J(e[t][n],e[t+1][n],e[t+2][n],e[t+3][n])&&C(e[t][n]);for(t=0;t<6;t++)for(n=0;n<4;n++)J(e[t][n],e[t][n+1],e[t][n+2],e[t][n+3])&&C(e[t][n]);for(t=0;t<3;t++)for(n=0;n<4;n++)J(e[t][n],e[t+1][n+1],e[t+2][n+2],e[t+3][n+3])&&C(e[t][n]);for(t=3;t<6;t++)for(n=0;n<4;n++)J(e[t][n],e[t-1][n+1],e[t-2][n+2],e[t-3][n+3])&&C(e[t][n])},stopGame:S,setStopGame:N,winner:G,boardHistory:d,setBoardHistory:f,undo:function(){m>0?(p(m-1),console.log("show undo result",b[m-1]),v(b[m-1]),console.log("undo boardHistory",d)):v(t)},redo:function(){m+1<b.length-1&&(p(m+1),v(b[m+1]),console.log("show redo result",b[m+1]),console.log("show redo index",m+1),console.log("redo boardHistory",d))},index:m,history:b};return o.a.createElement(s.Provider,Object.assign({value:W},e))},f=n(2),h=n(3);function b(){var e=Object(f.a)(["\n  background: ",";\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 26px;\n\n  @media (min-width: 769px) {\n    width: 100px;\n    height: 100px;\n  }\n\n  @media (max-width: 768px) {\n    width: 70px;\n    height: 70px;\n  }\n"]);return b=function(){return e},e}function m(){var e=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: blue;\n\n  @media (min-width: 769px) {\n    width: 146px;\n    height: 120px;\n  }\n\n  @media (max-width: 768px) {\n    width: 95px;\n    height: 95px;\n  }\n"]);return m=function(){return e},e}function p(){var e=Object(f.a)(["\n  display: inline-block;\n"]);return p=function(){return e},e}var x=h.a.div(p()),w=h.a.div(m()),g=h.a.div(b(),function(e){return e.color}),v=function(e){var t=e.eachGrid,n=Object(r.useContext)(s),a=n.boardResult,i=n.setBoardResult,c=n.isRedsNext,u=n.setIsRedsNext,l=n.checkIfWin,d=n.stopGame,f=(n.boardHistory,n.setBoardHistory);return o.a.createElement(x,null,o.a.createElement(w,{onClick:function(){return function(){if(!d){var e=a.filter(function(e){return e[0]===t[0]}).sort(function(e,t){return e[1]-t[1]});if(e.filter(function(e){return 5===e[1]&&"white"===e[2]}).length>0){e.find(function(e){return"white"===e[2]})[2]=c?"red":"yellow",i(a),f(a),u(!c),localStorage.setItem("Game result",JSON.stringify(a));for(var n=[],r=0;r<a.length;r+=7)n.push(a.map(function(e){return e[2]}).slice(r,r+7));l(n)}}}()},eachGrid:t},o.a.createElement(g,{color:t[2]}," ".concat(t[0],", ").concat(t[1]," "))))};function y(){var e=Object(f.a)(["\n  &:hover {\n    cursor: pointer;\n  }\n\n  @media (min-width: 769px) {\n    margin-top: 150px;\n    width: 1024px;\n  }\n\n  @media (max-width: 768px) {\n    margin-top: 50px;\n    width: 700px;\n  }\n"]);return y=function(){return e},e}var O=h.a.div(y()),j=function(){var e=Object(r.useContext)(s),t=e.board,n=e.boardResult,a=e.setBoardResult,i=e.isRedsNext,c=e.setIsRedsNext,u=e.playAgain,l=e.winner,d=e.undo,f=e.redo,h=e.index,b=e.history,m=e.boardHistory,p=e.setBoardHistory;return Object(r.useEffect)(function(){var e=JSON.parse(localStorage.getItem("Game result"));if(a(e||t),p(e||t),console.log("render",m),e){var n=e.filter(function(e){return"red"===e[2]}),r=e.filter(function(e){return"yellow"===e[2]});n.length>r.length?c(!1):c(!0)}},[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,"Next Player:",i?"Red":"Yellow"),o.a.createElement("button",{type:"button",onClick:function(){return u()}},"Restart the game"),""!==l&&o.a.createElement("div",null,"Winner is ",l),o.a.createElement("button",{type:"button",onClick:d,disabled:h<0},"undo"),o.a.createElement("button",{type:"button",onClick:f,disabled:h>b.length-2||h<0},"redo"),o.a.createElement(O,null,n.map(function(e){return o.a.createElement(v,{key:e,eachGrid:e})})))},E=function(){return o.a.createElement(d,null,o.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.76b13d8e.chunk.js.map