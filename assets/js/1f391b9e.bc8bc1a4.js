(self.webpackChunkdocusaurus_plugin_demo_block=self.webpackChunkdocusaurus_plugin_demo_block||[]).push([[85,514,103],{493:function(e,t,n){"use strict";var r=n(7294),a=n(1736),l=n(1262),o=n(412),i=n(821),c=n(3935),s=n(8084),d=n(9548),u=n(6012),p=n(5920);function m(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function f(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var v=m(r),h=m(a),b=m(l),g=m(o),_=f(i),y=m(c),w=m(u),E=function(){return E=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},E.apply(this,arguments)};function x(e,t,n,r){return new(n||(n=Promise))((function(a,l){function o(e){try{c(r.next(e))}catch(t){l(t)}}function i(e){try{c(r.throw(e))}catch(t){l(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}c((r=r.apply(e,t||[])).next())}))}function k(e,t){var n,r,a,l,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){o.label=l[1];break}if(6===l[0]&&o.label<a[1]){o.label=a[1],a=l;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(l);break}a[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(i){l=[6,i],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}}var C=["env","react"];function N(e,t){var n=e.match(new RegExp("<".concat(t,">([\\s\\S]+)</").concat(t,">"),"gim")),r="";return n&&(r=n[0].replace("<".concat(t,">"),"").replace("</".concat(t,">"),"")),r}var L=null;function j(){return L||(L=Promise.resolve().then((function(){return f(n(1041))})).catch((function(e){throw L=null,e})))}function M(e){return e.split(" ")[0]}function O(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}O(".dpdb__runner {\n  width: 100%;\n  height: 100%;\n}\n");var T=r.memo((function(e){var t=e.html,n=e.css,a=e.js,l=e.scope,o=e.isDarkTheme,i=e.options,c=r.useRef(null),s=r.useState(1),d=s[0],u=s[1],p=r.useState(!1),m=p[0],f=p[1];return r.useEffect((function(){(t||n||a)&&x(void 0,void 0,void 0,(function(){var e,r,s,d,p;return k(this,(function(m){switch(m.label){case 0:return f(!1),[4,(v=0,new Promise((function(e){setTimeout(e,v)})))];case 1:return m.sent(),f(!0),e=c.current,r=e.contentDocument,s=e.contentWindow,l&&Object.keys(l).forEach((function(e){s[e]=l[e]})),r.body.innerHTML="".concat(t,"<style>* { margin: 0; padding: 0; } html { padding: 20px; } ").concat(n,"</style>"),r.querySelector("html").dataset.theme=o?"dark":"light",r.body.style.color=o?"rgb(245, 246, 247)":"rgb(28, 30, 33)",i.showVConsole?((d=r.createElement("script")).src="https://cdn.jsdelivr.net/npm/vconsole@latest/dist/vconsole.min.js",d.onload=function(){var e=r.createElement("script");e.innerHTML="var vConsole = new window.VConsole();".concat(a),r.body.appendChild(e)},r.head.appendChild(d)):((p=r.createElement("script")).innerHTML=a,r.body.appendChild(p)),u(r.body.scrollHeight),[2]}var v}))}))}),[t,n,a,l,o]),v.default.createElement(v.default.Fragment,null,m&&v.default.createElement("iframe",{height:d,className:"dpdb__runner",ref:c}))}));O(".dpdb__playground {\n  width: 100%;\n  height: 100%;\n}\n.dpdb__playground .CodeMirror {\n  height: 100%;\n}\n");var H=null;g.default.canUseDOM&&(H=n(1036),n(4094),n(8740),n(3037),n(4274),n(1447),n(5083),n(4952),n(273),n(5164),n(7194));var z={vanilla:{mode:"htmlmixed",htmlMode:!0},react:{mode:"jsx"},vue:{mode:"text/x-vue"}},q=function(e){var t=e.value,n=e.onChange,a=e.type,l=e.isDarkTheme,o=r.useRef(null),i=r.useRef(null);return r.useEffect((function(){H&&(i.current=H(o.current,E({value:t,lineNumbers:!0,mode:"htmlmixed",htmlMode:!0,tabSize:2},z[a])),i.current.on("change",(function(){n(i.current.getValue())})))}),[]),r.useEffect((function(){i.current.setOption("theme",l?"seti":"default")}),[l]),v.default.createElement("div",{className:"dpdb__playground",ref:o})},S={Vue:_,React:v.default,ReactDOM:y.default};var B={babel:!0,iframe:!0,scope:{},showCodeByDefault:!0,live:!0,layout:"row",showCode:!0,libGlobalName:{},showJsfiddleLink:!0,showCodepenLink:!0,showCodesandboxLink:!0,showCopyCodeButton:!0,showVConsole:!1,showToggleButton:!0,vueLib:"https://cdn.jsdelivr.net/npm/vue@3.2.30/dist/vue.global.prod.js",reactLib:"https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js",reactDOMLib:"https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js"},V=function(e){var t=e.className,n=void 0===t?"":t;return v.default.createElement("svg",{className:n,width:"20",height:"20",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v.default.createElement("path",{d:"M10 44H38C39.1046 44 40 43.1046 40 42V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),v.default.createElement("path",{d:"M27 24L32 29L27 34",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),v.default.createElement("path",{d:"M21 24L16 29L21 34",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),v.default.createElement("path",{d:"M30 4V14H40",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}))},D=function(e){var t=e.className,n=void 0===t?"":t;return v.default.createElement("svg",{className:n,viewBox:"0 0 1024 1024",style:{transform:"scale(1.4)"},version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"9298",width:"20",height:"20",fill:"currentColor"},v.default.createElement("defs",null,v.default.createElement("style",{type:"text/css"})),v.default.createElement("path",{d:"M213.333333 351.146667h597.333334V256H213.333333v95.146667z m0 45.994666V768h597.333334V397.141333H213.333333zM213.333333 213.333333h597.333334a42.666667 42.666667 0 0 1 42.666666 42.666667v512a42.666667 42.666667 0 0 1-42.666666 42.666667H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666667V256a42.666667 42.666667 0 0 1 42.666666-42.666667z m194.56 427.178667l-24.021333 27.605333-97.28-86.186666 96.298667-98.986667 25.941333 25.813333-69.290667 71.168 68.352 60.586667z m198.229334 0l68.352-60.586667-69.333334-71.168 25.984-25.770666 96.298667 98.901333-97.28 86.229333-24.021333-27.605333z m-58.752-198.357333l33.792 13.653333-104.533334 263.893333-33.792-13.653333 104.533334-263.893333z",fill:"currentColor","p-id":"9299"}))},J=function(e){var t=e.className,n=void 0===t?"":t;return v.default.createElement("svg",{className:n,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6195",width:"20",height:"20",fill:"currentColor"},v.default.createElement("defs",null,v.default.createElement("style",{type:"text/css"})),v.default.createElement("path",{d:"M938.666667 642.005333a36.096 36.096 0 0 1-0.341334 4.778667l-0.256 1.578667-0.682666 3.072c-0.128 0.64-0.341333 1.194667-0.554667 1.792l-0.938667 2.688-0.853333 1.792c-0.341333 0.853333-0.768 1.621333-1.194667 2.432l-1.066666 1.706666a32.810667 32.810667 0 0 1-4.608 5.76l-1.493334 1.450667a34.645333 34.645333 0 0 1-2.090666 1.706667l-1.621334 1.28c-0.213333 0.128-0.426667 0.341333-0.64 0.426666l-389.973333 260.053334a36.608 36.608 0 0 1-40.704 0l-389.973333-260.010667-0.597334-0.426667a34.432 34.432 0 0 1-3.754666-3.029333c-0.512-0.426667-0.981333-0.938667-1.450667-1.450667-0.64-0.64-1.28-1.28-1.834667-1.962666a30.165333 30.165333 0 0 1-2.816-3.84 44.288 44.288 0 0 1-2.304-4.096l-0.810666-1.792a37.034667 37.034667 0 0 1-0.938667-2.688c-0.213333-0.597333-0.426667-1.152-0.554667-1.792-0.298667-0.981333-0.426667-2.048-0.64-3.072l-0.298666-1.578667A36.138667 36.138667 0 0 1 85.333333 642.005333V381.994667c0-1.621333 0.128-3.2 0.341334-4.778667l0.298666-1.578667c0.170667-1.024 0.341333-2.090667 0.64-3.072a33.024 33.024 0 0 1 6.186667-12.586666 41.728 41.728 0 0 1 1.237333-1.621334l1.834667-1.962666 1.450667-1.450667a35.584 35.584 0 0 1 3.754666-2.986667c0.213333-0.128 0.384-0.341333 0.597334-0.426666l389.973333-260.053334a36.693333 36.693333 0 0 1 40.704 0l389.973333 260.010667c0.213333 0.128 0.426667 0.341333 0.64 0.426667l1.621334 1.28a35.797333 35.797333 0 0 1 2.133333 1.749333l1.450667 1.450667a31.36 31.36 0 0 1 4.608 5.802666l1.066666 1.706667 1.237334 2.389333 0.810666 1.792 0.938667 2.688c0.213333 0.597333 0.426667 1.152 0.554667 1.792 0.298667 0.981333 0.469333 2.048 0.682666 3.072l0.256 1.578667a35.584 35.584 0 0 1 0.341334 4.778667v260.010666zM158.677333 450.645333v122.709334L250.410667 512l-91.733334-61.354667z m316.672-89.088V190.506667l-287.317333 191.573333 128.341333 85.802667 158.976-106.325334z m360.618667 20.48L548.693333 190.506667v171.050666l158.976 106.325334 128.298667-85.845334zM188.032 641.962667l287.317333 191.530666v-171.050666l-158.976-106.325334-128.341333 85.845334z m360.661333 20.48v171.050666l287.274667-191.573333-128.298667-85.76-158.976 106.282667zM512 425.216L382.293333 512 512 598.741333 641.706667 512 512 425.258667z m353.322667 148.138667v-122.709334L773.589333 512l91.733334 61.354667z",fill:"currentColor","p-id":"6196"}))},R=function(e){var t=e.className,n=void 0===t?"":t;return v.default.createElement("svg",{className:n,viewBox:"0 0 1171 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6556",width:"20",height:"20",fill:"currentColor"},v.default.createElement("defs",null,v.default.createElement("style",{type:"text/css"})),v.default.createElement("path",{d:"M1028.571429 441.142857q63.428571 26.285714 102.571429 83.142857t39.142857 126.571429q0 93.714286-67.428571 160.285714t-162.857143 66.571429q-2.285714 0-6.571429 2.857143t-6 2.857143l-695.428571 0q-97.142857-5.714286-164.571429-71.714286t-67.428571-160.285714q0-62.857143 31.428571-116t84-84q-6.857143-22.285714-6.857143-46.857143 0-65.714286 46.857143-112t113.714286-46.285714q54.285714 0 98.285714 33.142857 42.857143-88 127.142857-141.714286t186.571429-53.714286q94.857143 0 174.857143 46t126.571429 124.857143 46.571429 172q0 3.428571 2.857143 10.285714t2.857143 10.285714zm-761.142857 152q0 69.714286 48 110.285714t118.857143 40.571429q78.285714 0 137.142857-56.571429-9.142857-11.428571-27.142857-32.285714t-24.857143-28.857143q-38.285714 37.142857-82.285714 37.142857-31.428571 0-53.428571-19.142857t-22-50q0-30.285714 22-49.714286t52.285714-19.428571q25.142857 0 48.285714 12t41.714286 31.428571 37.142857 42.857143 39.428571 46.857143 44 42.857143 55.428571 31.428571 69.428571 12q69.142857 0 116.857143-40.857143t47.714286-108.857143q0-69.142857-48-109.714286t-118.285714-40.571429q-81.714286 0-137.714286 55.428571 8 9.142857 16.857143 19.428571t19.714286 22.857143 16.571429 19.428571q37.714286-36.571429 81.142857-36.571429 29.714286 0 52.571429 18.857143t22.857143 48q0 32.571429-21.142857 52.285714t-53.714286 19.714286q-24.571429 0-47.142857-12t-41.142857-31.428571-37.428571-42.857143-39.714286-46.857143-44.285714-42.857143-55.142857-31.428571-67.714286-12q-69.714286 0-118.285714 40.285714t-48.571429 108.285714z","p-id":"6557"}))},Z=function(e){var t=e.className,n=void 0===t?"":t;return v.default.createElement("svg",{className:n,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6862",width:"20",height:"20",fill:"currentColor"},v.default.createElement("defs",null,v.default.createElement("style",{type:"text/css"})),v.default.createElement("path",{d:"M709.6 210l0.4-0.2h0.2L512 96 313.9 209.8h-0.2l0.7 0.3L151.5 304v416L512 928l360.5-208V304l-162.9-94zM482.7 843.6L339.6 761V621.4L210 547.8V372.9l272.7 157.3v313.4zM238.2 321.5l134.7-77.8 138.9 79.7 139.1-79.9 135.2 78-273.9 158-274-158zM814 548.3l-128.8 73.1v139.1l-143.9 83V530.4L814 373.1v175.2z","p-id":"6863"}))};O(".dpdb__control-bar {\n  border: 1px solid #ccc;\n  border-top: none;\n  height: 48px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: right;\n      justify-content: right;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\n.dpdb__control-bar-column {\n  border-left: none;\n  border-right: none;\n}\n\n.dpdb__control-bar-column-reverse {\n  border-left: none;\n  border-right: none;\n  border-bottom: none;\n  border-top: 1px solid #ccc;\n}\n\nhtml[data-theme='dark'] .dpdb__control-bar > div {\n  color: #ccc;\n}\n\n.dpdb__control-bar > div {\n  width: 24px;\n  height: 24px;\n  display: inline-block;\n  margin-right: 10px;\n  color: rgba(0, 0, 0, 0.3);\n  cursor: pointer;\n  text-align: center;\n}\n\n.dpdb__control-bar div:hover {\n  color: rgba(0, 0, 0, 0.5);\n}\n");var A=function(e){var t=e.html,n=e.css,a=e.originJs,l=e.bindSubmit,o=e.options,i=e.type,c=r.useRef(null),s=[];"react"===i?(s.push(o.reactLib),s.push(o.reactDOMLib)):"vue"===i&&s.push(o.vueLib);var d=JSON.stringify({css:n,html:t,js:a,js_external:s.join(";"),js_pre_processor:"babel"});return r.useEffect((function(){c.current&&l((function(){c.current.click()}))}),[]),v.default.createElement("form",{action:"https://codepen.io/pen/define",target:"_blank",method:"post"},v.default.createElement("input",{type:"hidden",name:"data",value:d}),v.default.createElement("button",{ref:c,type:"submit",style:{display:"none"}}))},P=function(e){var t=e.html,n=e.css,a=e.originJs,l=e.bindSubmit,o=e.options,i=e.type,c=r.useRef(null),s=[];"react"===i?(s.push(o.reactLib),s.push(o.reactDOMLib)):"vue"===i&&s.push(o.vueLib);var d=s.join(",");return r.useEffect((function(){c.current&&l((function(){c.current.click()}))}),[]),v.default.createElement("form",{action:"https://jsfiddle.net/api/post/library/pure/",target:"_blank",method:"post"},v.default.createElement("input",{type:"hidden",name:"css",value:n}),v.default.createElement("input",{type:"hidden",name:"html",value:t}),v.default.createElement("input",{type:"hidden",name:"js",value:a}),v.default.createElement("input",{type:"hidden",name:"panel_js",value:"3"}),v.default.createElement("input",{type:"hidden",name:"wrap",value:"1"}),v.default.createElement("input",{type:"hidden",name:"css",value:n}),v.default.createElement("input",{type:"hidden",name:"resources",value:d}),v.default.createElement("button",{ref:c,type:"submit",style:{display:"none"}}))},I=function(e){var t=e.html,n=e.css,a=e.originJs,l=e.bindSubmit,o=e.type,i=r.useRef(null),c={},s=a;s='\nimport "./index.css";\n\n'.concat(s,"  \n  ").trim(),"react"===o?(c.react="latest",c["react-dom"]="latest",s="\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n".concat(s,"\n    ").trim()):"vue"===o&&(c.vue="3.2.30",s="\nimport * as Vue from 'vue';\n".concat(s,"\n    ").trim());var d=p.getParameters({files:{"package.json":{content:JSON.stringify({dependencies:c},null,2),isBinary:!1},"index.js":{content:s,isBinary:!1},"index.html":{content:t,isBinary:!1},"index.css":{content:n,isBinary:!1}}});return r.useEffect((function(){i.current&&l((function(){i.current.click()}))}),[]),v.default.createElement("form",{action:"https://codesandbox.io/api/v1/sandboxes/define",target:"_blank",method:"post"},v.default.createElement("input",{type:"hidden",name:"parameters",value:d}),v.default.createElement("button",{ref:i,type:"submit",style:{display:"none"}}))},F=function(e){var t=e.options,n=e.code,a=e.onToggleCode,l=e.codeVisible,o=e.html,i=e.css,c=e.js,s=e.type,d=e.originJs,u=t.layout,p=t.showCodepenLink,m=t.showCodesandboxLink,f=t.showJsfiddleLink,h=t.showToggleButton,b=t.showCopyCodeButton,g=r.useRef({codepen:null,codesandbox:null,jsfiddle:null});return h||b||p||f||m?v.default.createElement("div",{className:"dpdb__control-bar dpdb__control-bar-".concat(u)},h&&v.default.createElement("div",{className:"dpdb__tip","data-tip":"".concat(l?"hide":"show"," code"),onClick:function(){a(!l)}},v.default.createElement(D,null)),b&&v.default.createElement("div",{className:"dpdb__tip","data-tip":"copy code",onClick:function(){w.default(n)}},v.default.createElement(V,null)),p&&v.default.createElement("div",{className:"dpdb__tip","data-tip":"open in codepen",onClick:function(){g.current.codepen()}},v.default.createElement(J,null)),f&&v.default.createElement("div",{className:"dpdb__tip","data-tip":"open in jsfiddle",onClick:function(){g.current.jsfiddle()}},v.default.createElement(R,null)),m&&v.default.createElement("div",{className:"dpdb__tip","data-tip":"open in codesandbox",onClick:function(){g.current.codesandbox()}},v.default.createElement(Z,null)),v.default.createElement(A,{html:o,css:i,js:c,type:s,options:t,originJs:d,bindSubmit:function(e){g.current.codepen=e}}),v.default.createElement(P,{html:o,css:i,js:c,type:s,options:t,originJs:d,bindSubmit:function(e){g.current.jsfiddle=e}}),v.default.createElement(I,{html:o,css:i,js:c,type:s,options:t,originJs:d,bindSubmit:function(e){g.current.codesandbox=e}})):v.default.createElement(v.default.Fragment,null)};O(".dpdb {\n  margin-top: 10px;\n}\n\n.dpdb__hidden {\n  display: none;\n}\n\n.dpdb__tip {\n  position: relative;\n}\n\n.dpdb__tip:hover::before {\n  content: attr(data-tip);\n  white-space: nowrap;\n  position: absolute;\n  top: -35px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  color: #eee;\n  line-height: 1;\n  z-index: 1000;\n  border-radius: 2px;\n  padding: 6px;\n  background-color: rgba(0, 0, 0, 1);\n  cursor: default;\n}\n\n.dpdb__tip:hover::after {\n  content: '';\n  display: inline-block;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  top: -8px;\n  border: 5px solid transparent;\n  border-top-color: rgba(0, 0, 0, 0.8);\n}\n\n.dpdb__container {\n  display: -ms-flexbox;\n  display: flex;\n  border: 1px solid #ccc;\n}\n/** row display */\n.dpdb__display-row {\n  height: 400px;\n}\n\n.dpdb__display-row .dpdb__playground-wrapper {\n  width: 50%;\n}\n\n.dpdb__display-row .theme-code-block,\n.dpdb__display-row .theme-code-block > div,\n.dpdb__display-row .theme-code-block > div > pre {\n  height: 100%;\n}\n\n.dpdb__display-row .dpdb__runner-wrapper {\n  -ms-flex: 1;\n      flex: 1;\n}\n\n.dpdb__container-row {\n  -ms-flex-direction: row;\n      flex-direction: row;\n}\n.dpdb__container-row .dpdb__playground-wrapper {\n  border-right: 1px solid #ccc;\n}\n\n.dpdb__container-row-reverse {\n  -ms-flex-direction: row-reverse;\n      flex-direction: row-reverse;\n}\n\n.dpdb__container-row-reverse .dpdb__playground-wrapper {\n  border-left: 1px solid #ccc;\n}\n\n/** column display */\n.dpdb__display-column .theme-code-block {\n  margin-bottom: 0;\n}\n\n.dpdb__container-column {\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n.dpdb__container-column-reverse {\n  -ms-flex-direction: column-reverse;\n      flex-direction: column-reverse;\n}\n\n.dpdb__container-column .dpdb__playground-wrapper {\n  border-bottom: 1px solid #ccc;\n}\n\n.dpdb__container-column-reverse .dpdb__playground-wrapper {\n  border-top: 1px solid #ccc;\n}\n");var W={vanilla:function(e){return x(this,void 0,void 0,(function(){var t,n,r,a,l;return k(this,(function(o){switch(o.label){case 0:return[4,j()];case 1:return t=o.sent(),n=N(e,"template"),r=N(e,"style"),a=N(e,"script"),l=t.transform(a,{presets:C}).code,[2,{html:n,css:r,js:l,originJs:a,type:"vanilla"}]}}))}))},vue:function(e){return x(this,void 0,void 0,(function(){var t,n,r,a,l,o,i;return k(this,(function(c){switch(c.label){case 0:return t=N(e,"template"),n=N(e,"style"),r=N(e,"script"),[4,j()];case 1:return a=c.sent(),l=a.transform(r,{presets:["env"]}).code,o="\n    var CONTAINER = document.getElementById('app');\n    ".concat(l,";\n  "),i="\n    const CONTAINER = document.getElementById('app');\n".concat(r,"\n  ").trim(),[2,{html:'<div id="app">'.concat(t,"</div>"),css:n,js:o,originJs:i,type:"vue"}]}}))}))},react:function(e){return x(this,void 0,void 0,(function(){var t,n,r,a;return k(this,(function(l){switch(l.label){case 0:return[4,j()];case 1:return t=l.sent(),n=t.transform(e,{presets:C}).code,r="\n    var CONTAINER = document.getElementById('app');\n    ".concat(n,"\n  "),a="\n    const CONTAINER = document.getElementById('app');\n".concat(e.trim(),"\n  ").trim(),[2,{html:'<div id="app"></div>',css:"",js:r,originJs:a,type:"react"}]}}))}))}};function X(e){var t=this,n=e.children,a=e.metastring,l=r.useState(n),o=l[0],i=l[1],c=r.useState(null),u=c[0],p=c[1],m=r.useState({html:"",css:"",js:"",originJs:"",type:"vanilla"}),f=m[0],b=m[1],g=d.useColorMode().isDarkTheme,_=s.usePluginData("docusaurus-plugin-demo-block"),y=function(e){var t=e.split(" ")[1];return t?t.split("&").reduce((function(e,t){var n=t.split("="),r=n[0],a=n[1];return e[r]=new Function("return ".concat(a))(),e}),{}):{}}(a),w=E(E(E({},B),_),y),C=w.layout,N=w.live,L=w.showCode,j=w.scope,O=void 0===j?{}:j,H=r.useState(w.showCodeByDefault),z=H[0],V=H[1],D=function(e,t){void 0===t&&(t=300);var n=r.useRef();return r.useCallback((function(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];n.current&&clearTimeout(n.current),n.current=setTimeout((function(){n.current=null,e.apply(void 0,r)}),t)}),[])}((function(e){i(e)}));r.useEffect((function(){o!==n&&i(n)}),[n]),r.useEffect((function(){x(t,void 0,void 0,(function(){var e;return k(this,(function(t){return e=E(E({},S),O),p(e),[2]}))}))}),[]),r.useEffect((function(){x(t,void 0,void 0,(function(){var e;return k(this,(function(t){switch(t.label){case 0:return[4,W[M(a)](o)];case 1:return e=t.sent(),b(e),[2]}}))}))}),[o]);var J=C.split("-")[0],R=v.default.createElement(F,{html:f.html,css:f.css,js:f.js,type:f.type,originJs:f.originJs,options:w,code:n,codeVisible:z,onToggleCode:function(e){V(e)}});return v.default.createElement("div",{className:"dpdb"},v.default.createElement("div",{className:"dpdb__container dpdb__container-".concat(C," dpdb__display-").concat(C.split("-")[0])},L&&v.default.createElement("div",{className:"dpdb__playground-wrapper ".concat(z?"":"dpdb__hidden")},N?v.default.createElement(q,{isDarkTheme:g,type:M(a),value:o,onChange:function(e){return D(e)}}):v.default.createElement(h.default,E({},e))),"column"===J&&R,v.default.createElement("div",{className:"dpdb__runner-wrapper"},v.default.createElement(T,E({},f,{isDarkTheme:g,scope:u,options:w})))),"row"===J&&R)}var U,G=(U=h.default,function(e){var t=e.vanilla,n=e.vue,r=e.react;return t||n||r?v.default.createElement(b.default,{fallback:v.default.createElement(v.default.Fragment,null,"loading...")},(function(){return v.default.createElement(X,E({},e))})):v.default.createElement(U,E({},e))});e.exports=G},6416:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(7294),a=n(6010),l=n(2434),o=n(3905),i=n(7440),c=n(1575),s=n(9548),d="mdxPageWrapper_zHyg";var u=function(e){var t=e.content,n=t.metadata,u=n.title,p=n.description,m=n.permalink,f=n.frontMatter,v=f.wrapperClassName,h=f.hide_table_of_contents;return r.createElement(l.Z,{title:u,description:p,permalink:m,wrapperClassName:null!=v?v:s.ThemeClassNames.wrapper.mdxPages,pageClassName:s.ThemeClassNames.page.mdxPage},r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,a.Z)("row",d)},r.createElement("div",{className:(0,a.Z)("col",!h&&"col--8")},r.createElement(o.Zo,{components:i.Z},r.createElement(t,null))),!h&&t.toc&&r.createElement("div",{className:"col col--2"},r.createElement(c.Z,{toc:t.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level})))))}},1575:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7462),a=n(3366),l=n(7294),o=n(6010),i=n(5002),c="tableOfContents_cNA8",s=["className"];var d=function(e){var t=e.className,n=(0,a.Z)(e,s);return l.createElement("div",{className:(0,o.Z)(c,"thin-scrollbar",t)},l.createElement(i.Z,(0,r.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7462),a=n(3366),l=n(7294),o=n(9548),i=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function c(e){var t=e.toc,n=e.className,r=e.linkClassName,a=e.isChild;return t.length?l.createElement("ul",{className:a?void 0:n},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(c,{isChild:!0,toc:e.children,className:n,linkClassName:r}))}))):null}function s(e){var t=e.toc,n=e.className,s=void 0===n?"table-of-contents table-of-contents__left-border":n,d=e.linkClassName,u=void 0===d?"table-of-contents__link":d,p=e.linkActiveClassName,m=void 0===p?void 0:p,f=e.minHeadingLevel,v=e.maxHeadingLevel,h=(0,a.Z)(e,i),b=(0,o.useThemeConfig)(),g=null!=f?f:b.tableOfContents.minHeadingLevel,_=null!=v?v:b.tableOfContents.maxHeadingLevel,y=(0,o.useTOCFilter)({toc:t,minHeadingLevel:g,maxHeadingLevel:_}),w=(0,l.useMemo)((function(){if(u&&m)return{linkClassName:u,linkActiveClassName:m,minHeadingLevel:g,maxHeadingLevel:_}}),[u,m,g,_]);return(0,o.useTOCHighlight)(w),l.createElement(c,(0,r.Z)({toc:y,className:s,linkClassName:u},h))}},363:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=363,e.exports=t}}]);