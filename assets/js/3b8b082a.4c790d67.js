"use strict";(self.webpackChunkdocusaurus_plugin_demo_block=self.webpackChunkdocusaurus_plugin_demo_block||[]).push([[827],{3905:function(e,n,o){o.d(n,{Zo:function(){return c},kt:function(){return h}});var t=o(7294);function l(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){l(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function a(e,n){if(null==e)return{};var o,t,l=function(e,n){if(null==e)return{};var o,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(l[o]=e[o]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var i=t.createContext({}),d=function(e){var n=t.useContext(i),o=n;return e&&(o="function"==typeof e?e(n):s(s({},n),e)),o},c=function(e){var n=d(e.components);return t.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var o=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=d(o),h=l,b=p["".concat(i,".").concat(h)]||p[h]||u[h]||r;return o?t.createElement(b,s(s({ref:n},c),{},{components:o})):t.createElement(b,s({ref:n},c))}));function h(e,n){var o=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=o.length,s=new Array(r);s[0]=p;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:l,s[1]=a;for(var d=2;d<r;d++)s[d]=o[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},606:function(e,n,o){o.r(n),o.d(n,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var t=o(7462),l=o(3366),r=(o(7294),o(3905)),s=["components"],a={sidebar_position:5},i="control-bar",d={unversionedId:"control-bar",id:"control-bar",title:"control-bar",description:"default",source:"@site/docs/control-bar.md",sourceDirName:".",slug:"/control-bar",permalink:"/docusaurus-plugin-demo-block/docs/control-bar",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/control-bar.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"type",permalink:"/docusaurus-plugin-demo-block/docs/type"},next:{title:"scope",permalink:"/docusaurus-plugin-demo-block/docs/scope"}},c=[{value:"default",id:"default",children:[],level:2},{value:"hide all",id:"hide-all",children:[],level:2},{value:"showToggleButton",id:"showtogglebutton",children:[],level:2},{value:"showCopyCodeButton",id:"showcopycodebutton",children:[],level:2},{value:"showCodepenLink",id:"showcodepenlink",children:[],level:2},{value:"showJsfiddleLink",id:"showjsfiddlelink",children:[],level:2},{value:"showCodesandboxLink",id:"showcodesandboxlink",children:[],level:2}],u={toc:c};function p(e){var n=e.components,o=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,t.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"control-bar"},"control-bar"),(0,r.kt)("h2",{id:"default"},"default"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"vanilla",vanilla:!0},"<html>\n  <div id=\"box\">box</div>\n</html>\n\n<style>\n  #box {\n    border: 1px solid red;\n  }\n</style>\n\n<script>\nconst box = document.getElementById('box');\n<\/script>\n")),(0,r.kt)("h2",{id:"hide-all"},"hide all"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"vanilla showToggleButton=false&showCopyCodeButton=false&showCodepenLink=false&showJsfiddleLink=false&showCodesandboxLink=false",vanilla:!0,showToggleButton:"false&showCopyCodeButton"},"<html>\n  <div id=\"box\">box</div>\n</html>\n\n<style>\n  #box {\n    border: 1px solid red;\n  }\n</style>\n\n<script>\nconst box = document.getElementById('box');\n<\/script>\n")),(0,r.kt)("h2",{id:"showtogglebutton"},"showToggleButton"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"vanilla showToggleButton=true&showCopyCodeButton=false&showCodepenLink=false&showJsfiddleLink=false&showCodesandboxLink=false",vanilla:!0,showToggleButton:"true&showCopyCodeButton"},"<html>\n  <div id=\"box\">box</div>\n</html>\n\n<style>\n  #box {\n    border: 1px solid red;\n  }\n</style>\n\n<script>\nconst box = document.getElementById('box');\n<\/script>\n")),(0,r.kt)("h2",{id:"showcopycodebutton"},"showCopyCodeButton"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"vanilla showToggleButton=false&showCopyCodeButton=true&showCodepenLink=false&showJsfiddleLink=false&showCodesandboxLink=false",vanilla:!0,showToggleButton:"false&showCopyCodeButton"},"<html>\n  <div id=\"box\">box</div>\n</html>\n\n<style>\n  #box {\n    border: 1px solid red;\n  }\n</style>\n\n<script>\nconst box = document.getElementById('box');\n<\/script>\n")),(0,r.kt)("h2",{id:"showcodepenlink"},"showCodepenLink"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"vanilla showToggleButton=false&showCopyCodeButton=false&showCodepenLink=true&showJsfiddleLink=false&showCodesandboxLink=false",vanilla:!0,showToggleButton:"false&showCopyCodeButton"},"<html>\n  <div id=\"box\">box</div>\n</html>\n\n<style>\n  #box {\n    border: 1px solid red;\n  }\n</style>\n\n<script>\nconst box = document.getElementById('box');\n<\/script>\n")),(0,r.kt)("h2",{id:"showjsfiddlelink"},"showJsfiddleLink"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"vanilla showToggleButton=false&showCopyCodeButton=false&showCodepenLink=false&showJsfiddleLink=true&showCodesandboxLink=false",vanilla:!0,showToggleButton:"false&showCopyCodeButton"},"<html>\n  <div id=\"box\">box</div>\n</html>\n\n<style>\n  #box {\n    border: 1px solid red;\n  }\n</style>\n\n<script>\nconst box = document.getElementById('box');\n<\/script>\n")),(0,r.kt)("h2",{id:"showcodesandboxlink"},"showCodesandboxLink"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"vanilla showToggleButton=false&showCopyCodeButton=false&showCodepenLink=false&showJsfiddleLink=false&showCodesandboxLink=true",vanilla:!0,showToggleButton:"false&showCopyCodeButton"},"<html>\n  <div id=\"box\">box</div>\n</html>\n\n<style>\n  #box {\n    border: 1px solid red;\n  }\n</style>\n\n<script>\nconst box = document.getElementById('box');\n<\/script>\n")))}p.isMDXComponent=!0}}]);