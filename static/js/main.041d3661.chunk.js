(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={container:"Section_container__2rwTH",title:"Section_title__38d3d"}},,function(e,t,n){e.exports={button:"FeedbackOptions_button__1HSIi"}},function(e,t,n){e.exports={message:"Notification_message__8VmRQ"}},function(e,t,n){e.exports={list:"Statistics_list__3kzSp"}},,,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),a=n.n(i),s=n(6),r=n.n(s),o=(n(15),n(3)),u=n(5),l=n.n(u);function b(e){var t=e.title,n=e.children;return Object(c.jsxs)("section",{className:l.a.container,children:[Object(c.jsx)("h2",{className:l.a.title,children:t}),n]})}var d=n(2),j=n.n(d),f=n(7),h=n.n(f);function O(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return Object(c.jsx)("button",{type:"button",className:h.a.button,onClick:function(){return n(e)},children:e},e)}))}O.propTipes={options:j.a.arrayOf(j.a.string.isRequired),onLeaveFeedback:j.a.func.isRequired};var x=n(8),g=n.n(x);function p(e){var t=e.message;return Object(c.jsx)("p",{className:g.a.message,children:t})}var v=n(9),k=n.n(v),_=function(e){var t=e.good,n=e.neutral,i=e.bad,a=e.total,s=e.positivePercentage;return a>0?Object(c.jsx)("div",{children:Object(c.jsxs)("ul",{className:k.a.list,children:[Object(c.jsxs)("li",{children:["Good: ",t]}),Object(c.jsxs)("li",{children:["Neutral: ",n]}),Object(c.jsxs)("li",{children:["Bad: ",i]}),Object(c.jsxs)("li",{children:["Total: ",a]}),Object(c.jsxs)("li",{children:["PositivePercentage: ",s,"%"]})]})}):Object(c.jsx)(p,{message:"No feedback given"})};function m(){var e=Object(i.useState)(0),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(i.useState)(0),r=Object(o.a)(s,2),u=r[0],l=r[1],d=Object(i.useState)(0),j=Object(o.a)(d,2),f=j[0],h=j[1],x={good:n,neutral:u,bad:f},g=Object.keys(x),p=function(){return n+u+f};return Object(c.jsxs)("div",{children:[Object(c.jsx)(b,{title:"Please leave feedback",children:Object(c.jsx)(O,{options:g,onLeaveFeedback:function(e){switch(e){case"good":a((function(e){return e+1}));break;case"neutral":l((function(e){return e+1}));break;case"bad":h((function(e){return e+1}));break;default:return}}})}),Object(c.jsx)(b,{title:"Statistics",children:Object(c.jsx)(_,{good:n,neutral:u,bad:f,total:p(),positivePercentage:function(){var e=p();return e?Math.round(n/e*100):0}()})})]})}var S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),S()}],[[18,1,2]]]);
//# sourceMappingURL=main.041d3661.chunk.js.map