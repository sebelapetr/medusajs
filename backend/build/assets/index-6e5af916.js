import{o as k,e as O}from"./a-9a2be80a.js";import"./index-28aee60c.js";import"./layout-6b0650d8.js";import"./index-ea422a0b.js";import"./index-61b6c9b3.js";import"./index-6e6d48c9.js";import"./index-aeb6bfdc.js";import"./index-7d141dcf.js";function j(a,e){return Object.keys(e).reduce(function(i,t){if(t.startsWith(a)){var r=t.substr(a.length);i[r]=e[t]}return i},{})}function U(a,e){var i=document.createElement("a");i.href=e;var t=i.search.slice(1),r=t.split("&").reduce(function(v,P){var p=P.split("="),b=p[0],S=p[1];return v[b]=k(S),v},{}),s=[],m=r.ajs_uid,f=r.ajs_event,c=r.ajs_aid,n=O(a.options.useQueryString)?a.options.useQueryString:{},o=n.aid,l=o===void 0?/.+/:o,u=n.uid,A=u===void 0?/.+/:u;if(c){var _=Array.isArray(r.ajs_aid)?r.ajs_aid[0]:r.ajs_aid;l.test(_)&&a.setAnonymousId(_)}if(m){var d=Array.isArray(r.ajs_uid)?r.ajs_uid[0]:r.ajs_uid;if(A.test(d)){var h=j("ajs_trait_",r);s.push(a.identify(d,h))}}if(f){var y=Array.isArray(r.ajs_event)?r.ajs_event[0]:r.ajs_event,g=j("ajs_prop_",r);s.push(a.track(y,g))}return Promise.all(s)}export{U as queryString};