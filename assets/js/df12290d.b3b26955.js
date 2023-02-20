"use strict";(self.webpackChunkice_website_v3=self.webpackChunkice_website_v3||[]).push([[2927],{4852:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(9231);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(f,o(o({ref:t},s),{},{components:a})):n.createElement(f,o({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4846:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(1504),r=(a(9231),a(4852));const i={title:"\u6570\u636e\u52a0\u8f7d",order:6},o=void 0,l={unversionedId:"guide/basic/data-loader",id:"guide/basic/data-loader",title:"\u6570\u636e\u52a0\u8f7d",description:"\u8bbe\u8ba1\u7406\u5ff5",source:"@site/docs/guide/basic/data-loader.md",sourceDirName:"guide/basic",slug:"/guide/basic/data-loader",permalink:"/docs/guide/basic/data-loader",draft:!1,editUrl:"https://github.com/alibaba/ice/edit/master/website/docs/guide/basic/data-loader.md",tags:[],version:"current",frontMatter:{title:"\u6570\u636e\u52a0\u8f7d",order:6},sidebar:"docs",previous:{title:"\u6837\u5f0f",permalink:"/docs/guide/basic/style"},next:{title:"\u9759\u6001\u8d44\u6e90",permalink:"/docs/guide/basic/assets"}},p={},d=[{value:"\u8bbe\u8ba1\u7406\u5ff5",id:"\u8bbe\u8ba1\u7406\u5ff5",level:2},{value:"\u9759\u6001 dataLoader",id:"\u9759\u6001-dataloader",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u9875\u9762\u7ea7\u6570\u636e\u52a0\u8f7d",id:"\u9875\u9762\u7ea7\u6570\u636e\u52a0\u8f7d",level:3},{value:"\u5e94\u7528\u7ea7\u6570\u636e\u52a0\u8f7d",id:"\u5e94\u7528\u7ea7\u6570\u636e\u52a0\u8f7d",level:3},{value:"\u591a\u4e2a\u6570\u636e\u8bf7\u6c42",id:"\u591a\u4e2a\u6570\u636e\u8bf7\u6c42",level:3}],s={toc:d};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u8bbe\u8ba1\u7406\u5ff5"},"\u8bbe\u8ba1\u7406\u5ff5"),(0,r.kt)("p",null,"\u6846\u67b6\u5bf9\u9875\u9762\u6570\u636e\u52a0\u8f7d\u7684\u7f16\u7801\u89c4\u8303\u505a\u51fa\u4e86\u7ea6\u5b9a\uff0c\u6765\u6700\u5927\u9650\u5ea6\u7684\u63d0\u524d\u9875\u9762\u7684\u6570\u636e\u52a0\u8f7d\u65f6\u673a\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u4f20\u7edf\u7684\u7f16\u7801\u6a21\u5f0f\u4e0b\uff0c\u6570\u636e\u8bf7\u6c42\u4e00\u822c\u5728\u7ec4\u4ef6\u5185\u90e8\u53d1\u8d77\uff0c\u4f9d\u8d56\u4e8e\u4e1a\u52a1 Bundle \u7684\u52a0\u8f7d\u89e3\u6790\u6267\u884c\uff0c\u6574\u4e2a\u8fc7\u7a0b\u662f\u4e32\u884c\u3001\u963b\u585e\u7684\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u800c\u5728 ice.js \u4e2d\uff0c\u9875\u9762\u7684\u6570\u636e\u8bf7\u6c42\u4f1a\u7531\u6846\u67b6\uff08\u6216\u5bb9\u5668\uff09\u7edf\u4e00\u53d1\u8d77\uff0c\u548c\u4e1a\u52a1 Bundle \u7684\u52a0\u8f7d\u89e3\u6790\u662f\u5e76\u884c\u3001\u4e0d\u963b\u585e\u7684\u3002")),(0,r.kt)("p",null,"\u57fa\u4e8e\u8fd9\u79cd\u6a21\u5f0f\u5f00\u53d1\u7684\u9875\u9762\uff0c\u5929\u7136\u83b7\u5f97\u4e86\u66f4\u597d\u7684\u6027\u80fd\u4f53\u9a8c\u3002"),(0,r.kt)("img",{src:"https://img.alicdn.com/imgextra/i1/O1CN01IaC2Oj26L0Jm5W06X_!!6000000007644-2-tps-1330-488.png",width:"750px"}),(0,r.kt)("p",null,"\u5e38\u89c4\u7684 React \u5e94\u7528\uff0c\u4e00\u822c\u90fd\u4f1a\u5728\u7ec4\u4ef6\u9996\u6b21 ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," \u65f6\u53d1\u8d77\u6570\u636e\u8bf7\u6c42\u3002\u8fd9\u79cd\u7ec4\u7ec7\u65b9\u5f0f\uff0c\u6570\u636e\u8bf7\u6c42\u4f1a\u5728\u9875\u9762\u5b8c\u6210\u9996\u6b21\u6e32\u67d3\u540e\u624d\u53d1\u8d77\uff0c\u8bf7\u6c42\u7684\u65f6\u673a\u662f\u975e\u5e38\u6ede\u540e\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/index.tsx"',title:'"src/pages/index.tsx"'},"import { useState, useEffect } from 'react';\n\nexport default function Home() {\n  const [data, setData] = useState();\n\n  useEffect(async () => {\n    const data = await fetch('https://example.com/api/xxx');\n\n    setData(data);\n  }, [])\n\n  return (\n    <>\n      <div>Hello ICE</div>\n      <div>{JSON.stringify(data)}</div>\n    </>\n  );\n};\n")),(0,r.kt)("p",null,"\u5728 ice.js \u4e2d\uff0c\u6211\u4eec\u63a8\u8350\u5c06\u9875\u9762\u7684\u7684\u6570\u636e\u8bf7\u6c42\u548c UI \u5b9e\u73b0\u89e3\u8026\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"dataLoader")," \u6765\u5b9a\u4e49\u9875\u9762\u7684\u6570\u636e\u8bf7\u6c42\u3002\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/index.tsx"',title:'"src/pages/index.tsx"'},"import { useData, defineDataLoader } from 'ice';\n\n// \u9875\u9762\u7ec4\u4ef6\u7684 UI \u5b9e\u73b0\nexport default function Home() {\n  const data = useData();\n\n  return (\n    <>\n      <div>Hello ICE</div>\n      <div>{JSON.stringify(data)}</div>\n    </>\n  );\n};\n\n// \u9875\u9762\u7684\u6570\u636e\u8bf7\u6c42\nexport const dataLoader = defineDataLoader(async () => {\n  const data = await fetch('https://example.com/api/xxx');\n  return data;\n});\n")),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"dataLoader")," \u5bfc\u51fa\u7684\u6570\u636e\u8bf7\u6c42\uff0c\u4f1a\u7531\u6846\u67b6\u5728\u8fdb\u5165\u9875\u9762\u65f6\u53d1\u8d77\uff0c\u548c\u4e1a\u52a1 Bundle \u7684\u52a0\u8f7d\u89e3\u6790\u662f\u5e76\u884c\u7684\u3002\u5728\u652f\u6301\u9884\u8bf7\u6c42\u7684\u5bb9\u5668\u4e0b\uff08\u4f8b\u5982 PHA\uff09\uff0c\u6570\u636e\u8bf7\u6c42\u8fd8\u53ef\u4ee5\u88ab\u8fdb\u4e00\u6b65\u7684\u63d0\u5347\u4e3a\u9884\u8bf7\u6c42\u3002"),(0,r.kt)("p",null,"\u540c\u4e00\u4e2a\u9879\u76ee\uff0c\u4e24\u79cd\u4e0d\u540c\u5199\u6cd5\uff0c\u6570\u636e\u8bf7\u6c42\u53d1\u8d77\u65f6\u673a\u7684\u5dee\u5f02\u5bf9\u6bd4\u5982\u4e0b\uff08\u6d4b\u8bd5\u73af\u5883 chrome slow 3G)\uff1a"),(0,r.kt)("img",{src:"https://iceworks.oss-cn-hangzhou.aliyuncs.com/site-assets/dataloader-compare.gif",width:"750px"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5728 dataLoader \u5e94\u907f\u514d\u5904\u7406 UI \u76f8\u5173\u903b\u8f91\uff0c\u6216\u5f15\u5165\u8f83\u5927\u7684\u4f9d\u8d56\uff0c\u4ee5\u786e\u4fdd dataLoader \u7684\u6784\u5efa\u4ea7\u7269\u8db3\u591f\u5c0f"),(0,r.kt)("p",{parentName:"admonition"},"\u53d7\u5c0f\u7a0b\u5e8f\u73af\u5883\u9650\u5236\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"dataLoader")," \u5b9a\u4e49\u7684\u5e94\u7528\u7ea7\u6570\u636e\u52a0\u8f7d\u5c06\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"App")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"onLaunch")," \u751f\u547d\u5468\u671f\u4e2d\u8fdb\u884c\uff0c\u9875\u9762\u7ea7\u6570\u636e\u52a0\u8f7d\u5219\u4f1a\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Page")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"onLoad")," \u751f\u547d\u5468\u671f\u4e2d\uff0c\u4e8c\u8005\u5747\u4f1a\u963b\u585e\u9875\u9762\u7684 UI \u6e32\u67d3\u3002\u5982\u679c\u8fd9\u4e0d\u662f\u4f60\u60f3\u8981\u7684\u6548\u679c\uff0c\u8bf7\u6309\u7167\u5e38\u89c4\u65b9\u5f0f\u8fdb\u884c\u6570\u636e\u8bf7\u6c42\u3002\uff08\u6bd4\u5982\u5728\u7ec4\u4ef6\u9996\u6b21 ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," \u65f6\u53d1\u8d77\u6570\u636e\u8bf7\u6c42\uff09")),(0,r.kt)("h2",{id:"\u9759\u6001-dataloader"},"\u9759\u6001 dataLoader"),(0,r.kt)("p",null,"\u5f53\u5f00\u53d1\u8005\u5e0c\u671b\u901a\u8fc7\u7edf\u4e00\u7684\u53d1\u9001\u51fd\u6570\u5904\u7406\u9759\u6001\u914d\u7f6e\u4ee5\u5b8c\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"dataLoader")," \u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49 ",(0,r.kt)("inlineCode",{parentName:"p"},"fetcher")," \u4ee5\u5b8c\u6210\u53d1\u9001\u903b\u8f91\u7684\u7edf\u4e00\u5c01\u88c5\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"dataLoader")," \u4e2d\u53ea\u9700\u8981\u4f20\u9012\u4e00\u4efd\u914d\u7f6e\u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export const dataLoader = defineDataLoader({\n  api: 'xxx',\n  options: {}\n});\n")),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"defineConfig")," \u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"dataLoader")," \u914d\u7f6e\u4ee5\u81ea\u5b9a\u4e49 ",(0,r.kt)("inlineCode",{parentName:"p"},"fetcher"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="ice.config.mts"',title:'"ice.config.mts"'},"export default defineConfig(() => ({\n  dataLoader: {\n    fetcher: {\n      packageName: '@ice/custom-fetcher-lib', // \u7edf\u4e00\u5904\u7406\u9759\u6001 dataLoader \u7684 NPM \u5305\n      method: 'request', // NPM \u5305\u5bfc\u51fa\u7684\u65b9\u6cd5\n    },\n  },\n}));\n")),(0,r.kt)("p",null,"\u6700\u7ec8\u6784\u5efa\u540e\u4f1a\u5448\u73b0\u4ee5\u4e0b\u5f62\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { request as fetcher } '@ice/custom-fetcher-lib';\n\nfetcher({\n  api: 'xxx',\n  options: {}\n});\n")),(0,r.kt)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/ice/tree/master/examples/with-data-loader"},"\u793a\u4f8b\u5de5\u7a0b")),(0,r.kt)("h3",{id:"\u9875\u9762\u7ea7\u6570\u636e\u52a0\u8f7d"},"\u9875\u9762\u7ea7\u6570\u636e\u52a0\u8f7d"),(0,r.kt)("p",null,"\u9875\u9762\u8def\u7531\u7ec4\u4ef6\u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"layout")," \u7ec4\u4ef6\uff0c\u90fd\u652f\u6301\u901a\u8fc7\u5bfc\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"dataLoader")," \u6765\u58f0\u660e\u5404\u81ea\u7684\u6570\u636e\u8bf7\u6c42\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u6700\u57fa\u7840\u7684\u9875\u9762\u7ea7\u6570\u636e\u8bf7\u6c42\u793a\u4f8b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"defineDataLoader")," \u5b9a\u4e49\u4e86\u9875\u9762\u6570\u636e\u8bf7\u6c42\u7684\u5177\u4f53\u5b9e\u73b0\uff0c\u5e76\u5bfc\u51fa\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"dataLoader"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"useData")," \u65b9\u6cd5\uff0c\u5728\u7ec4\u4ef6\u4fa7\u83b7\u53d6\u548c\u6d88\u8d39\u6570\u636e\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/index.tsx"',title:'"src/pages/index.tsx"'},"import { useData, defineDataLoader } from 'ice';\n\nexport default function Home() {\n  const data = useData();\n\n  return (\n    <>\n      <div>Hello ICE</div>\n      <div>{JSON.stringify(data)}</div>\n    </>\n  );\n};\n\nexport const dataLoader = defineDataLoader(async (ctx) => {\n  console.log(ctx.pathname);\n  console.log(ctx.query);\n\n  const data = await fetch('https://example.com/api/xxx');\n  return data;\n});\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"defineDataLoader")," \u652f\u6301\u4f20\u5165 Function\uff0c\u6765\u5b9a\u4e49\u9875\u9762\u6570\u636e\u8bf7\u6c42\u7684\u5177\u4f53\u5b9e\u73b0\uff0c\u5176\u5165\u53c2 ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx")," \u5305\u542b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pathname"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),", \u5f53\u524d\u9875\u9762\u7684\u8def\u5f84\u540d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),", \u5f53\u524d\u9875\u9762\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"query")," \u4fe1\u606f\uff0c\u4f1a\u88ab\u63d0\u524d\u89e3\u6790\u3002")),(0,r.kt)("p",null,"\u8fd4\u56de\u503c\u4e3a\u5e0c\u671b\u4f20\u7ed9\u9875\u9762\u7ec4\u4ef6\u7684\u5177\u4f53\u6570\u636e\uff0c\u7c7b\u578b\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"Data | Promise<Data>"),"\u3002"),(0,r.kt)("h3",{id:"\u5e94\u7528\u7ea7\u6570\u636e\u52a0\u8f7d"},"\u5e94\u7528\u7ea7\u6570\u636e\u52a0\u8f7d"),(0,r.kt)("p",null,"\u5982\u679c\u662f\u5e94\u7528\u7ea7\u7684\u6570\u636e\u52a0\u8f7d\uff0c\u53ef\u4ee5\u5728\u5e94\u7528\u5165\u53e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app.ts")," \u4e2d\u5b9a\u4e49\u5e76\u5bfc\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"dataLoader")," \u65b9\u6cd5\uff0c\u6765\u6ce8\u518c\u6570\u636e\u52a0\u8f7d\u903b\u8f91\u3002\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.ts"',title:'"src/app.ts"'},"import { defineDataLoader } from 'ice';\n\n// ...\n\nexport const dataLoader = defineDataLoader(async () => {\n  const data = await fetch('https://example.com/api/xxx');\n  return data;\n});\n")),(0,r.kt)("p",null,"\u5728\u9875\u9762\u6216\u5176\u4ed6\u7ec4\u4ef6\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"useAppData")," \u65b9\u6cd5\u83b7\u53d6\u5e94\u7528\u7ea7\u6570\u636e\u3002\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { useAppData } from 'ice';\n\nexport default function Home(props) {\n  const appData = useAppData();\n\n  // ...\n}\n")),(0,r.kt)("h3",{id:"\u591a\u4e2a\u6570\u636e\u8bf7\u6c42"},"\u591a\u4e2a\u6570\u636e\u8bf7\u6c42"),(0,r.kt)("p",null,"\u5982\u679c\u9875\u9762\u9700\u8981\u540c\u65f6\u53d1\u8d77\u591a\u4e2a\u6570\u636e\u8bf7\u6c42\uff0c\u9996\u5148\u63a8\u8350\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"/docs/guide/basic/router"},"\u5d4c\u5957\u8def\u7531"),"\u6765\u7ec4\u7ec7\u9875\u9762\u5185\u5bb9\uff0c\u5c06\u4e0d\u540c\u533a\u5757\u7684\u6570\u636e\u8bf7\u6c42\uff0c\u653e\u5230\u4e0d\u540c\u8def\u7531\u7ec4\u4ef6\u4e0b\u6765\u6ce8\u518c\u3002"),(0,r.kt)("img",{src:"https://img.alicdn.com/imgextra/i1/O1CN019fsC6o299xcHyZ2jo_!!6000000008026-2-tps-626-638.png",width:"260px"}),(0,r.kt)("p",null,"\u5982\u679c\u591a\u4e2a\u6570\u636e\u8bf7\u6c42\u5c5e\u4e8e\u540c\u4e00\u4e2a\u8def\u7531\u7ec4\u4ef6\uff0c\u5219\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"defineDataLoader")," \u65f6\uff0c\u4ee5\u6570\u7ec4\u7684\u65b9\u5f0f\u4f20\u5165\u6570\u636e\u8bf7\u6c42\u5b9e\u73b0\u3002\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useData, defineDataLoader } from 'ice';\n\nexport default function Home() {\n  const [useInfo, itemInfo] = useData();\n\n  return (\n    <>\n      <div>Hello {userInfo?.name}</div>\n      <div>{JSON.stringify(itemInfo)}</div>\n    </>\n  );\n};\n\nexport const dataLoader = defineDataLoader([\n  async () => {\n    const useInfo = await fetch('https://example.com/api/userInfo');\n    return useInfo;\n  },\n  async (ctx) => {\n    const itemInfo = await fetch(`https://example.com/api/itemInfo${ctx?.query?.itemId}`);\n    return itemInfo;\n  },\n]);\n")),(0,r.kt)("p",null,"\u591a\u4e2a\u6570\u636e\u8bf7\u6c42\u7684\u60c5\u51b5\u4e0b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"useData")," \u83b7\u53d6\u7684\u6570\u636e\u4e5f\u5bf9\u5e94\u7684\u4e3a\u6570\u7ec4\uff0c\u6570\u7ec4\u5143\u7d20\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"dataLoader")," \u4e2d\u5b9a\u4e49\u7684\u6570\u636e\u8bf7\u6c42\u7684\u8fd4\u56de\u503c\u4e00\u4e00\u5bf9\u5e94\u3002"))}c.isMDXComponent=!0}}]);