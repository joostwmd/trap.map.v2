(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(t,e,a){},30:function(t,e,a){},52:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),c=a(24),s=a.n(c),i=(a(29),a(30),a(9)),o=a(2),u=a(1);var j=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"welcome to trap map"})})},l=a(7),d=a.n(l),b=a(13),p=a(6),f=a(3),m=a(8),O=a.n(m);var h=function(t){var e=t.track,a=t.artistName,n=e.artists,c=Object(r.useState)([]),s=Object(f.a)(c,2),i=s[0],o=s[1];return Object(r.useEffect)((function(){!function(){var t,e="feat: ",r=Object(p.a)(n);try{for(r.s();!(t=r.n()).done;){var c=t.value;a!==c.name&&(e+="".concat(c.name,", "))}}catch(s){r.e(s)}finally{r.f()}o(e)}()}),[]),"feat: "===i?Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:e.album.images[1].url}),Object(u.jsx)("h4",{children:e.name}),Object(u.jsx)("audio",{controls:!0,children:Object(u.jsx)("source",{src:e.preview_url})})]}):"feat: "!==i?Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:e.album.images[1].url}),Object(u.jsx)("h4",{children:e.name}),Object(u.jsx)("h5",{children:i.slice(0,-2)}),Object(u.jsx)("audio",{controls:!0,children:Object(u.jsx)("source",{src:e.preview_url})})]}):void 0};var v=function(t){var e=t.artistName,a=t.artistPicture,r=t.releasedMusic,n=t.links;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:e}),Object(u.jsx)("img",{src:a}),Object(u.jsx)("h4",{children:r}),Object(u.jsx)("a",{href:n.spotify,children:"spotify"}),Object(u.jsx)("a",{href:n.youtube,children:"youtube"}),Object(u.jsx)("a",{href:n.instagram,children:"insta"})]})};var x=function(){var t="https://trapmapversion2.herokuapp.com",e=Object(r.useState)(""),a=Object(f.a)(e,2),n=a[0],c=a[1],s=Object(r.useState)(""),i=Object(f.a)(s,2),o=i[0],j=i[1],l=Object(r.useState)(""),m=Object(f.a)(l,2),x=m[0],y=m[1],g=Object(r.useState)({}),k=Object(f.a)(g,2),w=k[0],I=k[1],S=Object(r.useState)([]),N=Object(f.a)(S,2),F=N[0],C=N[1],L=function(){var t=Object(b.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=localStorage.getItem("artistIds"),t.abrupt("return",e.split(":"));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),P=function(){var e=Object(b.a)(d.a.mark((function e(a){var r,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={spotifyId:a},e.next=3,O.a.post("".concat(t,"/spotify/loadArtistProfile"),r);case 3:return n=e.sent,e.next=6,n;case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(b.a)(d.a.mark((function e(a){var r,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={dataBaseId:a},e.next=3,O.a.post("".concat(t,"/dataBase/artistProfile"),r);case 3:return n=e.sent,e.next=6,n;case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){L().then((function(t){P(t[0]).then((function(t){c(t.data[0].name),j(t.data[0].images[0].url),y(function(t){var e,a=0,r=0,n=0,c=Object(p.a)(t);try{for(c.s();!(e=c.n()).done;){var s=e.value;"single"===s.album_type?(a++,r++):"album"===s.album_type&&(a+=s.total_tracks,n++)}}catch(i){c.e(i)}finally{c.f()}return"tracks : ".concat(a,", singles : ").concat(r,", albums : ").concat(n)}(t.data[2])),C(t.data[1])})),_(t[1]).then((function(t){I({spotify:t.data.spotifyLink,youtube:t.data.youtubeLink,instagram:t.data.instagramLink})}))}))}),[]),Object(u.jsxs)("div",{id:"profileWrapper",children:[Object(u.jsx)(v,{artistName:n,artistPicture:o,releasedMusic:x,links:w}),F.map((function(t){if(null!==t.preview_url)return Object(u.jsx)("div",{children:Object(u.jsx)(h,{track:t,artistName:n})},t.name)}))]})},y=a(14),g=a.n(y);var k=function(){var t=Object(r.useRef)(null),e=Object(r.useRef)(null),a=Object(r.useState)(13.404954),n=Object(f.a)(a,2),c=n[0],s=n[1],i=Object(r.useState)(52.520008),o=Object(f.a)(i,2),j=o[0],l=o[1],d=Object(r.useState)(9),b=Object(f.a)(d,2),m=b[0],h=b[1];g.a.accessToken="pk.eyJ1Ijoiam9vc3R3bWQiLCJhIjoiY2t1NDQ3NmJqMXRwbzJwcGM5a3FuY3B3dCJ9.yyon_mO5Y9sI1WgD-XFDRQ";var v=[];return Object(r.useEffect)((function(){O.a.get("".concat("https://trapmapversion2.herokuapp.com","/dataBase/map")).then((function(t){!function(t){var e,a=Object(p.a)(t);try{for(a.s();!(e=a.n()).done;){var r=e.value,n={type:"feature",properties:{artistName:r.name,artistPicture:r.picture,artistDatabaseId:r._id,artistSpotifyId:r.spotifyID},geometry:{type:"Point",coordinates:r.coordinates}};v.push(n)}}catch(c){a.e(c)}finally{a.f()}}(t.data)})),e.current||(e.current=new g.a.Map({container:t.current,style:"mapbox://styles/joostwmd/ckvwifepf21kj15pflu8gbkdd",center:[c,j],zoom:m}),e.current&&(e.current.on("move",(function(){s(e.current.getCenter().lng.toFixed(4)),l(e.current.getCenter().lat.toFixed(4)),h(e.current.getZoom().toFixed(2))})),e.current.on("load",(function(){e.current.addSource("artists",{type:"geojson",data:{type:"FeatureCollection",features:v}});for(var t=0;t<v.length;t++){var a=document.createElement("div");a.className="marker",new g.a.Marker(a).setLngLat(v[t].geometry.coordinates).addTo(e.current);for(var r=document.getElementsByClassName("marker"),n=function(t){r[t].addEventListener("click",(function(){var e,a,r;e=v[t].properties.artistDatabaseId,a=v[t].properties.artistSpotifyId,"undefined"!==typeof Storage&&localStorage.setItem("artistIds","".concat(a,":").concat(e)),r=v[t].properties.artistName,window.location.href="".concat("https://trapmapversion2.herokuapp.com","/map/").concat(r)})),r[t].style.backgroundImage="url(".concat(v[t].properties.artistPicture,")")},c=0;c<r.length;c++)n(c)}}))))}),[]),Object(u.jsx)("div",{children:Object(u.jsx)("div",{ref:t,className:"map-container"})})};var w=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(i.b,{to:"/",children:Object(u.jsx)("button",{children:"home"})}),Object(u.jsx)(i.b,{to:"/map",children:Object(u.jsx)("button",{children:"map"})})]})};var I=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(w,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",element:Object(u.jsx)(j,{})}),Object(u.jsx)(o.a,{exact:!0,path:"/map",element:Object(u.jsx)(k,{})}),Object(u.jsx)(o.a,{exact:!0,path:"/map/:artistName",element:Object(u.jsx)(x,{})})]})]})})},S=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,53)).then((function(e){var a=e.getCLS,r=e.getFID,n=e.getFCP,c=e.getLCP,s=e.getTTFB;a(t),r(t),n(t),c(t),s(t)}))};a(51);s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(I,{})}),document.getElementById("root")),S()}},[[52,1,2]]]);
//# sourceMappingURL=main.0354ff02.chunk.js.map