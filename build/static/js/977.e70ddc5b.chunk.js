"use strict";(self.webpackChunkportfolio_app=self.webpackChunkportfolio_app||[]).push([[977],{8861:(e,t,s)=>{s.d(t,{A:()=>a});var i=s(579);const a=function(e){return(0,i.jsx)("button",{type:e.type,className:e.className,onClick:e.onClick,children:e.text})}},4987:(e,t,s)=>{s.d(t,{A:()=>f});var i=s(3156),a=s(3216),n=s(5475),r=s(8861),o=s(579);const l=(new Date).getFullYear(),c="\xa9 ".concat(l),d="https://www.linkedin.com/in/tehaan-perera/",h="https://github.com/tehaandev",m="https://stackoverflow.com/users/23388746/tehaan-perera";function p(e){let t;switch(e){case"linkedin":t=d;break;case"github":t=h;break;case"stackoverflow":t=m;break;default:t=""}window.open(t,"_blank")}const f=function(){const e=(0,a.Zp)();return(0,o.jsx)("footer",{className:"footer",children:(0,o.jsx)("div",{className:"footer-container",children:(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"footer-btns",children:[(0,o.jsx)(r.A,{className:"footer-btn",text:(0,o.jsx)(i.H1h,{}),onClick:()=>p("linkedin")}),(0,o.jsx)(r.A,{className:"footer-btn",text:(0,o.jsx)(i.hL4,{}),onClick:()=>p("github")}),(0,o.jsx)(r.A,{className:"footer-btn",text:(0,o.jsx)(i.UEF,{}),onClick:()=>p("stackoverflow")}),(0,o.jsx)(r.A,{className:"footer-btn",text:(0,o.jsx)(i.Cer,{}),onClick:()=>{e("/contact")}})]}),(0,o.jsx)("hr",{className:"footer-hr"}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{children:[c," ",(0,o.jsx)(n.N_,{className:"text-tertiary",to:d,target:"_blank",children:"Tehaan Perera."})]}),(0,o.jsx)("p",{children:"All rights reserved."})]})]})})})}},9347:(e,t,s)=>{s.d(t,{A:()=>l});var i=s(5043),a=s(3156),n=s(5475),r=s(8861),o=s(579);const l=function(){const[e,t]=(0,i.useState)("dark"),s=document.querySelector(":root");return"light"===e?(s.style.setProperty("--dark","#ffffff"),s.style.setProperty("--light","#0b0b16")):(s.style.setProperty("--light","#ffffff"),s.style.setProperty("--dark","#0b0b16")),(0,o.jsxs)("header",{children:[(0,o.jsx)("h1",{className:"header-title",children:"Portfolio."}),(0,o.jsx)("nav",{className:"main-nav",children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{className:"nav-link",children:(0,o.jsx)(n.k2,{to:"/",className:e=>{let{isActive:t,isPending:s}=e;return s?"pending":t?"active":""},children:"Home"})}),(0,o.jsx)("li",{className:"nav-link",children:(0,o.jsx)(n.k2,{to:"/about",className:e=>{let{isActive:t,isPending:s}=e;return s?"pending":t?"active":""},children:"About"})}),(0,o.jsx)("li",{className:"nav-link",children:(0,o.jsx)(n.k2,{to:"/skills",className:e=>{let{isActive:t,isPending:s}=e;return s?"pending":t?"active":""},children:"Skills"})}),(0,o.jsx)("li",{className:"nav-link",children:(0,o.jsx)(n.k2,{to:"/portfolio",className:e=>{let{isActive:t,isPending:s}=e;return s?"pending":t?"active":""},children:"Portfolio"})}),(0,o.jsx)("li",{className:"nav-link",children:(0,o.jsx)(n.k2,{to:"/contact",className:e=>{let{isActive:t,isPending:s}=e;return s?"pending":t?"active":""},children:"Contact"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.A,{onClick:()=>{t((e=>"light"===e?"dark":"light")),"dark"===e?(s.style.setProperty("--dark","#ffffff"),s.style.setProperty("--light","#0b0b16")):(s.style.setProperty("--light","#ffffff"),s.style.setProperty("--dark","#0b0b16"))},className:"theme-toggle-btn",text:"light"===e?(0,o.jsx)(a.V6H,{}):(0,o.jsx)(a.wQq,{})})})]})})]})}},3162:(e,t,s)=>{s.r(t),s.d(t,{default:()=>x});var i=s(1591),a=s(4987),n=s(9347),r=s(4032);const o=s.p+"static/media/ims.ec22b5e4a62a03e7d5b9.png",l=s.p+"static/media/mat.8109959f4a537eb6cbf8.png",c=s.p+"static/media/papermunch.e670d7b1f06c2ebf2d4d.png",d=s.p+"static/media/portfolio.22db69b7deb4570d898a.png",h=s.p+"static/media/turtlesOfLk.19c9273af6b84950c6a0.png",m=s.p+"static/media/artistry.e3bf4b765d4c929407d1.png",p={ohmyf1:{id:6,name:"ohmyF1.com (Coming Soon)",imgUrl:s.p+"static/media/ohmyf1.59d266a5ef5a32792ea0.png",description:"A platform for Formula 1 fans to get real-time stats and updates.",technologies:["Next.js","Mongo DB","Shadcn","Ant Design","Tailwind CSS"],url:"https://ohmyf1.com/"},artistry:{id:5,name:"Artistry",imgUrl:m,description:"A platform for artists to showcase their work and connect with other artists.",technologies:["Next.js","PostgreSQL (Supabase)","Amazon S3","Ant Design"],url:"https://artistry-liard.vercel.app/"},portfolio:{id:4,name:"Portfolio",imgUrl:d,description:"Personal portfolio website to showcase the work I've done.",technologies:["React.js","Axios","NestJS","Amazon SNS"],url:"https://tehaan.me"},mat:{id:3,name:"MAT International",imgUrl:l,description:"A company website for MAT International (Pvt) Ltd. to showcase their product portfolio.",technologies:["React.js","Amazon Amplify","Amazon SNS"],url:"https://mat.lk"},ims:{id:2,name:"Inventory Management System",imgUrl:o,description:"A basic inventory manangement system with CRUD operations and authentication.",technologies:["Angular","Ionic","Node.js","Express.js","Auth0","SQLite"],url:"https://github.com/tehaandev/inventory-management-system"},turtlesOfLk:{id:1,name:"Turtles Of LK",imgUrl:h,description:"Frontend for a ticketing system for a local turtle hatchery (BSc. year 1 assignment).",technologies:["Alpine.js","Tailwind CSS"],url:"https://github.com/tehaandev/turtles-lk/"},papermunch:{id:0,name:"Papermunch.com",imgUrl:c,description:"A past paper website for local Advanced Level students (decommissioned).",technologies:["WordPress","AdSense","Hostinger"],url:""}};var f=s(579);const x=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i.m,{children:(0,f.jsx)("title",{children:"TP | Work I've done"})}),(0,f.jsx)(n.A,{}),(0,f.jsx)("main",{className:"container ",children:(0,f.jsxs)("div",{className:"sub-container",children:[(0,f.jsx)("h1",{className:"page-header",children:"Portfolio."}),(0,f.jsx)("div",{className:"portfolio-container ",children:Object.keys(p).map((e=>{const t=p[e].technologies;return(0,f.jsxs)("div",{className:"portfolio-card",children:[(0,f.jsx)("div",{className:"portfolio-img",children:(0,f.jsx)("img",{src:p[e].imgUrl,alt:""})}),(0,f.jsxs)("div",{className:"portfolio-desc",children:[(0,f.jsx)("h3",{children:p[e].name}),(0,f.jsx)("p",{children:p[e].description}),(0,f.jsx)("h4",{children:"Technologies used."}),(0,f.jsx)("ul",{children:t.map((e=>(0,f.jsx)("li",{children:e},e)))})]})]},p[e].id)}))})]})}),(0,f.jsx)(a.A,{}),(0,f.jsx)(r.A,{})]})}},4032:(e,t,s)=>{s.d(t,{A:()=>r});var i=s(3156),a=s(5475),n=s(579);const r=function(){return(0,n.jsxs)("div",{className:"tabs-container",children:[(0,n.jsx)(a.k2,{to:"/",className:"tab",children:(0,n.jsx)(i.yYW,{})}),(0,n.jsx)(a.k2,{to:"about",className:"tab",children:(0,n.jsx)(i.CgP,{})}),(0,n.jsx)(a.k2,{to:"/skills",className:"tab",children:(0,n.jsx)(i.FSj,{})}),(0,n.jsx)(a.k2,{to:"portfolio",className:"tab",children:(0,n.jsx)(i._yv,{})}),(0,n.jsx)(a.k2,{to:"contact",className:"tab",children:(0,n.jsx)(i.Cer,{})})]})}}}]);
//# sourceMappingURL=977.e70ddc5b.chunk.js.map