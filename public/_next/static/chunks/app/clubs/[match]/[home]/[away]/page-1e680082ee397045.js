(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19],{50:function(e,t,r){"use strict";r.d(t,{r:function(){return X}});var a=r(5784),o=r(4761),n=r(8216);let[s,i]=(0,n.R)("Grid component was not found in tree");var l=r(7447),c=r(6817),d=Object.defineProperty,h=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&f(e,r,t[r]);if(h)for(var r of h(t))u.call(t,r)&&f(e,r,t[r]);return e};let x=(e,t)=>"content"===e?"auto":"auto"===e?"0px":e?`${100/(t/e)}%`:void 0,j=(e,t,r)=>r||"auto"===e||"content"===e?"unset":x(e,t),b=(e,t)=>{if(e)return"auto"===e||t?1:0},g=(e,t)=>0===e?0:e?`${100/(t/e)}%`:void 0,y=(e,t)=>void 0!==e?t.fn.size({size:e,sizes:t.spacing})/2:void 0;var w=(0,c.k)((e,{gutter:t,gutterXs:r,gutterSm:a,gutterMd:o,gutterLg:n,gutterXl:s,grow:i,offset:c,offsetXs:d,offsetSm:h,offsetMd:p,offsetLg:u,offsetXl:f,columns:w,span:S,xs:A,sm:O,md:_,lg:E,xl:N,order:R,orderXs:I,orderSm:T,orderMd:k,orderLg:P,orderXl:z})=>({col:m({boxSizing:"border-box",flexGrow:b(S,i),order:R,padding:y(t,e),marginLeft:g(c,w),flexBasis:x(S,w),flexShrink:0,width:"content"===S?"auto":void 0,maxWidth:j(S,w,i)},function({sizes:e,offsets:t,orders:r,theme:a,columns:o,gutters:n,grow:s}){return l.j1.reduce((i,l)=>(i[`@media (min-width: ${a.breakpoints[l]}px)`]={order:r[l],flexBasis:x(e[l],o),padding:y(n[l],a),flexShrink:0,width:"content"===e[l]?"auto":void 0,maxWidth:j(e[l],o,s),marginLeft:g(t[l],o),flexGrow:b(e[l],s)},i),{})}({sizes:{xs:A,sm:O,md:_,lg:E,xl:N},offsets:{xs:d,sm:h,md:p,lg:u,xl:f},orders:{xs:I,sm:T,md:k,lg:P,xl:z},gutters:{xs:r,sm:a,md:o,lg:n,xl:s},theme:e,columns:w,grow:i}))})),S=r(7414),A=Object.defineProperty,O=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,N=(e,t,r)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,R=(e,t)=>{for(var r in t||(t={}))_.call(t,r)&&N(e,r,t[r]);if(O)for(var r of O(t))E.call(t,r)&&N(e,r,t[r]);return e},I=(e,t)=>{var r={};for(var a in e)_.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&O)for(var a of O(e))0>t.indexOf(a)&&E.call(e,a)&&(r[a]=e[a]);return r};let T={},k=(0,a.forwardRef)((e,t)=>{let r=(0,o.N4)("GridCol",T,e),{children:n,span:s,offset:l,offsetXs:c,offsetSm:d,offsetMd:h,offsetLg:p,offsetXl:u,xs:f,sm:m,md:x,lg:j,xl:b,order:g,orderXs:y,orderSm:A,orderMd:O,orderLg:_,orderXl:E,className:N,id:k,unstyled:P}=r,z=I(r,["children","span","offset","offsetXs","offsetSm","offsetMd","offsetLg","offsetXl","xs","sm","md","lg","xl","order","orderXs","orderSm","orderMd","orderLg","orderXl","className","id","unstyled"]),v=i(),D=s||v.columns,{classes:C,cx:M}=w({gutter:v.gutter,gutterXs:v.gutterXs,gutterSm:v.gutterSm,gutterMd:v.gutterMd,gutterLg:v.gutterLg,gutterXl:v.gutterXl,offset:l,offsetXs:c,offsetSm:d,offsetMd:h,offsetLg:p,offsetXl:u,xs:f,sm:m,md:x,lg:j,xl:b,order:g,orderXs:y,orderSm:A,orderMd:O,orderLg:_,orderXl:E,grow:v.grow,columns:v.columns,span:D},{unstyled:P,name:"Grid"});return!("auto"===D||"content"===D||"number"==typeof D&&D>0&&D%1==0)||D>v.columns?null:a.createElement(S.x,R({className:M(C.col,N),ref:t},z),n)});k.displayName="@mantine/core/Col";var P=Object.defineProperty,z=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,C=(e,t,r)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,M=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&C(e,r,t[r]);if(z)for(var r of z(t))D.call(t,r)&&C(e,r,t[r]);return e},W=(0,c.k)((e,{justify:t,align:r,gutter:a,gutterXs:o,gutterSm:n,gutterMd:s,gutterLg:i,gutterXl:c})=>{var d,h;return{root:M({margin:-e.fn.size({size:a,sizes:e.spacing})/2,display:"flex",flexWrap:"wrap",justifyContent:t,alignItems:r},(d={xs:o,sm:n,md:s,lg:i,xl:c},h=e,l.j1.reduce((e,t)=>(void 0!==d[t]&&(e[`@media (min-width: ${h.breakpoints[t]}px)`]={margin:-h.fn.size({size:d[t],sizes:h.spacing})/2}),e),{})))}}),H=Object.defineProperty,F=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,Y=(e,t,r)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,B=(e,t)=>{for(var r in t||(t={}))L.call(t,r)&&Y(e,r,t[r]);if(F)for(var r of F(t))G.call(t,r)&&Y(e,r,t[r]);return e},U=(e,t)=>{var r={};for(var a in e)L.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&F)for(var a of F(e))0>t.indexOf(a)&&G.call(e,a)&&(r[a]=e[a]);return r};let $={gutter:"md",justify:"flex-start",align:"stretch",columns:12},X=(0,a.forwardRef)((e,t)=>{let r=(0,o.N4)("Grid",$,e),{gutter:n,gutterXs:i,gutterSm:l,gutterMd:c,gutterLg:d,gutterXl:h,children:p,grow:u,justify:f,align:m,columns:x,className:j,id:b,unstyled:g}=r,y=U(r,["gutter","gutterXs","gutterSm","gutterMd","gutterLg","gutterXl","children","grow","justify","align","columns","className","id","unstyled"]),{classes:w,cx:A}=W({gutter:n,justify:f,align:m,gutterXs:i,gutterSm:l,gutterMd:c,gutterLg:d,gutterXl:h},{unstyled:g,name:"Grid"});return a.createElement(s,{value:{gutter:n,gutterXs:i,gutterSm:l,gutterMd:c,gutterLg:d,gutterXl:h,grow:u,columns:x}},a.createElement(S.x,B({className:A(w.root,j),ref:t},y),p))});X.Col=k,X.displayName="@mantine/core/Grid"},5078:function(e,t,r){"use strict";r.d(t,{i:function(){return R}});var a=r(5784),o=r(4761),n=r(6817),s=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&p(e,r,t[r]);if(c)for(var r of c(t))h.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>i(e,l(t)),m=(0,n.k)((e,{captionSide:t,horizontalSpacing:r,verticalSpacing:a,fontSize:o,withBorder:n,withColumnBorders:s})=>{let i=`1px solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]}`;return{root:f(u({},e.fn.fontStyles()),{width:"100%",borderCollapse:"collapse",captionSide:t,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,lineHeight:e.lineHeight,border:n?i:"","& caption":{marginTop:"top"===t?0:e.spacing.xs,marginBottom:"bottom"===t?0:e.spacing.xs,fontSize:e.fontSizes.sm,color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6]},"& thead tr th, & tfoot tr th":{textAlign:"left",fontWeight:"bold",color:"dark"===e.colorScheme?e.colors.dark[0]:e.colors.gray[7],fontSize:e.fn.size({size:o,sizes:e.fontSizes}),padding:`${e.fn.size({size:a,sizes:e.spacing})}px ${e.fn.size({size:r,sizes:e.spacing})}px`},"& thead tr th":{borderBottom:i},"& tfoot tr th":{borderTop:i},"& tbody tr td":{padding:`${e.fn.size({size:a,sizes:e.spacing})}px ${e.fn.size({size:r,sizes:e.spacing})}px`,borderTop:i,fontSize:e.fn.size({size:o,sizes:e.fontSizes})},"& tbody tr:first-of-type td":{borderTop:"none"},"& thead th, & tbody td":{borderRight:s?i:"none","&:last-of-type":{borderRight:"none",borderLeft:s?i:"none"}},"&[data-striped] tbody tr:nth-of-type(odd)":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0]},"&[data-hover] tbody tr":e.fn.hover({backgroundColor:"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[1]})})}}),x=r(7414),j=Object.defineProperty,b=Object.defineProperties,g=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,A=(e,t,r)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,O=(e,t)=>{for(var r in t||(t={}))w.call(t,r)&&A(e,r,t[r]);if(y)for(var r of y(t))S.call(t,r)&&A(e,r,t[r]);return e},_=(e,t)=>b(e,g(t)),E=(e,t)=>{var r={};for(var a in e)w.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&y)for(var a of y(e))0>t.indexOf(a)&&S.call(e,a)&&(r[a]=e[a]);return r};let N={striped:!1,highlightOnHover:!1,captionSide:"top",horizontalSpacing:"xs",fontSize:"sm",verticalSpacing:7,withBorder:!1,withColumnBorders:!1},R=(0,a.forwardRef)((e,t)=>{let r=(0,o.N4)("Table",N,e),{className:n,children:s,striped:i,highlightOnHover:l,captionSide:c,horizontalSpacing:d,verticalSpacing:h,fontSize:p,unstyled:u,withBorder:f,withColumnBorders:j}=r,b=E(r,["className","children","striped","highlightOnHover","captionSide","horizontalSpacing","verticalSpacing","fontSize","unstyled","withBorder","withColumnBorders"]),{classes:g,cx:y}=m({captionSide:c,verticalSpacing:h,horizontalSpacing:d,fontSize:p,withBorder:f,withColumnBorders:j},{unstyled:u,name:"Table"});return a.createElement(x.x,_(O({},b),{component:"table",ref:t,className:y(g.root,n),"data-striped":i||void 0,"data-hover":l||void 0}),s)});R.displayName="@mantine/core/Table"},8216:function(e,t,r){"use strict";r.d(t,{R:function(){return o}});var a=r(5784);function o(e){let t=(0,a.createContext)(null),r=()=>{let r=(0,a.useContext)(t);if(null===r)throw Error(e);return r},o=({children:e,value:r})=>a.createElement(t.Provider,{value:r},e);return[o,r]}},5888:function(e,t,r){Promise.resolve().then(r.bind(r,267))},7331:function(){},1910:function(){},7598:function(){},267:function(e,t,r){"use strict";let a;r.r(t),r.d(t,{default:function(){return D}});var o=r(1844),n=r(8943),s=r(5784),i=r(5078),l=r(50),c=r(2726);let d=async(e,t)=>{let r=[[],[]],a=[[],[]];try{let o=await fetch("https://flashscore.p.rapidapi.com/v1/teams/results?sport_id=1&team_id=".concat(e,"&locale=en_GB&page=1"),c.Y),n=await o.json(),s=n.DATA;for(let i=0;i<s.length;i++)"Poland: Ekstraklasa"===s[i].NAME&&a[0].push(i);let l=await fetch("https://flashscore.p.rapidapi.com/v1/teams/results?sport_id=1&team_id=".concat(t,"&locale=en_GB&page=1"),c.Y),d=await l.json(),h=d.DATA;for(let p=0;p<h.length;p++)"Poland: Ekstraklasa"===h[p].NAME&&a[1].push(p);for(let u=0;u<2;u++)a[u].forEach(e=>0===u?r[u].push(...n.DATA[e].EVENTS):r[u].push(...d.DATA[e].EVENTS));return r}catch(f){console.log(f)}};function h(e,t,r){let a=0;return e.map(e=>{0===e.ODDS_WINNER&&(a+=1),(t===e.HOME_PARTICIPANT_IDS[0]&&1===e.ODDS_WINNER||t===e.AWAY_PARTICIPANT_IDS[0]&&2===e.ODDS_WINNER||r===e.AWAY_PARTICIPANT_IDS[0]&&2===e.ODDS_WINNER||r===e.HOME_PARTICIPANT_IDS[0]&&1===e.ODDS_WINNER)&&(a+=3)}),a}function p(e,t){let r=0,a=0;return e.map(e=>{t===e.HOME_PARTICIPANT_IDS[0]&&++a<=5&&(0===e.ODDS_WINNER&&(r+=1),1===e.ODDS_WINNER&&(r+=3))}),r}function u(e,t){let r=0,a=0;return e.map(e=>{t===e.AWAY_PARTICIPANT_IDS[0]&&++a<=5&&(0===e.ODDS_WINNER&&(r+=1),2===e.ODDS_WINNER&&(r+=3))}),r}function f(e,t,r){let a=0,o=0;e.map(e=>{(t===e.HOME_PARTICIPANT_IDS[0]||r===e.HOME_PARTICIPANT_IDS[0])&&(a+=parseInt(e.HOME_SCORE_CURRENT),o+=parseInt(e.AWAY_SCORE_CURRENT)),(t===e.AWAY_PARTICIPANT_IDS[0]||r===e.AWAY_PARTICIPANT_IDS[0])&&(a+=parseInt(e.AWAY_SCORE_CURRENT),o+=parseInt(e.HOME_SCORE_CURRENT))});let n={home:a,away:o};return n}function m(e,t){let r=0,a=0,o=0;e.map(e=>{t===e.HOME_PARTICIPANT_IDS[0]&&o<5&&(r+=parseInt(e.HOME_SCORE_CURRENT),a+=parseInt(e.AWAY_SCORE_CURRENT),o++)});let n={home:r,away:a};return n}function x(e,t){let r=0,a=0,o=0;e.map(e=>{t===e.AWAY_PARTICIPANT_IDS[0]&&o<5&&(r+=parseInt(e.HOME_SCORE_CURRENT),a+=parseInt(e.AWAY_SCORE_CURRENT),o++)});let n={home:r,away:a};return n}var j=r(3078);function b(e,t){return e.START_TIME===t.START_TIME?e.START_TIME<t.START_TIME?-1:1:e.START_TIME>t.START_TIME?-1:1}function g(e,t,r){let a=0,o=2;e.map((e,r)=>{o=2-r/7.5,0===e.ODDS_WINNER&&(a+=o),(t===e.HOME_PARTICIPANT_IDS[0]&&1===e.ODDS_WINNER||t===e.AWAY_PARTICIPANT_IDS[0]&&2===e.ODDS_WINNER)&&(a+=3*o)});let n=0,s=0;e.map(e=>{!0===r&&t===e.HOME_PARTICIPANT_IDS[0]?++s<=5&&(0===e.ODDS_WINNER&&(n+=1),1===e.ODDS_WINNER&&(n+=3)):!1===r&&t===e.AWAY_PARTICIPANT_IDS[0]&&++s<=5&&(0===e.ODDS_WINNER&&(n+=1),2===e.ODDS_WINNER&&(n+=3))});let i=((a/45*200+n/15*100)/3).toFixed(2);return i}let y=35,w=0,S=0,A=0;function O(e,t){if(A<1){e=parseInt(e),t=parseInt(t);let r=e/(t+e)*100,a=100-r,o=Math.abs(r-a);o<=20?y-=o/2:o>20&&o<=40?y=y-10-(o-20)/4:o>40&&(y=y-15-(o-40)/8),w=(100-y)*(r/100),S=(100-y)*(a/100),A++}let n={home:w.toFixed(2),draw:y.toFixed(2),away:S.toFixed(2)};return n}function _(e,t,r,a){return{score:(e/15*2+r/5)/3,lost:(t/15*2+a/5)/3}}async function E(e){try{let t=await fetch("https://flashscore.p.rapidapi.com/v1/events/odds?locale=en_GB&event_id=".concat(e),c.Y),r=await t.json(),a=r.DATA[0].PERIODS[0].GROUPS[0].MARKETS[0].ODD_CELL_FIRST.VALUE,o=r.DATA[0].PERIODS[0].GROUPS[0].MARKETS[0].ODD_CELL_SECOND.VALUE,n=r.DATA[0].PERIODS[0].GROUPS[0].MARKETS[0].ODD_CELL_THIRD.VALUE;return{home:a,draw:o,away:n}}catch(s){console.log(s)}}r(7331),r(7598);let N=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("tr",{className:"statBox head",children:(0,o.jsx)("td",{colSpan:3,children:"Wartość kursu"})}),(0,o.jsxs)("tr",{className:"statBox head",children:[(0,o.jsx)("td",{children:"1"}),(0,o.jsx)("td",{children:"X"}),(0,o.jsx)("td",{children:"2"})]})]}),R=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("tr",{className:"statBox head",children:(0,o.jsx)("td",{colSpan:3,children:"Prawdopodobieństwo na wynik"})}),(0,o.jsxs)("tr",{className:"statBox head",children:[(0,o.jsx)("td",{children:"1"}),(0,o.jsx)("td",{children:"X"}),(0,o.jsx)("td",{children:"2"})]})]}),I=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("tr",{className:"statBox head",children:(0,o.jsx)("td",{colSpan:3,children:"Opłacalne prawdopodobieństwo"})}),(0,o.jsxs)("tr",{className:"statBox head",children:[(0,o.jsx)("td",{children:"1"}),(0,o.jsx)("td",{children:"X"}),(0,o.jsx)("td",{children:"2"})]})]}),T=(0,o.jsxs)("tr",{className:"statBox head",children:[(0,o.jsx)("td",{children:"1"}),(0,o.jsx)("td",{children:"X"}),(0,o.jsx)("td",{children:"2"}),(0,o.jsx)("td",{children:"wynik"})]});var k=r(2143);async function P(){try{let e=await fetch("http://localhost:3000/api/forebet"),t=await e.json();return t}catch(r){console.log(r)}}let z=[];var v=function(e){let t,r,n,c,y,w,S,A,v,D;let C=e.match,M=e.home,W=e.away,[H,F]=(0,s.useState)(),[L,G]=(0,s.useState)(),[Y,B]=(0,s.useState)(),[U,$]=(0,s.useState)(),[X,K]=(0,s.useState)(),Z=()=>new Promise((e,t)=>{z&&z.length<1&&d(M,W).then(t=>{z=t,e()})}),V=[];function J(){!V[0]||H||L||(F(V[0][0].sort(b)),G(V[0][1].sort(b)))}H&&L&&a&&(t=g(H.slice(0,15),M,!0),r=g(L.slice(0,15),W,!1),n=_(f(H.slice(0,15),M,W).home,f(H.slice(0,15),M,W).away,m(H,M).home,m(H,M).away).score.toFixed(2),c=_(f(H.slice(0,15),M,W).home,f(H.slice(0,15),M,W).away,m(H,M).home,m(H,M).away).lost.toFixed(2),y=_(f(L.slice(0,15),M,W).home,f(L.slice(0,15),M,W).away,x(L,W).away,x(L,W).home).score.toFixed(2),w=_(f(L.slice(0,15),M,W).home,f(L.slice(0,15),M,W).away,x(L,W).away,x(L,W).home).lost.toFixed(2),S=O(t,r).home,A=O(t,r).draw,v=O(t,r).away,D=1/parseFloat(a.home)*100+1/parseFloat(a.draw)*100+1/parseFloat(a.away)*100),(0,s.useEffect)(()=>{Z().then(()=>{V.push(z)}).then(J),new Promise((e,t)=>{a||E(C).then(t=>{a=t,e()})}),new Promise((e,t)=>{Y||P().then(t=>{B(t),e()})})},[V,a,Y]);let q=a&&t&&r&&(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:a.home}),(0,o.jsx)("td",{children:a.draw}),(0,o.jsx)("td",{children:a.away})]}),Q=a&&t&&r&&(0,o.jsxs)("tr",{children:[(0,o.jsxs)("td",{children:[(1/parseFloat(a.home)*100/D*100).toFixed(2),"%"]}),(0,o.jsxs)("td",{children:[(1/parseFloat(a.draw)*100/D*100).toFixed(2),"%"]}),(0,o.jsxs)("td",{children:[(1/parseFloat(a.away)*100/D*100).toFixed(2),"%"]})]}),ee=a&&t&&r&&(0,o.jsxs)("tr",{children:[(0,o.jsxs)("td",{children:[(1/(88*parseFloat(a.home)/100)*100).toFixed(2),"%"]}),(0,o.jsxs)("td",{children:[(1/(88*parseFloat(a.draw)/100)*100).toFixed(2),"%"]}),(0,o.jsxs)("td",{children:[(1/(88*parseFloat(a.away)/100)*100).toFixed(2),"%"]})]}),et=(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:S}),(0,o.jsx)("td",{children:A}),(0,o.jsx)("td",{children:v}),(0,o.jsx)("td",{children:function(e,t,r,a,o,n,s){let i,l,c,d,h,p,u,f,m;if(e>t&&e>r&&(i=e,l=a,c=s),r>e&&r>t&&(i=r,l=n,c=o),t>e&&t>r&&(i=t),i!==t?i<50?d=1:i>=50&&i<66?d=2:i>=66&&i<75?d=3:i>=75&&i<90?d=4:i>=90&&(d=5):d=0,h=c>1&&c<1.5&&l>1&&l<1.5?1:c>1.5&&l>1.5?3:c>1.5||l>1.5?2:0,1===d)0===h||1===h?(p=1,u=0):2===h?(p=2,u=1):3===h&&(p=3,u=2);else if(2===d)0===h||1===h?(p=2,u=0):2===h?(p=3,u=1):3===h&&(p=4,u=2);else if(3===d)0===h||1===h||2===h?(p=3,u=0):3===h&&(p=4,u=1);else if(4===d)p=4,u=0;else if(5===d)p=5,u=0;else if(0===d){let x=parseInt(a)+parseInt(o)+parseInt(n)+parseInt(s);f=x<2.8?0:x>=2.8&&x<=3.2?1:2}return i===e?m="".concat(p," - ").concat(u):i===r?m="".concat(u," - ").concat(p):i===t&&(m="".concat(f," - ").concat(f)),m}(S,A,v,n,c,y,w)})]});return(0,o.jsxs)("div",{children:[(0,o.jsxs)("h2",{style:{textAlign:"center"},children:[U," - ",X]}),(0,o.jsxs)(i.i,{className:"tbl three-columns marginbottom",horizontalSpacing:"xl",verticalSpacing:"xs",highlightOnHover:!0,children:[(0,o.jsx)("caption",{children:"Wartości jakie oferuje jeden z bukmacher\xf3w za każdą postawioną złot\xf3wke"}),(0,o.jsx)("thead",{children:N}),(0,o.jsx)("tbody",{children:q})]}),(0,o.jsxs)(i.i,{className:"tbl three-columns marginbottom",horizontalSpacing:"xl",verticalSpacing:"xs",highlightOnHover:!0,children:[(0,o.jsx)("caption",{children:"Przełożenie powyższych kurs\xf3w na prawdopodobieństwo według bukmachera"}),(0,o.jsx)("thead",{children:R}),(0,o.jsx)("tbody",{children:Q})]}),(0,o.jsxs)(i.i,{className:"tbl three-columns marginbottom",horizontalSpacing:"xl",verticalSpacing:"xs",highlightOnHover:!0,children:[(0,o.jsx)("caption",{children:"Procent prawdopodobieństwa, jaki powinien być w rzeczywistości, aby klientowi opłacało się korzystać z usług bukmacherskich"}),(0,o.jsx)("thead",{children:I}),(0,o.jsx)("tbody",{children:ee})]}),(0,o.jsxs)(i.i,{className:"tbl four-columns marginbottom",horizontalSpacing:"xl",verticalSpacing:"xs",highlightOnHover:!0,children:[(0,o.jsx)("caption",{children:"Najbardziej prawdopodobny wynik meczu, według portalu forebet.com"}),(0,o.jsx)("thead",{children:T}),(0,o.jsx)("tbody",{children:Y&&U&&X&&Object.entries(Y).map(e=>{if(e[1].homeName===U&&e[1].awayName===X)return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:e[1].homePercent}),(0,o.jsx)("td",{children:e[1].drawPercent}),(0,o.jsx)("td",{children:e[1].awayPercent}),(0,o.jsx)("td",{children:e[1].result})]})})})]}),(0,o.jsxs)(i.i,{className:"tbl four-columns",horizontalSpacing:"xl",verticalSpacing:"xs",highlightOnHover:!0,children:[(0,o.jsx)("caption",{children:"Najbardziej prawdopodobny wynik meczu, według mojej aplikacji"}),(0,o.jsx)("thead",{children:T}),(0,o.jsx)("tbody",{children:et})]}),(0,o.jsxs)("div",{className:"two-grids",children:[(0,o.jsxs)(l.r,{className:"last-results left-last-results",children:[(0,o.jsxs)(l.r.Col,{span:12,className:"last-results-box",children:[(0,o.jsxs)("h1",{children:["Gospodarze ",U]}),(0,o.jsxs)("p",{children:["W ostatnich 15 meczach zdobyli ",H&&h(H.slice(0,15),M,W)," punkt\xf3w, średnia ",H&&(h(H.slice(0,15),M,W)/15).toFixed(2)," pkt na mecz, bilans bramkowy ",H&&f(H.slice(0,15),M,W).home+":"+f(H.slice(0,15),M,W).away]}),(0,o.jsxs)("p",{children:["W ostatnich 5 meczach u siebie zdobyli ",H&&p(H,M)," punkt\xf3w, średnia ",H&&(p(H,M)/5).toFixed(2)," pkt na mecz bilans, bramkowy ",H&&m(H,M).home+":"+m(H,M).away]}),(0,o.jsxs)("p",{children:["Siła tej drużyny na podstawie formy i gry u siebie: ",H&&g(H.slice(0,15),M,!0)]}),(0,o.jsxs)("p",{children:["Przewidywane bramki u siebie: ",H&&n+":"+c]})]}),H&&H.slice(0,15).map(e=>(U||e.HOME_PARTICIPANT_IDS[0]!==M||$((0,k.$)(e.HOME_NAME)),(0,o.jsxs)(l.r.Col,{span:12,className:"last-results-box",children:[(0,o.jsx)("img",{className:"clubLogo",src:e.HOME_IMAGES[0],alt:"Team Home"}),(0,o.jsx)("img",{className:"clubLogo",src:e.AWAY_IMAGES[0],alt:"Team Away"}),(0,o.jsxs)("a",{children:[(0,k.$)(e.HOME_NAME)," ",e.HOME_SCORE_CURRENT,"-",e.AWAY_SCORE_CURRENT,"  (",e.HOME_SCORE_PART_1,"-",e.AWAY_SCORE_PART_1,")  ",(0,k.$)(e.AWAY_NAME)]}),(0,o.jsx)("br",{}),(0,o.jsx)("p",{children:e.ROUND}),(0,o.jsx)("p",{children:(0,j.k)(e.START_TIME)})]})))]}),(0,o.jsxs)(l.r,{className:"last-results right-last-results",children:[(0,o.jsxs)(l.r.Col,{span:12,className:"last-results-box",children:[(0,o.jsxs)("h1",{children:["Goście ",X]}),(0,o.jsxs)("p",{children:["W ostatnich 15 meczach zdobyli ",L&&h(L.slice(0,15),M,W)," punkt\xf3w, średnia ",L&&(h(L.slice(0,15),M,W)/15).toFixed(2)," pkt na mecz, bilans bramkowy ",L&&f(L.slice(0,15),M,W).home+":"+f(L.slice(0,15),M,W).away]}),(0,o.jsxs)("p",{children:["W ostatnich 5 meczach na wyjeździe zdobyli ",L&&u(L,W)," punkt\xf3w, średnia ",L&&(u(L,W)/5).toFixed(2)," pkt na mecz bilans bramkowy ",L&&x(L,W).away+":"+x(L,W).home]}),(0,o.jsxs)("p",{children:["Siła tej drużyny na podstawie formy i gry na wyjeździe: ",L&&g(L.slice(0,15),W,!1)]}),(0,o.jsxs)("p",{children:["Przewidywane bramki na wyjeździe: ",L&&y+":"+w]})]}),L&&L.slice(0,15).map(e=>(X||e.AWAY_PARTICIPANT_IDS[0]!==W||K((0,k.$)(e.AWAY_NAME)),(0,o.jsxs)(l.r.Col,{span:12,className:"last-results-box",children:[(0,o.jsx)("img",{className:"clubLogo",src:e.HOME_IMAGES[0],alt:"Team Home"}),(0,o.jsx)("img",{className:"clubLogo",src:e.AWAY_IMAGES[0],alt:"Team Away"}),(0,o.jsxs)("a",{children:[(0,k.$)(e.HOME_NAME)," ",e.HOME_SCORE_CURRENT,"-",e.AWAY_SCORE_CURRENT," (",e.HOME_SCORE_PART_1,"-",e.AWAY_SCORE_PART_1,") ",(0,k.$)(e.AWAY_NAME)]}),(0,o.jsx)("br",{}),(0,o.jsx)("p",{children:e.ROUND}),(0,o.jsx)("p",{children:(0,j.k)(e.START_TIME)})]})))]})]})]})};function D(e){let{params:t}=e;return(0,o.jsx)(n.Z,{contain:(0,o.jsx)(v,{match:t.match,home:t.home,away:t.away})})}},3078:function(e,t,r){"use strict";function a(e){let t,r,a=2022,o=6,n=4,s=-1,i=0,l=e-1654293600;for(let c=0;c<999;c++)t=a%4==0?366:365,1===o||3===o||5===o||7===o||8===o||10===o||12===o?r=31:4===o||6===o||9===o||11===o?r=30:2===o&&365===t?r=28:2===o&&366===t&&(r=29),l>=86400*t&&(a+=1,l-=86400*t),l<86400*t&&l>=86400*r&&(12!==o?o+=1:(a+=1,o=1),l-=86400*r),l<86400*r&&l>=86400&&(n!==r?n+=1:(n=1,12!==o?o+=1:(a+=1,o=1)),l-=86400),l<86400&&l>=3600&&(23!==s?s+=1:(s=0,n!==r?n+=1:(n=1,12!==o?o+=1:(a+=1,o=1))),l-=3600),l<3600&&l>=60&&(59!==i?i+=1:(i=0,23!==s?s+=1:(s=0,n!==r?n+=1:(n=1,12!==o?o+=1:(a+=1,o=1)))),l-=60);return i<10&&(i="0".concat(i)),"".concat(s,":").concat(i,", ").concat(a,"-").concat(o,"-").concat(n)}r.d(t,{k:function(){return a}})},2143:function(e,t,r){"use strict";function a(e){if("Warta"===e)return"Warta Poznan";if("Korona"===e)return"Korona Kielce";if("Gornik Z."===e)return"Gornik Zabrze";if("Legnica"===e)return"Miedz Legnica";if("Lech"===e)return"Lech Poznan";if("Zaglebie"===e)return"Zaglebie Lubin";if("Rakow"===e)return"Rakow Czestochowa";else if("Lechia"===e)return"Lechia Gdansk";else if("Piast"===e)return"Piast Gliwice";else if("Slask"===e)return"Slask Wroclaw";else if("Legia"===e)return"Legia Warszawa";else return e}r.d(t,{$:function(){return a}})},2726:function(e,t,r){"use strict";r.d(t,{Y:function(){return a}});let a={method:"GET",headers:{"X-RapidAPI-Host":"flashscore.p.rapidapi.com","X-RapidAPI-Key":"1941a7725amshe72888a2f321827p18582bjsnddf354460ab2"}}},8943:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var a=r(1844),o=r(5784),n=r(4761),s=r(8664),i=r(3765),l=r(4601),c=r(5117),d=r(3991),h=r(4685),p=r(4736),u=r(6137),f=r(5044);function m(e){let{icon:t,color:r,label:o,href:n}=e;return(0,a.jsx)(h.e,{href:n,children:(0,a.jsx)(p.k,{sx:e=>({display:"block",width:"100%",padding:e.spacing.xs,borderRadius:e.radius.sm,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,"&:hover":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0]}}),children:(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(f.k,{color:r,variant:"light",children:t}),(0,a.jsx)(c.x,{size:"md",weight:600,children:o})]})})})}let x=[{icon:(0,a.jsx)(d.JOP,{size:16}),color:"violet",label:"Strona gł\xf3wna",href:"/"},{icon:(0,a.jsx)(d.SrG,{size:16}),color:"violet",label:"Zawodnicy",href:"/players"},{icon:(0,a.jsx)(d.Ko8,{size:16}),color:"grape",label:"Kluby",href:"/clubs"}];function j(){let e=x.map(e=>(0,o.createElement)(m,{...e,key:e.label,href:e.href}));return(0,a.jsx)("div",{children:e})}r(1910),r(7331);var b=function(e){let t=(0,n.rZ)(),[r,d]=(0,o.useState)(!1);return(0,a.jsx)(s.V,{styles:{main:{background:"dark"===t.colorScheme?t.colors.dark[8]:t.colors.gray[0]}},navbarOffsetBreakpoint:"sm",asideOffsetBreakpoint:"sm",navbar:(0,a.jsx)(i.w,{p:"md",hiddenBreakpoint:"sm",hidden:!r,width:{sm:200,lg:300},children:(0,a.jsx)(i.w,{height:600,p:"xs",width:{base:300},children:(0,a.jsx)(i.w.Section,{grow:!0,mt:"md",children:(0,a.jsx)(j,{})})})}),footer:(0,a.jsx)(l.$,{height:80,className:"footer",p:"md",children:"Serwis web gromadzący, weryfikujący i analizujacy statystyki piłkarskie"}),children:(0,a.jsx)(c.x,{children:e.contain})})}}},function(e){e.O(0,[584,881,17,744],function(){return e(e.s=5888)}),_N_E=e.O()}]);