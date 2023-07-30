"use strict";(self.webpackChunkInTrend=self.webpackChunkInTrend||[]).push([[500],{4500:function(e,n,i){i.r(n),i.d(n,{Movies:function(){return z}});var r=i(6871),t=i(5946),l=i(9439),a=i(2791),s=i(3504),o=i(8206),d=i(4087),u=i(1413),c=i(4925),v=i(9886);function f(e,n){if(null!=e)if("function"!==typeof e)try{e.current=n}catch(i){throw new Error("Cannot assign value '".concat(n,"' to ref '").concat(e,"'"))}else e(n)}function m(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return function(e){n.forEach((function(n){f(n,e)}))}}var h=i(7872),p=i(9084),x=i(9592),b=i(972),Z=i(6992),g=i(184),y=["id","isRequired","isInvalid","isDisabled","isReadOnly"],I=["getRootProps","htmlProps"],j=(0,v.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),F=(0,l.Z)(j,2),R=F[0],C=F[1],k=(0,v.k)({strict:!1,name:"FormControlContext"}),q=(0,l.Z)(k,2),P=q[0],T=q[1];var N=(0,h.G)((function(e,n){var i=(0,p.jC)("Form",e),r=function(e){var n=e.id,i=e.isRequired,r=e.isInvalid,t=e.isDisabled,s=e.isReadOnly,o=(0,c.Z)(e,y),d=(0,a.useId)(),v=n||"field-".concat(d),f="".concat(v,"-label"),h="".concat(v,"-feedback"),p="".concat(v,"-helptext"),x=(0,a.useState)(!1),b=(0,l.Z)(x,2),g=b[0],I=b[1],j=(0,a.useState)(!1),F=(0,l.Z)(j,2),R=F[0],C=F[1],k=(0,a.useState)(!1),q=(0,l.Z)(k,2),P=q[0],T=q[1],N=(0,a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,u.Z)((0,u.Z)({id:p},e),{},{ref:m(n,(function(e){e&&C(!0)}))})}),[p]),O=(0,a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,u.Z)((0,u.Z)({},e),{},{ref:n,"data-focus":(0,Z.PB)(P),"data-disabled":(0,Z.PB)(t),"data-invalid":(0,Z.PB)(r),"data-readonly":(0,Z.PB)(s),id:void 0!==e.id?e.id:f,htmlFor:void 0!==e.htmlFor?e.htmlFor:v})}),[v,t,P,r,s,f]),D=(0,a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,u.Z)((0,u.Z)({id:h},e),{},{ref:m(n,(function(e){e&&I(!0)})),"aria-live":"polite"})}),[h]),S=(0,a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,u.Z)((0,u.Z)((0,u.Z)({},e),o),{},{ref:n,role:"group"})}),[o]),_=(0,a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,u.Z)((0,u.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!i,isInvalid:!!r,isReadOnly:!!s,isDisabled:!!t,isFocused:!!P,onFocus:function(){return T(!0)},onBlur:function(){return T(!1)},hasFeedbackText:g,setHasFeedbackText:I,hasHelpText:R,setHasHelpText:C,id:v,labelId:f,feedbackId:h,helpTextId:p,htmlProps:o,getHelpTextProps:N,getErrorMessageProps:D,getRootProps:S,getLabelProps:O,getRequiredIndicatorProps:_}}((0,x.Lr)(e)),t=r.getRootProps,s=(r.htmlProps,(0,c.Z)(r,I)),o=(0,Z.cx)("chakra-form-control",e.className);return(0,g.jsx)(P,{value:s,children:(0,g.jsx)(R,{value:i,children:(0,g.jsx)(b.m.div,(0,u.Z)((0,u.Z)({},t({},n)),{},{className:o,__css:i.container}))})})}));N.displayName="FormControl",(0,h.G)((function(e,n){var i=T(),r=C(),t=(0,Z.cx)("chakra-form__helper-text",e.className);return(0,g.jsx)(b.m.div,(0,u.Z)((0,u.Z)({},null==i?void 0:i.getHelpTextProps(e,n)),{},{__css:r.helperText,className:t}))})).displayName="FormHelperText";var O=["isDisabled","isInvalid","isReadOnly","isRequired"],D=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function S(e){var n=function(e){var n,i,r,t=T(),l=e.id,a=e.disabled,s=e.readOnly,o=e.required,d=e.isRequired,v=e.isInvalid,f=e.isReadOnly,m=e.isDisabled,h=e.onFocus,p=e.onBlur,x=(0,c.Z)(e,D),b=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==t?void 0:t.hasFeedbackText)&&(null==t?void 0:t.isInvalid)&&b.push(t.feedbackId);(null==t?void 0:t.hasHelpText)&&b.push(t.helpTextId);return(0,u.Z)((0,u.Z)({},x),{},{"aria-describedby":b.join(" ")||void 0,id:null!=l?l:null==t?void 0:t.id,isDisabled:null!=(n=null!=a?a:m)?n:null==t?void 0:t.isDisabled,isReadOnly:null!=(i=null!=s?s:f)?i:null==t?void 0:t.isReadOnly,isRequired:null!=(r=null!=o?o:d)?r:null==t?void 0:t.isRequired,isInvalid:null!=v?v:null==t?void 0:t.isInvalid,onFocus:(0,Z.v0)(null==t?void 0:t.onFocus,h),onBlur:(0,Z.v0)(null==t?void 0:t.onBlur,p)})}(e),i=n.isDisabled,r=n.isInvalid,t=n.isReadOnly,l=n.isRequired,a=(0,c.Z)(n,O);return(0,u.Z)((0,u.Z)({},a),{},{disabled:i,readOnly:t,required:l,"aria-invalid":(0,Z.Qm)(r),"aria-required":(0,Z.Qm)(l),"aria-readonly":(0,Z.Qm)(t)})}var _=["htmlSize"],w=(0,h.G)((function(e,n){var i=e.htmlSize,r=(0,c.Z)(e,_),t=(0,p.jC)("Input",r),l=S((0,x.Lr)(r)),a=(0,Z.cx)("chakra-input",e.className);return(0,g.jsx)(b.m.input,(0,u.Z)((0,u.Z)({size:i},l),{},{__css:t.field,ref:n,className:a}))}));w.displayName="Input",w.id="Input";var B=i(3790),H=i(8637),E=i(6777);var G=i.p+"static/media/find.de27622983fb4375c655783ddc8f8a9d.svg";function L(){var e=(0,a.useState)(""),n=(0,l.Z)(e,2),i=n[0],r=n[1],t=(0,a.useState)([]),u=(0,l.Z)(t,2),c=u[0],v=u[1],f=(0,s.lr)(),m=(0,l.Z)(f,2),h=m[0],p=m[1];return(0,a.useEffect)((function(){h.get("query")&&(0,H.Ph)(h.get("query")).then((function(e){v(e)}))}),[h,i]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o.W,{as:"section",maxWidth:"4xl",borderRadius:"lg",p:["1","4"],children:(0,g.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),!i.trim())return null;p({query:i})},children:(0,g.jsxs)(d.xu,{display:"flex",m:"0 auto",width:["80%","70%","60%","50%"],alignItems:"center",children:[(0,g.jsx)(w,{onChange:function(e){r(e.target.value)},mr:"0.5rem",type:"text",value:i,autoComplete:"off"}),(0,g.jsx)("button",{type:"submit",children:(0,g.jsx)(B.E,{src:G,width:"3rem",p:"0.1rem",_hover:{p:"0.2rem"},borderRadius:"full",alt:"the search icon"})})]})})}),c.length>0&&(0,g.jsx)(E.e,{movies:c})]})}var z=function(){var e=(0,r.UO)().movieId;return(0,g.jsxs)(g.Fragment,{children:[e?(0,g.jsx)(g.Fragment,{}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(t.X,{as:"h2",textAlign:"center",m:"1rem 1rem 0 0 ",color:"white",opacity:"0.8",children:"Find movie by name"}),(0,g.jsx)(L,{})]}),(0,g.jsx)(r.j3,{})]})}},8206:function(e,n,i){i.d(n,{W:function(){return v}});var r=i(1413),t=i(4925),l=i(7872),a=i(9592),s=i(9084),o=i(972),d=i(6992),u=i(184),c=["className","centerContent"],v=(0,l.G)((function(e,n){var i=(0,a.Lr)(e),l=i.className,v=i.centerContent,f=(0,t.Z)(i,c),m=(0,s.mq)("Container",e);return(0,u.jsx)(o.m.div,(0,r.Z)((0,r.Z)({ref:n,className:(0,d.cx)("chakra-container",l)},f),{},{__css:(0,r.Z)((0,r.Z)({},m),v&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));v.displayName="Container"}}]);
//# sourceMappingURL=500.45439fea.chunk.js.map