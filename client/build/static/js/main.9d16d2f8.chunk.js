(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{121:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a(25),c=a.n(r),o=(a(92),a(93),a(94),a(95),a(57)),i=a(4),s=a(9),l=a(8),p=a.n(l),d=a.p+"static/media/chromeGrillzBottom.1ddb87c3.png",u=a.p+"static/media/chromeGrillzTop.2f6fd0de.png",f=a.p+"static/media/trapmapLetteringRectangle.c411fe52.png",m=a(50),A=a(52),j=a(53),k=a(54),h=a(3);var S=function(){var t=Object(n.useState)(""),e=Object(s.a)(t,2),a=e[0],r=e[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)(m.a,{children:Object(h.jsx)(A.a,{src:f,w:"90vw",mb:"3vh"})}),Object(h.jsxs)(m.a,{flexDir:"column",ml:"5vw",mr:"5vw",mb:"15vh",children:[Object(h.jsxs)(m.c,{align:"center",fontSize:"7.5vw",color:"#fff",letterSpacing:"wider",mb:"4vh",children:[Object(h.jsx)("span",{style:{color:"#9381FF"},children:"don't "}),"let the",Object(h.jsx)("span",{style:{color:"#9381FF"},children:" algorithms dictate "}),"what",Object(h.jsx)("span",{style:{color:"#9381FF"},children:" music "}),"you listen to",Object(h.jsx)("span",{style:{color:"#9381FF"},children:" anymore "})]}),Object(h.jsx)(m.d,{align:"center",mb:"2vh",fontSize:"3.5vw",children:"we have mapped the world of trapmusic and thus created a way for you to discover new artists without playlists or algorithms."}),Object(h.jsx)(m.d,{align:"center",mb:"2vh",fontSize:"3.5vw",children:"Every trapper is linked on our map in the hood he represents with his music. No marker is bigger or smaller, lighter or darker, all trappers are displayed equally. All you need to do is to browse the map"}),Object(h.jsx)(j.a,{bg:"brand.200",rounded:"md",w:"50vw",h:"15vw",onClick:function(){window.location.href="".concat("https://trapmap.herokuapp.com","/map")},children:Object(h.jsx)(m.c,{fontSize:"10vw",color:"#fff",letterSpacing:"wider",children:"map"})})]}),Object(h.jsx)(m.a,{mr:"5vw",ml:"5vw",mb:"15vh",children:Object(h.jsxs)(m.b,{flexDir:"column",alignItems:"center",children:[Object(h.jsx)(A.a,{src:u}),Object(h.jsxs)(m.b,{flexDir:"column",alignItems:"center",children:[Object(h.jsx)(m.c,{fontSize:"15vw",color:"#fff",children:"stay tuned"}),Object(h.jsx)(m.d,{align:"center",mb:"5vh",fontSize:"3.5vw",children:"we are currently developing an app that we would like to release in summer 22. You can enter your email address to receive an early access key and the opportunity to contribute your ideas and develop this platform together with us."}),Object(h.jsx)(k.a,{id:"emailInput",value:a,onChange:function(t){return r(t.target.value)},placeholder:"email adress",focusBorderColor:"brand.200",size:"md",width:"90vw",mb:"2vh"}),Object(h.jsx)(j.a,{onClick:function(){return function(){if("submit"===document.getElementById("singUpButton").firstElementChild.innerHTML){var t={email:a};p.a.post("".concat("https://trapmap.herokuapp.com","/traffic/addSignUpForBetaKey"),t),document.getElementById("singUpButton").firstChild.innerHTML="thanks",document.getElementById("singUpButton").style.backgroundColor="#fff",document.getElementById("singUpButton").firstChild.style.color="#9381FF",document.getElementById("emailInput").disabled=!0}}()},id:"singUpButton",bg:"brand.200",rounded:"md",w:"50vw",h:"15vw",mb:"2vh",children:Object(h.jsx)(m.c,{fontSize:"10vw",color:"#fff",letterSpacing:"wider",children:"submit"})})]}),Object(h.jsx)(A.a,{src:d})]})}),Object(h.jsxs)(m.a,{flexDir:"column",ml:"5vw",mr:"5vw",children:[Object(h.jsx)(m.d,{align:"center",fontSize:"3.5vw",color:"#fff",children:"if you have ideas or suggestions for improvements or if you miss a trapper on our map, DM on us on"}),Object(h.jsx)(m.c,{aling:"center",fontSize:"12vw",color:"#fff",children:Object(h.jsx)("a",{href:"https://www.instagram.com/mapmusic.berlin/",style:{textDecoration:"underline",textDecorationColor:"#9381FF"},children:"insta"})})]})]})},b=a(19),v=a.n(b),g=a(35),J=a(21);var I=function(t){t.artistName;var e=t.artistDatabaseId,a=t.track,n=t.count,r=function(t){document.getElementById("audioPlayer:".concat(t)).pause(),document.getElementById("trackTitle:".concat(t)).style.color="#fff",document.getElementById("trackCount:".concat(t)).style.color="#fff"},c=function(t){var e=document.getElementsByClassName("audioPlayer"),a=document.getElementById("audioPlayer:".concat(t));if(a.paused){var n,c=Object(J.a)(e);try{for(c.s();!(n=c.n()).done;){var o=n.value;r(o.id.split(":")[1])}}catch(i){c.e(i)}finally{c.f()}!function(t){document.getElementById("audioPlayer:".concat(t)).play(),document.getElementById("trackTitle:".concat(t)).style.color="#9381FF",document.getElementById("trackCount:".concat(t)).style.color="#9381FF"}(t)}else r(t);a.ontimeupdate=function(){a.currentTime>=30&&r(t)}};return Object(h.jsxs)("div",{onClick:function(){c(a.name)},children:[Object(h.jsxs)(m.b,{alignItems:"center",mb:"7.5vh",children:[Object(h.jsxs)(m.b,{alignItems:"center",mr:"10vw",ml:"5vw",children:[Object(h.jsx)(m.a,{w:"10vw",h:"10vw",children:Object(h.jsx)(m.d,{id:"trackCount:".concat(a.name),marginRight:"5vw",fontSize:"5vw",children:n})}),Object(h.jsx)(A.a,{src:a.album.images[1].url,width:"12.5vw",height:"12.5vw"})]}),Object(h.jsx)(m.b,{flexDir:"column",alignItems:"left",children:Object(h.jsx)(m.d,{id:"trackTitle:".concat(a.name),fontSize:"5vw",children:"".concat(a.name)})})]}),Object(h.jsx)("audio",{id:"audioPlayer:".concat(a.name),className:"audioPlayer",onPlay:function(){!function(t){var e={artistDatabaseId:t};p.a.post("".concat("https://trapmap.herokuapp.com","/traffic/addSnippetPlayed"),e)}(e)},children:Object(h.jsx)("source",{src:a.preview_url,type:"audio/mp3"})})]})},x=a.p+"static/media/spotifyLogo.dffc4909.png",y=a.p+"static/media/youtubeLogo.6615ff3f.png",w=a.p+"static/media/instagramLogo.dad2e219.png";var O=function(t){var e=t.app,a=t.link,n=t.artistDatabaseId,r="https://trapmap.herokuapp.com";return"spotify"===e?Object(h.jsx)("a",{href:a,onClick:function(){!function(){var t={artistDatabaseId:n};p.a.post("".concat(r,"/traffic/addSpotifyProfileVisit"),t)}()},children:Object(h.jsx)(A.a,{src:x,alt:"spotify logo",w:"12vw",h:"12vw",ml:"6vw",mr:"6vw"})}):"appleMusic"===e?Object(h.jsx)("a",{href:a,onClick:function(){!function(){var t={artistDatabaseId:n};p.a.post("".concat(r,"/traffic/addAppleMusicProfileVisit"),t)}()},children:Object(h.jsx)(A.a,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWkAAAFpCAYAAABee9lOAAAABmJLR0QA/wD/AP+gvaeTAAAgdklEQVR42u2dCXRV1bmAb/va17Vep7X6tKNtXxHCKBVpq5KBMAstQwIRyAAoEMYQQoKItQoyatWKgFZaZ0QZBAQUVHDGuY4oTkjVCoLMQ5J7pv/tc2+iEJKQ3Nx7z/T9a32LKSQ3/977y77/Hk4oRDQ4ZGjpGeGCsnZ6QVlXI3/qQK2gbKSeV1qq502dZeSVLjLyy+7Q88tWKNbpeWWPK55XH/uq+vOb6uN3nIj6u72KAydwRCEALuBIjb65t5b++2akb9t93O7rBaXr7b6v5ZfdpcbBYvVvs/X8qWVafukoNTYG6XlTuoXzSs6RS6afiUmIJklYH1aaViXfa1WnW6l4TnWynerXSgYvQFyoVDL/t/p1q2KV4jpb5krq6UiciMp4xoxvhgsua61mBMPsGXDVjHc/gwfAFdiz9xfVjPwWrWDqiHBeaRt7zGIuP0s5c8a39IKpnSNvwey3ZvllhxgIAJ7isJppb46MYTWW7TGN2bwu5oKyHxsFU3O0vLJ7VAMfpJMD+Ipjdh1cKygtlCFTfonxvCJmVc9S9eRJqgFfVlh0ZIBAYI/1l+2xT03bjWLOmfHfRkFZ36pdFWE6LECgMeySpr3eJIUz/gdDOinnEVN/qhpjLgt+AFArthuUI2xXYMwkRmVuSTOV+AWqEcrpiADQAML22pS9owuDJjC0/KnnVe2pNOl0ABADtjtWa7mlHTFqPMsaw0p+oepLt0VqTXQyAIjPQuOKioKy32DYpm2h+66eWzZNnfw7qhAAgDgTVsfVF0jOtB9i3MbIORT6hpY35VKVwN10IgBIAnvsY+m2ezDw6QSdP/lnen7pOjoNACSfKc9U5pc0x8R1hJE7JUcl6gAdBQAc5LBaWCxkVn3i7DnvsrPUlrqNdA4AcNGs+lGOm6vQh5Z0Vgn5gg4BAC5kn7orvmdwFwdzS4v13CmaQgAAXIqhmBGoq1IlZ/z31De9gsYHAO9Qui4QW/UqB089W9V63qXBAcBzKHfZDvOtoMNDS9rqQ6f8h8YGAA/zhZY7+Vz/3buRW/IH9XZhHw0MAD7goD60NM0/OzjUU4LVN3WUhgUAH1Fp5JVk+eOAytASTSEAAD5DM4ZMGezdGXRuSXf1TVTSkADgb1FP/qP3atB5Uy5QL/4YDQgAAaBczy3O8M4ujrySc9SL3k/DAUCAOKwNmdLBG/ugh5bspsEAIIDsdvU+6shJwqEl79BQABBg3nflyUT7Lg714lboQyYLAEDAWeu6q071oZOn0zAAAFUMLrncPYIeMqmbelEGDQMA8BWmqi5c5HyZQ12KrV7MPhoEAOAU9jn64IBIHXpI8UYaAgCgLko2O1af1oaUFNIAAAD1ow0pHp38WXTuhF/rg4sPKwQAAOrlsOQU/yq5ZY7BxZtIPABAA7m4eEvSyh7a4MmjSDoAQONQZY+RiZ9F97vs++qL7SbhAACNnk3vSfhpRPWF5pFsAIAYGTJpbuJm0XlFZ6kvcpxEAwDETIW98SJBteji+0gwAEATa9ODJy2Nv6BzJnXUL55kKQQAAJqEpSa9v49vLfriojUkFgAgXhStid9F/jnFLdUnNUkqAED8ZtPhwZNbx+eJ34Mn/ZOEAgDEF+PioiVN39ExtPgn6pNVkFAAgLhTKdmTf9bEWnTxfBIJAJCw2vSc2GfRvYu+o+cU7VcIAAAkhH22a2OrRQ+amEMCAQASizGoKDu2UkfOpPUkEAAg4axtfKkja+yP1X/USB4AQMLRJKfozMadMBxUNJnEAQAkB23QpKJGljqKXiVxAABJ45WGlzqy1W13gyZaCgEAgKRgSc7YXzSs1DGwaDQJA/AJ9u6BCTPEuG6JmMvWi7X1X2J9skvEMCQSuiHWBzvFXLVJ9JHTyZeDKPde2rBSx6CJq0kYgAcZPlWMmQvFvGeNmE+8INZHn4hUhqXBoT7WuOlO8ugYE1aevtRRWPht9cGHSBaAyxmmhDxjQUTIkdnxF19KXMKyxFh4D/l1hsO2g+ufRWdP6kKiAFxGQakYV90k5l2rxXr2VbF27YnINGFRUSnG+KvJuxNkT8g4XaljLokCcJB8JeQr/ybmHavEevolsT7bnVgh1xHmI0/RFk4wcOLs+iU9cMITCgGAJJBbIsYVN4h5+0qxnnoxKmTTFFdEeYV9+Q9tlHTGP153PXrGjG+qDzpMkgASgH1/8OTZYtx8j5gPPynW9h2RnRVuDmPqfNot+RyyXVyrpMMDJ7QlQQBxYEixGNOuE3PJA2JueV6snf9RxjPFa2Euupe2dIBw1vjWdRwFn3gJCQJo7Ay56NQZsqaJH8K8ezXt6wDGwAnDa7+adOCEW0gQwGlKFmXzxLx1mZiPPSvWjk9cX7JokqRXbqTNnZB09sTFdSwaTnyBBAHUM0MOaxKkiJxCpC84wMQX6tgjPWG/nj1eAAKH2vpkFM9SQr5bzA1VQm7MST3fSnojfcMJBo4/UPv90SQHAoIx7iqEjKRdjfQtPKPGIZZx6SQGfMmo6WLMvVXM5Q+L9crbIkePY18k7QEmpp68syN7/EiSAv4T8jFMi6Q9iZY17pKTZ9JZ464jMeBpIR9ByEjaR2SNn1dj0XD8ShIDnhHy4aMYFEn7fCY9fnmNmfT459VsWgAcZ+TlSsi3iPnABiXkt0QOHcGWTu6Tpk86xbMn16Szxv2bpIDjQj54GDMiaVAYWeN2fL39LhT6hvrLShIDCJlA0q6hwnZzVNI5RWeSEIgr9iX1V1wffWqILeQDhzAekoZGIjkjf1RV6hjzWxICMZM/JSrk21dE70T+dBd2Q9IQB8JZY9tV3dkxrjsJgQaRV4uQHXhqCIGkA0H2+C7R2++yxw8iIVArl0wTc/FSsZ55RWTvfqyFpCGZi4fZY7Oqyh1jR+sDxgpANcZl14r10puevKieiKekH2E8OIjWv+rUoTL2VBICEdQz96ynX6aEQSBpN5A1ZkqVpMfOISGgj75CrN17MROBpN1C/3EzozXp/mMWkZCAM6xMrF0ImkDSrio7Dhh3c/Vpw7tJSLCJlDgIAkm7TNJjb4+WOwaMXUFCgr1ISBBI2o0Lh2Pvj0q635j1ev8xAsHEeuIFbETULukVjzBGnGTAmLVRSfcfs5mEBBT76GlFJTYikLQ7Jf1YtaSfJyHBxCiZjYkIJO1enquW9GskI6CSXnAXJiKQtHt5rVrS20hGMDGXrsVEBJJ2L29XS/o9khFQST+4CRMRSNq9bI8eZulX+JHer1AgeJjrNmMioh5JP8w4cRDl5g+rJb2ThARU0huewEQEknavpD+u2idd+BkJQdIEgaTdhdav8NNqSe8mIUiaIJC069hVLekvSQaSJggk7Tr2Vkv6AMlA0gSBpF1G38L9UUn3HX1EIRA8kDRRr6SXP8w4cZbD1ZIuJxlImiCQtOs4Xi3pMMlA0gSBpF1HuFrSOslA0gSBpF2HhqSRNCYikLQHJG2QDCRNEEjadehRSf9plKEQCB7m+i2YiKhH0hsYJ87ylaRNkoGkCQJJuw4DSSNpTEQgaSQNSJpA0tAUSVskA0kTBJJ2HSaSRtKYiEDSrpf0H0daCoHggaSJeiX9wAbGibN8JWmSgaQJAkm7DwtJI2lMRCBpJA1ImkDSgKQBSRNI2l8YSBpJYyI/xJFjYr3/sVjPvSrWs6+I9dG/RXQdSftG0n0uFQgm5jok7bk4eFisV94S8/71YlyzUPRhpbW3b+5kMTc+1URJr2ecOAuSRtJI2tVx+KhY/3o7Iktj1iLRh5c1vo0feQpJI2lA0kRcShavvRM5QGLMWSz6iKnxaechk0TKK5E0kgYkTTQ4jpeL9c6HYj70uBg3/FOMcVdGa5AJamfr5TeRNJIGJE3UGseUkN94V8xVG8WY/3cxRl6e/Ha+dy2SRtKApAkpr0jqDLnB7bz4XiSNpAFJB1DIb78v5ppHxbjuNjEKr3CFkGvDfn1I2suS7n2JQDAx121Gtg2Jiko1Q/5AzLVqhnz9P8QYe2V0EHmknY15t8YmabXNj3HiKEgaSSPpU0I3xPrkc7G2bBXz78vEKJoZnSF7uJ2RNJIGJO0PIZfNjT6l2WftjKSRNCBpbwq53+hAtDOSRtKApBEykgYkDUi6ljDMU4Xcv5D2RdI+kvRFIwSCifnQZm8KebMt5PvEKJ2jZsiFtOVpMObeEqOk15E/Z0HSSHozQkbSSBpJA5I+nQ1qEXJ/hIykkTSSRtIIGUkjaSQNgZb0/oNiPfPy10IeMIbcI2lA0uCIpPfsU7ssno/usrCFnIWQkTQ0XdK9hgsEE/u2tiaHuqw+clH96Onk1KXELOll68ifsyBpJN00SVtb/yV6zkRyiaQBSYPbJG29+nb0JjjyiKQBSYPLJG1ZYtjP4COHSBqQNLhP0ta298kfkgYkDW6VtPnABvKHpCFpku45TCCYxCxp9fw+8ucdjDmLY5T0Q+TPWZA0ko5N0sbMBeQPSQOSBtdK+oq/kj8kDUgaXCvpy68jf0gakDQgaUDSSBpJI2kkjaSRtKsl3aNAIJiYax+LTdLTriV/HsKYvSg2Sd/3EPlzFiSNpJE0kkbSSBqQNCBpQNKApAFJI2lA0kgaSQOSBiQNSBqqJd09XyCYxC7p+eTPQ8Qu6bXkz1mQNJJG0kgaSSNpQNKApAFJA5IGJI2kAUkjaSQNSBqQNCBpQNJIGkkjaSTtAUl3yxMIJuaaGCV92Tzy5yGMWQtjk/TSteTPWZA0kkbSSBpJI2lA0oCkAUkDkgYkjaQBSSNpJA1IGpA0IGmolnTXXIFgYq55NDZJT51H/jyEcc3NMUp6DflzFiSNpJE0kkbSSBqQNCBpQNKApAFJI2lA0kgaSQOSBiQNSBqqJd1lqEAwiVnSZXPJn4eIWdL3riF/zoKkkTSSRtJIGkkDkgYkDUgakDQgaSQNSBpJI2lA0oCkAUlDtaQzhwgEE3P1phglPYf8eQhj5oIYJb2a/DkLkkbSSBpJI2kkDUgakDQgaUDSgKSRNCBpJI2kAUkDkgYkDVWS1joPFggmsUpaL51N/jyEMfOm2CR9z2ry5yxIGkkjaSSNpJE0IGlA0oCkAUkDkkbSgKSRNJIGJA1IGpA0VEs642KBYGI+uDE2SU+ZTf48hDEjVkk/SP6cBUkjaSSNpJE0kgYkDUgakDQgaUDSSBqQNJJG0oCkAUkDkoZqSafnCASTmCVdMov8eQjj6r/FJum7HyR/zoKkkTSSRtJIGkkDkgYkDUgakDQgaSQNSBpJI2lA0oCkAUkDkkbSSDoYko718VlI2iWSThskEEzMVbFK+hry5yGMOYtilzT5cxIkjaSRdCAkff0SJI2kAUmDa9tZnRxE0kgakDS4tZ0ffRpJI2lA0uBK1AKU9eUBJI2kAUmDG9FHXy6xBpJ2i6RTBwoEE3PVI7FJevI15M8rbbxla+ySvmsVOXQWJI2kkbSfMS6fL00JJI2kAUlDgtCLrhYpr0DSSBqQNLiKdLUv+rq/i2iaNDWQNJIGJA3xInNwpLxhbf9I4hVIGkkDkoaYZ8w5og8ricyazU1qH/ThoxLvQNJukXSnbIFgErOki2eSvySj9xslxpXXi7lig1hvblf15kpJdEQkTe6dBEkjaSTtSiFnFYrx57+Ked9asd54t8kLgEgaSQOShljpliv62D+LcdPtYm58Sqxde8QtgaSRNCDp4M2Sc8aLMf9WMTdsEevjT5UJLXFrIGkkDUja//TMj9aS1z7mqlkykkbSgKSDS5chYkydGylfSEWleDWQtFskfWGWQDAxVz4co6RnkL9a0PMni7l+s2MLfXGX9J0raVdnQdJIGknHRc5TZon1ypvit0DSSBqQtLflPLRIrOf/JX4NJI2kAUl7k65DxVy9SVnMFD8HkkbSgKS9N3seUSrWJ59LEAJJI2lwWtIx7+4IpqSNa2+Ny+1ySBoaJ+kLBggEE3vvbkySnnR14HJlLL5HghYRSTNOnARJB17SjzyJpBuSp6VrJIiBpJE0OEysOxOCJGlj4V0S1EDSSBqclvRnu5B0Peils3y/gwNJI2lwK91zlW0NJF2XoAeN883JQSSNpMGLb+NnLoh58Ppe0p2yxHp9mwQ9kLRbJH1+f4HgYb30euySVk+i9nNu7LudCVvSKxgrzoKkg4ot2aaEryXdI0/kyDEMjaSRNDgk6L6XirVnH5KuA/PuVdi5WtJ3LGfMIGlIqqDVs/Osz79o8uD1raR7FXj6/ud4h7FkGeMGSUNSsBcKr1ELhQcOxWXw+lXS1KJrSFqdsmT8IGlI8MzQuH6JWO/viOvg9aukI88cJL6W9II7GENIGuJG1f3GxsybIrfbWR/9O2EPOfWjpPXhU7ByTUnf8A/GlSsk/Yd+Ah7jAiWVi9VTp6++UcwH1on1xjtJPXihT7zKdzk1br0XK9eU9PxbGGvOgqQ9Q+/hYpTOVqvtK8R6+Q2RY8cdHbx+lLT1+jtYuaakZy9k7CFpOIWMHNFHXx6pB5qbnxNr917XDV7fSTo1O+Yj8r6W9LR5jEckDVrmYDVLnqXKFuvVAt/HamS4XxZ+k7Q+ZCJGrq2dR09jfCLpYKLnjIvUQCO1ZA/O4PwmaWP6tRi5tnbOHsN4RdIBEnO/kZG7ia33dnh/8PpN0jffiZFPOW5oipY2iLHrCkn/vq9A4tALSsR8+AlPlDEaLum/+KqN7AVZ4uSwPv2c8es8SDqR2HVma/tH/nwb7DdJL9+AlWtOpJ96kXGMpH06cx46UV0D+oa/a5V+k/SDj2DlmpK+/QHGM5L2GRcOiN6gFoDHLflO0veuxso123jClYxp59GRdLxmz2pR0Hrj3eAMYJ9J2rjtPqx8YoQ1tWg4kLHtIklbJKMJgi68XOTo8WDNsvwm6bmLEPOJi4avvsXYdgdaVNK/+5OlEGg8evEMkcpwMN8K+6kdx0zHzCdE5M4OxrcLQNJNwt69Iboe3Hqln9qzZz5m/qpx9ciT5Bnj7pK0STIaOfMqmJzUW+eQdOKxPt2FoO1dHc+8xBh3D2EkHYug+4wQa+9+Vv591q7m2scwtE/bFkkHCVXMt156nYHsw4FslM1hwfDt9xjjLpW0QTIaOJDZBeDf2VanLJEjx4K9YFhyDePcXVRGJd3xj4ZC4DT0yHP8sn3XSHr8lb5sY3P1pmBvu7PFwFh3E19JWicZDRjAyx7Czj6XtH2FrFhW8BpU00UfOIZx7j4qkHRDB696fJWEw9i5WtJjr/BtW1tqd0PgdnT8837GucslHSYZp5lF23dyEF9L2n5ih19/IA+eEIj7V74qc7z5buTBxoxzV1JeLelyklEP6vJt2XcAM58o6UvK/P1D+cGNwWjI/QfVu8RhjHH3cqRa0kdIRt0YJTOxck1J5xf7u927DPH/XnhVvvPzOyKfcCAq6fP6HFAI1I657nGsXFPSA0b5vt31cX/27yKiWig0Js9kfLufvdWS/pJk1I31xV6sXHOM23c7BOEH9B3LffgTVgl6yizGtgcIn9dnd0TS9m9ISB2zqazRGLk2SV8wIBh94HeqPv3k8/5puMNH1TuEKxjbXvFPxz6fRSRt/4aE1I4xfT5GPmWgHwlWP1AnEe2DHp7fxbHzs0CUqXzGzupyx06SUYek/74UKdcc7B98HLy+kJrtXVGrurq55lHR0gcxpj3HHz+slvRHJKOOmuTGJ7FyzTH/7MvB7A+qxGM+5K2b8uz1lMg9K4xlr/JelaR7v6d16C1wKtx4d2rYD20Ncp8wZt3s/oc9HCsX884V0ecUMo69zLaopNVvSEYdklZXNxInh3H1jYHvF/ZDH6ztH7qvcfYdFFM9VFfLGMT49QV93qieSb9GMuqQ9I5PsHLNHVx5k+gbNvZBp3mLnb/eVB1ht9/xGZfNVadj+9Iu/uKV6pn08ySjDkmrRTLihFCn1LTz+9M3TqRzjhg33S7W518kdSudueU5Ma66QZ2OHEwb+JenqyW9mWTUIenX3kbMJy5Evfwm/aK+mXXpbDEffVrk0OH4Jf14uVjb3lc7NDaJMWehuk51rPpafch3AAh3uGhj9DDLub3Xk5A6JB3AayvrrUcvvpt+0SBh94nUrY2Fd4q5YYtYr28Ta8++uo+Zq4uO7Hdt9s6ZiIwX3RW5M0b/0yXRVX5yGsy1jw59HoweZjmvzwoSUjvmig2Y+cR6tBIP/aIJnN8vUh45CerIUBfn9V4aLXec2+tu7dyLBE7FuP42zFxd6vhsV7Tj0C8AkkSvJVWSvmgRyagdfcx07Fy9iUCdvqRPACSVG6tq0r1mk4w6sJ8gbRgY2rRE73sp/QEgmZPEDr2vitakz+1dRkLqhgMtytGbn6MvACSbDr2LqmvSo0hIPXVptdIe+AXD3CL6AkDSJd2rIFru6NBrIAmp5y1H/5HBXjC0L1SiHwAkncr2vftGyx3tL+qm/baXQN1Yb7wT0BOGmuj9LqUPADiA3r5XenQm3e6i9iSkfoypc4JZi771XtofwCHC5/RsFZG0dOx7Bgk5DfazDtU+4UCVOT7+JHrQgvYHcAQ5v/cPopIOhb6h/qKCpJxmNj1tbnAMre6L0LMLaXcA5zgaOjHUX+wkKafB3o731vYATKEtMcpm094AzvJ+TUlvJSkNKOSr2aW9mOb7S5RoawCneeIkSevte67U2vcUOD3G3/7p34XCfyyjjQFcQa9lJ0k63L7ndSSlgaifcvYJPN8J+o7ltC2AS1BOnn1yuaN9z5EkphGoKyet9z7yyXFCXYxrbqJNAdw1kx52crnjt93TSEojUXcBWx/u9LagDxwS/dIy2hLAdXS/4CRJS/uePyYpMZB5sWdn1OZjz0ReP+0I4D6kba8fhWqG+of9JCe20kfkuXZe2WG3d190ix1tB+DWUseXodpCO6fHCwqBGLB3fSy43d13Tx86IsaN/xDt93+ivQDczdbaJd2u+2KS0zTsJzm77cCL9ennYtywRLQLB9BGAJ6g5811zaRHkJw48Nuekd0S9hOgHYujx8Xc+KToY6+IvB7aBcA7hNv1yK9V0uG23dqQoDjSsY8Yf7lerO1JWFhUj7ey3tsh5rK1UTGrr00bAHiTynN7tKhV0pGLls7pcZAkJaAMMmyyOs13v1jvfhgRalPveLa2fyjmuscjNWb7YbmUMgB8w37bxaG6Qn3AFpKUYNT+aqPoKjGuvVXMpWvEeupFsd754FS2virmQ49Fjmob8xaLUXx15Ckxkac2kEcAf5Y6zum5MVRfhNt1m6MWEAUAAJJPuF33GfVKWm/XPZNEAQA4g96ua6d6JS0dO35bfeAhkgUAkHQOSGbmt0KnCzWbfpBkAQAknQdCDQmtbY9RJAsAIMm07Ta8QZI+3rLHz9V/sEgaAEDSsKR1r5+FGhrK6K8oBAAAkkC7bi+EGhPqPxSTOACApDG+UZKWDr3PVP9JI3EAAAknLCmZZ4QaG3rbbutIHgBAYlGuXRWKJdSFS4NIIABAYqls26VfTJKW5r2/oz7BfpIIAJAouu61DxGGYo1wm25ztTZdBQAA4k+4TdcZoaaEtOv2E/WJKkgmAEDcqbAdG2pqaK27LiGZAABxpm3XW0LxiMpW3VLUJzRJKgBA3ARtVLau4wkssYTetutqEgsAEB/0Nl1XhuIZWqsuHdUntkguAECTMVUZ+bxQvENr02UpyQUAaCKtu9wVSkSUt888S33y4woBAICYKK9o2/1XoURFuE2XuSQZACA2lENnhhIZ0jL1++HWXXaTbACARvOF7dBQokNrnTmKZAMANJJWmcNDyQgJhb4RbtVlI0kHAGgomY/Z7gwlK8pTuv5CfeGDJB4A4LQcKm+X8ctQskNr1Xm0mr4LAADUy/CQExEpe7TOfIQGAAConXCrzA0hJ8OewqsX8iWNAQBQk857jrfs8fOQ06G37NpVvSCdBgEA+Apdb5WZGXJL6K0zp9EoAABVtO5cEnJT2PVp9aKW0zgAAJn3h9wY0jbze1pK521ay84CABBQ3pL2Pb8bcmtUpqQ1C7fsvIuGAoCgobfs/J+K1l1/HXJ7qG157dQL3k+jAUCA2Bdunt4m5JXQWnQ5X73oozQcAASA43rLLqkhr4WektldvfhKGhAAfIymt8y8KOTVUPXpHPVNhGlIAPAh4XCrjOyQ10NPSe+mpWQcUQgAgE845ukZ9Ck16pT0P6hvah8NCwA+4IDeKqNTyG9hr3zqKRn/oYEBwKuEUzJ2hVumtw/5Nex91JEDLzQ2AHiPtzyxDzo+JxMzltPgAOAdOt/v6pOEialTdy5U37xG4wOAi9H1lhnTQkENvUVGRjglfbfWIl0AAFzGl/butFDQozzlwl+EW6Q/TIcAALegnLReWqf/LEScuPsjLUclZz8dBAAc5JCWklaIketaVPy/zJ/qLdIfoqMAQNJnzynpG8ubZ56FiRvyAIEW6SPU241ddBwASDRqYvi51jytAPs2VtZqu4vePG2aSuIROhIAJIDj6nDKfGmZ+n2M28SFRa1F2m3qJ52hEACAJmKpCeCKit90+jWGjee+6uYZHfTmqatUgk06GQDEgKnkvNJ2CUZN9NHys9MWqIQfp9MBQAOoVNwTTrmwFQZNZs367E4/Dp+dNkslfy+dEABqYU+4eepMaZ5+JsZ0dDdIzn/pKWnd7Z+UinI6JkCgCaszF+vtcxfStu1/Y0i3CbvVH/5XNdIExYv24gAdFiAYC4FVY36CtL3wR5jQK8JWb3EipxijM+wDdGQAX3HUnjGr9alCDqD4QdiZmd/Sm6Wl2fUpVcfepJ2delAhAOAZDtpj1x7D9li2xzRm8/mpxsrfpLZUP4WHac1SF6lft6pOsI+BAOAK9lWNyYX2SUB7rNpjFnMRkZq23rzThdrZnUaEm6XO1Zqn3qc6yjPqzx+oX48zeADigj2W3lcTpKftMRY+O3WO+vNw9fsL5CxqykRTJN6s4w8jz2ps0Smjsnlqv8hM/OxOk/Rmna5WHexv6ve3qb+7X70dW6k63ePqz0+pX1+tYptix0k0T92vfj1wAvwgADcI9Os+Ge2jO2qw7YR+/aTd16N9Pu3+yBholnqj3iz1Knts2GPEHiv2mAm3uKC1ND//B5iEIAiC8E38PwxiTadETn1MAAAAAElFTkSuQmCC",alt:"apple music logo",w:"12vw",h:"12vw",ml:"6vw",mr:"6vw"})}):"youtube"===e?Object(h.jsx)("a",{href:a,onClick:function(){!function(){var t={artistDatabaseId:n};p.a.post("".concat(r,"/traffic/addYoutubeProfileVisit"),t)}()},children:Object(h.jsx)(A.a,{src:y,alt:"youtube logo",w:"12vw",h:"12vw",ml:"6vw",mr:"6vw"})}):"instagram"===e?Object(h.jsx)("a",{href:a,onClick:function(){!function(){var t={artistDatabaseId:n};p.a.post("".concat(r,"/traffic/addInstagramProfileVisit"),t)}()},children:Object(h.jsx)(A.a,{src:w,alt:"instagram logo",w:"12vw",h:"12vw",ml:"6vw",mr:"6vw"})}):void 0};var B=function(t){var e=t.artistPicture,a=Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"90%",height:"90%",children:[Object(h.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(h.jsx)("path",{d:"M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z",fill:"rgba(147,129,255,1)"})]});return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{style:{position:"relative"},children:[Object(h.jsx)(A.a,{src:e,w:"100vw",mb:"5vh"}),Object(h.jsx)(m.a,{onClick:function(){window.location.href="".concat("https://trapmap.herokuapp.com","/map")},w:"7.5vw",h:"7.5vw",pos:"absolute",top:"1vh",ml:"2vw",backgroundColor:"#fff",borderRadius:"50%",children:a})]})})};var D=function(){var t="https://trapmap.herokuapp.com",e=Object(n.useState)(""),a=Object(s.a)(e,2),r=a[0],c=a[1],o=Object(n.useState)(""),i=Object(s.a)(o,2),l=i[0],d=i[1],u=Object(n.useState)(""),f=Object(s.a)(u,2),A=f[0],j=f[1],k=Object(n.useState)(""),S=Object(s.a)(k,2),b=S[0],J=(S[1],Object(n.useState)([])),x=Object(s.a)(J,2),y=x[0],w=x[1],D=Object(n.useState)([]),Q=Object(s.a)(D,2),E=Q[0],N=Q[1],C=0,U=function(){var t=Object(g.a)(v.a.mark((function t(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[window.location.pathname.split(":")[1],window.location.pathname.split(":")[2]]);case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),L=function(){var e=Object(g.a)(v.a.mark((function e(a){var n,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={spotifyId:a},e.next=3,p.a.post("".concat(t,"/spotify/artistProfile"),n);case 3:return r=e.sent,e.next=6,r;case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(g.a)(v.a.mark((function e(a){var n,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={dataBaseId:a},e.next=3,p.a.post("".concat(t,"/dataBase/artistProfile"),n);case 3:return r=e.sent,e.next=6,r;case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){U().then((function(e){F(e[0]).then((function(e){d(e.data._id),w([["spotify",e.data.spotifyLink],["appleMusic",e.data.appleMusicLink],["youtube",e.data.youtubeLink],["instagram",e.data.instagramLink]]),function(e){var a={artistDatabaseId:e};p.a.post("".concat(t,"/traffic/addTrapMapProfileVisit"),a)}(e.data._id)})),L(e[1]).then((function(t){c(t.data[0].name),j(t.data[0].images[0].url),N(t.data[1])}))}))}),[]),Object(h.jsxs)("div",{className:"artistProfile",children:[Object(h.jsx)(B,{artistName:r,artistPicture:A,releasedMusic:b}),Object(h.jsx)(m.b,{justifyContent:"center",h:"20vw",mb:"2vh",children:y.map((function(t){if(""!==t[1])return Object(h.jsx)(O,{app:t[0],link:t[1],artistDatabaseId:l},t[0])}))}),Object(h.jsx)(m.a,{children:Object(h.jsx)(m.c,{className:"artistNameInProfileHeader",color:"#fff",mb:"5vh",letterSpacing:"wider",fontSize:"17.5vw",children:r})}),Object(h.jsx)("div",{children:E.map((function(t){if(null!==t.preview_url)return C++,Object(h.jsx)(I,{track:t,artistName:r,artistDatabaseId:l,count:C},t.name)}))})]})},Q=a(26),E=a.n(Q);a(55);var N=function(){var t="https://trapmap.herokuapp.com",e=Object(n.useRef)(null),a=Object(n.useRef)(null),r=[[12.75,52.25],[14,52.75]],c=[13.404954,52.520008];E.a.accessToken="pk.eyJ1Ijoiam9vc3R3bWQiLCJhIjoiY2t1NDQ3NmJqMXRwbzJwcGM5a3FuY3B3dCJ9.yyon_mO5Y9sI1WgD-XFDRQ";var o=[],i=function(e){var a=document.createElement("div");return a.className="homeButton",a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90%" height="90%"><path fill="none" d="M0 0h24v24H0z"/><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" fill="rgba(147,129,255,1)"/></svg>',a.addEventListener("click",(function(){window.location.href="".concat(t)})),new E.a.Marker(a).setLngLat(s(e)).addTo(e)},s=function(t){return[t.getBounds()._sw.lng,t.getBounds()._ne.lat]};return Object(n.useEffect)((function(){if(!a.current){a.current=new E.a.Map({container:e.current,style:"mapbox://styles/joostwmd/ckucoygnc51gn18s0xu6mjltv",center:c,zoom:8.5,minZoom:8.5,maxBounds:r,attributionControl:!1}),a.current.dragRotate.disable(),a.current.touchZoomRotate.disableRotation(),p.a.get("".concat("https://trapmap.herokuapp.com","/dataBase/map")).then((function(t){!function(t){var e,a=Object(J.a)(t);try{for(a.s();!(e=a.n()).done;){var n=e.value,r={type:"feature",properties:{artistName:n.name,artistPicture:n.picture,artistDatabaseId:n._id,artistSpotifyId:n.spotifyID},geometry:{type:"Point",coordinates:n.coordinates}};o.push(r)}}catch(c){a.e(c)}finally{a.f()}}(t.data)})),a.current.on("load",(function(){a.current.addSource("artists",{type:"geojson",data:{type:"FeatureCollection",features:o}});for(var e=function(e){var n=document.createElement("div");n.className="marker",new E.a.Marker(n).setLngLat(o[e].geometry.coordinates).addTo(a.current);for(var r=document.getElementsByClassName("marker"),c=function(e){r[e].addEventListener("click",(function(){var a,n,r;a=o[e].properties.artistName,n=o[e].properties.artistDatabaseId,r=o[e].properties.artistSpotifyId,window.location.href="".concat(t,"/map/").concat(a,":").concat(n,":").concat(r)})),r[e].style.backgroundImage="url(".concat(o[e].properties.artistPicture,")"),r[e].innerHTML='<p className="artistNameInMarker">'.concat(o[e].properties.artistName,"</p>"),a.current.on("zoom",(function(){var t=9.255562090280671,n=15*Number(a.current.getZoom()-t)+30,c=5*Number(a.current.getZoom()-t)+10;r[e].style.height="".concat(n,"px"),r[e].style.width="".concat(n,"px"),r[e].innerHTML='<p className="artistNameInMarker" style=\'font-size:'.concat(c,"px'>").concat(o[e].properties.artistName,"</p>")}))},i=0;i<r.length;i++)c(i)},n=0;n<o.length;n++)e(n)}));var n=i(a.current);a.current.on("zoom",(function(){n.setLngLat(s(a.current))})),a.current.on("move",(function(){n.setLngLat(s(a.current))}))}}),[]),Object(h.jsx)("div",{children:Object(h.jsx)("div",{ref:e,className:"map-container"})})};var C=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(o.a,{children:Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{exact:!0,path:"/",element:Object(h.jsx)(S,{})}),Object(h.jsx)(i.a,{exact:!0,path:"/map",element:Object(h.jsx)(N,{})}),Object(h.jsx)(i.a,{exact:!0,path:"/map/:artistName",element:Object(h.jsx)(D,{})})]})})})},U=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,123)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;a(t),n(t),r(t),c(t),o(t)}))},L=a(15),F=a(12),G=function(){return Object(h.jsx)(F.a,{styles:"\n      \n      @font-face {\n        font-family: 'PhillySans';\n        font-style: normal;\n        font-weight: 700;\n        font-display: swap;\n        src: url('../fonts/PhillySans.woff') format('woff')\n        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n      }\n      \n      @font-face {\n        font-family: 'Montserrat';\n        font-style: normal;\n        font-weight: 600;\n        font-display: swap;\n        src: url('../fonts/Montserrat.woff') format('woff')\n        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n      }\n      "})},T=Object(L.b)({fonts:{heading:"PhillySans",body:"Montserrat"},styles:{global:{body:{bg:"#000"},h1:{fontFamily:"PhillySans",color:"#fff"},p:{fontFamily:"Montserrat",color:"#fff"}}},colors:{brand:{100:"#000",200:"#9381FF"}}});c.a.render(Object(h.jsx)(n.StrictMode,{children:Object(h.jsxs)(L.a,{theme:T,children:[Object(h.jsx)(G,{}),Object(h.jsx)(C,{})]})}),document.getElementById("root")),U()},92:function(t,e,a){},93:function(t,e,a){},94:function(t,e,a){},95:function(t,e,a){}},[[121,1,2]]]);
//# sourceMappingURL=main.9d16d2f8.chunk.js.map