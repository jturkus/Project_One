/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1
}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");
d.remove();
if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);
if(!cl||!ck.createElement){cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close()
}d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)
}cj[a]=e
}return cj[a]
}function ct(a,b){var c={};
f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a
});
return c
}function cs(){cq=b
}function cr(){setTimeout(cs,0);
return cq=f.now()
}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")
}catch(b){}}function ch(){try{return new a.XMLHttpRequest
}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));
var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;
for(g=1;
g<i;
g++){if(g===1){for(h in a.converters){typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h])
}}l=k,k=d[g];
if(k==="*"){k=l
}else{if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];
if(!n){p=b;
for(o in e){j=o.split(" ");
if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];
if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);
break
}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))
}}}return c
}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;
for(i in g){i in d&&(c[g[i]]=d[i])
}while(f[0]==="*"){f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"))
}if(h){for(i in e){if(e[i]&&e[i].test(h)){f.unshift(i);
break
}}}if(f[0] in d){j=f[0]
}else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;
break
}k||(k=i)
}j=j||k
}if(j){j!==f[0]&&f.unshift(j);
return d[j]
}}function b_(a,b,c,d){if(f.isArray(b)){f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)
})
}else{if(!c&&f.type(b)==="object"){for(var e in b){b_(a+"["+e+"]",b[e],c,d)
}}else{d(a,b)
}}}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};
for(d in c){c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d])
}e&&f.extend(!0,a,e)
}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;
var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;
for(;
i<j&&(k||!l);
i++){l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)))
}(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));
return l
}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");
if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;
for(;
e<g;
e++){h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)
}}}
}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;
if(d>0){if(c!=="border"){for(;
e<g;
e+=2){c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0
}}return d+"px"
}d=by(a,b);
if(d<0||d==null){d=a.style[b]
}if(bt.test(d)){return d
}d=parseFloat(d)||0;
if(c){for(;
e<g;
e+=2){d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0)
}}return d+"px"
}function bo(a){var b=c.createElement("div");
bh.appendChild(b),b.innerHTML=a.outerHTML;
return b.firstChild
}function bn(a){var b=(a.nodeName||"").toLowerCase();
b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)
}function bm(a){if(a.type==="checkbox"||a.type==="radio"){a.defaultChecked=a.checked
}}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]
}function bk(a,b){var c;
b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))
}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;
if(i){delete h.handle,h.events={};
for(c in i){for(d=0,e=i[c].length;
d<e;
d++){f.event.add(b,c,i[c][d])
}}}h.data&&(h.data=f.extend({},h.data))
}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a
}function U(a){var b=V.split("|"),c=a.createDocumentFragment();
if(c.createElement){while(b.length){c.createElement(b.pop())
}}return c
}function T(a,b,c){b=b||0;
if(f.isFunction(b)){return f.grep(a,function(a,d){var e=!!b.call(a,d,a);
return e===c
})
}if(b.nodeType){return f.grep(a,function(a,d){return a===b===c
})
}if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1
});
if(O.test(b)){return f.filter(b,d,!c)
}b=f.filter(b,d)
}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c
})
}function S(a){return !a||!a.parentNode||a.parentNode.nodeType===11
}function K(){return !0
}function J(){return !1
}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);
h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())
},0)
}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b])){continue
}if(b!=="toJSON"){return !1
}}return !0
}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();
d=a.getAttribute(e);
if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d
}catch(g){}f.data(a,c,d)
}else{d=b
}}return d
}function h(a){var b=g[a]={},c,d;
a=a.split(/\s+/);
for(c=0,d=a.length;
c<d;
c++){b[a[c]]=!0
}return b
}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")
}catch(a){setTimeout(J,1);
return
}e.ready()
}}var e=function(a,b){return new e.fn.init(a,b,h)
},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()
},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};
e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;
if(!a){return this
}if(a.nodeType){this.context=this[0]=a,this.length=1;
return this
}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;
return this
}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];
if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);
return e.merge(this,a)
}h=c.getElementById(g[2]);
if(h&&h.parentNode){if(h.id!==g[2]){return f.find(a)
}this.length=1,this[0]=h
}this.context=c,this.selector=a;
return this
}return !d||d.jquery?(d||f).find(a):this.constructor(d).find(a)
}if(e.isFunction(a)){return f.ready(a)
}a.selector!==b&&(this.selector=a.selector,this.context=a.context);
return e.makeArray(a,this)
},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length
},toArray:function(){return F.call(this,0)
},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]
},pushStack:function(a,b,c){var d=this.constructor();
e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");
return d
},each:function(a,b){return e.each(this,a,b)
},ready:function(a){e.bindReady(),A.add(a);
return this
},eq:function(a){a=+a;
return a===-1?this.slice(a):this.slice(a,a+1)
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))
},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)
}))
},end:function(){return this.prevObject||this.constructor(null)
},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;
typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);
for(;
j<k;
j++){if((a=arguments[j])!=null){for(c in a){d=i[c],f=a[c];
if(i===f){continue
}l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)
}}}return i
},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);
return e
},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)
},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body){return setTimeout(e.ready,1)
}e.isReady=!0;
if(a!==!0&&--e.readyWait>0){return
}A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")
}},bindReady:function(){if(!A){A=e.Callbacks("once memory");
if(c.readyState==="complete"){return setTimeout(e.ready,1)
}if(c.addEventListener){c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1)
}else{if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);
var b=!1;
try{b=a.frameElement==null
}catch(d){}c.documentElement.doScroll&&b&&J()
}}}},isFunction:function(a){return e.type(a)==="function"
},isArray:Array.isArray||function(a){return e.type(a)==="array"
},isWindow:function(a){return a!=null&&a==a.window
},isNumeric:function(a){return !isNaN(parseFloat(a))&&isFinite(a)
},type:function(a){return a==null?String(a):I[C.call(a)]||"object"
},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a)){return !1
}try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf")){return !1
}}catch(c){return !1
}var d;
for(d in a){}return d===b||D.call(a,d)
},isEmptyObject:function(a){for(var b in a){return !1
}return !0
},error:function(a){throw new Error(a)
},parseJSON:function(b){if(typeof b!="string"||!b){return null
}b=e.trim(b);
if(a.JSON&&a.JSON.parse){return a.JSON.parse(b)
}if(n.test(b.replace(o,"@").replace(p,"]").replace(q,""))){return(new Function("return "+b))()
}e.error("Invalid JSON: "+b)
},parseXML:function(c){if(typeof c!="string"||!c){return null
}var d,f;
try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))
}catch(g){d=b
}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);
return d
},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)
})(b)
},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)
},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()
},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);
if(d){if(i){for(f in a){if(c.apply(a[f],d)===!1){break
}}}else{for(;
g<h;
){if(c.apply(a[g++],d)===!1){break
}}}}else{if(i){for(f in a){if(c.call(a[f],f,a[f])===!1){break
}}}else{for(;
g<h;
){if(c.call(a[g],g,a[g++])===!1){break
}}}}return a
},trim:G?function(a){return a==null?"":G.call(a)
}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")
},makeArray:function(a,b){var c=b||[];
if(a!=null){var d=e.type(a);
a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)
}return c
},inArray:function(a,b,c){var d;
if(b){if(H){return H.call(b,a,c)
}d=b.length,c=c?c<0?Math.max(0,d+c):c:0;
for(;
c<d;
c++){if(c in b&&b[c]===a){return c
}}}return -1
},merge:function(a,c){var d=a.length,e=0;
if(typeof c.length=="number"){for(var f=c.length;
e<f;
e++){a[d++]=c[e]
}}else{while(c[e]!==b){a[d++]=c[e++]
}}a.length=d;
return a
},grep:function(a,b,c){var d=[],e;
c=!!c;
for(var f=0,g=a.length;
f<g;
f++){e=!!b(a[f],f),c!==e&&d.push(a[f])
}return d
},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));
if(k){for(;
i<j;
i++){f=c(a[i],i,d),f!=null&&(h[h.length]=f)
}}else{for(g in a){f=c(a[g],g,d),f!=null&&(h[h.length]=f)
}}return h.concat.apply([],h)
},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];
c=a,a=d
}if(!e.isFunction(a)){return b
}var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))
};
g.guid=a.guid=a.guid||g.guid||e.guid++;
return g
},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;
if(d&&typeof d=="object"){for(l in d){e.access(a,c,l,d[l],1,h,f)
}g=1
}else{if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)
}):(c.call(a,f),c=null));
if(c){for(;
l<m;
l++){c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i)
}}g=1
}}return g?a:k?c.call(a):m?c(a[0],d):h
},now:function(){return(new Date).getTime()
},uaMatch:function(a){a=a.toLowerCase();
var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];
return{browser:b[1]||"",version:b[2]||"0"}
},sub:function(){function a(b,c){return new a.fn.init(b,c)
}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));
return e.fn.init.call(this,d,f,b)
},a.fn.init.prototype=a.fn;
var b=a(c);
return a
},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()
}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()
}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())
});
return e
}(),g={};
f.Callbacks=function(a){a=a?g[a]||h(a):{};
var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;
for(d=0,e=b.length;
d<e;
d++){g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)
}},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;
for(;
c&&m<l;
m++){if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;
break
}}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))
},p={add:function(){if(c){var a=c.length;
n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))
}return this
},remove:function(){if(c){var b=arguments,d=0,e=b.length;
for(;
d<e;
d++){for(var f=0;
f<c.length;
f++){if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);
if(a.unique){break
}}}}}return this
},has:function(a){if(c){var b=0,d=c.length;
for(;
b<d;
b++){if(a===c[b]){return !0
}}}return !1
},empty:function(){c=[];
return this
},disable:function(){c=d=e=b;
return this
},disabled:function(){return !c
},lock:function(){d=b,(!e||e===!0)&&p.disable();
return this
},locked:function(){return !d
},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));
return this
},fire:function(){p.fireWith(this,arguments);
return this
},fired:function(){return !!i
}};
return p
};
var i=[].slice;
f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e
},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);
return this
},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);
return this
},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;
f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])
}):i[a](d[e])
})
}).promise()
},promise:function(a){if(a==null){a=h
}else{for(var b in h){a[b]=h[b]
}}return a
}},i=h.promise({}),j;
for(j in g){i[j]=g[j].fire,i[j+"With"]=g[j].fireWith
}i.done(function(){e="resolved"
},c.disable,d.lock).fail(function(){e="rejected"
},b.disable,d.lock),a&&a.call(i,i);
return i
},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)
}
}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)
}
}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();
if(d>1){for(;
c<d;
c++){b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g
}g||j.resolveWith(j,b)
}else{j!==a&&j.resolveWith(j,d?[a]:[])
}return k
}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;
p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];
if(!d||!d.length||!e){return{}
}g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;
try{delete p.test
}catch(r){b.deleteExpando=!1
}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1
}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);
if(p.attachEvent){for(n in {submit:1,change:1,focusin:1}){m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o
}}j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];
!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div><table "+n+"' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))
});
return b
}();
var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;
f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];
return !!a&&!m(a)
},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";
if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b){return
}n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));
if(typeof c=="object"||typeof c=="function"){e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c)
}g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);
if(o&&!h[c]){return g.events
}k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;
return i
}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;
if(!j[k]){return
}if(b){d=c?j[k]:j[k].data;
if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));
for(e=0,g=b.length;
e<g;
e++){delete d[b[e]]
}if(!(c?m:f.isEmptyObject)(d)){return
}}}if(!c){delete j[k].data;
if(!m(j[k])){return
}}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)
}},_data:function(a,b,c){return f.data(a,b,c,!0)
},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];
if(b){return b!==!0&&a.getAttribute("classid")===b
}}return !0
}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;
if(a===b){if(this.length){m=f.data(j);
if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;
for(i=g.length;
k<i;
k++){h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]))
}f._data(j,"parsedAttrs",!0)
}}return m
}if(typeof a=="object"){return this.each(function(){f.data(this,a)
})
}d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";
return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));
return m===b&&d[1]?this.data(d[0]):m
}d[1]=c,this.each(function(){var b=f(this);
b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)
})
},null,c,arguments.length>1,null,!1)
},removeData:function(a){return this.each(function(){f.removeData(this,a)
})
}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))
},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);
if(b){c=c||"fx";
var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;
e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))
}},queue:function(a,b,c){var d;
if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));
return d||[]
}},dequeue:function(a,b){b=b||"fx";
var c=f.queue(a,b),d=c.shift(),e={};
d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)
},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))
}}),f.fn.extend({queue:function(a,c){var d=2;
typeof a!="string"&&(c=a,a="fx",d--);
if(arguments.length<d){return f.queue(this[0],a)
}return c===b?this:this.each(function(){var b=f.queue(this,a,c);
a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)
})
},dequeue:function(a){return this.each(function(){f.dequeue(this,a)
})
},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";
return this.queue(b,function(b,c){var d=setTimeout(b,a);
c.stop=function(){clearTimeout(d)
}
})
},clearQueue:function(a){return this.queue(a||"fx",[])
},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])
}typeof a!="string"&&(c=a,a=b),a=a||"fx";
var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;
while(g--){if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0)){h++,l.add(m)
}}m();
return d.promise(c)
}});
var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;
f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)
},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)
})
},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)
},removeProp:function(a){a=f.propFix[a]||a;
return this.each(function(){try{this[a]=b,delete this[a]
}catch(c){}})
},addClass:function(a){var b,c,d,e,g,h,i;
if(f.isFunction(a)){return this.each(function(b){f(this).addClass(a.call(this,b,this.className))
})
}if(a&&typeof a=="string"){b=a.split(p);
for(c=0,d=this.length;
c<d;
c++){e=this[c];
if(e.nodeType===1){if(!e.className&&b.length===1){e.className=a
}else{g=" "+e.className+" ";
for(h=0,i=b.length;
h<i;
h++){~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ")
}e.className=f.trim(g)
}}}}return this
},removeClass:function(a){var c,d,e,g,h,i,j;
if(f.isFunction(a)){return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))
})
}if(a&&typeof a=="string"||a===b){c=(a||"").split(p);
for(d=0,e=this.length;
d<e;
d++){g=this[d];
if(g.nodeType===1&&g.className){if(a){h=(" "+g.className+" ").replace(o," ");
for(i=0,j=c.length;
i<j;
i++){h=h.replace(" "+c[i]+" "," ")
}g.className=f.trim(h)
}else{g.className=""
}}}}return this
},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";
if(f.isFunction(a)){return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)
})
}return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);
while(e=j[g++]){i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)
}}else{if(c==="undefined"||c==="boolean"){this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""
}}})
},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;
for(;
c<d;
c++){if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1){return !0
}}return !1
},val:function(a){var c,d,e,g=this[0];
if(!!arguments.length){e=f.isFunction(a);
return this.each(function(d){var g=f(this),h;
if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""
})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];
if(!c||!("set" in c)||c.set(this,h,"value")===b){this.value=h
}}})
}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];
if(c&&"get" in c&&(d=c.get(g,"value"))!==b){return d
}d=g.value;
return typeof d=="string"?d.replace(q,""):d==null?"":d
}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;
return !b||b.specified?a.value:a.text
}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";
if(g<0){return null
}c=j?g:0,d=j?g+1:i.length;
for(;
c<d;
c++){e=i[c];
if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();
if(j){return b
}h.push(b)
}}if(j&&!h.length&&i.length){return f(i[g]).val()
}return h
},set:function(a,b){var c=f.makeArray(b);
f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0
}),c.length||(a.selectedIndex=-1);
return c
}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;
if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn){return f(a)[c](d)
}if(typeof a.getAttribute=="undefined"){return f.prop(a,c,d)
}i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));
if(d!==b){if(d===null){f.removeAttr(a,c);
return
}if(h&&"set" in h&&i&&(g=h.set(a,d,c))!==b){return g
}a.setAttribute(c,""+d);
return d
}if(h&&"get" in h&&i&&(g=h.get(a,c))!==null){return g
}g=a.getAttribute(c);
return g===null?b:g
}},removeAttr:function(a,b){var c,d,e,g,h,i=0;
if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;
for(;
i<g;
i++){e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))
}}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode){f.error("type property can't be changed")
}else{if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;
a.setAttribute("type",b),c&&(a.value=c);
return b
}}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button")){return w.get(a,b)
}return b in a?a.value:null
},set:function(a,b,c){if(w&&f.nodeName(a,"button")){return w.set(a,b,c)
}a.value=b
}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;
if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);
return d!==b?g&&"set" in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get" in g&&(e=g.get(a,c))!==null?e:a[c]
}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");
return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b
}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);
return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b
},set:function(a,b,c){var d;
b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));
return c
}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;
d=a.getAttributeNode(c);
return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b
},set:function(a,b,d){var e=a.getAttributeNode(d);
e||(e=c.createAttribute(d),a.setAttributeNode(e));
return e.nodeValue=b+""
}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");
return c
}}})
}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)
}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);
return d===null?b:d
}})
}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b
},set:function(a,b){return a.style.cssText=""+b
}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;
b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);
return null
}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value
}}
}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b)){return a.checked=f.inArray(f(a).val(),b)>=0
}}})
});
var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);
b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));
return b
},H=function(a,b){var c=a.attributes||{};
return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))
},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")
};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;
if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b
},i.elem=a),c=f.trim(I(c)).split(" ");
for(k=0;
k<c.length;
k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];
if(!r){r=j[m]=[],r.delegateCount=0;
if(!s.setup||s.setup.call(a,e,n,i)===!1){a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)
}}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0
}a=null
}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;
if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");
for(h=0;
h<b.length;
h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];
if(!j){for(j in o){f.event.remove(a,j+b[h],c,d,!0)
}continue
}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;
for(n=0;
n<r.length;
n++){s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s))
}r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])
}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))
}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;
if(E.test(h+f.event.triggered)){return
}h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());
if((!e||f.event.customEvent[h])&&!f.event.global[h]){return
}c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";
if(!e){j=f.cache;
for(l in j){j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0)
}return
}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};
if(p.trigger&&p.trigger.apply(e,d)===!1){return
}r=[[e,p.bindType||h]];
if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;
for(;
m;
m=m.parentNode){r.push([m,s]),n=m
}n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])
}for(l=0;
l<r.length&&!c.isPropagationStopped();
l++){m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault()
}c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));
return c.result
}},dispatch:function(c){c=f.event.fix(c||a.event);
var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;
g[0]=c,c.delegateTarget=this;
if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;
for(m=c.target;
m!=this;
m=m.parentNode||this){if(m.disabled!==!0){p={},r=[],n[0]=m;
for(k=0;
k<e;
k++){s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s)
}r.length&&j.push({elem:m,matches:r})
}}}d.length>e&&j.push({elem:this,matches:d.slice(e)});
for(k=0;
k<j.length&&!c.isPropagationStopped();
k++){q=j[k],c.currentTarget=q.elem;
for(l=0;
l<q.matches.length&&!c.isImmediatePropagationStopped();
l++){s=q.matches[l];
if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace)){c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))
}}}i.postDispatch&&i.postDispatch.call(this,c);
return c.result
}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);
return a
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;
a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);
return a
}},fix:function(a){if(a[f.expando]){return a
}var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;
a=f.Event(g);
for(d=i.length;
d;
){e=i[--d],a[e]=g[e]
}a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);
return h.filter?h.filter(a,g):a
},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)
},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)
}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});
d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()
}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)
}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)
},f.Event=function(a,b){if(!(this instanceof f.Event)){return new f.Event(a,b)
}a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0
},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;
var a=this.originalEvent;
!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)
},stopPropagation:function(){this.isPropagationStopped=K;
var a=this.originalEvent;
!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()
},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;
if(!d||d!==c&&!f.contains(c,d)){a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b
}return h
}}
}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form")){return !1
}f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;
d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0
}),d._submit_attached=!0)
})
},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))
},teardown:function(){if(f.nodeName(this,"form")){return !1
}f.event.remove(this,"._submit")
}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)
}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))
})
}return !1
}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;
z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)
}),b._change_attached=!0)
})
},handle:function(a){var b=a.target;
if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox"){return a.handleObj.handler.apply(this,arguments)
}},teardown:function(){f.event.remove(this,"._change");
return z.test(this.nodeName)
}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)
};
f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)
},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)
}}
}),f.fn.extend({on:function(a,c,d,e,g){var h,i;
if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);
for(i in a){this.on(i,c,d,a[i],g)
}return this
}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));
if(e===!1){e=J
}else{if(!e){return this
}}g===1&&(h=e,e=function(a){f().off(a);
return h.apply(this,arguments)
},e.guid=h.guid||(h.guid=f.guid++));
return this.each(function(){f.event.add(this,a,e,d,c)
})
},one:function(a,b,c,d){return this.on(a,b,c,d,1)
},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;
f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);
return this
}if(typeof a=="object"){for(var g in a){this.off(g,c,a[g])
}return this
}if(c===!1||typeof c=="function"){d=c,c=b
}d===!1&&(d=J);
return this.each(function(){f.event.remove(this,a,d,c)
})
},bind:function(a,b,c){return this.on(a,null,b,c)
},unbind:function(a,b){return this.off(a,null,b)
},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);
return this
},die:function(a,b){f(this.context).off(a,this.selector||"**",b);
return this
},delegate:function(a,b,c,d){return this.on(b,a,c,d)
},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)
},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)
})
},triggerHandler:function(a,b){if(this[0]){return f.event.trigger(a,b,this[0],!0)
}},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;
f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();
return b[e].apply(this,arguments)||!1
};
e.guid=c;
while(d<b.length){b[d++].guid=c
}return this.click(e)
},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)
}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);
return arguments.length>0?this.on(b,null,a,c):this.trigger(b)
},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)
}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;
h<i;
h++){var j=e[h];
if(j){var k=!1;
j=j[a];
while(j){if(j[d]===c){k=e[j.sizset];
break
}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);
if(typeof b!="string"){if(j===b){k=!0;
break
}}else{if(m.filter(b,[j]).length>0){k=j;
break
}}}j=j[a]
}e[h]=k
}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;
h<i;
h++){var j=e[h];
if(j){var k=!1;
j=j[a];
while(j){if(j[d]===c){k=e[j.sizset];
break
}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);
if(j.nodeName.toLowerCase()===b){k=j;
break
}j=j[a]
}e[h]=k
}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;
[0,0].sort(function(){i=!1;
return 0
});
var m=function(b,d,e,f){e=e||[],d=d||c;
var h=d;
if(d.nodeType!==1&&d.nodeType!==9){return[]
}if(!b||typeof b!="string"){return e
}var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;
do{a.exec(""),i=a.exec(x);
if(i){x=i[3],w.push(i[1]);
if(i[2]){l=i[3];
break
}}}while(i);
if(w.length>1&&p.exec(b)){if(w.length===2&&o.relative[w[0]]){j=y(w[0]+w[1],d,f)
}else{j=o.relative[w[0]]?[d]:m(w.shift(),d);
while(w.length){b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)
}}}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);
if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;
while(w.length){q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)
}}else{k=w=[]
}}k||(k=j),k||m.error(q||b);
if(g.call(k)==="[object Array]"){if(!u){e.push.apply(e,k)
}else{if(d&&d.nodeType===1){for(t=0;
k[t]!=null;
t++){k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t])
}}else{for(t=0;
k[t]!=null;
t++){k[t]&&k[t].nodeType===1&&e.push(j[t])
}}}}else{s(k,e)
}l&&(m(l,h,e,f),m.uniqueSort(e));
return e
};
m.uniqueSort=function(a){if(u){h=i,a.sort(u);
if(h){for(var b=1;
b<a.length;
b++){a[b]===a[b-1]&&a.splice(b--,1)
}}}return a
},m.matches=function(a,b){return m(a,null,null,b)
},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0
},m.find=function(a,b,c){var d,e,f,g,h,i;
if(!a){return[]
}for(e=0,f=o.order.length;
e<f;
e++){h=o.order[e];
if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);
if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);
if(d!=null){a=a.replace(o.match[h],"");
break
}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);
return{set:d,expr:a}
},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);
while(a&&c.length){for(h in o.filter){if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);
if(l.substr(l.length-1)==="\\"){continue
}s===r&&(r=[]);
if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);
if(!f){g=i=!0
}else{if(f===!0){continue
}}}if(f){for(n=0;
(j=s[n])!=null;
n++){j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0))
}}if(i!==b){d||(s=r),a=a.replace(o.match[h],"");
if(!g){return[]
}break
}}}if(a===q){if(g==null){m.error(a)
}else{break
}}q=a
}return s
},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)
};
var n=m.getText=function(a){var b,c,d=a.nodeType,e="";
if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string"){return a.textContent
}if(typeof a.innerText=="string"){return a.innerText.replace(k,"")
}for(a=a.firstChild;
a;
a=a.nextSibling){e+=n(a)
}}else{if(d===3||d===4){return a.nodeValue
}}}else{for(b=0;
c=a[b];
b++){c.nodeType!==8&&(e+=n(c))
}}return e
},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")
},type:function(a){return a.getAttribute("type")
}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;
d&&(b=b.toLowerCase());
for(var f=0,g=a.length,h;
f<g;
f++){if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1){}a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b
}}e&&m.filter(b,a,!0)
},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;
if(d&&!l.test(b)){b=b.toLowerCase();
for(;
e<f;
e++){c=a[e];
if(c){var g=c.parentNode;
a[e]=g.nodeName.toLowerCase()===b?g:!1
}}}else{for(;
e<f;
e++){c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b)
}d&&m.filter(b,a,!0)
}},"":function(a,b,c){var d,f=e++,g=x;
typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)
},"~":function(a,b,c){var d,f=e++,g=x;
typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)
}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);
return d&&d.parentNode?[d]:[]
}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);
for(var e=0,f=d.length;
e<f;
e++){d[e].getAttribute("name")===a[1]&&c.push(d[e])
}return c.length===0?null:c
}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined"){return b.getElementsByTagName(a[1])
}}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";
if(f){return a
}for(var g=0,h;
(h=b[g])!=null;
g++){h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1))
}return !1
},ID:function(a){return a[1].replace(j,"")
},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()
},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");
var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);
a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0
}else{a[2]&&m.error(a[0])
}a[0]=e++;
return a
},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");
!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");
return a
},PSEUDO:function(b,c,d,e,f){if(b[1]==="not"){if((a.exec(b[3])||"").length>1||/^\w/.test(b[3])){b[3]=m(b[3],null,null,c)
}else{var g=m.filter(b[3],c,d,!0^f);
d||e.push.apply(e,g);
return !1
}}else{if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0])){return !0
}}return b
},POS:function(a){a.unshift(!0);
return a
}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"
},disabled:function(a){return a.disabled===!0
},checked:function(a){return a.checked===!0
},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;
return a.selected===!0
},parent:function(a){return !!a.firstChild
},empty:function(a){return !a.firstChild
},has:function(a,b,c){return !!m(c[3],a).length
},header:function(a){return/h\d/i.test(a.nodeName)
},text:function(a){var b=a.getAttribute("type"),c=a.type;
return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)
},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type
},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type
},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type
},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type
},submit:function(a){var b=a.nodeName.toLowerCase();
return(b==="input"||b==="button")&&"submit"===a.type
},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type
},reset:function(a){var b=a.nodeName.toLowerCase();
return(b==="input"||b==="button")&&"reset"===a.type
},button:function(a){var b=a.nodeName.toLowerCase();
return b==="input"&&"button"===a.type||b==="button"
},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)
},focus:function(a){return a===a.ownerDocument.activeElement
}},setFilters:{first:function(a,b){return b===0
},last:function(a,b,c,d){return b===d.length-1
},even:function(a,b){return b%2===0
},odd:function(a,b){return b%2===1
},lt:function(a,b,c){return b<c[3]-0
},gt:function(a,b,c){return b>c[3]-0
},nth:function(a,b,c){return c[3]-0===b
},eq:function(a,b,c){return c[3]-0===b
}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];
if(f){return f(a,c,b,d)
}if(e==="contains"){return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0
}if(e==="not"){var g=b[3];
for(var h=0,i=g.length;
h<i;
h++){if(g[h]===a){return !1
}}return !0
}m.error(e)
},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;
switch(k){case"only":case"first":while(l=l.previousSibling){if(l.nodeType===1){return !1
}}if(k==="first"){return !0
}l=a;
case"last":while(l=l.nextSibling){if(l.nodeType===1){return !1
}}return !0;
case"nth":c=b[2],e=b[3];
if(c===1&&e===0){return !0
}f=b[0],g=a.parentNode;
if(g&&(g[d]!==f||!a.nodeIndex)){i=0;
for(l=g.firstChild;
l;
l=l.nextSibling){l.nodeType===1&&(l.nodeIndex=++i)
}g[d]=f
}j=a.nodeIndex-e;
return c===0?j===0:j%c===0&&j/c>=0
}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b
},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b
},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1
},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];
return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1
},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];
if(f){return f(a,c,b,d)
}}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)
};
for(var r in o.match){o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q))
}o.match.globalPOS=p;
var s=function(a,b){a=Array.prototype.slice.call(a,0);
if(b){b.push.apply(b,a);
return b
}return a
};
try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType
}catch(t){s=function(a,b){var c=0,d=b||[];
if(g.call(a)==="[object Array]"){Array.prototype.push.apply(d,a)
}else{if(typeof a.length=="number"){for(var e=a.length;
c<e;
c++){d.push(a[c])
}}else{for(;
a[c];
c++){d.push(a[c])
}}}return d
}
}var u,v;
c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;
return 0
}if(!a.compareDocumentPosition||!b.compareDocumentPosition){return a.compareDocumentPosition?-1:1
}return a.compareDocumentPosition(b)&4?-1:1
}:(u=function(a,b){if(a===b){h=!0;
return 0
}if(a.sourceIndex&&b.sourceIndex){return a.sourceIndex-b.sourceIndex
}var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;
if(g===i){return v(a,b)
}if(!g){return -1
}if(!i){return 1
}while(j){e.unshift(j),j=j.parentNode
}j=i;
while(j){f.unshift(j),j=j.parentNode
}c=e.length,d=f.length;
for(var k=0;
k<c&&k<d;
k++){if(e[k]!==f[k]){return v(e[k],f[k])
}}return k===c?v(a,f[k],-1):v(e[k],b,1)
},v=function(a,b,c){if(a===b){return c
}var d=a.nextSibling;
while(d){if(d===b){return -1
}d=d.nextSibling
}return 1
}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;
a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);
return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]
}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");
return a.nodeType===1&&c&&c.nodeValue===b
}),e.removeChild(a),e=a=null
}(),function(){var a=c.createElement("div");
a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);
if(a[1]==="*"){var d=[];
for(var e=0;
c[e];
e++){c[e].nodeType===1&&d.push(c[e])
}c=d
}return c
}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)
}),a=null
}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";
b.innerHTML="<p class='TEST'></p>";
if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;
if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1]){return s(e.getElementsByTagName(b),f)
}if(h[2]&&o.find.CLASS&&e.getElementsByClassName){return s(e.getElementsByClassName(h[2]),f)
}}if(e.nodeType===9){if(b==="body"&&e.body){return s([e.body],f)
}if(h&&h[3]){var i=e.getElementById(h[3]);
if(!i||!i.parentNode){return s([],f)
}if(i.id===h[3]){return s([i],f)
}}try{return s(e.querySelectorAll(b),f)
}catch(j){}}else{if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);
l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);
try{if(!q||p){return s(e.querySelectorAll("[id='"+n+"'] "+b),f)
}}catch(r){}finally{l||k.removeAttribute("id")
}}}}return a(b,e,f,g)
};
for(var e in a){m[e]=a[e]
}b=null
}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;
if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;
try{b.call(c.documentElement,"[test!='']:sizzle")
}catch(f){e=!0
}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");
if(!m.isXML(a)){try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);
if(f||!d||a.document&&a.document.nodeType!==11){return f
}}}catch(g){}}return m(c,null,null,[a]).length>0
}
}}(),function(){var a=c.createElement("div");
a.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";
if(a.getElementsByClassName("e").length===1){return
}o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c){return b.getElementsByClassName(a[1])
}},a=null
}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)
}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return !!(a.compareDocumentPosition(b)&16)
}:m.contains=function(){return !1
},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;
return b?b.nodeName!=="HTML":!1
};
var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;
while(d=o.match.PSEUDO.exec(a)){f+=d[0],a=a.replace(o.match.PSEUDO,"")
}a=o.relative[a]?a+"*":a;
for(var h=0,i=g.length;
h<i;
h++){m(a,g[h],e,c)
}return m.filter(f,e)
};
m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains
}();
var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};
f.fn.extend({find:function(a){var b=this,c,d;
if(typeof a!="string"){return f(a).filter(function(){for(c=0,d=b.length;
c<d;
c++){if(f.contains(b[c],this)){return !0
}}})
}var e=this.pushStack("","find",a),g,h,i;
for(c=0,d=this.length;
c<d;
c++){g=e.length,f.find(a,this[c],e);
if(c>0){for(h=g;
h<e.length;
h++){for(i=0;
i<g;
i++){if(e[i]===e[h]){e.splice(h--,1);
break
}}}}}return e
},has:function(a){var b=f(a);
return this.filter(function(){for(var a=0,c=b.length;
a<c;
a++){if(f.contains(this,b[a])){return !0
}}})
},not:function(a){return this.pushStack(T(this,a,!1),"not",a)
},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)
},is:function(a){return !!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)
},closest:function(a,b){var c=[],d,e,g=this[0];
if(f.isArray(a)){var h=1;
while(g&&g.ownerDocument&&g!==b){for(d=0;
d<a.length;
d++){f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h})
}g=g.parentNode,h++
}return c
}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;
for(d=0,e=this.length;
d<e;
d++){g=this[d];
while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);
break
}g=g.parentNode;
if(!g||!g.ownerDocument||g===b||g.nodeType===11){break
}}}c=c.length>1?f.unique(c):c;
return this.pushStack(c,"closest",a)
},index:function(a){if(!a){return this[0]&&this[0].parentNode?this.prevAll().length:-1
}if(typeof a=="string"){return f.inArray(this[0],f(a))
}return f.inArray(a.jquery?a[0]:a,this)
},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);
return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))
},andSelf:function(){return this.add(this.prevObject)
}}),f.each({parent:function(a){var b=a.parentNode;
return b&&b.nodeType!==11?b:null
},parents:function(a){return f.dir(a,"parentNode")
},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)
},next:function(a){return f.nth(a,2,"nextSibling")
},prev:function(a){return f.nth(a,2,"previousSibling")
},nextAll:function(a){return f.dir(a,"nextSibling")
},prevAll:function(a){return f.dir(a,"previousSibling")
},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)
},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)
},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)
},children:function(a){return f.sibling(a.firstChild)
},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)
}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);
L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());
return this.pushStack(e,a,P.call(arguments).join(","))
}
}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");
return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)
},dir:function(a,c,d){var e=[],g=a[c];
while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d))){g.nodeType===1&&e.push(g),g=g[c]
}return e
},nth:function(a,b,c,d){b=b||1;
var e=0;
for(;
a;
a=a[c]){if(a.nodeType===1&&++e===b){break
}}return a
},sibling:function(a,b){var c=[];
for(;
a;
a=a.nextSibling){a.nodeType===1&&a!==b&&c.push(a)
}return c
}});
var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);
bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))
},null,a,arguments.length)
},wrapAll:function(a){if(f.isFunction(a)){return this.each(function(b){f(this).wrapAll(a.call(this,b))
})
}if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);
this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;
while(a.firstChild&&a.firstChild.nodeType===1){a=a.firstChild
}return a
}).append(this)
}return this
},wrapInner:function(a){if(f.isFunction(a)){return this.each(function(b){f(this).wrapInner(a.call(this,b))
})
}return this.each(function(){var b=f(this),c=b.contents();
c.length?c.wrapAll(a):b.append(a)
})
},wrap:function(a){var b=f.isFunction(a);
return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)
})
},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)
}).end()
},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)
})
},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)
})
},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)
})
}if(arguments.length){var a=f.clean(arguments);
a.push.apply(a,this.toArray());
return this.pushStack(a,"before",arguments)
}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)
})
}if(arguments.length){var a=this.pushStack(this,"after",arguments);
a.push.apply(a,f.clean(arguments));
return a
}},remove:function(a,b){for(var c=0,d;
(d=this[c])!=null;
c++){if(!a||f.filter(a,[d]).length){!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d)
}}return this
},empty:function(){for(var a=0,b;
(b=this[a])!=null;
a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));
while(b.firstChild){b.removeChild(b.firstChild)
}}return this
},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;
return this.map(function(){return f.clone(this,a,b)
})
},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;
if(a===b){return c.nodeType===1?c.innerHTML.replace(W,""):null
}if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");
try{for(;
d<e;
d++){c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a)
}c=0
}catch(g){}}c&&this.empty().append(a)
},null,a,arguments.length)
},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a)){return this.each(function(b){var c=f(this),d=c.html();
c.replaceWith(a.call(this,b,d))
})
}typeof a!="string"&&(a=f(a).detach());
return this.each(function(){var b=this.nextSibling,c=this.parentNode;
f(this).remove(),b?f(b).before(a):f(c).append(a)
})
}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this
},detach:function(a){return this.remove(a,!0)
},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];
if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j)){return this.each(function(){f(this).domManip(a,c,d,!0)
})
}if(f.isFunction(j)){return this.each(function(e){var g=f(this);
a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)
})
}if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;
if(g){c=c&&f.nodeName(g,"tr");
for(var l=0,m=this.length,n=m-1;
l<m;
l++){d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)
}}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)
})
}return this
}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];
b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);
return{fragment:e,cacheable:g}
},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;
if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);
return this
}for(var h=0,i=e.length;
h<i;
h++){var j=(h>0?this.clone(!0):this).get();
f(e[h])[b](j),d=d.concat(j)
}return this.pushStack(d,a,e.selector)
}
}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);
if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);
for(g=0;
d[g];
++g){e[g]&&bk(d[g],e[g])
}}if(b){bj(a,h);
if(c){d=bl(a),e=bl(h);
for(g=0;
d[g];
++g){bj(d[g],e[g])
}}}d=e=null;
return h
},clean:function(a,b,d,e){var g,h,i,j=[];
b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);
for(var k=0,l;
(l=a[k])!=null;
k++){typeof l=="number"&&(l+="");
if(!l){continue
}if(typeof l=="string"){if(!_.test(l)){l=b.createTextNode(l)
}else{l=l.replace(Y,"<$1></$2>");
var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;
b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];
while(o--){p=p.lastChild
}if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];
for(i=t.length-1;
i>=0;
--i){f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])
}}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))
}}var u;
if(!f.support.appendChecked){if(l[0]&&typeof(u=l.length)=="number"){for(i=0;
i<u;
i++){bn(l[i])
}}else{bn(l)
}}l.nodeType?j.push(l):j=f.merge(j,l)
}if(d){g=function(a){return !a.type||be.test(a.type)
};
for(k=0;
j[k];
k++){h=j[k];
if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type))){e.push(h.parentNode?h.parentNode.removeChild(h):h)
}else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);
j.splice.apply(j,[k+1,0].concat(v))
}d.appendChild(h)
}}}return j
},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;
for(var h=0,i;
(i=a[h])!=null;
h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()]){continue
}c=i[f.expando];
if(c){b=d[c];
if(b&&b.events){for(var j in b.events){e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle)
}b.handle&&(b.handle.elem=null)
}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]
}}}});
var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;
f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)
},a,c,arguments.length>1)
},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");
return c===""?"1":c
}return a.style.opacity
}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];
c=f.cssProps[i]||i;
if(d===b){if(k&&"get" in k&&(g=k.get(a,!1,e))!==b){return g
}return j[c]
}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");
if(d==null||h==="number"&&isNaN(d)){return
}h==="number"&&!f.cssNumber[i]&&(d+="px");
if(!k||!("set" in k)||(d=k.set(a,d))!==b){try{j[c]=d
}catch(l){}}}},css:function(a,c,d){var e,g;
c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");
if(g&&"get" in g&&(e=g.get(a,!0,d))!==b){return e
}if(by){return by(a,c)
}},swap:function(a,b,c){var d={},e,f;
for(f in b){d[f]=a.style[f],a.style[f]=b[f]
}e=c.call(a);
for(f in b){a.style[f]=d[f]
}return e
}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;
b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);
return c
}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;
f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));
return f===""?"auto":f
}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c){return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)
})
}},set:function(a,b){return bs.test(b)?b+"px":b
}}
}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""
},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";
c.zoom=1;
if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");
if(d&&!d.filter){return
}}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e
}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight
})
}})
}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;
return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"
},f.expr.filters.visible=function(a){return !f.expr.filters.hidden(a)
}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};
for(d=0;
d<4;
d++){f[a+bx[d]+b]=e[d]||e[d-2]||e[0]
}return f
}}
});
var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];
try{bU=e.href
}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href
}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR){return bR.apply(this,arguments)
}if(!this.length){return this
}var e=a.indexOf(" ");
if(e>=0){var g=a.slice(e,a.length);
a=a.slice(0,e)
}var h="GET";
c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));
var i=this;
f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a
}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])
}});
return this
},serialize:function(){return f.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this
}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))
}).map(function(a,b){var c=f(this).val();
return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}
}):{name:b.name,value:c.replace(bE,"\r\n")}
}).get()
}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)
}
}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);
return f.ajax({type:c,url:a,data:d,success:e,dataType:g})
}
}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")
},getJSON:function(a,b,c){return f.get(a,b,c,"json")
},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);
return a
},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;
var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;
if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified")){f.lastModified[k]=y
}if(z=v.getResponseHeader("Etag")){f.etag[k]=z
}}if(a===304){w="notmodified",o=!0
}else{try{r=cb(d,x),w="success",o=!0
}catch(A){w="parsererror",u=A
}}}else{u=w;
if(!w||a){w="error",a<0&&(a=0)
}}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))
}}typeof a=="object"&&(c=a,a=b),c=c||{};
var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();
a=m[c]=m[c]||a,l[a]=b
}return this
},getAllResponseHeaders:function(){return s===2?n:null
},getResponseHeader:function(a){var c;
if(s===2){if(!o){o={};
while(c=bG.exec(n)){o[c[1].toLowerCase()]=c[2]
}}c=o[a.toLowerCase()]
}return c===b?null:c
},overrideMimeType:function(a){s||(d.mimeType=a);
return this
},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);
return this
}};
h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;
if(s<2){for(b in a){j[b]=[j[b],a[b]]
}}else{b=a[v.status],v.then(b,b)
}}return this
},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);
if(s===2){return !1
}t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");
if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;
if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);
d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")
}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);
for(u in d.headers){v.setRequestHeader(u,d.headers[u])
}if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();
return !1
}for(u in {success:1,error:1,complete:1}){v[u](d[u])
}p=bZ(bT,d,c,v);
if(!p){w(-1,"No Transport")
}else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")
},d.timeout));
try{s=1,p.send(l,w)
}catch(z){if(s<2){w(-1,z)
}else{throw z
}}}return v
},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)
};
c===b&&(c=f.ajaxSettings.traditional);
if(f.isArray(a)||a.jquery&&!f.isPlainObject(a)){f.each(a,function(){e(this.name,this.value)
})
}else{for(var g in a){b_(g,a[g],c,e)
}}return d.join("&").replace(bC,"+")
}}),f.extend({active:0,lastModified:{},etag:{}});
var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;
f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++
}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);
if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";
b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]
},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])
}),b.converters["script json"]=function(){g||f.error(h+" was not called");
return g[0]
},b.dataTypes[0]="json";
return"script"
}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);
return a
}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)
}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;
return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState)){d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")
}},e.insertBefore(d,e.firstChild)
},abort:function(){d&&d.onload(0,1)
}}
}});
var ce=a.ActiveXObject?function(){for(var a in cg){cg[a](0,1)
}}:!1,cf=0,cg;
f.ajaxSettings.xhr=a.ActiveXObject?function(){return !this.isLocal&&ch()||ci()
}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials" in a})
}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;
return{send:function(e,g){var h=c.xhr(),i,j;
c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);
if(c.xhrFields){for(j in c.xhrFields){h[j]=c.xhrFields[j]
}}c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");
try{for(j in e){h.setRequestHeader(j,e[j])
}}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;
try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);
if(e){h.readyState!==4&&h.abort()
}else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);
try{m.text=h.responseText
}catch(a){}try{k=h.statusText
}catch(o){k=""
}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)
}}}catch(p){e||g(-1,p)
}m&&g(j,k,m,l)
},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)
},abort:function(){d&&d(0,1)
}}
}});
var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;
f.fn.extend({show:function(a,b,c){var d,e;
if(a||a===0){return this.animate(ct("show",3),a,b,c)
}for(var g=0,h=this.length;
g<h;
g++){d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)))
}for(g=0;
g<h;
g++){d=this[g];
if(d.style){e=d.style.display;
if(e===""||e==="none"){d.style.display=f._data(d,"olddisplay")||""
}}}return this
},hide:function(a,b,c){if(a||a===0){return this.animate(ct("hide",3),a,b,c)
}var d,e,g=0,h=this.length;
for(;
g<h;
g++){d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e))
}for(g=0;
g<h;
g++){this[g].style&&(this[g].style.display="none")
}return this
},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";
f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");
f(this)[b?"show":"hide"]()
}):this.animate(ct("toggle",3),a,b,c);
return this
},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)
},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);
var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;
b.animatedProperties={};
for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);
if((k=f.cssHooks[g])&&"expand" in k){l=k.expand(a[g]),delete a[g];
for(i in l){i in a||(a[i]=l[i])
}}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";
if(h==="hide"&&d||h==="show"&&!d){return b.complete.call(this)
}c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))
}b.overflow!=null&&(this.style.overflow="hidden");
for(i in a){j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""))
}return !0
}var e=f.speed(b,c,d);
if(f.isEmptyObject(a)){return this.each(e.complete,[!1])
}a=f.extend({},a);
return e.queue===!1?this.each(g):this.queue(e.queue,g)
},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);
return this.each(function(){function h(a,b,c){var e=b[c];
f.removeData(a,c,!0),e.stop(d)
}var b,c=!1,e=f.timers,g=f._data(this);
d||f._unmark(!0,this);
if(a==null){for(b in g){g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b)
}}else{g[b=a+".run"]&&g[b].stop&&h(this,g,b)
}for(b=e.length;
b--;
){e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1))
}(!d||!c)&&f.dequeue(this,a)
})
}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)
}
}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};
d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;
if(d.queue==null||d.queue===!0){d.queue="fx"
}d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)
};
return d
},easing:{linear:function(a){return a
},swing:function(a){return -Math.cos(a*Math.PI)/2+0.5
}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}
}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)
},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]
}var a,b=f.css(this.elem,this.prop);
return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a
},custom:function(a,c,d){function h(a){return e.step(a)
}var e=this,g=f.fx;
this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))
},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))
},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);
this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()
},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)
},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;
if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;
for(b in i.animatedProperties){i.animatedProperties[b]!==!0&&(g=!1)
}if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]
}),i.hide&&f(h).hide();
if(i.hide||i.show){for(b in i.animatedProperties){f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0)
}}d=i.complete,d&&(i.complete=!1,d.call(h))
}return !1
}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();
return !0
}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;
for(;
c<b.length;
c++){a=b[c],!a()&&b[c]===a&&b.splice(c--,1)
}b.length||f.fx.stop()
},interval:13,stop:function(){clearInterval(co),co=null
},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)
},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now
}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)
})
}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem
}).length
});
var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;
"getBoundingClientRect" in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()
}catch(e){}if(!d||!f.contains(c,a)){return d?{top:d.top,left:d.left}:{top:0,left:0}
}var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;
return{top:m,left:n}
}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;
while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed"){break
}d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d
}if(j.position==="relative"||j.position==="static"){k+=h.offsetTop,l+=h.offsetLeft
}f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));
return{top:k,left:l}
},f.fn.offset=function(a){if(arguments.length){return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)
})
}var c=this[0],d=c&&c.ownerDocument;
if(!d){return null
}if(c===d.body){return f.offset.bodyOffset(c)
}return cv(c,d,d.documentElement)
},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;
f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);
return{top:b,left:c}
},setOffset:function(a,b,c){var d=f.css(a,"position");
d==="static"&&(a.style.position="relative");
var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;
j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using" in b?b.using.call(a,k):e.css(k)
}},f.fn.extend({position:function(){if(!this[0]){return null
}var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();
c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;
return{top:c.top-d.top,left:c.left-d.left}
},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;
while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static"){a=a.offsetParent
}return a
})
}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);
f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);
if(g===b){return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e]
}h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g
},a,e,arguments.length,null)
}
}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;
f.fn["inner"+a]=function(){var a=this[0];
return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null
},f.fn["outer"+a]=function(a){var b=this[0];
return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null
},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;
if(f.isWindow(a)){i=a.document,j=i.documentElement[d];
return f.support.boxModel&&j||i.body&&i.body[d]||j
}if(a.nodeType===9){i=a.documentElement;
if(i[d]>=i[e]){return i[d]
}return Math.max(a.body[e],i[e],a.body[g],i[g])
}if(h===b){k=f.css(a,c),l=parseFloat(k);
return f.isNumeric(l)?l:k
}f(a).css(c,h)
},c,a,arguments.length,null)
}
}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f
})
})(window);
var JSON;
JSON||(JSON={});
(function(){function k(a){return a<10?"0"+a:a
}function o(a){p.lastIndex=0;
return p.test(a)?'"'+a.replace(p,function(a){var c=r[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})+'"':'"'+a+'"'
}function l(a,j){var c,d,h,m,g=e,f,b=j[a];
b&&typeof b==="object"&&typeof b.toJSON==="function"&&(b=b.toJSON(a));
typeof i==="function"&&(b=i.call(j,a,b));
switch(typeof b){case"string":return o(b);
case"number":return isFinite(b)?String(b):"null";
case"boolean":case"null":return String(b);
case"object":if(!b){return"null"
}e+=n;
f=[];
if(Object.prototype.toString.apply(b)==="[object Array]"){m=b.length;
for(c=0;
c<m;
c+=1){f[c]=l(c,b)||"null"
}h=f.length===0?"[]":e?"[\n"+e+f.join(",\n"+e)+"\n"+g+"]":"["+f.join(",")+"]";
e=g;
return h
}if(i&&typeof i==="object"){m=i.length;
for(c=0;
c<m;
c+=1){typeof i[c]==="string"&&(d=i[c],(h=l(d,b))&&f.push(o(d)+(e?": ":":")+h))
}}else{for(d in b){Object.prototype.hasOwnProperty.call(b,d)&&(h=l(d,b))&&f.push(o(d)+(e?": ":":")+h)
}}h=f.length===0?"{}":e?"{\n"+e+f.join(",\n"+e)+"\n"+g+"}":"{"+f.join(",")+"}";
e=g;
return h
}}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+k(this.getUTCMonth()+1)+"-"+k(this.getUTCDate())+"T"+k(this.getUTCHours())+":"+k(this.getUTCMinutes())+":"+k(this.getUTCSeconds())+"Z":null
},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()
}
}var q=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,p=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e,n,r={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},i;
if(typeof JSON.stringify!=="function"){JSON.stringify=function(a,j,c){var d;
n=e="";
if(typeof c==="number"){for(d=0;
d<c;
d+=1){n+=" "
}}else{typeof c==="string"&&(n=c)
}if((i=j)&&typeof j!=="function"&&(typeof j!=="object"||typeof j.length!=="number")){throw Error("JSON.stringify")
}return l("",{"":a})
}
}if(typeof JSON.parse!=="function"){JSON.parse=function(a,e){function c(a,d){var g,f,b=a[d];
if(b&&typeof b==="object"){for(g in b){Object.prototype.hasOwnProperty.call(b,g)&&(f=c(b,g),f!==void 0?b[g]=f:delete b[g])
}}return e.call(a,d,b)
}var d,a=String(a);
q.lastIndex=0;
q.test(a)&&(a=a.replace(q,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
}));
if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return d=eval("("+a+")"),typeof e==="function"?c({"":d},""):d
}throw new SyntaxError("JSON.parse")
}
}})();
(function($){var b,d,j=1,a,f=this,g=!1,h="postMessage",c="addEventListener",e,i=f[h]&&!$.browser.opera;
$[h]=function(k,m,l){if(!m){return
}k=typeof k==="string"?k:$.param(k);
l=l||parent;
if(i){l[h](k,m.replace(/([^:]+:\/\/[^\/]+).*/,"$1"))
}else{if(m){l.location=m.replace(/#.*$/,"")+"#"+(+new Date)+(j++)+"&"+k
}}};
$.receiveMessage=e=function(m,l,k){if(i){if(m){a&&e();
a=function(n){if((typeof l==="string"&&n.origin!==l)||($.isFunction(l)&&l(n.origin)===g)){return g
}m(n)
}
}if(f[c]){f[m?c:"removeEventListener"]("message",a,g)
}else{f[m?"attachEvent":"detachEvent"]("onmessage",a)
}}else{b&&clearInterval(b);
b=null;
if(m){k=typeof l==="number"?l:typeof k==="number"?k:100;
b=setInterval(function(){var o=document.location.hash,n=/^#?\d+&/;
if(o!==d&&n.test(o)){d=o;
m({data:o.replace(n,"")})
}},k)
}}}
})(jQuery);
(function($,p){var i,m=Array.prototype.slice,r=decodeURIComponent,a=$.param,c,l,v,b=$.bbq=$.bbq||{},q,u,j,e=$.event.special,d="hashchange",A="querystring",D="fragment",y="elemUrlAttr",g="location",k="href",t="src",x=/^.*\?|#.*$/g,w=/^.*\#/,h,C={};
function E(F){return typeof F==="string"
}function B(G){var F=m.call(arguments,1);
return function(){return G.apply(this,F.concat(m.call(arguments)))
}
}function n(F){return F.replace(/^[^#]*#?(.*)$/,"$1")
}function o(F){return F.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")
}function f(H,M,F,I,G){var O,L,K,N,J;
if(I!==i){K=F.match(H?/^([^#]*)\#?(.*)$/:/^([^#?]*)\??([^#]*)(#?.*)/);
J=K[3]||"";
if(G===2&&E(I)){L=I.replace(H?w:x,"")
}else{N=l(K[2]);
I=E(I)?l[H?D:A](I):I;
L=G===2?I:G===1?$.extend({},I,N):$.extend({},N,I);
L=a(L);
if(H){L=L.replace(h,r)
}}O=K[1]+(H?"#":L||!K[1]?"?":"")+L+J
}else{O=M(F!==i?F:p[g][k])
}return O
}a[A]=B(f,0,o);
a[D]=c=B(f,1,n);
c.noEscape=function(G){G=G||"";
var F=$.map(G.split(""),encodeURIComponent);
h=new RegExp(F.join("|"),"g")
};
c.noEscape(",/");
$.deparam=l=function(I,F){var H={},G={"true":!0,"false":!1,"null":null};
$.each(I.replace(/\+/g," ").split("&"),function(L,Q){var K=Q.split("="),P=r(K[0]),J,O=H,M=0,R=P.split("]["),N=R.length-1;
if(/\[/.test(R[0])&&/\]$/.test(R[N])){R[N]=R[N].replace(/\]$/,"");
R=R.shift().split("[").concat(R);
N=R.length-1
}else{N=0
}if(K.length===2){J=r(K[1]);
if(F){J=J&&!isNaN(J)?+J:J==="undefined"?i:G[J]!==i?G[J]:J
}if(N){for(;
M<=N;
M++){P=R[M]===""?O.length:R[M];
O=O[P]=M<N?O[P]||(R[M+1]&&isNaN(R[M+1])?{}:[]):J
}}else{if($.isArray(H[P])){H[P].push(J)
}else{if(H[P]!==i){H[P]=[H[P],J]
}else{H[P]=J
}}}}else{if(P){H[P]=F?i:""
}}});
return H
};
function z(H,F,G){if(F===i||typeof F==="boolean"){G=F;
F=a[H?D:A]()
}else{F=E(F)?F.replace(H?w:x,""):F
}return l(F,G)
}l[A]=B(z,0);
l[D]=v=B(z,1);
$[y]||($[y]=function(F){return $.extend(C,F)
})({a:k,base:k,iframe:t,img:t,input:t,form:"action",link:k,script:t});
j=$[y];
function s(I,G,H,F){if(!E(H)&&typeof H!=="object"){F=H;
H=G;
G=i
}return this.each(function(){var L=$(this),J=G||j()[(this.nodeName||"").toLowerCase()]||"",K=J&&L.attr(J)||"";
L.attr(J,a[I](K,H,F))
})
}$.fn[A]=B(s,A);
$.fn[D]=B(s,D);
b.pushState=q=function(I,F){if(E(I)&&/^#/.test(I)&&F===i){F=2
}var H=I!==i,G=c(p[g][k],H?I:{},H?F:2);
p[g][k]=G+(/#/.test(G)?"":"#")
};
b.getState=u=function(F,G){return F===i||typeof F==="boolean"?v(F):v(G)[F]
};
b.removeState=function(F){var G={};
if(F!==i){G=u();
$.each($.isArray(F)?F:arguments,function(I,H){delete G[H]
})
}q(G,2)
};
e[d]=$.extend(e[d],{add:function(F){var H;
function G(J){var I=J[D]=c();
J.getState=function(K,L){return K===i||typeof K==="boolean"?l(I,K):l(I,L)[K]
};
H.apply(this,arguments)
}if($.isFunction(F)){H=F;
return G
}else{H=F.handler;
F.handler=G
}}})
})(jQuery,this);
(function($,i,b){var j,k=$.event.special,c="location",d="hashchange",l="href",f=$.browser,g=document.documentMode,h=f.msie&&(g===b||g<8),e="on"+d in i&&!h;
function a(m){m=m||i[c][l];
return m.replace(/^[^#]*#?(.*)$/,"$1")
}$[d+"Delay"]=100;
k[d]=$.extend(k[d],{setup:function(){if(e){return false
}$(j.start)
},teardown:function(){if(e){return false
}$(j.stop)
}});
j=(function(){var m={},r,n,o,q;
function p(){o=q=function(s){return s
};
if(h){n=$('<iframe src="javascript:0"/>').hide().insertAfter("body")[0].contentWindow;
q=function(){return a(n.document[c][l])
};
o=function(u,s){if(u!==s){var t=n.document;
t.open().close();
t[c].hash="#"+u
}};
o(a())
}}m.start=function(){if(r){return
}var t=a();
o||p();
(function s(){var v=a(),u=q(t);
if(v!==t){o(t=v,u);
$(i).trigger(d)
}else{if(u!==t){i[c][l]=i[c][l].replace(/#.*/,"")+"#"+u
}}r=setTimeout(s,$[d+"Delay"])
})()
};
m.stop=function(){if(!n){r&&clearTimeout(r);
r=0
}};
return m
})()
})(jQuery,this);
(function(){var g=Date,e=Date.CultureStrings?Date.CultureStrings.lang:null,b={},d={getFromKey:function(a,h){var k;
k=Date.CultureStrings&&Date.CultureStrings[h]&&Date.CultureStrings[h][a]?Date.CultureStrings[h][a]:d.buildFromDefault(a);
"/"===a.charAt(0)&&(k=d.buildFromRegex(a,h));
return k
},getFromObjectValues:function(a,h){var k,c={};
for(k in a){a.hasOwnProperty(k)&&(c[k]=d.getFromKey(a[k],h))
}return c
},getFromObjectKeys:function(a,h){var c,f={};
for(c in a){a.hasOwnProperty(c)&&(f[d.getFromKey(c,h)]=a[c])
}return f
},getFromArray:function(a,h){for(var c=[],f=0;
f<a.length;
f++){f in a&&(c[f]=d.getFromKey(a[f],h))
}return c
},buildFromDefault:function(a){var h,c,f;
switch(a){case"name":h="en-US";
break;
case"englishName":h="English (United States)";
break;
case"nativeName":h="English (United States)";
break;
case"twoDigitYearMax":h=2049;
break;
case"firstDayOfWeek":h=0;
break;
default:if(h=a,f=a.split("_"),c=f.length,1<c&&"/"!==a.charAt(0)&&(a=f[c-1].toLowerCase(),"initial"===a||"abbr"===a)){h=f[0]
}}return h
},buildFromRegex:function(a,h){return Date.CultureStrings&&Date.CultureStrings[h]&&Date.CultureStrings[h][a]?RegExp(Date.CultureStrings[h][a],"i"):RegExp(a.replace(RegExp("/","g"),""),"i")
}},a=function(a,h){var c=h?h:e;
b[a]=a;
return"object"===typeof a?a instanceof Array?d.getFromArray(a,c):d.getFromObjectKeys(a,c):d.getFromKey(a,c)
},c=function(a){a=Date.Config.i18n+a+".js";
var h=document.getElementsByTagName("head")[0]||document.documentElement,c=document.createElement("script");
c.src=a;
var f={done:function(){}};
c.onload=c.onreadystatechange=function(){this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(f.done(),h.removeChild(c))
};
setTimeout(function(){h.insertBefore(c,h.firstChild)
},0);
return{done:function(h){f.done=function(){h&&setTimeout(h,0)
}
}}
},f={buildFromMethodHash:function(a){for(var h in a){a.hasOwnProperty(h)&&(a[h]=f[a[h]]())
}return a
},timeZoneDST:function(){return a({CHADT:"+1345",NZDT:"+1300",AEDT:"+1100",ACDT:"+1030",AZST:"+0500",IRDT:"+0430",EEST:"+0300",CEST:"+0200",BST:"+0100",PMDT:"-0200",ADT:"-0300",NDT:"-0230",EDT:"-0400",CDT:"-0500",MDT:"-0600",PDT:"-0700",AKDT:"-0800",HADT:"-0900"})
},timeZoneStandard:function(){return a({LINT:"+1400",TOT:"+1300",CHAST:"+1245",NZST:"+1200",NFT:"+1130",SBT:"+1100",AEST:"+1000",ACST:"+0930",JST:"+0900",CWST:"+0845",CT:"+0800",ICT:"+0700",MMT:"+0630",BST:"+0600",NPT:"+0545",IST:"+0530",PKT:"+0500",AFT:"+0430",MSK:"+0400",IRST:"+0330",FET:"+0300",EET:"+0200",CET:"+0100",GMT:"+0000",UTC:"+0000",CVT:"-0100",GST:"-0200",BRT:"-0300",NST:"-0330",AST:"-0400",EST:"-0500",CST:"-0600",MST:"-0700",PST:"-0800",AKST:"-0900",MIT:"-0930",HST:"-1000",SST:"-1100",BIT:"-1200"})
},timeZones:function(a){var h;
a.timezones=[];
for(h in a.abbreviatedTimeZoneStandard){a.abbreviatedTimeZoneStandard.hasOwnProperty(h)&&a.timezones.push({name:h,offset:a.abbreviatedTimeZoneStandard[h]})
}for(h in a.abbreviatedTimeZoneDST){a.abbreviatedTimeZoneDST.hasOwnProperty(h)&&a.timezones.push({name:h,offset:a.abbreviatedTimeZoneDST[h],dst:!0})
}return a.timezones
},days:function(){return a("Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "))
},dayAbbr:function(){return a("Sun Mon Tue Wed Thu Fri Sat".split(" "))
},dayShortNames:function(){return a("Su Mo Tu We Th Fr Sa".split(" "))
},dayFirstLetters:function(){return a("S_Sun_Initial M_Mon_Initial T_Tues_Initial W_Wed_Initial T_Thu_Initial F_Fri_Initial S_Sat_Initial".split(" "))
},months:function(){return a("January February March April May June July August September October November December".split(" "))
},monthAbbr:function(){return a("Jan_Abbr Feb_Abbr Mar_Abbr Apr_Abbr May_Abbr Jun_Abbr Jul_Abbr Aug_Abbr Sep_Abbr Oct_Abbr Nov_Abbr Dec_Abbr".split(" "))
},formatPatterns:function(){return d.getFromObjectValues({shortDate:"M/d/yyyy",longDate:"dddd, MMMM dd, yyyy",shortTime:"h:mm tt",longTime:"h:mm:ss tt",fullDateTime:"dddd, MMMM dd, yyyy h:mm:ss tt",sortableDateTime:"yyyy-MM-ddTHH:mm:ss",universalSortableDateTime:"yyyy-MM-dd HH:mm:ssZ",rfc1123:"ddd, dd MMM yyyy HH:mm:ss",monthDay:"MMMM dd",yearMonth:"MMMM, yyyy"},Date.i18n.currentLanguage())
},regex:function(){return d.getFromObjectValues({inTheMorning:"/( in the )(morn(ing)?)\\b/",thisMorning:"/(this )(morn(ing)?)\\b/",amThisMorning:"/(\b\\d(am)? )(this )(morn(ing)?)/",inTheEvening:"/( in the )(even(ing)?)\\b/",thisEvening:"/(this )(even(ing)?)\\b/",pmThisEvening:"/(\b\\d(pm)? )(this )(even(ing)?)/",jan:"/jan(uary)?/",feb:"/feb(ruary)?/",mar:"/mar(ch)?/",apr:"/apr(il)?/",may:"/may/",jun:"/jun(e)?/",jul:"/jul(y)?/",aug:"/aug(ust)?/",sep:"/sep(t(ember)?)?/",oct:"/oct(ober)?/",nov:"/nov(ember)?/",dec:"/dec(ember)?/",sun:"/^su(n(day)?)?/",mon:"/^mo(n(day)?)?/",tue:"/^tu(e(s(day)?)?)?/",wed:"/^we(d(nesday)?)?/",thu:"/^th(u(r(s(day)?)?)?)?/",fri:"/fr(i(day)?)?/",sat:"/^sa(t(urday)?)?/",future:"/^next/",past:"/^last|past|prev(ious)?/",add:"/^(\\+|aft(er)?|from|hence)/",subtract:"/^(\\-|bef(ore)?|ago)/",yesterday:"/^yes(terday)?/",today:"/^t(od(ay)?)?/",tomorrow:"/^tom(orrow)?/",now:"/^n(ow)?/",millisecond:"/^ms|milli(second)?s?/",second:"/^sec(ond)?s?/",minute:"/^mn|min(ute)?s?/",hour:"/^h(our)?s?/",week:"/^w(eek)?s?/",month:"/^m(onth)?s?/",day:"/^d(ay)?s?/",year:"/^y(ear)?s?/",shortMeridian:"/^(a|p)/",longMeridian:"/^(a\\.?m?\\.?|p\\.?m?\\.?)/",timezone:"/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\\s*(\\+|\\-)\\s*\\d\\d\\d\\d?)|gmt|utc)/",ordinalSuffix:"/^\\s*(st|nd|rd|th)/",timeContext:"/^\\s*(\\:|a(?!u|p)|p)/"},Date.i18n.currentLanguage())
}},l=function(){var a=d.getFromObjectValues({name:"name",englishName:"englishName",nativeName:"nativeName",amDesignator:"AM",pmDesignator:"PM",firstDayOfWeek:"firstDayOfWeek",twoDigitYearMax:"twoDigitYearMax",dateElementOrder:"mdy"},Date.i18n.currentLanguage()),h=f.buildFromMethodHash({dayNames:"days",abbreviatedDayNames:"dayAbbr",shortestDayNames:"dayShortNames",firstLetterDayNames:"dayFirstLetters",monthNames:"months",abbreviatedMonthNames:"monthAbbr",formatPatterns:"formatPatterns",regexPatterns:"regex",abbreviatedTimeZoneDST:"timeZoneDST",abbreviatedTimeZoneStandard:"timeZoneStandard"}),c;
for(c in h){h.hasOwnProperty(c)&&(a[c]=h[c])
}f.timeZones(a);
return a
};
g.i18n={__:function(c,h){return a(c,h)
},currentLanguage:function(){return e||"en-US"
},setLanguage:function(a,h,f){var d=!1;
if(h||"en-US"===a||Date.CultureStrings&&Date.CultureStrings[a]){e=a,Date.CultureStrings=Date.CultureStrings||{},Date.CultureStrings.lang=a,Date.CultureInfo=new l
}else{if(!Date.CultureStrings||!Date.CultureStrings[a]){if("undefined"!==typeof exports&&this.exports!==exports){try{require("../i18n/"+a+".js"),e=a,Date.CultureStrings.lang=a,Date.CultureInfo=new l
}catch(b){throw Error("The DateJS IETF language tag '"+a+"' could not be loaded by Node. It likely does not exist.")
}}else{Date.Config&&Date.Config.i18n?(d=!0,c(a).done(function(){e=a;
Date.CultureStrings=Date.CultureStrings||{};
Date.CultureStrings.lang=a;
Date.CultureInfo=new l;
g.Parsing.Normalizer.buildReplaceData();
g.Grammar&&g.Grammar.buildGrammarFormats();
f&&setTimeout(f,0)
})):Date.console.error("The DateJS IETF language tag '"+a+"' is not available and has not been loaded.")
}}}g.Parsing.Normalizer.buildReplaceData();
g.Grammar&&g.Grammar.buildGrammarFormats();
!d&&f&&setTimeout(f,0)
},getLoggedKeys:function(){return b
},updateCultureInfo:function(){Date.CultureInfo=new l
}};
g.i18n.updateCultureInfo()
})();
(function(){var g=Date,e=g.prototype,b=function(a,c){c||(c=2);
return("000"+a).slice(-1*c)
};
g.console="undefined"!==typeof window&&"undefined"!==typeof window.console&&"undefined"!==typeof window.console.log?console:{log:function(){},error:function(){}};
g.Config=g.Config||{};
g.initOverloads=function(){g.now?g._now||(g._now=g.now):g._now=function(){return(new Date).getTime()
};
g.now=function(a){return a?g.present():g._now()
};
e.toISOString||(e.toISOString=function(){return this.getUTCFullYear()+"-"+b(this.getUTCMonth()+1)+"-"+b(this.getUTCDate())+"T"+b(this.getUTCHours())+":"+b(this.getUTCMinutes())+":"+b(this.getUTCSeconds())+"."+String((this.getUTCMilliseconds()/1000).toFixed(3)).slice(2,5)+"Z"
});
void 0===e._toString&&(e._toString=e.toString)
};
g.initOverloads();
e.clearTime=function(){this.setHours(0);
this.setMinutes(0);
this.setSeconds(0);
this.setMilliseconds(0);
return this
};
e.setTimeToNow=function(){var a=new Date;
this.setHours(a.getHours());
this.setMinutes(a.getMinutes());
this.setSeconds(a.getSeconds());
this.setMilliseconds(a.getMilliseconds());
return this
};
g.today=function(){return(new Date).clearTime()
};
g.present=function(){return new Date
};
g.compare=function(a,c){if(isNaN(a)||isNaN(c)){throw Error(a+" - "+c)
}if(a instanceof Date&&c instanceof Date){return a<c?-1:a>c?1:0
}throw new TypeError(a+" - "+c)
};
g.equals=function(a,c){return 0===a.compareTo(c)
};
g.getDayName=function(a){return Date.CultureInfo.dayNames[a]
};
g.getDayNumberFromName=function(a){var c=Date.CultureInfo.dayNames,f=Date.CultureInfo.abbreviatedDayNames,d=Date.CultureInfo.shortestDayNames;
a=a.toLowerCase();
for(var b=0;
b<c.length;
b++){if(c[b].toLowerCase()===a||f[b].toLowerCase()===a||d[b].toLowerCase()===a){return b
}}return -1
};
g.getMonthNumberFromName=function(a){var c=Date.CultureInfo.monthNames,f=Date.CultureInfo.abbreviatedMonthNames;
a=a.toLowerCase();
for(var b=0;
b<c.length;
b++){if(c[b].toLowerCase()===a||f[b].toLowerCase()===a){return b
}}return -1
};
g.getMonthName=function(a){return Date.CultureInfo.monthNames[a]
};
g.isLeapYear=function(a){return 0===a%4&&0!==a%100||0===a%400
};
g.getDaysInMonth=function(a,c){!c&&g.validateMonth(a)&&(c=a,a=Date.today().getFullYear());
return[31,g.isLeapYear(a)?29:28,31,30,31,30,31,31,30,31,30,31][c]
};
e.getDaysInMonth=function(){return g.getDaysInMonth(this.getFullYear(),this.getMonth())
};
g.getTimezoneAbbreviation=function(a,c){var f,b=c?Date.CultureInfo.abbreviatedTimeZoneDST:Date.CultureInfo.abbreviatedTimeZoneStandard;
for(f in b){if(b.hasOwnProperty(f)&&b[f]===a){return f
}}return null
};
g.getTimezoneOffset=function(a,c){var f,b=[],d=Date.CultureInfo.timezones;
a||(a=(new Date).getTimezone());
for(f=0;
f<d.length;
f++){d[f].name===a.toUpperCase()&&b.push(f)
}if(!d[b[0]]){return null
}if(1!==b.length&&c){for(f=0;
f<b.length;
f++){if(d[b[f]].dst){return d[b[f]].offset
}}}else{return d[b[0]].offset
}};
g.getQuarter=function(a){a=a||new Date;
return[1,2,3,4][Math.floor(a.getMonth()/3)]
};
g.getDaysLeftInQuarter=function(a){a=a||new Date;
var c=new Date(a);
c.setMonth(c.getMonth()+3-c.getMonth()%3,0);
return Math.floor((c-a)/86400000)
};
e.clone=function(){return new Date(this.getTime())
};
e.compareTo=function(a){return Date.compare(this,a)
};
e.equals=function(a){return Date.equals(this,void 0!==a?a:new Date)
};
e.between=function(a,c){return this.getTime()>=a.getTime()&&this.getTime()<=c.getTime()
};
e.isAfter=function(a){return 1===this.compareTo(a||new Date)
};
e.isBefore=function(a){return -1===this.compareTo(a||new Date)
};
e.isToday=e.isSameDay=function(a){return this.clone().clearTime().equals((a||new Date).clone().clearTime())
};
e.addMilliseconds=function(a){if(!a){return this
}this.setTime(this.getTime()+1*a);
return this
};
e.addSeconds=function(a){return a?this.addMilliseconds(1000*a):this
};
e.addMinutes=function(a){return a?this.addMilliseconds(60000*a):this
};
e.addHours=function(a){return a?this.addMilliseconds(3600000*a):this
};
e.addDays=function(a){if(!a){return this
}this.setDate(this.getDate()+1*a);
return this
};
e.addWeekdays=function(a){if(!a){return this
}var c=this.getDay(),f=Math.ceil(Math.abs(a)/7);
(0===c||6===c)&&0<a&&(this.next().monday(),this.addDays(-1));
if(0>a){for(;
0>a;
){this.addDays(-1),c=this.getDay(),0!==c&&6!==c&&a++
}return this
}if(5<a||6-c<=a){a+=2*f
}return this.addDays(a)
};
e.addWeeks=function(a){return a?this.addDays(7*a):this
};
e.addMonths=function(a){if(!a){return this
}var c=this.getDate();
this.setDate(1);
this.setMonth(this.getMonth()+1*a);
this.setDate(Math.min(c,g.getDaysInMonth(this.getFullYear(),this.getMonth())));
return this
};
e.addQuarters=function(a){return a?this.addMonths(3*a):this
};
e.addYears=function(a){return a?this.addMonths(12*a):this
};
e.add=function(a){if("number"===typeof a){return this._orient=a,this
}a.day&&0!==a.day-this.getDate()&&this.setDate(a.day);
a.milliseconds&&this.addMilliseconds(a.milliseconds);
a.seconds&&this.addSeconds(a.seconds);
a.minutes&&this.addMinutes(a.minutes);
a.hours&&this.addHours(a.hours);
a.weeks&&this.addWeeks(a.weeks);
a.months&&this.addMonths(a.months);
a.years&&this.addYears(a.years);
a.days&&this.addDays(a.days);
return this
};
e.getWeek=function(a){var c=new Date(this.valueOf());
a?(c.addMinutes(c.getTimezoneOffset()),a=c.clone()):a=this;
a=(a.getDay()+6)%7;
c.setDate(c.getDate()-a+3);
a=c.valueOf();
c.setMonth(0,1);
4!==c.getDay()&&c.setMonth(0,1+(4-c.getDay()+7)%7);
return 1+Math.ceil((a-c)/604800000)
};
e.getISOWeek=function(){return b(this.getWeek(!0))
};
e.setWeek=function(a){return 0===a-this.getWeek()?1!==this.getDay()?this.moveToDayOfWeek(1,1<this.getDay()?-1:1):this:this.moveToDayOfWeek(1,1<this.getDay()?-1:1).addWeeks(a-this.getWeek())
};
e.setQuarter=function(a){a=Math.abs(3*(a-1)+1);
return this.setMonth(a,1)
};
e.getQuarter=function(){return Date.getQuarter(this)
};
e.getDaysLeftInQuarter=function(){return Date.getDaysLeftInQuarter(this)
};
var d=function(a,c,f,b){if("undefined"===typeof a){return !1
}if("number"!==typeof a){throw new TypeError(a+" is not a Number.")
}return a<c||a>f?!1:!0
};
g.validateMillisecond=function(a){return d(a,0,999,"millisecond")
};
g.validateSecond=function(a){return d(a,0,59,"second")
};
g.validateMinute=function(a){return d(a,0,59,"minute")
};
g.validateHour=function(a){return d(a,0,23,"hour")
};
g.validateDay=function(a,c,f){return void 0===c||null===c||void 0===f||null===f?!1:d(a,1,g.getDaysInMonth(c,f),"day")
};
g.validateWeek=function(a){return d(a,0,53,"week")
};
g.validateMonth=function(a){return d(a,0,11,"month")
};
g.validateYear=function(a){return d(a,-271822,275760,"year")
};
g.validateTimezone=function(a){return 1==={ACDT:1,ACST:1,ACT:1,ADT:1,AEDT:1,AEST:1,AFT:1,AKDT:1,AKST:1,AMST:1,AMT:1,ART:1,AST:1,AWDT:1,AWST:1,AZOST:1,AZT:1,BDT:1,BIOT:1,BIT:1,BOT:1,BRT:1,BST:1,BTT:1,CAT:1,CCT:1,CDT:1,CEDT:1,CEST:1,CET:1,CHADT:1,CHAST:1,CHOT:1,ChST:1,CHUT:1,CIST:1,CIT:1,CKT:1,CLST:1,CLT:1,COST:1,COT:1,CST:1,CT:1,CVT:1,CWST:1,CXT:1,DAVT:1,DDUT:1,DFT:1,EASST:1,EAST:1,EAT:1,ECT:1,EDT:1,EEDT:1,EEST:1,EET:1,EGST:1,EGT:1,EIT:1,EST:1,FET:1,FJT:1,FKST:1,FKT:1,FNT:1,GALT:1,GAMT:1,GET:1,GFT:1,GILT:1,GIT:1,GMT:1,GST:1,GYT:1,HADT:1,HAEC:1,HAST:1,HKT:1,HMT:1,HOVT:1,HST:1,ICT:1,IDT:1,IOT:1,IRDT:1,IRKT:1,IRST:1,IST:1,JST:1,KGT:1,KOST:1,KRAT:1,KST:1,LHST:1,LINT:1,MAGT:1,MART:1,MAWT:1,MDT:1,MET:1,MEST:1,MHT:1,MIST:1,MIT:1,MMT:1,MSK:1,MST:1,MUT:1,MVT:1,MYT:1,NCT:1,NDT:1,NFT:1,NPT:1,NST:1,NT:1,NUT:1,NZDT:1,NZST:1,OMST:1,ORAT:1,PDT:1,PET:1,PETT:1,PGT:1,PHOT:1,PHT:1,PKT:1,PMDT:1,PMST:1,PONT:1,PST:1,PYST:1,PYT:1,RET:1,ROTT:1,SAKT:1,SAMT:1,SAST:1,SBT:1,SCT:1,SGT:1,SLST:1,SRT:1,SST:1,SYOT:1,TAHT:1,THA:1,TFT:1,TJT:1,TKT:1,TLT:1,TMT:1,TOT:1,TVT:1,UCT:1,ULAT:1,UTC:1,UYST:1,UYT:1,UZT:1,VET:1,VLAT:1,VOLT:1,VOST:1,VUT:1,WAKT:1,WAST:1,WAT:1,WEDT:1,WEST:1,WET:1,WST:1,YAKT:1,YEKT:1,Z:1}[a]
};
g.validateTimezoneOffset=function(a){return -841<a&&721>a
};
var a=function(a){var c={},f=this,b,d;
d=function(c,b,d){if("day"===c){c=void 0!==a.month?a.month-f.getMonth():f.getMonth();
var e=void 0!==a.year?a.year-f.getFullYear():f.getFullYear();
return g[b](d,e,c)
}return g[b](d)
};
for(b in a){if(hasOwnProperty.call(a,b)){var e="validate"+b.charAt(0).toUpperCase()+b.slice(1);
g[e]&&null!==a[b]&&d(b,e,a[b])&&(c[b]=a[b])
}}return c
};
e.set=function(c){c=a.call(this,c);
for(var f in c){if(hasOwnProperty.call(c,f)){var b=f.charAt(0).toUpperCase()+f.slice(1),d,e;
"week"!==f&&"month"!==f&&"timezone"!==f&&"timezoneOffset"!==f&&(b+="s");
d="add"+b;
e="get"+b;
"month"===f?d+="s":"year"===f&&(e="getFullYear");
if("day"!==f&&"timezone"!==f&&"timezoneOffset"!==f&&"week"!==f){this[d](c[f]-this[e]())
}else{if("timezone"===f||"timezoneOffset"===f||"week"===f){this["set"+b](c[f])
}}}}c.day&&this.addDays(c.day-this.getDate());
return this
};
e.moveToFirstDayOfMonth=function(){return this.set({day:1})
};
e.moveToLastDayOfMonth=function(){return this.set({day:g.getDaysInMonth(this.getFullYear(),this.getMonth())})
};
e.moveToNthOccurrence=function(a,c){if("Weekday"===a){if(0<c){this.moveToFirstDayOfMonth(),this.is().weekday()&&(c-=1)
}else{if(0>c){this.moveToLastDayOfMonth(),this.is().weekday()&&(c+=1)
}else{return this
}}return this.addWeekdays(c)
}var f=0;
if(0<c){f=c-1
}else{if(-1===c){return this.moveToLastDayOfMonth(),this.getDay()!==a&&this.moveToDayOfWeek(a,-1),this
}}return this.moveToFirstDayOfMonth().addDays(-1).moveToDayOfWeek(a,1).addWeeks(f)
};
var c=function(a,c,f){return function(b,d){var e=(b-this[a]()+f*(d||1))%f;
return this[c](0===e?e+f*(d||1):e)
}
};
e.moveToDayOfWeek=c("getDay","addDays",7);
e.moveToMonth=c("getMonth","addMonths",12);
e.getOrdinate=function(){var a=this.getDate();
return f(a)
};
e.getOrdinalNumber=function(){return Math.ceil((this.clone().clearTime()-new Date(this.getFullYear(),0,1))/86400000)+1
};
e.getTimezone=function(){return g.getTimezoneAbbreviation(this.getUTCOffset(),this.isDaylightSavingTime())
};
e.setTimezoneOffset=function(a){var c=this.getTimezoneOffset();
return(a=-6*Number(a)/10)||0===a?this.addMinutes(a-c):this
};
e.setTimezone=function(a){return this.setTimezoneOffset(g.getTimezoneOffset(a))
};
e.hasDaylightSavingTime=function(){return Date.today().set({month:0,day:1}).getTimezoneOffset()!==Date.today().set({month:6,day:1}).getTimezoneOffset()
};
e.isDaylightSavingTime=function(){return Date.today().set({month:0,day:1}).getTimezoneOffset()!==this.getTimezoneOffset()
};
e.getUTCOffset=function(a){a=-10*(a||this.getTimezoneOffset())/6;
if(0>a){return a=(a-10000).toString(),a.charAt(0)+a.substr(2)
}a=(a+10000).toString();
return"+"+a.substr(1)
};
e.getElapsed=function(a){return(a||new Date)-this
};
var f=function(a){switch(1*a){case 1:case 21:case 31:return"st";
case 2:case 22:return"nd";
case 3:case 23:return"rd";
default:return"th"
}},l=function(a){var c=Date.CultureInfo.formatPatterns;
switch(a){case"d":return this.toString(c.shortDate);
case"D":return this.toString(c.longDate);
case"F":return this.toString(c.fullDateTime);
case"m":return this.toString(c.monthDay);
case"r":case"R":return a=this.clone().addMinutes(this.getTimezoneOffset()),a.toString(c.rfc1123)+" GMT";
case"s":return this.toString(c.sortableDateTime);
case"t":return this.toString(c.shortTime);
case"T":return this.toString(c.longTime);
case"u":return a=this.clone().addMinutes(this.getTimezoneOffset()),a.toString(c.universalSortableDateTime);
case"y":return this.toString(c.yearMonth);
default:return !1
}},m=function(a){return function(c){if("\\"===c.charAt(0)){return c.replace("\\","")
}switch(c){case"hh":return b(13>a.getHours()?0===a.getHours()?12:a.getHours():a.getHours()-12);
case"h":return 13>a.getHours()?0===a.getHours()?12:a.getHours():a.getHours()-12;
case"HH":return b(a.getHours());
case"H":return a.getHours();
case"mm":return b(a.getMinutes());
case"m":return a.getMinutes();
case"ss":return b(a.getSeconds());
case"s":return a.getSeconds();
case"yyyy":return b(a.getFullYear(),4);
case"yy":return b(a.getFullYear());
case"y":return a.getFullYear();
case"dddd":return Date.CultureInfo.dayNames[a.getDay()];
case"ddd":return Date.CultureInfo.abbreviatedDayNames[a.getDay()];
case"dd":return b(a.getDate());
case"d":return a.getDate();
case"MMMM":return Date.CultureInfo.monthNames[a.getMonth()];
case"MMM":return Date.CultureInfo.abbreviatedMonthNames[a.getMonth()];
case"MM":return b(a.getMonth()+1);
case"M":return a.getMonth()+1;
case"t":return 12>a.getHours()?Date.CultureInfo.amDesignator.substring(0,1):Date.CultureInfo.pmDesignator.substring(0,1);
case"tt":return 12>a.getHours()?Date.CultureInfo.amDesignator:Date.CultureInfo.pmDesignator;
case"S":return f(a.getDate());
case"W":return a.getWeek();
case"WW":return a.getISOWeek();
case"Q":return"Q"+a.getQuarter();
case"q":return String(a.getQuarter());
default:return c
}}
};
e.toString=function(a,c){if(!c&&a&&1===a.length&&(output=l.call(this,a))){return output
}var f=m(this);
return a?a.replace(/((\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|S|q|Q|WW?W?W?)(?![^\[]*\]))/g,f).replace(/\[|\]/g,""):this._toString()
}
})();
(function(){var g=Date,e=g.prototype,b=Number.prototype;
e._orient=1;
e._nth=null;
e._is=!1;
e._same=!1;
e._isSecond=!1;
b._dateElement="days";
e.next=function(){this._move=!0;
this._orient=1;
return this
};
g.next=function(){return g.today().next()
};
e.last=e.prev=e.previous=function(){this._move=!0;
this._orient=-1;
return this
};
g.last=g.prev=g.previous=function(){return g.today().last()
};
e.is=function(){this._is=!0;
return this
};
e.same=function(){this._same=!0;
this._isSecond=!1;
return this
};
e.today=function(){return this.same().day()
};
e.weekday=function(){return this._nth?m("Weekday").call(this):this._move?this.addWeekdays(this._orient):this._is?(this._is=!1,!this.is().sat()&&!this.is().sun()):!1
};
e.weekend=function(){return this._is?(this._is=!1,this.is().sat()||this.is().sun()):!1
};
e.at=function(a){return"string"===typeof a?g.parse(this.toString("d")+" "+a):this.set(a)
};
b.fromNow=b.after=function(a){var c={};
c[this._dateElement]=this;
return(a?a.clone():new Date).add(c)
};
b.ago=b.before=function(a){var c={};
c["s"!==this._dateElement[this._dateElement.length-1]?this._dateElement+"s":this._dateElement]=-1*this;
return(a?a.clone():new Date).add(c)
};
var d="sunday monday tuesday wednesday thursday friday saturday".split(/\s/),a="january february march april may june july august september october november december".split(/\s/),c="Millisecond Second Minute Hour Day Week Month Year Quarter Weekday".split(/\s/),f="Milliseconds Seconds Minutes Hours Date Week Month FullYear Quarter".split(/\s/),l="final first second third fourth fifth".split(/\s/);
e.toObject=function(){for(var a={},b=0;
b<c.length;
b++){this["get"+f[b]]&&(a[c[b].toLowerCase()]=this["get"+f[b]]())
}return a
};
g.fromObject=function(a){a.week=null;
return Date.today().set(a)
};
var m=function(a){return function(){if(this._is){return this._is=!1,this.getDay()===a
}this._move&&(this._move=null);
if(null!==this._nth){this._isSecond&&this.addSeconds(-1*this._orient);
this._isSecond=!1;
var c=this._nth;
this._nth=null;
var f=this.clone().moveToLastDayOfMonth();
this.moveToNthOccurrence(a,c);
if(this>f){throw new RangeError(g.getDayName(a)+" does not occur "+c+" times in the month of "+g.getMonthName(f.getMonth())+" "+f.getFullYear()+".")
}return this
}return this.moveToDayOfWeek(a,this._orient)
}
},h=function(a,c,f){for(var b=0;
b<a.length;
b++){g[a[b].toUpperCase()]=g[a[b].toUpperCase().substring(0,3)]=b,g[a[b]]=g[a[b].substring(0,3)]=c(b),e[a[b]]=e[a[b].substring(0,3)]=f(b)
}};
h(d,function(a){return function(){var c=g.today(),f=a-c.getDay();
0===a&&1===Date.CultureInfo.firstDayOfWeek&&0!==c.getDay()&&(f+=7);
return c.addDays(f)
}
},m);
h(a,function(a){return function(){return g.today().set({month:a,day:1})
}
},function(a){return function(){return this._is?(this._is=!1,this.getMonth()===a):this.moveToMonth(a,this._orient)
}
});
for(var a=function(a){return function(f){if(this._isSecond){return this._isSecond=!1,this
}if(this._same){this._same=this._is=!1;
var b=this.toObject();
f=(f||new Date).toObject();
for(var d="",e=a.toLowerCase(),e="s"===e[e.length-1]?e.substring(0,e.length-1):e,l=c.length-1;
-1<l;
l--){d=c[l].toLowerCase();
if(b[d]!==f[d]){return !1
}if(e===d){break
}}return !0
}"s"!==a.substring(a.length-1)&&(a+="s");
this._move&&(this._move=null);
return this["add"+a](this._orient)
}
},h=function(a){return function(){this._dateElement=a;
return this
}
},k=0;
k<c.length;
k++){d=c[k].toLowerCase(),"weekday"!==d&&(e[d]=e[d+"s"]=a(c[k]),b[d]=b[d+"s"]=h(d+"s"))
}e._ss=a("Second");
b=function(a){return function(c){if(this._same){return this._ss(c)
}if(c||0===c){return this.moveToNthOccurrence(c,a)
}this._nth=a;
return 2!==a||void 0!==c&&null!==c?this:(this._isSecond=!0,this.addSeconds(this._orient))
}
};
for(d=0;
d<l.length;
d++){e[l[d]]=0===d?b(-1):b(d)
}})();
(function(){Date.Parsing={Exception:function(a){this.message="Parse error at '"+a.substring(0,10)+" ...'"
}};
var g=Date.Parsing,e=[0,31,59,90,120,151,181,212,243,273,304,334],b=[0,31,60,91,121,152,182,213,244,274,305,335];
g.isLeapYear=function(a){return 0===a%4&&0!==a%100||0===a%400
};
var d={multiReplace:function(a,c){for(var f in c){if(Object.prototype.hasOwnProperty.call(c,f)){var b;
"function"!==typeof c[f]&&(b=c[f] instanceof RegExp?c[f]:RegExp(c[f],"g"));
a=a.replace(b,f)
}}return a
},getDayOfYearFromWeek:function(a){var c;
a.weekDay=a.weekDay||0===a.weekDay?a.weekDay:1;
c=new Date(a.year,0,4);
c=(0===c.getDay()?7:c.getDay())+3;
a.dayOfYear=7*a.week+(0===a.weekDay?7:a.weekDay)-c;
return a
},getDayOfYear:function(a,c){a.dayOfYear||(a=d.getDayOfYearFromWeek(a));
for(var f=0;
f<=c.length;
f++){if(a.dayOfYear<c[f]||f===c.length){a.day=a.day?a.day:a.dayOfYear-c[f-1];
break
}else{a.month=f
}}return a
},adjustForTimeZone:function(a,c){var f;
"Z"===a.zone.toUpperCase()||0===a.zone_hours&&0===a.zone_minutes?f=-c.getTimezoneOffset():(f=60*a.zone_hours+(a.zone_minutes||0),"+"===a.zone_sign&&(f*=-1),f-=c.getTimezoneOffset());
c.setMinutes(c.getMinutes()+f);
return c
},setDefaults:function(a){a.year=a.year||Date.today().getFullYear();
a.hours=a.hours||0;
a.minutes=a.minutes||0;
a.seconds=a.seconds||0;
a.milliseconds=a.milliseconds||0;
if(a.month||!a.week&&!a.dayOfYear){a.month=a.month||0,a.day=a.day||1
}return a
},dataNum:function(a,c,f,b){var d=1*a;
return c?b?a?1*c(a):a:a?c(d):a:f?a&&"undefined"!==typeof a?d:a:a?d:a
},timeDataProcess:function(a){var c={},f;
for(f in a.data){a.data.hasOwnProperty(f)&&(c[f]=a.ignore[f]?a.data[f]:d.dataNum(a.data[f],a.mods[f],a.explict[f],a.postProcess[f]))
}a.data.secmins&&(a.data.secmins=60*a.data.secmins.replace(",","."),c.minutes?c.seconds||(c.seconds=a.data.secmins):c.minutes=a.data.secmins,delete a.secmins);
return c
},buildTimeObjectFromData:function(a){return d.timeDataProcess({data:{year:a[1],month:a[5],day:a[7],week:a[8],dayOfYear:a[10],hours:a[15],zone_hours:a[23],zone_minutes:a[24],zone:a[21],zone_sign:a[22],weekDay:a[9],minutes:a[16],seconds:a[19],milliseconds:a[20],secmins:a[18]},mods:{month:function(a){return a-1
},weekDay:function(a){a=Math.abs(a);
return 7===a?0:a
},minutes:function(a){return a.replace(":","")
},seconds:function(a){return Math.floor(1*a.replace(":","").replace(",","."))
},milliseconds:function(a){return 1000*a.replace(",",".")
}},postProcess:{minutes:!0,seconds:!0,milliseconds:!0},explict:{zone_hours:!0,zone_minutes:!0},ignore:{zone:!0,zone_sign:!0,secmins:!0}})
},addToHash:function(a,c,f){for(var b=c.length,d=0;
d<b;
d++){a[c[d]]=f[d]
}return a
},combineRegex:function(a,c){return RegExp("(("+a.source+")\\s("+c.source+"))")
},getDateNthString:function(a,c,f){if(a){return Date.today().addDays(f).toString("d")
}if(c){return Date.today().last()[f]().toString("d")
}},buildRegexData:function(a){for(var c=[],f=a.length,b=0;
b<f;
b++){Array.isArray(a[b])?c.push(this.combineRegex(a[b][0],a[b][1])):c.push(a[b])
}return c
}};
g.processTimeObject=function(a){var c;
d.setDefaults(a);
c=g.isLeapYear(a.year)?b:e;
a.month||!a.week&&!a.dayOfYear?a.dayOfYear=c[a.month]+a.day:d.getDayOfYear(a,c);
c=new Date(a.year,a.month,a.day,a.hours,a.minutes,a.seconds,a.milliseconds);
a.zone&&d.adjustForTimeZone(a,c);
return c
};
g.ISO={regex:/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-4])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?\s?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,parse:function(a){a=a.match(this.regex);
if(!a||!a.length){return null
}a=d.buildTimeObjectFromData(a);
return a.year&&(a.year||a.month||a.day||a.week||a.dayOfYear)?g.processTimeObject(a):null
}};
g.Numeric={isNumeric:function(a){return !isNaN(parseFloat(a))&&isFinite(a)
},regex:/\b([0-1]?[0-9])([0-3]?[0-9])([0-2]?[0-9]?[0-9][0-9])\b/i,parse:function(a){var c,f={},b=Date.CultureInfo.dateElementOrder.split("");
if(!this.isNumeric(a)||"+"===a[0]&&"-"===a[0]){return null
}if(5>a.length){return f.year=a,g.processTimeObject(f)
}a=a.match(this.regex);
if(!a||!a.length){return null
}for(c=0;
c<b.length;
c++){switch(b[c]){case"d":f.day=a[c+1];
break;
case"m":f.month=a[c+1]-1;
break;
case"y":f.year=a[c+1]
}}return g.processTimeObject(f)
}};
g.Normalizer={regexData:function(){var a=Date.CultureInfo.regexPatterns;
return d.buildRegexData([a.tomorrow,a.yesterday,[a.past,a.mon],[a.past,a.tue],[a.past,a.wed],[a.past,a.thu],[a.past,a.fri],[a.past,a.sat],[a.past,a.sun]])
},basicReplaceHash:function(){var a=Date.CultureInfo.regexPatterns;
return{January:a.jan.source,February:a.feb,March:a.mar,April:a.apr,May:a.may,June:a.jun,July:a.jul,August:a.aug,September:a.sep,October:a.oct,November:a.nov,December:a.dec,"":/\bat\b/gi," ":/\s{2,}/,am:a.inTheMorning,"9am":a.thisMorning,pm:a.inTheEvening,"7pm":a.thisEvening}
},keys:function(){return[d.getDateNthString(!0,!1,1),d.getDateNthString(!0,!1,-1),d.getDateNthString(!1,!0,"monday"),d.getDateNthString(!1,!0,"tuesday"),d.getDateNthString(!1,!0,"wednesday"),d.getDateNthString(!1,!0,"thursday"),d.getDateNthString(!1,!0,"friday"),d.getDateNthString(!1,!0,"saturday"),d.getDateNthString(!1,!0,"sunday")]
},buildRegexFunctions:function(){var a=Date.CultureInfo.regexPatterns,c=Date.i18n.__;
this.replaceFuncs=[[RegExp("(\\b\\d\\d?("+c("AM")+"|"+c("PM")+")? )("+a.tomorrow.source.slice(1)+")","i"),function(a,c){return Date.today().addDays(1).toString("d")+" "+c
}],[a.amThisMorning,function(a,c){return c
}],[a.pmThisEvening,function(a,c){return c
}]]
},buildReplaceData:function(){this.buildRegexFunctions();
this.replaceHash=d.addToHash(this.basicReplaceHash(),this.keys(),this.regexData())
},stringReplaceFuncs:function(a){for(var c=0;
c<this.replaceFuncs.length;
c++){a=a.replace(this.replaceFuncs[c][0],this.replaceFuncs[c][1])
}return a
},parse:function(a){a=this.stringReplaceFuncs(a);
a=d.multiReplace(a,this.replaceHash);
try{var c=a.split(/([\s\-\.\,\/\x27]+)/);
3===c.length&&g.Numeric.isNumeric(c[0])&&g.Numeric.isNumeric(c[2])&&4<=c[2].length&&"d"===Date.CultureInfo.dateElementOrder[0]&&(a="1/"+c[0]+"/"+c[2])
}catch(f){}return a
}};
g.Normalizer.buildReplaceData()
})();
(function(){for(var g=Date.Parsing,e=g.Operators={rtoken:function(a){return function(f){var b=f.match(a);
if(b){return[b[0],f.substring(b[0].length)]
}throw new g.Exception(f)
}
},token:function(){return function(a){return e.rtoken(RegExp("^\\s*"+a+"\\s*"))(a)
}
},stoken:function(a){return e.rtoken(RegExp("^"+a))
},until:function(a){return function(f){for(var b=[],d=null;
f.length;
){try{d=a.call(this,f)
}catch(e){b.push(d[0]);
f=d[1];
continue
}break
}return[b,f]
}
},many:function(a){return function(f){for(var b=[],d=null;
f.length;
){try{d=a.call(this,f)
}catch(e){break
}b.push(d[0]);
f=d[1]
}return[b,f]
}
},optional:function(a){return function(f){var b=null;
try{b=a.call(this,f)
}catch(d){return[null,f]
}return[b[0],b[1]]
}
},not:function(a){return function(f){try{a.call(this,f)
}catch(b){return[null,f]
}throw new g.Exception(f)
}
},ignore:function(a){return a?function(b){var d=null,d=a.call(this,b);
return[null,d[1]]
}:null
},product:function(){for(var a=arguments[0],b=Array.prototype.slice.call(arguments,1),d=[],g=0;
g<a.length;
g++){d.push(e.each(a[g],b))
}return d
},cache:function(a){var b={},d=null;
return function(e){try{d=b[e]=b[e]||a.call(this,e)
}catch(h){d=b[e]=h
}if(d instanceof g.Exception){throw d
}return d
}
},any:function(){var a=arguments;
return function(b){for(var d=null,e=0;
e<a.length;
e++){if(null!=a[e]){try{d=a[e].call(this,b)
}catch(h){d=null
}if(d){return d
}}}throw new g.Exception(b)
}
},each:function(){var a=arguments;
return function(b){for(var d=[],e=null,h=0;
h<a.length;
h++){if(null!=a[h]){try{e=a[h].call(this,b)
}catch(k){throw new g.Exception(b)
}d.push(e[0]);
b=e[1]
}}return[d,b]
}
},all:function(){var a=a;
return a.each(a.optional(arguments))
},sequence:function(a,b,d){b=b||e.rtoken(/^\s*/);
d=d||null;
return 1===a.length?a[0]:function(e){for(var h=null,k=null,n=[],p=0;
p<a.length;
p++){try{h=a[p].call(this,e)
}catch(q){break
}n.push(h[0]);
try{k=b.call(this,h[1])
}catch(s){k=null;
break
}e=k[1]
}if(!h){throw new g.Exception(e)
}if(k){throw new g.Exception(k[1])
}if(d){try{h=d.call(this,h[1])
}catch(t){throw new g.Exception(h[1])
}}return[n,h?h[1]:e]
}
},between:function(a,b,d){d=d||a;
var g=e.each(e.ignore(a),b,e.ignore(d));
return function(a){a=g.call(this,a);
return[[a[0][0],r[0][2]],a[1]]
}
},list:function(a,b,d){b=b||e.rtoken(/^\s*/);
d=d||null;
return a instanceof Array?e.each(e.product(a.slice(0,-1),e.ignore(b)),a.slice(-1),e.ignore(d)):e.each(e.many(e.each(a,e.ignore(b))),px,e.ignore(d))
},set:function(a,b,d){b=b||e.rtoken(/^\s*/);
d=d||null;
return function(m){for(var h=null,k=h=null,n=null,p=[[],m],q=!1,s=0;
s<a.length;
s++){h=k=null;
q=1===a.length;
try{h=a[s].call(this,m)
}catch(t){continue
}n=[[h[0]],h[1]];
if(0<h[1].length&&!q){try{k=b.call(this,h[1])
}catch(u){q=!0
}}else{q=!0
}q||0!==k[1].length||(q=!0);
if(!q){h=[];
for(q=0;
q<a.length;
q++){s!==q&&h.push(a[q])
}h=e.set(h,b).call(this,k[1]);
0<h[0].length&&(n[0]=n[0].concat(h[0]),n[1]=h[1])
}n[1].length<p[1].length&&(p=n);
if(0===p[1].length){break
}}if(0===p[0].length){return p
}if(d){try{k=d.call(this,p[1])
}catch(v){throw new g.Exception(p[1])
}p[1]=k[1]
}return p
}
},forward:function(a,b){return function(d){return a[b].call(this,d)
}
},replace:function(a,b){return function(d){d=a.call(this,d);
return[b,d[1]]
}
},process:function(a,b){return function(d){d=a.call(this,d);
return[b.call(this,d[0]),d[1]]
}
},min:function(a,b){return function(d){var e=b.call(this,d);
if(e[0].length<a){throw new g.Exception(d)
}return e
}
}},b=function(a){return function(){var b=null,d=[],e;
1<arguments.length?b=Array.prototype.slice.call(arguments):arguments[0] instanceof Array&&(b=arguments[0]);
if(b){if(e=b.shift(),0<e.length){return b.unshift(e[void 0]),d.push(a.apply(null,b)),b.shift(),d
}}else{return a.apply(null,arguments)
}}
},d="optional not ignore cache".split(/\s/),a=0;
a<d.length;
a++){e[d[a]]=b(e[d[a]])
}b=function(a){return function(){return arguments[0] instanceof Array?a.apply(null,arguments[0]):a.apply(null,arguments)
}
};
d="each any all".split(/\s/);
for(a=0;
a<d.length;
a++){e[d[a]]=b(e[d[a]])
}})();
(function(){var g=Date,e=function(b){for(var a=[],c=0;
c<b.length;
c++){b[c] instanceof Array?a=a.concat(e(b[c])):b[c]&&a.push(b[c])
}return a
},b=function(){if(this.meridian&&(this.hour||0===this.hour)){if("a"===this.meridian&&11<this.hour&&Date.Config.strict24hr){throw"Invalid hour and meridian combination"
}if("p"===this.meridian&&12>this.hour&&Date.Config.strict24hr){throw"Invalid hour and meridian combination"
}"p"===this.meridian&&12>this.hour?this.hour+=12:"a"===this.meridian&&12===this.hour&&(this.hour=0)
}};
g.Translator={hour:function(b){return function(){this.hour=Number(b)
}
},minute:function(b){return function(){this.minute=Number(b)
}
},second:function(b){return function(){this.second=Number(b)
}
},secondAndMillisecond:function(b){return function(){var a=b.match(/^([0-5][0-9])\.([0-9]{1,3})/);
this.second=Number(a[1]);
this.millisecond=Number(a[2])
}
},meridian:function(b){return function(){this.meridian=b.slice(0,1).toLowerCase()
}
},timezone:function(b){return function(){var a=b.replace(/[^\d\+\-]/g,"");
a.length?this.timezoneOffset=Number(a):this.timezone=b.toLowerCase()
}
},day:function(b){var a=b[0];
return function(){this.day=Number(a.match(/\d+/)[0]);
if(1>this.day){throw"invalid day"
}}
},month:function(b){return function(){this.month=3===b.length?"jan feb mar apr may jun jul aug sep oct nov dec".indexOf(b)/4:Number(b)-1;
if(0>this.month){throw"invalid month"
}}
},year:function(b){return function(){var a=Number(b);
this.year=2<b.length?a:a+(a+2000<Date.CultureInfo.twoDigitYearMax?2000:1900)
}
},rday:function(b){return function(){switch(b){case"yesterday":this.days=-1;
break;
case"tomorrow":this.days=1;
break;
case"today":this.days=0;
break;
case"now":this.days=0,this.now=!0
}}
},finishExact:function(d){d=d instanceof Array?d:[d];
for(var a=0;
a<d.length;
a++){d[a]&&d[a].call(this)
}d=new Date;
!this.hour&&!this.minute||this.month||this.year||this.day||(this.day=d.getDate());
this.year||(this.year=d.getFullYear());
this.month||0===this.month||(this.month=d.getMonth());
this.day||(this.day=1);
this.hour||(this.hour=0);
this.minute||(this.minute=0);
this.second||(this.second=0);
this.millisecond||(this.millisecond=0);
b.call(this);
if(this.day>g.getDaysInMonth(this.year,this.month)){throw new RangeError(this.day+" is not a valid value for days.")
}d=new Date(this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond);
100>this.year&&d.setFullYear(this.year);
this.timezone?d.set({timezone:this.timezone}):this.timezoneOffset&&d.set({timezoneOffset:this.timezoneOffset});
return d
},finish:function(d){var a,c,f;
d=d instanceof Array?e(d):[d];
if(0===d.length){return null
}for(a=0;
a<d.length;
a++){"function"===typeof d[a]&&d[a].call(this)
}if(!this.now||this.unit||this.operator){d=this.now||-1!=="hour minute second".indexOf(this.unit)?new Date:g.today()
}else{return new Date
}a=!!(this.days&&null!==this.days||this.orient||this.operator);
c="past"===this.orient||"subtract"===this.operator?-1:1;
this.month&&"week"===this.unit&&(this.value=this.month+1,delete this.month,delete this.day);
!this.month&&0!==this.month||-1==="year day hour minute second".indexOf(this.unit)||(this.value||(this.value=this.month+1),this.month=null,a=!0);
a||!this.weekday||this.day||this.days||(f=Date[this.weekday](),this.day=f.getDate(),this.month||(this.month=f.getMonth()),this.year=f.getFullYear());
!this.weekday||"week"===this.unit||this.day||this.days||(f=Date[this.weekday](),this.day=f.getDate(),f.getMonth()!==d.getMonth()&&(this.month=f.getMonth()));
a&&this.weekday&&"month"!==this.unit&&"week"!==this.unit&&(f=d,this.unit="day",this.days=(f=g.getDayNumberFromName(this.weekday)-f.getDay())?(f+7*orient)%7:7*orient);
this.month&&"day"===this.unit&&this.operator&&(this.value||(this.value=this.month+1),this.month=null);
null!=this.value&&null!=this.month&&null!=this.year&&(this.day=1*this.value);
this.month&&!this.day&&this.value&&(d.set({day:1*this.value}),a||(this.day=1*this.value));
this.month||!this.value||"month"!==this.unit||this.now||(this.month=this.value,a=!0);
a&&(this.month||0===this.month)&&"year"!==this.unit&&(this.unit="month",this.months=(f=this.month-d.getMonth())?(f+12*c)%12:12*c,this.month=null);
this.unit||(this.unit="day");
if(!this.value&&this.operator&&null!==this.operator&&this[this.unit+"s"]&&null!==this[this.unit+"s"]){this[this.unit+"s"]=this[this.unit+"s"]+("add"===this.operator?1:-1)+(this.value||0)*c
}else{if(null==this[this.unit+"s"]||null!=this.operator){this.value||(this.value=1),this[this.unit+"s"]=this.value*c
}}b.call(this);
!this.month&&0!==this.month||this.day||(this.day=1);
if(!this.orient&&!this.operator&&"week"===this.unit&&this.value&&!this.day&&!this.month){return Date.today().setWeek(this.value)
}if("week"===this.unit&&this.weeks&&!this.day&&!this.month){return d=Date[void 0!==this.weekday?this.weekday:"today"]().addWeeks(this.weeks),this.now&&d.setTimeToNow(),d
}a&&this.timezone&&this.day&&this.days&&(this.day=this.days);
return a?d.add(this):d.set(this)
}}
})();
(function(){var g=Date;
g.Grammar={};
var e=g.Parsing.Operators,b=g.Grammar,d=g.Translator,a;
b.datePartDelimiter=e.rtoken(/^([\s\-\.\,\/\x27]+)/);
b.timePartDelimiter=e.stoken(":");
b.whiteSpace=e.rtoken(/^\s*/);
b.generalDelimiter=e.rtoken(/^(([\s\,]|at|@|on)+)/);
var c={};
b.ctoken=function(a){var b=c[a];
if(!b){for(var b=Date.CultureInfo.regexPatterns,d=a.split(/\s+/),f=[],g=0;
g<d.length;
g++){f.push(e.replace(e.rtoken(b[d[g]]),d[g]))
}b=c[a]=e.any.apply(null,f)
}return b
};
b.ctoken2=function(a){return e.rtoken(Date.CultureInfo.regexPatterns[a])
};
var f=function(a,c,d){return d?e.cache(e.process(e.each(e.rtoken(a),e.optional(b.ctoken2(d))),c)):e.cache(e.process(e.rtoken(a),c))
},l={},m=function(a){l[a]=l[a]||b.format(a)[0];
return l[a]
};
b.allformats=function(a){var b=[];
if(a instanceof Array){for(var c=0;
c<a.length;
c++){b.push(m(a[c]))
}}else{b.push(m(a))
}return b
};
b.formats=function(a){if(a instanceof Array){for(var b=[],c=0;
c<a.length;
c++){b.push(m(a[c]))
}return e.any.apply(null,b)
}return m(a)
};
b.buildGrammarFormats=function(){c={};
b.h=f(/^(0[0-9]|1[0-2]|[1-9])/,d.hour);
b.hh=f(/^(0[0-9]|1[0-2])/,d.hour);
b.H=f(/^([0-1][0-9]|2[0-3]|[0-9])/,d.hour);
b.HH=f(/^([0-1][0-9]|2[0-3])/,d.hour);
b.m=f(/^([0-5][0-9]|[0-9])/,d.minute);
b.mm=f(/^[0-5][0-9]/,d.minute);
b.s=f(/^([0-5][0-9]|[0-9])/,d.second);
b.ss=f(/^[0-5][0-9]/,d.second);
b["ss.s"]=f(/^[0-5][0-9]\.[0-9]{1,3}/,d.secondAndMillisecond);
b.hms=e.cache(e.sequence([b.H,b.m,b.s],b.timePartDelimiter));
b.t=e.cache(e.process(b.ctoken2("shortMeridian"),d.meridian));
b.tt=e.cache(e.process(b.ctoken2("longMeridian"),d.meridian));
b.z=f(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/,d.timezone);
b.zz=f(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/,d.timezone);
b.zzz=e.cache(e.process(b.ctoken2("timezone"),d.timezone));
b.timeSuffix=e.each(e.ignore(b.whiteSpace),e.set([b.tt,b.zzz]));
b.time=e.each(e.optional(e.ignore(e.stoken("T"))),b.hms,b.timeSuffix);
b.d=f(/^([0-2]\d|3[0-1]|\d)/,d.day,"ordinalSuffix");
b.dd=f(/^([0-2]\d|3[0-1])/,d.day,"ordinalSuffix");
b.ddd=b.dddd=e.cache(e.process(b.ctoken("sun mon tue wed thu fri sat"),function(a){return function(){this.weekday=a
}
}));
b.M=f(/^(1[0-2]|0\d|\d)/,d.month);
b.MM=f(/^(1[0-2]|0\d)/,d.month);
b.MMM=b.MMMM=e.cache(e.process(b.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"),d.month));
b.y=f(/^(\d+)/,d.year);
b.yy=f(/^(\d\d)/,d.year);
b.yyy=f(/^(\d\d?\d?\d?)/,d.year);
b.yyyy=f(/^(\d\d\d\d)/,d.year);
a=function(){return e.each(e.any.apply(null,arguments),e.not(b.ctoken2("timeContext")))
};
b.day=a(b.d,b.dd);
b.month=a(b.M,b.MMM);
b.year=a(b.yyyy,b.yy);
b.orientation=e.process(b.ctoken("past future"),function(a){return function(){this.orient=a
}
});
b.operator=e.process(b.ctoken("add subtract"),function(a){return function(){this.operator=a
}
});
b.rday=e.process(b.ctoken("yesterday tomorrow today now"),d.rday);
b.unit=e.process(b.ctoken("second minute hour day week month year"),function(a){return function(){this.unit=a
}
});
b.value=e.process(e.rtoken(/^([-+]?\d+)?(st|nd|rd|th)?/),function(a){return function(){this.value=a.replace(/\D/g,"")
}
});
b.expression=e.set([b.rday,b.operator,b.value,b.unit,b.orientation,b.ddd,b.MMM]);
a=function(){return e.set(arguments,b.datePartDelimiter)
};
b.mdy=a(b.ddd,b.month,b.day,b.year);
b.ymd=a(b.ddd,b.year,b.month,b.day);
b.dmy=a(b.ddd,b.day,b.month,b.year);
b.date=function(a){return(b[Date.CultureInfo.dateElementOrder]||b.mdy).call(this,a)
};
b.format=e.process(e.many(e.any(e.process(e.rtoken(/^(dd?d?d?(?!e)|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/),function(a){if(b[a]){return b[a]
}throw g.Parsing.Exception(a)
}),e.process(e.rtoken(/^[^dMyhHmstz]+/),function(a){return e.ignore(e.stoken(a))
}))),function(a){return e.process(e.each.apply(null,a),d.finishExact)
});
b._start=e.process(e.set([b.date,b.time,b.expression],b.generalDelimiter,b.whiteSpace),d.finish)
};
b.buildGrammarFormats();
b._formats=b.formats('"yyyy-MM-ddTHH:mm:ssZ";yyyy-MM-ddTHH:mm:ss.sz;yyyy-MM-ddTHH:mm:ssZ;yyyy-MM-ddTHH:mm:ssz;yyyy-MM-ddTHH:mm:ss;yyyy-MM-ddTHH:mmZ;yyyy-MM-ddTHH:mmz;yyyy-MM-ddTHH:mm;ddd, MMM dd, yyyy H:mm:ss tt;ddd MMM d yyyy HH:mm:ss zzz;MMddyyyy;ddMMyyyy;Mddyyyy;ddMyyyy;Mdyyyy;dMyyyy;yyyy;Mdyy;dMyy;d'.split(";"));
b.start=function(a){try{var c=b._formats.call({},a);
if(0===c[1].length){return c
}}catch(d){}return b._start.call({},a)
}
})();
(function(){var g=Date,e={removeOrds:function(b){return b=(ords=b.match(/\b(\d+)(?:st|nd|rd|th)\b/))&&2===ords.length?b.replace(ords[0],ords[1]):b
},grammarParser:function(b){var d=null;
try{d=g.Grammar.start.call({},b.replace(/^\s*(\S*(\s+\S+)*)\s*$/,"$1"))
}catch(a){return null
}return 0===d[1].length?d[0]:null
},nativeFallback:function(b){var d;
try{return(d=Date._parse(b))||0===d?new Date(d):null
}catch(a){return null
}}};
g._parse||(g._parse=g.parse);
g.parse=function(b){var d;
if(!b){return null
}if(b instanceof Date){return b.clone()
}4<=b.length&&"0"!==b.charAt(0)&&"+"!==b.charAt(0)&&"-"!==b.charAt(0)&&(d=g.Parsing.ISO.parse(b)||g.Parsing.Numeric.parse(b));
if(d instanceof Date&&!isNaN(d.getTime())){return d
}b=g.Parsing.Normalizer.parse(e.removeOrds(b));
d=e.grammarParser(b);
return null!==d?d:e.nativeFallback(b)
};
Date.getParseFunction=function(b){var d=Date.Grammar.allformats(b);
return function(a){for(var b=null,f=0;
f<d.length;
f++){try{b=d[f].call({},a)
}catch(e){continue
}if(0===b[1].length){return b[0]
}}return null
}
};
g.parseExact=function(b,d){return g.getParseFunction(d)(b)
}
})();
(function(){var g=Date,e=g.prototype,b=function(a,b){b||(b=2);
return("000"+a).slice(-1*b)
};
g.normalizeFormat=function(a){return a
};
g.strftime=function(a,b){return(new Date(1000*b)).$format(a)
};
g.strtotime=function(a){a=g.parse(a);
a.addMinutes(-1*a.getTimezoneOffset());
return Math.round(g.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds())/1000)
};
var d=function(a){var c;
return function(d){var e,m=!1;
if("\\"===d.charAt(0)||"%%"===d.substring(0,2)){return d.replace("\\","").replace("%%","%")
}switch(d){case"d":case"%d":e="dd";
break;
case"D":case"%a":e="ddd";
break;
case"j":case"l":case"%A":e="dddd";
break;
case"N":case"%u":return a.getDay()+1;
case"S":e="S";
break;
case"w":case"%w":return a.getDay();
case"z":return a.getOrdinalNumber();
case"%j":return b(a.getOrdinalNumber(),3);
case"%U":return d=a.clone().set({month:0,day:1}).addDays(-1).moveToDayOfWeek(0),e=a.clone().addDays(1).moveToDayOfWeek(0,-1),e<d?"00":b((e.getOrdinalNumber()-d.getOrdinalNumber())/7+1);
case"W":case"%V":return a.getISOWeek();
case"%W":return b(a.getWeek());
case"F":case"%B":e="MMMM";
break;
case"m":case"%m":e="MM";
break;
case"M":case"%b":case"%h":e="MMM";
break;
case"n":e="M";
break;
case"t":return g.getDaysInMonth(a.getFullYear(),a.getMonth());
case"L":return g.isLeapYear(a.getFullYear())?1:0;
case"o":case"%G":return a.setWeek(a.getISOWeek()).toString("yyyy");
case"%g":return a.$format("%G").slice(-2);
case"Y":case"%Y":e="yyyy";
break;
case"y":case"%y":e="yy";
break;
case"a":case"%p":return a.toString("tt",void 0).toLowerCase();
case"A":return a.toString("tt",void 0).toUpperCase();
case"g":case"%I":e="h";
break;
case"G":e="H";
break;
case"h":e="hh";
break;
case"H":case"%H":e="HH";
break;
case"i":case"%M":e="mm";
break;
case"s":case"%S":e="ss";
break;
case"u":return b(a.getMilliseconds(),3);
case"I":return a.isDaylightSavingTime()?1:0;
case"O":return a.getUTCOffset();
case"P":return c=a.getUTCOffset(),c.substring(0,c.length-2)+":"+c.substring(c.length-2);
case"e":case"T":case"%z":case"%Z":return a.getTimezone();
case"Z":return -60*a.getTimezoneOffset();
case"B":return d=new Date,Math.floor((3600*d.getHours()+60*d.getMinutes()+d.getSeconds()+60*(d.getTimezoneOffset()+60))/86.4);
case"c":return a.toISOString().replace(/\"/g,"");
case"U":return g.strtotime("now");
case"%c":return a.toString("d",void 0)+" "+a.toString("t",void 0);
case"%C":return Math.floor(a.getFullYear()/100+1);
case"%D":e="MM/dd/yy";
break;
case"%n":return"\\n";
case"%t":return"\\t";
case"%r":e="hh:mm tt";
break;
case"%R":e="H:mm";
break;
case"%T":e="H:mm:ss";
break;
case"%e":e="d";
m=!0;
break;
case"%x":m=!1;
break;
case"%X":e="t";
break;
default:return d
}if(e){return a.toString(e,m)
}}
};
e.$format=function(a){var b=d(this);
return a?a.replace(/(%|\\)?.|%%/g,b):this._toString()
};
e.format||(e.format=e.$format)
})();
(function(){var g=function(b){return function(){return this[b]
}
},e=function(b){return function(a){this[b]=a;
return this
}
},b=function(d,a,c,e,g){if(1===arguments.length&&"number"===typeof d){var m=0>d?-1:1,h=Math.abs(d);
this.setDays(Math.floor(h/86400000)*m);
h%=86400000;
this.setHours(Math.floor(h/3600000)*m);
h%=3600000;
this.setMinutes(Math.floor(h/60000)*m);
h%=60000;
this.setSeconds(Math.floor(h/1000)*m);
this.setMilliseconds(h%1000*m)
}else{this.set(d,a,c,e,g)
}this.getTotalMilliseconds=function(){return 86400000*this.getDays()+3600000*this.getHours()+60000*this.getMinutes()+1000*this.getSeconds()
};
this.compareTo=function(a){var b=new Date(1970,1,1,this.getHours(),this.getMinutes(),this.getSeconds());
a=null===a?new Date(1970,1,1,0,0,0):new Date(1970,1,1,a.getHours(),a.getMinutes(),a.getSeconds());
return b<a?-1:b>a?1:0
};
this.equals=function(a){return 0===this.compareTo(a)
};
this.add=function(a){return null===a?this:this.addSeconds(a.getTotalMilliseconds()/1000)
};
this.subtract=function(a){return null===a?this:this.addSeconds(-a.getTotalMilliseconds()/1000)
};
this.addDays=function(a){return new b(this.getTotalMilliseconds()+86400000*a)
};
this.addHours=function(a){return new b(this.getTotalMilliseconds()+3600000*a)
};
this.addMinutes=function(a){return new b(this.getTotalMilliseconds()+60000*a)
};
this.addSeconds=function(a){return new b(this.getTotalMilliseconds()+1000*a)
};
this.addMilliseconds=function(a){return new b(this.getTotalMilliseconds()+a)
};
this.get12HourHour=function(){return 12<this.getHours()?this.getHours()-12:0===this.getHours()?12:this.getHours()
};
this.getDesignator=function(){return 12>this.getHours()?Date.CultureInfo.amDesignator:Date.CultureInfo.pmDesignator
};
this.toString=function(a){this._toString=function(){return null!==this.getDays()&&0<this.getDays()?this.getDays()+"."+this.getHours()+":"+this.p(this.getMinutes())+":"+this.p(this.getSeconds()):this.getHours()+":"+this.p(this.getMinutes())+":"+this.p(this.getSeconds())
};
this.p=function(a){return 2>a.toString().length?"0"+a:a
};
var b=this;
return a?a.replace(/dd?|HH?|hh?|mm?|ss?|tt?/g,function(a){switch(a){case"d":return b.getDays();
case"dd":return b.p(b.getDays());
case"H":return b.getHours();
case"HH":return b.p(b.getHours());
case"h":return b.get12HourHour();
case"hh":return b.p(b.get12HourHour());
case"m":return b.getMinutes();
case"mm":return b.p(b.getMinutes());
case"s":return b.getSeconds();
case"ss":return b.p(b.getSeconds());
case"t":return(12>b.getHours()?Date.CultureInfo.amDesignator:Date.CultureInfo.pmDesignator).substring(0,1);
case"tt":return 12>b.getHours()?Date.CultureInfo.amDesignator:Date.CultureInfo.pmDesignator
}}):this._toString()
};
return this
};
(function(b,a){for(var c=0;
c<a.length;
c++){var f=a[c],l=f.slice(0,1).toUpperCase()+f.slice(1);
b.prototype[f]=0;
b.prototype["get"+l]=g(f);
b.prototype["set"+l]=e(f)
}})(b,"years months days hours minutes seconds milliseconds".split(" ").slice(2));
b.prototype.set=function(b,a,c,e,g){this.setDays(b||this.getDays());
this.setHours(a||this.getHours());
this.setMinutes(c||this.getMinutes());
this.setSeconds(e||this.getSeconds());
this.setMilliseconds(g||this.getMilliseconds())
};
Date.prototype.getTimeOfDay=function(){return new b(0,this.getHours(),this.getMinutes(),this.getSeconds(),this.getMilliseconds())
};
Date.TimeSpan=b;
"undefined"!==typeof window&&(window.TimeSpan=b)
})();
(function(){var g=function(a){return function(){return this[a]
}
},e=function(a){return function(b){this[a]=b;
return this
}
},b=function(a,b,d,e){function g(){b.addMonths(-a);
e.months++;
12===e.months&&(e.years++,e.months=0)
}if(1===a){for(;
b>d;
){g()
}}else{for(;
b<d;
){g()
}}e.months--;
e.months*=a;
e.years*=a
},d=function(a,c,d,e,g,h,k){if(7===arguments.length){this.set(a,c,d,e,g,h,k)
}else{if(2===arguments.length&&arguments[0] instanceof Date&&arguments[1] instanceof Date){var n=arguments[0].clone(),p=arguments[1].clone(),q=n>p?1:-1;
this.dates={start:arguments[0].clone(),end:arguments[1].clone()};
b(q,n,p,this);
var s=!1===(n.isDaylightSavingTime()===p.isDaylightSavingTime());
s&&1===q?n.addHours(-1):s&&n.addHours(1);
n=p-n;
0!==n&&(n=new TimeSpan(n),this.set(this.years,this.months,n.getDays(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()))
}}return this
};
(function(a,b){for(var d=0;
d<b.length;
d++){var l=b[d],m=l.slice(0,1).toUpperCase()+l.slice(1);
a.prototype[l]=0;
a.prototype["get"+m]=g(l);
a.prototype["set"+m]=e(l)
}})(d,"years months days hours minutes seconds milliseconds".split(" "));
d.prototype.set=function(a,b,d,e,g,h,k){this.setYears(a||this.getYears());
this.setMonths(b||this.getMonths());
this.setDays(d||this.getDays());
this.setHours(e||this.getHours());
this.setMinutes(g||this.getMinutes());
this.setSeconds(h||this.getSeconds());
this.setMilliseconds(k||this.getMilliseconds())
};
Date.TimePeriod=d;
"undefined"!==typeof window&&(window.TimePeriod=d)
})();
/*!
 * Crypto-JS v2.2.0
 * http://code.google.com/p/crypto-js/
 * Copyright (c) 2011, Jeff Mott. All rights reserved.
 * http://code.google.com/p/crypto-js/wiki/License
 */
if(typeof Crypto=="undefined"||!Crypto.util){(function(){var n=window.Crypto={},o=n.util={rotl:function(g,i){return g<<i|g>>>32-i
},rotr:function(g,i){return g<<32-i|g>>>i
},endian:function(g){if(g.constructor==Number){return o.rotl(g,8)&16711935|o.rotl(g,24)&4278255360
}for(var i=0;
i<g.length;
i++){g[i]=o.endian(g[i])
}return g
},randomBytes:function(g){for(var i=[];
g>0;
g--){i.push(Math.floor(Math.random()*256))
}return i
},bytesToWords:function(g){for(var i=[],h=0,a=0;
h<g.length;
h++,a+=8){i[a>>>5]|=g[h]<<24-a%32
}return i
},wordsToBytes:function(g){for(var i=[],h=0;
h<g.length*32;
h+=8){i.push(g[h>>>5]>>>24-h%32&255)
}return i
},bytesToHex:function(g){for(var i=[],h=0;
h<g.length;
h++){i.push((g[h]>>>4).toString(16));
i.push((g[h]&15).toString(16))
}return i.join("")
},hexToBytes:function(g){for(var i=[],h=0;
h<g.length;
h+=2){i.push(parseInt(g.substr(h,2),16))
}return i
},bytesToBase64:function(g){if(typeof btoa=="function"){return btoa(p.bytesToString(g))
}for(var i=[],h=0;
h<g.length;
h+=3){for(var a=g[h]<<16|g[h+1]<<8|g[h+2],b=0;
b<4;
b++){h*8+b*6<=g.length*8?i.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a>>>6*(3-b)&63)):i.push("=")
}}return i.join("")
},base64ToBytes:function(g){if(typeof atob=="function"){return p.stringToBytes(atob(g))
}g=g.replace(/[^A-Z0-9+\/]/ig,"");
for(var i=[],h=0,a=0;
h<g.length;
a=++h%4){a!=0&&i.push(("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(g.charAt(h-1))&Math.pow(2,-2*a+8)-1)<<a*2|"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(g.charAt(h))>>>6-a*2)
}return i
}};
n.mode={};
n=n.charenc={};
n.UTF8={stringToBytes:function(g){return p.stringToBytes(unescape(encodeURIComponent(g)))
},bytesToString:function(g){return decodeURIComponent(escape(p.bytesToString(g)))
}};
var p=n.Binary={stringToBytes:function(g){for(var i=[],h=0;
h<g.length;
h++){i.push(g.charCodeAt(h)&255)
}return i
},bytesToString:function(g){for(var i=[],h=0;
h<g.length;
h++){i.push(String.fromCharCode(g[h]))
}return i.join("")
}}
})()
}(function(){var n=Crypto,o=n.util,p=n.charenc,g=p.UTF8,i=p.Binary,h=n.MD5=function(a,b){var j=o.wordsToBytes(h._md5(a));
return b&&b.asBytes?j:b&&b.asString?i.bytesToString(j):o.bytesToHex(j)
};
h._md5=function(a){if(a.constructor==String){a=g.stringToBytes(a)
}var b=o.bytesToWords(a),j=a.length*8;
a=1732584193;
for(var d=-271733879,e=-1732584194,c=271733878,f=0;
f<b.length;
f++){b[f]=(b[f]<<8|b[f]>>>24)&16711935|(b[f]<<24|b[f]>>>8)&4278255360
}b[j>>>5]|=128<<j%32;
b[(j+64>>>9<<4)+14]=j;
j=h._ff;
var k=h._gg,l=h._hh,m=h._ii;
for(f=0;
f<b.length;
f+=16){var q=a,r=d,s=e,t=c;
a=j(a,d,e,c,b[f+0],7,-680876936);
c=j(c,a,d,e,b[f+1],12,-389564586);
e=j(e,c,a,d,b[f+2],17,606105819);
d=j(d,e,c,a,b[f+3],22,-1044525330);
a=j(a,d,e,c,b[f+4],7,-176418897);
c=j(c,a,d,e,b[f+5],12,1200080426);
e=j(e,c,a,d,b[f+6],17,-1473231341);
d=j(d,e,c,a,b[f+7],22,-45705983);
a=j(a,d,e,c,b[f+8],7,1770035416);
c=j(c,a,d,e,b[f+9],12,-1958414417);
e=j(e,c,a,d,b[f+10],17,-42063);
d=j(d,e,c,a,b[f+11],22,-1990404162);
a=j(a,d,e,c,b[f+12],7,1804603682);
c=j(c,a,d,e,b[f+13],12,-40341101);
e=j(e,c,a,d,b[f+14],17,-1502002290);
d=j(d,e,c,a,b[f+15],22,1236535329);
a=k(a,d,e,c,b[f+1],5,-165796510);
c=k(c,a,d,e,b[f+6],9,-1069501632);
e=k(e,c,a,d,b[f+11],14,643717713);
d=k(d,e,c,a,b[f+0],20,-373897302);
a=k(a,d,e,c,b[f+5],5,-701558691);
c=k(c,a,d,e,b[f+10],9,38016083);
e=k(e,c,a,d,b[f+15],14,-660478335);
d=k(d,e,c,a,b[f+4],20,-405537848);
a=k(a,d,e,c,b[f+9],5,568446438);
c=k(c,a,d,e,b[f+14],9,-1019803690);
e=k(e,c,a,d,b[f+3],14,-187363961);
d=k(d,e,c,a,b[f+8],20,1163531501);
a=k(a,d,e,c,b[f+13],5,-1444681467);
c=k(c,a,d,e,b[f+2],9,-51403784);
e=k(e,c,a,d,b[f+7],14,1735328473);
d=k(d,e,c,a,b[f+12],20,-1926607734);
a=l(a,d,e,c,b[f+5],4,-378558);
c=l(c,a,d,e,b[f+8],11,-2022574463);
e=l(e,c,a,d,b[f+11],16,1839030562);
d=l(d,e,c,a,b[f+14],23,-35309556);
a=l(a,d,e,c,b[f+1],4,-1530992060);
c=l(c,a,d,e,b[f+4],11,1272893353);
e=l(e,c,a,d,b[f+7],16,-155497632);
d=l(d,e,c,a,b[f+10],23,-1094730640);
a=l(a,d,e,c,b[f+13],4,681279174);
c=l(c,a,d,e,b[f+0],11,-358537222);
e=l(e,c,a,d,b[f+3],16,-722521979);
d=l(d,e,c,a,b[f+6],23,76029189);
a=l(a,d,e,c,b[f+9],4,-640364487);
c=l(c,a,d,e,b[f+12],11,-421815835);
e=l(e,c,a,d,b[f+15],16,530742520);
d=l(d,e,c,a,b[f+2],23,-995338651);
a=m(a,d,e,c,b[f+0],6,-198630844);
c=m(c,a,d,e,b[f+7],10,1126891415);
e=m(e,c,a,d,b[f+14],15,-1416354905);
d=m(d,e,c,a,b[f+5],21,-57434055);
a=m(a,d,e,c,b[f+12],6,1700485571);
c=m(c,a,d,e,b[f+3],10,-1894986606);
e=m(e,c,a,d,b[f+10],15,-1051523);
d=m(d,e,c,a,b[f+1],21,-2054922799);
a=m(a,d,e,c,b[f+8],6,1873313359);
c=m(c,a,d,e,b[f+15],10,-30611744);
e=m(e,c,a,d,b[f+6],15,-1560198380);
d=m(d,e,c,a,b[f+13],21,1309151649);
a=m(a,d,e,c,b[f+4],6,-145523070);
c=m(c,a,d,e,b[f+11],10,-1120210379);
e=m(e,c,a,d,b[f+2],15,718787259);
d=m(d,e,c,a,b[f+9],21,-343485551);
a=a+q>>>0;
d=d+r>>>0;
e=e+s>>>0;
c=c+t>>>0
}return o.endian([a,d,e,c])
};
h._ff=function(a,b,j,d,e,c,f){a=a+(b&j|~b&d)+(e>>>0)+f;
return(a<<c|a>>>32-c)+b
};
h._gg=function(a,b,j,d,e,c,f){a=a+(b&d|j&~d)+(e>>>0)+f;
return(a<<c|a>>>32-c)+b
};
h._hh=function(a,b,j,d,e,c,f){a=a+(b^j^d)+(e>>>0)+f;
return(a<<c|a>>>32-c)+b
};
h._ii=function(a,b,j,d,e,c,f){a=a+(j^(b|~d))+(e>>>0)+f;
return(a<<c|a>>>32-c)+b
};
h._blocksize=16;
h._digestsize=16
})();
var adobePassVersion="";
var accessEnablerHelperURL;
var serviceProviders;
var apassHost="sp.auth.adobe.com";
function configureApassEndpoints(){$$$.each($$$("script"),function(k,v){if(v.src&&v.src.match(/(.*)AccessEnabler(.*).js(.*)/)){if(v.src.match(/(.*)-staging.(.*)/)){apassHost="sp.auth-staging.adobe.com"
}}});
accessEnablerHelperURL="https://"+apassHost+"/entitlement/lib/AccessEnablerHelper.html";
serviceProviders=["https://"+apassHost+"/adobe-services"];
LOG.info("Running against: "+apassHost)
}LOG={info:function(){this.log("INFO",arguments)
},error:function(){this.log("ERROR",arguments)
},warn:function(){this.log("WARN",arguments)
},log:function(){if(typeof window.console!="undefined"&&typeof window.console.log!="undefined"){console.log(arguments[0]+" - "+args2array(arguments[1]).join(" "))
}}};
function parseErrorResponse(jqXHR){var err;
var details;
if(("code" in jqXHR)&&("message" in jqXHR)){err=jqXHR
}else{if(jqXHR.status==400){storageManager.clearAll();
err={code:Strings.GENERIC_AUTHORIZATION_ERROR,message:jqXHR.statusText}
}else{if(jqXHR.responseText){details=jqXHR.responseText.split("details")[1];
if(details&&details.length>2){details=details.substring(1,details.length-2)
}err={code:Strings.USER_NOT_AUTHORIZED_ERROR,message:details}
}else{err={code:Strings.GENERIC_AUTHORIZATION_ERROR,message:""}
}}}return err
}function fixargs(){var args={};
$$$.each(arguments[0],function(i,v){args[i]=v
});
return args
}function args2array(){var args=[];
$$$.each(arguments[0],function(i,v){args.push(v)
});
return args
}function jsdate(jdate){return Date.parse(jdate)
}function processResult(result){if($$$.isArray(result)||$$$.isPlainObject(result)){$$$.each(result,function(index,value){result[index]=processResult(value)
})
}else{if(result=="null"){result=null
}}return result
}function findSocialNetworkById(socialNetworks,idToFind){var retVal=null;
for(var i=0;
i<socialNetworks.length;
i++){var socialNetwork=socialNetworks[i];
if(idToFind==socialNetwork.ID()){retVal=socialNetwork;
break
}}return retVal
}function intersectArrays(firstArray,secondArray){var a=firstArray.concat().sort();
var b=secondArray.concat().sort();
var ai=0,bi=0;
var result=new Array();
while(ai<a.length&&bi<b.length){if(a[ai]<b[bi]){ai++
}else{if(a[ai]>b[bi]){bi++
}else{result.push(a[ai]);
ai++;
bi++
}}}return result
}function uniqueValues(parArray){var result=new Array();
$$$.each(parArray,function(i,str){if(result.indexOf(str)<0){result.push(str)
}});
return result
}function createHiddenIframe(name,url){var iframeSelector="iframe[name="+name+"]";
if(!$$$(iframeSelector).length){var hiddenIframe=$$$("<iframe />",{name:name,style:"display:none",src:url});
hiddenIframe.appendTo("body")
}else{$$$(iframeSelector).attr("src",url)
}}function isIE(){var ie10AndBelow=$$$.browser.msie;
var ie11AndAbove=!!(navigator.userAgent.match(/Trident/)&&!navigator.userAgent.match(/MSIE/));
return ie10AndBelow||ie11AndAbove
}function isCookieSet(name){return document.cookie.indexOf(name)!=-1
}function removeCookie(name,domain){document.cookie=name+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path="+(domain?domain:"/")
}var Strings={SERVER_API_TOO_OLD:"API version too old. Please update your application.",USER_AUTHENTICATED:"User Authenticated",USER_NOT_AUTHENTICATED_ERROR:"User Not Authenticated Error",GENERIC_AUTHENTICATION_ERROR:"Generic Authentication Error",USER_NOT_AUTHORIZED_ERROR:"User not Authorized Error",GENERIC_AUTHORIZATION_ERROR:"Generic Authorization Error",USER_NOT_AUTHORIZED_NETWORK_ERROR:"A network error occured when communicating with the provider's authorization service",PROVIDER_NOT_SELECTED_ERROR:"Provider not Selected Error",PROVIDER_ALREADY_AUTHENTICATED:"You are already authenticated with this Provider",PROVIDER_NOT_AVAILABLE_ERROR:"Provider not Available Error",TRACK_AUTHORIZATION_DETECTION:"authorizationDetection",TRACK_AUTHENTICATION_DETECTION:"authenticationDetection",TRACK_MVPD_SELECTION:"mvpdSelection",USER_DECLINED_SOCIAL:"User Declined Social Authentication",USER_NOT_AUTHENTICATED_SOCIAL_ERROR:"User Not Authenticated with Social Network Error",BACKGROUND_LOGIN_IE_COOKIE:"apass-ie-background-login-cookie"};
var ServiceProvider=function(spURL,requestorID){var LOGOUT_URL="/logout?",AUTHENTICATE_URL="/authenticate/saml?",PREAUTHORIZE_URL="/preauthorize",AUTHN_TOKEN_URL="/session",AUTHZ_TOKEN_URL="/authorize",MEDIA_TOKEN_URL="/shortAuthorize",DEVICE_ID_URL="/getMetadata",USER_METADATA_URL="/usermetadata",PASSIVE_AUTHN_REDIRECT_URL="/completePassiveAuthentication",BACKGROUND_LOGIN_REDIRECT_URL="/completeBackgroundLogin",BACKGROUND_LOGOUT_REDIRECT_URL="/completeBackgroundLogout";
this.goToLoginPage=function(mvpd,regCode,returnURL,extraParameters,socialNetworkId,socialAuthnResponse){var isBackgroundLogin=clientInfo&&clientInfo.isBackgroundLogin();
var authURL=this.getLoginPageUrl(false,mvpd,regCode,extraParameters,socialNetworkId,socialAuthnResponse,(isBackgroundLogin&&!mvpd.tempPass));
if(isBackgroundLogin){returnURL=spURL+BACKGROUND_LOGIN_REDIRECT_URL
}if(isBackgroundLogin&&mvpd.tempPass){$$$.ajax({url:authURL,data:{iframe_required:true,redirect_url:"about:blank"},complete:completeBackgroundLogin})
}else{if(mvpd.iFrameRequired){callCallback("openIFrame",authURL,mvpd.iFrameWidth,mvpd.iFrameHeight,returnURL)
}else{callCallback("navigateToURL",authURL,returnURL,isBackgroundLogin)
}}};
this.getLoginPageUrl=function(isPassive,mvpd,regCode,extraParameters,socialNetworkId,socialAuthnResponse,noIframe){var params={noflash:true,mso_id:mvpd.id,requestor_id:requestorID};
if(regCode){params.reg_code=regCode
}if(extraParameters){params.generic_data=extraParameters
}params.no_iframe=noIframe?"true":"false";
params.domain_name="adobe.com";
if(isPassive){params.passive="true";
params.redirect_url=spURL+PASSIVE_AUTHN_REDIRECT_URL
}if(clientInfo&&clientInfo.isIFrameRequiredForMvpd(mvpd.id)!==null){params.iframe_required=clientInfo.isIFrameRequiredForMvpd(mvpd.id)
}if(inSocialWorkflow(socialNetworkId,socialAuthnResponse)){params=addSocialParams(params,socialNetworkId,socialAuthnResponse);
mvpdLoginAttemptedFlag.attemptingLogin()
}params=addExtraParams(params);
return spURL+AUTHENTICATE_URL+$$$.param(params)
};
this.retrieveAuthenticationToken=function(okHandler,errorHandler){$$$.ajax({type:"POST",url:spURL+AUTHN_TOKEN_URL,data:{_method:"GET",requestor_id:requestorID},success:okHandler,error:errorHandler,beforeSend:setHeaders})
};
this.retrieveAuthorizationToken=function(resourceID,extraParameters,okHandler,errorHandler){this.resourceID=resourceID;
var token=storageManager.getAuthenticationToken();
if(token&&token.isValid()&&spURL){$$$.ajax({type:"POST",url:spURL+AUTHZ_TOKEN_URL,data:{resource_id:resourceID,requestor_id:requestorID,authentication_token:token.getSource(),mso_id:mvpdManager.getCurrentMVPD(),generic_data:extraParameters,userMeta:1},context:this,success:okHandler,error:errorHandler,beforeSend:deviceID.setHeaders,dataType:"text"})
}else{errorHandler.call(this,{code:Strings.USER_NOT_AUTHENTICATED_ERROR,message:""},null,null)
}};
this.retrieveMediaToken=function(resourceID,okHandler,errorHandler){this.resourceID=resourceID;
var authzToken=storageManager.getAuthorizationToken(resourceID);
var authnToken=storageManager.getAuthenticationToken();
if(spURL){$$$.ajax({type:"POST",url:spURL+MEDIA_TOKEN_URL,data:{authz_token:authzToken.getSource(),requestor_id:requestorID,session_guid:authnToken.getProperty("simpleTokenAuthenticationGuid"),hashed_guid:"false"},context:this,success:okHandler,error:errorHandler,beforeSend:setHeaders,dataType:"text"})
}else{callbackManager.onErrorHandler(Errors.N000);
errorHandler.call(this,{code:Strings.USER_NOT_AUTHENTICATED_ERROR,message:""},null,null)
}};
this.retrieveDeviceIDHash=function(okHandler,errorHandler){var authnToken=storageManager.getAuthenticationToken();
var device_id=authnToken.getProperty("simpleTokenDeviceID");
if(requestorID){$$$.ajax({type:"POST",url:spURL+DEVICE_ID_URL,data:{requestor_id:requestorID,device_id:device_id},context:this,success:okHandler,error:errorHandler,beforeSend:setHeaders})
}else{okHandler(null)
}};
this.retrieveEncryptedMetadata=function(userMetadata,okHandler,errorHandler){var authnToken=storageManager.getAuthenticationToken();
if(requestorID&&authnToken){$$$.ajax({type:"POST",url:spURL+USER_METADATA_URL,data:{requestor:requestorID,authn:authnToken.getSource(),metadata:JSON.stringify(userMetadata)},context:this,success:okHandler,error:errorHandler,beforeSend:setHeaders})
}else{errorHandler(null)
}};
this.checkPreauthorizedResources=function(resourceArray){var token=storageManager.getAuthenticationToken();
if(token&&token.isValid()&&spURL){$$$.ajax({type:"POST",url:spURL+PREAUTHORIZE_URL,data:{authentication_token:token.getSource(),requestor_id:requestorID,resource_id:resourceArray,noflash:true},context:this,success:onPreauthorizationComplete,error:onPreauthorizationError,beforeSend:setHeaders,traditional:true})
}};
function onPreauthorizationComplete(data){var RESOURCE_ID="id";
var RESOURCE_AUTHORIZED="authorized";
var RESOURCE="resource";
var preauthorizationCache=[];
var preauthorizedResourcesResponseDocument=$$$(data);
if(preauthorizedResourcesResponseDocument){var resourceNodes=$$$(RESOURCE,preauthorizedResourcesResponseDocument);
resourceNodes.each(function(){preauthorizationCache.push({id:$$$(this).find(RESOURCE_ID).text(),authorized:($$$(this).find(RESOURCE_AUTHORIZED).text().toLowerCase()==="true")})
})
}storageManager.setPreauthorizationCache(preauthorizationCache);
callCallback("preauthorizedResources",getAuthorizedResourcesFromPreauthorizationCache())
}function onPreauthorizationError(){LOG.warn("/preauthorize call failed - returning empty preauthorizedResources array");
var preauthorizedResources=new Array();
callCallback("preauthorizedResources",preauthorizedResources)
}this.logout=function(token){var backgroundLogout=clientInfo&&clientInfo.isBackgroundLogout();
if(token&&spURL){var params={noflash:true,mso_id:token.getMVPDID(),requestor_id:requestorID,name_id:token.getProperty("simpleSamlNameID"),session_index:token.getProperty("simpleSamlSessionIndex")};
params=addExtraParams(params);
var logoutUrl=spURL+LOGOUT_URL;
if(backgroundLogout){params.redirect_url=spURL+BACKGROUND_LOGOUT_REDIRECT_URL;
doBackgroundLogout(logoutUrl+$$$.param(params))
}else{callCallback("navigateToURL",logoutUrl+$$$.param(params),null,null)
}}else{if(backgroundLogout){completeBackgroundLogout()
}else{callCallback("reload")
}}};
function inSocialWorkflow(socialNetworkId,socialAuthnResponse){return socialNetworkId&&socialNetworkId.length>0&&socialAuthnResponse&&socialAuthnResponse.getAuthenticated()
}function addSocialParams(params,socialNetworkId,socialAuthnResponse){params.social_network_id=socialNetworkId;
params.social_id=socialAuthnResponse.getUserId();
params.social_authn=socialAuthnResponse.getAuthnToken();
return params
}function addExtraParams(params){if(clientInfo&&clientInfo.getXbox()!=null){params.xbox=clientInfo.getXbox()
}return params
}};
var PendingCall=function(thisArg,fn,args){var params=new Array();
if(args){params=$$$.isArray(args)?args:[args]
}this.execute=function(){result=fn.apply(thisArg,params);
return result
}
};
var Configuration=function(reqID,callSetConfig){this.initialized=false;
this.authenticationProviderURL=null;
var numConfigCalls;
var validRequestor=false;
var socialNetworks=[];
var configForProgrammer=null;
var currentSp=null;
var instance=this;
this.initialize=function(spURLs){if(spURLs&&$$$.isArray(spURLs)){window.serviceProviders=spURLs
}numConfigCalls=serviceProviders.length;
$$$.each(serviceProviders,function(index,value){$$$.ajax({async:false,cache:false,url:value+"/config/"+reqID+"?"+$$$.param({noflash:true}),type:"GET",success:onConfig,error:onConfig,beforeSend:setHeaders,dataType:"xml"})
})
};
this.isValidRequestor=function(){return validRequestor
};
this.getSocialNetworks=function(){return socialNetworks
};
this.getConfigForProgrammer=function(){return configForProgrammer
};
function onConfig(data,status){if(data!=undefined&&data.status!=undefined&&data.status!=200){callbackManager.onErrorHandler(Errors.buildError(Errors.PREFIX_CFG+data.status));
if(data.status=="410"){callCallback("setAuthenticationStatus",0,Strings.SERVER_API_TOO_OLD);
return
}}if(checkPendingLogout(data)){ditchTokens()
}if(status=="success"){validRequestor=true
}var serverTime;
if($$$("time",data)){serverTime=parseInt($$$("time",data).text())
}var currentTime=new Date().getTime();
if(serverTime&&serverTime>0){var drift=currentTime-parseInt(serverTime);
if(drift>59000||drift<-59000){callbackManager.onErrorHandler(Errors.CFG100)
}}if(deviceInfo.deviceType===""){var deviceType=$$$("device",data);
if(deviceType){deviceInfo.deviceType=deviceType.text()
}}if(deviceInfo.clientType===""){var clientType=$$$("clientType",data);
if(clientType){deviceInfo.clientType=clientType.text()
}}if(deviceInfo.os===""){var os=$$$("os",data);
if(os){deviceInfo.os=os.text()
}}var spURI=this.url?this.url:null;
var sp=$$$.grep(serviceProviders,function(serviceProvider){return(spURI.substring(0,serviceProvider.length)===serviceProvider)
});
currentSp=(sp.length>0)?sp[0]:"";
var configParser=new ConfigParser(data);
socialNetworks=configParser.getSocialNetworks();
var mvpds=configParser.getMvpds();
if(callSetConfig){configForProgrammer=configParser.getConfigForProgrammer()
}for(var i=0;
i<mvpds.length;
i++){mvpds[i].serviceProvider=currentSp
}mvpdManager.addMvpds(mvpds);
--numConfigCalls;
var pa=$$$("pendingAuthentication",data);
if(pa&&pa.text()=="true"&&!instance.authenticationProviderURL){instance.retrieveAuthenticationToken()
}else{instance.completeInitialization()
}}this.retrieveAuthenticationToken=function(){if(!instance.authenticationProviderURL){instance.authenticationProviderURL=currentSp
}LOG.info("Pending authentication detected...");
var service=new ServiceProvider(instance.authenticationProviderURL,requestorID);
service.retrieveAuthenticationToken(authnSuccess,authnError)
};
this.completeInitialization=function(){if(numConfigCalls==0&&!instance.authenticationProviderURL){LOG.info("Configuration INITIALIZED");
$$$(instance).triggerHandler("configInit")
}};
this.resetAuthenticationProviderURL=function(){instance.authenticationProviderURL=null
}
};
var Token=function(source){var resourceID=null;
var xmlData=stringToXML(source.split("<signatureInfo>")[2]);
this.getSource=function(){return source
};
this.getExpiryDate=function(){var expires=jsdate(this.getProperty("simpleTokenExpires"));
if(expires){expires=new Date(expires).getTime()
}else{var ttl;
var issueTime=jsdate(this.getProperty("issueTime"));
if(issueTime){ttl=this.getProperty("ttl");
expires=parseInt(new Date(issueTime).getTime())+ttl
}else{ttl=this.getProperty("simpleTokenTTL");
if(ttl){expires=new Date(jsdate(ttl)).getTime()
}else{throw {message:"Invalid token format."}
}}}return expires
};
this.isValid=function(){try{var isValid=true;
var expires=this.getExpiryDate();
var now=new Date().getTime();
isValid&=(now<=expires);
if(isValid&&this.isAuthZAll()){isValid&=(requestorID===this.getRequestorID())
}return isValid
}catch(error){LOG.error(error.message);
return false
}};
this.isAuthZAll=function(){var zAllString=this.getProperty("zAll");
return(zAllString==="true")
};
this.getProperty=function(property){return $$$(property,xmlData).text()
};
this.getRequestorID=function(){return this.getProperty("simpleTokenRequestorID")
};
this.getResourceID=function(){return this.getProperty("simpleTokenResourceID")
};
this.getMVPDID=function(){return this.getProperty("simpleTokenMsoID")
};
this.getSubMVPDID=function(){return this.getProperty("simpleTokenSubMvpdID")
};
this.getAuthorizedResources=function(){LOG.info("Entered - Token::getAuthorizedResources()");
var authorizedResources=new Array(0);
if(xmlData){var authorizedResourceXML=xmlData.getElementsByTagName("simpleAuthorizedResource");
authorizedResources=new Array(authorizedResourceXML.length);
for(var i=0;
i<authorizedResources.length;
i++){var thisResource=new AuthorizedResource(authorizedResourceXML[i]);
authorizedResources[i]=thisResource
}}return authorizedResources
};
function stringToXML(string){var xmlDoc;
if(string){if(window.DOMParser){var parser=new DOMParser();
xmlDoc=parser.parseFromString(string,"text/xml")
}else{xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
xmlDoc.async="false";
xmlDoc.loadXML(string)
}}return xmlDoc
}};
var AuthorizedResource=function(xmlElement){this.xmlElement=xmlElement;
this.getAuthorizedResourceID=function(){LOG.info("Entered - AuthorizedResource::getAuthorizedResourceID()");
return xmlElement?xmlElement.getAttribute("simpleResourceID"):null
}
};
var StorageManager=function(session){var AUTHN_TOKEN="authenticationToken";
var USER_METADATA="userMeta";
var MVPD="mvpd";
var CAN_AUTHN="canAuthenticate";
var AUTHZ_TOKEN="authorizationToken";
var XBOX_AUTHN_TOKEN="xboxAuthenticationToken";
var XBOX_MVPD="xboxMvpd";
var XBOX_CAN_AUTHN="xboxCanAuthenticate";
var PREAUTHORIZATION_CACHE="preauthorizationCache";
var GENERIC_REQUESTOR="GenericRequestor";
this.EMPTY_TOKEN={authenticationToken:[],authorizationToken:[],userMeta:{},mvpd:null,canAuthenticate:false,xboxAuthenticationToken:null,xboxMvpd:null,xboxCanAuthenticate:false,preauthorizationCache:[]};
var sessionType=session;
var _localStorage=localStorage;
var _sessionStorage=sessionStorage;
if(!StorageManager.available(localStorage)){LOG.warn("WebStorage not available, using volatile storage!");
StorageManager.error=Errors.LS011;
_localStorage={data:{},setItem:function(key,value){this.data[key]=value
},getItem:function(key){return this.data[key]
},removeItem:function(key){delete this.data[key]
}};
_sessionStorage=_localStorage
}var _storage=session?_sessionStorage:_localStorage;
var entitlementToken={};
var EMPTY_TOKEN=this.EMPTY_TOKEN;
load();
function fixMakeAuthenticationTokenArray(){if(!$$$.isArray(entitlementToken[getAuthnTokenKey()])){var tokenArray=new Array();
if(entitlementToken[getAuthnTokenKey()]){tokenArray.push(entitlementToken[getAuthnTokenKey()])
}entitlementToken[getAuthnTokenKey()]=tokenArray
}}this.getStorageData=function(){return[_localStorage.getItem("entitlementToken"),_sessionStorage.getItem("entitlementToken")]
};
function getEmptyToken(){return $$$.extend(true,{},EMPTY_TOKEN)
}function load(){try{entitlementToken=JSON.parse(_storage.getItem("entitlementToken"))
}catch(err){LOG.info("Invalid storage content.")
}if($$$.isEmptyObject(entitlementToken)){entitlementToken=getEmptyToken();
save()
}fixMakeAuthenticationTokenArray();
if(!validateStorage()){clearAllInternal(true)
}}function validateStorage(){var isValid=false;
if(isXbox()){isValid=entitlementToken&&entitlementToken.hasOwnProperty(XBOX_AUTHN_TOKEN)&&entitlementToken.hasOwnProperty(XBOX_MVPD)&&entitlementToken.hasOwnProperty(XBOX_CAN_AUTHN)
}else{isValid=entitlementToken&&entitlementToken.hasOwnProperty(AUTHN_TOKEN)&&entitlementToken.hasOwnProperty(MVPD)&&entitlementToken.hasOwnProperty(CAN_AUTHN)&&entitlementToken.hasOwnProperty(AUTHZ_TOKEN)
}return isValid
}function clearAllInternal(clearAllAuthTokens){entitlementToken[getMVPDKey()]=null;
entitlementToken[getCanAuthnKey()]=false;
if(clearAllAuthTokens){entitlementToken[getAuthnTokenKey()]=null;
entitlementToken[USER_METADATA]={}
}if(!isXbox()){entitlementToken[AUTHZ_TOKEN]=[]
}save()
}function save(){_storage.removeItem("entitlementToken");
_storage.setItem("entitlementToken",JSON.stringify(entitlementToken));
LOG.info(entitlementToken)
}this.getStorage=function(){return _storage
};
this.getStorageType=function(){return(sessionType?"session":"local")
};
this.setToSessionStorage=function(){if(!sessionType){LOG.info("Changing the StorageManager to work with SessionStorage.");
load();
_localStorage.removeItem("entitlementToken");
_localStorage.setItem("entitlementToken",JSON.stringify(EMPTY_TOKEN));
_storage=_sessionStorage;
save();
sessionType=true;
_localStorage.removeItem("storageType");
_localStorage.setItem("storageType","session")
}};
this.setToLocalStorage=function(){if(sessionType){LOG.info("Changing the StorageManager to work with LocalStorage.");
load();
_sessionStorage.removeItem("entitlementToken");
_sessionStorage.setItem("entitlementToken",JSON.stringify(EMPTY_TOKEN));
_storage=_localStorage;
save();
sessionType=false;
_localStorage.removeItem("storageType");
_localStorage.setItem("storageType","local")
}};
this.setAuthenticationToken=function(token){load();
if(token instanceof Token){var tokens=entitlementToken[getAuthnTokenKey()];
for(var i=0,len=tokens.length;
i<len;
i++){var currentToken=new Token(tokens[i]);
if(currentToken.getRequestorID()===token.getRequestorID()){tokens.splice(i,1)
}}tokens.push(token.getSource());
save()
}};
this.getUserMetadata=function(){load();
var result=null;
var mvpdID=this.getMVPD();
if(mvpdID){var mvpd=mvpdManager.getMVPDByID(mvpdID);
if(mvpd){var userMetadataTokens=entitlementToken[USER_METADATA];
if(userMetadataTokens){result=mvpd.authPerAggregator?userMetadataTokens[requestorID]:userMetadataTokens[GENERIC_REQUESTOR]
}}}return result
};
this.mergeUserMetadata=function(update){var userMetadata=this.getUserMetadata();
try{var updateMeta=JSON.parse(update);
var updatedNew=parseInt(updateMeta.updated),updatedOld=parseInt(userMetadata.updated);
if(updatedOld<updatedNew&&updateMeta.data){try{userMetadata.updated=updatedNew;
var newData=updateMeta.data;
for(var key in newData){if(newData.hasOwnProperty(key)){userMetadata.data[key]=newData[key]
}}this.setUserMetadata(JSON.stringify(userMetadata))
}catch(e){LOG.warn("Error merging user metadata tokens.");
this.setUserMetadata(update)
}}else{LOG.warn("The metadata token received from the server has invalid properties.")
}}catch(e){LOG.warn("The metadata token received from the server cannot be parsed.")
}};
this.setUserMetadata=function(userMeta){if(requestorID){load();
try{if(!entitlementToken[USER_METADATA]){entitlementToken[USER_METADATA]={}
}var mvpdID=this.getMVPD();
if(mvpdID){var mvpd=mvpdManager.getMVPDByID(mvpdID);
if(mvpd){var newUserMetadata=JSON.parse(userMeta);
var requestorKey=mvpd.authPerAggregator?requestorID:GENERIC_REQUESTOR;
entitlementToken[USER_METADATA][requestorKey]=newUserMetadata;
save()
}else{LOG.warn("Cannot set user metadata token: invalid MVPD selected.")
}}else{LOG.warn("Cannot set user metadata token: no MVPD selected.")
}}catch(e){LOG.error(e)
}}else{LOG.warn("Cannot set user metadata: requestor is not configured.")
}};
this.setCanAuthenticate=function(ok){entitlementToken[getCanAuthnKey()]=Boolean(ok);
save()
};
this.getCanAuthenticate=function(){load();
return Boolean(entitlementToken[getCanAuthnKey()])
};
this.getAuthenticationToken=function(){load();
var result=null;
var mvpdID=this.getMVPD();
if(mvpdID){var authnTokenKey=getAuthnTokenKey();
var mvpd=mvpdManager.getMVPDByID(mvpdID);
if(mvpd){if(mvpd.authPerAggregator){result=searchAuthenticationToken(requestorID)
}else{result=(entitlementToken[authnTokenKey].length>0)?new Token(entitlementToken[authnTokenKey][0]):null
}}}return result
};
this.getSAMLNameID=function(){var token=getFirstAuthenticationToken();
var result=token?token.getProperty("simpleSamlNameID"):null;
return result
};
this.getSAMLSessionIndex=function(){var token=getFirstAuthenticationToken();
var result=token?token.getProperty("simpleSamlSessionIndex"):null;
return result
};
function getFirstAuthenticationToken(){var tokens=entitlementToken[AUTHN_TOKEN];
var token=tokens.length>0?new Token(tokens[0]):null;
return(token&&token.isValid())?token:null
}function searchAuthenticationToken(requestorID){for(var i=0,tokenArray=entitlementToken[getAuthnTokenKey()],len=tokenArray.length;
i<len;
i++){var currentToken=new Token(tokenArray[i]);
if(currentToken.getRequestorID()===requestorID){return currentToken
}}return null
}this.setAuthorizationToken=function(token){load();
if(token instanceof Token){var tokens=entitlementToken[AUTHZ_TOKEN];
var aToken;
if($$$.isArray(tokens)){for(var i=0;
i<tokens.length;
i++){aToken=new Token(tokens[i]);
if(aToken.getResourceID()==token.getResourceID()){tokens.splice(i,1)
}}tokens.push(token.getSource());
save()
}}};
this.getAuthorizationToken=function(resourceID){load();
var token=null;
var tokens=entitlementToken[AUTHZ_TOKEN];
var aToken;
for(var key in tokens){aToken=new Token(tokens[key]);
if(aToken.getResourceID()==resourceID){token=aToken;
break
}}return token
};
this.getMVPD=function(){load();
return entitlementToken[getMVPDKey()]
};
this.setMVPD=function(id){if(this.getMVPD()!=id){entitlementToken[getMVPDKey()]=String(id);
save()
}};
this.getAnyValidAuthenticationTokenForCurrentMvpd=function(){var currentMVPD=this.getMVPD();
if(currentMVPD==null){return null
}for(var i=0,tokenArray=entitlementToken[getAuthnTokenKey()],len=tokenArray.length;
i<len;
i++){var currentToken=new Token(tokenArray[i]);
if(currentToken.getMVPDID()===currentMVPD&&currentToken.isValid()){return currentToken
}}return null
};
this.getPreauthorizationCache=function(){load();
return entitlementToken[PREAUTHORIZATION_CACHE]
};
this.setPreauthorizationCache=function(preauthorizationCacheArray){entitlementToken[PREAUTHORIZATION_CACHE]=preauthorizationCacheArray.concat();
save()
};
this.clearMVPD=function(){entitlementToken[getMVPDKey()]=null;
save()
};
this.clearAuthenticationToken=function(){entitlementToken[getAuthnTokenKey()]=null;
save()
};
this.clearAll=function(clearAllAuthTokens){clearAllInternal(typeof(clearAllAuthTokens)==="undefined"||clearAllAuthTokens)
};
this.clearAllForAllWorkflows=function(){entitlementToken=getEmptyToken();
save()
};
function isXbox(){return clientInfo&&clientInfo.getXbox()!=null
}this.isXbox=isXbox;
function getMVPDKey(){return isXbox()?XBOX_MVPD:MVPD
}function getCanAuthnKey(){return isXbox()?XBOX_CAN_AUTHN:CAN_AUTHN
}function getAuthnTokenKey(){return isXbox()?XBOX_AUTHN_TOKEN:AUTHN_TOKEN
}};
StorageManager.available=function(storage){try{storage.setItem("canWrite","test");
storage.removeItem("canWrite");
storage.setItem("canWrite","yes");
return storage.getItem("canWrite")==="yes"
}catch(e){return false
}};
var MVPDManager=function(){var mvpds={};
this.getCurrentMVPD=function(){return storageManager.getMVPD()
};
this.getCurrentSP=function(){var result=null;
var mvpdID=this.getCurrentMVPD();
if(mvpdID){var mvpd=this.getMVPDByID(mvpdID);
if(mvpd){result=this.getMVPDByID(mvpdID).serviceProvider
}}return result
};
this.setCurrentMVPD=function(mvpdID){this.switchToCurrentMVPDStorage(mvpdID);
storageManager.clearAll(mvpdID!==storageManager.getMVPD());
storageManager.setMVPD(mvpdID)
};
this.switchToCurrentMVPDStorage=function(mvpdID){var mvpd=this.getMVPDByID(mvpdID);
if(mvpd&&mvpd.authPerBrowserSession){storageManager.setToSessionStorage()
}else{storageManager.setToLocalStorage()
}};
this.getRequestorMVPDs=function(){return mvpds
};
this.clearRequestorMVPDs=function(){mvpds={}
};
this.addMvpds=function(newMVPDs){if(newMVPDs&&newMVPDs.length>0){$$$.each(newMVPDs,function(index,newMVPD){if(!mvpds.hasOwnProperty(newMVPD.id)){mvpds[newMVPD.id]=newMVPD
}})
}};
this.getMVPDByID=function(id){if(!mvpds||mvpds.length==0){return null
}if(mvpds.hasOwnProperty(id)){return mvpds[id]
}return null
};
this.isValidMVPD=function(id){var requestorMVPD=this.getMVPDByID(id);
return requestorMVPD?requestorMVPD.id==id:false
}
};
var deviceID={deviceInfo:{ap_42:navigator.vendor?navigator.vendor:"anonymous",ap_11:navigator.platform,ap_z:navigator.userAgent},setHeaders:function(xhr){xhr.withCredentials=true;
for(key in deviceID.deviceInfo){xhr.setRequestHeader(key,deviceID.deviceInfo[key])
}}};
var Metadata={getValue:function(key,args){if(this.VALUES.hasOwnProperty(key)){this.VALUES[key].getValue.apply(this.VALUES[key],args)
}else{function isMetadataValid(userMetadata){return userMetadata&&userMetadata.data&&userMetadata.updated
}try{var metadataFromStorage=storageManager.getUserMetadata();
var metadataFromCache=this.CACHE;
if(!key){callCallback("setMetadataStatus",key,null,null);
return
}if(isMetadataValid(metadataFromStorage)){if(isMetadataValid(metadataFromCache)&&metadataFromCache.updated>=metadataFromStorage.updated){var metadataValue=metadataFromCache.data[key];
var encrypted=metadataValue?(metadataFromCache.encrypted&&$$$.inArray(key,metadataFromCache.encrypted)>-1):null;
callCallback("setMetadataStatus",key,encrypted,metadataValue)
}else{var spURL=mvpdManager.getCurrentSP();
var service=new ServiceProvider(spURL,requestorID);
var outerObject=this;
function encryptedMetadataOkHandler(response){try{outerObject.CACHE=$$$.extend(true,{},response);
metadataValue=response&&response.data&&response.data[key]?response.data[key]:null;
encrypted=response&&response.encrypted&&$$$.inArray(key,response.encrypted)>-1;
callCallback("setMetadataStatus",key,metadataValue!=null?encrypted:null,metadataValue)
}catch(e){LOG.error(e);
callCallback("setMetadataStatus",key,null,null)
}}function encrytpedMetadataErrorHandler(){callCallback("setMetadataStatus",key,null,null)
}service.retrieveEncryptedMetadata(metadataFromStorage,encryptedMetadataOkHandler,encrytpedMetadataErrorHandler)
}}else{callCallback("setMetadataStatus",key,null,null)
}}catch(e){callCallback("setMetadataStatus",key,null,null)
}}},CACHE:null,VALUES:{TTL_AUTHN:{getValue:function(){var result=null;
var token=storageManager.getAuthenticationToken();
if(token&&token.isValid()){result=token.getExpiryDate()
}callCallback("setMetadataStatus","TTL_AUTHN",null,result)
}},TTL_AUTHZ:{getValue:function(){var result=null;
var resourceID=arguments[0]?arguments[0]:null;
if(resourceID){var token=storageManager.getAuthorizationToken(resourceID);
if(token&&token.isValid()){result=token.getExpiryDate()
}}var args=Array.prototype.slice.call(arguments,0);
callCallback("setMetadataStatus","TTL_AUTHZ",args,result)
}},DEVICEID:{getValue:function(){var result=null;
if(storageManager.getAuthenticationToken()&&storageManager.getAuthenticationToken().getProperty("simpleTokenDeviceID")!==""){var onDeviceIDHashSuccessful=function(data){if(checkPendingLogout(data)){ditchTokens()
}else{result=data
}callCallback("setMetadataStatus","DEVICEID",null,result)
};
var onDeviceIDHashError=function(data){callCallback("setMetadataStatus","DEVICEID",null,result)
};
var service=new ServiceProvider(serviceProviders[0],requestorID);
service.retrieveDeviceIDHash(onDeviceIDHashSuccessful,onDeviceIDHashError)
}else{callCallback("setMetadataStatus","DEVICEID",null,result)
}}}}};
var ConfigParser=function(rawConfig){var TRUE="true";
var ATTR_VISIBLE="visible";
var VISIBLE_TRUE="true";
var PROG_SOCIAL_NETWORK="socialNetwork";
var PROG_ID="id";
var PROG_LOGO_URL="logoUrl";
var PROG_DISPLAY_NAME="displayName";
var MVPD="mvpd";
var MVPD_ID="id";
var MVPD_LOGO_URL="logoUrl";
var MVPD_DISPLAY_NAME="displayName";
var MVPD_AUTH_PER_AGGREGATOR="authPerAggregator";
var MVPD_PASSIVE_AUTHN="passiveAuthnEnabled";
var MVPD_AUTH_PER_BROWER_SESSION="authPerBrowserSession";
var MVPD_IFRAME_REQUIRED="iFrameRequired";
var MVPD_IFRAME_HEIGHT="iFrameHeight";
var MVPD_IFRAME_WIDTH="iFrameWidth";
var TEMP_PASS="tempPass";
var config=rawConfig;
var socialNetworks=null;
var mvpds=null;
this.getSocialNetworks=function(){if(!socialNetworks){socialNetworks=[];
$$$(PROG_SOCIAL_NETWORK,config).each(function(index){var socialNetwork=$$$(this);
var id=socialNetwork.find(PROG_ID).text();
var displayName=socialNetwork.find(PROG_DISPLAY_NAME).text();
var logoUrl=socialNetwork.find(PROG_LOGO_URL).text();
if(id&&displayName){var newSocialNetwork=new SocialNetworkDescriptor(id,displayName,logoUrl);
socialNetworks.push(newSocialNetwork)
}})
}return socialNetworks
};
this.getMvpds=function(){if(!mvpds){mvpds=[];
function extractMvpdConfig(key,mvpdId,mvpd,isBoolean,defaultValue){var clientInfoMvpdConfig=clientInfo&&clientInfo.getMvpdConfig()?clientInfo.getMvpdConfig():{};
var valueOverriddenByProgrammer=clientInfoMvpdConfig[mvpdId]!==null&&clientInfoMvpdConfig[mvpdId]!==undefined&&clientInfoMvpdConfig[mvpdId][key]!==null&&clientInfoMvpdConfig[mvpdId][key]!==undefined;
var xmlNode=mvpd.find(key);
var value;
if(valueOverriddenByProgrammer){value=clientInfoMvpdConfig[mvpdId][key];
if(xmlNode){xmlNode.text(value)
}return value
}else{value=xmlNode.text();
if((value===null||value===undefined||value==="")&&defaultValue!==undefined){return defaultValue
}return isBoolean?value===TRUE:value
}}$$$(MVPD,config).each(function(index){var mvpd=$$$(this);
var mvpdId=mvpd.find(MVPD_ID).text();
var newMVPD={id:mvpdId,displayName:extractMvpdConfig(MVPD_DISPLAY_NAME,mvpdId,mvpd,false),logoUrl:extractMvpdConfig(MVPD_LOGO_URL,mvpdId,mvpd,false),authPerAggregator:extractMvpdConfig(MVPD_AUTH_PER_AGGREGATOR,mvpdId,mvpd,true),passiveAuthnEnabled:extractMvpdConfig(MVPD_PASSIVE_AUTHN,mvpdId,mvpd,true,true),authPerBrowserSession:extractMvpdConfig(MVPD_AUTH_PER_BROWER_SESSION,mvpdId,mvpd,true),iFrameRequired:extractMvpdConfig(MVPD_IFRAME_REQUIRED,mvpdId,mvpd,true),tempPass:mvpd.find(TEMP_PASS).text().toLowerCase()===TRUE};
if(newMVPD.iFrameRequired){newMVPD.iFrameHeight=extractMvpdConfig(MVPD_IFRAME_HEIGHT,mvpdId,mvpd,false);
newMVPD.iFrameWidth=extractMvpdConfig(MVPD_IFRAME_WIDTH,mvpdId,mvpd,false)
}mvpds.push(newMVPD)
})
}return mvpds
};
this.getConfigForProgrammer=function(){var retVal=null;
if(config&&config.documentElement){var doc=config.documentElement.cloneNode(true);
if(removeNonVisibleNode(doc)){if(typeof window.XMLSerializer!=="undefined"){try{retVal=new XMLSerializer().serializeToString(doc)
}catch(e){retVal=doc.xml
}}else{retVal=doc.xml
}}}return retVal
};
function removeNonVisibleNode(e){var retVal=false;
if(e.getAttribute(ATTR_VISIBLE)==VISIBLE_TRUE){e.removeAttribute(ATTR_VISIBLE);
retVal=true
}else{if(e.hasChildNodes()){retVal=removeNonVisibleChildNodes(e);
if(retVal){removeAttributes(e)
}}}return retVal
}function removeNonVisibleChildNodes(e){var retVal=false;
var children=e.childNodes;
for(var i=0;
i<children.length;
i++){var c=children[i];
if(c.nodeType==1){if(removeNonVisibleNode(c)){retVal=true
}else{e.removeChild(c);
i--
}}}return retVal
}function removeAttributes(e){for(var i=e.attributes.length-1;
i>=0;
i--){var attrNode=e.attributes.item(i);
e.removeAttributeNode(attrNode)
}}};
var StorageWrapper=function(storage){var _storage=storage;
if(!_storage){_storage={data:{},setItem:function(key,value){this.data[key]=value
},getItem:function(key){return this.data[key]
},removeItem:function(key){delete this.data[key]
}}
}this.getItem=function(key){return _storage.getItem(key)
};
this.setItem=function(key,value){this.removeItem(key);
_storage.setItem(key,value)
};
this.removeItem=function(key){_storage.removeItem(key)
}
};
var JSONEncodedStorage=function(storage){var _storage=storage;
this.getItem=function(key){var encodedItem=_storage.getItem(key);
return JSON.parse(encodedItem)
};
this.setItem=function(key,value){_storage.setItem(key,JSON.stringify(value))
};
this.removeItem=function(key){_storage.removeItem(key)
}
};
var Errors={LEVEL_ERROR:"error",LEVEL_WARNING:"warning",LEVEL_INFO:"info",PREFIX_CFG:"CFG",SEC412:{errorId:"SEC412",level:"warning"},CFG100:{errorId:"CFG100",level:"warning",message:"incorrect time"},N000:{errorId:"N000",level:"info",message:"user not authenticated"},N005:{errorId:"N005",level:"info",message:"authentication cancelled"},N500:{errorId:"N500",level:"error"},Z100:function(message,resource){return{errorId:"Z100",level:"error",message:message,resource:resource}
},Z120:function(resource){return{errorId:"Z120",level:"error",message:"network error",resource:resource}
},Z169:function(message,resource){return{errorId:"Z169",level:"error",message:message,resource:resource}
},Z500:{errorId:"Z500",level:"error"},LS011:{errorId:"LS011",level:"warning",message:"using volatile storage"},buildError:function(errorId,level,message,subErrorId,rest){rest=rest?rest:{};
rest.level=level?level:"error";
if(message){rest.message=message
}if(subErrorId){rest.subErrorId=subErrorId
}return $$$.extend({errorId:errorId},rest)
},fromAuthzErrorResponse:function(jqXHR,resource){var errResponse;
if(("code" in jqXHR)&&("message" in jqXHR)){errResponse=jqXHR
}else{if(jqXHR.responseText){var details=jqXHR.responseText.split("details")[1];
if(details&&details.length>2){details=details.substring(1,details.length-2)
}var shortErrorCode=jqXHR.getResponseHeader("Authzf-Error-Code");
errResponse={code:Strings.USER_NOT_AUTHORIZED_ERROR,shortErrorCode:shortErrorCode,message:details}
}}if(errResponse.shortErrorCode=="authzNone"){return Errors.Z169(errResponse.message,resource)
}else{switch(errResponse.code){case Strings.USER_NOT_AUTHORIZED_ERROR:switch(errResponse.message){case Strings.USER_NOT_AUTHORIZED_NETWORK_ERROR:return Errors.Z120(resource);
break;
default:return Errors.Z100(errResponse.message,resource);
break
}break;
case Strings.USER_NOT_AUTHENTICATED_ERROR:return Errors.N000;
break;
default:return Errors.Z500;
break
}}}};
var CallbackManager=function(callbackFacade){var callbackFacade=callbackFacade;
var callbackMap={};
this.bind=function(eventName,callbackName){validate(eventName);
validate(callbackName);
if(!(callbackMap[eventName]&&$$$.isArray(callbackMap[eventName]))){callbackMap[eventName]=[]
}callbackMap[eventName].push(callbackName)
};
this.unbind=function(eventName,callbackName){validate(eventName);
if(callbackName){validate(callbackName)
}if(callbackMap[eventName]&&$$$.isArray(callbackMap[eventName])){if(!callbackName){delete callbackMap[eventName]
}else{var callbackIndex=callbackMap[eventName].indexOf(callbackName);
if(callbackIndex>-1){callbackMap[eventName].splice(callbackIndex,1)
}}}};
this.executeCallbacks=function(eventName,params){if(callbackMap[eventName]&&$$$.isArray(callbackMap[eventName])){$$$.each(callbackMap[eventName],function(k,v){var parm=params?[v].concat(params):[v];
callbackFacade.callCallback.apply(callbackFacade,parm)
})
}};
function validate(input){if(input.length>1024){throw new TypeError("InvalidArgumentError")
}var regExpPattern=/^[0-9a-zA-Z][-._a-zA-Z0-9]*$/;
if(input.match(regExpPattern)==null){throw new TypeError("InvalidArgumentError")
}}this.onErrorHandler=function(error){this.executeCallbacks("errorEvent",error)
}
};
var ClientInfo=function(configValue){var XBOX_KEY="xbox",CALL_SET_CONFIG_KEY="callSetConfig",BACKGROUND_LOGIN_KEY="backgroundLogin",BACKGROUND_LOGOUT_KEY="backgroundLogout",MVPD_CONFIG_KEY="mvpdConfig",IFRAME_REQUIRED_KEY="iFrameRequired",IFRAME_WIDTH_KEY="iFrameWidth",IFRAME_HEIGHT_KEY="iFrameHeight";
var TYPE_STRING="string",TYPE_NUMBER="number",TYPE_BOOLEAN="boolean",TYPE_OBJECT="object";
var GENERIC_PROPERTIES={};
var MVPD_CONFIG_PROPERTIES={};
var values={};
initProperties();
parseClientInfo();
function initProperties(){GENERIC_PROPERTIES[XBOX_KEY]=TYPE_STRING;
GENERIC_PROPERTIES[CALL_SET_CONFIG_KEY]=TYPE_BOOLEAN;
GENERIC_PROPERTIES[BACKGROUND_LOGIN_KEY]=TYPE_BOOLEAN;
GENERIC_PROPERTIES[BACKGROUND_LOGOUT_KEY]=TYPE_BOOLEAN;
GENERIC_PROPERTIES[MVPD_CONFIG_KEY]=TYPE_OBJECT;
MVPD_CONFIG_PROPERTIES[IFRAME_REQUIRED_KEY]=TYPE_BOOLEAN;
MVPD_CONFIG_PROPERTIES[IFRAME_WIDTH_KEY]=TYPE_NUMBER;
MVPD_CONFIG_PROPERTIES[IFRAME_HEIGHT_KEY]=TYPE_NUMBER
}function parseClientInfo(){if(!configValue){return
}$$$.each(GENERIC_PROPERTIES,function(key,type){if(configValue.hasOwnProperty(key)){if(type!==TYPE_OBJECT){parsePrimitiveValue(key,type)
}else{if(key===MVPD_CONFIG_KEY){parseMvpdConfig()
}}}else{values[key]=type===TYPE_BOOLEAN?false:null
}})
}function parsePrimitiveValue(key,type){var value=configValue[key];
if(value===null||value===undefined){return
}value=convertValue(value,type);
LOG.info("Setting property '"+key+"' to value '"+value+"'.");
values[key]=value
}function parseMvpdConfig(){var mvpdConfig=configValue[MVPD_CONFIG_KEY];
if(mvpdConfig===null||mvpdConfig===undefined||$$$.isEmptyObject(mvpdConfig)){return
}var finalMvpdConfig={};
$$$.each(mvpdConfig,function(mvpdId,config){if(config===null||config===undefined||typeof config!==TYPE_OBJECT){return
}var finalConfig={};
$$$.each(config,function(configKey,configValue){if(MVPD_CONFIG_PROPERTIES.hasOwnProperty(configKey)&&configValue!==null&&configValue!==undefined){var type=MVPD_CONFIG_PROPERTIES[configKey];
finalConfig[configKey]=convertValue(configValue,type)
}});
if(!$$$.isEmptyObject(finalConfig)){finalMvpdConfig[mvpdId]=finalConfig
}});
if(!$$$.isEmptyObject(finalMvpdConfig)){values[MVPD_CONFIG_KEY]=finalMvpdConfig
}}function convertValue(value,type){if(type===TYPE_BOOLEAN){return value==="true"
}else{if(type===TYPE_NUMBER){return parseInt(value)
}else{return value
}}}this.callSetConfig=function(){return values[CALL_SET_CONFIG_KEY]
};
this.getXbox=function(){return values[XBOX_KEY]
};
this.isBackgroundLogin=function(){return values[BACKGROUND_LOGIN_KEY]
};
this.isBackgroundLogout=function(){return values[BACKGROUND_LOGOUT_KEY]
};
this.getMvpdConfig=function(){return values[MVPD_CONFIG_KEY]
};
this.isIFrameRequiredForMvpd=function(mvpdId){var mvpdConfig=values[MVPD_CONFIG_KEY];
if(mvpdConfig&&mvpdConfig[mvpdId]&&mvpdConfig[mvpdId][IFRAME_REQUIRED_KEY]!==null&&mvpdConfig[mvpdId][IFRAME_REQUIRED_KEY]!==undefined){return mvpdConfig[mvpdId][IFRAME_REQUIRED_KEY]
}return null
}
};
var SocialNetworkDescriptor=function(id,displayName,logoUrl){var _id=id;
var _displayName=displayName;
var _logoUrl=logoUrl;
this.ID=function(){return _id
};
this.displayName=function(){return _displayName
};
this.logoURL=function(){return _logoUrl
}
};
var FBAuthenticator=function(){var FB_APP_ID="286466974698551";
FBAuthenticator.AUTHN_FAILED="Facebook authentication failed";
FBAuthenticator.INCOMPLETE_AUTHN_RESPONSE="Facebook authn response is missing userID or accessToken";
if(typeof FBAuthenticator.fbSdkInitialized=="undefined"){FBAuthenticator.fbSdkInitialized=false
}var constructSuccessResponse=function(userId,accessToken){return new SocialAuthnResponse(true,userId,accessToken,null)
};
var constructErrorResponse=function(errorMessage){return new SocialAuthnResponse(false,null,null,errorMessage)
};
var constructResponseFromFBAuthResponse=function(authResponse){var retVal=null;
var userId=authResponse.userID;
var accessToken=authResponse.accessToken;
if(userId&&accessToken){retVal=constructSuccessResponse(userId,accessToken)
}else{retVal=constructErrorResponse(FBAuthenticator.INCOMPLETE_AUTHN_RESPONSE)
}return retVal
};
var initFbSdk=function(){if(!FBAuthenticator.fbSdkInitialized){FB.init({appId:FB_APP_ID,status:true,cookie:true,xfbml:true,oauth:true});
FBAuthenticator.fbSdkInitialized=true
}};
var doFacebookLogin=function(onComplete){FB.login(function(fbResponse){var authnResponse=null;
if(fbResponse&&fbResponse.authResponse){authnResponse=constructResponseFromFBAuthResponse(fbResponse.authResponse)
}else{authnResponse=constructErrorResponse(FBAuthenticator.AUTHN_FAILED)
}onComplete(authnResponse)
})
};
var doFBAuthn=function(onComplete){FB.getLoginStatus(function(fbResponse){if(fbResponse&&fbResponse.authResponse){var authnResponse=constructResponseFromFBAuthResponse(fbResponse.authResponse);
onComplete(authnResponse)
}else{doFacebookLogin(onComplete)
}})
};
var initAndDoFBAuthn=function(onComplete){var head=document.getElementsByTagName("head")[0];
if(!document.getElementById("fb-root")){var fbroot=document.createElement("div");
fbroot.id="fb-root";
head.appendChild(fbroot)
}if(typeof FB=="undefined"){var scriptUrl="//connect.facebook.net/en_US/all.js";
$$$.getScript(scriptUrl,function(){initFbSdk();
doFBAuthn(onComplete)
})
}else{initFbSdk();
doFBAuthn(onComplete)
}};
this.authenticateUser=function(onComplete){if(FBAuthenticator.fbSdkInitialized){doFBAuthn(onComplete)
}else{initAndDoFBAuthn(onComplete)
}}
};
var SocialAuthenticatorFactory=function(){var FACEBOOK="FB";
this.createFromSocialNetworkId=function(socialNetworkId){var retVal=null;
if(FACEBOOK==socialNetworkId){retVal=new FBAuthenticator()
}return retVal
}
};
var SocialAuthnResponse=function(authenticated,userId,authnToken,errorMessage){var authenticated=authenticated;
var userId=userId;
var authnToken=authnToken;
var errorMessage=errorMessage;
this.getAuthenticated=function(){return authenticated
};
this.getUserId=function(){return userId
};
this.getAuthnToken=function(){return authnToken
};
this.getErrorMessage=function(){return errorMessage
}
};
var SocialMvpdChoiceResponseParser=function(){var KEY_VALUE_DELIMITER="&";
var MVPD_KEY="MVPDId";
this.parse=function(response){var retVal=null;
if(response){var parsedResponse=response.split(KEY_VALUE_DELIMITER);
while(parsedResponse.length>0){var keyValueStr=parsedResponse.pop();
var keyValuePair=keyValueStr.split("=");
if(keyValuePair.length==2&&keyValuePair[0]==MVPD_KEY){retVal=keyValuePair[1];
break
}}}return retVal
}
};
var SocialMvpdChoiceRetriever=function(baseUrl,socialNetworkId,userId,authnToken){var SOCIAL_BACKEND_SUFFIX="/social/backend";
var _backendUrl=baseUrl+SOCIAL_BACKEND_SUFFIX;
var _socialNetworkId=socialNetworkId;
var _userId=userId;
var _authnToken=authnToken;
this.getMvpdForSocialUser=function(onComplete,onError){$$$.ajax({type:"GET",url:_backendUrl,data:{social_network_id:_socialNetworkId,social_id:_userId,social_authn:_authnToken},success:function(data,textStatus,jqXHR){var parser=new SocialMvpdChoiceResponseParser();
var mvpdId=parser.parse(data);
onComplete(mvpdId)
},error:function(jqXHR,data,errorThrown){onError()
}})
}
};
var SocialPref=function(){var _optedOutOfSocial=false;
var _socialNetworkId=null;
this.getOptedOutOfSocial=function(){return _optedOutOfSocial
};
this.setOptedOutOfSocial=function(optedOutOfSocial){_optedOutOfSocial=optedOutOfSocial
};
this.getSocialNetworkId=function(){return _socialNetworkId
};
this.setSocialNetworkId=function(socialNetworkId){_socialNetworkId=socialNetworkId
}
};
var SocialPrefStorage=function(storage){var STORAGE_ID="socialPref";
var ID_PROP="socialNetworkId";
var OPTED_OUT_PROP="optedOutOfSocial";
var _storage=storage;
var isValidPref=function(rawPref){return rawPref.hasOwnProperty(ID_PROP)&&rawPref.hasOwnProperty(OPTED_OUT_PROP)
};
this.load=function(){var retVal=null;
var rawPref=null;
try{rawPref=_storage.getItem(STORAGE_ID)
}catch(error){this.clear()
}if(rawPref){if(isValidPref(rawPref)){retVal=new SocialPref();
retVal.setSocialNetworkId(rawPref[ID_PROP]);
retVal.setOptedOutOfSocial(rawPref[OPTED_OUT_PROP])
}else{this.clear()
}}return retVal
};
this.store=function(socialPref){var objectToStore={};
objectToStore[ID_PROP]=socialPref.getSocialNetworkId();
objectToStore[OPTED_OUT_PROP]=socialPref.getOptedOutOfSocial();
_storage.setItem(STORAGE_ID,objectToStore)
};
this.clear=function(){_storage.removeItem(STORAGE_ID)
}
};
var SocialPrefCache=function(socialPrefStorage){var _socialPrefStorage=socialPrefStorage;
var _socialPref=_socialPrefStorage.load();
if(!_socialPref){_socialPref=new SocialPref()
}this.getSocialPref=function(){return _socialPref
};
this.setSocialPref=function(socialPref){_socialPref=socialPref
};
this.clear=function(){_socialPref=new SocialPref();
_socialPrefStorage.clear()
};
this.store=function(){_socialPrefStorage.store(_socialPref)
}
};
var SocialMvpdLoginFlag=function(storage){var STORAGE_ID="socialMvpdLoginAttempted";
var TRUE="1";
var _storage=storage;
this.isLoginPending=function(){var retVal=false;
var rawItem=_storage.getItem(STORAGE_ID);
if(rawItem){switch(rawItem){case TRUE:retVal=true;
break;
default:_storage.removeItem(STORAGE_ID);
retVal=false;
break
}}else{retVal=false
}return retVal
};
this.attemptingLogin=function(){_storage.setItem(STORAGE_ID,TRUE)
};
this.loginSucceeded=function(){_storage.removeItem(STORAGE_ID)
}
};
var status;
var message;
var $$$=jQuery.noConflict(true);
try{configureApassEndpoints()
}catch(e){}$$$(function(){configureApassEndpoints()
});
var target_page=decodeURIComponent(document.location.hash.replace(/^#/,""));
var domain_name=target_page.split(/\/+/g)[1];
var target_domain=target_page.split(":")[0]+"://"+domain_name;
var deviceInfo={deviceType:"",clientType:"",os:""};
var methodInvokingAuthorization=null;
var cachedAuthentication=true;
var cachedAuthorization=false;
$$$.receiveMessage(function(message){var messageData=$$$.deparam(message.data);
var methodName=String(messageData[0]);
delete messageData[0];
var messageParams=new Array();
$$$.each(messageData,function(index,value){value=processResult(value);
messageParams.push(value)
});
var fn=window.eval.call(window,methodName);
fn.apply(window,messageParams)
},target_domain);
function addGenericEvent(name,handler){if(window.addEventListener){window.addEventListener(name,handler,false)
}else{window.attachEvent("on"+name,handler)
}}function passiveAuthnHandler(e){if(e&&e.data==="PASSIVE_AUTHN_COMPLETE"){completePassiveAuthentication()
}}addGenericEvent("message",passiveAuthnHandler);
function callCallback(){LOG.info("sending "+arguments[0]+"()");
var message=JSON.stringify({type:"adobepass",payload:fixargs(arguments)});
$$$.postMessage(message,target_page)
}function createSocialPrefCache(){var storageWrapper=new StorageWrapper(localStorage);
var encodedStorage=new JSONEncodedStorage(storageWrapper);
var socialStorage=new SocialPrefStorage(encodedStorage);
return new SocialPrefCache(socialStorage)
}function createMvpdLoginAttemptedFlag(){var storageWrapper=new StorageWrapper(localStorage);
return new SocialMvpdLoginFlag(storageWrapper)
}function setHeaders(xhr){var samlNameID,samlSessionIndex;
if(samlNameID=storageManager.getSAMLNameID()){xhr.setRequestHeader("ap_19",samlNameID)
}if(samlSessionIndex=storageManager.getSAMLSessionIndex()){xhr.setRequestHeader("ap_23",samlSessionIndex)
}deviceID.setHeaders(xhr)
}var requestorID=null;
var redirectURL=null;
var extraParameters=null;
var configuration=null;
var authenticationInProgress=null;
var backgroundLoginInProgress=null;
var backgroundLoginIeTimer=null;
var clientInfo=null;
var registrationCode=null;
var socialPrefCache=createSocialPrefCache();
var rememberSocialPref=false;
var mvpdLoginAttemptedFlag=createMvpdLoginAttemptedFlag();
var socialAuthnResponse=null;
var initialStorageType=StorageManager.available(localStorage)?localStorage.getItem("storageType"):"local";
var useSessionStorage=false;
if(initialStorageType&&initialStorageType=="session"){useSessionStorage=true
}var storageManager=new StorageManager(useSessionStorage);
var mvpdManager=new MVPDManager();
var callbackManager=new CallbackManager(window);
var pendingCalls=[];
var getAuthorizationWasCalled=null;
var resourcePendingAuthorization=null;
var authzPendingExtraParams=null;
function setRequestor(){if(!$$$.isEmptyObject(StorageManager.error)){callbackManager.onErrorHandler(StorageManager.error);
StorageManager.error=null
}var args=(arguments[0]&&$$$.isArray(arguments[0]))?arguments[0]:arguments;
var id=args[0]?args[0]:"";
var serviceURLs=null;
if(!$$$.isArray(args)){args=args2array(args)
}$$$.each(args.slice(1),function(idx,val){if($$$.isArray(val)){serviceURLs=val;
$$$.each(serviceURLs,function(idx,element){if(serviceURLs[idx].indexOf(adobePassVersion)==-1){serviceURLs[idx]+="/"+adobePassVersion
}})
}else{clientInfo=new ClientInfo(val)
}});
Metadata.CACHE=null;
if(storageManager.isXbox()){LOG.info("XBOX flow activated: start by clearing the clear XBOX tokens.");
storageManager.clearAll()
}else{LOG.info("XBOX flow disabled.")
}requestorID=String(id);
LOG.info("processing setRequestor("+requestorID+","+serviceURLs+")");
mvpdManager.clearRequestorMVPDs();
configuration=new Configuration(requestorID,clientInfo!=null?clientInfo.callSetConfig():false);
$$$(configuration).bind("configInit",onConfigurationInitialized);
configuration.initialize(serviceURLs)
}function bind(args){var eventName=$$$.isArray(args)?args[0]:args;
var closureName=$$$.isArray(args)?args[1]:undefined;
callbackManager.bind(eventName,closureName)
}function unbind(args){var eventName=$$$.isArray(args)?args[0]:args;
var closureName=$$$.isArray(args)?args[1]:undefined;
callbackManager.unbind(eventName,closureName)
}function continueAuthnWorkflow(){var allowedNetworks=configuration.getSocialNetworks();
var allowsSocial=allowedNetworks.length>0;
var socialPref=socialPrefCache.getSocialPref();
var optedOutOfSocial=socialPref.getOptedOutOfSocial();
var chosenNetworkId=socialPref.getSocialNetworkId();
if(!allowsSocial){LOG.info("Requestor does not allow social login");
doMvpdAuthn()
}else{if(optedOutOfSocial){LOG.info("Client opted out of social login");
if(rememberSocialPref){socialPrefCache.store()
}doMvpdAuthn()
}else{if(chosenNetworkId&&findSocialNetworkById(allowedNetworks,chosenNetworkId)){LOG.info("Social network is valid for requestor");
doSocialAuthn(chosenNetworkId)
}else{if(chosenNetworkId){LOG.info("Social network is invalid for requestor");
doMvpdAuthn()
}else{callCallback("displaySocialNetworkDialog",allowedNetworks)
}}}}}function setSocialNetwork(args){LOG.info("processing setSocialNetwork("+args[0]+", "+args[1]+")");
var id=args[0];
rememberSocialPref=args[1]==="true";
if(id==""){id=null
}var socialPref=new SocialPref();
socialPref.setOptedOutOfSocial(id==null);
socialPref.setSocialNetworkId(id);
socialPrefCache.setSocialPref(socialPref);
if(configuration&&configuration.initialized&&authenticationInProgress){continueAuthnWorkflow()
}}function getSelectedProvider(){var aeState="New User";
var mvpd=mvpdManager.getCurrentMVPD();
if(mvpd){var token=storageManager.getAuthenticationToken();
if(token){var subMvpd=token.getSubMVPDID();
if(subMvpd&&subMvpd!=""){mvpd=subMvpd
}aeState=token.isValid()?"User Authenticated":"User Not Authenticated"
}}callCallback("selectedProvider",{MVPD:mvpd,AE_State:aeState})
}function getProxyMVPD(){var proxyMVPD=null;
var token=storageManager.getAuthenticationToken();
if(token){var mvpd=token.getMVPDID();
var subMvpd=token.getSubMVPDID();
if(mvpd&&subMvpd&&mvpd!=""&&subMvpd!=""){proxyMVPD=mvpd
}}callCallback("proxyMVPD",proxyMVPD)
}function setSelectedProvider(paramArray){var mvpdID=paramArray[0];
registrationCode=(paramArray.length>1&&paramArray[1]!=undefined)?paramArray[1]:null;
if(configuration&&configuration.initialized){if(mvpdID&&mvpdID.length>0){if(authenticationInProgress){mvpdManager.setCurrentMVPD(mvpdID);
sendTrackingData(Strings.TRACK_MVPD_SELECTION);
if(!getAuthenticationInternal()){callbackManager.onErrorHandler(Errors.N500);
callCallback("setAuthenticationStatus",0,Strings.GENERIC_AUTHENTICATION_ERROR)
}}else{if(String(mvpdID)===mvpdManager.getCurrentMVPD()){callCallback("setAuthenticationStatus",1,Strings.PROVIDER_ALREADY_AUTHENTICATED)
}else{callbackManager.onErrorHandler(Errors.N500);
callCallback("setAuthenticationStatus",0,Strings.GENERIC_AUTHENTICATION_ERROR)
}}}else{authenticationInProgress=false;
backgroundLoginInProgress=false;
mvpdManager.setCurrentMVPD(null);
if(backgroundLoginIeTimer!==null){clearInterval(backgroundLoginIeTimer);
backgroundLoginIeTimer=null;
removeCookie(String.BACKGROUND_LOGIN_IE_COOKIE)
}callbackManager.onErrorHandler(Errors.N005);
callCallback("setAuthenticationStatus",0,Strings.PROVIDER_NOT_SELECTED_ERROR);
sendTrackingData(Strings.TRACK_AUTHENTICATION_DETECTION,false)
}}else{LOG.info("put checkAuthentication() in call queue");
pendingCalls.push(new PendingCall(window,checkAuthentication))
}}function setSocialProviderDialogURL(dialogURL){LOG.info("setProviderDialogURL() called in JS AccessEnabler")
}function getAuthorization(args){var resourceID=$$$.isArray(args)?args[0]:args;
var returnURL=$$$.isArray(args)?args[1]:undefined;
var authzExtraParameters=$$$.isArray(args)?args[2]:undefined;
if(configuration&&configuration.initialized){methodInvokingAuthorization="getAuthorization";
if(checkAuthenticationInternal()==Strings.USER_AUTHENTICATED){checkAuthorization(resourceID,authzExtraParameters)
}else{getAuthorizationWasCalled=true;
resourcePendingAuthorization=resourceID;
authzPendingExtraParams=authzExtraParameters;
getAuthentication([returnURL,authzExtraParameters])
}}else{LOG.info("put getAuthorization() in call queue");
pendingCalls.push(new PendingCall(window,getAuthorization,[[resourceID,returnURL,authzExtraParameters]]))
}}function checkAuthorization(resourceID,authzExtraParameters){if(configuration&&configuration.initialized){var token=storageManager.getAuthorizationToken(resourceID);
var spURL=mvpdManager.getCurrentSP();
var service=new ServiceProvider(spURL,requestorID);
if(methodInvokingAuthorization!="getAuthorization"){methodInvokingAuthorization="checkAuthorization"
}if(token&&token.isValid()){LOG.info("Authorization token found and valid");
cachedAuthorization=true;
service.retrieveMediaToken(resourceID,onMediaTokenComplete,onMediaTokenError)
}else{var authnToken=storageManager.getAuthenticationToken();
cachedAuthorization=!(authnToken&&authnToken.isValid());
service.retrieveAuthorizationToken($$$.isArray(resourceID)?resourceID[0]:resourceID,authzExtraParameters,onAuthorizationComplete,onAuthorizationError)
}}else{LOG.info("put checkAuthorization() in call queue");
pendingCalls.push(new PendingCall(window,checkAuthorization,resourceID,authzExtraParameters))
}}function getAuthentication(args){if(configuration&&configuration.initialized){LOG.info("processing getAuthentication()");
if(args){redirectURL=$$$.isArray(args)?args[0]:args;
extraParameters=$$$.isArray(args)?args[1]:undefined
}if(storageManager.isXbox()){if(clientInfo.getXbox()===""){LOG.error("XBox authN flow is active, but the user-social-id string is empty. Aborting authentication.");
callbackManager.onErrorHandler(Errors.N500);
callCallback("setAuthenticationStatus",0,Strings.GENERIC_AUTHENTICATION_ERROR);
return
}else{LOG.info("Clearing all tokens for the XBOX flow.");
storageManager.clearAll()
}}if(checkAuthenticationInternal()==Strings.USER_AUTHENTICATED){callCallback("setAuthenticationStatus",1,"");
sendTrackingData(Strings.TRACK_AUTHENTICATION_DETECTION,true)
}else{authenticationInProgress=true;
socialAuthnResponse=null;
continueAuthnWorkflow()
}}else{LOG.info("put getAuthentication() in call queue");
pendingCalls.push(new PendingCall(window,getAuthentication,args))
}}function doMvpdAuthn(){if(storageManager.getCanAuthenticate()){var redirectedToLoginPage=getAuthenticationInternal()
}if(!redirectedToLoginPage){var mvpds=[];
$$$.each(mvpdManager.getRequestorMVPDs(),function(i,v){mvpds.push({ID:v.id,displayName:v.displayName,logoURL:v.logoUrl})
});
storageManager.setCanAuthenticate(false);
if(mvpds.length>0){callCallback("displayProviderDialog",mvpds)
}else{callbackManager.onErrorHandler(Errors.N500);
callCallback("setAuthenticationStatus",0,Strings.GENERIC_AUTHENTICATION_ERROR)
}}}function doSocialAuthn(socialNetworkId){var saFactory=new SocialAuthenticatorFactory();
var sa=saFactory.createFromSocialNetworkId(socialNetworkId);
if(sa){LOG.info("Created social authenticator for social network '"+socialNetworkId+"', attempting authentication");
sa.authenticateUser(onSocialAuthnComplete)
}else{LOG.info("No SocialAuthenticator for specified social network:"+socialNetworkId);
doMvpdAuthn()
}}function doPassiveAuthentication(){LOG.info("Performing passive authentication...");
var spUrl=mvpdManager.getCurrentSP();
var mvpdID=mvpdManager.getCurrentMVPD();
var mvpd=mvpdManager.getMVPDByID(mvpdID);
var service=new ServiceProvider(spUrl,requestorID);
var requestUrl=service.getLoginPageUrl(true,mvpd,registrationCode,extraParameters,null,null,false);
createHiddenIframe("com_adobe_pass_passive_authn",requestUrl)
}function completePassiveAuthentication(){LOG.info("completePassiveAuthentication");
var spURL=mvpdManager.getCurrentSP();
var service=new ServiceProvider(spURL,requestorID);
service.retrieveAuthenticationToken(authnSuccess,authnError)
}function doBackgroundLogout(logoutUrl){LOG.info("Performing background logout...");
callCallback("doBackgroundLogout",logoutUrl)
}function completeBackgroundLogout(){LOG.info("completeBackgroundLogout");
callCallback("setAuthenticationStatus",0,"");
callbackManager.onErrorHandler(Errors.N000)
}function completeBackgroundLogin(){LOG.info("completeBackgroundLogin");
var mvpdID=mvpdManager.getCurrentMVPD();
if(mvpdID){var mvpd=mvpdManager.getMVPDByID(mvpdID);
if(mvpd&&mvpd.iFrameRequired){LOG.info("Calling destroyIFrame.");
callCallback("destroyIFrame")
}}configuration.retrieveAuthenticationToken()
}function checkAuthentication(){if(configuration&&configuration.initialized){var status;
var message=checkAuthenticationInternal();
if(message==Strings.USER_AUTHENTICATED){status=1;
message="";
sendTrackingData(Strings.TRACK_AUTHENTICATION_DETECTION,true)
}else{status=0;
sendTrackingData(Strings.TRACK_AUTHENTICATION_DETECTION,false);
callbackManager.onErrorHandler(message==Strings.USER_NOT_AUTHENTICATED_ERROR?Errors.N000:Errors.N500)
}callCallback("setAuthenticationStatus",status,message)
}else{LOG.info("put checkAuthentication() in call queue");
pendingCalls.push(new PendingCall(window,checkAuthentication))
}}function getMetadata(){var args=(arguments[0]&&$$$.isArray(arguments[0]))?arguments[0]:arguments;
var key=args[0]?args[0]:null;
args=(args.length>1)?args[1]:new Array();
if(configuration&&configuration.initialized){Metadata.getValue(key,args)
}else{LOG.info("put getMetadata() in call queue");
pendingCalls.push(new PendingCall(window,getMetadata))
}}function checkPreauthorizedResources(){var args=(arguments[0]&&$$$.isArray(arguments[0]))?arguments[0]:arguments;
var resourceArray=args[0]?args[0]:new Array();
if(configuration&&configuration.initialized){var token=storageManager.getAuthenticationToken();
if(token&&token.isValid()){var authorizedResources=token.getAuthorizedResources();
if(authorizedResources&&authorizedResources.length>0){var preauthorizedResourcesArray=new Array();
for(var i=0,len=authorizedResources.length;
i<len;
i++){preauthorizedResourcesArray.push(authorizedResources[i].getAuthorizedResourceID().toUpperCase())
}var preauthorizedResources=intersectPreflight(resourceArray,preauthorizedResourcesArray);
callCallback("preauthorizedResources",preauthorizedResources)
}else{if(areAllResourcesInPreauthorizationCache(resourceArray)){callCallback("preauthorizedResources",getAuthorizedResourcesFromPreauthorizationCache())
}else{var spURL=mvpdManager.getCurrentSP();
var service=new ServiceProvider(spURL,requestorID);
service.checkPreauthorizedResources(resourceArray)
}}}}else{LOG.info("put checkPreauthorizedResources() in call queue");
pendingCalls.push(new PendingCall(window,checkPreauthorizedResources))
}}function logout(){if(configuration&&configuration.initialized){authenticationInProgress=false;
var token=storageManager.getAuthenticationToken();
var spURL=mvpdManager.getCurrentSP();
if(configuration.isValidRequestor()){ditchTokens()
}var service=new ServiceProvider(spURL,requestorID);
service.logout(token)
}else{LOG.info("put logout() in call queue");
pendingCalls.push(new PendingCall(window,logout))
}}function intersectPreflight(arrAuthorized,arrResources){var result=new Array();
if(arrAuthorized&&arrResources){for(var i=0;
i<arrAuthorized.length;
i++){if(arrResources.indexOf(arrAuthorized[i].toUpperCase())>=0){result.push(arrAuthorized[i])
}}}return result
}function areAllResourcesInPreauthorizationCache(resourceArray){var result=true;
var currentPreauthorizationCache=storageManager.getPreauthorizationCache();
var resourceCount=0;
if(currentPreauthorizationCache){for(var i=0,len=currentPreauthorizationCache.length;
i<len;
i++){var key=currentPreauthorizationCache[i].id;
if($$$.inArray(key,resourceArray)<0){result=false
}resourceCount++
}if(resourceCount!=resourceArray.length){result=false
}}else{result=false
}return result
}function getAuthorizedResourcesFromPreauthorizationCache(){var preauthorizationCache=storageManager.getPreauthorizationCache();
var preauthorizedResourcesArray=new Array();
for(var i=0,len=preauthorizationCache.length;
i<len;
i++){if(preauthorizationCache[i].authorized===true){preauthorizedResourcesArray.push(preauthorizationCache[i].id)
}}return preauthorizedResourcesArray
}function ditchTokens(){storageManager.setToSessionStorage();
storageManager.clearAllForAllWorkflows();
storageManager.setToLocalStorage();
storageManager.clearAllForAllWorkflows();
Metadata.CACHE=null
}function onSocialAuthnComplete(response){var authenticated=response.getAuthenticated();
if(authenticated){socialAuthnResponse=response;
if(rememberSocialPref){socialPrefCache.store()
}LOG.info("Social authentication succeeded, attempting MVPD choice retrieval");
if(mvpdLoginAttemptedFlag.isLoginPending()){LOG.info("Last social login failed, prompt user for MVPD");
doMvpdAuthn()
}else{var mvpdChoiceRetriever=new SocialMvpdChoiceRetriever(serviceProviders[0],socialPrefCache.getSocialPref().getSocialNetworkId(),response.getUserId(),response.getAuthnToken());
mvpdChoiceRetriever.getMvpdForSocialUser(onSocialMvpdRetrievalComplete,onSocialMvpdRetrievalError)
}}else{LOG.info("Social authentication cancelled or failed: "+response.getErrorMessage());
socialPrefCache.clear();
doMvpdAuthn()
}}function onSocialMvpdRetrievalComplete(mvpdId){if(mvpdId){LOG.info("Social MVPD choice retrieved: "+mvpdId);
setSelectedProvider([mvpdId])
}else{LOG.info("No social MVPD choice retrieved");
doMvpdAuthn()
}}function onSocialMvpdRetrievalError(){LOG.info("Error retrieving MVPD choice from server");
LOG.info("Falling back to MVPD dialog instead");
doMvpdAuthn()
}function checkAuthenticationInternal(){var token=storageManager.getAuthenticationToken();
if(storageManager.isXbox()&&clientInfo.getXbox()===""){LOG.error("XBox authN flow is active, but the user-social-id string is empty.");
return false
}if(token&&token.isValid()){return mvpdManager.isValidMVPD(token.getMVPDID())?Strings.USER_AUTHENTICATED:Strings.GENERIC_AUTHENTICATION_ERROR
}else{return configuration.isValidRequestor()?Strings.USER_NOT_AUTHENTICATED_ERROR:Strings.GENERIC_AUTHENTICATION_ERROR
}}function getAuthenticationInternal(){var loginOk=false;
if(authenticationInProgress){var mvpdID=mvpdManager.getCurrentMVPD();
if(mvpdID){var mvpd=mvpdManager.getMVPDByID(mvpdID);
if(mvpd){backgroundLoginInProgress=clientInfo&&clientInfo.isBackgroundLogin();
if(isIE()&&backgroundLoginInProgress&&backgroundLoginIeTimer===null){removeCookie(Strings.BACKGROUND_LOGIN_IE_COOKIE);
backgroundLoginIeTimer=setInterval(backgroundLoginIeTimerHandler,300)
}var spURL=mvpd.serviceProvider;
var service=new ServiceProvider(spURL,requestorID);
service.goToLoginPage(mvpd,registrationCode,redirectURL,extraParameters,socialPrefCache.getSocialPref().getSocialNetworkId(),socialAuthnResponse);
loginOk=true
}}}return loginOk
}function backgroundLoginIeTimerHandler(){if(isCookieSet(Strings.BACKGROUND_LOGIN_IE_COOKIE)){clearInterval(backgroundLoginIeTimer);
backgroundLoginIeTimer=null;
removeCookie(Strings.BACKGROUND_LOGIN_IE_COOKIE);
completeBackgroundLogin()
}}function checkPendingLogout(data){if(typeof data=="string"){return(new RegExp("<pendingLogout.*>(s)*true(s)*</pendingLogout>")).test(data)
}else{var result=false;
var pendingLogout=$$$("pendingLogout",data);
if(pendingLogout&&pendingLogout.text()=="true"){result=true
}return result
}}function getPendingLogoutReason(data){var reason=null;
if(typeof data=="string"){reason=(new RegExp('<pendingLogout reason="(.*)">true</pendingLogout>')).exec(data);
if(reason[1]){reason=reason[1]
}else{reason=null
}}else{var pendingLogout=$$$("pendingLogout",data);
if(pendingLogout&&pendingLogout.text()=="true"){reason=pendingLogout.attr("reason")
}}console.log(reason);
return reason
}function authnSuccess(data){if(checkPendingLogout(data)){ditchTokens()
}else{configuration.resetAuthenticationProviderURL();
var tokenSource=$$$("authnToken",data).text();
var token=new Token(tokenSource)
}var isTokenValid=token&&token.isValid();
if(isTokenValid){LOG.info("Successfully retrieved authn token");
cachedAuthentication=false;
mvpdLoginAttemptedFlag.loginSucceeded();
mvpdManager.setCurrentMVPD(token.getMVPDID());
storageManager.setAuthenticationToken(token);
var userMetadata=$$$("userMeta",data).text();
storageManager.setUserMetadata(userMetadata);
Metadata.CACHE=null;
if(backgroundLoginInProgress){backgroundLoginSuccessHelper()
}else{configuration.completeInitialization()
}}else{authnError(data)
}}function backgroundLoginSuccessHelper(){backgroundLoginInProgress=false;
if(getAuthorizationWasCalled){if(resourcePendingAuthorization!==null&&resourcePendingAuthorization.length>0){LOG.info("Performing authorization for pending resource: "+resourcePendingAuthorization+" and extra parameters: "+authzPendingExtraParams);
getAuthorization([resourcePendingAuthorization,null,authzPendingExtraParams])
}else{callbackManager.onErrorHandler(Errors.Z100);
callCallback("tokenRequestFailed",resourcePendingAuthorization,Strings.GENERIC_AUTHORIZATION_ERROR,"");
sendTrackingData(Strings.TRACK_AUTHORIZATION_DETECTION,false,Strings.GENERIC_AUTHORIZATION_ERROR,"")
}getAuthorizationWasCalled=false;
resourcePendingAuthorization=null;
authzPendingExtraParams=null
}else{callCallback("setAuthenticationStatus","1","");
sendTrackingData(Strings.TRACK_AUTHENTICATION_DETECTION,true)
}}function onAuthorizationComplete(data,textStatus,jqXHR){if(checkPendingLogout(data)){ditchTokens();
if(getPendingLogoutReason(data)=="34764"){callbackManager.onErrorHandler(Errors.SEC412)
}if(methodInvokingAuthorization=="getAuthorization"){getAuthorization(this.resourceID)
}else{checkAuthorization(this.resourceID)
}methodInvokingAuthorization=null;
return
}try{data=performAdditionalParsingIfBrowserIsIE8orOlder(data)
}catch(err){onAuthorizationError.call(this,jqXHR,textStatus,data);
return
}var tokenSource=$$$("authzToken",data).text();
var token=new Token(tokenSource);
if(token&&token.isValid()){LOG.info("Successfully retrieved authorization token.");
storageManager.setAuthorizationToken(token);
var userMetaSource=$$$("userMeta",data).text();
if(userMetaSource){LOG.info("Merging user metadata tokens.");
storageManager.mergeUserMetadata(userMetaSource);
Metadata.CACHE=null
}this.retrieveMediaToken(token.getResourceID(),onMediaTokenComplete,onMediaTokenError)
}else{onAuthorizationError.call(this,jqXHR,textStatus,data)
}}function performAdditionalParsingIfBrowserIsIE8orOlder(data){if($$$.browser.msie&&parseInt($$$.browser.version,10)<=8){data=$$$.parseXML(data)
}return data
}function onMediaTokenComplete(data,textStatus,jqXHR){if(checkPendingLogout(data)){ditchTokens();
if(getPendingLogoutReason(data)=="58772"){LOG.warn("Device id mismatch!");
callbackManager.onErrorHandler(Errors.SEC412)
}if(methodInvokingAuthorization=="getAuthorization"){getAuthorization(this.resourceID)
}else{checkAuthorization(this.resourceID)
}methodInvokingAuthorization=null;
return
}LOG.info("Successfully retrieved media token");
callCallback("setToken",this.resourceID,data);
sendTrackingData(Strings.TRACK_AUTHORIZATION_DETECTION,true)
}function onAuthorizationError(jqXHR,textStatus,data){var err=parseErrorResponse(jqXHR);
callbackManager.onErrorHandler(Errors.fromAuthzErrorResponse(jqXHR,this.resourceID));
callCallback("tokenRequestFailed",this.resourceID,err.code,err.message);
sendTrackingData(Strings.TRACK_AUTHORIZATION_DETECTION,false,err.code,err.message)
}function onMediaTokenError(jqXHR,textStatus,data){var err=parseErrorResponse(jqXHR);
callCallback("tokenRequestFailed",this.resourceID,Strings.USER_NOT_AUTHORIZED_ERROR,err.message);
sendTrackingData(Strings.TRACK_AUTHORIZATION_DETECTION,false,Strings.USER_NOT_AUTHORIZED_ERROR,err.message)
}function authnError(data){configuration.resetAuthenticationProviderURL();
LOG.info("Error retrieving authentication token:",data);
if(backgroundLoginInProgress){backgroundLoginFailHelper()
}else{configuration.completeInitialization()
}}function backgroundLoginFailHelper(){backgroundLoginInProgress=false;
if(getAuthorizationWasCalled){callbackManager.onErrorHandler(Errors.Z100);
callCallback("tokenRequestFailed",resourcePendingAuthorization,Strings.GENERIC_AUTHORIZATION_ERROR,"");
sendTrackingData(Strings.TRACK_AUTHORIZATION_DETECTION,false,Strings.GENERIC_AUTHORIZATION_ERROR,"");
getAuthorizationWasCalled=false;
resourcePendingAuthorization=null;
authzPendingExtraParams=null
}else{callCallback("setAuthenticationStatus","0",Strings.USER_NOT_AUTHENTICATED_ERROR);
sendTrackingData(Strings.TRACK_AUTHENTICATION_DETECTION,false)
}}function getStorageData(){callCallback("storageData",storageManager.getStorageData())
}function onConfigurationInitialized(event){if(mustRetrieveAuthenticationPerRequestor()){LOG.info("Attempt to retrieve authn per requestor token.");
doPassiveAuthentication()
}else{configurationInitializedHelper()
}}function configurationInitializedHelper(){$$$(configuration).unbind("initialized",onConfigurationInitialized);
configuration.initialized=true;
if(clientInfo&&clientInfo.callSetConfig()){var config=configuration.getConfigForProgrammer();
if(!config){config=""
}callCallback("setConfig",config)
}for(var key in pendingCalls){LOG.info("Executing pending callz: ");
pendingCalls[key].execute()
}pendingCalls.length=0
}function mustRetrieveAuthenticationPerRequestor(){var mvpdID=mvpdManager.getCurrentMVPD();
var mvpd=mvpdManager.getMVPDByID(mvpdID);
var token=storageManager.getAuthenticationToken();
try{return mvpd&&mvpd.authPerAggregator&&mvpd.passiveAuthnEnabled&&!token&&storageManager.getAnyValidAuthenticationTokenForCurrentMvpd()
}catch(e){return false
}}function sendTrackingData(eventType,success,error,details){var data=null;
var mvpd=mvpdManager.getCurrentMVPD();
var proxyMVPD=null;
error=(typeof(error)==="undefined")?null:error;
details=(typeof(details)==="undefined")?null:details;
var token=storageManager.getAuthenticationToken();
if(token&&token.getSubMVPDID()){proxyMVPD=mvpd;
mvpd=token.getSubMVPDID()
}switch(eventType){case Strings.TRACK_MVPD_SELECTION:data=[mvpdManager.getCurrentMVPD(),deviceInfo.deviceType,deviceInfo.clientType,deviceInfo.os];
break;
case Strings.TRACK_AUTHENTICATION_DETECTION:if(success){data=[true,mvpd,Crypto.MD5(token.getProperty("simpleTokenAuthenticationGuid")),cachedAuthentication,,deviceInfo.deviceType,deviceInfo.clientType,deviceInfo.os,proxyMVPD];
cachedAuthentication=true
}else{data=[false,null,null,null,deviceInfo.deviceType,deviceInfo.clientType,deviceInfo.os,null]
}break;
case Strings.TRACK_AUTHORIZATION_DETECTION:if(success){data=[true,mvpd,Crypto.MD5(token.getProperty("simpleTokenAuthenticationGuid")),cachedAuthorization,error,details,deviceInfo.deviceType,deviceInfo.clientType,deviceInfo.os,proxyMVPD]
}else{data=[false,mvpd,(token)?Crypto.MD5(token.getProperty("simpleTokenAuthenticationGuid")):null,cachedAuthorization,error,details,deviceInfo.deviceType,deviceInfo.clientType,deviceInfo.os,proxyMVPD]
}break
}callCallback("sendTrackingData",eventType,data)
}callCallback("entitlementLoaded");