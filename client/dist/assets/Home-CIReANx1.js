import{r as i,R as P,u as De,j as N}from"./index-B11y4AYr.js";import{K as F,i as Le,C as _e,u as ye,a as oe,I as Xe,_ as he,w as He,b as Ce,c as Oe,s as $e,d as Fe,e as Ve,f as H,T as We,g as Ke,h as we,m as Se,j as ke,r as xe,k as le,l as X,n as Ue,o as qe,p as Ge,q as Ye,t as je,v as Pe,x as Qe,y as Ze,z as Je,A as et,B as tt,D as nt,E as me,F as pe,G as rt,H as ot,J as ae,L as at,M as it,N as st,O as Ie,P as Re,Q as lt,R as ct,S as fe}from"./index-XxfpaOHQ.js";import{s as dt,a as ut,b as mt,c as pt,i as ge,M as Ee,O as ft,R as gt,L as Ne}from"./index-m699m4J3.js";import{p as Me}from"./pickAttrs-C8y4yf4f.js";const vt=new F("antMoveDownIn",{"0%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),bt=new F("antMoveDownOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0}}),yt=new F("antMoveLeftIn",{"0%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),ht=new F("antMoveLeftOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),Ct=new F("antMoveRightIn",{"0%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),Ot=new F("antMoveRightOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),$t=new F("antMoveUpIn",{"0%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),wt=new F("antMoveUpOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0}}),St={"move-up":{inKeyframes:$t,outKeyframes:wt},"move-down":{inKeyframes:vt,outKeyframes:bt},"move-left":{inKeyframes:yt,outKeyframes:ht},"move-right":{inKeyframes:Ct,outKeyframes:Ot}},ve=(e,t)=>{const{antCls:n}=e,r=`${n}-${t}`,{inKeyframes:o,outKeyframes:s}=St[t];return[Le(r,o,s,e.motionDurationMid),{[`
        ${r}-enter,
        ${r}-appear
      `]:{opacity:0,animationTimingFunction:e.motionEaseOutCirc},[`${r}-leave`]:{animationTimingFunction:e.motionEaseInOutCirc}}]};function xt(e){return t=>i.createElement(_e,{theme:{token:{motion:!1,zIndexPopupBase:0}}},i.createElement(e,Object.assign({},t)))}const jt=(e,t,n,r)=>xt(s=>{const{prefixCls:a,style:l}=s,c=i.useRef(null),[v,f]=i.useState(0),[d,u]=i.useState(0),[g,m]=ye(!1,{value:s.open}),{getPrefixCls:b}=i.useContext(oe),h=b(t,a);i.useEffect(()=>{if(m(!0),typeof ResizeObserver<"u"){const I=new ResizeObserver(C=>{const O=C[0].target;f(O.offsetHeight+8),u(O.offsetWidth)}),p=setInterval(()=>{var C;const O=n?`.${n(h)}`:`.${h}-dropdown`,z=(C=c.current)===null||C===void 0?void 0:C.querySelector(O);z&&(clearInterval(p),I.observe(z))},10);return()=>{clearInterval(p),I.disconnect()}}},[]);let j=Object.assign(Object.assign({},s),{style:Object.assign(Object.assign({},l),{margin:0}),open:g,visible:g,getPopupContainer:()=>c.current});r&&(j=r(j));const M={paddingBottom:v,position:"relative",minWidth:d};return i.createElement("div",{ref:c,style:M},i.createElement(e,Object.assign({},j)))});var Pt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},It=function(t,n){return i.createElement(Xe,he({},t,{ref:n,icon:Pt}))},Rt=i.forwardRef(It),Et=Ce.ESC,Nt=Ce.TAB;function Mt(e){var t=e.visible,n=e.triggerRef,r=e.onVisibleChange,o=e.autoFocus,s=e.overlayRef,a=i.useRef(!1),l=function(){if(t){var d,u;(d=n.current)===null||d===void 0||(u=d.focus)===null||u===void 0||u.call(d),r==null||r(!1)}},c=function(){var d;return(d=s.current)!==null&&d!==void 0&&d.focus?(s.current.focus(),a.current=!0,!0):!1},v=function(d){switch(d.keyCode){case Et:l();break;case Nt:{var u=!1;a.current||(u=c()),u?d.preventDefault():l();break}}};i.useEffect(function(){return t?(window.addEventListener("keydown",v),o&&He(c,3),function(){window.removeEventListener("keydown",v),a.current=!1}):function(){a.current=!1}},[t])}var zt=i.forwardRef(function(e,t){var n=e.overlay,r=e.arrow,o=e.prefixCls,s=i.useMemo(function(){var l;return typeof n=="function"?l=n():l=n,l},[n]),a=Oe(t,s==null?void 0:s.ref);return P.createElement(P.Fragment,null,r&&P.createElement("div",{className:"".concat(o,"-arrow")}),P.cloneElement(s,{ref:$e(s)?a:void 0}))}),Z={adjustX:1,adjustY:1},J=[0,0],Tt={topLeft:{points:["bl","tl"],overflow:Z,offset:[0,-4],targetOffset:J},top:{points:["bc","tc"],overflow:Z,offset:[0,-4],targetOffset:J},topRight:{points:["br","tr"],overflow:Z,offset:[0,-4],targetOffset:J},bottomLeft:{points:["tl","bl"],overflow:Z,offset:[0,4],targetOffset:J},bottom:{points:["tc","bc"],overflow:Z,offset:[0,4],targetOffset:J},bottomRight:{points:["tr","br"],overflow:Z,offset:[0,4],targetOffset:J}},At=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus","overlay","children","onVisibleChange"];function Bt(e,t){var n,r=e.arrow,o=r===void 0?!1:r,s=e.prefixCls,a=s===void 0?"rc-dropdown":s,l=e.transitionName,c=e.animation,v=e.align,f=e.placement,d=f===void 0?"bottomLeft":f,u=e.placements,g=u===void 0?Tt:u,m=e.getPopupContainer,b=e.showAction,h=e.hideAction,j=e.overlayClassName,M=e.overlayStyle,I=e.visible,p=e.trigger,C=p===void 0?["hover"]:p,O=e.autoFocus,z=e.overlay,w=e.children,x=e.onVisibleChange,$=Fe(e,At),A=P.useState(),q=Ve(A,2),S=q[0],B=q[1],D="visible"in e?I:S,V=P.useRef(null),W=P.useRef(null),L=P.useRef(null);P.useImperativeHandle(t,function(){return V.current});var _=function(E){B(E),x==null||x(E)};Mt({visible:D,triggerRef:L,onVisibleChange:_,autoFocus:O,overlayRef:W});var ne=function(E){var Q=e.onOverlayClick;B(!1),Q&&Q(E)},R=function(){return P.createElement(zt,{ref:W,overlay:z,prefixCls:a,arrow:o})},G=function(){return typeof z=="function"?R:R()},K=function(){var E=e.minOverlayWidthMatchTrigger,Q=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?E:!Q},Y=function(){var E=e.openClassName;return E!==void 0?E:"".concat(a,"-open")},k=P.cloneElement(w,{className:H((n=w.props)===null||n===void 0?void 0:n.className,D&&Y()),ref:$e(w)?Oe(L,w.ref):void 0}),re=h;return!re&&C.indexOf("contextMenu")!==-1&&(re=["click"]),P.createElement(We,he({builtinPlacements:g},$,{prefixCls:a,ref:V,popupClassName:H(j,Ke({},"".concat(a,"-show-arrow"),o)),popupStyle:M,action:C,showAction:b,hideAction:re,popupPlacement:d,popupAlign:v,popupTransitionName:l,popupAnimation:c,popupVisible:D,stretch:K()?"minWidth":"",popup:G(),onPopupVisibleChange:_,onPopupClick:ne,getPopupContainer:m}),k)}const Dt=P.forwardRef(Bt),Lt=e=>{const{componentCls:t,menuCls:n,colorError:r,colorTextLightSolid:o}=e,s=`${n}-item`;return{[`${t}, ${t}-menu-submenu`]:{[`${n} ${s}`]:{[`&${s}-danger:not(${s}-disabled)`]:{color:r,"&:hover":{color:o,backgroundColor:r}}}}}},_t=e=>{const{componentCls:t,menuCls:n,zIndexPopup:r,dropdownArrowDistance:o,sizePopupArrow:s,antCls:a,iconCls:l,motionDurationMid:c,paddingBlock:v,fontSize:f,dropdownEdgeChildPadding:d,colorTextDisabled:u,fontSizeIcon:g,controlPaddingHorizontal:m,colorBgElevated:b}=e;return[{[t]:{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:r,display:"block","&::before":{position:"absolute",insetBlock:e.calc(s).div(2).sub(o).equal(),zIndex:-9999,opacity:1e-4,content:'""'},[`&-trigger${a}-btn`]:{[`& > ${l}-down, & > ${a}-btn-icon > ${l}-down`]:{fontSize:g}},[`${t}-wrap`]:{position:"relative",[`${a}-btn > ${l}-down`]:{fontSize:g},[`${l}-down::before`]:{transition:`transform ${c}`}},[`${t}-wrap-open`]:{[`${l}-down::before`]:{transform:"rotate(180deg)"}},"\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ":{display:"none"},[`&${a}-slide-down-enter${a}-slide-down-enter-active${t}-placement-bottomLeft,
          &${a}-slide-down-appear${a}-slide-down-appear-active${t}-placement-bottomLeft,
          &${a}-slide-down-enter${a}-slide-down-enter-active${t}-placement-bottom,
          &${a}-slide-down-appear${a}-slide-down-appear-active${t}-placement-bottom,
          &${a}-slide-down-enter${a}-slide-down-enter-active${t}-placement-bottomRight,
          &${a}-slide-down-appear${a}-slide-down-appear-active${t}-placement-bottomRight`]:{animationName:dt},[`&${a}-slide-up-enter${a}-slide-up-enter-active${t}-placement-topLeft,
          &${a}-slide-up-appear${a}-slide-up-appear-active${t}-placement-topLeft,
          &${a}-slide-up-enter${a}-slide-up-enter-active${t}-placement-top,
          &${a}-slide-up-appear${a}-slide-up-appear-active${t}-placement-top,
          &${a}-slide-up-enter${a}-slide-up-enter-active${t}-placement-topRight,
          &${a}-slide-up-appear${a}-slide-up-appear-active${t}-placement-topRight`]:{animationName:ut},[`&${a}-slide-down-leave${a}-slide-down-leave-active${t}-placement-bottomLeft,
          &${a}-slide-down-leave${a}-slide-down-leave-active${t}-placement-bottom,
          &${a}-slide-down-leave${a}-slide-down-leave-active${t}-placement-bottomRight`]:{animationName:mt},[`&${a}-slide-up-leave${a}-slide-up-leave-active${t}-placement-topLeft,
          &${a}-slide-up-leave${a}-slide-up-leave-active${t}-placement-top,
          &${a}-slide-up-leave${a}-slide-up-leave-active${t}-placement-topRight`]:{animationName:pt}}},ke(e,b,{arrowPlacement:{top:!0,bottom:!0}}),{[`${t} ${n}`]:{position:"relative",margin:0},[`${n}-submenu-popup`]:{position:"absolute",zIndex:r,background:"transparent",boxShadow:"none",transformOrigin:"0 0","ul, li":{listStyle:"none",margin:0}},[`${t}, ${t}-menu-submenu`]:Object.assign(Object.assign({},xe(e)),{[n]:Object.assign(Object.assign({padding:d,listStyleType:"none",backgroundColor:b,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary},le(e)),{"&:empty":{padding:0,boxShadow:"none"},[`${n}-item-group-title`]:{padding:`${X(v)} ${X(m)}`,color:e.colorTextDescription,transition:`all ${c}`},[`${n}-item`]:{position:"relative",display:"flex",alignItems:"center"},[`${n}-item-icon`]:{minWidth:f,marginInlineEnd:e.marginXS,fontSize:e.fontSizeSM},[`${n}-title-content`]:{flex:"auto","> a":{color:"inherit",transition:`all ${c}`,"&:hover":{color:"inherit"},"&::after":{position:"absolute",inset:0,content:'""'}}},[`${n}-item, ${n}-submenu-title`]:Object.assign(Object.assign({clear:"both",margin:0,padding:`${X(v)} ${X(m)}`,color:e.colorText,fontWeight:"normal",fontSize:f,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${c}`,borderRadius:e.borderRadiusSM,"&:hover, &-active":{backgroundColor:e.controlItemBgHover}},le(e)),{"&-selected":{color:e.colorPrimary,backgroundColor:e.controlItemBgActive,"&:hover, &-active":{backgroundColor:e.controlItemBgActiveHover}},"&-disabled":{color:u,cursor:"not-allowed","&:hover":{color:u,backgroundColor:b,cursor:"not-allowed"},a:{pointerEvents:"none"}},"&-divider":{height:1,margin:`${X(e.marginXXS)} 0`,overflow:"hidden",lineHeight:0,backgroundColor:e.colorSplit},[`${t}-menu-submenu-expand-icon`]:{position:"absolute",insetInlineEnd:e.paddingXS,[`${t}-menu-submenu-arrow-icon`]:{marginInlineEnd:"0 !important",color:e.colorTextDescription,fontSize:g,fontStyle:"normal"}}}),[`${n}-item-group-list`]:{margin:`0 ${X(e.marginXS)}`,padding:0,listStyle:"none"},[`${n}-submenu-title`]:{paddingInlineEnd:e.calc(m).add(e.fontSizeSM).equal()},[`${n}-submenu-vertical`]:{position:"relative"},[`${n}-submenu${n}-submenu-disabled ${t}-menu-submenu-title`]:{[`&, ${t}-menu-submenu-arrow-icon`]:{color:u,backgroundColor:b,cursor:"not-allowed"}},[`${n}-submenu-selected ${t}-menu-submenu-title`]:{color:e.colorPrimary}})})},[ge(e,"slide-up"),ge(e,"slide-down"),ve(e,"move-up"),ve(e,"move-down"),Ue(e,"zoom-big")]]},Xt=e=>Object.assign(Object.assign({zIndexPopup:e.zIndexPopupBase+50,paddingBlock:(e.controlHeight-e.fontSize*e.lineHeight)/2},qe({contentRadius:e.borderRadiusLG,limitVerticalRadius:!0})),Ge(e)),Ht=we("Dropdown",e=>{const{marginXXS:t,sizePopupArrow:n,paddingXXS:r,componentCls:o}=e,s=Se(e,{menuCls:`${o}-menu`,dropdownArrowDistance:e.calc(n).div(2).add(t).equal(),dropdownEdgeChildPadding:r});return[_t(s),Lt(s)]},Xt,{resetStyle:!1}),de=e=>{var t;const{menu:n,arrow:r,prefixCls:o,children:s,trigger:a,disabled:l,dropdownRender:c,getPopupContainer:v,overlayClassName:f,rootClassName:d,overlayStyle:u,open:g,onOpenChange:m,visible:b,onVisibleChange:h,mouseEnterDelay:j=.15,mouseLeaveDelay:M=.1,autoAdjustOverflow:I=!0,placement:p="",overlay:C,transitionName:O}=e,{getPopupContainer:z,getPrefixCls:w,direction:x,dropdown:$}=i.useContext(oe);nt();const A=i.useMemo(()=>{const y=w();return O!==void 0?O:p.includes("top")?`${y}-slide-down`:`${y}-slide-up`},[w,p,O]),q=i.useMemo(()=>p?p.includes("Center")?p.slice(0,p.indexOf("Center")):p:x==="rtl"?"bottomRight":"bottomLeft",[p,x]),S=w("dropdown",o),B=Ye(S),[D,V,W]=Ht(S,B),[,L]=je(),_=i.Children.only(s),ne=Pe(_,{className:H(`${S}-trigger`,{[`${S}-rtl`]:x==="rtl"},_.props.className),disabled:(t=_.props.disabled)!==null&&t!==void 0?t:l}),R=l?[]:a,G=!!(R!=null&&R.includes("contextMenu")),[K,Y]=ye(!1,{value:g??b}),k=Qe(y=>{m==null||m(y,{source:"trigger"}),h==null||h(y),Y(y)}),re=H(f,d,V,W,B,$==null?void 0:$.className,{[`${S}-rtl`]:x==="rtl"}),U=Ze({arrowPointAtCenter:typeof r=="object"&&r.pointAtCenter,autoAdjustOverflow:I,offset:L.marginXXS,arrowWidth:r?L.sizePopupArrow:0,borderRadius:L.borderRadius}),E=i.useCallback(()=>{n!=null&&n.selectable&&(n!=null&&n.multiple)||(m==null||m(!1,{source:"menu"}),Y(!1))},[n==null?void 0:n.selectable,n==null?void 0:n.multiple]),Q=()=>{let y;return n!=null&&n.items?y=i.createElement(Ee,Object.assign({},n)):typeof C=="function"?y=C():y=C,c&&(y=c(y)),y=i.Children.only(typeof y=="string"?i.createElement("span",null,y):y),i.createElement(ft,{prefixCls:`${S}-menu`,rootClassName:H(W,B),expandIcon:i.createElement("span",{className:`${S}-menu-submenu-arrow`},i.createElement(gt,{className:`${S}-menu-submenu-arrow-icon`})),mode:"vertical",selectable:!1,onClick:E,validator:fn=>{}},y)},[ue,Be]=Je("Dropdown",u==null?void 0:u.zIndex);let se=i.createElement(Dt,Object.assign({alignPoint:G},et(e,["rootClassName"]),{mouseEnterDelay:j,mouseLeaveDelay:M,visible:K,builtinPlacements:U,arrow:!!r,overlayClassName:re,prefixCls:S,getPopupContainer:v||z,transitionName:A,trigger:R,overlay:Q,placement:q,onVisibleChange:k,overlayStyle:Object.assign(Object.assign(Object.assign({},$==null?void 0:$.style),u),{zIndex:ue})}),ne);return ue&&(se=i.createElement(tt.Provider,{value:Be},se)),D(se)};function Ft(e){return Object.assign(Object.assign({},e),{align:{overflow:{adjustX:!1,adjustY:!1}}})}const Vt=jt(de,"dropdown",e=>e,Ft),Wt=e=>i.createElement(Vt,Object.assign({},e),i.createElement("span",null));de._InternalPanelDoNotUseOrYouWillBeFired=Wt;const ie=e=>{let{children:t}=e;const{getPrefixCls:n}=i.useContext(oe),r=n("breadcrumb");return i.createElement("li",{className:`${r}-separator`,"aria-hidden":"true"},t===""?t:t||"/")};ie.__ANT_BREADCRUMB_SEPARATOR=!0;var Kt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function kt(e,t){if(e.title===void 0||e.title===null)return null;const n=Object.keys(t).join("|");return typeof e.title=="object"?e.title:String(e.title).replace(new RegExp(`:(${n})`,"g"),(r,o)=>t[o]||r)}function ze(e,t,n,r){if(n==null)return null;const{className:o,onClick:s}=t,a=Kt(t,["className","onClick"]),l=Object.assign(Object.assign({},Me(a,{data:!0,aria:!0})),{onClick:s});return r!==void 0?i.createElement("a",Object.assign({},l,{className:H(`${e}-link`,o),href:r}),n):i.createElement("span",Object.assign({},l,{className:H(`${e}-link`,o)}),n)}function Ut(e,t){return(r,o,s,a,l)=>{if(t)return t(r,o,s,a);const c=kt(r,o);return ze(e,r,c,l)}}var ce=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const Te=e=>{const{prefixCls:t,separator:n="/",children:r,menu:o,overlay:s,dropdownProps:a,href:l}=e,v=(f=>{if(o||s){const d=Object.assign({},a);if(o){const u=o||{},{items:g}=u,m=ce(u,["items"]);d.menu=Object.assign(Object.assign({},m),{items:g==null?void 0:g.map((b,h)=>{var{key:j,title:M,label:I,path:p}=b,C=ce(b,["key","title","label","path"]);let O=I??M;return p&&(O=i.createElement("a",{href:`${l}${p}`},O)),Object.assign(Object.assign({},C),{key:j??h,label:O})})})}else s&&(d.overlay=s);return i.createElement(de,Object.assign({placement:"bottom"},d),i.createElement("span",{className:`${t}-overlay-link`},f,i.createElement(Rt,null)))}return f})(r);return v!=null?i.createElement(i.Fragment,null,i.createElement("li",null,v),n&&i.createElement(ie,null,n)):null},Ae=e=>{const{prefixCls:t,children:n,href:r}=e,o=ce(e,["prefixCls","children","href"]),{getPrefixCls:s}=i.useContext(oe),a=s("breadcrumb",t);return i.createElement(Te,Object.assign({},o,{prefixCls:a}),ze(a,o,n,r))};Ae.__ANT_BREADCRUMB_ITEM=!0;const qt=Ae,Gt=e=>{const{componentCls:t,iconCls:n,calc:r}=e;return{[t]:Object.assign(Object.assign({},xe(e)),{color:e.itemColor,fontSize:e.fontSize,[n]:{fontSize:e.iconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:Object.assign({color:e.linkColor,transition:`color ${e.motionDurationMid}`,padding:`0 ${X(e.paddingXXS)}`,borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",marginInline:r(e.marginXXS).mul(-1).equal(),"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover}},le(e)),"li:last-child":{color:e.lastItemColor},[`${t}-separator`]:{marginInline:e.separatorMargin,color:e.separatorColor},[`${t}-link`]:{[`
          > ${n} + span,
          > ${n} + a
        `]:{marginInlineStart:e.marginXXS}},[`${t}-overlay-link`]:{borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",padding:`0 ${X(e.paddingXXS)}`,marginInline:r(e.marginXXS).mul(-1).equal(),[`> ${n}`]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover,a:{color:e.linkHoverColor}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${e.componentCls}-rtl`]:{direction:"rtl"}})}},Yt=e=>({itemColor:e.colorTextDescription,lastItemColor:e.colorText,iconFontSize:e.fontSize,linkColor:e.colorTextDescription,linkHoverColor:e.colorText,separatorColor:e.colorTextDescription,separatorMargin:e.marginXS}),Qt=we("Breadcrumb",e=>{const t=Se(e,{});return Gt(t)},Yt);var be=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function Zt(e){const{breadcrumbName:t,children:n}=e,r=be(e,["breadcrumbName","children"]),o=Object.assign({title:t},r);return n&&(o.menu={items:n.map(s=>{var{breadcrumbName:a}=s,l=be(s,["breadcrumbName"]);return Object.assign(Object.assign({},l),{title:a})})}),o}function Jt(e,t){return i.useMemo(()=>e||(t?t.map(Zt):null),[e,t])}var en=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const tn=(e,t)=>{if(t===void 0)return t;let n=(t||"").replace(/^\//,"");return Object.keys(e).forEach(r=>{n=n.replace(`:${r}`,e[r])}),n},te=e=>{const{prefixCls:t,separator:n="/",style:r,className:o,rootClassName:s,routes:a,items:l,children:c,itemRender:v,params:f={}}=e,d=en(e,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),{getPrefixCls:u,direction:g,breadcrumb:m}=i.useContext(oe);let b;const h=u("breadcrumb",t),[j,M,I]=Qt(h),p=Jt(l,a),C=Ut(h,v);if(p&&p.length>0){const w=[],x=l||a;b=p.map(($,A)=>{const{path:q,key:S,type:B,menu:D,overlay:V,onClick:W,className:L,separator:_,dropdownProps:ne}=$,R=tn(f,q);R!==void 0&&w.push(R);const G=S??A;if(B==="separator")return i.createElement(ie,{key:G},_);const K={},Y=A===p.length-1;D?K.menu=D:V&&(K.overlay=V);let{href:k}=$;return w.length&&R!==void 0&&(k=`#/${w.join("/")}`),i.createElement(Te,Object.assign({key:G},K,Me($,{data:!0,aria:!0}),{className:L,dropdownProps:ne,href:k,separator:Y?"":n,onClick:W,prefixCls:h}),C($,f,x,w,k))})}else if(c){const w=me(c).length;b=me(c).map((x,$)=>{if(!x)return x;const A=$===w-1;return Pe(x,{separator:A?"":n,key:$})})}const O=H(h,m==null?void 0:m.className,{[`${h}-rtl`]:g==="rtl"},o,s,M,I),z=Object.assign(Object.assign({},m==null?void 0:m.style),r);return j(i.createElement("nav",Object.assign({className:O,style:z},d),i.createElement("ol",null,b)))};te.Item=qt;te.Separator=ie;const nn=e=>{const t=e!=null&&e.algorithm?pe(e.algorithm):pe(ae),n=Object.assign(Object.assign({},rt),e==null?void 0:e.token);return ot(n,{override:e==null?void 0:e.token},t,at)};function rn(e){const{sizeUnit:t,sizeStep:n}=e,r=n-2;return{sizeXXL:t*(r+10),sizeXL:t*(r+6),sizeLG:t*(r+2),sizeMD:t*(r+2),sizeMS:t*(r+1),size:t*r,sizeSM:t*r,sizeXS:t*(r-1),sizeXXS:t*(r-1)}}const on=(e,t)=>{const n=t??ae(e),r=n.fontSizeSM,o=n.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},n),rn(t??e)),it(r)),{controlHeight:o}),st(Object.assign(Object.assign({},n),{controlHeight:o})))},T=(e,t)=>new Ie(e).setAlpha(t).toRgbString(),ee=(e,t)=>new Ie(e).lighten(t).toHexString(),an=e=>{const t=Re(e,{theme:"dark"});return{1:t[0],2:t[1],3:t[2],4:t[3],5:t[6],6:t[5],7:t[4],8:t[6],9:t[5],10:t[4]}},sn=(e,t)=>{const n=e||"#000",r=t||"#fff";return{colorBgBase:n,colorTextBase:r,colorText:T(r,.85),colorTextSecondary:T(r,.65),colorTextTertiary:T(r,.45),colorTextQuaternary:T(r,.25),colorFill:T(r,.18),colorFillSecondary:T(r,.12),colorFillTertiary:T(r,.08),colorFillQuaternary:T(r,.04),colorBgElevated:ee(n,12),colorBgContainer:ee(n,8),colorBgLayout:ee(n,0),colorBgSpotlight:ee(n,26),colorBgBlur:T(r,.04),colorBorder:ee(n,26),colorBorderSecondary:ee(n,19)}},ln=(e,t)=>{const n=Object.keys(lt).map(o=>{const s=Re(e[o],{theme:"dark"});return new Array(10).fill(1).reduce((a,l,c)=>(a[`${o}-${c+1}`]=s[c],a[`${o}${c+1}`]=s[c],a),{})}).reduce((o,s)=>(o=Object.assign(Object.assign({},o),s),o),{}),r=t??ae(e);return Object.assign(Object.assign(Object.assign({},r),n),ct(e,{generateColorPalettes:an,generateNeutralColorPalettes:sn}))};function cn(){const[e,t,n]=je();return{theme:e,token:t,hashId:n}}const dn={defaultConfig:fe,defaultSeed:fe.token,useToken:cn,defaultAlgorithm:ae,darkAlgorithm:ln,compactAlgorithm:on,getDesignToken:nn},{Header:un,Content:mn,Footer:pn}=Ne,hn=()=>{const e=De(),{token:{colorBgContainer:t,borderRadiusLG:n}}=dn.useToken();return N.jsxs(Ne,{children:[N.jsxs(un,{style:{display:"flex",alignItems:"center"},children:[N.jsx("div",{className:"demo-logo"}),N.jsx(Ee,{theme:"dark",mode:"horizontal",items:[{key:"login",label:"Login"}],onClick:({key:r})=>{r==="login"&&e("/auth")},style:{flex:1,minWidth:0}})]}),N.jsxs(mn,{style:{padding:"0 48px"},children:[N.jsxs(te,{style:{margin:"16px 0"},children:[N.jsx(te.Item,{children:"Home"}),N.jsx(te.Item,{children:"List"}),N.jsx(te.Item,{children:"App"})]}),N.jsx("div",{style:{background:t,minHeight:280,padding:24,borderRadius:n},children:"Content"})]}),N.jsxs(pn,{style:{textAlign:"center"},children:["Ant Design ©",new Date().getFullYear()," Created by Ant UED"]})]})};export{hn as default};