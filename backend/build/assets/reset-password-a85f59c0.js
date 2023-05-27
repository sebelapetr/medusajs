import{u as h,a7 as w,d4 as j,j as e,B as l}from"./index-28aee60c.js";import{q as x}from"./index-6e6d48c9.js";import{c as y,g as v,I as u,u as S}from"./index-ea422a0b.js";import{d as k}from"./index.modern-50e69806.js";import{P as _,S as m}from"./login-layout-683fe088.js";import{S as T}from"./index-61b6c9b3.js";import{F as U}from"./index-aeb6bfdc.js";const z=()=>{const t=h(),n=w(),s=x.parse(n.search.substring(1));let a=null;if(s!=null&&s.token)try{a=k(s.token)}catch{a=null}const d=(a==null?void 0:a.email)||(s==null?void 0:s.email)||"",{register:i,handleSubmit:c,formState:{errors:o},setError:b}=y({defaultValues:{password:"",repeat_password:""}}),p=j(),N=S(),g=c(r=>{if(r.password!==r.repeat_password){b("repeat_password",{type:"manual",message:"Passwords do not match"},{shouldFocus:!0});return}p.mutate({token:s.token,password:r.password,email:d},{onSuccess:()=>{t("/login")},onError:f=>{N("Error",v(f),"error")}})});return e(_,{children:[e(T,{title:"Reset Password"},void 0,!1,{fileName:"/Users/petrsebela/Sites/medusajs/my-medusa-store/backend/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:84,columnNumber:7},globalThis),e("div",{className:"flex flex-col items-center justify-center",children:a?e("form",{onSubmit:g,children:e("div",{className:"gap-y-large flex flex-col items-center",children:[e("h1",{className:"inter-xlarge-semibold",children:"Reset your password"},void 0,!1,{fileName:"/Users/petrsebela/Sites/medusajs/my-medusa-store/backend/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:89,columnNumber:15},globalThis),e("div",{className:"gap-y-small flex flex-col items-center",children:[e(m,{placeholder:"Email",disabled:!0,readOnly:!0,value:d},void 0,!1,{fileName:"/Users/petrsebela/Sites/medusajs/my-medusa-store/backend/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:91,columnNumber:17},globalThis),e("div",{children:[e(m,{placeholder:"Password (8+ characters)",type:"password",...i("password",{required:U.required("Password")})},void 0,!1,{fileName:"/Users/petrsebela/Sites/medusajs/my-medusa-store/backend/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:98,columnNumber:19},globalThis),e(u,{errors:o,name:"password"},void 0,!1,{fileName:"/Users/petrsebela/Sites/medusajs/my-medusa-store/backend/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:105,columnNumber:19},globalThis)]},void 0,!0,{fileName:"/Users/petrsebela/Sites/medusajs/my-medusa-store/backend/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:97,columnNumber:17},globalThis),e("div",{children:[e(m,{placeholder:"Confirm password",type:"password",...i("repeat_password",{required:"You must confirm your password"})},void 0,!1,{fileName:"/Users/petrsebela/Sites/medusajs/my-medusa-store/backend/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:108,columnNumber:19},globalThis),e(u,{errors:o,name:"repeat_password"},void 0,!1,{fileName:"/Users/petrsebela/Sites/medusajs/my-medusa-store/backend/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:115,columnNumber:19},globalThis)]},void 0,!0,{fileName:"/Users/petrsebela/Sites/medusajs/my-medusa-store/backend/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:107,columnNumber:17},globalThis)]},void 0,!0,{fileName:"/Users/petrsebela/Sites/medusajs/my-medusa-store/backend/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:90,columnNumber:15},globalThis),e(l,{variant:"secondary",size:"medium",className:"w-[280px]",children:"Reset password"},void 0,!1,{fileName:"/Users/petrsebela/Sites/medusajs/my-medusa-store/backend/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:118,columnNumber:15},globalThis),e("a",{href:"/login",className:"inter-small-regular text-grey-40 mt-xsmall",children:"Go back to sign in"},void 0,!1,{fileName:"/Users/petrsebela/Sites/medusajs/my-medusa-store/backend/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:121,columnNumber:15},globalThis)]},void 0,!0,{fileName:"/Users/petrsebela/Sites/medusajs/my-medusa-store/backend/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:88,columnNumber:13},globalThis)},void 0,!1,{fileName:"/Users/petrsebela/Sites/medusajs/my-medusa-store/backend/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:87,columnNumber:11},globalThis):e("div",{className:"gap-y-large flex flex-col items-center",children:[e("div",{className:"gap-y-xsmall flex flex-col text-center",children:[e("h1",{className:"inter-xlarge-semibold text-[20px]",children:"Your reset link is invalid"},void 0,!1,{fileName:"/Users/petrsebela/Sites/medusajs/my-medusa-store/backend/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:132,columnNumber:15},globalThis),e("p",{className:"text-grey-50 inter-base-regular",children:"Try resetting your password again."},void 0,!1,{fileName:"/Users/petrsebela/Sites/medusajs/my-medusa-store/backend/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:135,columnNumber:15},globalThis)]},void 0,!0,{fileName:"/Users/petrsebela/Sites/medusajs/my-medusa-store/backend/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:131,columnNumber:13},globalThis),e("a",{href:"/login?reset-password=true",children:e(l,{variant:"secondary",size:"medium",className:"w-[280px]",children:"Go to reset password"},void 0,!1,{fileName:"/Users/petrsebela/Sites/medusajs/my-medusa-store/backend/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:140,columnNumber:15},globalThis)},void 0,!1,{fileName:"/Users/petrsebela/Sites/medusajs/my-medusa-store/backend/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:139,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/Users/petrsebela/Sites/medusajs/my-medusa-store/backend/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:130,columnNumber:11},globalThis)},void 0,!1,{fileName:"/Users/petrsebela/Sites/medusajs/my-medusa-store/backend/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:85,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/Users/petrsebela/Sites/medusajs/my-medusa-store/backend/node_modules/@medusajs/admin-ui/ui/src/pages/reset-password.tsx",lineNumber:83,columnNumber:5},globalThis)};export{z as default};