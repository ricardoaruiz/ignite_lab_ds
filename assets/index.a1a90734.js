var u=Object.defineProperty;var a=(e,o)=>u(e,"name",{value:o,configurable:!0});import{R as s}from"./index.2c0dfc32.js";import{$ as m,c as f}from"./clsx.m.66ecaf6a.js";import{j as p}from"./jsx-runtime.d0b8776f.js";const n=a(({children:e,asChild:o,className:c,...t})=>{const d=o?m:"button",r=s.useMemo(()=>`
    py-4 
    px-3 
    rounded 
    bg-cyan-500 
    font-semibold 
    text-black
    text-sm
    w-full
    hover:bg-cyan-300
    transition-colors
  `,[]),l=s.useMemo(()=>`
    focus:ring-2
    focus:ring-white
  `,[]),i=s.useMemo(()=>t.disabled&&`
      disabled:bg-gray-400
      disabled:cursor-not-allowed
    `,[t.disabled]);return p(d,{...t,className:f(r,l,i,c),children:e})},"Button");try{n.displayName="Button",n.__docgenInfo={description:"",displayName:"Button",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:n.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch{}export{n as B};
//# sourceMappingURL=index.a1a90734.js.map
