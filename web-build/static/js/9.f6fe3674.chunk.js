(this.webpackJsonp=this.webpackJsonp||[]).push([[9],{1225:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(21),c=n(38),s=n(66),i=n(79),l=n(51);t.a=function(e){var t=Object(s.a)(),n=Object(c.a)(),u=(n.textDark,n.textLight,n.placeholder,Object(a.useContext)(l.a).darkMode);return r.a.createElement(i.a,{style:{fontSize:o.d?28:20,marginBottom:o.g.normal,color:u?"#FFFFFF":"#333333"}},e.disabled?t("n/a"):e.amount?e.amount+" "+(e.suffix||""):t("fetching"))}},1226:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(66),c=n(328);t.a=function(e){var t=e.symbol,n=Object(o.a)();return r.a.createElement(c.a,{title:t?n("insufficient-",{symbol:t}):n("insufficient-balance"),disabled:!0})}},1232:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(19),c=n.n(o),s=n(0),i=n.n(s),l=n(4),u=n(21),d=n(58),f=n(66),m=n(328);t.a=function(e){var t,n=Object(f.a)(),a=Object(s.useContext)(d.b).approveToken,o=Object(s.useState)(!1),p=c()(o,2),b=p[0],k=p[1],v=Object(s.useCallback)((function(){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.token){n.next=19;break}return e.onError({}),k(!0),n.prev=3,n.next=6,r.a.awrap(a(e.token.address,e.spender));case 6:if(!(t=n.sent)){n.next=11;break}return n.next=10,r.a.awrap(t.wait());case 10:e.onSuccess();case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(3),e.onError(n.t0);case 16:return n.prev=16,k(!1),n.finish(16);case 19:case"end":return n.stop()}}),null,null,[[3,13,16,19]],Promise)}),[e.token]);return e.hidden?i.a.createElement(l.a,null):i.a.createElement(m.a,{title:n("approve-",{symbol:(null==(t=e.token)?void 0:t.symbol)||""}),onPress:v,loading:b,containerStyle:{marginBottom:u.g.tiny}})}},1239:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(21),c=n(79);t.a=function(e){return r.a.createElement(c.a,{medium:!0,caption:!0,disabled:e.disabled,style:{marginLeft:o.g.tiny}},e.token.symbol)}},1240:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(0),r=n.n(a),o=n(245),c=n(4),s=n(21),i=n(38),l=n(22),u=n(1228),d=n(1233),f=n(90),m=n(1222),p=n(1235),b=n(1223),k=n(1231),v=n(79),y=n(1224),O=function(e){var t=e.state,n=e.emptyText,c=e.Item,s=Object(a.useCallback)((function(e){var n=e.item;return r.a.createElement(c,{key:n.symbol,token:n,selected:!1,onSelectToken:t.setSelectedLPToken})}),[t.setSelectedLPToken]),i=t.lpTokens.sort((function(e,t){var n=e.multiplier||0,a=t.multiplier||0;return n===a?(t.apy||0)-(e.apy||0):a-n}));return t.loading?r.a.createElement(p.a,null):0===i.length?r.a.createElement(T,{text:n}):r.a.createElement(o.a,{keyExtractor:function(e){return e.symbol},data:i,renderItem:s})},T=function(e){var t=e.text;return r.a.createElement(c.a,{style:{margin:s.g.normal}},r.a.createElement(v.a,{disabled:!0,style:{textAlign:"center",width:"100%"}},t))},g=function(e){var t=Object(i.a)().textMedium,n=Object(l.d)(e.token.balance,e.token.decimals,6),o=Object(a.useCallback)((function(){e.onSelectToken(e.token)}),[e.onSelectToken,e.token]);return r.a.createElement(b.a,{selected:e.selected,onPress:o,containerStyle:{marginBottom:m.a}},r.a.createElement(f.a,{style:{alignItems:"center"}},r.a.createElement(y.a,{token:e.token.tokenA,small:!0,replaceWETH:!0}),r.a.createElement(y.a,{token:e.token.tokenB,small:!0,replaceWETH:!0,style:{marginLeft:4}}),r.a.createElement(v.a,{medium:!0,caption:!0,style:{marginLeft:s.g.tiny}},e.token.tokenA.symbol,"-",e.token.tokenB.symbol),r.a.createElement(c.a,{style:{flex:1,marginLeft:s.g.tiny}},r.a.createElement(v.a,{caption:!0,light:!0,style:{textAlign:"right",color:t}},n)),e.selected?r.a.createElement(u.a,null):r.a.createElement(k.a,null)))};t.b=function(e){return r.a.createElement(c.a,{style:e.style},r.a.createElement(d.a,{title:e.title,expanded:!e.state.selectedLPToken,onExpand:function(){return e.state.setSelectedLPToken()}},r.a.createElement(O,{state:e.state,emptyText:e.emptyText,Item:e.Item})),e.state.selectedLPToken&&r.a.createElement(e.Item,{token:e.state.selectedLPToken,selected:!0,onSelectToken:function(){return e.state.setSelectedLPToken()}}))}},1242:function(e,t,n){"use strict";var a=n(10),r=n.n(a),o=n(2),c=n.n(o),s=n(19),i=n.n(s),l=n(0),u=n(145),d=n.n(u),f=n(58),m=n(329),p=n(1246),b=n(420),k=n(1247);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=!1;t.a=function(e){var t=Object(k.a)(),n=Object(l.useContext)(f.b),a=n.provider,r=n.address,o=n.tokens,s=Object(l.useState)(0),u=i()(s,2),v=u[0],T=u[1],g=Object(l.useState)(!0),h=i()(g,2),j=h[0],P=h[1],x=Object(l.useState)([]),w=i()(x,2),E=w[0],L=w[1],S=Object(l.useState)(),A=i()(S,2),C=A[0],I=A[1],_=Object(l.useState)(!1),D=i()(_,2),B=D[0],M=D[1],Z=Object(l.useState)(),F=i()(Z,2),q=F[0],R=F[1],W=Object(l.useState)(""),U=i()(W,2),H=U[0],z=U[1],G=Object(b.a)().getPair,N=function(){var t;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(r&&a&&o.length>0)||O){n.next=11;break}return n.prev=1,O=!0,n.next=5,c.a.awrap("my-pools"===e?Object(m.e)(r,o,a):"pools"===e?Object(m.g)(r,o,a):"my-lp-tokens"===e?Object(m.c)(r,o,a):Object(m.f)(r,o,a));case 5:(t=n.sent)&&L(t);case 7:return n.prev=7,O=!1,P(!1),n.finish(7);case 11:case"end":return n.stop()}}),null,null,[[1,,7,11]],Promise)};return Object(l.useEffect)((function(){C||z("")}),[C]),d()((function(){return c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(P(!0),R(void 0),!C||!a){e.next=18;break}return e.prev=3,e.t0=R,e.next=7,c.a.awrap(G(C.tokenA,C.tokenB,a));case 7:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 11:e.prev=11,e.t2=e.catch(3);case 13:return e.prev=13,P(!1),e.finish(13);case 16:e.next=19;break;case 18:P(!1);case 19:case"end":return e.stop()}}),null,null,[[3,11,13,16]],Promise)}),[C,a]),Object(p.a)((function(t){return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r||!("pools"===e||o.length>0)){n.next=4;break}return t||P(!0),n.next=4,c.a.awrap(N());case 4:case"end":return n.stop()}}),null,null,null,Promise)}),(function(){return"updateLPTokens()"}),[o.length,r,v],0),y(y({},t),{},{fromToken:t.fromToken||(null==C?void 0:C.tokenA),toToken:t.toToken||(null==C?void 0:C.tokenB),updateLPTokens:N,loading:t.loading||j,lastTimeRefreshed:v,updateLastTimeRefreshed:function(){T(Date.now())},lpTokens:E,selectedLPToken:C,setSelectedLPToken:I,selectedLPTokenAllowed:B,setSelectedLPTokenAllowed:M,pair:q,amount:H,setAmount:z})}},1253:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function c(e){try{i(a.next(e))}catch(t){o(t)}}function s(e){try{i(a.throw(e))}catch(t){o(t)}}function i(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}i((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.signERC2612Permit=t.signDaiPermit=void 0;const r=n(1254),o=n(1255),c="0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",s=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],i=e=>"".padEnd(e,"0"),l=(e,t)=>a(void 0,void 0,void 0,(function*(){return o.hexToUtf8((yield r.call(e,t,"0x06fdde03")).substr(130))})),u=(e,t)=>a(void 0,void 0,void 0,(function*(){if("string"!==typeof t)return t;const n=t,[a,o]=yield Promise.all([l(e,n),r.getChainId(e)]);return{name:a,version:"1",chainId:o,verifyingContract:n}}));t.signDaiPermit=(e,t,n,o,l,d)=>a(void 0,void 0,void 0,(function*(){const a=t.verifyingContract||t,f={holder:n,spender:o,nonce:d||(yield r.call(e,a,`0x7ecebe00${i(24)}${n.substr(2)}`)),expiry:l||c,allowed:!0},m=((e,t)=>({types:{EIP712Domain:s,Permit:[{name:"holder",type:"address"},{name:"spender",type:"address"},{name:"nonce",type:"uint256"},{name:"expiry",type:"uint256"},{name:"allowed",type:"bool"}]},primaryType:"Permit",domain:t,message:e}))(f,yield u(e,t)),p=yield r.signData(e,n,m);return Object.assign(Object.assign({},p),f)})),t.signERC2612Permit=(e,t,n,o,l=c,d,f)=>a(void 0,void 0,void 0,(function*(){const a=t.verifyingContract||t,m={owner:n,spender:o,value:l,nonce:f||(yield r.call(e,a,`0x7ecebe00${i(24)}${n.substr(2)}`)),deadline:d||c},p=((e,t)=>({types:{EIP712Domain:s,Permit:[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}]},primaryType:"Permit",domain:t,message:e}))(m,yield u(e,t)),b=yield r.signData(e,n,p);return Object.assign(Object.assign({},b),m)}))},1254:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function c(e){try{i(a.next(e))}catch(t){o(t)}}function s(e){try{i(a.throw(e))}catch(t){o(t)}}function i(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}i((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=t.getChainId=t.setChainIdOverride=t.signData=t.send=void 0;t.send=(e,t,n)=>new Promise((a,r)=>{const o={id:Math.floor(1e10*Math.random()),method:t,params:n},c=(e,t)=>{e?r(e):t.error?(console.error(t.error),r(t.error)):a(t.result)};let s=e.provider||e;s.sendAsync?s.sendAsync(o,c):s.send(o,c)}),t.signData=(e,n,r)=>a(void 0,void 0,void 0,(function*(){const a="string"===typeof r?r:JSON.stringify(r),o=yield t.send(e,"eth_signTypedData_v4",[n,a]).catch(a=>{if("Method eth_signTypedData_v4 not supported."===a.message)return t.send(e,"eth_signTypedData",[n,r]);throw a});return{r:o.slice(0,66),s:"0x"+o.slice(66,130),v:parseInt(o.slice(130,132),16)}}));let r=null;t.setChainIdOverride=e=>{r=e},t.getChainId=e=>a(void 0,void 0,void 0,(function*(){return r||t.send(e,"eth_chainId")})),t.call=(e,n,a)=>t.send(e,"eth_call",[{to:n,data:a},"latest"])},1255:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.hexToUtf8=void 0;const r=a(n(1256));t.hexToUtf8=function(e){let t="",n=0,a=(e=(e=(e=(e=(e=e.replace(/^0x/i,"")).replace(/^(?:00)*/,"")).split("").reverse().join("")).replace(/^(?:00)*/,"")).split("").reverse().join("")).length;for(let r=0;r<a;r+=2)n=parseInt(e.substr(r,2),16),t+=String.fromCharCode(n);return r.default.decode(t)}},1256:function(e,t,n){!function(e){var t,n,a,r=String.fromCharCode;function o(e){for(var t,n,a=[],r=0,o=e.length;r<o;)(t=e.charCodeAt(r++))>=55296&&t<=56319&&r<o?56320==(64512&(n=e.charCodeAt(r++)))?a.push(((1023&t)<<10)+(1023&n)+65536):(a.push(t),r--):a.push(t);return a}function c(e){if(e>=55296&&e<=57343)throw Error("Lone surrogate U+"+e.toString(16).toUpperCase()+" is not a scalar value")}function s(e,t){return r(e>>t&63|128)}function i(e){if(0==(4294967168&e))return r(e);var t="";return 0==(4294965248&e)?t=r(e>>6&31|192):0==(4294901760&e)?(c(e),t=r(e>>12&15|224),t+=s(e,6)):0==(4292870144&e)&&(t=r(e>>18&7|240),t+=s(e,12),t+=s(e,6)),t+=r(63&e|128)}function l(){if(a>=n)throw Error("Invalid byte index");var e=255&t[a];if(a++,128==(192&e))return 63&e;throw Error("Invalid continuation byte")}function u(){var e,r;if(a>n)throw Error("Invalid byte index");if(a==n)return!1;if(e=255&t[a],a++,0==(128&e))return e;if(192==(224&e)){if((r=(31&e)<<6|l())>=128)return r;throw Error("Invalid continuation byte")}if(224==(240&e)){if((r=(15&e)<<12|l()<<6|l())>=2048)return c(r),r;throw Error("Invalid continuation byte")}if(240==(248&e)&&(r=(7&e)<<18|l()<<12|l()<<6|l())>=65536&&r<=1114111)return r;throw Error("Invalid UTF-8 detected")}e.version="3.0.0",e.encode=function(e){for(var t=o(e),n=t.length,a=-1,r="";++a<n;)r+=i(t[a]);return r},e.decode=function(e){t=o(e),n=t.length,a=0;for(var c,s=[];!1!==(c=u());)s.push(c);return function(e){for(var t,n=e.length,a=-1,o="";++a<n;)(t=e[a])>65535&&(o+=r((t-=65536)>>>10&1023|55296),t=56320|1023&t),o+=r(t);return o}(s)}}(t)},1259:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(30),c=n.n(o),s=n(0),i=n(35),l=n(1253),u=n(32),d=n(60),f=n(58),m=n(22),p=n(103),b=n(420),k=n(422);t.a=function(){var e=Object(s.useContext)(f.b).ethereum,t=Object(b.a)(),n=t.getPair,a=t.getTrade,o=t.calculateAmountOfLPTokenMinted,v=Object(k.b)(),y=v.allowedSlippage,O=v.ttl,T=new i.f("3","100"),g=function(e,t,n,o,s){var l,u,f,p,b;return r.a.async((function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,r.a.awrap(a(e,t,n,o));case 2:if(u=k.sent){k.next=5;break}throw new Error("Cannot find trade");case 5:return f=i.g.swapCallParameters(u,{feeOnTransfer:!1,allowedSlippage:y,recipient:d.i,ttl:O}),p=Object(m.g)("IUniswapV2Router02",d.d,s),k.next=9,r.a.awrap((l=p.populateTransaction)[f.methodName].apply(l,c()(f.args).concat([{value:f.value}])));case 9:return b=k.sent,k.abrupt("return",b.data||"");case 11:case"end":return k.stop()}}),null,null,null,Promise)},h=Object(s.useCallback)((function(e,t,a,s,l){var f,b,k,v,y,O,h,j,P;return r.a.async((function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,r.a.awrap(n(e,t,s));case 2:return b=x.sent,k=new i.i(Object(m.b)(e),a.div(2).toString()),x.next=6,r.a.awrap(o(b,k,b.getOutputAmount(k)[0]));case 6:if(v=x.sent){x.next=9;break}throw new Error("Cannot calculate LP token amount");case 9:return y=Object(m.g)("ZapIn",d.i,l),x.t0=e.address,x.t1=b.liquidityToken.address,x.t2=a,x.t3=Object(m.c)(v,T),x.t4=d.d,x.t5=d.d,x.next=18,r.a.awrap(g(e,t,a.div(2),s,l));case 18:return x.t6=x.sent,O=[x.t0,x.t1,x.t2,x.t3,x.t4,x.t5,x.t6],h=Object(m.h)(e)?a:u.ethers.constants.Zero,x.next=23,r.a.awrap((f=y.estimateGas).ZapIn.apply(f,O.concat([{value:h}])));case 23:return j=x.sent,x.next=26,r.a.awrap(y.ZapIn.apply(y,O.concat([{value:h,gasLimit:j.mul(120).div(100)}])));case 26:return P=x.sent,x.abrupt("return",p.a.apply(void 0,[P,"ZapIn_General_V2.ZapIn()"].concat(c()(O.map((function(e){return e.toString()}))))));case 28:case"end":return x.stop()}}),null,null,null,Promise)}),[g]),j=function(e,t,o,c){var s,i,l,u,d,f;return r.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:if(e!==t.tokenA){p.next=5;break}s=t.tokenB,i=t.tokenA,p.next=11;break;case 5:if(e!==t.tokenB){p.next=10;break}s=t.tokenA,i=t.tokenB,p.next=11;break;case 10:throw new Error("Wrong outputToken");case 11:return p.next=13,r.a.awrap(n(s,i,c));case 13:return l=p.sent,u=Object(m.m)(l.reserveOf(Object(m.b)(s)),s.decimals),d=o.mul(u).div(t.totalSupply),p.next=18,r.a.awrap(a(s,i,d,c));case 18:if(f=p.sent){p.next=21;break}throw new Error("Cannot find trade");case 21:return p.abrupt("return",Object(m.m)(f.outputAmount));case 22:case"end":return p.stop()}}),null,null,null,Promise)};return{zapIn:h,zapOut:Object(s.useCallback)((function(t,n,a,o,s){var i,u,f,b,k,v,y;return r.a.async((function(g){for(;;)switch(g.prev=g.next){case 0:return u=Object(m.g)("ZapOut",d.j,s),f=Math.floor((new Date).getTime()/1e3)+O,g.t0=r.a,g.t1=l.signERC2612Permit,g.t2=e,g.t3=t.address,g.next=8,r.a.awrap(s.getAddress());case 8:return g.t4=g.sent,g.t5=d.j,g.t6=a.toString(),g.t7=f,g.t8=(0,g.t1)(g.t2,g.t3,g.t4,g.t5,g.t6,g.t7),g.next=15,g.t0.awrap.call(g.t0,g.t8);case 15:return b=g.sent,g.t9=n.address,g.t10=t.address,g.t11=a,g.t12=m.c,g.next=22,r.a.awrap(j(n,t,a,o));case 22:return g.t13=g.sent,g.t14=T,g.t15=(0,g.t12)(g.t13,g.t14),g.t16=a,g.t17=f,g.t18=b.v,g.t19=b.r,g.t20=b.s,k=[g.t9,g.t10,g.t11,g.t15,g.t16,g.t17,g.t18,g.t19,g.t20],g.next=33,r.a.awrap((i=u.estimateGas).ZapOutWithPermit.apply(i,k));case 33:return v=g.sent,g.next=36,r.a.awrap(u.ZapOutWithPermit.apply(u,k.concat([{gasLimit:v.mul(120).div(100)}])));case 36:return y=g.sent,g.abrupt("return",p.a.apply(void 0,[y,"ZapOut_General_V1.ZapOutWithPermit()"].concat(c()(k.map((function(e){return e.toString()}))))));case 38:case"end":return g.stop()}}),null,null,null,Promise)}),[j]),getZapOutSwappedAmount:j}}},1407:function(e,t,n){"use strict";n.r(t),n.d(t,"LPTokenOutputItem",(function(){return X}));var a=n(19),r=n.n(a),o=n(0),c=n.n(o),s=n(4),i=n(145),l=n.n(i),u=n(1225),d=n(1232),f=n(1227),m=n(328),p=n(1228),b=n(417),k=n(246),v=n(1229),y=n(1234),O=n(90),T=n(1221),g=n(1230),h=n(1226),j=n(1222),P=n(1240),x=n(1236),w=n(1223),E=n(1231),L=n(79),S=n(418),A=n(1238),C=n(1224),I=(n(1239),n(247)),_=n(421),D=n(60),B=n(21),M=n(10),Z=n.n(M),F=n(2),q=n.n(F),R=n(32),W=n(58),U=n(22),H=n(1242),z=n(422),G=n(1259);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){Z()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J=function(){var e=Object(H.a)("my-lp-tokens"),t=Object(o.useContext)(W.b),n=t.provider,a=t.signer,c=t.getTokenAllowance,s=t.updateTokens,i=Object(z.b)(),u=i.removeLiquidity,d=i.removeLiquidityETH,f=Object(G.a)().zapOut,m=Object(o.useState)(!1),p=r()(m,2),b=p[0],k=p[1],v=Object(o.useState)(),y=r()(v,2),O=y[0],T=y[1],g=Object(o.useState)(!1),h=r()(g,2),j=h[0],P=h[1];l()((function(){var t,n;return q.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!a||!e.selectedLPToken){r.next=16;break}return e.setFromSymbol(e.selectedLPToken.tokenA.symbol),e.setToSymbol(e.selectedLPToken.tokenB.symbol),k(!0),e.setSelectedLPTokenAllowed(!1),r.prev=5,t=R.ethers.BigNumber.from(2).pow(96).sub(1),r.next=9,q.a.awrap(c(e.selectedLPToken.address,D.d));case 9:n=r.sent,e.setSelectedLPTokenAllowed(R.ethers.BigNumber.from(n).gte(t));case 11:return r.prev=11,k(!1),r.finish(11);case 14:r.next=18;break;case 16:e.setFromSymbol(""),e.setToSymbol("");case 18:case"end":return r.stop()}}),null,null,[[5,,11,14]],Promise)}),[a,e.selectedLPToken]),l()((function(){var t,n;return q.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:e.selectedLPToken&&e.selectedLPToken.totalSupply&&e.pair&&e.fromToken&&e.toToken&&e.pair.liquidityToken.address===e.selectedLPToken.address&&(t=Object(U.m)(e.pair.reserveOf(Object(U.b)(e.fromToken)),e.fromToken.decimals),n=Object(U.m)(e.pair.reserveOf(Object(U.b)(e.toToken)),e.toToken.decimals),e.setFromAmount(Object(U.d)(Object(U.l)(e.amount,e.selectedLPToken.decimals).mul(t).div(e.selectedLPToken.totalSupply).toString(),e.selectedLPToken.tokenA.decimals)),e.setToAmount(Object(U.d)(Object(U.l)(e.amount,e.selectedLPToken.decimals).mul(n).div(e.selectedLPToken.totalSupply).toString(),e.selectedLPToken.tokenB.decimals)));case 1:case"end":return a.stop()}}),null,null,null,Promise)}),[e.selectedLPToken,e.amount,e.pair,e.fromToken,e.toToken,a]);var x=function(){var t,n,r,o,c,s,i,l;return q.a.async((function(f){for(;;)switch(f.prev=f.next){case 0:if(!e.selectedLPToken||!a){f.next=20;break}if(t=Object(U.l)(e.fromAmount,e.fromToken.decimals),n=Object(U.l)(e.toAmount,e.toToken.decimals),r=Object(U.l)(e.amount,e.selectedLPToken.decimals),!Object(U.k)(e.fromToken)&&!Object(U.k)(e.toToken)){f.next=15;break}return o=Object(U.k)(e.fromToken)?e.toToken:e.fromToken,c=Object(U.k)(e.fromToken)?n:t,s=Object(U.k)(e.fromToken)?t:n,f.next=10,q.a.awrap(d(o,r,c,s,a));case 10:return i=f.sent,f.next=13,q.a.awrap(i.wait());case 13:f.next=20;break;case 15:return f.next=17,q.a.awrap(u(e.fromToken,e.toToken,r,t,n,a));case 17:return l=f.sent,f.next=20,q.a.awrap(l.wait());case 20:case"end":return f.stop()}}),null,null,null,Promise)},w=Object(o.useCallback)((function(){return q.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.fromAmount&&e.toAmount&&e.selectedLPToken&&e.amount&&n&&a)){t.next=13;break}return P(!0),t.prev=2,t.next=5,q.a.awrap(x());case 5:return t.next=7,q.a.awrap(s());case 7:return t.next=9,q.a.awrap(e.updateLPTokens());case 9:e.setSelectedLPToken(void 0);case 10:return t.prev=10,P(!1),t.finish(10);case 13:case"end":return t.stop()}}),null,null,[[2,,10,13]],Promise)}),[e.fromAmount,e.toAmount,e.selectedLPToken,e.amount,e.updateLPTokens,x,f,s,n,a]);return $($({},e),{},{loading:e.loading||b,outputToken:O,setOutputToken:T,onRemove:w,removing:j})},V=n(66),K=n(419),Q=function(){var e=Object(V.a)(),t=J();return c.a.createElement(s.a,{style:{marginTop:B.g.large}},c.a.createElement(P.b,{state:t,title:e("your-liquidity"),emptyText:e("you-dont-have-liquidity"),Item:P.a}),c.a.createElement(f.a,null),c.a.createElement(Y,{state:t}),c.a.createElement(ee,{state:t}))},X=function(e){return e.hidden?c.a.createElement(s.a,null):c.a.createElement(w.a,{selected:e.selected,onPress:e.onSelectToken,containerStyle:{marginBottom:j.a}},c.a.createElement(O.a,{style:{alignItems:"center"}},c.a.createElement(C.a,{token:e.token.tokenA,small:!0,replaceWETH:!0}),c.a.createElement(C.a,{token:e.token.tokenB,small:!0,replaceWETH:!0,style:{marginLeft:4}}),c.a.createElement(L.a,{medium:!0,caption:!0,style:{marginLeft:B.g.tiny}},e.token.tokenA.symbol," + ",e.token.tokenB.symbol),c.a.createElement(s.a,{style:{flex:1}}),e.selected?c.a.createElement(p.a,null):c.a.createElement(E.a,null)))},Y=function(e){var t=e.state,n=Object(V.a)();return t.selectedLPToken?c.a.createElement(A.a,{title:n("amount-of-tokens"),token:t.selectedLPToken,amount:t.amount,onAmountChanged:t.setAmount}):c.a.createElement(T.a,{text:n("amount-of-tokens"),disabled:!0})},ee=function(e){var t,n=e.state,a=Object(V.a)(),r=!n.selectedLPToken||!n.fromToken||!n.toToken,s=Object(o.useMemo)((function(){if(n.fromToken&&n.outputToken===n.fromToken){var e=Object(U.l)(n.fromAmount,n.fromToken.decimals);return Object(U.d)(e.add(Object(U.c)(e,z.a)),n.fromToken.decimals)}if(n.toToken&&n.outputToken===n.toToken){var t=Object(U.l)(n.toAmount,n.toToken.decimals);return Object(U.d)(t.add(Object(U.c)(t,z.a)),n.toToken.decimals)}}),[n.outputToken,n.fromToken,n.toToken,n.fromAmount,n.toAmount]);return c.a.createElement(g.a,null,(n.outputToken===n.fromToken||n.outputToken===n.toToken)&&c.a.createElement(u.a,{amount:s,suffix:null==(t=n.outputToken)?void 0:t.symbol,disabled:r}),c.a.createElement(x.a,{label:n.fromToken?n.fromToken.symbol:a("1st-token"),text:n.fromAmount,disabled:r}),c.a.createElement(x.a,{label:n.toToken?n.toToken.symbol:a("2nd-token"),text:n.toAmount,disabled:r}),c.a.createElement(te,{state:n}))},te=function(e){var t=e.state,n=Object(o.useState)({}),a=r()(n,2),i=a[0],u=a[1];l()((function(){return u({})}),[t.fromSymbol,t.toSymbol,t.fromAmount]);var f=!t.selectedLPTokenAllowed,m=f||Object(U.j)(t.amount);return c.a.createElement(s.a,{style:{marginTop:B.g.normal}},!t.selectedLPToken||Object(U.j)(t.amount)?c.a.createElement(ne,{state:t,onError:u,disabled:!0}):Object(U.l)(t.amount,t.selectedLPToken.decimals).gt(t.selectedLPToken.balance)?c.a.createElement(h.a,{symbol:t.selectedLPToken.symbol}):t.loading||!t.pair?c.a.createElement(y.a,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{token:t.selectedLPToken,spender:D.d,onSuccess:function(){return t.setSelectedLPTokenAllowed(!0)},onError:u,hidden:!f}),c.a.createElement(ne,{state:t,onError:u,disabled:m})),i.message&&4001!==i.code&&c.a.createElement(v.a,{error:i}))},ne=function(e){var t=e.state,n=e.onError,a=e.disabled,r=Object(V.a)(),s=Object(o.useCallback)((function(){n({}),t.onRemove().catch(n)}),[t.onRemove,n]);return c.a.createElement(m.a,{title:r("remove-liquidity"),disabled:a,loading:t.removing,onPress:s})};t.default=function(){var e=Object(V.a)();return c.a.createElement(K.a,null,c.a.createElement(b.a,null,c.a.createElement(k.a,null,c.a.createElement(S.a,{text:e("remove-liquidity")}),c.a.createElement(L.a,{light:!0},e("remove-liquidity-desc")),c.a.createElement(Q,null)),!B.d&&c.a.createElement(I.a,null),c.a.createElement(s.a,{style:{height:200,padding:20}})),c.a.createElement(_.b,null))}}}]);
//# sourceMappingURL=9.f6fe3674.chunk.js.map