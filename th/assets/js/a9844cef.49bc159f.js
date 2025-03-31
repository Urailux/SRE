"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[251],{2978:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>l});const c=JSON.parse('{"id":"SRE Handbook/Deployment/Projects/eLearning","title":"eLearning","description":"Deployment & Docker usage guide for the eLearning project","source":"@site/docs/SRE Handbook/Deployment/Projects/eLearning.md","sourceDirName":"SRE Handbook/Deployment/Projects","slug":"/SRE Handbook/Deployment/Projects/eLearning","permalink":"/SRE/th/docs/SRE Handbook/Deployment/Projects/eLearning","draft":false,"unlisted":false,"editUrl":"https://github.com/Urailux/SRE/tree/docusaurus_pui/docs/SRE Handbook/Deployment/Projects/eLearning.md","tags":[],"version":"current","frontMatter":{"id":"eLearning","title":"eLearning","sidebar_label":"eLearning","description":"Deployment & Docker usage guide for the eLearning project"},"sidebar":"tutorialSidebar","previous":{"title":"eBao","permalink":"/SRE/th/docs/SRE Handbook/Deployment/Projects/eBao"},"next":{"title":"Team FAQ","permalink":"/SRE/th/docs/category/team-faq"}}');var t=r(4848),i=r(8453);const d={id:"eLearning",title:"eLearning",sidebar_label:"eLearning",description:"Deployment & Docker usage guide for the eLearning project"},o="\ud83d\udce6 eLearning Project Deployment Guide",s={},l=[{value:"\ud83e\uddca Docker Image Overview",id:"-docker-image-overview",level:2},{value:"\ud83d\udd0d Common Docker Commands",id:"-common-docker-commands",level:2},{value:"\ud83c\udfaf Team Best Practices",id:"-team-best-practices",level:2}];function a(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"-elearning-project-deployment-guide",children:"\ud83d\udce6 eLearning Project Deployment Guide"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"This guide covers Docker usage, image handling, and deployment commands used by the SRE team for the eLearning project."}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"-docker-image-overview",children:"\ud83e\uddca Docker Image Overview"}),"\n",(0,t.jsx)(n.p,{children:"The Docker image for the eLearning project is built from the source code using a `Dockerfile"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"-common-docker-commands",children:"\ud83d\udd0d Common Docker Commands"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Command"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"docker ps"})}),(0,t.jsx)(n.td,{children:"List running containers"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"docker ps -a"})}),(0,t.jsx)(n.td,{children:"List all containers (including stopped ones)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"docker images"})}),(0,t.jsx)(n.td,{children:"Show all local Docker images"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"docker logs -f <container>"})}),(0,t.jsx)(n.td,{children:"Follow container logs in real time"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"docker exec -it <container> /bin/bash"})}),(0,t.jsx)(n.td,{children:"Access container shell"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"docker stop <container>"})}),(0,t.jsx)(n.td,{children:"Stop a running container"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"docker start <container>"})}),(0,t.jsx)(n.td,{children:"Start a stopped container"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"docker rm <container>"})}),(0,t.jsx)(n.td,{children:"Remove a stopped container"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"docker rmi <image>"})}),(0,t.jsx)(n.td,{children:"Remove an unused image"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"docker build -t <image-name> ."})}),(0,t.jsx)(n.td,{children:"Build an image from the Dockerfile"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"docker run -d -p 3000:3000 --name <container> <image>"})}),(0,t.jsx)(n.td,{children:"Run a container in detached mode"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"docker compose up -d"})}),(0,t.jsx)(n.td,{children:"Start containers using Docker Compose"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"docker compose down"})}),(0,t.jsx)(n.td,{children:"Stop and remove Docker Compose containers"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"docker system prune -f"})}),(0,t.jsx)(n.td,{children:"Clean up unused containers/images (\u26a0\ufe0f use with caution)"})]})]})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\ud83d\udca1 Replace ",(0,t.jsx)(n.code,{children:"<container>"})," and ",(0,t.jsx)(n.code,{children:"<image>"})," with actual names such as ",(0,t.jsx)(n.code,{children:"elearning"}),", ",(0,t.jsx)(n.code,{children:"elearning-app"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"-team-best-practices",children:"\ud83c\udfaf Team Best Practices"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use descriptive names for images and containers, e.g., ",(0,t.jsx)(n.code,{children:"elearning-app:2024.03"})]}),"\n",(0,t.jsxs)(n.li,{children:["Use ",(0,t.jsx)(n.code,{children:".env"})," files with ",(0,t.jsx)(n.code,{children:"--env-file"})," to manage configs separately from code"]}),"\n",(0,t.jsxs)(n.li,{children:["Use ",(0,t.jsx)(n.code,{children:"docker-compose.yml"})," for multi-container setups"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>o});var c=r(6540);const t={},i=c.createContext(t);function d(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);