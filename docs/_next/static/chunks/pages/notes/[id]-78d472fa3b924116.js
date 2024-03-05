(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[245],{32218:function(t,e,n){var i={"./NoOp":56864,"./NoOp.tsx":56864};function r(t){return n(o(t))}function o(t){if(!n.o(i,t)){var e=Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id=32218},58208:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notes/[id]",function(){return n(34479)}])},96411:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var i=n(85893);n(67294);var r=n(9008),o=n.n(r),s=n(25935);function a(t){var e=t.content,n=(0,s.ZP)(e);return(0,i.jsx)(o(),{children:n})}},70520:function(t,e,n){"use strict";n.d(e,{Z:function(){return M}});var i,r=n(47568),o=n(828),s=n(20414),a=n(85893),c=n(25903),d=n(4604),u=n(6348),l=n(6226),f=n(96486),m=n.n(f),p=n(67294),h=n(42336),x=n(41664),g=n.n(x),v=n(99490);function j(t){var e,n,i,r,o,s=t.note,c=t.noteIndex,d=(0,h.gt)({note:s,noteIndex:c});try{o=m().get(s,"custom.date",!1)?(e=s.custom.date,n=v.DateTime.DATE_SHORT,v.DateTime.fromISO(e).toLocaleString(n)):(i=s.created,r=v.DateTime.DATE_SHORT,v.DateTime.fromMillis(i).toLocaleString(r))}catch(u){throw Error("no date found for note ".concat(s.id))}return(0,a.jsx)("div",{children:(0,a.jsxs)("article",{itemScope:!0,itemType:"https://schema.org/CreativeWork",children:[(0,a.jsx)("h2",{itemProp:"headline",children:(0,a.jsx)(g(),{href:d,children:s.title})}),!m().isUndefined(o)&&(0,a.jsx)("p",{children:o}),m().has(s,"custom.excerpt")&&(0,a.jsx)("p",{itemProp:"description",children:s.custom.excerpt})]})})}var _=n(96411),Z=n(2962),N=n(1512),y=function(t){var e=t.sitePath,n=t.seoProps,i=t.siteConfig;return n.canonicalBaseUrl?[i.siteUrl,e].join(""):n.canonicalUrl?n.canonicalUrl:[i.canonicalBaseUrl?i.canonicalBaseUrl:(0,h.N0)(i),e].join("")},w=function(t){return c.Time.DateTime.fromMillis(m().toInteger(t)).setZone("utc").toLocaleString("yyyy-LL-dd")};function E(t){var e=t.note,n=t.config,i=(0,N.vm)().router.asPath;if(m().some(["403"],function(t){return i==="/notes/".concat(t,"/")}))return null;var r,o=c.PublishUtils.getSEOPropsFromConfig(n),s=c.PublishUtils.getSEOPropsFromNote(e),d=m().defaults(s,o),u=d.title,l=d.description,f=(null==d?void 0:d.image)?[d.image]:[],p=c.ConfigUtils.getPublishing(n),h=y({sitePath:i,seoProps:d,siteConfig:p}),x=d.twitter?{handle:d.twitter,site:d.twitter,cardType:"summary_large_image"}:void 0;return(0,a.jsx)(Z.PB,{title:u,description:l,canonical:h,noindex:d.noindex,twitter:x,openGraph:{title:u,description:l,url:h,images:f,type:"article",article:{publishedTime:w(d.created),modifiedTime:w(d.updated),tags:e.tags?Array.isArray(e.tags)?e.tags:[e.tags]:[]}}})}var L=n(56052),T=n(41799),U=n(69396),S=n(99534),P=n(88351),b=P.Z.Link,O=function(t){t=(t=t.replace(/_/g,"-")).replace(/--/g,"-");var e=[];return t.split("-").forEach(function(t){e.push(t.substr(0,1).toUpperCase()+t.substr(1))}),e.join(" ")},C=function(t){var e,n=t.note,i=(0,S.Z)(t,["note"]);return(0,a.jsx)(P.Z,(0,U.Z)((0,T.Z)({style:{zIndex:1},className:"dendron-toc"},i),{children:Object.entries(null==n?void 0:n.anchors).map(function(t){var n=(0,o.Z)(t,2),i=n[0],r=n[1];return(0,a.jsx)(p.Fragment,{children:(null==r?void 0:r.type)==="header"?(0,a.jsx)(b,{href:"#".concat(i),title:null!==(e=null==r?void 0:r.text)&&void 0!==e?e:O(null==r?void 0:r.value)}):null},i)})}))},B=n(54856),D=n(85416),F=n(45875),I=n(4298),A=n.n(I),k=function(t){var e=(0,o.Z)(p.useState(!1),2),n=e[0],i=e[1],r=t.noteBody;return((0,p.useEffect)(function(){void 0===window.mermaid&&r.includes('class="mermaid"')&&i(!0)},[r]),n)?((0,d.createLogger)("MermaidScript").info({ctx:"loading mermaid"}),(0,a.jsx)(A(),{id:"initmermaid",src:"https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js",onLoad:function(){var t=window.mermaid;window._mermaid=t,t.initialize({startOnLoad:!1}),t.init()}})):(0,a.jsx)(a.Fragment,{})},H=n(37870),G=function(t){var e,n=t.note,i=t.config,r=c.ConfigUtils.getGiscusConfig(i),o=n.id;if(void 0===r||(null===(e=n.custom)||void 0===e?void 0:e.enableGiscus)===void 0)return null;var s,d,u=r.repo;if(d=u.match("^[a-zA-Z0-9_-]*[/][a-zA-Z0-9_-]*$"),m().isNull(d))return null;var l=(0,U.Z)((0,T.Z)({},r),{repo:u,term:o});return(0,a.jsx)(H.Z,(0,T.Z)({},l))},z=F.b.HEADER;function M(t){var e,f=t.note,h=t.body,x=t.collectionChildren,g=t.noteIndex,v=t.customHeadContent,Z=t.config,y=(0,d.createLogger)("Note"),w=(0,N.vm)().getActiveNoteId,T=(0,o.Z)(p.useState(void 0),2),U=T[0],S=T[1],P=w();"root"===P&&(P=g.id),p.useEffect(function(){var t="custom"===c.ConfigUtils.getPublishing(Z).siteBanner?"BannerAlert.tsx":"NoOp";y.info({ctx:"loading banner",BannerFile:t}),i=n(32218)("./".concat(t)).default},[]);var b=(0,B.$s)();y.info({ctx:"enter",id:P}),p.useEffect(function(){var t;if(y.info({ctx:"updateNoteBody:enter",id:P}),m().isUndefined(P)){y.info({ctx:"updateNoteBody:exit",id:P,state:"id undefined"});return}if(P===f.id){b(D.w.Nw.setLoadingStatus(d.LoadingStatus.FULFILLED)),y.info({ctx:"updateNoteBody:exit",id:P,state:"id = note.id"});return}y.info({ctx:"updateNoteBody:fetch:pre",id:P}),fetch("/data/notes/".concat(P,".html")).then((t=(0,r.Z)(function(t){var e;return(0,s.__generator)(this,function(e){switch(e.label){case 0:return y.info({ctx:"updateNoteBody:fetch:post",id:P}),[4,t.text()];case 1:return S(e.sent()),b(D.w.Nw.setLoadingStatus(d.LoadingStatus.FULFILLED)),[2]}})}),function(e){return t.apply(this,arguments)}))},[P]);var O=P===f.id?h:U;if(m().isUndefined(O))return(0,a.jsx)(L.Z,{});var F=(null===(e=f.custom)||void 0===e?void 0:e.has_collection)&&!m().isNull(x)?x.map(function(t){return(0,a.jsx)(j,{note:t,noteIndex:g},t.id)}):null;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(k,{noteBody:O}),(0,a.jsx)(E,{note:f,config:Z}),v&&(0,a.jsx)(_.Z,{content:v}),(0,a.jsx)(u.Z,{children:(0,a.jsx)(l.Z,{span:24,children:(0,a.jsxs)(u.Z,{gutter:20,children:[(0,a.jsxs)(l.Z,{xs:24,md:18,children:[i&&(0,a.jsx)(i,{}),(0,a.jsx)(d.DendronNote,{noteContent:O}),F,(0,a.jsx)(G,{note:f,config:Z})]}),(0,a.jsx)(l.Z,{xs:0,md:6,children:(0,a.jsx)(C,{note:f,offsetTop:z.HEIGHT})})]})})})]})}},56864:function(t,e,n){"use strict";function i(){return null}n.r(e),n.d(e,{default:function(){return i}})},34479:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return r}});var i=n(70520),r=!0;e.default=i.Z}},function(t){t.O(0,[935,6,774,888,179],function(){return t(t.s=58208)}),_N_E=t.O()}]);