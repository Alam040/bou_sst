"use strict";(self.webpackChunkca_mark=self.webpackChunkca_mark||[]).push([[31],{2031:function(n,e,t){t.r(e);var a,r,i,o,s,l,d,c,u,p,m=t(168),g=t(4165),b=t(5861),h=t(9439),f=t(2791),x=t(7691),y=t(2899),k=t(5985),v=t(953),Z=t(3329);e.default=function(){var n=(0,v.$1)(),e=(0,y.Z)(),t=f.useState([]),a=(0,h.Z)(t,2),r=a[0],i=a[1],o=f.useState(!0),s=(0,h.Z)(o,2),l=s[0],d=s[1];f.useEffect((function(){var t=function(){var t=(0,b.Z)((0,g.Z)().mark((function t(){var a;return(0,g.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="/student/all?id="+n.classInfo.classId,t.next=3,e.get(a).then((function(n){var e=n.data;i(e)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t(),d(!1)}),[e,n.classInfo,n.classInfo.classId]);var c=function(){var t=(0,b.Z)((0,g.Z)().mark((function t(){var a;return(0,g.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a="/marks/update?label=Quizz/Test-"+n.label,t.next=4,e.put(a,{data:r}).then((function(e){u(e.data),setTimeout((function(){n.handleBackToOption(!1),n.handleOpenQuizz(!1)}),1e3)}));case 4:t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0),p(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}(),u=function(n){k.Am.success(n,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})},p=function(n){k.Am.error(n,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})};return(0,Z.jsx)(w,{open:n.openQuizz,children:(0,Z.jsxs)(j,{children:[(0,Z.jsxs)(N,{children:["Add Marks for Quizz/Test - ",n.label]}),l?"Loading...":(0,Z.jsxs)(B,{children:[r.map((function(e,t){return(0,Z.jsxs)(f.Fragment,{children:[(0,Z.jsxs)("p",{style:{marginBottom:0,fontWeight:500,marginTop:"10px"},children:["Index No: #",t+1]}),(0,Z.jsxs)(C,{children:[(0,Z.jsx)(z,{disabled:!0,name:"id",className:"stuId",type:"Number",defaultValue:e.stuId}),(0,Z.jsx)(z,{disabled:!0,name:"name",type:"text",defaultValue:e.stuName}),(0,Z.jsxs)(O,{style:{display:"flex",flexWrap:"nowrap",justifyItems:"stretch",alignItems:"stretch"},children:[(0,Z.jsx)(z,{style:{width:"100%"},name:"quizz",type:"Number",max:"Lab"===n.classInfo.courseType?"10":"5",min:"0",defaultValue:e["test".concat(n.label)],onChange:function(e){return function(e,t){var a=e.target.value,i=document.getElementsByName("id")[t],o=document.getElementsByName("name")[t],s=document.getElementsByName("quizz")[t];"Lab"===n.classInfo.courseType?a<=10&&a>=0?(i.style.background="transparent",o.style.background="transparent",s.style.background="transparent",r[t]["test".concat(n.label)]=Number(a)):(s.value=r[t]["test".concat(n.label)],s.style.background="rgba(255, 121, 121,0.2)",i.style.background="rgba(255, 121, 121,0.2)",o.style.background="rgba(255, 121, 121,0.2)",p("Input Value(".concat(a,") large from 10"))):a<=15&&a>=0?(s.style.background="transparent",i.style.background="transparent",o.style.background="transparent",r[t]["test".concat(n.label)]=Number(a)):(s.value=r[t]["test".concat(n.label)],s.style.background="rgba(255, 121, 121,0.2)",i.style.background="rgba(255, 121, 121,0.2)",o.style.background="rgba(255, 121, 121,0.2)",p("Input Value(".concat(a,") large from 15")))}(e,t)},onWheel:function(){return document.activeElement.blur()}}),(0,Z.jsx)(T,{children:"Lab"===n.classInfo.courseType?10:15})]})]})]},t)})),(0,Z.jsxs)(P,{children:[(0,Z.jsx)(I,{onClick:function(){n.handleBackToOption(!1),n.handleOpenQuizz(!1)},children:"Back"}),(0,Z.jsx)(I,{onClick:c,children:"Submit"})]})]})]})})};var w=x.ZP.div(a||(a=(0,m.Z)(["\n  display: ",";\n  width: 750px;\n  border-radius: 5px;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  @media (max-width: 760px) {\n    width: 95%;\n  }\n"])),(function(n){return!0===n.open?"block":"none"})),j=x.ZP.div(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n"]))),z=x.ZP.input(i||(i=(0,m.Z)(["\n  padding: 0.4rem 0.2rem;\n  border-radius: 3px;\n  margin-bottom: 0.3rem;\n  border: 1px solid rgba(3, 3, 3, 0.2);\n\n  &::placeholder {\n    color: rgba(3, 3, 3, 0.2);\n  }\n"]))),I=x.ZP.button(o||(o=(0,m.Z)(["\n  font-weight: 500;\n  color: #fff;\n  border-radius: 5px;\n  min-width: 100px;\n  &:nth-child(1) {\n    background: rgba(235, 77, 75, 1);\n    margin-right: 5px;\n  }\n\n  &:nth-child(2) {\n    background: rgba(72, 52, 212, 1);\n  }\n\n  &:hover {\n    &:nth-child(1) {\n      background: rgba(235, 100, 75, 1);\n    }\n\n    &:nth-child(2) {\n      background: rgba(72, 100, 212, 1);\n    }\n  }\n\n  @media (max-width: 560px) {\n    width: 100%;\n  }\n"]))),P=x.ZP.div(s||(s=(0,m.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  margin: 1rem 0;\n  padding: 0.2rem 0;\n"]))),N=x.ZP.h1(l||(l=(0,m.Z)(["\n  font-size: 1.2rem;\n  font-weight: 500;\n"]))),B=x.ZP.div(d||(d=(0,m.Z)(["\n  border: 1px solid rgba(3, 3, 3, 0.3);\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0.2rem;\n  padding: 0.2rem 3rem;\n  position: relative;\n  border-radius: 3px;\n  width: 700px;\n\n  @media (max-width: 760px) {\n    width: 90%;\n    padding: 0.2rem 1rem;\n  }\n"]))),C=x.ZP.div(c||(c=(0,m.Z)(["\n  display: grid;\n  grid-template-columns: auto auto auto;\n  overflow: hidden;\n  width: 100%;\n\n  @media (max-width: 560px) {\n    grid-template-columns: auto;\n  }\n"]))),T=x.ZP.span(u||(u=(0,m.Z)(["\n  margin: 0;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 0.3rem;\n  padding-left: 5px;\n  position: absolute;\n  right: 2px;\n  background: rgba(50, 200, 100, 1);\n  width: 45px;\n  top: 0.18rem;\n  bottom: 0.46rem;\n  color: #fff;\n  font-weight: 600;\n  border: 1px solid rgba(3, 3, 3, 0.4);\n  border-radius: 3px;\n"]))),O=x.ZP.div(p||(p=(0,m.Z)(["\n  position: relative;\n"])))}}]);
//# sourceMappingURL=31.2356c973.chunk.js.map