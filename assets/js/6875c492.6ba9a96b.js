(self.webpackChunkdocusaurus_plugin_demo_block=self.webpackChunkdocusaurus_plugin_demo_block||[]).push([[610,514,103],{493:function(e,t,n){"use strict";var a=n(7294),r=n(1736),l=n(1262),o=n(412),i=n(821),c=n(3935),s=n(8084),d=n(9548),u=n(6012),m=n(5920);function p(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function f(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var a=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,a.get?a:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var h=p(a),v=p(r),b=p(l),g=p(o),E=f(i),_=p(c),y=p(u),w=function(){return w=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},w.apply(this,arguments)};function k(e,t,n,a){return new(n||(n=Promise))((function(r,l){function o(e){try{c(a.next(e))}catch(t){l(t)}}function i(e){try{c(a.throw(e))}catch(t){l(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}c((a=a.apply(e,t||[])).next())}))}function x(e,t){var n,a,r,l,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&l[0]?a.return:l[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,l[1])).done)return r;switch(a=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,a=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){o.label=l[1];break}if(6===l[0]&&o.label<r[1]){o.label=r[1],r=l;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(l);break}r[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(i){l=[6,i],a=0}finally{n=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}}var N=["env","react"];function C(e,t){var n=e.match(new RegExp("<".concat(t,">([\\s\\S]+)</").concat(t,">"),"gim")),a="";return n&&(a=n[0].replace("<".concat(t,">"),"").replace("</".concat(t,">"),"")),a}var L=null;function T(){return L||(L=Promise.resolve().then((function(){return f(n(1041))})).catch((function(e){throw L=null,e})))}function j(e){return e.split(" ")[0]}function P(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}P(".dpdb__runner {\n  width: 100%;\n}\n");var Z=a.memo((function(e){var t=e.html,n=e.css,r=e.js,l=e.scope,o=e.isDarkTheme,i=a.useRef(null),c=a.useState(1),s=c[0],d=c[1],u=a.useState(1),m=u[0],p=u[1];return a.useEffect((function(){k(void 0,void 0,void 0,(function(){var e,a,c,s;return x(this,(function(u){switch(u.label){case 0:return p((function(e){return++e})),[4,(m=200,new Promise((function(e){setTimeout(e,m)})))];case 1:return u.sent(),e=i.current,a=e.contentDocument,c=e.contentWindow,l&&Object.keys(l).forEach((function(e){c[e]=l[e]})),a.body.innerHTML="".concat(t,"<style>* { margin: 0; padding: 0; } html { padding: 20px; } ").concat(n,"</style>"),(s=a.createElement("script")).innerHTML=r,a.body.appendChild(s),a.querySelector("html").dataset.theme=o?"dark":"light",a.body.style.color=o?"rgb(245, 246, 247)":"rgb(28, 30, 33)",d(a.body.scrollHeight),[2]}var m}))}))}),[t,n,r,l,o]),h.default.createElement("iframe",{height:s,className:"dpdb__runner",key:m,ref:i})}));P(".dpdb__playground {\n  width: 100%;\n  height: 100%;\n}\n.dpdb__playground .CodeMirror {\n  height: 100%;\n}\n");var M=null;g.default.canUseDOM&&(M=n(1036),n(4094),n(8740),n(3037),n(4274),n(1447),n(5083),n(4952),n(273),n(5164),n(7194));var O={vanilla:{mode:"htmlmixed",htmlMode:!0},react:{mode:"jsx"},vue:{mode:"text/x-vue"}},z=function(e){var t=e.value,n=e.onChange,r=e.type,l=e.isDarkTheme,o=a.useRef(null),i=a.useRef(null);return a.useEffect((function(){M&&(i.current=M(o.current,w({value:t,lineNumbers:!0,mode:"htmlmixed",htmlMode:!0,tabSize:2},O[r])),i.current.on("change",(function(){n(i.current.getValue())})))}),[]),a.useEffect((function(){i.current.setOption("theme",l?"seti":"default")}),[l]),h.default.createElement("div",{className:"dpdb__playground",ref:o})},B={Vue:E,React:h.default,ReactDOM:_.default};var R={babel:!0,iframe:!0,scope:{},showCodeByDefault:!0,live:!0,layout:"row",showCode:!0,libGlobalName:{},showJsfiddleLink:!0,showCodepenLink:!0,showCodesandboxLink:!0,showCopyCodeButton:!0,showToggleButton:!0,vueLib:"https://cdn.jsdelivr.net/npm/vue@3.2.30/dist/vue.global.prod.js",reactLib:"https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js",reactDOMLib:"https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js"},D=function(e){var t=e.className,n=void 0===t?"":t;return h.default.createElement("svg",{className:n,width:"20",height:"20",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h.default.createElement("path",{d:"M10 44H38C39.1046 44 40 43.1046 40 42V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),h.default.createElement("path",{d:"M27 24L32 29L27 34",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),h.default.createElement("path",{d:"M21 24L16 29L21 34",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),h.default.createElement("path",{d:"M30 4V14H40",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}))},S=function(e){var t=e.className,n=void 0===t?"":t;return h.default.createElement("svg",{className:n,viewBox:"0 0 1024 1024",style:{transform:"scale(1.4)"},version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"9298",width:"20",height:"20",fill:"currentColor"},h.default.createElement("defs",null,h.default.createElement("style",{type:"text/css"})),h.default.createElement("path",{d:"M213.333333 351.146667h597.333334V256H213.333333v95.146667z m0 45.994666V768h597.333334V397.141333H213.333333zM213.333333 213.333333h597.333334a42.666667 42.666667 0 0 1 42.666666 42.666667v512a42.666667 42.666667 0 0 1-42.666666 42.666667H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666667V256a42.666667 42.666667 0 0 1 42.666666-42.666667z m194.56 427.178667l-24.021333 27.605333-97.28-86.186666 96.298667-98.986667 25.941333 25.813333-69.290667 71.168 68.352 60.586667z m198.229334 0l68.352-60.586667-69.333334-71.168 25.984-25.770666 96.298667 98.901333-97.28 86.229333-24.021333-27.605333z m-58.752-198.357333l33.792 13.653333-104.533334 263.893333-33.792-13.653333 104.533334-263.893333z",fill:"currentColor","p-id":"9299"}))},q=function(e){var t=e.className,n=void 0===t?"":t;return h.default.createElement("svg",{className:n,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6195",width:"20",height:"20",fill:"currentColor"},h.default.createElement("defs",null,h.default.createElement("style",{type:"text/css"})),h.default.createElement("path",{d:"M938.666667 642.005333a36.096 36.096 0 0 1-0.341334 4.778667l-0.256 1.578667-0.682666 3.072c-0.128 0.64-0.341333 1.194667-0.554667 1.792l-0.938667 2.688-0.853333 1.792c-0.341333 0.853333-0.768 1.621333-1.194667 2.432l-1.066666 1.706666a32.810667 32.810667 0 0 1-4.608 5.76l-1.493334 1.450667a34.645333 34.645333 0 0 1-2.090666 1.706667l-1.621334 1.28c-0.213333 0.128-0.426667 0.341333-0.64 0.426666l-389.973333 260.053334a36.608 36.608 0 0 1-40.704 0l-389.973333-260.010667-0.597334-0.426667a34.432 34.432 0 0 1-3.754666-3.029333c-0.512-0.426667-0.981333-0.938667-1.450667-1.450667-0.64-0.64-1.28-1.28-1.834667-1.962666a30.165333 30.165333 0 0 1-2.816-3.84 44.288 44.288 0 0 1-2.304-4.096l-0.810666-1.792a37.034667 37.034667 0 0 1-0.938667-2.688c-0.213333-0.597333-0.426667-1.152-0.554667-1.792-0.298667-0.981333-0.426667-2.048-0.64-3.072l-0.298666-1.578667A36.138667 36.138667 0 0 1 85.333333 642.005333V381.994667c0-1.621333 0.128-3.2 0.341334-4.778667l0.298666-1.578667c0.170667-1.024 0.341333-2.090667 0.64-3.072a33.024 33.024 0 0 1 6.186667-12.586666 41.728 41.728 0 0 1 1.237333-1.621334l1.834667-1.962666 1.450667-1.450667a35.584 35.584 0 0 1 3.754666-2.986667c0.213333-0.128 0.384-0.341333 0.597334-0.426666l389.973333-260.053334a36.693333 36.693333 0 0 1 40.704 0l389.973333 260.010667c0.213333 0.128 0.426667 0.341333 0.64 0.426667l1.621334 1.28a35.797333 35.797333 0 0 1 2.133333 1.749333l1.450667 1.450667a31.36 31.36 0 0 1 4.608 5.802666l1.066666 1.706667 1.237334 2.389333 0.810666 1.792 0.938667 2.688c0.213333 0.597333 0.426667 1.152 0.554667 1.792 0.298667 0.981333 0.469333 2.048 0.682666 3.072l0.256 1.578667a35.584 35.584 0 0 1 0.341334 4.778667v260.010666zM158.677333 450.645333v122.709334L250.410667 512l-91.733334-61.354667z m316.672-89.088V190.506667l-287.317333 191.573333 128.341333 85.802667 158.976-106.325334z m360.618667 20.48L548.693333 190.506667v171.050666l158.976 106.325334 128.298667-85.845334zM188.032 641.962667l287.317333 191.530666v-171.050666l-158.976-106.325334-128.341333 85.845334z m360.661333 20.48v171.050666l287.274667-191.573333-128.298667-85.76-158.976 106.282667zM512 425.216L382.293333 512 512 598.741333 641.706667 512 512 425.258667z m353.322667 148.138667v-122.709334L773.589333 512l91.733334 61.354667z",fill:"currentColor","p-id":"6196"}))},I=function(e){var t=e.className,n=void 0===t?"":t;return h.default.createElement("svg",{className:n,viewBox:"0 0 1171 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6556",width:"20",height:"20",fill:"currentColor"},h.default.createElement("defs",null,h.default.createElement("style",{type:"text/css"})),h.default.createElement("path",{d:"M1028.571429 441.142857q63.428571 26.285714 102.571429 83.142857t39.142857 126.571429q0 93.714286-67.428571 160.285714t-162.857143 66.571429q-2.285714 0-6.571429 2.857143t-6 2.857143l-695.428571 0q-97.142857-5.714286-164.571429-71.714286t-67.428571-160.285714q0-62.857143 31.428571-116t84-84q-6.857143-22.285714-6.857143-46.857143 0-65.714286 46.857143-112t113.714286-46.285714q54.285714 0 98.285714 33.142857 42.857143-88 127.142857-141.714286t186.571429-53.714286q94.857143 0 174.857143 46t126.571429 124.857143 46.571429 172q0 3.428571 2.857143 10.285714t2.857143 10.285714zm-761.142857 152q0 69.714286 48 110.285714t118.857143 40.571429q78.285714 0 137.142857-56.571429-9.142857-11.428571-27.142857-32.285714t-24.857143-28.857143q-38.285714 37.142857-82.285714 37.142857-31.428571 0-53.428571-19.142857t-22-50q0-30.285714 22-49.714286t52.285714-19.428571q25.142857 0 48.285714 12t41.714286 31.428571 37.142857 42.857143 39.428571 46.857143 44 42.857143 55.428571 31.428571 69.428571 12q69.142857 0 116.857143-40.857143t47.714286-108.857143q0-69.142857-48-109.714286t-118.285714-40.571429q-81.714286 0-137.714286 55.428571 8 9.142857 16.857143 19.428571t19.714286 22.857143 16.571429 19.428571q37.714286-36.571429 81.142857-36.571429 29.714286 0 52.571429 18.857143t22.857143 48q0 32.571429-21.142857 52.285714t-53.714286 19.714286q-24.571429 0-47.142857-12t-41.142857-31.428571-37.428571-42.857143-39.714286-46.857143-44.285714-42.857143-55.142857-31.428571-67.714286-12q-69.714286 0-118.285714 40.285714t-48.571429 108.285714z","p-id":"6557"}))},V=function(e){var t=e.className,n=void 0===t?"":t;return h.default.createElement("svg",{className:n,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6862",width:"20",height:"20",fill:"currentColor"},h.default.createElement("defs",null,h.default.createElement("style",{type:"text/css"})),h.default.createElement("path",{d:"M709.6 210l0.4-0.2h0.2L512 96 313.9 209.8h-0.2l0.7 0.3L151.5 304v416L512 928l360.5-208V304l-162.9-94zM482.7 843.6L339.6 761V621.4L210 547.8V372.9l272.7 157.3v313.4zM238.2 321.5l134.7-77.8 138.9 79.7 139.1-79.9 135.2 78-273.9 158-274-158zM814 548.3l-128.8 73.1v139.1l-143.9 83V530.4L814 373.1v175.2z","p-id":"6863"}))};P(".dpdb__control-bar {\n  border: 1px solid #ccc;\n  border-top: none;\n  height: 48px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: right;\n      justify-content: right;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\n.dpdb__control-bar-column {\n  border-left: none;\n  border-right: none;\n}\n\n.dpdb__control-bar-column-reverse {\n  border-left: none;\n  border-right: none;\n  border-bottom: none;\n  border-top: 1px solid #ccc;\n}\n\nhtml[data-theme='dark'] .dpdb__control-bar > div {\n  color: #ccc;\n}\n\n.dpdb__control-bar > div {\n  width: 24px;\n  height: 24px;\n  display: inline-block;\n  margin-right: 10px;\n  color: rgba(0, 0, 0, 0.3);\n  cursor: pointer;\n  text-align: center;\n}\n\n.dpdb__control-bar div:hover {\n  color: rgba(0, 0, 0, 0.5);\n}\n");var J=function(e){var t=e.html,n=e.css,r=e.originJs,l=e.bindSubmit,o=e.options,i=e.type,c=a.useRef(null),s=[];"react"===i?(s.push(o.reactLib),s.push(o.reactDOMLib)):"vue"===i&&s.push(o.vueLib);var d=JSON.stringify({css:n,html:t,js:r,js_external:s.join(";"),js_pre_processor:"babel"});return a.useEffect((function(){c.current&&l((function(){c.current.click()}))}),[]),h.default.createElement("form",{action:"https://codepen.io/pen/define",target:"_blank",method:"post"},h.default.createElement("input",{type:"hidden",name:"data",value:d}),h.default.createElement("button",{ref:c,type:"submit",style:{display:"none"}}))},U=function(e){var t=e.html,n=e.css,r=e.originJs,l=e.bindSubmit,o=e.options,i=e.type,c=a.useRef(null),s=[];"react"===i?(s.push(o.reactLib),s.push(o.reactDOMLib)):"vue"===i&&s.push(o.vueLib);var d=s.join(",");return a.useEffect((function(){c.current&&l((function(){c.current.click()}))}),[]),h.default.createElement("form",{action:"https://jsfiddle.net/api/post/library/pure/",target:"_blank",method:"post"},h.default.createElement("input",{type:"hidden",name:"css",value:n}),h.default.createElement("input",{type:"hidden",name:"html",value:t}),h.default.createElement("input",{type:"hidden",name:"js",value:r}),h.default.createElement("input",{type:"hidden",name:"panel_js",value:"3"}),h.default.createElement("input",{type:"hidden",name:"wrap",value:"1"}),h.default.createElement("input",{type:"hidden",name:"css",value:n}),h.default.createElement("input",{type:"hidden",name:"resources",value:d}),h.default.createElement("button",{ref:c,type:"submit",style:{display:"none"}}))},A=function(e){var t=e.html,n=e.css,r=e.originJs,l=e.bindSubmit,o=e.type,i=a.useRef(null),c={},s=r;s='\nimport "./index.css";\n\n'.concat(s,"  \n  ").trim(),"react"===o?(c.react="latest",c["react-dom"]="latest",s="\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n".concat(s,"\n    ").trim()):"vue"===o&&(c.vue="3.2.30",s="\nimport * as Vue from 'vue';\n".concat(s,"\n    ").trim());var d=m.getParameters({files:{"package.json":{content:JSON.stringify({dependencies:c},null,2),isBinary:!1},"index.js":{content:s,isBinary:!1},"index.html":{content:t,isBinary:!1},"index.css":{content:n,isBinary:!1}}});return a.useEffect((function(){i.current&&l((function(){i.current.click()}))}),[]),h.default.createElement("form",{action:"https://codesandbox.io/api/v1/sandboxes/define",target:"_blank",method:"post"},h.default.createElement("input",{type:"hidden",name:"parameters",value:d}),h.default.createElement("button",{ref:i,type:"submit",style:{display:"none"}}))},F=function(e){var t=e.options,n=e.code,r=e.onToggleCode,l=e.codeVisible,o=e.html,i=e.css,c=e.js,s=e.type,d=e.originJs,u=t.layout,m=t.showCodepenLink,p=t.showCodesandboxLink,f=t.showJsfiddleLink,v=t.showToggleButton,b=t.showCopyCodeButton,g=a.useRef({codepen:null,codesandbox:null,jsfiddle:null});return v||b||m||f||p?h.default.createElement("div",{className:"dpdb__control-bar dpdb__control-bar-".concat(u)},v&&h.default.createElement("div",{className:"dpdb__tip","data-tip":"".concat(l?"hide":"show"," code"),onClick:function(){r(!l)}},h.default.createElement(S,null)),b&&h.default.createElement("div",{className:"dpdb__tip","data-tip":"copy code",onClick:function(){y.default(n)}},h.default.createElement(D,null)),m&&h.default.createElement("div",{className:"dpdb__tip","data-tip":"open in codepen",onClick:function(){g.current.codepen()}},h.default.createElement(q,null)),f&&h.default.createElement("div",{className:"dpdb__tip","data-tip":"open in jsfiddle",onClick:function(){g.current.jsfiddle()}},h.default.createElement(I,null)),p&&h.default.createElement("div",{className:"dpdb__tip","data-tip":"open in codesandbox",onClick:function(){g.current.codesandbox()}},h.default.createElement(V,null)),h.default.createElement(J,{html:o,css:i,js:c,type:s,options:t,originJs:d,bindSubmit:function(e){g.current.codepen=e}}),h.default.createElement(U,{html:o,css:i,js:c,type:s,options:t,originJs:d,bindSubmit:function(e){g.current.jsfiddle=e}}),h.default.createElement(A,{html:o,css:i,js:c,type:s,options:t,originJs:d,bindSubmit:function(e){g.current.codesandbox=e}})):h.default.createElement(h.default.Fragment,null)};P(".dpdb {\n  margin-top: 10px;\n}\n\n.dpdb__hidden {\n  display: none;\n}\n\n.dpdb__tip {\n  position: relative;\n}\n\n.dpdb__tip:hover::before {\n  content: attr(data-tip);\n  white-space: nowrap;\n  position: absolute;\n  top: -35px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  color: #eee;\n  line-height: 1;\n  z-index: 1000;\n  border-radius: 2px;\n  padding: 6px;\n  background-color: rgba(0, 0, 0, 1);\n  cursor: default;\n}\n\n.dpdb__tip:hover::after {\n  content: '';\n  display: inline-block;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  top: -8px;\n  border: 5px solid transparent;\n  border-top-color: rgba(0, 0, 0, 0.8);\n}\n\n.dpdb__container {\n  display: -ms-flexbox;\n  display: flex;\n  border: 1px solid #ccc;\n}\n/** row display */\n.dpdb__display-row {\n  height: 400px;\n}\n\n.dpdb__display-row .dpdb__playground-wrapper {\n  width: 50%;\n}\n\n.dpdb__display-row .theme-code-block,\n.dpdb__display-row .theme-code-block > div,\n.dpdb__display-row .theme-code-block > div > pre {\n  height: 100%;\n}\n\n.dpdb__display-row .dpdb__runner-wrapper {\n  -ms-flex: 1;\n      flex: 1;\n}\n\n.dpdb__container-row {\n  -ms-flex-direction: row;\n      flex-direction: row;\n}\n.dpdb__container-row .dpdb__playground-wrapper {\n  border-right: 1px solid #ccc;\n}\n\n.dpdb__container-row-reverse {\n  -ms-flex-direction: row-reverse;\n      flex-direction: row-reverse;\n}\n\n.dpdb__container-row-reverse .dpdb__playground-wrapper {\n  border-left: 1px solid #ccc;\n}\n\n/** column display */\n.dpdb__display-column .theme-code-block {\n  margin-bottom: 0;\n}\n\n.dpdb__container-column {\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n.dpdb__container-column-reverse {\n  -ms-flex-direction: column-reverse;\n      flex-direction: column-reverse;\n}\n\n.dpdb__container-column .dpdb__playground-wrapper {\n  border-bottom: 1px solid #ccc;\n}\n\n.dpdb__container-column-reverse .dpdb__playground-wrapper {\n  border-top: 1px solid #ccc;\n}\n");var H={vanilla:function(e){return k(this,void 0,void 0,(function(){var t,n,a,r,l;return x(this,(function(o){switch(o.label){case 0:return[4,T()];case 1:return t=o.sent(),n=C(e,"template"),a=C(e,"style"),r=C(e,"script"),l=t.transform(r,{presets:N}).code,[2,{html:n,css:a,js:l,originJs:r,type:"vanilla"}]}}))}))},vue:function(e){return k(this,void 0,void 0,(function(){var t,n,a,r,l,o,i;return x(this,(function(c){switch(c.label){case 0:return t=C(e,"template"),n=C(e,"style"),a=C(e,"script"),[4,T()];case 1:return r=c.sent(),l=r.transform(a,{presets:["env"]}).code,o="\n    var CONTAINER = document.getElementById('app');\n    ".concat(l,";\n  "),i="\n    const CONTAINER = document.getElementById('app');\n".concat(a,"\n  ").trim(),[2,{html:'<div id="app">'.concat(t,"</div>"),css:n,js:o,originJs:i,type:"vue"}]}}))}))},react:function(e){return k(this,void 0,void 0,(function(){var t,n,a,r;return x(this,(function(l){switch(l.label){case 0:return[4,T()];case 1:return t=l.sent(),n=t.transform(e,{presets:N}).code,a="\n    var CONTAINER = document.getElementById('app');\n    ".concat(n,"\n  "),r="\n    const CONTAINER = document.getElementById('app');\n".concat(e.trim(),"\n  ").trim(),[2,{html:'<div id="app"></div>',css:"",js:a,originJs:r,type:"react"}]}}))}))}};function W(e){var t=this,n=e.children,r=e.metastring,l=a.useState(n),o=l[0],i=l[1],c=a.useState(null),u=c[0],m=c[1],p=a.useState({html:"",css:"",js:"",originJs:"",type:"vanilla"}),f=p[0],b=p[1],g=d.useColorMode().isDarkTheme,E=s.usePluginData("docusaurus-plugin-demo-block"),_=function(e){var t=e.split(" ")[1];return t?t.split("&").reduce((function(e,t){var n=t.split("="),a=n[0],r=n[1];return e[a]=new Function("return ".concat(r))(),e}),{}):{}}(r),y=w(w(w({},R),E),_),N=y.layout,C=y.live,L=y.showCode,T=y.scope,P=void 0===T?{}:T,M=a.useState(y.showCodeByDefault),O=M[0],D=M[1],S=function(e,t){void 0===t&&(t=300);var n=a.useRef();return a.useCallback((function(){for(var a=[],r=0;r<arguments.length;r++)a[r]=arguments[r];n.current&&clearTimeout(n.current),n.current=setTimeout((function(){n.current=null,e.apply(void 0,a)}),t)}),[])}((function(e){i(e)}));a.useEffect((function(){o!==n&&i(n)}),[n]),a.useEffect((function(){k(t,void 0,void 0,(function(){var e;return x(this,(function(t){return e=w(w({},B),P),m(e),[2]}))}))}),[]),a.useEffect((function(){k(t,void 0,void 0,(function(){var e;return x(this,(function(t){switch(t.label){case 0:return[4,H[j(r)](o)];case 1:return e=t.sent(),b(e),[2]}}))}))}),[o]);var q=N.split("-")[0],I=h.default.createElement(F,{html:f.html,css:f.css,js:f.js,type:f.type,originJs:f.originJs,options:y,code:n,codeVisible:O,onToggleCode:function(e){D(e)}});return h.default.createElement("div",{className:"dpdb"},h.default.createElement("div",{className:"dpdb__container dpdb__container-".concat(N," dpdb__display-").concat(N.split("-")[0])},L&&h.default.createElement("div",{className:"dpdb__playground-wrapper ".concat(O?"":"dpdb__hidden")},C?h.default.createElement(z,{isDarkTheme:g,type:j(r),value:o,onChange:function(e){return S(e)}}):h.default.createElement(v.default,w({},e))),"column"===q&&I,h.default.createElement("div",{className:"dpdb__runner-wrapper"},h.default.createElement(Z,w({},f,{isDarkTheme:g,scope:u})))),"row"===q&&I)}var X,Q=(X=v.default,function(e){var t=e.vanilla,n=e.vue,a=e.react;return t||n||a?h.default.createElement(b.default,{fallback:h.default.createElement(h.default.Fragment,null,"loading...")},(function(){return h.default.createElement(W,w({},e))})):h.default.createElement(X,w({},e))});e.exports=Q},8665:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var a=n(3366),r=n(7294),l=n(6010),o=n(2434),i=n(9960),c="sidebar_a9qW",s="sidebarItemTitle_uKok",d="sidebarItemList_Kvuv",u="sidebarItem_CF0Q",m="sidebarItemLink_miNk",p="sidebarItemLinkActive_RRTD",f=n(5999);function h(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,f.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),r.createElement("ul",{className:d},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:m,activeClassName:p},e.title))}))))}var v=["sidebar","toc","children"];var b=function(e){var t=e.sidebar,n=e.toc,i=e.children,c=(0,a.Z)(e,v),s=t&&t.items.length>0;return r.createElement(o.Z,c,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},s&&r.createElement("aside",{className:"col col--3"},r.createElement(h,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},i),n&&r.createElement("div",{className:"col col--2"},n))))}},8561:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var a=n(7294),r=n(6010),l=n(3905),o=n(5999),i=n(9960),c=n(4996),s=n(9548),d=n(8780),u=n(7440),m=n(6753),p="blogPostTitle_rzP5",f="blogPostData_Zg1s",h="blogPostDetailsFull_h6_j",v=n(62),b="image_o0gy";var g=function(e){var t=e.author,n=t.name,r=t.title,l=t.url,o=t.imageURL;return a.createElement("div",{className:"avatar margin-bottom--sm"},o&&a.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:l},a.createElement("img",{className:b,src:o,alt:n})),n&&a.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},a.createElement("div",{className:"avatar__name"},a.createElement(i.Z,{href:l,itemProp:"url"},a.createElement("span",{itemProp:"name"},n))),r&&a.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},E="authorCol_FlmR",_="imageOnlyAuthorRow_trpF",y="imageOnlyAuthorCol_S2np";function w(e){var t=e.authors,n=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return a.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",l?_:"row")},t.map((function(e,t){var o;return a.createElement("div",{className:(0,r.Z)(!l&&"col col--6",l?y:E),key:t},a.createElement(g,{author:Object.assign({},e,{imageURL:null!=(o=n.authorsImageUrls[t])?o:e.imageURL})}))})))}var k=function(e){var t,n,b,g=(b=(0,s.usePluralForm)().selectMessage,function(e){var t=Math.ceil(e);return b(t,(0,o.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),E=(0,c.C)().withBaseUrl,_=e.children,y=e.frontMatter,k=e.assets,x=e.metadata,N=e.truncated,C=e.isBlogPostPage,L=void 0!==C&&C,T=x.date,j=x.formattedDate,P=x.permalink,Z=x.tags,M=x.readingTime,O=x.title,z=x.editUrl,B=x.authors,R=null!=(t=k.image)?t:y.image,D=!L&&N,S=Z.length>0,q=L?"h1":"h2";return a.createElement("article",{className:L?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},a.createElement("header",null,a.createElement(q,{className:p,itemProp:"headline"},L?O:a.createElement(i.Z,{itemProp:"url",to:P},O)),a.createElement("div",{className:(0,r.Z)(f,"margin-vert--md")},a.createElement("time",{dateTime:T,itemProp:"datePublished"},j),void 0!==M&&a.createElement(a.Fragment,null," \xb7 ",g(M))),a.createElement(w,{authors:B,assets:k})),R&&a.createElement("meta",{itemProp:"image",content:E(R,{absolute:!0})}),a.createElement("div",{id:L?d.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},a.createElement(l.Zo,{components:u.Z},_)),(S||N)&&a.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(n={},n[h]=L,n))},S&&a.createElement("div",{className:(0,r.Z)("col",{"col--9":D})},a.createElement(v.Z,{tags:Z})),L&&z&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(m.Z,{editUrl:z})),D&&a.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":S})},a.createElement(i.Z,{to:x.permalink,"aria-label":"Read more about "+O},a.createElement("b",null,a.createElement(o.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9404:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var a=n(7294),r=n(9960),l=n(8665),o=n(8561),i=n(5999),c=n(9548);function s(e){var t,n=e.metadata,s=e.items,d=e.sidebar,u=n.allTagsPath,m=n.name,p=n.count,f=(t=(0,c.usePluralForm)().selectMessage,function(e){return t(e,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),h=(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:f(p),tagName:m});return a.createElement(l.Z,{title:h,wrapperClassName:c.ThemeClassNames.wrapper.blogPages,pageClassName:c.ThemeClassNames.page.blogTagPostListPage,searchMetadata:{tag:"blog_tags_posts"},sidebar:d},a.createElement("header",{className:"margin-bottom--xl"},a.createElement("h1",null,h),a.createElement(r.Z,{href:u},a.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),s.map((function(e){var t=e.content;return a.createElement(o.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},a.createElement(t,null))})))}},6753:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(7294),r=n(5999),l=n(7462),o=n(3366),i=n(6010),c="iconEdit_dcUD",s=["className"];var d=function(e){var t=e.className,n=(0,o.Z)(e,s);return a.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(c,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=n(9548);function m(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.ThemeClassNames.common.editThisPage},a.createElement(d,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7774:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(7294),r=n(6010),l=n(9960),o="tag_hD8n",i="tagRegular_D6E_",c="tagWithCount_i0QQ";var s=function(e){var t,n=e.permalink,s=e.name,d=e.count;return a.createElement(l.Z,{href:n,className:(0,r.Z)(o,(t={},t[i]=!d,t[c]=d,t))},s,d&&a.createElement("span",null,d))}},62:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(7294),r=n(6010),l=n(5999),o=n(7774),i="tags_XVD_",c="tag_JSN8";function s(e){var t=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(i,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return a.createElement("li",{key:n,className:c},a.createElement(o.Z,{name:t,permalink:n}))}))))}},363:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=363,e.exports=t}}]);