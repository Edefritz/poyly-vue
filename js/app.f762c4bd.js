(function(e){function t(t){for(var a,r,l=t[0],s=t[1],u=t[2],p=0,d=[];p<l.length;p++)r=l[p],o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);c&&c(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={app:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("c21b"),o=n.n(a);o.a},"089c":function(e,t,n){"use strict";var a=n("e656"),o=n.n(a);o.a},"47b0":function(e,t,n){"use strict";var a=n("a364"),o=n.n(a);o.a},"4a75":function(e,t,n){"use strict";var a=n("5885"),o=n.n(a);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"columns is-marginless is-gapless is-fullheight"},[n("LeftContainer"),n("PolylineMap")],1)])},i=[],r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"column is-half is-fullheight"},[n("div",{attrs:{id:"map"}})])}],s=n("e11e"),u=n.n(s),c=(n("20d6"),n("504b")),p=n.n(c),d=new a["a"],f=d,v={baseMapUrl:"https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=",accessToken:"pk.eyJ1IjoiZWRlZnJpdHoiLCJhIjoiVHdNbEFfWSJ9.S7ADvM5VLk5jXNhqWjgsVg",baseMapAttribution:'© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>'},m=v,h={name:"PolylineMap",mounted:function(){var e=this;this.initMap(),f.$on("text-polyline-changed",function(t){e.drawPolylineOnMap(t)}),f.$on("text-geojson-changed",function(t){var n=p.a.fromGeoJSON(JSON.parse(t),5);e.drawPolylineOnMap(n)})},methods:{initMap:function(){var e=this;this.map=u.a.map("map").setView([52.5271,13.4153],16),this.editableLayers=(new u.a.FeatureGroup).addTo(this.map),u.a.tileLayer(m.baseMapUrl+m.accessToken,{maxZoom:18,attribution:m.baseMapAttribution}).addTo(this.map),new u.a.Control.Draw({position:"bottomleft",draw:{polyline:{shapeOptions:{weight:5}},polygon:!1,rectangle:!1,circle:!1,marker:!1,circlemarker:!1}}).addTo(this.map),this.map.on(u.a.Draw.Event.CREATED,function(t){f.$emit("draw-polyline-created",t.layer.toGeoJSON()),e.editableLayers.addLayer(t.layer)}),this.map.on(u.a.Draw.Event.DRAWSTART,function(){e.editableLayers&&e.editableLayers.eachLayer(function(t){e.editableLayers.removeLayer(t),f.$emit("draw-polyline-deleted","")})})},drawPolylineOnMap:function(e){var t=p.a.decode(e);this.editableLayers.getLayers().length>0?this.editableLayers.getLayers()[0].setLatLngs(t):u.a.polyline(t).addTo(this.editableLayers),this.editableLayers.getBounds().isValid()&&this.map.fitBounds(this.editableLayers.getBounds())}}},b=h,y=(n("089c"),n("2877")),g=Object(y["a"])(b,r,l,!1,null,"0063e01e",null);g.options.__file="Map.vue";var x=g.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"column container"},[n("Tabs"),n("PolylineTextArea",{directives:[{name:"show",rawName:"v-show",value:1===e.selectedTab,expression:"selectedTab === 1"}]}),n("GeoJsonTextArea",{directives:[{name:"show",rawName:"v-show",value:2===e.selectedTab,expression:"selectedTab === 2"}]})],1)},_=[],T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{spellcheck:"false"},domProps:{value:e.value},on:{input:[function(t){t.target.composing||(e.value=t.target.value)},e.onTextareaInput]}})])},O=[],I=(n("a481"),{data:function(){return{value:""}},mounted:function(){var e=this;f.$on("draw-polyline-created",function(t){e.updatePolylineInputField(t)}),f.$on("draw-polyline-deleted",function(){e.clearPolylineInputField()}),f.$on("text-geojson-changed",function(t){e.updatePolylineInputField(JSON.parse(t))})},methods:{onTextareaInput:function(){var e=this.value.replace(/\\\\/g,"\\");f.$emit("text-polyline-changed",e)},updatePolylineInputField:function(e){this.value=p.a.fromGeoJSON(e,5)},clearPolylineInputField:function(){this.value=""}},name:"PolylineTextArea",props:{msg:String}}),L=I,P=(n("c0c8"),Object(y["a"])(L,T,O,!1,null,"0da5f0f5",null));P.options.__file="PolylineTextArea.vue";var $=P.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{spellcheck:"false"},domProps:{value:e.value},on:{input:[function(t){t.target.composing||(e.value=t.target.value)},e.onTextareaInput]}})])},M=[],S={data:function(){return{value:""}},mounted:function(){var e=this;f.$on("draw-polyline-created",function(t){e.updateInputField(t)}),f.$on("draw-polyline-deleted",function(){e.clearInputField()}),f.$on("text-polyline-changed",function(t){e.updateInputField(p.a.toGeoJSON(t,5))})},methods:{onTextareaInput:function(){f.$emit("text-geojson-changed",this.value)},updateInputField:function(e){this.value=JSON.stringify(e,null,2)},clearInputField:function(){this.value=""}},name:"GeoJsonTextArea",props:{msg:String}},J=S,k=(n("4a75"),Object(y["a"])(J,j,M,!1,null,"080c4610",null));k.options.__file="GeoJsonTextArea.vue";var A=k.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tabs is-centered"},[n("ul",[n("li",{class:{"is-active":1===e.tabIndex},on:{click:function(t){e.setTabIndex(1)}}},[n("a",[e._v("Polyline")])]),n("li",{class:{"is-active":2===e.tabIndex},on:{click:function(t){e.setTabIndex(2)}}},[n("a",[e._v("GeoJSON")])])])])},E=[],F={name:"Tabs",data:function(){return{tabIndex:1}},methods:{setTabIndex:function(e){this.tabIndex=e,f.$emit("tab-index-changed",e)}}},C=F,G=(n("47b0"),Object(y["a"])(C,N,E,!1,null,null,null));G.options.__file="Tabs.vue";var D=G.exports,V={data:function(){return{value:"",selectedTab:1}},mounted:function(){var e=this;f.$on("tab-index-changed",function(t){e.selectedTab=t})},name:"LeftContainer",components:{PolylineTextArea:$,GeoJsonTextArea:A,Tabs:D}},R=V,W=Object(y["a"])(R,w,_,!1,null,null,null);W.options.__file="LeftContainer.vue";var B=W.exports,Z={name:"app",components:{LeftContainer:B,PolylineMap:x}},H=Z,U=(n("034f"),Object(y["a"])(H,o,i,!1,null,null,null));U.options.__file="App.vue";var q=U.exports;n("9299");new a["a"]({render:function(e){return e(q)}}).$mount("#app")},5885:function(e,t,n){},9299:function(e,t,n){},a364:function(e,t,n){},bb0c:function(e,t,n){},c0c8:function(e,t,n){"use strict";var a=n("bb0c"),o=n.n(a);o.a},c21b:function(e,t,n){},e656:function(e,t,n){}});
//# sourceMappingURL=app.f762c4bd.js.map