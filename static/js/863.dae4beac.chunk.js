"use strict";(self.webpackChunkca_mark=self.webpackChunkca_mark||[]).push([[863],{2899:function(n,e,t){var r=t(9439),a=t(1912),o=t(5293),i=t.n(o);e.Z=function(){var n=i()(["log"]),e=(0,r.Z)(n,1)[0];return a.Z.defaults.baseURL="http://localhost:4000/api/class",a.Z.defaults.params={},a.Z.defaults.headers.common.Authorization=e.log||void 0,a.Z}},7863:function(n,e,t){t.r(e),t.d(e,{Button:function(){return tn},ButtonGroup:function(){return en},Container:function(){return z},Form:function(){return W},FormHeader:function(){return q},Input:function(){return $},Label:function(){return _},Section:function(){return U},Span:function(){return nn},default:function(){return L}});var r=t(168),a=t(4942),o=t(1413),i=t(4165),d=t(5861),s=t(9439),p=t(2791),c=t(5987),l=t(1694),u=t.n(l),A=t(6543),g=t(162),R=p.createContext({}),h=t(184),f=["id","bsPrefix","className","type","isValid","isInvalid","as"],k=p.forwardRef((function(n,e){var t=n.id,r=n.bsPrefix,a=n.className,i=n.type,d=void 0===i?"checkbox":i,s=n.isValid,l=void 0!==s&&s,A=n.isInvalid,k=void 0!==A&&A,V=n.as,x=void 0===V?"input":V,m=(0,c.Z)(n,f),w=(0,p.useContext)(R).controlId;return r=(0,g.vE)(r,"form-check-input"),(0,h.jsx)(x,(0,o.Z)((0,o.Z)({},m),{},{ref:e,type:d,id:t||w,className:u()(a,r,l&&"is-valid",k&&"is-invalid")}))}));k.displayName="FormCheckInput";var V=k,x=p.createContext(null);x.displayName="InputGroupContext";var m=x,w=["bsPrefix","size","hasValidation","className","as"],v=(0,A.Z)("input-group-text",{Component:"span"}),C=p.forwardRef((function(n,e){var t=n.bsPrefix,r=n.size,a=n.hasValidation,i=n.className,d=n.as,s=void 0===d?"div":d,l=(0,c.Z)(n,w);t=(0,g.vE)(t,"input-group");var A=(0,p.useMemo)((function(){return{}}),[]);return(0,h.jsx)(m.Provider,{value:A,children:(0,h.jsx)(s,(0,o.Z)((0,o.Z)({ref:e},l),{},{className:u()(i,t,r&&"".concat(t,"-").concat(r),a&&"has-validation")}))})}));C.displayName="InputGroup";var B,j,b,P,D,E,Z,Q,G,N,O,H,I=Object.assign(C,{Text:v,Radio:function(n){return(0,h.jsx)(v,{children:(0,h.jsx)(V,(0,o.Z)({type:"radio"},n))})},Checkbox:function(n){return(0,h.jsx)(v,{children:(0,h.jsx)(V,(0,o.Z)({type:"checkbox"},n))})}}),X=t(8617),M=t(3479),F=t(7691),y=t(2899),T=t(36),Y=t(5985),S=t(7689),K=t(5293),J=t.n(K),L=function(){var n,e=(0,y.Z)(),t=(0,S.s0)(),r=(0,S.TH)(),c=(0,T.a)(),l=p.useState(),u=(0,s.Z)(l,2),A=u[0],g=u[1],R=J()(["log"]),f=(0,s.Z)(R,3),k=f[0],V=f[1],x=f[2],m=p.useState(!0),w=(0,s.Z)(m,2),v=w[0],C=w[1];p.useEffect((function(){var n=function(){var n=(0,d.Z)((0,i.Z)().mark((function n(){var a,o,d,s;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=new AbortController,o=a.signal,n.prev=2,C(!0),"/relogin",n.next=7,e.get("/relogin",{signal:o}).then((function(n){var e=n.data.data[0];if(c.user={id:e.id,name:e.teacherName,image:e.image},void 0!==e.id){var a;V("log",n.data.token,{path:"/"});var o=(null===(a=r.state)||void 0===a?void 0:a.path)||"/t/".concat(e.id,"/dashboard");t(o,{replace:!0})}else b("Internal Error.")})).catch((function(n){b(n.message),x("login")}));case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),b(null===n.t0||void 0===n.t0||null===(d=n.t0.response)||void 0===d||null===(s=d.data)||void 0===s?void 0:s.message);case 12:return n.prev=12,a.abort(),setTimeout((function(){C(!1)}),1e3),n.finish(12);case 16:case"end":return n.stop()}}),n,null,[[2,9,12,16]])})));return function(){return n.apply(this,arguments)}}();null===c.user&&void 0!==k.log&&n(),setTimeout((function(){C(!1)}),100)}),[c,e,k.log,null===(n=r.state)||void 0===n?void 0:n.path,t,x,V]);var B=function(){var n=(0,d.Z)((0,i.Z)().mark((function n(a){var o,d;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),n.prev=1,"/login",n.next=5,e.post("/login",A).then((function(n){var e=n.data.data[0];if(c.login({id:e.id,name:e.teacherName,image:e.image}),void 0!==e.id){var a;V("log",n.data.token,{path:"/"});var o=(null===(a=r.state)||void 0===a?void 0:a.path)||"/t/".concat(e.id,"/dashboard");t(o,{replace:!0}),j("Login Successfully.","success")}else b("Internal Error.")})).catch((function(n){var e,t;b(null===n||void 0===n||null===(e=n.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message),console.log(n)}));case 5:n.next=11;break;case 7:n.prev=7,n.t0=n.catch(1),b(null===n.t0||void 0===n.t0||null===(o=n.t0.response)||void 0===o||null===(d=o.data)||void 0===d?void 0:d.message),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(e){return n.apply(this,arguments)}}(),j=function(n){Y.Am.success(n,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})},b=function(n){Y.Am.error(n,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})};return(0,h.jsx)(U,{children:v?"Loading":(0,h.jsxs)(W,{onSubmit:B,style:{paddingBottom:"5rem"},children:[(0,h.jsx)(q,{style:{marginBottom:"1rem"},children:"Login Your Account"}),(0,h.jsx)(rn,{children:(0,h.jsx)(an,{children:(0,h.jsx)(on,{src:"data:image/png;base64,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",alt:"User Image"})})}),(0,h.jsxs)(I,{children:[(0,h.jsx)(nn,{className:"input-group-text",id:"Email",children:(0,h.jsx)(X.Zuw,{})}),(0,h.jsx)($,{name:"email",className:"form-control",type:"email",placeholder:"Email","aria-describedby":"Email",onChange:function(n){return g((0,o.Z)((0,o.Z)({},A),{},(0,a.Z)({},n.target.name,n.target.value)))},required:!0})]}),(0,h.jsxs)(I,{children:[(0,h.jsx)(nn,{className:"input-group-text",id:"Pass",children:(0,h.jsx)(M.Zp7,{})}),(0,h.jsx)($,{name:"pass",className:"form-control",type:"password",placeholder:"Password","aria-describedby":"Pass",onChange:function(n){return g((0,o.Z)((0,o.Z)({},A),{},(0,a.Z)({},n.target.name,n.target.value)))},required:!0})]}),(0,h.jsxs)(en,{children:[(0,h.jsx)(tn,{style:{background:"rgba(255, 71, 87,1.0)"},children:"Cancel"}),(0,h.jsx)(tn,{type:"submit",style:{background:"rgba(55, 66, 250,1.0)"},children:"Login"})]})]})})},U=F.ZP.section(B||(B=(0,r.Z)(["\n  height: calc(100vh - 80px);\n  margin-top: 75px;\n"]))),z=F.ZP.div(j||(j=(0,r.Z)([""]))),W=F.ZP.form(b||(b=(0,r.Z)(["\n  padding: 1rem;\n  width: 400px;\n  border: 1px solid rgba(95, 39, 205, 01);\n  border-radius: 5px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem 0;\n\n  @media (max-width: 410px) {\n    width: 100%;\n    border: none;\n  }\n"]))),q=F.ZP.h1(P||(P=(0,r.Z)(["\n  @media (min-width: 540px) {\n    font-size: 1.3rem;\n  }\n"]))),_=F.ZP.label(D||(D=(0,r.Z)([""]))),$=F.ZP.input(E||(E=(0,r.Z)(["\n  padding: 0.5rem 1rem;\n  border: 1px solid rgba(95, 39, 205, 01);\n\n\n  &:,\n  &:focus {\n    outline: none;\n    border: 1px solid rgba(95, 39, 205, 0.5);\n  }\n"]))),nn=F.ZP.span(Z||(Z=(0,r.Z)(["\n  background: rgba(95, 39, 205, 01);\n  color: #fff;\n  border: 1px solid rgba(95, 39, 205, 01);\n"]))),en=F.ZP.div(Q||(Q=(0,r.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  margin-top: 0.5rem;\n  width: 100%;\n  @media (max-width: 560px) {\n    flex-direction: column-reverse;\n    padding: 0;\n  }\n"]))),tn=F.ZP.button(G||(G=(0,r.Z)(["\n  border: none;\n  padding: 0.5rem 1rem;\n  font-weight: 600;\n  width: 45%;\n  color: #fff;\n  margin: 1rem 0;\n\n  &:nth-child(1) {\n    margin-right: 5px;\n  }\n  &:nth-child(2) {\n    margin-left: 5px;\n  }\n\n  @media (max-width: 560px) {\n    width: 95%;\n    margin: 0.5rem 0;\n\n    &:nth-child(1) {\n      margin-right: 0px;\n    }\n    &:nth-child(2) {\n      margin-left: 0px;\n    }\n  }\n"]))),rn=F.ZP.div(N||(N=(0,r.Z)(["\n  width: 155px;\n  height: 155px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 10px;\n  outline: 3px solid rgba(3, 3, 3, 0.1);\n  border-radius: 50%;\n"]))),an=F.ZP.div(O||(O=(0,r.Z)(["\n  width: 150px;\n  height: 150px;\n  overflow: hidden;\n  background: rgba(3, 3, 3, 0.011);\n  border-radius: 50%;\n"]))),on=F.ZP.img(H||(H=(0,r.Z)(["\n  width: 100%;\n  height: 100%;\n"])))}}]);
//# sourceMappingURL=863.dae4beac.chunk.js.map