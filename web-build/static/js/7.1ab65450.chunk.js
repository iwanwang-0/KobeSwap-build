(this.webpackJsonp=this.webpackJsonp||[]).push([[7],{1221:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(21),l=n(38),s=n(328),c=n(90),i=n(79);t.a=function(e){var t=Object(l.a)().accent;return r.a.createElement(c.a,{style:{alignItems:"flex-end",height:32,marginBottom:e.disabled?0:o.g.small}},r.a.createElement(i.a,{medium:!0,fontWeight:e.fontWeight||"bold",disabled:e.disabled,style:[{flex:1,fontSize:o.d?24:18,paddingBottom:o.g.tiny},e.style]},e.text),e.buttonText&&r.a.createElement(s.a,{type:"clear",size:"small",title:e.buttonText,onPress:e.onPressButton,color:t,buttonStyle:{paddingHorizontal:o.g.tiny}}))}},1225:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(21),l=n(38),s=n(66),c=n(79),i=n(51);t.a=function(e){var t=Object(s.a)(),n=Object(l.a)(),u=(n.textDark,n.textLight,n.placeholder,Object(a.useContext)(i.a).darkMode);return r.a.createElement(c.a,{style:{fontSize:o.d?28:20,marginBottom:o.g.normal,color:u?"#FFFFFF":"#333333"}},e.disabled?t("n/a"):e.amount?e.amount+" "+(e.suffix||""):t("fetching"))}},1226:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(66),l=n(328);t.a=function(e){var t=e.symbol,n=Object(o.a)();return r.a.createElement(l.a,{title:t?n("insufficient-",{symbol:t}):n("insufficient-balance"),disabled:!0})}},1227:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),l=n(21),s=n(38);t.a=function(e){var t=Object(s.a)().border;return r.a.createElement(o.a,{style:{height:1,width:"100%",backgroundColor:t,marginTop:e.small?l.g.tiny:l.g.small,marginBottom:e.small?l.g.tiny:l.g.small+l.g.tiny}})}},1229:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),l=n(21),s=n(79);t.a=function(e){var t=e.error;return r.a.createElement(o.a,{style:{borderColor:"red",borderWidth:1,width:"100%",padding:l.g.tiny,marginTop:l.g.small}},t.code&&r.a.createElement(s.a,{fontWeight:"bold",style:{color:"red",fontSize:14}},"Error Code ",t.code),r.a.createElement(s.a,{note:!0,style:{color:"red",fontSize:14}},t.message))}},1230:function(e,t,n){"use strict";var a=n(9),r=n.n(a),o=n(10),l=n.n(o),s=n(0),c=n.n(s),i=n(4),u=n(21),d=n(51),b=n(38),m=n(416);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=Object(s.useContext)(d.a).darkMode,n=Object(b.a)(),a=n.backgroundLight,o=n.borderDark,l=Object(m.a)().border;return c.a.createElement(i.a,r()({},e,{style:[p(p({},l({color:t?o:"CCCCCC"})),{},{backgroundColor:a,marginTop:u.g.normal+u.g.small,padding:u.g.small+u.g.tiny}),e.style]}))}},1232:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(19),l=n.n(o),s=n(0),c=n.n(s),i=n(4),u=n(21),d=n(58),b=n(66),m=n(328);t.a=function(e){var t,n=Object(b.a)(),a=Object(s.useContext)(d.b).approveToken,o=Object(s.useState)(!1),f=l()(o,2),p=f[0],g=f[1],h=Object(s.useCallback)((function(){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.token){n.next=19;break}return e.onError({}),g(!0),n.prev=3,n.next=6,r.a.awrap(a(e.token.address,e.spender));case 6:if(!(t=n.sent)){n.next=11;break}return n.next=10,r.a.awrap(t.wait());case 10:e.onSuccess();case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(3),e.onError(n.t0);case 16:return n.prev=16,g(!1),n.finish(16);case 19:case"end":return n.stop()}}),null,null,[[3,13,16,19]],Promise)}),[e.token]);return e.hidden?c.a.createElement(i.a,null):c.a.createElement(m.a,{title:n("approve-",{symbol:(null==(t=e.token)?void 0:t.symbol)||""}),onPress:h,loading:p,containerStyle:{marginBottom:u.g.tiny}})}},1234:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(66),l=n(328);t.a=function(){var e=Object(o.a)();return r.a.createElement(l.a,{title:e("fetching"),disabled:!0})}},1236:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(21),l=n(38),s=n(163),c=n(66),i=n(90),u=n(79);t.a=function(e){var t=Object(c.a)(),n=Object(l.a)(),a=n.textMedium,d=n.textLight,b=n.placeholder,m=Object(s.a)(e.url||"","","_blank"),f=e.disabled?"N/A":e.text?e.text+(e.suffix?" "+e.suffix:""):t("fetching");return r.a.createElement(i.a,{style:{justifyContent:"space-between",marginTop:4}},r.a.createElement(u.a,{note:!o.d,fontWeight:"bold",style:{color:e.disabled?b:a}},e.label),r.a.createElement(u.a,{note:!o.d,onPress:e.url?m:void 0,style:{color:e.disabled?b:e.text?a:d,textDecorationLine:e.url?"underline":"none"}},f))}},1237:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),l=n(21),s=n(38),c=n(416),i=n(328),u=n(79);t.a=function(e){var t=Object(s.a)().textLight,n=(0,Object(c.a)().border)({color:e.color}),a=e.color||t;return r.a.createElement(o.a,{style:[e.clear?{}:n,e.style]},r.a.createElement(u.a,{note:!0,style:{color:a}},e.text),e.buttonText&&e.onPressButton&&r.a.createElement(i.a,{title:e.buttonText,type:"clear",size:"small",fontWeight:"bold",onPress:e.onPressButton,titleStyle:{color:a},buttonStyle:{paddingHorizontal:0,paddingVertical:0},style:{alignSelf:"flex-end",marginTop:l.g.tiny}}))}},1238:function(e,t,n){"use strict";var a=n(10),r=n.n(a),o=n(0),l=n.n(o),s=n(11),c=n(4),i=n(32),u=n(21),d=n(38),b=n(416),m=n(22),f=n(328),p=n(1221),g=n(1241);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){var t=Object(d.a)().accent,n=Object(o.useCallback)((function(){if(e.token){var t=e.token.balance;if(Object(m.h)(e.token)){var n=Object(m.n)(16);t=t.gt(n)?t.sub(n):i.ethers.constants.Zero}e.updateAmount(Object(m.d)(t,e.token.decimals))}}),[e.token,e.updateAmount]);return l.a.createElement(c.a,{style:{position:"absolute",right:12,bottom:"web"===s.a.OS?12:24}},l.a.createElement(f.a,{type:"clear",size:"small",color:t,title:e.maxButtonText||(u.d?"MAX "+e.token.symbol:"MAX"),fontWeight:"bold",onPress:n,buttonStyle:{paddingHorizontal:u.g.tiny}}))};t.a=function(e){var t,n,a=Object(b.a)().border,r=Object(o.useCallback)((function(t){if(e.token&&e.onAmountChanged)try{Object(m.l)(t,e.token.decimals),e.onAmountChanged(t)}catch(n){t.endsWith(".")&&t.indexOf(".")===t.length-1&&e.onAmountChanged(t)}}),[e.token,e.onAmountChanged]);return l.a.createElement(c.a,null,e.title&&l.a.createElement(p.a,{text:e.title}),l.a.createElement(c.a,null,l.a.createElement(g.a,{label:e.label,value:e.amount,onChangeText:r,placeholder:"0.0",keyboardType:"numeric",autoFocus:e.autoFocus||!1,inputStyle:{marginHorizontal:u.g.tiny},inputContainerStyle:{borderBottomWidth:0},labelStyle:{fontFamily:"light",height:e.label?"auto":0},containerStyle:y(y({},a()),{},{paddingHorizontal:u.g.tiny,paddingTop:15,paddingBottom:2})}),(null==(t=e.token)||null==(n=t.balance)?void 0:n.gt(0))&&!e.hideMaxButton&&l.a.createElement(O,{token:e.token,maxButtonText:e.maxButtonText,updateAmount:e.onAmountChanged})))}},1241:function(e,t,n){"use strict";var a=n(9),r=n.n(a),o=n(0),l=n.n(o),s=n(11),c=n(81),i=n(38),u=n(51);t.a=function(e){var t=Object(i.a)(),n=(t.textDark,t.textMedium),a=t.textLight,d=e.size||"normal",b=Object(o.useContext)(u.a).darkMode,m=e.color||b?"#FFFFFF":"#333333",f="small"===d?16:"large"===d?24:20,p=Object(o.useCallback)((function(t){null==e.onChangeText||e.onChangeText(t),null==e.onError||e.onError("");var n=[];""!==t&&e.forbidden&&e.forbidden.forEach((function(e){t.match(e.regexp)&&n.push(e.error)})),""!==t&&e.allowed&&e.allowed.forEach((function(e){t.match(e.regexp)||n.push(e.error)})),n.length>0&&(null==e.onError||e.onError(n.join("\n")))}),[e.onChangeText,e.onError,e.forbidden,e.allowed]);return l.a.createElement(c.c,r()({},e,{inputStyle:[{fontSize:f,fontFamily:"regular",paddingBottom:4,color:m,marginTop:0,minHeight:32},"web"===s.a.OS?{outline:"none"}:{},e.inputStyle],labelStyle:[{color:n},e.labelStyle],placeholderTextColor:e.placeholderTextColor||a,errorStyle:e.onError?{height:0}:e.errorStyle,containerStyle:[{paddingHorizontal:0},e.containerStyle],onChangeText:p}))}},1262:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(19),l=n.n(o),s=n(0),c=n(32),i=n(145),u=n.n(i),d=n(60),b=n(58),m=n(22),f=n(103),p=function(){return{enter:Object(s.useCallback)((function(e,t){var n,a,o;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return n=Object(m.g)("SushiBar",d.g,t),l.next=3,r.a.awrap(n.estimateGas.enter(e));case 3:return a=l.sent,l.next=6,r.a.awrap(n.enter(e,{gasLimit:a.mul(120).div(100)}));case 6:return o=l.sent,l.abrupt("return",Object(f.a)(o,"SushiBar.enter()",e.toString()));case 8:case"end":return l.stop()}}),null,null,null,Promise)}),[]),leave:Object(s.useCallback)((function(e,t){var n,a,o;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return n=Object(m.g)("SushiBar",d.g,t),l.next=3,r.a.awrap(n.estimateGas.leave(e));case 3:return a=l.sent,l.next=6,r.a.awrap(n.leave(e,{gasLimit:a.mul(120).div(100)}));case 6:return o=l.sent,l.abrupt("return",Object(f.a)(o,"SushiBar.leave()",e.toString()));case 8:case"end":return l.stop()}}),null,null,null,Promise)}),[])}};t.a=function(){var e=Object(s.useContext)(b.b),t=e.signer,n=e.address,a=e.getTokenAllowance,o=e.tokens,i=e.updateTokens,f=p(),g=f.enter,h=f.leave,y=Object(s.useState)(),O=l()(y,2),x=O[0],j=O[1],v=Object(s.useState)(),E=l()(v,2),S=E[0],k=E[1],w=Object(s.useState)(),C=l()(w,2),P=C[0],T=C[1],A=Object(s.useState)(""),B=l()(A,2),F=B[0],z=B[1],D=Object(s.useState)(!1),H=l()(D,2),M=H[0],L=H[1],W=Object(s.useState)(!1),I=l()(W,2),Z=I[0],N=I[1],U=Object(s.useState)(!1),X=l()(U,2),G=X[0],J=X[1],R=Object(s.useState)(!1),V=l()(R,2),_=V[0],q=V[1],K=Object(s.useState)(!1),Q=l()(K,2),Y=Q[0],$=Q[1],ee=Object(s.useMemo)((function(){return o.find((function(e){return"SUSHI"===e.symbol}))}),[o]),te=Object(s.useMemo)((function(){return o.find((function(e){return"xSUSHI"===e.symbol}))}),[o]);Object(s.useEffect)((function(){z("")}),[n]),u()((function(){var e,n,o,l,s;return r.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(!(ee&&te&&t)){i.next=34;break}return L(!1),N(!1),J(!0),i.prev=4,e=c.ethers.BigNumber.from(2).pow(96).sub(1),i.next=8,r.a.awrap(a(ee.address,d.g));case 8:return n=i.sent,L(c.ethers.BigNumber.from(n).gte(e)),i.next=12,r.a.awrap(a(te.address,d.g));case 12:return o=i.sent,N(c.ethers.BigNumber.from(o).gte(e)),l=Object(m.g)("ERC20",ee.address,t),i.t0=j,i.next=18,r.a.awrap(l.balanceOf(d.g));case 18:return i.t1=i.sent,(0,i.t0)(i.t1),i.t2=k,i.next=23,r.a.awrap(l.totalSupply());case 23:return i.t3=i.sent,(0,i.t2)(i.t3),s=Object(m.g)("ERC20",te.address,t),i.t4=T,i.next=29,r.a.awrap(s.totalSupply());case 29:i.t5=i.sent,(0,i.t4)(i.t5);case 31:return i.prev=31,J(!1),i.finish(31);case 34:case"end":return i.stop()}}),null,null,[[4,,31,34]],Promise)}),[ee,te,t]);var ne=Object(s.useCallback)((function(){var e,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(F&&ee&&t)){a.next=16;break}return q(!0),a.prev=2,e=Object(m.l)(F,ee.decimals),a.next=6,r.a.awrap(g(e,t));case 6:if(!(n=a.sent)){a.next=13;break}return a.next=10,r.a.awrap(n.wait());case 10:return a.next=12,r.a.awrap(i());case 12:z("");case 13:return a.prev=13,q(!1),a.finish(13);case 16:case"end":return a.stop()}}),null,null,[[2,,13,16]],Promise)}),[F,ee,t]),ae=Object(s.useCallback)((function(){var e,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(F&&te&&t)){a.next=16;break}return $(!0),a.prev=2,e=Object(m.l)(F,te.decimals),a.next=6,r.a.awrap(h(e,t));case 6:if(!(n=a.sent)){a.next=13;break}return a.next=10,r.a.awrap(n.wait());case 10:return a.next=12,r.a.awrap(i());case 12:z("");case 13:return a.prev=13,$(!1),a.finish(13);case 16:case"end":return a.stop()}}),null,null,[[2,,13,16]],Promise)}),[F,te,t]);return{sushi:ee,xSushi:te,sushiStaked:x,sushiSupply:S,xSushiSupply:P,amount:F,setAmount:z,sushiAllowed:M,setSushiAllowed:L,xSushiAllowed:Z,setXSushiAllowed:N,loading:G,onEnter:ne,entering:_,onLeave:ae,leaving:Y}}},1401:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(19),l=n.n(o),s=n(0),c=n.n(s),i=n(4),u=n(1225),d=n(1232),b=n(1227),m=n(328),f=n(417),p=n(246),g=n(1229),h=n(1234),y=n(1221),O=n(1230),x=n(1226),j=n(1236),v=n(1237),E=n(79),S=n(418),k=n(1238),w=n(247),C=n(421),P=n(60),T=n(21),A=n(164),B=n(1262),F=n(66),z=n(22),D=n(419),H=function(){var e=Object(F.a)(),t=Object(B.a)();return c.a.createElement(i.a,{style:{marginTop:T.g.large}},c.a.createElement(M,{state:t}),c.a.createElement(b.a,null),c.a.createElement(L,{state:t}),t.sushi&&t.sushi.balance.isZero()&&c.a.createElement(v.a,{text:e("you-dont-have-sushi"),color:"orange",style:{marginTop:T.g.small}}),c.a.createElement(W,{state:t}))},M=function(e){var t=e.state,n=Object(F.a)();return c.a.createElement(i.a,null,c.a.createElement(y.a,{text:n("your-sushi")}),c.a.createElement(u.a,{amount:t.sushi?Object(z.d)(t.sushi.balance,t.sushi.decimals):"",suffix:"SUSHI"}))},L=function(e){var t=e.state,n=Object(F.a)();return!t.sushi||t.sushi.balance.isZero()?c.a.createElement(y.a,{text:n("amount-to-stake"),disabled:!0}):c.a.createElement(i.a,null,c.a.createElement(y.a,{text:n("amount-to-stake")}),c.a.createElement(k.a,{token:t.sushi,amount:t.amount,onAmountChanged:t.setAmount,autoFocus:T.d}))},W=function(e){var t=e.state,n=Object(F.a)(),a=!t.sushi||t.sushi.balance.isZero()||!t.xSushi||!t.sushiStaked||!t.xSushiSupply||Object(z.j)(t.amount),r=a?void 0:Object(z.l)(t.amount,t.sushi.decimals).mul(t.xSushiSupply).div(t.sushiStaked),o=a?void 0:Object(z.d)(t.xSushiSupply,t.xSushi.decimals,8),l=a?void 0:t.xSushi.balance.add(r),s=a?void 0:A.a.from(r.add(l),t.xSushiSupply).toString();return c.a.createElement(O.a,null,c.a.createElement(u.a,{amount:r?Object(z.d)(r,t.xSushi.decimals,8):"",suffix:"xSUSHI",disabled:a}),c.a.createElement(j.a,{label:n("xsushi-share"),text:s,suffix:"%",disabled:a}),c.a.createElement(j.a,{label:n("total-xsushi"),text:o,disabled:a}),c.a.createElement(I,{state:t}))},I=function(e){var t=e.state,n=Object(s.useState)({}),a=l()(n,2),r=a[0],o=a[1];return c.a.createElement(i.a,{style:{marginTop:T.g.normal}},!t.sushi||t.sushi.balance.isZero()||Object(z.j)(t.amount)?c.a.createElement(Z,{state:t,onError:o,disabled:!0}):Object(z.l)(t.amount,t.sushi.decimals).gt(t.sushi.balance)?c.a.createElement(x.a,{symbol:t.sushi.symbol}):t.loading?c.a.createElement(h.a,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{token:t.sushi,spender:P.g,onSuccess:function(){return t.setSushiAllowed(!0)},onError:o,hidden:t.sushiAllowed}),c.a.createElement(Z,{state:t,onError:o,disabled:!t.sushiAllowed})),r.message&&4001!==r.code&&c.a.createElement(g.a,{error:r}))},Z=function(e){var t=e.state,n=e.onError,a=e.disabled,o=Object(F.a)();return c.a.createElement(m.a,{title:o("stake"),loading:t.entering,onPress:function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return n({}),e.prev=1,e.next=4,r.a.awrap(t.onEnter());case 4:t.setAmount(""),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(e.t0);case 10:case"end":return e.stop()}}),null,null,[[1,7]],Promise)},disabled:a})};t.default=function(){var e=Object(F.a)();return c.a.createElement(D.a,null,c.a.createElement(f.a,null,c.a.createElement(p.a,null,c.a.createElement(S.a,{text:e("stake")}),c.a.createElement(E.a,{light:!0},e("stake-desc")),c.a.createElement(H,null)),!T.d&&c.a.createElement(w.a,null),c.a.createElement(i.a,{style:{height:200,padding:20}})),c.a.createElement(C.d,null))}}}]);
//# sourceMappingURL=7.1ab65450.chunk.js.map