"use strict";var p=function(o,a){return function(){try{return a||o((a={exports:{}}).exports,a),a.exports}catch(c){throw (a=0, c)}};};var P=p(function(G,b){
function w(o,a,c,v,r,i,g){var t,e,n,f,s,u,m,l;for(t=a.data,e=r.data,n=a.accessors[0],s=r.accessors[0],f=r.accessors[1],u=v,m=g,l=0;l<o;l++)f(e,m,n(t,u)*s(e,m)),u+=c,m+=i;return r}b.exports=w
});var x=p(function(H,k){
var j=require('@stdlib/array-base-arraylike2object/dist'),z=P(),q=5;function A(o,a,c,v,r,i,g){var t,e,n,f,s,u;if(o<=0)return r;if(n=j(a),f=j(r),n.accessorProtocol||f.accessorProtocol)return z(o,n,c,v,f,i,g),r;if(t=v,e=g,c===1&&i===1){if(s=o%q,s>0)for(u=0;u<s;u++)r[e]*=a[t],t+=c,e+=i;if(o<q)return r;for(u=s;u<o;u+=q)r[e]*=a[t],r[e+1]*=a[t+1],r[e+2]*=a[t+2],r[e+3]*=a[t+3],r[e+4]*=a[t+4],t+=q,e+=q;return r}for(u=0;u<o;u++)r[e]*=a[t],t+=c,e+=i;return r}k.exports=A
});var R=p(function(I,O){
var M=require('@stdlib/strided-base-stride2offset/dist'),B=x();function C(o,a,c,v,r){return B(o,a,c,M(o,c),v,r,M(o,r))}O.exports=C
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=R(),E=x();D(h,"ndarray",E);module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
