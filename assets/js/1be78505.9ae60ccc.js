(self.webpackChunkdocusaurus_plugin_demo_block=self.webpackChunkdocusaurus_plugin_demo_block||[]).push([[514,103],{493:function(e,t,n){"use strict";var r=n(7294),o=n(1736),a=n(1262),l=n(412),i=n(821),c=n(3935),d=n(8084),s=n(9548),u=n(6012),p=n(5920);function f(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function m(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var h=f(r),v=f(o),b=f(a),y=f(l),g=m(i),_=f(c),w=f(u),E=function(){return E=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},E.apply(this,arguments)};function x(e,t,n,r){return new(n||(n=Promise))((function(o,a){function l(e){try{c(r.next(e))}catch(t){a(t)}}function i(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}c((r=r.apply(e,t||[])).next())}))}function k(e,t){var n,r,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,r=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(o=l.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){l=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){l.label=a[1];break}if(6===a[0]&&l.label<o[1]){l.label=o[1],o=a;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(a);break}o[2]&&l.ops.pop(),l.trys.pop();continue}a=t.call(e,l)}catch(i){a=[6,i],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}var C=["env","react"];function j(e,t){var n=e.match(new RegExp("<".concat(t,">([\\s\\S]+)</").concat(t,">"),"gim")),r="";return n&&(r=n[0].replace("<".concat(t,">"),"").replace("</".concat(t,">"),"")),r}var L=null;function N(){return L||(L=Promise.resolve().then((function(){return m(n(1041))})).catch((function(e){throw L=null,e})))}function M(e){return e.split(" ")[0]}function O(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}O(".dpdb__runner {\n  width: 100%;\n  height: 100%;\n}\n");var T=r.memo((function(e){var t=e.html,n=e.css,o=e.js,a=e.scope,l=e.isDarkTheme,i=e.options,c=r.useRef(null),d=r.useState(1),s=d[0],u=d[1],p=r.useState(!1),f=p[0],m=p[1];return r.useEffect((function(){(t||n||o)&&x(void 0,void 0,void 0,(function(){var e,r,d,s,p;return k(this,(function(f){switch(f.label){case 0:return m(!1),[4,(h=0,new Promise((function(e){setTimeout(e,h)})))];case 1:return f.sent(),m(!0),e=c.current,r=e.contentDocument,d=e.contentWindow,a&&Object.keys(a).forEach((function(e){d[e]=a[e]})),r.body.innerHTML="".concat(t,"<style>* { margin: 0; padding: 0; } html { padding: 20px; } ").concat(n,"</style>"),r.querySelector("html").dataset.theme=l?"dark":"light",r.body.style.color=l?"rgb(245, 246, 247)":"rgb(28, 30, 33)",i.showVConsole?((s=r.createElement("script")).src="https://cdn.jsdelivr.net/npm/vconsole@latest/dist/vconsole.min.js",s.onload=function(){var e=r.createElement("script");e.innerHTML="var vConsole = new window.VConsole();".concat(o),r.body.appendChild(e)},r.head.appendChild(s)):((p=r.createElement("script")).innerHTML=o,r.body.appendChild(p)),u(r.body.scrollHeight),[2]}var h}))}))}),[t,n,o,a,l]),h.default.createElement(h.default.Fragment,null,f&&h.default.createElement("iframe",{height:s,className:"dpdb__runner",ref:c}))}));O(".dpdb__playground {\n  width: 100%;\n  height: 100%;\n}\n.dpdb__playground .CodeMirror {\n  height: 100%;\n}\n");var z=null;y.default.canUseDOM&&(z=n(1036),n(4094),n(8740),n(3037),n(4274),n(1447),n(5083),n(4952),n(273),n(5164),n(7194));var q={vanilla:{mode:"htmlmixed",htmlMode:!0},react:{mode:"jsx"},vue:{mode:"text/x-vue"}},B=function(e){var t=e.value,n=e.onChange,o=e.type,a=e.isDarkTheme,l=r.useRef(null),i=r.useRef(null);return r.useEffect((function(){z&&(i.current=z(l.current,E({value:t,lineNumbers:!0,mode:"htmlmixed",htmlMode:!0,tabSize:2},q[o])),i.current.on("change",(function(){n(i.current.getValue())})))}),[]),r.useEffect((function(){i.current.setOption("theme",a?"seti":"default")}),[a]),h.default.createElement("div",{className:"dpdb__playground",ref:l})},S={Vue:g,React:h.default,ReactDOM:_.default};var V={babel:!0,iframe:!0,scope:{},showCodeByDefault:!0,live:!0,layout:"row",showCode:!0,libGlobalName:{},showJsfiddleLink:!0,showCodepenLink:!0,showCodesandboxLink:!0,showCopyCodeButton:!0,showVConsole:!1,showToggleButton:!0,vueLib:"https://cdn.jsdelivr.net/npm/vue@3.2.30/dist/vue.global.prod.js",reactLib:"https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js",reactDOMLib:"https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js"},D=function(e){var t=e.className,n=void 0===t?"":t;return h.default.createElement("svg",{className:n,width:"20",height:"20",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h.default.createElement("path",{d:"M10 44H38C39.1046 44 40 43.1046 40 42V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),h.default.createElement("path",{d:"M27 24L32 29L27 34",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),h.default.createElement("path",{d:"M21 24L16 29L21 34",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),h.default.createElement("path",{d:"M30 4V14H40",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}))},J=function(e){var t=e.className,n=void 0===t?"":t;return h.default.createElement("svg",{className:n,viewBox:"0 0 1024 1024",style:{transform:"scale(1.4)"},version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"9298",width:"20",height:"20",fill:"currentColor"},h.default.createElement("defs",null,h.default.createElement("style",{type:"text/css"})),h.default.createElement("path",{d:"M213.333333 351.146667h597.333334V256H213.333333v95.146667z m0 45.994666V768h597.333334V397.141333H213.333333zM213.333333 213.333333h597.333334a42.666667 42.666667 0 0 1 42.666666 42.666667v512a42.666667 42.666667 0 0 1-42.666666 42.666667H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666667V256a42.666667 42.666667 0 0 1 42.666666-42.666667z m194.56 427.178667l-24.021333 27.605333-97.28-86.186666 96.298667-98.986667 25.941333 25.813333-69.290667 71.168 68.352 60.586667z m198.229334 0l68.352-60.586667-69.333334-71.168 25.984-25.770666 96.298667 98.901333-97.28 86.229333-24.021333-27.605333z m-58.752-198.357333l33.792 13.653333-104.533334 263.893333-33.792-13.653333 104.533334-263.893333z",fill:"currentColor","p-id":"9299"}))},R=function(e){var t=e.className,n=void 0===t?"":t;return h.default.createElement("svg",{className:n,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6195",width:"20",height:"20",fill:"currentColor"},h.default.createElement("defs",null,h.default.createElement("style",{type:"text/css"})),h.default.createElement("path",{d:"M938.666667 642.005333a36.096 36.096 0 0 1-0.341334 4.778667l-0.256 1.578667-0.682666 3.072c-0.128 0.64-0.341333 1.194667-0.554667 1.792l-0.938667 2.688-0.853333 1.792c-0.341333 0.853333-0.768 1.621333-1.194667 2.432l-1.066666 1.706666a32.810667 32.810667 0 0 1-4.608 5.76l-1.493334 1.450667a34.645333 34.645333 0 0 1-2.090666 1.706667l-1.621334 1.28c-0.213333 0.128-0.426667 0.341333-0.64 0.426666l-389.973333 260.053334a36.608 36.608 0 0 1-40.704 0l-389.973333-260.010667-0.597334-0.426667a34.432 34.432 0 0 1-3.754666-3.029333c-0.512-0.426667-0.981333-0.938667-1.450667-1.450667-0.64-0.64-1.28-1.28-1.834667-1.962666a30.165333 30.165333 0 0 1-2.816-3.84 44.288 44.288 0 0 1-2.304-4.096l-0.810666-1.792a37.034667 37.034667 0 0 1-0.938667-2.688c-0.213333-0.597333-0.426667-1.152-0.554667-1.792-0.298667-0.981333-0.426667-2.048-0.64-3.072l-0.298666-1.578667A36.138667 36.138667 0 0 1 85.333333 642.005333V381.994667c0-1.621333 0.128-3.2 0.341334-4.778667l0.298666-1.578667c0.170667-1.024 0.341333-2.090667 0.64-3.072a33.024 33.024 0 0 1 6.186667-12.586666 41.728 41.728 0 0 1 1.237333-1.621334l1.834667-1.962666 1.450667-1.450667a35.584 35.584 0 0 1 3.754666-2.986667c0.213333-0.128 0.384-0.341333 0.597334-0.426666l389.973333-260.053334a36.693333 36.693333 0 0 1 40.704 0l389.973333 260.010667c0.213333 0.128 0.426667 0.341333 0.64 0.426667l1.621334 1.28a35.797333 35.797333 0 0 1 2.133333 1.749333l1.450667 1.450667a31.36 31.36 0 0 1 4.608 5.802666l1.066666 1.706667 1.237334 2.389333 0.810666 1.792 0.938667 2.688c0.213333 0.597333 0.426667 1.152 0.554667 1.792 0.298667 0.981333 0.469333 2.048 0.682666 3.072l0.256 1.578667a35.584 35.584 0 0 1 0.341334 4.778667v260.010666zM158.677333 450.645333v122.709334L250.410667 512l-91.733334-61.354667z m316.672-89.088V190.506667l-287.317333 191.573333 128.341333 85.802667 158.976-106.325334z m360.618667 20.48L548.693333 190.506667v171.050666l158.976 106.325334 128.298667-85.845334zM188.032 641.962667l287.317333 191.530666v-171.050666l-158.976-106.325334-128.341333 85.845334z m360.661333 20.48v171.050666l287.274667-191.573333-128.298667-85.76-158.976 106.282667zM512 425.216L382.293333 512 512 598.741333 641.706667 512 512 425.258667z m353.322667 148.138667v-122.709334L773.589333 512l91.733334 61.354667z",fill:"currentColor","p-id":"6196"}))},H=function(e){var t=e.className,n=void 0===t?"":t;return h.default.createElement("svg",{className:n,viewBox:"0 0 1171 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6556",width:"20",height:"20",fill:"currentColor"},h.default.createElement("defs",null,h.default.createElement("style",{type:"text/css"})),h.default.createElement("path",{d:"M1028.571429 441.142857q63.428571 26.285714 102.571429 83.142857t39.142857 126.571429q0 93.714286-67.428571 160.285714t-162.857143 66.571429q-2.285714 0-6.571429 2.857143t-6 2.857143l-695.428571 0q-97.142857-5.714286-164.571429-71.714286t-67.428571-160.285714q0-62.857143 31.428571-116t84-84q-6.857143-22.285714-6.857143-46.857143 0-65.714286 46.857143-112t113.714286-46.285714q54.285714 0 98.285714 33.142857 42.857143-88 127.142857-141.714286t186.571429-53.714286q94.857143 0 174.857143 46t126.571429 124.857143 46.571429 172q0 3.428571 2.857143 10.285714t2.857143 10.285714zm-761.142857 152q0 69.714286 48 110.285714t118.857143 40.571429q78.285714 0 137.142857-56.571429-9.142857-11.428571-27.142857-32.285714t-24.857143-28.857143q-38.285714 37.142857-82.285714 37.142857-31.428571 0-53.428571-19.142857t-22-50q0-30.285714 22-49.714286t52.285714-19.428571q25.142857 0 48.285714 12t41.714286 31.428571 37.142857 42.857143 39.428571 46.857143 44 42.857143 55.428571 31.428571 69.428571 12q69.142857 0 116.857143-40.857143t47.714286-108.857143q0-69.142857-48-109.714286t-118.285714-40.571429q-81.714286 0-137.714286 55.428571 8 9.142857 16.857143 19.428571t19.714286 22.857143 16.571429 19.428571q37.714286-36.571429 81.142857-36.571429 29.714286 0 52.571429 18.857143t22.857143 48q0 32.571429-21.142857 52.285714t-53.714286 19.714286q-24.571429 0-47.142857-12t-41.142857-31.428571-37.428571-42.857143-39.714286-46.857143-44.285714-42.857143-55.142857-31.428571-67.714286-12q-69.714286 0-118.285714 40.285714t-48.571429 108.285714z","p-id":"6557"}))},I=function(e){var t=e.className,n=void 0===t?"":t;return h.default.createElement("svg",{className:n,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6862",width:"20",height:"20",fill:"currentColor"},h.default.createElement("defs",null,h.default.createElement("style",{type:"text/css"})),h.default.createElement("path",{d:"M709.6 210l0.4-0.2h0.2L512 96 313.9 209.8h-0.2l0.7 0.3L151.5 304v416L512 928l360.5-208V304l-162.9-94zM482.7 843.6L339.6 761V621.4L210 547.8V372.9l272.7 157.3v313.4zM238.2 321.5l134.7-77.8 138.9 79.7 139.1-79.9 135.2 78-273.9 158-274-158zM814 548.3l-128.8 73.1v139.1l-143.9 83V530.4L814 373.1v175.2z","p-id":"6863"}))};O(".dpdb__control-bar {\n  border: 1px solid #ccc;\n  border-top: none;\n  height: 48px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: right;\n      justify-content: right;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\n.dpdb__control-bar-column {\n  border-left: none;\n  border-right: none;\n}\n\n.dpdb__control-bar-column-reverse {\n  border-left: none;\n  border-right: none;\n  border-bottom: none;\n  border-top: 1px solid #ccc;\n}\n\nhtml[data-theme='dark'] .dpdb__control-bar > div {\n  color: #ccc;\n}\n\n.dpdb__control-bar > div {\n  width: 24px;\n  height: 24px;\n  display: inline-block;\n  margin-right: 10px;\n  color: rgba(0, 0, 0, 0.3);\n  cursor: pointer;\n  text-align: center;\n}\n\n.dpdb__control-bar div:hover {\n  color: rgba(0, 0, 0, 0.5);\n}\n");var P=function(e){var t=e.html,n=e.css,o=e.originJs,a=e.bindSubmit,l=e.options,i=e.type,c=r.useRef(null),d=[];"react"===i?(d.push(l.reactLib),d.push(l.reactDOMLib)):"vue"===i&&d.push(l.vueLib);var s=JSON.stringify({css:n,html:t,js:o,js_external:d.join(";"),js_pre_processor:"babel"});return r.useEffect((function(){c.current&&a((function(){c.current.click()}))}),[]),h.default.createElement("form",{action:"https://codepen.io/pen/define",target:"_blank",method:"post"},h.default.createElement("input",{type:"hidden",name:"data",value:s}),h.default.createElement("button",{ref:c,type:"submit",style:{display:"none"}}))},A=function(e){var t=e.html,n=e.css,o=e.originJs,a=e.bindSubmit,l=e.options,i=e.type,c=r.useRef(null),d=[];"react"===i?(d.push(l.reactLib),d.push(l.reactDOMLib)):"vue"===i&&d.push(l.vueLib);var s=d.join(",");return r.useEffect((function(){c.current&&a((function(){c.current.click()}))}),[]),h.default.createElement("form",{action:"https://jsfiddle.net/api/post/library/pure/",target:"_blank",method:"post"},h.default.createElement("input",{type:"hidden",name:"css",value:n}),h.default.createElement("input",{type:"hidden",name:"html",value:t}),h.default.createElement("input",{type:"hidden",name:"js",value:o}),h.default.createElement("input",{type:"hidden",name:"panel_js",value:"3"}),h.default.createElement("input",{type:"hidden",name:"wrap",value:"1"}),h.default.createElement("input",{type:"hidden",name:"css",value:n}),h.default.createElement("input",{type:"hidden",name:"resources",value:s}),h.default.createElement("button",{ref:c,type:"submit",style:{display:"none"}}))},F=function(e){var t=e.html,n=e.css,o=e.originJs,a=e.bindSubmit,l=e.type,i=r.useRef(null),c={},d=o;d='\nimport "./index.css";\n\n'.concat(d,"  \n  ").trim(),"react"===l?(c.react="latest",c["react-dom"]="latest",d="\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n".concat(d,"\n    ").trim()):"vue"===l&&(c.vue="3.2.30",d="\nimport * as Vue from 'vue';\n".concat(d,"\n    ").trim());var s=p.getParameters({files:{"package.json":{content:JSON.stringify({dependencies:c},null,2),isBinary:!1},"index.js":{content:d,isBinary:!1},"index.html":{content:t,isBinary:!1},"index.css":{content:n,isBinary:!1}}});return r.useEffect((function(){i.current&&a((function(){i.current.click()}))}),[]),h.default.createElement("form",{action:"https://codesandbox.io/api/v1/sandboxes/define",target:"_blank",method:"post"},h.default.createElement("input",{type:"hidden",name:"parameters",value:s}),h.default.createElement("button",{ref:i,type:"submit",style:{display:"none"}}))},W=function(e){var t=e.options,n=e.code,o=e.onToggleCode,a=e.codeVisible,l=e.html,i=e.css,c=e.js,d=e.type,s=e.originJs,u=t.layout,p=t.showCodepenLink,f=t.showCodesandboxLink,m=t.showJsfiddleLink,v=t.showToggleButton,b=t.showCopyCodeButton,y=r.useRef({codepen:null,codesandbox:null,jsfiddle:null});return v||b||p||m||f?h.default.createElement("div",{className:"dpdb__control-bar dpdb__control-bar-".concat(u)},v&&h.default.createElement("div",{className:"dpdb__tip","data-tip":"".concat(a?"hide":"show"," code"),onClick:function(){o(!a)}},h.default.createElement(J,null)),b&&h.default.createElement("div",{className:"dpdb__tip","data-tip":"copy code",onClick:function(){w.default(n)}},h.default.createElement(D,null)),p&&h.default.createElement("div",{className:"dpdb__tip","data-tip":"open in codepen",onClick:function(){y.current.codepen()}},h.default.createElement(R,null)),m&&h.default.createElement("div",{className:"dpdb__tip","data-tip":"open in jsfiddle",onClick:function(){y.current.jsfiddle()}},h.default.createElement(H,null)),f&&h.default.createElement("div",{className:"dpdb__tip","data-tip":"open in codesandbox",onClick:function(){y.current.codesandbox()}},h.default.createElement(I,null)),h.default.createElement(P,{html:l,css:i,js:c,type:d,options:t,originJs:s,bindSubmit:function(e){y.current.codepen=e}}),h.default.createElement(A,{html:l,css:i,js:c,type:d,options:t,originJs:s,bindSubmit:function(e){y.current.jsfiddle=e}}),h.default.createElement(F,{html:l,css:i,js:c,type:d,options:t,originJs:s,bindSubmit:function(e){y.current.codesandbox=e}})):h.default.createElement(h.default.Fragment,null)};O(".dpdb {\n  margin-top: 10px;\n}\n\n.dpdb__hidden {\n  display: none;\n}\n\n.dpdb__tip {\n  position: relative;\n}\n\n.dpdb__tip:hover::before {\n  content: attr(data-tip);\n  white-space: nowrap;\n  position: absolute;\n  top: -35px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  color: #eee;\n  line-height: 1;\n  z-index: 1000;\n  border-radius: 2px;\n  padding: 6px;\n  background-color: rgba(0, 0, 0, 1);\n  cursor: default;\n}\n\n.dpdb__tip:hover::after {\n  content: '';\n  display: inline-block;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  top: -8px;\n  border: 5px solid transparent;\n  border-top-color: rgba(0, 0, 0, 0.8);\n}\n\n.dpdb__container {\n  display: -ms-flexbox;\n  display: flex;\n  border: 1px solid #ccc;\n}\n/** row display */\n.dpdb__display-row {\n  height: 400px;\n}\n\n.dpdb__display-row .dpdb__playground-wrapper {\n  width: 50%;\n}\n\n.dpdb__display-row .theme-code-block,\n.dpdb__display-row .theme-code-block > div,\n.dpdb__display-row .theme-code-block > div > pre {\n  height: 100%;\n}\n\n.dpdb__display-row .dpdb__runner-wrapper {\n  -ms-flex: 1;\n      flex: 1;\n}\n\n.dpdb__container-row {\n  -ms-flex-direction: row;\n      flex-direction: row;\n}\n.dpdb__container-row .dpdb__playground-wrapper {\n  border-right: 1px solid #ccc;\n}\n\n.dpdb__container-row-reverse {\n  -ms-flex-direction: row-reverse;\n      flex-direction: row-reverse;\n}\n\n.dpdb__container-row-reverse .dpdb__playground-wrapper {\n  border-left: 1px solid #ccc;\n}\n\n/** column display */\n.dpdb__display-column .theme-code-block {\n  margin-bottom: 0;\n}\n\n.dpdb__container-column {\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n.dpdb__container-column-reverse {\n  -ms-flex-direction: column-reverse;\n      flex-direction: column-reverse;\n}\n\n.dpdb__container-column .dpdb__playground-wrapper {\n  border-bottom: 1px solid #ccc;\n}\n\n.dpdb__container-column-reverse .dpdb__playground-wrapper {\n  border-top: 1px solid #ccc;\n}\n");var X={vanilla:function(e){return x(this,void 0,void 0,(function(){var t,n,r,o,a;return k(this,(function(l){switch(l.label){case 0:return[4,N()];case 1:return t=l.sent(),n=j(e,"template"),r=j(e,"style"),o=j(e,"script"),a=t.transform(o,{presets:C}).code,[2,{html:n,css:r,js:a,originJs:o,type:"vanilla"}]}}))}))},vue:function(e){return x(this,void 0,void 0,(function(){var t,n,r,o,a,l,i;return k(this,(function(c){switch(c.label){case 0:return t=j(e,"template"),n=j(e,"style"),r=j(e,"script"),[4,N()];case 1:return o=c.sent(),a=o.transform(r,{presets:["env"]}).code,l="\n    var CONTAINER = document.getElementById('app');\n    ".concat(a,";\n  "),i="\n    const CONTAINER = document.getElementById('app');\n".concat(r,"\n  ").trim(),[2,{html:'<div id="app">'.concat(t,"</div>"),css:n,js:l,originJs:i,type:"vue"}]}}))}))},react:function(e){return x(this,void 0,void 0,(function(){var t,n,r,o;return k(this,(function(a){switch(a.label){case 0:return[4,N()];case 1:return t=a.sent(),n=t.transform(e,{presets:C}).code,r="\n    var CONTAINER = document.getElementById('app');\n    ".concat(n,"\n  "),o="\n    const CONTAINER = document.getElementById('app');\n".concat(e.trim(),"\n  ").trim(),[2,{html:'<div id="app"></div>',css:"",js:r,originJs:o,type:"react"}]}}))}))}};function U(e){var t=this,n=e.children,o=e.metastring,a=r.useState(n),l=a[0],i=a[1],c=r.useState(null),u=c[0],p=c[1],f=r.useState({html:"",css:"",js:"",originJs:"",type:"vanilla"}),m=f[0],b=f[1],y=s.useColorMode().isDarkTheme,g=d.usePluginData("docusaurus-plugin-demo-block"),_=function(e){var t=e.split(" ")[1];return t?t.split("&").reduce((function(e,t){var n=t.split("="),r=n[0],o=n[1];return e[r]=new Function("return ".concat(o))(),e}),{}):{}}(o),w=E(E(E({},V),g),_),C=w.layout,j=w.live,L=w.showCode,N=w.scope,O=void 0===N?{}:N,z=r.useState(w.showCodeByDefault),q=z[0],D=z[1],J=function(e,t){void 0===t&&(t=300);var n=r.useRef();return r.useCallback((function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];n.current&&clearTimeout(n.current),n.current=setTimeout((function(){n.current=null,e.apply(void 0,r)}),t)}),[])}((function(e){i(e)}));r.useEffect((function(){l!==n&&i(n)}),[n]),r.useEffect((function(){x(t,void 0,void 0,(function(){var e;return k(this,(function(t){return e=E(E({},S),O),p(e),[2]}))}))}),[]),r.useEffect((function(){x(t,void 0,void 0,(function(){var e;return k(this,(function(t){switch(t.label){case 0:return[4,X[M(o)](l)];case 1:return e=t.sent(),b(e),[2]}}))}))}),[l]);var R=C.split("-")[0],H=h.default.createElement(W,{html:m.html,css:m.css,js:m.js,type:m.type,originJs:m.originJs,options:w,code:n,codeVisible:q,onToggleCode:function(e){D(e)}});return h.default.createElement("div",{className:"dpdb"},h.default.createElement("div",{className:"dpdb__container dpdb__container-".concat(C," dpdb__display-").concat(C.split("-")[0])},L&&h.default.createElement("div",{className:"dpdb__playground-wrapper ".concat(q?"":"dpdb__hidden")},j?h.default.createElement(B,{isDarkTheme:y,type:M(o),value:l,onChange:function(e){return J(e)}}):h.default.createElement(v.default,E({},e))),"column"===R&&H,h.default.createElement("div",{className:"dpdb__runner-wrapper"},h.default.createElement(T,E({},m,{isDarkTheme:y,scope:u,options:w})))),"row"===R&&H)}var G,Z=(G=v.default,function(e){var t=e.vanilla,n=e.vue,r=e.react;return t||n||r?h.default.createElement(b.default,{fallback:h.default.createElement(h.default.Fragment,null,"loading...")},(function(){return h.default.createElement(U,E({},e))})):h.default.createElement(G,E({},e))});e.exports=Z},363:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=363,e.exports=t}}]);