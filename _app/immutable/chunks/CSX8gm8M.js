import{h as p,a6 as B,a7 as H,a8 as P,d as E,a9 as Y}from"./x6UffWZL.js";import{f as z,g as D,i as G}from"./D-i4WlH1.js";import{a as K,n as j,b as q}from"./D15U5vI1.js";import{t as F,c as J,s as Q}from"./Cw3pKaYr.js";function W(s,i,t,_,e,o){var n=s.__className;if(p||n!==t){var d=F(t,_,o);(!p||d!==s.getAttribute("class"))&&(d==null?s.removeAttribute("class"):i?s.className=d:s.setAttribute("class",d)),s.__className=t}else if(o&&e!==o)for(var v in o){var u=!!o[v];(e==null||u!==!!e[v])&&s.classList.toggle(v,u)}return o}const h=Symbol("class"),A=Symbol("style"),M=Symbol("is custom element"),C=Symbol("is html");function X(s,i){i?s.hasAttribute("selected")||s.setAttribute("selected",""):s.removeAttribute("selected")}function T(s,i,t,_){var e=$(s);p&&(e[i]=s.getAttribute(i),i==="src"||i==="srcset"||i==="href"&&s.nodeName==="LINK")||e[i]!==(e[i]=t)&&(i==="loading"&&(s[Y]=t),t==null?s.removeAttribute(i):typeof t!="string"&&k(s).includes(i)?s[i]=t:s.setAttribute(i,t))}function is(s,i,t,_,e=!1){var o=$(s),n=o[M],d=!o[C];let v=p&&n;v&&E(!1);var u=i||{},b=s.tagName==="OPTION";for(var N in i)N in t||(t[N]=null);t.class?t.class=J(t.class):t[h]&&(t.class=null),t[A]&&(t.style??(t.style=null));var O=k(s);for(const r in t){let a=t[r];if(b&&r==="value"&&a==null){s.value=s.__value="",u[r]=a;continue}if(r==="class"){var R=s.namespaceURI==="http://www.w3.org/1999/xhtml";W(s,R,a,_,i==null?void 0:i[h],t[h]),u[r]=a,u[h]=t[h];continue}if(r==="style"){Q(s,a,i==null?void 0:i[A],t[A]),u[r]=a,u[A]=t[A];continue}var S=u[r];if(a!==S){u[r]=a;var L=r[0]+r[1];if(L!=="$$")if(L==="on"){const l={},g="$$"+r;let f=r.slice(2);var y=q(f);if(K(f)&&(f=f.slice(0,-7),l.capture=!0),!y&&S){if(a!=null)continue;s.removeEventListener(f,u[g],l),u[g]=null}if(a!=null)if(y)s[`__${f}`]=a,D([f]);else{let U=function(V){u[r].call(this,V)};u[g]=z(f,s,U,l)}else y&&(s[`__${f}`]=void 0)}else if(r==="style")T(s,r,a);else if(r==="autofocus")G(s,!!a);else if(!n&&(r==="__value"||r==="value"&&a!=null))s.value=s.__value=a;else if(r==="selected"&&b)X(s,a);else{var c=r;d||(c=j(c));var w=c==="defaultValue"||c==="defaultChecked";if(a==null&&!n&&!w)if(o[r]=null,c==="value"||c==="checked"){let l=s;const g=i===void 0;if(c==="value"){let f=l.defaultValue;l.removeAttribute(c),l.defaultValue=f,l.value=l.__value=g?f:null}else{let f=l.defaultChecked;l.removeAttribute(c),l.defaultChecked=f,l.checked=g?f:!1}}else s.removeAttribute(r);else w||O.includes(c)&&(n||typeof a!="string")?s[c]=a:typeof a!="function"&&T(s,c,a)}}}return v&&E(!0),u}function $(s){return s.__attributes??(s.__attributes={[M]:s.nodeName.includes("-"),[C]:s.namespaceURI===B})}var I=new Map;function k(s){var i=I.get(s.nodeName);if(i)return i;I.set(s.nodeName,i=[]);for(var t,_=s,e=Element.prototype;e!==_;){t=P(_);for(var o in t)t[o].set&&i.push(o);_=H(_)}return i}export{is as a,T as s};
