(function(e){function t(t){for(var a,l,r=t[0],s=t[1],u=t[2],p=0,d=[];p<r.length;p++)l=r[p],o[l]&&d.push(o[l][0]),o[l]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);c&&c(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},o={app:0},i=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var c=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("c21b"),o=n.n(a);o.a},"089c":function(e,t,n){"use strict";var a=n("e656"),o=n.n(a);o.a},"206e":function(e,t,n){},"47b0":function(e,t,n){"use strict";var a=n("a364"),o=n.n(a);o.a},"4a75":function(e,t,n){"use strict";var a=n("5885"),o=n.n(a);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"columns is-marginless is-gapless is-fullheight"},[n("LeftContainer"),n("PolylineMap")],1)])},i=[],l=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"column is-half is-fullheight"},[n("div",{attrs:{id:"map"}})])}],s=n("e11e"),u=n.n(s),c=(n("20d6"),n("504b")),p=n.n(c),d=new a["a"],f=d,v={baseMapUrl:"https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=",accessToken:"pk.eyJ1IjoiZWRlZnJpdHoiLCJhIjoiVHdNbEFfWSJ9.S7ADvM5VLk5jXNhqWjgsVg",baseMapAttribution:'© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>'},h=v,m={name:"PolylineMap",mounted:function(){var e=this;this.initMap(),f.$on("text-polyline-changed",function(t){e.drawPolylineOnMap(t)}),f.$on("text-geojson-changed",function(t){var n=p.a.fromGeoJSON(JSON.parse(t),5);e.drawPolylineOnMap(n)})},methods:{initMap:function(){var e=this;this.map=u.a.map("map").setView([52.5271,13.4153],16),this.editableLayers=(new u.a.FeatureGroup).addTo(this.map),u.a.tileLayer(h.baseMapUrl+h.accessToken,{maxZoom:18,attribution:h.baseMapAttribution}).addTo(this.map),new u.a.Control.Draw({position:"bottomleft",draw:{polyline:{shapeOptions:{weight:5}},polygon:!1,rectangle:!1,circle:!1,marker:!1,circlemarker:!1}}).addTo(this.map),this.map.on(u.a.Draw.Event.CREATED,function(t){f.$emit("draw-polyline-created",t.layer.toGeoJSON()),e.editableLayers.addLayer(t.layer)}),this.map.on(u.a.Draw.Event.DRAWSTART,function(){e.editableLayers&&e.editableLayers.eachLayer(function(t){e.editableLayers.removeLayer(t),f.$emit("draw-polyline-deleted","")})})},drawPolylineOnMap:function(e){var t=p.a.decode(e);this.editableLayers.getLayers().length>0?this.editableLayers.getLayers()[0].setLatLngs(t):u.a.polyline(t).addTo(this.editableLayers),this.editableLayers.getBounds().isValid()&&this.map.fitBounds(this.editableLayers.getBounds())}}},b=m,y=(n("089c"),n("2877")),g=Object(y["a"])(b,l,r,!1,null,"0063e01e",null);g.options.__file="Map.vue";var x=g.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"column container"},[n("Tabs"),n("PolylineTextArea",{directives:[{name:"show",rawName:"v-show",value:1===e.selectedTab,expression:"selectedTab === 1"}]}),n("GeoJsonTextArea",{directives:[{name:"show",rawName:"v-show",value:2===e.selectedTab,expression:"selectedTab === 2"}]}),n("Info",{directives:[{name:"show",rawName:"v-show",value:3===e.selectedTab,expression:"selectedTab === 3"}]})],1)},_=[],T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{spellcheck:"false"},domProps:{value:e.value},on:{input:[function(t){t.target.composing||(e.value=t.target.value)},e.onTextareaInput]}})])},I=[],O=(n("a481"),{data:function(){return{value:""}},mounted:function(){var e=this;f.$on("draw-polyline-created",function(t){e.updatePolylineInputField(t)}),f.$on("draw-polyline-deleted",function(){e.clearPolylineInputField()}),f.$on("text-geojson-changed",function(t){e.updatePolylineInputField(JSON.parse(t))})},methods:{onTextareaInput:function(){var e=this.value.replace(/\\\\/g,"\\");f.$emit("text-polyline-changed",e)},updatePolylineInputField:function(e){this.value=p.a.fromGeoJSON(e,5)},clearPolylineInputField:function(){this.value=""}},name:"PolylineTextArea",props:{msg:String}}),P=O,L=(n("c0c8"),Object(y["a"])(P,T,I,!1,null,"0da5f0f5",null));L.options.__file="PolylineTextArea.vue";var j=L.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{spellcheck:"false"},domProps:{value:e.value},on:{input:[function(t){t.target.composing||(e.value=t.target.value)},e.onTextareaInput]}})])},$=[],S={data:function(){return{value:""}},mounted:function(){var e=this;f.$on("draw-polyline-created",function(t){e.updateInputField(t)}),f.$on("draw-polyline-deleted",function(){e.clearInputField()}),f.$on("text-polyline-changed",function(t){e.updateInputField(p.a.toGeoJSON(t,5))})},methods:{onTextareaInput:function(){f.$emit("text-geojson-changed",this.value)},updateInputField:function(e){this.value=JSON.stringify(e,null,2)},clearInputField:function(){this.value=""}},name:"GeoJsonTextArea",props:{msg:String}},M=S,k=(n("4a75"),Object(y["a"])(M,A,$,!1,null,"080c4610",null));k.options.__file="GeoJsonTextArea.vue";var J=k.exports,E=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},C=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",{},[e._v("What is this?")]),n("p",[e._v("\n        Polyvue is an polyline encoding and decoding utility based on Vue.js, Leaflet.js and the Bulma CSS\n        Framework. Polyline data can be displayed on a map or converted to the GeoJSON format.\n    ")]),n("h1",{},[e._v("What's a polyline?")]),n("p",[e._v("\n        The Polyline algorithm is a lossy compression algorithm that can store a set of coordinates as a single\n        string and is very popular among Mapping APIs. There is a good explanation on the "),n("a",{attrs:{href:"https://developers.google.com/maps/documentation/utilities/polylinealgorithm"}},[e._v("Google Developers\n        Website")])]),n("h1",{},[e._v("How can I use this?")]),n("p",[e._v("\n        You can click the draw button to draw a line on the map. The text area to the left ist then updated with the\n        polyline string based on what you have drawn.\n    ")]),n("p",[e._v("\n        You could also paste a polyline string into the field and the map will be updated accordingly. For example this one:\n        "),n("span",{staticClass:"code"},[e._v("eqq_IsqzpAyAiAwA{B{CsDgDqEwBwBq@\\yAfF{ApIaA~EUfBQvBWxCk@nEgAvJs@vHe@rF")])])])}],F={name:"Info"},N=F,G=(n("eb01"),Object(y["a"])(N,E,C,!1,null,"17f6846b",null));G.options.__file="Info.vue";var B=G.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tabs is-centered"},[n("ul",[n("li",{class:{"is-active":1===e.tabIndex},on:{click:function(t){e.setTabIndex(1)}}},[n("a",[e._v("Polyline")])]),n("li",{class:{"is-active":2===e.tabIndex},on:{click:function(t){e.setTabIndex(2)}}},[n("a",[e._v("GeoJSON")])]),n("li",{class:{"is-active":3===e.tabIndex},on:{click:function(t){e.setTabIndex(3)}}},[n("a",[e._v("Help")])])])])},W=[],q={name:"Tabs",data:function(){return{tabIndex:1}},methods:{setTabIndex:function(e){this.tabIndex=e,f.$emit("tab-index-changed",e)}}},V=q,H=(n("47b0"),Object(y["a"])(V,D,W,!1,null,null,null));H.options.__file="Tabs.vue";var R=H.exports,U={data:function(){return{value:"",selectedTab:1}},mounted:function(){var e=this;f.$on("tab-index-changed",function(t){e.selectedTab=t})},name:"LeftContainer",components:{PolylineTextArea:j,GeoJsonTextArea:J,Tabs:R,Info:B}},Z=U,z=Object(y["a"])(Z,w,_,!1,null,null,null);z.options.__file="LeftContainer.vue";var Y=z.exports,Q={name:"app",components:{LeftContainer:Y,PolylineMap:x}},X=Q,K=(n("034f"),Object(y["a"])(X,o,i,!1,null,null,null));K.options.__file="App.vue";var ee=K.exports;n("9299");new a["a"]({render:function(e){return e(ee)}}).$mount("#app")},5885:function(e,t,n){},9299:function(e,t,n){},a364:function(e,t,n){},bb0c:function(e,t,n){},c0c8:function(e,t,n){"use strict";var a=n("bb0c"),o=n.n(a);o.a},c21b:function(e,t,n){},e656:function(e,t,n){},eb01:function(e,t,n){"use strict";var a=n("206e"),o=n.n(a);o.a}});
//# sourceMappingURL=app.205dcd93.js.map