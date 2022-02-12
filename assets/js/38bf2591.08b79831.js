"use strict";(self.webpackChunkdocusaurus_plugin_demo_block=self.webpackChunkdocusaurus_plugin_demo_block||[]).push([[651],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return p}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(r),p=a,d=m["".concat(c,".").concat(p)]||m[p]||f[p]||l;return r?t.createElement(d,i(i({ref:n},u),{},{components:r})):t.createElement(d,i({ref:n},u))}));function p(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6067:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var t=r(7462),a=r(3366),l=(r(7294),r(3905)),i=["components"],o={sidebar_position:4},c="iframe",s={unversionedId:"iframe",id:"iframe",title:"iframe",description:"vanilla & iframe=false",source:"@site/docs/iframe.md",sourceDirName:".",slug:"/iframe",permalink:"/docusaurus-plugin-demo-block/docs/iframe",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/iframe.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"live",permalink:"/docusaurus-plugin-demo-block/docs/live"},next:{title:"type",permalink:"/docusaurus-plugin-demo-block/docs/type"}},u=[{value:"vanilla &amp; iframe=false",id:"vanilla--iframefalse",children:[],level:2},{value:"vanilla &amp; iframe=false&amp;layout=column-reverse",id:"vanilla--iframefalselayoutcolumn-reverse",children:[],level:2},{value:"vue &amp; iframe=false",id:"vue--iframefalse",children:[],level:2},{value:"react &amp; iframe=false",id:"react--iframefalse",children:[],level:2}],f={toc:u};function m(e){var n=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"iframe"},"iframe"),(0,l.kt)("h2",{id:"vanilla--iframefalse"},"vanilla & iframe=false"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:"vanilla iframe=false",vanilla:!0,iframe:"false"},"<template>\n  <div id=\"box\">box</div>\n</template>\n\n<style>\n  #box {\n    border: 1px solid red;\n  }\n</style>\n\n<script>\nconst box = document.getElementById('box');\n<\/script>\n\n")),(0,l.kt)("h2",{id:"vanilla--iframefalselayoutcolumn-reverse"},"vanilla & iframe=false&layout=column-reverse"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'vanilla iframe=false&layout="column-reverse"',vanilla:!0,iframe:"false&layout"},"<template>\n  <div id=\"box\">box</div>\n</template>\n\n<style>\n  #box {\n    border: 1px solid red;\n  }\n</style>\n\n<script>\nconst box = document.getElementById('box');\n<\/script>\n\n")),(0,l.kt)("h2",{id:"vue--iframefalse"},"vue & iframe=false"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:"vue iframe=false",vue:!0,iframe:"false"},'<template>\n  <div id="box">{{ foo }}</div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      foo: "foo"\n    }\n  },\n  created () {\n    console.log(\'created\')\n  }\n}\n<\/script>\n\n<style>\n#box {\n  border: 1px solid red;\n}\n</style>\n')),(0,l.kt)("h2",{id:"react--iframefalse"},"react & iframe=false"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"react iframe=false",react:!0,iframe:"false"},"function App () {\n  React.useEffect(() => {\n    console.log('mounted')\n  }, [])\n  return (\n    <div id=\"box\">123</div>\n  )\n}\n\nCONTAINER.innerHTML += `\n<style>\n  #box {\n    border: 1px solid red;\n  }\n</style>\n`\n\nReactDOM.render(<App />, CONTAINER);\n")))}m.isMDXComponent=!0}}]);