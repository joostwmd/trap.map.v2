(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{44:function(t,e,n){},45:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n.n(c),r=n(38),i=n.n(r),s=(n(44),n(45),n(13)),o=n(6),u=n(3);var j=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"home"})})},b=n(18),d=n.n(b),l=n(25),O=n(11),h=n(7),p=n(17),f=n.n(p);var x=function(t){var e=t.track;return Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:e.album.images[1].url}),Object(u.jsx)("h4",{children:e.name}),Object(u.jsx)("audio",{controls:!0,children:Object(u.jsx)("source",{src:e.preview_url})})]})};var m=function(t){var e=t.artistName,n=t.artistPicture,c=t.releasedMusic,a=t.links;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:e}),Object(u.jsx)("img",{src:n}),Object(u.jsx)("h4",{children:c}),Object(u.jsx)("a",{href:a.spotify,children:"spotify"}),Object(u.jsx)("a",{href:a.youtube,children:"youtube"}),Object(u.jsx)("a",{href:a.instagram,children:"insta"})]})};var v=function(){var t=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_URL,e={artistDB:window.location.pathname.split("/")[2]},n=Object(c.useState)(""),a=Object(h.a)(n,2),r=a[0],i=a[1],s=Object(c.useState)(""),o=Object(h.a)(s,2),j=o[0],b=o[1],p=Object(c.useState)(""),v=Object(h.a)(p,2),g=v[0],S=v[1],_=Object(c.useState)({}),y=Object(h.a)(_,2),k=y[0],w=y[1],E=Object(c.useState)([]),T=Object(h.a)(E,2),C=T[0],D=T[1],P=function(){var n=Object(l.a)(d.a.mark((function n(){var c,a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.a.post("".concat(t,"/spotify/loadArtistProfile"),e);case 2:return c=n.sent,n.next=5,c;case 5:return a=n.sent,console.log("spotify data",a),n.abrupt("return",a);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),R=function(){var n=Object(l.a)(d.a.mark((function n(){var c,a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.a.post("".concat(t,"/dataBase/artistProfile"),e);case 2:return c=n.sent,n.next=5,c;case 5:return a=n.sent,console.log("db data",a),n.abrupt("return",a);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(c.useEffect)((function(){P().then((function(t){i(t.data[0].name),b(t.data[0].images[0].url),S(function(t){var e,n=0,c=0,a=0,r=Object(O.a)(t);try{for(r.s();!(e=r.n()).done;){var i=e.value;"single"===i.album_type?(n++,c++):"album"===i.album_type&&(n+=i.total_tracks,a++)}}catch(s){r.e(s)}finally{r.f()}return"tracks : ".concat(n,", singles : ").concat(c,", albums : ").concat(a)}(t.data[2])),D(t.data[1])})),R().then((function(t){w({spotify:t.data.spotifyLink,youtube:t.data.youtubeLink,instagram:t.data.instagramLink})}))}),[]),Object(u.jsxs)("div",{id:"profileWrapper",children:[Object(u.jsx)(m,{artistName:r,artistPicture:j,releasedMusic:g,links:k}),C.map((function(t){if(null!==t.preview_url)return Object(u.jsx)("div",{children:Object(u.jsx)(x,{track:t})})}))]})},g=n(27),S=n(26);var _=function(t){var e=t.artist;return Object(u.jsx)("div",{id:"mapMakerWrapper",children:Object(u.jsx)("img",{src:e.picture,stlye:{height:10,width:10}})})};var y=function(){var t={latitude:52.520008,longitude:13.404954,width:"100w",height:"100vh",zoom:9,minZoom:9,berlinBounds:[[13.192625881080286,52.38949809002746],[13.659758765765956,52.64256574061617]]},e=Object(c.useState)(t),n=Object(h.a)(e,2),a=n[0],r=n[1],i=Object(c.useState)([]),o=Object(h.a)(i,2),j=o[0],b=o[1],d=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_URL;return Object(c.useEffect)((function(){f.a.get("".concat(d,"/dataBase/map")).then((function(t){console.log("all artists",t),b(t.data)}))}),[]),Object(u.jsx)("div",{children:Object(u.jsx)(S.b,Object(g.a)(Object(g.a)({},a),{},{mapboxApiAccessToken:"pk.eyJ1Ijoiam9vc3R3bWQiLCJhIjoiY2t1NDQ3NmJqMXRwbzJwcGM5a3FuY3B3dCJ9.yyon_mO5Y9sI1WgD-XFDRQ",mapStyle:"mapbox://styles/joostwmd/ckvwifepf21kj15pflu8gbkdd",onViewportChange:function(e){(function(t,e,n){var c=Object(h.a)(n,2),a=Object(h.a)(c[0],2),r=a[0],i=a[1],s=Object(h.a)(c[1],2),o=s[0],u=s[1];return e<r||e>o||t<i||t>u})(e.latitude,e.longitude,t.berlinBounds)||r(e)},children:j.map((function(t){return Object(u.jsx)(S.a,{latitude:t.coordinates[1],longitude:t.coordinates[0],children:Object(u.jsx)(s.b,{to:"".concat(t._id),children:Object(u.jsx)(_,{artist:t})})})}))}))})};var k=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(s.b,{to:"/",children:Object(u.jsx)("button",{children:"home"})}),Object(u.jsx)(s.b,{to:"/map",children:Object(u.jsx)("button",{children:"map"})})]})};var w=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(s.a,{children:[Object(u.jsx)(k,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",element:Object(u.jsx)(j,{})}),Object(u.jsx)(o.a,{exact:!0,path:"/map",element:Object(u.jsx)(y,{})}),Object(u.jsx)(o.a,{exact:!0,path:"/map/:artistDB",element:Object(u.jsx)(v,{})})]})]})})},E=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root")),E()}},[[67,1,2]]]);
//# sourceMappingURL=main.80fba5a4.chunk.js.map