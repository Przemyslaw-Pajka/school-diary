(this["webpackJsonpschool-diary"]=this["webpackJsonpschool-diary"]||[]).push([[0],{101:function(e,n,t){},102:function(e,n,t){},207:function(e,n,t){"use strict";t.r(n);var a,r,i,c,o,s,l,d,u,b,j,p,x,O,h,m,g,f,w,z,y,k,v,S=t(0),I=t.n(S),N=t(87),D=t.n(N),C=(t(101),t(102),t(43)),E=t(6),J=t(11),F=t(2),W=t(3),U=W.a.form(a||(a=Object(F.a)(["\n  padding: 48px;\n  display: flex;\n  flex-direction: column;\n  max-width: 300px;\n\n  legend {\n    font-size: 32px;\n    margin-bottom: 25px;\n  }\n  label {\n    font-weight: 800;\n  }\n  input,\n  select {\n    margin-bottom: 10px;\n  }\n"]))),Z=Object(W.a)(U)(r||(r=Object(F.a)(["\n"]))),q=t(25),L=W.a.button(i||(i=Object(F.a)(["\n  background-color: #5469d4;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  line-height: 28px;\n  padding: 8px 16px;\n  width: 100%;\n  min-height: 44px;\n  border-radius: 4px;\n  border: 3px transparent dashed;\n  outline-color: transparent;\n  &:hover {\n    background: #fff;\n    border-style: solid;\n    border-color: #5469d4;\n    color: rgb(84, 105, 212);\n    transition: all 0.3s ease;\n  }\n  &:focus-visible {\n    border-color: #e00;\n    color: rgb(84, 105, 212);\n    background-color: #fff;\n  }\n"]))),_=Object(W.a)(L)(c||(c=Object(F.a)(["\n"]))),B=t(1),T=function(e){return Object(B.jsx)(_,{type:"submit",children:e.children})},P=t(26),R=t(96),M=W.a.div(o||(o=Object(F.a)(['\n  padding-bottom: 24px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  input,\n  select {\n    font-size: 16px;\n    line-height: 28px;\n    padding: 8px 16px;\n    min-height: 44px;\n    border: unset;\n    border-radius: 4px;\n    box-sizing: content-box;\n    outline-color: rgb(84 105 212 / 0.5);\n    background-color: rgb(255, 255, 255);\n    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,\n      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,\n      rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,\n      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;\n  }\n  input[data-light-mode="true"]:focus-visible,\n  select[data-light-mode="true"]:focus-visible {\n    outline: 2px #e00 dashed;\n    background-color: #fff;\n  }\n  input[data-light-mode="false"]:focus-visible,\n  select[data-light-mode="false"]:focus-visible {\n    outline: unset;\n    background-color: #fffc97;\n  }\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n']))),A=W.a.div(s||(s=Object(F.a)(["\n  font-size: 14px;\n  font-weight: 600;\n  display: block;\n  margin: 10px 0px;\n  color: #ff0000;\n"]))),Y=W.a.label(l||(l=Object(F.a)(["\n  font-size: 14px;\n  font-weight: 600;\n  display: block;\n  margin-bottom: 10px;\n  color: #000;\n"]))),H=function(e){var n=e.label,t=Object(R.a)(e,["label"]),a=Object(q.c)(t),r=Object(J.a)(a,2),i=r[0],c=r[1];return Object(B.jsxs)(M,{children:[Object(B.jsx)(Y,{htmlFor:t.id||t.name,children:n}),Object(B.jsx)(q.a,Object(P.a)(Object(P.a)({as:t.as},i),t)),c.touched&&c.error?Object(B.jsx)(A,{children:c.error}):null]})},V=t(208),$=["biologia","chemia","fizyka","geografia","historia","informatyka","j.angielski","j.polski","j.niemiecki","matematyka","religia","wos"],G=$.map((function(e){return"Nauczyciel ".concat(e)})),K={UCZEN:"Ucze\u0144",NAUCZYCIEL:"Nauczyciel"},Q=function(e){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(H,{id:"name",label:"Wpisz imi\u0119:",name:"name",type:"text",as:"input",value:e.name,placeholder:"Wpisz imi\u0119 u\u017cytkownika",required:!0}),Object(B.jsx)(H,{id:"surname",label:"Wpisz nazwisko:",name:"surname",type:"text",as:"input",value:e.surname,placeholder:"Wpisz nazwisko u\u017cytkownika",required:!0}),Object(B.jsx)(H,{id:"password",label:"Wpisz has\u0142o:",name:"password",type:"password",as:"input",value:e.password,placeholder:"Wpisz has\u0142o u\u017cytkownika",required:!0}),Object(B.jsxs)(H,{id:"role",as:"select",name:"role",label:"Rola:",required:!0,children:[Object(B.jsx)("option",{value:"",children:"Wybierz typ konta"}),Object.values(K).map((function(e){return Object(B.jsx)("option",{value:e,children:e},Object(V.a)())}))]}),e.values.role===K.NAUCZYCIEL&&Object(B.jsxs)(H,{id:"teacherType",as:"select",name:"teacherType",label:"Typ nauczyciela",required:!0,children:[Object(B.jsx)("option",{value:"",children:"Wybierz typ konta"}),G.map((function(e){return Object(B.jsx)("option",{value:e,children:e},Object(V.a)())}))]})]})},X=t(18),ee=X.a().shape({name:X.b().min(3,"Imi\u0119 powinno zawiera\u0107 przynajmniej 3 znaki"),surname:X.b().min(3,"Nazwisko powinno zawiera\u0107 przynajmniej 3 znaki"),password:X.b().matches(/^[0-9]+$/,"ID powinno sk\u0142ada\u0107 si\u0119 tylko z cyfr").min(6,"Has\u0142o powinno zawiera\u0107 6 znak\xf3w").max(6,"Has\u0142o powinno zawiera\u0107 6 znak\xf3w")}),ne=t(50),te=t(9),ae=t(10),re=t(4),ie=JSON.parse(localStorage.getItem("users")),ce=function e(n){var t,a=function(e){return Math.floor(Math.pow(10,e-1)+9*Math.random()*Math.pow(10,e-1))}(n);return(t=a,!1!==Boolean(ie)&&ie.some((function(e){return e.id===t})))?e(n):a},oe=t(46),se=function(e,n){var t=localStorage.getItem(n)?JSON.parse(localStorage.getItem(n)):[];t.push(e),localStorage.setItem(n,JSON.stringify(t))},le="users",de="studentJournal",ue=function e(n){var t;return Object(re.a)(this,e),this.newUser=((t=n).id=ce(6),alert("Pilnie zapisz na kartce to ID, bedzie Ci potrzebne do logowania ".concat(t.id)),t),se(this.newUser,le),this.newUser},be=function e(n){Object(re.a)(this,e),this.newUser=new ue(n),this.newStudent=function(e){var n=$.reduce((function(e,n){return Object.assign(e,Object(oe.a)({},n,{oceny:[],srednia:null}))}),{});return Object(P.a)(Object(P.a)({},e),{},{subjects:Object(P.a)({},n)})}(this.newUser),se(this.newStudent,de)},je=function(e){Object(te.a)(n,e);Object(ae.a)(n);function n(e){return Object(re.a)(this,n),new ue(e),Object(ne.a)(undefined)}return n}(ue),pe=Object(W.a)(L)(d||(d=Object(F.a)(["\n    width: max-content;\n    margin: 30px 0;\n"]))),xe=function(){var e=Object(E.f)();return Object(B.jsx)(pe,{onClick:function(){return e.goBack()},children:"Powr\xf3\u0107\xa0do strony g\u0142\xf3wnej"})},Oe=function(){return Object(B.jsx)(q.b,{initialValues:{},onSubmit:function(e){console.log("values",e),function(e){switch(e.role){case K.UCZEN:new be(e);break;case K.NAUCZYCIEL:new je(e)}}(e)},validationSchema:ee,children:function(e){return Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)(Z,{onReset:e.handleReset,onSubmit:e.handleSubmit,children:[Object(B.jsx)(xe,{}),Object(B.jsx)("legend",{children:"Rejestracja nowego u\u017cytkownika"}),Object(B.jsx)(Q,{values:e.values}),Object(B.jsx)(T,{children:"Zarejestruj konto"})]})})}})},he=function(){var e=Object(S.useState)(!0),n=Object(J.a)(e,2),t=n[0];n[1];return Object(B.jsx)(B.Fragment,{children:t?Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(Oe,{})}):null})},me=function(e,n){sessionStorage.setItem("login",JSON.stringify(e)),function(e,n){var t;switch(e.role){case K.UCZEN:t="/uczen";break;case K.NAUCZYCIEL:t="/nauczyciel"}n.push(t)}(e,n)},ge=Object(W.a)(U)(u||(u=Object(F.a)(["\n\n"]))),fe=function(e){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(H,{id:"userID",label:"Wpisz ID:",name:"userID",type:"number",as:"input",min:"0",value:e.userID,placeholder:"Wpisz ID u\u017cytkownika",required:!0}),Object(B.jsx)(H,{id:"password",label:"Wpisz has\u0142o:",name:"password",type:"password",as:"input",value:e.password,placeholder:"Wpisz has\u0142o u\u017cytkownika",required:!0})]})},we=W.a.legend(b||(b=Object(F.a)(["\nfont-size: 32px;\n   margin: 0; \n   padding: 20px 0;\n"]))),ze=function(){return Object(B.jsx)(we,{children:"Panel logowania"})},ye=X.a().shape({userID:X.b().matches(/^[0-9]+$/,"ID powinno sk\u0142ada\u0107 si\u0119 tylko z cyfr").min(6,"ID powinno zawiera\u0107 6 znak\xf3w").max(6,"ID powinno zawiera\u0107 6 znak\xf3w"),password:X.b().min(6,"Has\u0142o powinno zawiera\u0107 minimum 6 znak\xf3w")}),ke=function(){var e=Object(E.f)();return Object(B.jsx)(q.b,{initialValues:{},onSubmit:function(n){var t=function(e){var n=JSON.parse(localStorage.getItem(le));return!1!==!(null===n)&&function(e,n){return e.find((function(e){return e.id===n.userID&&e.password===n.password}))}(n,e)}(n),a=!!t;return console.log(n),!!a&&me(t,e)},validationSchema:ye,children:function(e){return Object(B.jsxs)(ge,{onReset:e.handleReset,onSubmit:e.handleSubmit,children:[Object(B.jsx)(ze,{}),Object(B.jsx)(fe,{values:e.values}),Object(B.jsx)(T,{children:"Zaloguj si\u0119"})]})}})},ve=function(e){return Object(B.jsx)(ke,{})},Se=W.a.div(j||(j=Object(F.a)(["\n  font-size: 1.5rem;\n"]))),Ie=W.a.div(p||(p=Object(F.a)(["\n color: green;\n    font-weight: 700;\n"]))),Ne=W.a.button(x||(x=Object(F.a)(["\n    font-size: 1.3rem;\n    cursor: pointer;\n    display: block;\n    color: red;\n    padding: 5px;\n    margin: 1rem 0 2rem;\n    font-weight: 700;\n    border: 2px solid #000;\n"]))),De=function(){var e=Object(E.f)(),n=JSON.parse(sessionStorage.getItem("login"));return Object(B.jsxs)(Se,{children:["Cze\u015b\u0107 ",Object(B.jsxs)(Ie,{children:[n.name," ",n.surname]}),Object(B.jsx)(Ne,{onClick:function(){return function(e){e.goBack(),sessionStorage.setItem("login",null)}(e)},children:"Wyloguj"})]})},Ce=(W.a.table(O||(O=Object(F.a)(["\n\n"]))),W.a.td(h||(h=Object(F.a)(["\n    padding: 0.6rem 1rem;\n  text-align: center;\n"])))),Ee=W.a.td(m||(m=Object(F.a)(["\n border-right: none;\n"]))),Je=W.a.td(g||(g=Object(F.a)(["\n  min-width: 400px;\n"]))),Fe=W.a.span(f||(f=Object(F.a)(['\n    display: inline-flex;\n    margin: 5px;\n    width: 25px;\n    height: 25px;\n    align-items: center;\n    justify-content: center;\n    &[data-grade="1"] {\n      background-color: #ff0000;\n    }\n    &[data-grade="2"] {\n      background-color: #ffa500;\n    }\n    &[data-grade="3"] {\n      background-color: #ffff00;\n    }\n    &[data-grade="4"] {\n      background-color: #adff2f;\n    }\n    &[data-grade="5"],\n    &[data-grade="6"] {\n      background-color: #008000;\n    }\n']))),We=function(e){return Object(B.jsx)(B.Fragment,{children:e.subject.oceny.map((function(e){return Object(B.jsx)(Fe,{"data-grade":e,children:e},Object(V.a)())}))})},Ue=function(e){var n=JSON.parse(sessionStorage.getItem("login")),t=JSON.parse(localStorage.getItem(de)).find((function(e){return e.id===n.id}));return Object(B.jsxs)("table",{children:[Object(B.jsx)("thead",{children:Object(B.jsxs)("tr",{children:[Object(B.jsx)("th",{children:"Przedmiot"}),Object(B.jsx)("th",{children:"Oceny"}),Object(B.jsx)("th",{children:"\u015arednia"})]})}),Object(B.jsx)("tbody",{children:Object.entries(t.subjects).map((function(e){return Object(B.jsxs)("tr",{children:[Object(B.jsx)(Ce,{children:e[0]}),Object(B.jsx)(Je,{children:Object(B.jsx)(We,{subject:e[1]})}),Object(B.jsxs)(Ee,{children:[" ",e[1].srednia," "]})]},Object(V.a)())}))})]})},Ze=function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(De,{}),Object(B.jsx)(Ue,{})]})},qe=[1,2,3,4,5,6],Le=W.a.form(w||(w=Object(F.a)(["\n margin: 3rem 0;\n  display: flex;\n  flex-direction: column;\n  width: max-content;\n"]))),_e=W.a.select(z||(z=Object(F.a)(["\n margin-bottom: 0.3rem;\n    padding: 0.2rem;\n    font-size: 1rem;\n"]))),Be=W.a.legend(y||(y=Object(F.a)(["\n font-size: 1.5rem;\n    margin-bottom: 0.7rem;\n"]))),Te=W.a.select(k||(k=Object(F.a)(["\n margin-bottom: 0.3rem;\n    padding: 0.2rem;\n    font-size: 1rem;\n"]))),Pe=W.a.button(v||(v=Object(F.a)(["\n font-size: 1rem;\n color: rgb(2, 128, 2);\n    font-weight: 700;\n    padding: 0.6rem 0;\n    cursor: pointer;\n"]))),Re=function(){var e=Object(S.useState)(JSON.parse(localStorage.getItem(de))),n=Object(J.a)(e,2),t=n[0];return function(e){Object(S.useEffect)((function(){window.addEventListener("storage",(function(){e(JSON.parse(localStorage.getItem(de))||[])}))}),[])}(n[1]),Object(B.jsxs)(Le,{onSubmit:function(e){!function(e,n){e.preventDefault();var t=JSON.parse(sessionStorage.getItem("login")).teacherType.split(" ")[1],a={grade:document.getElementById("adding-box__grades").value,studentID:Number(document.getElementById("adding-box__student-name").value)},r=n.find((function(e){return e.id===a.studentID}));r.subjects[t].oceny.push(parseInt(a.grade));var i=function(e,n,t,a){return e.map((function(e){if(e.id===a.studentID){var r=n.subjects[t].oceny.reduce((function(e,n){return e+n}));n.subjects[t].srednia=function(e,n,t){return(e/n.subjects[t].oceny.length).toFixed(1)}(r,n,t),e=n}return e}))}(n,r,t,a);localStorage.setItem(de,JSON.stringify(i)),(e=document.createEvent("Event")).initEvent("storage",!0,!0),window.dispatchEvent(e)}(e,t),e.target[0].selectedIndex=0},children:[Object(B.jsx)(Be,{children:"Dodawanie ocen"}),Object(B.jsxs)(_e,{id:"adding-box__student-name",defaultValue:"Wybierz ucznia",required:!0,children:[Object(B.jsx)("option",{value:"",disabled:!0,hidden:!0,children:"Wybierz ucznia"}),t.map((function(e){return Object(B.jsxs)("option",{value:"".concat(e.id),children:["".concat(e.name," ").concat(e.surname)," ","(".concat(e.id,")")]},Object(V.a)())}))]}),Object(B.jsx)(Te,{id:"adding-box__grades",children:qe.map((function(e){return Object(B.jsx)("option",{value:e,children:e},Object(V.a)())}))}),Object(B.jsx)(Pe,{children:"Dodaj ocen\u0119"})]})},Me=function(e){var n=JSON.parse(sessionStorage.getItem("login")).teacherType.split(" ")[1],t=Object(S.useState)(JSON.parse(localStorage.getItem(de))),a=Object(J.a)(t,2),r=a[0],i=a[1];return Object(S.useEffect)((function(){window.addEventListener("storage",(function(){i(JSON.parse(localStorage.getItem(de))||[])}))}),[]),Object(B.jsxs)("table",{children:[Object(B.jsx)("thead",{children:Object(B.jsxs)("tr",{children:[Object(B.jsx)("th",{children:"Ucze\u0144"}),Object(B.jsx)("th",{children:"Oceny"}),Object(B.jsx)("th",{children:"\u015arednia"})]})}),Object(B.jsx)("tbody",{children:r.map((function(e){return Object(B.jsxs)("tr",{children:[Object(B.jsx)(Ce,{children:"".concat(e.name," ").concat(e.surname)}),Object(B.jsx)(Je,{children:Object(B.jsx)(We,{subject:e.subjects[n]})}),Object(B.jsx)(Ee,{children:e.subjects[n].srednia})]},Object(V.a)())}))})]})},Ae=function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(De,{}),Object(B.jsx)(Me,{}),Object(B.jsx)(Re,{})]})},Ye=function(){return Object(B.jsxs)(C.a,{children:[Object(B.jsx)(E.b,{path:"/admin",component:he}),Object(B.jsx)(E.b,{path:"/uczen",component:Ze}),Object(B.jsx)(E.b,{path:"/nauczyciel",component:Ae}),Object(B.jsx)(E.b,{exact:!0,path:"/",children:Object(B.jsx)(E.a,{to:"/home"})}),Object(B.jsx)(E.b,{exact:!0,path:"/home",component:ve})]})};var He=function(){return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(Ye,{})})},Ve=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,209)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),a(e),r(e),i(e),c(e)}))};D.a.render(Object(B.jsx)(I.a.StrictMode,{children:Object(B.jsx)(He,{})}),document.getElementById("root")),Ve()}},[[207,1,2]]]);
//# sourceMappingURL=main.df06c034.chunk.js.map