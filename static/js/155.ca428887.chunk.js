"use strict";(self.webpackChunkca_mark=self.webpackChunkca_mark||[]).push([[155],{9592:function(n,e,t){t.d(e,{H:function(){return m},w:function(){return v}});var r=t(4942),o=t(1413),a=t(4165),i=t(5861),u=t(9439),s=t(2791),l=t(5985),c=t(6518),d=t(2899),f=t.p+"static/media/Add All Students.2a04539ba6cfa419b65c.xlsx",h=t(3329),p=s.createContext(null),m=function(n){var e=n.children,t=(0,d.Z)(),m=(0,s.useState)(!1),v=(0,u.Z)(m,2),Z=v[0],g=v[1],x=(0,s.useState)(null),b=(0,u.Z)(x,2),S=b[0],k=b[1],w=(0,s.useState)(!1),I=(0,u.Z)(w,2),y=I[0],C=I[1],P=s.useState([]),O=(0,u.Z)(P,2),j=O[0],A=O[1],L=s.useState(null),z=(0,u.Z)(L,2),T=z[0],B=z[1],R=s.useState(!1),_=(0,u.Z)(R,2),D=_[0],N=_[1],U=s.useState([]),E=(0,u.Z)(U,2),F=E[0],H=E[1],Q=s.useState(!1),M=(0,u.Z)(Q,2),V=M[0],W=M[1],X=s.useState(!1),$=(0,u.Z)(X,2),q=$[0],G=$[1],J=(0,s.useState)({}),K=(0,u.Z)(J,2),Y=K[0],nn=K[1],en=(0,s.useState)(!1),tn=(0,u.Z)(en,2),rn=tn[0],on=tn[1],an=(0,s.useState)(!0),un=(0,u.Z)(an,2),sn=un[0],ln=un[1],cn=(0,s.useState)(!1),dn=(0,u.Z)(cn,2),fn=dn[0],hn=dn[1],pn=function(n){n||C(!0),g(n),hn(!1),setTimeout((function(){C(!1)}),10)},mn=function(){var n=(0,i.Z)((0,a.Z)().mark((function n(){var e,r;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,"/student/import",n.next=4,t.post("/student/import",{data:F}).then((function(n){Zn(n.data),H([]),A([]),B(""),pn(!1),xn(!1)})).catch((function(n){var e,t;console.log(n),vn(null===n||void 0===n||null===(e=n.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)}));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),vn(null===n.t0||void 0===n.t0||null===(e=n.t0.response)||void 0===e||null===(r=e.data)||void 0===r?void 0:r.message);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}(),vn=function(n){l.Am.error(n,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})},Zn=function(n){l.Am.success(n,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})},gn=function(n){A(n);for(var e=[],t=n,r=1;r<t.length;r++){var o=[t[r][0],"".concat(t[r][1]),Number(S.classId),S.year,S.semester,"".concat(S.courseName),S.term,(new Date).toUTCString()];e.push(o)}H(e)},xn=function(n){N(n),hn(n)},bn=function(){var n=(0,i.Z)((0,a.Z)().mark((function n(e,r){var o,i;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,"/import/students",n.next=4,t.post("/import/students",{data:e}).then((function(n){r(),Zn(n.data),hn(!1)})).catch((function(n){var e,t;vn(null===n||void 0===n||null===(e=n.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)}));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),vn(null===n.t0||void 0===n.t0||null===(o=n.t0.response)||void 0===o||null===(i=o.data)||void 0===i?void 0:i.message);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e,t){return n.apply(this,arguments)}}(),Sn=function(){var n=(0,i.Z)((0,a.Z)().mark((function n(e){var r,o;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,"/student/import",n.next=4,t.post("/student/import",{data:e}).then((function(n){Zn(n.data),H([]),A([]),B(""),pn(!1),xn(!1),G(!1),on(!1)})).catch((function(n){var e,t;vn(null===n||void 0===n||null===(e=n.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)}));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),vn(null===n.t0||void 0===n.t0||null===(r=n.t0.response)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.message);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}();return(0,h.jsx)(p.Provider,{value:{classInfo:S,openBox:Z,otherInfo:Y,rows:j,xlFile:T,isImport:D,isImportOther:q,isIndividual:V,array:F,loading:sn,isViewOther:rn,isBack:fn,reload:y,handleSubmitImportfromOther:Sn,handleOtherFormImportChange:function(n){nn((0,o.Z)((0,o.Z)({},Y),{},(0,r.Z)({},n.target.name,n.target.value)))},setLoading:ln,handleOpen:pn,handleSetClassInfo:function(n){k(n)},setXlsxFile:function(n){B(n),(0,c.Z)(n).then((function(n){gn(n)})).catch((function(n){vn(n)}))},handleImportSubmit:mn,handleError:vn,handleSuccess:Zn,handleSetIndividual:function(n){W(n),hn(n)},handleIsImport:xn,handleIsImportOther:function(n){G(n),hn(n)},handleDownload:function(){var n=document.createElement("a");n.href=f,n.setAttribute("download","Import_Student_Name_Sample_File_".concat(Date.now(),".xlsx")),document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(f)},handleResetRowsAndArray:function(){A([]),H([])},handleSubmitIndividual:bn,handleDecrementArray:function(n,e,t){ln(!0),e.splice(n,1),t(e),setTimeout((function(){ln(!1)}),100)},handleIncrementArray:function(n,e,t){ln(!0);var r=[];e.map((function(e,t){return r.push(e),t===n&&r.push(["","",Number(S.classId),S.year,S.semester,S.courseName,S.term,(new Date).toUTCString()]),null})),t(r),setTimeout((function(){ln(!1)}),100)},handleOtherImport:function(n){G(n),on(!n),hn(!0)},handleBack:function(n){hn(n),n||(N(!1),W(!1),G(!1),on(!1))},setArray:H,handleReload:function(n){C(n)}},children:e})},v=function(){return s.useContext(p)}},953:function(n,e,t){t.d(e,{$1:function(){return s},oC:function(){return u}});var r=t(9439),o=t(2791),a=t(3329),i=o.createContext(null),u=function(n){var e=n.children,t=o.useState("Add Marks"),u=(0,r.Z)(t,2),s=u[0],l=u[1],c=o.useState(!1),d=(0,r.Z)(c,2),f=d[0],h=d[1],p=o.useState(!1),m=(0,r.Z)(p,2),v=m[0],Z=m[1],g=o.useState(!1),x=(0,r.Z)(g,2),b=x[0],S=x[1],k=o.useState(!1),w=(0,r.Z)(k,2),I=w[0],y=w[1],C=o.useState(!1),P=(0,r.Z)(C,2),O=P[0],j=P[1],A=o.useState(null),L=(0,r.Z)(A,2),z=L[0],T=L[1],B=o.useState(null),R=(0,r.Z)(B,2),_=R[0],D=R[1],N=o.useState(!1),U=(0,r.Z)(N,2),E=U[0],F=U[1],H=o.useState(!1),Q=(0,r.Z)(H,2),M=Q[0],V=Q[1],W=o.useState(""),X=(0,r.Z)(W,2),$=X[0],q=X[1],G=o.useState({order:"",field:""}),J=(0,r.Z)(G,2),K=J[0],Y=J[1];return(0,a.jsx)(i.Provider,{value:{handleOpenBox:function(n){n||F(!0),h(n),Z(!1),j(!1),y(!1),S(!1),T(null),setTimeout((function(){F(!1)}),10)},handleBackToOption:function(n){V(n),n||(Z(!1),j(!1),y(!1),S(!1),T(null))},handleOpenAssignment:function(n){Z(n)},handleOpenQuizz:function(n){S(n)},handleSetLabel:function(n){T(n)},handleOpenAttendance:function(n){j(n)},handleOpenLab:function(n){y(n)},handleSetTitle:function(n){l(n)},handleSetClassInfo:function(n){D(n)},handleSearch:function(n){q(n.target.value)},handleSort:function(n){Y(n)},handleReload:function(n){F(n)},openBox:f,openAssign:v,openAttendance:O,openLab:I,openQuizz:b,label:z,title:s,classInfo:_,isBack:M,search:$,sortTable:K,reload:E},children:e})},s=function(){return o.useContext(i)}},2899:function(n,e,t){var r=t(9439),o=t(1912),a=t(5293),i=t.n(a);e.Z=function(){var n=i()(["log"]),e=(0,r.Z)(n,1)[0];return o.Z.defaults.baseURL="http://localhost:4000/api/ca_marks",o.Z.defaults.params={},o.Z.defaults.headers.common.Authorization=e.log||void 0,o.Z}},2247:function(n,e,t){t.r(e),t.d(e,{Container:function(){return T},InfoPanel:function(){return B},Li:function(){return U},OptionItems:function(){return N},OptionPanel:function(){return D},Section:function(){return z},SubTitle:function(){return _},Title:function(){return R}});var r,o,a,i,u,s,l,c,d,f,h=t(168),p=t(4165),m=t(5861),v=t(9439),Z=t(2791),g=t(1087),x=t(7691),b=t(2899),S=t(9434),k=t(4054),w=t(953),I=t(9793),y=t(36),C=t(6355),P=t(9592),O=t(3329),j=Z.lazy((function(){return Promise.all([t.e(856),t.e(36),t.e(458),t.e(670)]).then(t.bind(t,2670))})),A=Z.lazy((function(){return Promise.all([t.e(617),t.e(227)]).then(t.bind(t,7227))})),L=Z.lazy((function(){return Promise.all([t.e(611),t.e(320)]).then(t.bind(t,6320))}));e.default=function(){var n=(0,g.lr)(),e=(0,v.Z)(n,1)[0],t=(0,b.Z)(),r=(0,S.I0)(),o=(0,y.a)(),a=Z.useState(null),i=(0,v.Z)(a,2),u=i[0],s=i[1],l=Z.useState(!0),c=(0,v.Z)(l,2),d=c[0],f=c[1],h=(0,S.v9)((function(n){return n.reload})).flag;Z.useEffect((function(){o.handleDashboard(!1),x(),h&&r((0,k.mc)()),console.log("class")}),[e,t,h,r]);var x=function(){var n=(0,m.Z)((0,p.Z)().mark((function n(){var o;return(0,p.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o="/class/view?id="+e.get("id"),n.next=4,t.get(o).then((function(n){s(n.data),r((0,I.w5)(n.data[0].courseName))}));case 4:n.next=8;break;case 6:n.prev=6,n.t0=n.catch(0);case 8:return n.prev=8,f(!1),n.finish(8);case 11:case"end":return n.stop()}}),n,null,[[0,6,8,11]])})));return function(){return n.apply(this,arguments)}}(),B=function(n){var e=document.getElementById("scroll"),t=e.scrollWidth;if("left"===n){var r=e.scrollLeft+100;r>=t&&(r=t),e.scrollLeft=r}else{var o=e.scrollLeft-100;o<=0&&(o=0),e.scrollLeft=o}};return(0,O.jsx)(w.oC,{children:(0,O.jsx)(P.H,{children:(0,O.jsx)(z,{children:d?"Loading...":(0,O.jsxs)(T,{children:[(0,O.jsx)(A,{classInfo:u[0],onReloadPage:x}),(0,O.jsx)(L,{classInfo:u[0],onReloadPage:x}),(0,O.jsxs)(E,{id:"scroll",children:[(0,O.jsx)(j,{classInfo:u[0]}),(0,O.jsx)(F,{onClick:function(){return B("left")},children:(0,O.jsx)(C.Dli,{})}),(0,O.jsx)(F,{onClick:function(){return B("right")},children:(0,O.jsx)(C.bUI,{})})]})]})})})})};var z=x.ZP.section(r||(r=(0,h.Z)(["\n  margin-top: 0px;\n  width: 100%;\n"]))),T=x.ZP.div(o||(o=(0,h.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0.5rem 1rem;\n  width: 100%;\n  min-height: calc(100vh - 100px);\n"]))),B=x.ZP.div(a||(a=(0,h.Z)(["\n  position: relative;\n  padding: 01rem;\n  width: 100%;\n  border-radius: 5px;\n  color: #fff;\n  height: 200px;\n  margin-bottom: 0.5rem;\n"]))),R=x.ZP.h1(i||(i=(0,h.Z)(["\n  font-size: 1.2rem;\n"]))),_=x.ZP.h5(u||(u=(0,h.Z)(["\n  font-size: 1rem;\n"]))),D=x.ZP.div(s||(s=(0,h.Z)(["\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50px;\n  width: 35px;\n  height: 35px;\n  font-size: 1.4rem;\n  cursor: pointer;\n  &:hover {\n    background: rgba(240, 240, 240, 0.4);\n  }\n"]))),N=x.ZP.div(l||(l=(0,h.Z)(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  right: 35px;\n  top: 15px;\n  background: #fff;\n  border-radius: 5px;\n  box-shadow: 1px 1px 5px 4px rgba(3, 3, 3, 0.2);\n"]))),U=x.ZP.li(c||(c=(0,h.Z)(["\n  color: #333;\n  padding: 0.3rem 0.5rem;\n  list-style-type: none;\n  font-weight: 500;\n  cursor: pointer;\n\n  &:nth-last-child(1) {\n  }\n"]))),E=x.ZP.div(d||(d=(0,h.Z)(["\n  width: 100%;\n  overflow-x: scroll;\n  padding-bottom: 1rem;\n  border: 1px solid rgba(3, 3, 3, 0.3);\n  position: relative;\n  min-height: calc(100vh - 390px);\n"]))),F=x.ZP.span(f||(f=(0,h.Z)(["\n  background: rgba(3, 3, 3, 0.5);\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  top: 0;\n  bottom: 0;\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  color: #333;\n\n  &:nth-child(1) {\n    left: 1rem;\n  }\n\n  &:nth-child(2) {\n    right: 1rem;\n  }\n\n  margin: auto 0;\n  cursor: pointer;\n  color: #fff;\n  &:hover {\n    background: rgba(3, 3, 3, 0.8);\n  }\n"])))}}]);
//# sourceMappingURL=155.ca428887.chunk.js.map