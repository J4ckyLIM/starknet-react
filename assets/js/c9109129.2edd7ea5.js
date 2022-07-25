"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[873],{8044:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return d}});var r=n(8855);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),f=u(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,i(i({ref:e},l),{},{components:n})):r.createElement(m,i({ref:e},l))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5179:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(1528),a=n(2854),o=(n(8855),n(8044)),i=["components"],s={sidebar_position:6},c="useStarknetTransactionManager",u={unversionedId:"hooks/transaction",id:"hooks/transaction",title:"useStarknetTransactionManager",description:"Hook to manage the transactions sent to StarkNet. Transactions sent through",source:"@site/docs/hooks/transaction.md",sourceDirName:"hooks",slug:"/hooks/transaction",permalink:"/starknet-react/hooks/transaction",draft:!1,editUrl:"https://github.com/apibara/starknet-react/tree/main/website/docs/hooks/transaction.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"useStarknetInvoke",permalink:"/starknet-react/hooks/invoke"},next:{title:"useSignTypedData",permalink:"/starknet-react/hooks/signTypedData"}},l={},p=[{value:"Return Values",id:"return-values",level:2}],f={toc:p};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usestarknettransactionmanager"},"useStarknetTransactionManager"),(0,o.kt)("p",null,"Hook to manage the transactions sent to StarkNet. Transactions sent through\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"useStarknetInvoke")," hook are automatically added to the list of tracked\ntransaction. Tracked transactions are periodically refreshed to update their\nsubmission status."),(0,o.kt)("h2",{id:"return-values"},"Return Values"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  transactions: Transaction[]\n  addTransaction: (transaction: TransactionSubmitted) => void\n  removeTransaction: (transactionHash: string) => void\n  refreshTransaction: (transactionHash: string) => void\n}\n")))}d.isMDXComponent=!0}}]);