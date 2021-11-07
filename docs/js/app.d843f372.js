(function(t){function e(e){for(var n,s,r=e[0],c=e[1],u=e[2],p=0,d=[];p<r.length;p++)s=r[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,r=1;r<o.length;r++){var c=o[r];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},a={app:0},i=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e623"),o("e379"),o("5dc8"),o("37e1");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("Formatting")],1)},i=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",[o("section",{attrs:{title:"HTML View",contenteditable:t.HTMLEditable},domProps:{innerHTML:t._s(t.ioHTML)},on:{dblclick:t.changeState,focusout:t.updateHTML}}),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formattedTextInput,expression:"formattedTextInput"}],attrs:{cols:"30",rows:"10",placeholder:"Backend Input Code"},domProps:{value:t.formattedTextInput},on:{input:function(e){e.target.composing||(t.formattedTextInput=e.target.value)}}}),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.ioHTML,expression:"ioHTML"}],attrs:{cols:"30",rows:"10",placeholder:"HTML Input/Output Code"},domProps:{value:t.ioHTML},on:{input:function(e){e.target.composing||(t.ioHTML=e.target.value)}}}),o("textarea",{attrs:{cols:"30",rows:"10",placeholder:"Backend Output Code"},domProps:{value:t.formattedTextOutput},on:{click:t.copyData}})])},r=[],c=o("5530"),u=(o("ac1f"),o("5319"),o("498a"),o("13d5"),o("1276"),{data:function(){return{CHAR_FOR_LINE:119,ioHTML:"",formattedTextInput:"",HTMLEditable:!1}},watch:{formattedTextInput:{handler:function(t){this.ioHTML=this.normalizeHTML(t)}}},computed:{formattedTextOutput:function(){return this.encoderText(this.ioHTML)}},methods:{normalizeHTML:function(t){return t.trim().replace(/ {2,}/g,"").replace(/'\n'/g,"").replace(/\n/g,"").replace(/'/,"").replace(/'$/,"").replace(/&nbsp;/g," ").replace(/> </g,"><").replace(/ {1,}>/g,">").replace(/" | "/g,'"')},encoderText:function(t){return this.normalizeHTML(t).split(/(.{119})/).reduce((function(t,e){return t+(e?"'".concat(e,"'\n"):"")}),"")},copyData:function(){var t=this;this.formattedTextOutput?navigator.clipboard.writeText(this.formattedTextOutput).then((function(){return t.snackToast.open("Texto copiado!")})):this.snackToast.open({message:"Nada para copiar!",type:"is-danger"})},changeState:function(){this.HTMLEditable=!this.HTMLEditable,this.snackToast.open(this.HTMLEditable?"HTML em modo de edição":"HTML em modo de visão")},updateHTML:function(t){this.ioHTML=t.target.innerHTML,this.snackToast.open("HTML atualizado")}}}),l=Object(c["a"])({name:"Formatting"},u),p=l,d=(o("83c3"),o("2877")),f=Object(d["a"])(p,s,r,!1,null,"15f3dad1",null),h=f.exports,m={name:"App",components:{Formatting:h}},T=m,v=(o("5c0b"),Object(d["a"])(T,a,i,!1,null,null,null)),g=v.exports,b=(o("5363"),o("4795"),o("0d03"),o("d3b7"),o("25f0"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{"enter-active-class":"fadeInDown","leave-active-class":"fadeOut"}},[o("section",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"toast",on:{mouseover:t.pause,mouseleave:t.removePause}},[o("div",{class:t.type},[o("div",[0===t.actualToast?o("b-icon",{attrs:{icon:"check-circle",type:"is-success"}}):t._e(),1===t.actualToast?o("b-icon",{attrs:{icon:"close-circle",type:"is-danger"}}):t._e(),2===t.actualToast?o("b-icon",{attrs:{icon:"alert",type:"is-warning"}}):t._e(),o("p",{staticClass:"ml-15 has-text-weight-medium"},[o("span",{domProps:{innerHTML:t._s(t.message)}}),t.detail?o("a",{attrs:{href:t.detail.link}},[t._v(" "+t._s(t.detail.message)+" ")]):t._e()])],1),o("span",{staticClass:"is-clickable is-align-self-center",on:{click:t.close}})])])])}),y=[],x=(o("a9e3"),o("c975"),{props:{message:{type:String,default:""},duration:{type:Number},type:{type:String,default:"is-success"},detail:{type:Object},pauseOnHover:{type:Boolean,default:!1},queue:{type:Boolean,default:void 0},position:{type:String,default:"is-top",validator:function(t){return["is-top-right","is-top","is-top-left","is-bottom-right","is-bottom","is-bottom-left"].indexOf(t)>-1}},closeToast:{type:Function,default:function(){return null}}},computed:{actualToast:function(){return["is-success","is-danger","is-info"].indexOf(this.type)}},data:function(){return{isActive:!1,isPaused:!1}},methods:{close:function(){this.isActive=!1,this.isPaused=!1,this.closeToast()},pause:function(){this.pauseOnHover&&(this.isPaused=!0)},removePause:function(){this.pauseOnHover&&(this.isPaused=!1,this.close())}}}),w=x,H=(o("8852"),Object(d["a"])(w,b,y,!1,null,"cd2a914a",null)),M=H.exports,O={queue:[],defaultToastDuration:2e3,actualToast:void 0,timer:null,parentTop:void 0,nextToast:function(){var t=this;if(this.queue.length){if(this.actualToast)return;this.actualToast=this.queue[0],setTimeout((function(){t.showNotice()}),250)}},close:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.actualToast;e&&!e.$root.isPaused&&(e.$root.isActive=!1,setTimeout((function(){e.$destroy(),e.$el.remove(),e.$root.queue&&(clearTimeout(t.timer),t.queue.shift(),t.actualToast=void 0,t.nextToast())}),150))},showNotice:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.actualToast;this.parentTop.insertAdjacentElement("afterbegin",e.$el),e.$root.isActive=!0,this.timer=setTimeout((function(){e.$root.queue?t.close():t.close(e)}),e.$root.duration||this.defaultToastDuration)},open:function(t){var e,o=this,a="string"===typeof t?{message:t}:t;a.closeToast=function(){o.close()},a.message=a.message.toString();var i="undefined"!==typeof window&&window.Vue?window.Vue:n["a"];t.parent&&(e=t.parent,delete t.parent);var s=i.extend(M),r=new s({parent:e,el:document.createElement("div"),propsData:a});this.parentTop=document.querySelector(".notices.is-top"),this.parentTop||(this.parentTop=document.createElement("div"),this.parentTop.className="notices is-top",document.body.appendChild(this.parentTop)),a.queue?(this.queue.push(r),this.nextToast()):this.showNotice(r)}},L=o("289d");n["a"].prototype.snackToast=O,n["a"].use(L["a"]),new n["a"]({render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";o("9c0c")},"83c3":function(t,e,o){"use strict";o("ecd6")},8852:function(t,e,o){"use strict";o("97ee")},"97ee":function(t,e,o){},"9c0c":function(t,e,o){},ecd6:function(t,e,o){}});
//# sourceMappingURL=app.d843f372.js.map