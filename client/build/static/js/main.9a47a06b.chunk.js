(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{122:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(27),c=n.n(r),o=(n(93),n(94),n(95),n(96),n(58)),i=n(4),s=n(8),l=n(10),u=n.n(l),d=n.p+"static/media/chromeGrillzBottom.77043c98.png",f=n.p+"static/media/chromeGrillzTop.2f6fd0de.png",p=n.p+"static/media/trapmapLetteringRectangle.c411fe52.png",m=n(51),j=n(53),A=n(54),b=n(55),k=n(5),S=n(3);var v=function(){var t=Object(a.useState)(""),e=Object(s.a)(t,2),n=e[0],r=e[1];return Object(S.jsxs)("div",{children:[Object(S.jsx)(m.a,{children:Object(S.jsx)(j.a,{src:p,w:"90vw",mb:"3vh"})}),Object(S.jsxs)(m.a,{flexDir:"column",ml:"5vw",mr:"5vw",mb:"15vh",children:[Object(S.jsxs)(m.c,{align:"center",fontSize:"7.5vw",color:"#fff",letterSpacing:"wider",mb:"5vh",children:[Object(S.jsx)("span",{style:{color:"#9381FF"},children:"don't "}),"let the",Object(S.jsx)("span",{style:{color:"#9381FF"},children:" algorithms dictate "}),"what",Object(S.jsx)("span",{style:{color:"#9381FF"},children:" music "}),"you listen to"]}),Object(S.jsx)(m.d,{align:"center",mb:"2vh",fontSize:"4vw",children:"we have mapped the world of trapmusic and thus created a way for you to discover new artists without playlists or algorithms."}),Object(S.jsx)(m.d,{align:"center",mb:"2vh",fontSize:"4vw",children:"every trapper is linked on our map in the hood he represents with his music. no marker is bigger or smaller, lighter or darker, all artists are displayed equally. all you need to do is to browse the map"}),Object(S.jsx)(A.a,{bg:"brand.200",rounded:"md",w:"50vw",h:"15vw",onClick:function(){window.location.href="".concat(k.CLIENT_URL,"/map")},children:Object(S.jsx)(m.c,{fontSize:"10vw",color:"#fff",letterSpacing:"wider",children:"map"})})]}),Object(S.jsx)(m.a,{mr:"5vw",ml:"5vw",mb:"15vh",children:Object(S.jsxs)(m.b,{flexDir:"column",alignItems:"center",children:[Object(S.jsx)(j.a,{src:f}),Object(S.jsxs)(m.b,{flexDir:"column",alignItems:"center",children:[Object(S.jsx)(m.c,{fontSize:"15vw",color:"#fff",textDecorationLine:"underline",textDecorationColor:"brand.200",children:"stay tuned"}),Object(S.jsx)(m.d,{align:"center",mb:"5vh",fontSize:"3.5vw",children:"we are currently developing an app that we release in summer 22. you can enter your email address to receive an early access key and the opportunity to contribute your ideas and develop this platform together with us."}),Object(S.jsx)(b.a,{id:"emailInput",value:n,onChange:function(t){return r(t.target.value)},placeholder:"email adress",focusBorderColor:"brand.200",size:"md",width:"90vw",mb:"2vh"}),Object(S.jsx)(A.a,{onClick:function(){return function(){if("submit"===document.getElementById("singUpButton").firstElementChild.innerHTML){var t={email:n};u.a.post("".concat(k.SERVER_URL,"/traffic/addSignUpForBetaKey"),t),document.getElementById("singUpButton").firstChild.innerHTML="thanks",document.getElementById("singUpButton").style.backgroundColor="#fff",document.getElementById("singUpButton").firstChild.style.color="#9381FF",document.getElementById("emailInput").disabled=!0}}()},id:"singUpButton",bg:"brand.200",rounded:"md",w:"50vw",h:"15vw",mb:"5vh",children:Object(S.jsx)(m.c,{fontSize:"10vw",color:"#fff",letterSpacing:"wider",children:"submit"})})]}),Object(S.jsx)(j.a,{src:d})]})}),Object(S.jsxs)(m.a,{flexDir:"column",ml:"5vw",mr:"5vw",mb:"5vh",children:[Object(S.jsx)(m.c,{aling:"center",fontSize:"12vw",color:"#fff",textDecorationLine:"underline",textDecorationColor:"brand.200",children:"contact"}),Object(S.jsxs)(m.d,{align:"center",fontSize:"3.5vw",color:"#fff",children:["if you have ideas or suggestions for improvements or if you miss an artist on our map, DM on us on ",Object(S.jsx)("a",{href:"https://www.instagram.com/trapmap.berlin/",style:{textDecoration:"underline",textDecorationColor:"#9381FF"},children:"insta"})]})]})]})},h=n(15),g=n.n(h),x=n(21),y=n(23);var I=function(t){var e=t.artistDatabaseId,n=t.track,a=t.count,r=function(t){document.getElementById("audioPlayer".concat(t)).pause(),document.getElementById("trackTitle".concat(t)).style.color="#fff",document.getElementById("trackCount".concat(t)).style.color="#fff"},c=function(t){var e=document.getElementsByClassName("audioPlayer"),n=document.getElementById("audioPlayer".concat(t));if(n.paused){var a,c=Object(y.a)(e);try{for(c.s();!(a=c.n()).done;){var o=a.value;r(o.id.replaceAll("audioPlayer",""))}}catch(i){c.e(i)}finally{c.f()}!function(t){document.getElementById("audioPlayer".concat(t)).play(),document.getElementById("trackTitle".concat(t)).style.color="#9381FF",document.getElementById("trackCount".concat(t)).style.color="#9381FF"}(t)}else r(t);n.ontimeupdate=function(){n.currentTime>=30&&r(t)}};return Object(S.jsxs)("div",{onClick:function(){c(n.name)},children:[Object(S.jsxs)(m.b,{alignItems:"center",mb:"7.5vh",children:[Object(S.jsxs)(m.b,{alignItems:"center",mr:"10vw",ml:"5vw",children:[Object(S.jsx)(m.a,{w:"10vw",h:"10vw",children:Object(S.jsx)(m.d,{id:"trackCount".concat(n.name),marginRight:"5vw",fontSize:"5vw",children:a})}),Object(S.jsx)(j.a,{src:n.album.images[1].url,width:"12.5vw",height:"12.5vw"})]}),Object(S.jsx)(m.b,{flexDir:"column",alignItems:"left",children:Object(S.jsx)(m.d,{id:"trackTitle".concat(n.name),fontSize:"5vw",children:"".concat(n.name)})})]}),Object(S.jsx)("audio",{id:"audioPlayer".concat(n.name),className:"audioPlayer",onPlay:function(){!function(t){var e={artistDatabaseId:t};u.a.post("".concat(k.SERVER_URL,"/traffic/addSnippetPlayed"),e)}(e)},children:Object(S.jsx)("source",{src:n.preview_url,type:"audio/mp3"})})]})},J=n.p+"static/media/spotifyLogo.dffc4909.png",w=n.p+"static/media/youtubeLogo.6615ff3f.png",O=n.p+"static/media/instagramLogo.dad2e219.png";var E=function(t){var e=t.app,n=t.link,a=t.artistDatabaseId;return"spotify"===e?Object(S.jsx)("a",{href:n,onClick:function(){!function(){var t={artistDatabaseId:a};u.a.post("".concat(k.SERVER_URL,"/traffic/addSpotifyProfileVisit"),t)}()},children:Object(S.jsx)(j.a,{src:J,alt:"spotify logo",w:"12vw",h:"12vw",ml:"6vw",mr:"6vw"})}):"appleMusic"===e?Object(S.jsx)("a",{href:n,onClick:function(){!function(){var t={artistDatabaseId:a};u.a.post("".concat(k.SERVER_URL,"/traffic/addAppleMusicProfileVisit"),t)}()},children:Object(S.jsx)(j.a,{src:"data:image/png;base64,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",alt:"apple music logo",w:"12vw",h:"12vw",ml:"6vw",mr:"6vw"})}):"youtube"===e?Object(S.jsx)("a",{href:n,onClick:function(){!function(){var t={artistDatabaseId:a};u.a.post("".concat(k.SERVER_URL,"/traffic/addYoutubeProfileVisit"),t)}()},children:Object(S.jsx)(j.a,{src:w,alt:"youtube logo",w:"12vw",h:"12vw",ml:"6vw",mr:"6vw"})}):"instagram"===e?Object(S.jsx)("a",{href:n,onClick:function(){!function(){var t={artistDatabaseId:a};u.a.post("".concat(k.SERVER_URL,"/traffic/addInstagramProfileVisit"),t)}()},children:Object(S.jsx)(j.a,{src:O,alt:"instagram logo",w:"12vw",h:"12vw",ml:"6vw",mr:"6vw"})}):void 0};var B=function(t){var e=t.artistPicture,n=Object(S.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"90%",height:"90%",children:[Object(S.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(S.jsx)("path",{d:"M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z",fill:"rgba(147,129,255,1)"})]});return Object(S.jsx)("div",{children:Object(S.jsxs)("div",{style:{position:"relative"},children:[Object(S.jsx)(j.a,{src:e,w:"100vw",mb:"5vh"}),Object(S.jsx)(m.a,{onClick:function(){window.location.href="".concat(k.CLIENT_URL,"/map")},w:"7.5vw",h:"7.5vw",pos:"absolute",top:"2vw",ml:"2vw",backgroundColor:"#fff",borderRadius:"50%",children:n})]})})};var D=function(){var t=Object(a.useState)(""),e=Object(s.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)(""),o=Object(s.a)(c,2),i=o[0],l=o[1],d=Object(a.useState)(""),f=Object(s.a)(d,2),p=f[0],j=f[1],A=Object(a.useState)([]),b=Object(s.a)(A,2),v=b[0],h=b[1],y=Object(a.useState)([]),J=Object(s.a)(y,2),w=J[0],O=J[1],D=0,Q=function(){var t=Object(x.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[window.location.pathname.split(":")[1],window.location.pathname.split(":")[2]]);case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),N=function(){var t=Object(x.a)(g.a.mark((function t(e){var n,a,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={spotifyId:e},t.next=3,u.a.post("".concat(k.SERVER_URL,"/spotify/artistProfile"),n);case 3:return a=t.sent,t.next=6,a;case 6:return r=t.sent,t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),L=function(){var t=Object(x.a)(g.a.mark((function t(e){var n,a,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={dataBaseId:e},t.next=3,u.a.post("".concat(k.SERVER_URL,"/dataBase/artistProfile"),n);case 3:return a=t.sent,t.next=6,a;case 6:return r=t.sent,t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){Q().then((function(t){L(t[0]).then((function(t){l(t.data._id),h([["spotify",t.data.spotifyLink],["appleMusic",t.data.appleMusicLink],["youtube",t.data.youtubeLink],["instagram",t.data.instagramLink]]),function(t){var e={artistDatabaseId:t};u.a.post("".concat(k.SERVER_URL,"/traffic/addTrapMapProfileVisit"),e)}(t.data._id),sessionStorage.setItem("coords",t.data.coordinates),sessionStorage.setItem("city",t.data.city)})),N(t[1]).then((function(t){r(t.data[0].name),j(t.data[0].images[0].url),O(t.data[1])}))}))}),[]),Object(S.jsxs)("div",{className:"artistProfile",children:[Object(S.jsx)(B,{artistName:n,artistPicture:p}),Object(S.jsx)(m.b,{justifyContent:"center",h:"20vw",mb:"2vh",children:v.map((function(t){if(""!==t[1])return Object(S.jsx)(E,{app:t[0],link:t[1],artistDatabaseId:i},t[1])}))}),Object(S.jsx)(m.a,{children:Object(S.jsx)(m.c,{color:"#fff",mb:"5vh",letterSpacing:"wider",fontSize:"17.5vw",textDecorationLine:"underline",textDecorationColor:"brand.200",children:n})}),Object(S.jsx)("div",{children:w.map((function(t){if(null!==t.preview_url)return D++,Object(S.jsx)(I,{track:t,artistName:n,artistDatabaseId:i,count:D},t.name)}))})]})};var Q=function(t){var e=t.currentMap,n=t.currentCity,a=t.jumpToCity;return Object(S.jsx)("div",{className:"mapNav",children:Object(S.jsx)(m.b,{bg:"brand.100",w:"100vw",h:"10vw",alignItems:"center",justifyContent:"space-around",children:Object(S.jsx)(m.b,{ml:"2.5vw",mr:"2.5vw",children:["hamburg","berlin","vienna"].map((function(t){return n===t?Object(S.jsx)(m.c,{onClick:function(){return a(e,t)},fontSize:"6vw",color:"brand.200",letterSpacing:"wider",mr:"4.25vw",ml:"4.25vw",children:t},t):Object(S.jsx)(m.c,{onClick:function(){return a(e,t)},fontSize:"6vw",color:"#fff",letterSpacing:"wider",mr:"4.25vw",ml:"4.25vw",children:t},t)}))})})})},N=n(28),L=n.n(N);n(56);var C=function(){L.a.accessToken=k.MAPBOX_TOKEN;var t=Object(a.useRef)(null),e=Object(a.useRef)(null),n=Object(a.useState)(),r=Object(s.a)(n,2),c=r[0],o=r[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),d=l[0],f=l[1],p=[13.404954,52.520008],m=[16.399278140182776,48.216024738236314],j=[10.020145509856745,53.57073340285103],A=function(){var t=Object(x.a)(g.a.mark((function t(){var e;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,sessionStorage.getItem("city");case 2:if(null!==(e=t.sent)){t.next=7;break}return t.abrupt("return","berlin");case 7:return t.abrupt("return",e);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=[],v=function(){var t=Object(x.a)(g.a.mark((function t(){var e,n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,sessionStorage.getItem("coords");case 2:return e=t.sent,t.next=5,sessionStorage.getItem("zoom");case 5:if(n=t.sent,null===e||null===n){t.next=10;break}return t.abrupt("return",[[Number(e.split(",")[0]),Number(e.split(",")[1])],Number(n)]);case 10:if(null===e||null!==n){t.next=14;break}return t.abrupt("return",[[Number(e.split(",")[0]),Number(e.split(",")[1])],12]);case 14:if(null!==e||null!==n){t.next=16;break}return t.abrupt("return",[p,8.75]);case 16:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(t,n,a){var r=8*Number(e.current.getZoom()-a)+22,c=4*Number(e.current.getZoom()-a)+5;t.style.height="".concat(r,"px"),t.style.width="".concat(r,"px"),t.innerHTML="<p style='font-size:".concat(c,"px'>").concat(n.properties.artistName,"</p>")},I=function(t){var e=document.createElement("div");return e.className="homeButton",e.innerHTML="<p>home</p>",e.addEventListener("click",(function(){window.location.href="".concat(k.CLIENT_URL)})),new L.a.Marker(e).setLngLat(J(t)).addTo(t)},J=function(t){return[t.getCenter().lng,t.getBounds()._ne.lat]};return Object(a.useEffect)((function(){u.a.get("".concat(k.SERVER_URL,"/dataBase/map")).then((function(t){!function(t){var e,n=Object(y.a)(t);try{for(n.s();!(e=n.n()).done;){var a=e.value,r={type:"feature",properties:{artistName:a.name,artistPicture:a.picture,artistDatabaseId:a._id,artistSpotifyId:a.spotifyID,city:a.city},geometry:{type:"Point",coordinates:a.coordinates}};b.push(r)}}catch(c){n.e(c)}finally{n.f()}}(t.data)})),A().then((function(t){f(t)})),v().then((function(n){e.current=function(n,a){if(!e.current)return e.current=new L.a.Map({container:t.current,style:"mapbox://styles/joostwmd/ckucoygnc51gn18s0xu6mjltv",center:n,zoom:a,minZoom:8.65,attributionControl:!1}),e.current}(n[0],n[1]),o(e.current),e.current.dragRotate.disable(),e.current.touchZoomRotate.disableRotation(),e.current.on("load",(function(){e.current.addSource("artists",{type:"geojson",data:{type:"FeatureCollection",features:b}});for(var t=function(t){var n=document.createElement("div");n.className="marker",new L.a.Marker(n).setLngLat(b[t].geometry.coordinates).addTo(e.current);for(var a=document.getElementsByClassName("marker"),r=function(t){a[t].addEventListener("click",(function(){var n,a,r;n=b[t].properties.artistDatabaseId,a=b[t].properties.artistSpotifyId,r=e.current.getZoom(),sessionStorage.setItem("zoom",r),window.location.href="".concat(k.CLIENT_URL,"/map/:").concat(n,":").concat(a)})),a[t].style.backgroundImage="url(".concat(b[t].properties.artistPicture,")"),a[t].innerHTML="<p>".concat(b[t].properties.artistName,"</p>"),e.current.on("zoom",(function(){h(a[t],b[t],8.75)})),h(a[t],b[t],8.75)},c=0;c<a.length;c++)r(c)},n=0;n<b.length;n++)t(n)}));var a=I(e.current);e.current.on("zoom",(function(){a.setLngLat(J(e.current))})),e.current.on("move",(function(){a.setLngLat(J(e.current))}))}))}),[]),Object(S.jsxs)("div",{children:[Object(S.jsx)(Q,{currentMap:c,currentCity:d,jumpToCity:function(t,e){"berlin"===e&&(t.setMinZoom(void 0),t.flyTo({center:p,speed:1.25}),f("berlin"),t.once("moveend",(function(){t.setMinZoom(8.65)}))),"hamburg"===e&&(t.setMinZoom(void 0),t.flyTo({center:j,speed:1.25}),f("hamburg"),t.once("moveend",(function(){t.setMinZoom(8.65)}))),"vienna"===e&&(t.setMinZoom(void 0),t.flyTo({center:m,speed:1.25}),f("vienna"),t.once("moveend",(function(){t.setMinZoom(8.65)})))}}),Object(S.jsx)("div",{ref:t,className:"map-container"})]})};var R=function(){return Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(o.a,{children:Object(S.jsxs)(i.c,{children:[Object(S.jsx)(i.a,{exact:!0,path:"/",element:Object(S.jsx)(v,{})}),Object(S.jsx)(i.a,{exact:!0,path:"/map",element:Object(S.jsx)(C,{})}),Object(S.jsx)(i.a,{exact:!0,path:"/map/:artistName",element:Object(S.jsx)(D,{})})]})})})},U=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,124)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),r(t),c(t),o(t)}))},T=n(17),V=n(13),F=function(){return Object(S.jsx)(V.a,{styles:"\n      \n      @font-face {\n        font-family: 'PhillySans';\n        font-style: normal;\n        font-weight: 700;\n        font-display: swap;\n        src: url('../fonts/PhillySans.woff') format('woff')\n        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n      }\n      \n      @font-face {\n        font-family: 'Montserrat';\n        font-style: normal;\n        font-weight: 600;\n        font-display: swap;\n        src: url('../fonts/Montserrat.woff') format('woff')\n        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n      }\n      "})},G=Object(T.b)({fonts:{heading:"PhillySans",body:"Montserrat"},styles:{global:{body:{bg:"#000"},h1:{fontFamily:"PhillySans",color:"#fff"},p:{fontFamily:"Montserrat",color:"#fff"}}},colors:{brand:{100:"#000",200:"#9381FF"}}});c.a.render(Object(S.jsx)(a.StrictMode,{children:Object(S.jsxs)(T.a,{theme:G,children:[Object(S.jsx)(F,{}),Object(S.jsx)(R,{})]})}),document.getElementById("root")),U()},5:function(t,e){t.exports={CLIENT_URL:"https://trapmap.herokuapp.com",SERVER_URL:"https://trapmap.herokuapp.com",MAPBOX_TOKEN:"pk.eyJ1Ijoiam9vc3R3bWQiLCJhIjoiY2t1NDQ3NmJqMXRwbzJwcGM5a3FuY3B3dCJ9.yyon_mO5Y9sI1WgD-XFDRQ"}},93:function(t,e,n){},94:function(t,e,n){},95:function(t,e,n){},96:function(t,e,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.9a47a06b.chunk.js.map