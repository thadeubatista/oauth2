(this["webpackJsonpprojeto-arce-client"]=this["webpackJsonpprojeto-arce-client"]||[]).push([[0],{355:function(e,t,n){e.exports=n(469)},381:function(e,t,n){},468:function(e,t,n){},469:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),c=n.n(o),i=n(94),l=n(2),s=n(20),u=n.n(s),p=n(34),m=n(225),f=n.n(m),d=f.a.create({baseURL:"http://localhost:8080/api",withCredentials:!0});d.interceptors.request.use((function(e){console.log("INTERCEPTO: ",e);var t=e.url;return t&&-1===t.indexOf("oauth/token")&&(e.headers.Authorization="Bearer ".concat(localStorage.getItem("@token-arce"))),e}),(function(e){return Promise.reject(e)})),d.interceptors.response.use((function(e){return console.log("RESPONSE INTERCEPTOR: ",e),e}),(function(e){if(e&&e.response&&401===e.response.status){var t=e.config;return f()(t)}return Promise.reject(e)}));var g=d;function b(){return v.apply(this,arguments)}function v(){return(v=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.delete("tokens/revoke");case 2:return t=e.sent,console.log(t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t){return E.apply(this,arguments)}function E(){return(E=Object(p.a)(u.a.mark((function e(t,n){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="username=".concat(t,"&password=").concat(n,"&grant_type=password"),e.next=3,g.post("oauth/token",a,{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic YWRtaW46YWRtaW4="}});case 3:r=e.sent,console.log(r),localStorage.setItem("@token-arce",r.data.access_token);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return x.apply(this,arguments)}function x(){return(x=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"grant_type=refresh_token",e.next=3,g.post("oauth/token","grant_type=refresh_token",{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic YWRtaW46YWRtaW4="}});case 3:t=e.sent,localStorage.setItem("@token-arce",t.data.access_token),console.log("responsta: ",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){var e=localStorage.getItem("@token-arce");if(console.log("isTOKENVALIDO: ",e),e){var t=1e3*y(e).exp,n=new Date(t);if(n>=new Date)return console.log("TOKEN VALIDO: ",n),!0}return console.log("TOKEN INVALIDO: ",e),!1}function y(e){var t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(atob(t).split("").map((function(e){return"%".concat("00".concat(e.charCodeAt(0).toString(16)).slice(-2))})).join(""));return JSON.parse(n)}var k=function(e){var t=e.isPrivate,n=void 0===t||t,a=e.component,o=Object(l.a)(e,["isPrivate","component"]),c=j();return!c&&n?r.a.createElement(i.a,{to:"/"}):c&&!n?r.a.createElement(i.a,{to:"/produto"}):(console.log("n\xe3o redirecionou para produto: "),r.a.createElement(i.b,Object.assign({},o,{component:a})))},S=n(15),w=n(293),C=n(495),I=n(294),R=(n(381),n(494)),A=n(506);function P(e){return r.a.createElement(A.a,Object.assign({elevation:6,variant:"filled"},e))}function D(e){return r.a.createElement(R.a,{open:e.mostrarMensagem,autoHideDuration:6e3,onClose:e.fecharMensagem},r.a.createElement(P,{onClose:e.fecharMensagem,severity:e.tipo},e.mensagem))}function M(e){var t=Object(a.useState)(""),n=Object(S.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(""),l=Object(S.a)(i,2),s=l[0],m=l[1],f=Object(a.useState)(""),d=Object(S.a)(f,2),g=d[0],b=d[1],v=Object(a.useState)(""),E=Object(S.a)(v,2),O=E[0],x=E[1],j=Object(a.useState)(!1),y=Object(S.a)(j,2),k=y[0],R=y[1],A=function(){var t=Object(p.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h(o,s);case 3:e.history.push("/produto"),t.next=12;break;case 6:t.prev=6,t.t0=t.catch(0),n=P(t.t0),b(n),x("error"),R(!0);case 12:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}(),P=function(e){var t="";return console.log(e.response),e&&e.response&&400===e.response.status&&e.response.data&&"invalid_grant"===e.response.data.error&&(t="Usu\xe1rio ou senha inv\xe1lida."),t||(t="Error ao tentar logar. Contacte o administrador do sistema"),t};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(C.a,{container:!0,direction:"column",justify:"center",alignContent:"center"},r.a.createElement(w.a,{id:"outlined-basic",label:"Usu\xe1rio",variant:"outlined",value:o,onChange:function(e){c(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(w.a,{id:"outlined-basic",label:"Senha",type:"password",variant:"outlined",value:s,onChange:function(e){m(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(I.a,{variant:"contained",color:"primary",onClick:A},"Login"),r.a.createElement(D,{mostrarMensagem:k,fecharMensagem:function(){R(!1)},tipo:O,mensagem:g}))))}var N=n(119),F=n(21),W=n(334),T=n.n(W),U=n(505),$=n(484),L=n(296),_=n(341),B=n.n(_),z=n(315);function q(e){var t=e.replace(/[\D]+/g,"");if("00"===t)return"";if(+(t=t.replace(/^(0+)(\d)/g,"$2"))<=0)return" 0,00";var n=t;return t.length>2&&(t=t.replace(/([0-9]{2})$/g,",$1")),2===t.length&&(t=t.replace(/([0-9]{2})$/g,"0,$1")),1===t.length&&(t="0,0"+t),t.length>6&&(t=t.replace(/([0-9]{3}),([0-9]{2}$)/g,".$1,$2")),t.length>9&&(t=t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")),n?" ".concat(t):""}function V(e){if(null!==e&&void 0!==e){var t=Number(e).toLocaleString("pt-BR",{minimumFractionDigits:2,currency:"BRL"});return t.includes(",")?t:t.concat(",00")}return void 0===e&&(e=""),e}function H(){return G.apply(this,arguments)}function G(){return(G=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j()){e.next=3;break}return e.next=3,O();case 3:return e.next=5,g.get("".concat("produtos","/paginado"));case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e){return J.apply(this,arguments)}function J(){return(J=Object(p.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j()){e.next=3;break}return e.next=3,O();case 3:return e.next=5,g.delete("".concat("produtos","/").concat(t.codigo));case 5:n=e.sent,console.log("RETORNO DELETE: ",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(p.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j()){e.next=3;break}return e.next=3,O();case 3:return t=ee(t),e.next=6,g.post("produtos",t);case 6:return n=e.sent,e.abrupt("return",n.data);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(e){return Z.apply(this,arguments)}function Z(){return(Z=Object(p.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j()){e.next=3;break}return e.next=3,O();case 3:return t=ee(t),e.next=6,g.put("".concat("produtos","/").concat(t.codigo),t);case 6:return n=e.sent,e.abrupt("return",n.data);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ee(e){if(e){var t=function(e){e.tableData;return Object(l.a)(e,["tableData"])}(e);return Object(N.a)({},t,{valor:(n=e.valor,n&&n.length>0?(n=function(e,t,n){for(var a=e.indexOf(t);a>-1;)e=e.replace(t,n),a=e.indexOf(t);return e}(n,".",""),Number(n.replace("R$","").replace(",",".").trim())):null)})}var n;return e}var te=n(496),ne=n(498),ae=n(497),re=n(503),oe=n(504),ce=n(321);function ie(e){return r.a.createElement(A.a,Object.assign({elevation:6,variant:"filled"},e))}function le(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(te.a,{open:e.abrir,onClose:function(){e.setAbrir(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},e.requisicaoAtiva&&r.a.createElement(ce.a,null),r.a.createElement(oe.a,{id:"alert-dialog-title"},e.titulo),r.a.createElement(ae.a,null,r.a.createElement(re.a,{id:"alert-dialog-description"},e.mensagem)),r.a.createElement(ne.a,null,r.a.createElement(I.a,{onClick:e.acaoFechar,color:"primary"},"N\xe3o"),r.a.createElement(I.a,{onClick:e.acaoExcluir,color:"primary",autoFocus:!0},"Sim"))),r.a.createElement(R.a,{open:e.mensagemSucesso,autoHideDuration:4e3,onClose:e.fecharMensagemSucesso},r.a.createElement(ie,{onClose:e.fecharMensagemSucesso,severity:"success"},"Exclu\xeddo com sucesso!")))}function se(e){return r.a.createElement(A.a,Object.assign({elevation:6,variant:"filled"},e))}function ue(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(te.a,{open:e.abrir,onClose:function(){e.setAbrir(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},e.requisicaoAtiva&&r.a.createElement(ce.a,null),r.a.createElement(R.a,{open:e.mostrarMensagemErro,autoHideDuration:6e3,onClose:e.fecharMensagemErro},r.a.createElement(se,{onClose:e.fecharMensagemErro,severity:"error"},e.mensagemErro)),r.a.createElement(oe.a,{id:"alert-dialog-title"},e.titulo),r.a.createElement(ae.a,null,r.a.createElement(re.a,{id:"alert-dialog-description"},e.children)),r.a.createElement(ne.a,null,r.a.createElement(I.a,{onClick:e.acaoFechar,color:"primary"},"Cancelar"),r.a.createElement(I.a,{onClick:e.acaoSalvar,color:"primary",autoFocus:!0},"Salvar"))),r.a.createElement(R.a,{open:e.mensagemSucesso,autoHideDuration:4e3,onClose:e.fecharMensagemSucesso},r.a.createElement(se,{onClose:e.fecharMensagemSucesso,severity:"success"},"Salvo com sucesso!")))}var pe=n(502),me=n(300),fe=n(78),de=n(165),ge=n(299),be=n(220),ve=n(340),he=n.n(ve);function Ee(e){var t=Object(a.useState)(null),n=Object(S.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(""),l=Object(S.a)(i,2),s=l[0],m=l[1];Object(a.useEffect)((function(){m(function(){var e=localStorage.getItem("@token-arce");return e?y(e).nome:"Visitante"}()),console.log("USUARIO LOGADO: ",s)}),[s]);var f=function(){var e=Object(p.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b();case 3:localStorage.removeItem("@token-arce"),c(null),window.location.href="/",console.log("retorno"),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{style:{flexGrow:1}},r.a.createElement(pe.a,{position:"static"},r.a.createElement(me.a,null,r.a.createElement(fe.a,{variant:"h6",style:{flexGrow:1}},"Projeto Arce"),r.a.createElement(be.a,{edge:"end","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},color:"inherit"},r.a.createElement(he.a,null)))),r.a.createElement(de.a,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:function(){c(null)}},r.a.createElement(ge.a,null,"usu\xe1rio: ",s),r.a.createElement(ge.a,{onClick:f},"Logout")))}n(468);var Oe=Object(z.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function xe(){var e=Object(a.useState)(!1),t=Object(S.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!1),i=Object(S.a)(c,2),l=i[0],s=i[1],m=Object(a.useState)({}),f=Object(S.a)(m,2),d=f[0],g=f[1],b=Object(a.useState)([]),v=Object(S.a)(b,2),h=v[0],E=v[1],O=Object(a.useState)(!1),x=Object(S.a)(O,2),j=x[0],y=x[1],k=Object(a.useState)(!1),I=Object(S.a)(k,2),R=I[0],A=I[1],P=Object(a.useState)(!1),D=Object(S.a)(P,2),M=D[0],W=D[1],_=Object(a.useState)(!1),z=Object(S.a)(_,2),G=z[0],J=z[1],Q=Object(a.useState)(""),Z=Object(S.a)(Q,2),ee=Z[0],te=Z[1],ne=Object(a.useState)(!1),ae=Object(S.a)(ne,2),re=ae[0],oe=ae[1],ce=Object(a.useState)(!1),ie=Object(S.a)(ce,2),se=ie[0],pe=ie[1],me=Oe();Object(a.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:t=e.sent,console.log(t),E(t.data.content),y(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}y(!0),function(){e.apply(this,arguments)}()}),[]);var fe=[{title:"C\xf3digo",field:"codigo",cellStyle:{width:20,maxWidth:20}},{title:"Descri\xe7\xe3o",field:"descricao",cellStyle:{padding:"5px"}},{title:"Valor (R$)",field:"valor",cellStyle:{width:20,maxWidth:20},render:function(e){return r.a.createElement(C.a,null,V(e.valor))}}],de=function(){var e=Object(p.a)(u.a.mark((function e(){var t,n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A(!0),e.prev=1,t=h,!d||!d.codigo){e.next=11;break}return e.next=6,X(d);case 6:n=e.sent,a=t.findIndex((function(e){return e.codigo===d.codigo})),t.splice(a,1,n),e.next=15;break;case 11:return e.next=13,K(d);case 13:r=e.sent,t=[].concat(Object(F.a)(t),[r]);case 15:E(t),be(),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(1),te(ge(e.t0)),J(!0),A(!1);case 24:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(){return e.apply(this,arguments)}}(),ge=function(e){var t="";return e&&e.response?e.response.data&&(e.response.data instanceof Array?e.response.data.map((function(e){t+="".concat(e.mensagemUsuario," ")})):"access_denied"===e.response.data.error&&(t="Usu\xe1rio sem permiss\xe3o para realizar essa opera\xe7\xe3o.")):t="Erro desconhecido",t},be=function(){s(!1),g({}),A(!1),W(!0)},ve=function(){var e=Object(p.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,pe(!0),e.next=4,Y(d);case 4:n=(t=h).findIndex((function(e){return e.codigo===d.codigo})),t.splice(n,1),console.log("PRODUTO SELECIONADO: ",se),o(!1),pe(!1),oe(!0),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),pe(!1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee,null),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(T.a,{title:"Produtos",columns:fe,data:h,onChangePage:function(e){return console.log("P\xc1GINA\xc7\xc3O: ",e)},actions:[{icon:"edit",tooltip:"Save User",onClick:function(e,t){!function(e){var t=Object(N.a)({},e);t.valor=V(t.valor),g(t),s(!0)}(t)}},{icon:"delete",tooltip:"Delete User",onClick:function(e,t){return function(e,t){g(t),o(!0)}(0,t)}}],options:{actionsColumnIndex:-1}})),r.a.createElement("br",null),r.a.createElement(U.a,{color:"primary","aria-label":"add",style:{float:"right",marginRight:"20px"},onClick:function(){g({}),s(!0)}},r.a.createElement(B.a,null)),r.a.createElement(le,{titulo:"Excluir Produto",abrir:n,setAbrir:o,mensagem:"Confirma a exclus\xe3o do produto?",acaoExcluir:ve,acaoFechar:function(){o(!1)},requisicaoAtiva:se,mensagemSucesso:re,fecharMensagemSucesso:function(){oe(!1)}}),r.a.createElement(ue,{titulo:"Salvar Produto",abrir:l,setAbrir:s,acaoSalvar:de,margin:"dense",acaoFechar:function(){s(!1)},requisicaoAtiva:R,mensagemSucesso:M,fecharMensagemSucesso:function(){W(!1)},mensagemErro:ee,mostrarMensagemErro:G,fecharMensagemErro:function(){J(!1)}},r.a.createElement(w.a,{inputProps:{maxLength:30},autoFocus:!0,id:"name",label:"Produto",variant:"outlined",fullWidth:!0,value:d.descricao,onChange:function(e){return g(Object(N.a)({},d,{descricao:e.target.value}))}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(w.a,{type:"text",required:!0,label:"Valor (R$)",variant:"outlined",id:"valorProduto",fullWidth:!0,value:d.valor,onChange:function(e){return g(Object(N.a)({},d,{valor:q(e.target.value)}))}})),r.a.createElement($.a,{className:me.backdrop,open:j},r.a.createElement(L.a,{color:"inherit"})))}function je(){return r.a.createElement(i.d,null,r.a.createElement(k,{path:"/",exact:!0,component:M,isPrivate:!1}),r.a.createElement(k,{path:"/produto",component:xe,isPrivate:!0}),r.a.createElement(k,{path:"/",isPrivate:!1,component:function(){return r.a.createElement("h1",null,"Page not found")}}))}var ye=n(167),ke=n(342),Se=n(343);function we(){var e=Object(ke.a)(["\n* {\n\tpadding: 0;\n\tmargin: 0;\n\toutline: 0;\n  box-sizing: border-box;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n*:focus{\n  outline: 0;\n}\n\nhtml, body, #root {\n\theight: 100%\n}\n\nbody {\n  -webkit-font-smoothing: antialiased;\n}\n\nbody, input, button {\n  font: 14px 'Roboto', sans-serif;\n}\n\na{\n  text-decoration: none;\n}\n\nul{\n  list-style: none;\n}\n\nbutton{\n  cursor: pointer;\n}\n"]);return we=function(){return e},e}var Ce=Object(Se.a)(we());var Ie=function(){return r.a.createElement(ye.a,null,r.a.createElement(je,null),r.a.createElement(Ce,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[355,1,2]]]);
//# sourceMappingURL=main.1f8aa9e6.chunk.js.map