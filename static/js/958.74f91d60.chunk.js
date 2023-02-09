"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[958],{1958:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,c,a,i=e(9439),o=e(2791),s=e(1087),u=e(7689),p=e(409),d=e(7107),l=e(168),f=e(4709),h=f.Z.div(r||(r=(0,l.Z)(["\n   display: flex;\n   gap: 30px;\n   padding-top: 15px;\n   padding-bottom: 15px;\n   border-bottom: 1px solid black;\n"]))),x=f.Z.div(c||(c=(0,l.Z)(["\nborder-bottom: 1px solid black;\n\n"]))),v=e(9128),m=e(184),j=(0,f.Z)(s.rU)(a||(a=(0,l.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: #df4d4d;\n  }\n"]))),g=function(n){var t=n.to,e=n.children;return(0,m.jsxs)(j,{to:t,children:[(0,m.jsx)(v.jTe,{size:"24"}),e]})},w=e(3630);function k(){var n,t,e=(0,o.useState)(null),r=(0,i.Z)(e,2),c=r[0],a=r[1],l=(0,u.UO)(),f=null!==(n=null===(t=(0,u.TH)().state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/movies";return(0,o.useEffect)((function(){(0,p.Mc)(l.id).then((function(n){a(n)})).catch((function(n){return console.log(n)}))}),[l.id]),(0,m.jsxs)("div",{children:[(0,m.jsx)(g,{to:f,children:"Back to movies"}),c&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(h,{children:[(0,m.jsx)("div",{children:(0,m.jsx)("img",{width:"200",src:c.poster_path?"https://image.tmdb.org/t/p/w200/".concat(c.poster_path):d,alt:"".concat(c.title||c.name)})}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{children:c.title||c.name}),(0,m.jsxs)("p",{children:["User score:",Math.round(10*c.vote_average),"%"]}),(0,m.jsx)("h2",{children:"Overview"}),(0,m.jsx)("p",{children:c.overview}),(0,m.jsx)("h3",{children:"Genres"}),(0,m.jsx)("p",{children:c.genres.map((function(n){return n.name})).join(", ")})]})]}),(0,m.jsxs)(x,{children:[(0,m.jsx)("p",{children:"Additional information"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(s.rU,{to:"cast",state:{from:f},children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(s.rU,{to:"Reviews",state:{from:f},children:"Reviews"})})]}),(0,m.jsx)(o.Suspense,{fallback:(0,m.jsx)(w.Z,{}),children:(0,m.jsx)(u.j3,{})})]})]})]})}},409:function(n,t,e){e.d(t,{IV:function(){return l},Mc:function(){return p},PY:function(){return u},vw:function(){return f},wH:function(){return d}});var r=e(5861),c=e(4687),a=e.n(c),i=e(1912),o="https://api.themoviedb.org/3",s="7944ae355bdc42ac579681e106149d6b",u=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"/trending/all/day?api_key=").concat(s,"&page=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(s,"&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"/search/movie?api_key=").concat(s,"&query=").concat(t,"&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},7107:function(n,t,e){n.exports=e.p+"static/media/noposter.774c77162175de788c73.jpg"}}]);
//# sourceMappingURL=958.74f91d60.chunk.js.map