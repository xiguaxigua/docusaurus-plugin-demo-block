(self.webpackChunkdocusaurus_plugin_demo_block=self.webpackChunkdocusaurus_plugin_demo_block||[]).push([[103,514],{493:function(e,t,n){"use strict";var r=n(7294),o=n(1736),l=n(1262),a=n(412),c=n(821),d=n(3935),i=n(8084),u=n(9548),s=n(6012);function p(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function f(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var m=p(r),h=p(o),v=p(l),b=p(a),_=f(c),w=p(d),g=p(s),y=function(){return y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},y.apply(this,arguments)};function x(e,t,n,r){return new(n||(n=Promise))((function(o,l){function a(e){try{d(r.next(e))}catch(t){l(t)}}function c(e){try{d(r.throw(e))}catch(t){l(t)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}d((r=r.apply(e,t||[])).next())}))}function E(e,t){var n,r,o,l,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return l={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function c(l){return function(c){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,r=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){a=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){a.label=l[1];break}if(6===l[0]&&a.label<o[1]){a.label=o[1],o=l;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(l);break}o[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(e,a)}catch(c){l=[6,c],r=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}}function k(e,t){var n=e.match(new RegExp("<".concat(t,">([\\s\\S]+)</").concat(t,">"),"gim")),r="";return n&&(r=n[0].replace("<".concat(t,">"),"").replace("</".concat(t,">"),"")),r}var C=null;function M(){return C||(C=Promise.resolve().then((function(){return f(n(1041))})).catch((function(e){throw C=null,e})))}function N(e){return e.split(" ")[0]}function L(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}L(".dpdb__runner {\n  width: 100%;\n}\n");var z=r.memo((function(e){var t=e.html,n=e.css,o=e.js,l=e.scope,a=e.isDarkTheme,c=r.useRef(null),d=r.useState(1),i=d[0],u=d[1],s=r.useState(1),p=s[0],f=s[1];return r.useEffect((function(){x(void 0,void 0,void 0,(function(){var e,r,d,i;return E(this,(function(s){switch(s.label){case 0:return f((function(e){return++e})),[4,(p=200,new Promise((function(e){setTimeout(e,p)})))];case 1:return s.sent(),e=c.current,r=e.contentDocument,d=e.contentWindow,l&&Object.keys(l).forEach((function(e){d[e]=l[e]})),r.body.innerHTML="".concat(t,"<style>* { margin: 0; padding: 0; } html { padding: 20px; } ").concat(n,"</style>"),(i=r.createElement("script")).innerHTML=o,r.body.appendChild(i),r.querySelector("html").dataset.theme=a?"dark":"light",r.body.style.color=a?"rgb(245, 246, 247)":"rgb(28, 30, 33)",u(r.body.scrollHeight),[2]}var p}))}))}),[t,n,o,l,a]),m.default.createElement("iframe",{height:i,className:"dpdb__runner",key:p,ref:c})}));L(".dpdb__playground {\n  width: 100%;\n  height: 100%;\n}\n.dpdb__playground .CodeMirror {\n  height: 100%;\n}\n");var q=null;b.default.canUseDOM&&(q=n(1036),n(4094),n(8740),n(3037),n(4274),n(1447),n(5083),n(4952),n(273),n(5164),n(7194));var j={vanilla:{mode:"htmlmixed",htmlMode:!0},react:{mode:"jsx"},vue:{mode:"text/x-vue"}},T=function(e){var t=e.value,n=e.onChange,o=e.type,l=e.isDarkTheme,a=r.useRef(null),c=r.useRef(null);return r.useEffect((function(){q&&(c.current=q(a.current,y({value:t,lineNumbers:!0,mode:"htmlmixed",htmlMode:!0,tabSize:2},j[o])),c.current.on("change",(function(){n(c.current.getValue())})))}),[]),r.useEffect((function(){c.current.setOption("theme",l?"seti":"default")}),[l]),m.default.createElement("div",{className:"dpdb__playground",ref:a})},V={Vue:_,React:m.default,ReactDOM:w.default,useEffect:r.useEffect,useCallback:r.useCallback,useContext:r.useContext,useDebugValue:r.useDebugValue,useImperativeHandle:r.useImperativeHandle,useLayoutEffect:r.useLayoutEffect,useMemo:r.useMemo,useReducer:r.useReducer,useRef:r.useRef,useState:r.useState};var D={babel:!0,iframe:!0,scope:{},showCodeByDefault:!0,live:!0,layout:"row",showCode:!0,libGlobalName:{},showJsfiddleLink:!0,showCodepenLink:!0,showCodesandboxLink:!0,showCopyCodeButton:!0,showToggleButton:!0},O=function(e){var t=e.className,n=void 0===t?"":t;return m.default.createElement("svg",{className:n,width:"20",height:"20",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m.default.createElement("path",{d:"M10 44H38C39.1046 44 40 43.1046 40 42V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z",stroke:"currentColor","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}),m.default.createElement("path",{d:"M27 24L32 29L27 34",stroke:"currentColor","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}),m.default.createElement("path",{d:"M21 24L16 29L21 34",stroke:"currentColor","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}),m.default.createElement("path",{d:"M30 4V14H40",stroke:"currentColor","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}))},B=function(e){var t=e.className,n=void 0===t?"":t;return m.default.createElement("svg",{className:n,viewBox:"0 0 1024 1024",style:{transform:"scale(1.4)"},version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"9298",width:"20",height:"20",fill:"currentColor"},m.default.createElement("defs",null,m.default.createElement("style",{type:"text/css"})),m.default.createElement("path",{d:"M213.333333 351.146667h597.333334V256H213.333333v95.146667z m0 45.994666V768h597.333334V397.141333H213.333333zM213.333333 213.333333h597.333334a42.666667 42.666667 0 0 1 42.666666 42.666667v512a42.666667 42.666667 0 0 1-42.666666 42.666667H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666667V256a42.666667 42.666667 0 0 1 42.666666-42.666667z m194.56 427.178667l-24.021333 27.605333-97.28-86.186666 96.298667-98.986667 25.941333 25.813333-69.290667 71.168 68.352 60.586667z m198.229334 0l68.352-60.586667-69.333334-71.168 25.984-25.770666 96.298667 98.901333-97.28 86.229333-24.021333-27.605333z m-58.752-198.357333l33.792 13.653333-104.533334 263.893333-33.792-13.653333 104.533334-263.893333z",fill:"currentColor","p-id":"9299"}))},S=function(e){var t=e.className,n=void 0===t?"":t;return m.default.createElement("svg",{className:n,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6195",width:"20",height:"20",fill:"currentColor"},m.default.createElement("defs",null,m.default.createElement("style",{type:"text/css"})),m.default.createElement("path",{d:"M938.666667 642.005333a36.096 36.096 0 0 1-0.341334 4.778667l-0.256 1.578667-0.682666 3.072c-0.128 0.64-0.341333 1.194667-0.554667 1.792l-0.938667 2.688-0.853333 1.792c-0.341333 0.853333-0.768 1.621333-1.194667 2.432l-1.066666 1.706666a32.810667 32.810667 0 0 1-4.608 5.76l-1.493334 1.450667a34.645333 34.645333 0 0 1-2.090666 1.706667l-1.621334 1.28c-0.213333 0.128-0.426667 0.341333-0.64 0.426666l-389.973333 260.053334a36.608 36.608 0 0 1-40.704 0l-389.973333-260.010667-0.597334-0.426667a34.432 34.432 0 0 1-3.754666-3.029333c-0.512-0.426667-0.981333-0.938667-1.450667-1.450667-0.64-0.64-1.28-1.28-1.834667-1.962666a30.165333 30.165333 0 0 1-2.816-3.84 44.288 44.288 0 0 1-2.304-4.096l-0.810666-1.792a37.034667 37.034667 0 0 1-0.938667-2.688c-0.213333-0.597333-0.426667-1.152-0.554667-1.792-0.298667-0.981333-0.426667-2.048-0.64-3.072l-0.298666-1.578667A36.138667 36.138667 0 0 1 85.333333 642.005333V381.994667c0-1.621333 0.128-3.2 0.341334-4.778667l0.298666-1.578667c0.170667-1.024 0.341333-2.090667 0.64-3.072a33.024 33.024 0 0 1 6.186667-12.586666 41.728 41.728 0 0 1 1.237333-1.621334l1.834667-1.962666 1.450667-1.450667a35.584 35.584 0 0 1 3.754666-2.986667c0.213333-0.128 0.384-0.341333 0.597334-0.426666l389.973333-260.053334a36.693333 36.693333 0 0 1 40.704 0l389.973333 260.010667c0.213333 0.128 0.426667 0.341333 0.64 0.426667l1.621334 1.28a35.797333 35.797333 0 0 1 2.133333 1.749333l1.450667 1.450667a31.36 31.36 0 0 1 4.608 5.802666l1.066666 1.706667 1.237334 2.389333 0.810666 1.792 0.938667 2.688c0.213333 0.597333 0.426667 1.152 0.554667 1.792 0.298667 0.981333 0.469333 2.048 0.682666 3.072l0.256 1.578667a35.584 35.584 0 0 1 0.341334 4.778667v260.010666zM158.677333 450.645333v122.709334L250.410667 512l-91.733334-61.354667z m316.672-89.088V190.506667l-287.317333 191.573333 128.341333 85.802667 158.976-106.325334z m360.618667 20.48L548.693333 190.506667v171.050666l158.976 106.325334 128.298667-85.845334zM188.032 641.962667l287.317333 191.530666v-171.050666l-158.976-106.325334-128.341333 85.845334z m360.661333 20.48v171.050666l287.274667-191.573333-128.298667-85.76-158.976 106.282667zM512 425.216L382.293333 512 512 598.741333 641.706667 512 512 425.258667z m353.322667 148.138667v-122.709334L773.589333 512l91.733334 61.354667z",fill:"currentColor","p-id":"6196"}))},R=function(e){var t=e.className,n=void 0===t?"":t;return m.default.createElement("svg",{className:n,viewBox:"0 0 1171 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6556",width:"20",height:"20",fill:"currentColor"},m.default.createElement("defs",null,m.default.createElement("style",{type:"text/css"})),m.default.createElement("path",{d:"M1028.571429 441.142857q63.428571 26.285714 102.571429 83.142857t39.142857 126.571429q0 93.714286-67.428571 160.285714t-162.857143 66.571429q-2.285714 0-6.571429 2.857143t-6 2.857143l-695.428571 0q-97.142857-5.714286-164.571429-71.714286t-67.428571-160.285714q0-62.857143 31.428571-116t84-84q-6.857143-22.285714-6.857143-46.857143 0-65.714286 46.857143-112t113.714286-46.285714q54.285714 0 98.285714 33.142857 42.857143-88 127.142857-141.714286t186.571429-53.714286q94.857143 0 174.857143 46t126.571429 124.857143 46.571429 172q0 3.428571 2.857143 10.285714t2.857143 10.285714zm-761.142857 152q0 69.714286 48 110.285714t118.857143 40.571429q78.285714 0 137.142857-56.571429-9.142857-11.428571-27.142857-32.285714t-24.857143-28.857143q-38.285714 37.142857-82.285714 37.142857-31.428571 0-53.428571-19.142857t-22-50q0-30.285714 22-49.714286t52.285714-19.428571q25.142857 0 48.285714 12t41.714286 31.428571 37.142857 42.857143 39.428571 46.857143 44 42.857143 55.428571 31.428571 69.428571 12q69.142857 0 116.857143-40.857143t47.714286-108.857143q0-69.142857-48-109.714286t-118.285714-40.571429q-81.714286 0-137.714286 55.428571 8 9.142857 16.857143 19.428571t19.714286 22.857143 16.571429 19.428571q37.714286-36.571429 81.142857-36.571429 29.714286 0 52.571429 18.857143t22.857143 48q0 32.571429-21.142857 52.285714t-53.714286 19.714286q-24.571429 0-47.142857-12t-41.142857-31.428571-37.428571-42.857143-39.714286-46.857143-44.285714-42.857143-55.142857-31.428571-67.714286-12q-69.714286 0-118.285714 40.285714t-48.571429 108.285714z","p-id":"6557"}))},H=function(e){var t=e.className,n=void 0===t?"":t;return m.default.createElement("svg",{className:n,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6862",width:"20",height:"20",fill:"currentColor"},m.default.createElement("defs",null,m.default.createElement("style",{type:"text/css"})),m.default.createElement("path",{d:"M709.6 210l0.4-0.2h0.2L512 96 313.9 209.8h-0.2l0.7 0.3L151.5 304v416L512 928l360.5-208V304l-162.9-94zM482.7 843.6L339.6 761V621.4L210 547.8V372.9l272.7 157.3v313.4zM238.2 321.5l134.7-77.8 138.9 79.7 139.1-79.9 135.2 78-273.9 158-274-158zM814 548.3l-128.8 73.1v139.1l-143.9 83V530.4L814 373.1v175.2z","p-id":"6863"}))};L(".dpdb__control-bar {\n  border: 1px solid #ccc;\n  border-top: none;\n  height: 48px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: right;\n      justify-content: right;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\n.dpdb__control-bar-column {\n  border-left: none;\n  border-right: none;\n}\n\n.dpdb__control-bar-column-reverse {\n  border-left: none;\n  border-right: none;\n  border-bottom: none;\n  border-top: 1px solid #ccc;\n}\n\nhtml[data-theme='dark'] .dpdb__control-bar > div {\n  color: #ccc;\n}\n\n.dpdb__control-bar > div {\n  width: 24px;\n  height: 24px;\n  display: inline-block;\n  margin-right: 10px;\n  color: rgba(0, 0, 0, 0.3);\n  cursor: pointer;\n  text-align: center;\n}\n\n.dpdb__control-bar div:hover {\n  color: rgba(0, 0, 0, 0.5);\n}\n");var P=function(e){var t=e.options,n=e.code,r=e.onToggleCode,o=e.codeVisible;console.log("options",t);var l=t.layout,a=t.showCodepenLink,c=t.showCodesandboxLink,d=t.showJsfiddleLink,i=t.showToggleButton,u=t.showCopyCodeButton;return i||u||a||d||c?m.default.createElement("div",{className:"dpdb__control-bar dpdb__control-bar-".concat(l)},i&&m.default.createElement("div",{className:"dpdb__tip","data-tip":"".concat(o?"hide":"show"," code"),onClick:function(){r(!o)}},m.default.createElement(B,null)),u&&m.default.createElement("div",{className:"dpdb__tip","data-tip":"copy code",onClick:function(){g.default(n)}},m.default.createElement(O,null)),a&&m.default.createElement("div",{className:"dpdb__tip","data-tip":"open in codepen"},m.default.createElement(S,null)),d&&m.default.createElement("div",{className:"dpdb__tip","data-tip":"open in jsfiddle"},m.default.createElement(R,null)),c&&m.default.createElement("div",{className:"dpdb__tip","data-tip":"open in codesandbox"},m.default.createElement(H,null))):m.default.createElement(m.default.Fragment,null)};L(".dpdb {\n  margin-top: 10px;\n}\n\n.dpdb__hidden {\n  display: none;\n}\n\n.dpdb__tip {\n  position: relative;\n}\n\n.dpdb__tip:hover::before {\n  content: attr(data-tip);\n  white-space: nowrap;\n  position: absolute;\n  top: -35px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  color: #eee;\n  line-height: 1;\n  z-index: 1000;\n  border-radius: 2px;\n  padding: 6px;\n  background-color: rgba(0, 0, 0, 1);\n  cursor: default;\n}\n\n.dpdb__tip:hover::after {\n  content: '';\n  display: inline-block;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  top: -8px;\n  border: 5px solid transparent;\n  border-top-color: rgba(0, 0, 0, 0.8);\n}\n\n.dpdb__container {\n  display: -ms-flexbox;\n  display: flex;\n  border: 1px solid #ccc;\n}\n/** row display */\n.dpdb__display-row {\n  height: 400px;\n}\n\n.dpdb__display-row .dpdb__playground-wrapper {\n  width: 50%;\n}\n\n.dpdb__display-row .theme-code-block,\n.dpdb__display-row .theme-code-block > div,\n.dpdb__display-row .theme-code-block > div > pre {\n  height: 100%;\n}\n\n.dpdb__display-row .dpdb__runner-wrapper {\n  -ms-flex: 1;\n      flex: 1;\n}\n\n.dpdb__container-row {\n  -ms-flex-direction: row;\n      flex-direction: row;\n}\n.dpdb__container-row .dpdb__playground-wrapper {\n  border-right: 1px solid #ccc;\n}\n\n.dpdb__container-row-reverse {\n  -ms-flex-direction: row-reverse;\n      flex-direction: row-reverse;\n}\n\n.dpdb__container-row-reverse .dpdb__playground-wrapper {\n  border-left: 1px solid #ccc;\n}\n\n/** column display */\n.dpdb__display-column .theme-code-block {\n  margin-bottom: 0;\n}\n\n.dpdb__container-column {\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n.dpdb__container-column-reverse {\n  -ms-flex-direction: column-reverse;\n      flex-direction: column-reverse;\n}\n\n.dpdb__container-column .dpdb__playground-wrapper {\n  border-bottom: 1px solid #ccc;\n}\n\n.dpdb__container-column-reverse .dpdb__playground-wrapper {\n  border-top: 1px solid #ccc;\n}\n");var A={vanilla:function(e){return x(this,void 0,void 0,(function(){var t,n,r;return E(this,(function(o){return t=k(e,"html"),n=k(e,"style"),r=k(e,"script"),[2,{html:t,css:n,js:r}]}))}))},vue:function(e){return x(this,void 0,void 0,(function(){var t,n,r,o,l,a;return E(this,(function(c){switch(c.label){case 0:return t=k(e,"template"),n=k(e,"style"),r=k(e,"script"),[4,M()];case 1:return o=c.sent(),l=o.transform(r,{presets:[o.availablePresets.env]}).code,a="\n    var comp = (function(exports){\n      var module={};\n      module.exports=exports;\n      ".concat(l,";\n      return module.exports.__esModule?module.exports.default:module.exports;\n    })({});\n    Vue.createApp(comp).mount(document.getElementById('app'))\n  "),[2,{html:'<div id="app">'.concat(t,"</div>"),css:n,js:a}]}}))}))},react:function(e){return x(this,void 0,void 0,(function(){var t,n;return E(this,(function(r){switch(r.label){case 0:return[4,M()];case 1:return t=r.sent(),n=t.transform(e,{presets:["es2015","react"]}).code,[2,{html:'<div id="app"></div>',css:"",js:"\n    var { App, style } = (function(exports){\n      var module={};\n      module.exports=exports;\n      ".concat(n,';\n      return module.exports;\n    })({});\n    document.body.innerHTML += "<style>" + style + "</style>";\n    ReactDOM.render(React.createElement(App, null), document.getElementById(\'app\'));\n  ')}]}}))}))}};function F(e){var t=this,n=e.children,o=e.metastring,l=r.useState(n),a=l[0],c=l[1],d=r.useState(null),s=d[0],p=d[1],f=r.useState({html:"",css:"",js:""}),v=f[0],b=f[1],_=u.useColorMode().isDarkTheme,w=i.usePluginData("docusaurus-plugin-demo-block"),g=function(e){var t=e.split(" ")[1];return t?t.split("&").reduce((function(e,t){var n=t.split("="),r=n[0],o=n[1];return e[r]=new Function("return ".concat(o))(),e}),{}):{}}(o),k=y(y(y({},D),w),g),C=k.layout,M=k.live,L=k.showCode,q=k.scope,j=void 0===q?{}:q,O=r.useState(k.showCodeByDefault),B=O[0],S=O[1],R=function(e,t){void 0===t&&(t=300);var n=r.useRef();return r.useCallback((function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];n.current&&clearTimeout(n.current),n.current=setTimeout((function(){n.current=null,e.apply(void 0,r)}),t)}),[])}((function(e){c(e)}));r.useEffect((function(){a!==n&&c(n)}),[n]),r.useEffect((function(){x(t,void 0,void 0,(function(){var e;return E(this,(function(t){return e=y(y({},V),j),p(e),[2]}))}))}),[]),r.useEffect((function(){x(t,void 0,void 0,(function(){var e;return E(this,(function(t){switch(t.label){case 0:return[4,A[N(o)](a)];case 1:return e=t.sent(),b(e),[2]}}))}))}),[a]);var H=C.split("-")[0];return m.default.createElement("div",{className:"dpdb"},m.default.createElement("div",{className:"dpdb__container dpdb__container-".concat(C," dpdb__display-").concat(C.split("-")[0])},L&&m.default.createElement("div",{className:"dpdb__playground-wrapper ".concat(B?"":"dpdb__hidden")},M?m.default.createElement(T,{isDarkTheme:_,type:N(o),value:a,onChange:function(e){return R(e)}}):m.default.createElement(h.default,y({},e))),"column"===H&&m.default.createElement(P,{options:k,code:n,codeVisible:B,onToggleCode:function(e){S(e)}}),m.default.createElement("div",{className:"dpdb__runner-wrapper"},m.default.createElement(z,y({},v,{isDarkTheme:_,scope:s})))),"row"===H&&m.default.createElement(P,{options:k,code:n,codeVisible:B,onToggleCode:function(e){S(e)}}))}var I,X=(I=h.default,function(e){var t=e.vanilla,n=e.vue,r=e.react;return t||n||r?m.default.createElement(v.default,{fallback:m.default.createElement(m.default.Fragment,null,"loading...")},(function(){return m.default.createElement(F,y({},e))})):m.default.createElement(I,y({},e))});e.exports=X},363:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=363,e.exports=t}}]);