(this["webpackJsonpsample-react"]=this["webpackJsonpsample-react"]||[]).push([[0],{14:function(e,t,n){e.exports=n(37)},19:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(13),c=n.n(r),o=(n(19),n(2)),u=n(3),i=n.n(u),s=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),u=Object(o.a)(c,2),s=u[0],m=u[1],f=Object(a.useState)(""),h=Object(o.a)(f,2),p=h[0],d=h[1];return Object(a.useEffect)((function(){i.a.get("/api/users").then((function(e){return r(e)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"My Project"),null===n?l.a.createElement("p",null,"Loading..."):0===n.length?l.a.createElement("p",null,"No user available"):l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Available Users"),l.a.createElement("ol",null,n.map((function(e,t){return l.a.createElement("li",{key:t},"Name: ",e.name," - Email: ",e.email)})))),l.a.createElement("form",{onSubmit:function(){""!==s?""!==p?i.a.post("/api/users",{username:s,email:p}).then((function(){alert("Account created successfully"),window.location.reload()})).catch((function(){alert("Could not creat account. Please try again")})):alert("Please fill the email field"):alert("Please fill the username field")}},l.a.createElement("input",{onChange:function(e){return m(e.target.value)},type:"text",placeholder:"Enter your username"}),l.a.createElement("input",{onChange:function(e){return d(e.target.value)},type:"text",placeholder:"Enter your email address"}),l.a.createElement("input",{type:"submit"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.b5980dab.chunk.js.map