"use strict";(self.webpackChunkca_mark=self.webpackChunkca_mark||[]).push([[602],{3602:function(n,e,t){t.r(e);var a,r,i,o,s,d,l,c,u,m,p=t(168),g=t(4165),h=t(5861),f=t(9439),x=t(2791),b=t(7691),v=t(2899),k=t(5985),Z=t(953),y=t(3329);e.default=function(){var n=(0,Z.$1)(),e=(0,v.Z)(),t=x.useState([]),a=(0,f.Z)(t,2),r=a[0],i=a[1],o=x.useState(!0),s=(0,f.Z)(o,2),d=s[0],l=s[1];x.useEffect((function(){var t=function(){var t=(0,h.Z)((0,g.Z)().mark((function t(){var a;return(0,g.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="/student/all?id="+n.classInfo.classId,t.next=3,e.get(a).then((function(n){var e=n.data;i(e)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t(),l(!1)}),[e,n.classInfo,n.classInfo.classId]);var c=function(){var t=(0,h.Z)((0,g.Z)().mark((function t(){var a;return(0,g.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a="/marks/update?label=Assignment-"+n.label,t.next=4,e.put(a,{data:r}).then((function(e){u(e.data),setTimeout((function(){n.handleBackToOption(!1),n.handleOpenAssign(!1)}),1e3)}));case 4:t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0),m(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}(),u=function(n){k.Am.success(n,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})},m=function(n){k.Am.error(n,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})};return(0,y.jsx)(w,{open:n.openAssign,children:(0,y.jsxs)(j,{children:[(0,y.jsxs)(I,{children:["Add Marks for Assignment - ",n.label]}),d?"Loading...":(0,y.jsxs)(N,{children:[r.map((function(e,t){return(0,y.jsxs)(x.Fragment,{children:[(0,y.jsxs)("p",{style:{marginBottom:0,fontWeight:500,marginTop:"10px"},children:["Index No: #",t+1]}),(0,y.jsxs)(A,{children:[(0,y.jsx)(P,{disabled:!0,name:"id",className:"stuId",type:"Number",defaultValue:e.stuId}),(0,y.jsx)(P,{disabled:!0,name:"name",type:"text",defaultValue:e.stuName}),(0,y.jsxs)(E,{children:[(0,y.jsx)(P,{style:{width:"100%"},name:"assign",type:"Number",max:"10",min:"0",defaultValue:e["assign".concat(n.label)],onChange:function(e){return function(e,t){var a=e.target.value,i=document.getElementsByName("id")[t],o=document.getElementsByName("name")[t],s=document.getElementsByName("assign")[t];a<=10&&a>=0?(i.style.background="transparent",o.style.background="transparent",s.style.background="transparent",r[t]["assign".concat(n.label)]=Number(a)):(s.value=r[t]["assign".concat(n.label)],s.style.background="rgba(255, 121, 121,0.2)",i.style.background="rgba(255, 121, 121,0.2)",o.style.background="rgba(255, 121, 121,0.2)",m("Input Value(".concat(a,") large from 10")))}(e,t)},onWheel:function(){return document.activeElement.blur()}}),(0,y.jsx)(O,{children:"10"})]})]})]},t)})),(0,y.jsxs)(C,{children:[(0,y.jsx)(B,{onClick:function(){n.handleBackToOption(!1),n.handleOpenAssignment(!1)},children:"Back"}),(0,y.jsx)(B,{onClick:c,children:"Submit"})]})]})]})})};var w=b.ZP.div(a||(a=(0,p.Z)(["\n  display: ",";\n  width: 750px;\n  border-radius: 5px;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  @media (max-width: 760px) {\n    width: 95%;\n  }\n"])),(function(n){return!0===n.open?"block":"none"})),j=b.ZP.div(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n"]))),P=b.ZP.input(i||(i=(0,p.Z)(["\n  padding: 0.4rem 0.2rem;\n  border-radius: 3px;\n  margin-bottom: 0.3rem;\n  border: 1px solid rgba(3, 3, 3, 0.2);\n\n  &::placeholder {\n    color: rgba(3, 3, 3, 0.2);\n  }\n"]))),B=b.ZP.button(o||(o=(0,p.Z)(["\n  font-weight: 500;\n  color: #fff;\n  border-radius: 5px;\n  min-width: 100px;\n  &:nth-child(1) {\n    background: rgba(235, 77, 75, 1);\n    margin-right: 5px;\n  }\n\n  &:nth-child(2) {\n    background: rgba(72, 52, 212, 1);\n  }\n\n  &:hover {\n    &:nth-child(1) {\n      background: rgba(235, 100, 75, 1);\n    }\n\n    &:nth-child(2) {\n      background: rgba(72, 100, 212, 1);\n    }\n  }\n\n  @media (max-width: 560px) {\n    width: 100%;\n  }\n"]))),C=b.ZP.div(s||(s=(0,p.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  margin: 1rem 0;\n  padding: 0.2rem 0;\n"]))),I=b.ZP.h1(d||(d=(0,p.Z)(["\n  font-size: 1.2rem;\n  font-weight: 500;\n"]))),N=b.ZP.div(l||(l=(0,p.Z)(["\n  border: 1px solid rgba(3, 3, 3, 0.3);\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0.2rem;\n  padding: 0.2rem 3rem;\n  position: relative;\n  border-radius: 3px;\n  width: 700px;\n\n  @media (max-width: 760px) {\n    width: 90%;\n    padding: 0.2rem 1rem;\n  }\n"]))),A=b.ZP.div(c||(c=(0,p.Z)(["\n  display: grid;\n  grid-template-columns: auto auto auto;\n  overflow: hidden;\n  width: 100%;\n\n  @media (max-width: 560px) {\n    grid-template-columns: auto;\n  }\n"]))),O=b.ZP.span(u||(u=(0,p.Z)(["\n  margin: 0;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 0.3rem;\n  padding-left: 5px;\n  position: absolute;\n  right: 2px;\n  background: rgba(50, 200, 100, 1);\n  width: 45px;\n  top: 0.18rem;\n  bottom: 0.46rem;\n  color: #fff;\n  font-weight: 600;\n  border: 1px solid rgba(3, 3, 3, 0.4);\n  border-radius: 3px;\n"]))),E=b.ZP.div(m||(m=(0,p.Z)(["\n  position: relative;\n"])))}}]);
//# sourceMappingURL=602.ff6dd485.chunk.js.map