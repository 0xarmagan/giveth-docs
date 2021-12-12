"use strict";(self.webpackChunkgiveth_docs=self.webpackChunkgiveth_docs||[]).push([[6610],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7834:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"developmentProcess",title:"Development Process"},l=void 0,p={unversionedId:"developmentProcess",id:"developmentProcess",isDocsHomePage:!1,title:"Development Process",description:"This section details the Giveth TRACE development process, deployments, and how merging and testing is handled.",source:"@site/dapps/developmentProcess.md",sourceDirName:".",slug:"/developmentProcess",permalink:"/dapps/developmentProcess",editUrl:"https://github.com/giveth/giveth-docs/edit/master/dapps/developmentProcess.md",tags:[],version:"current",lastUpdatedBy:"Mitch",lastUpdatedAt:1630072988,formattedLastUpdatedAt:"8/27/2021",frontMatter:{id:"developmentProcess",title:"Development Process"},sidebar:"dapps",previous:{title:"Leaving Traces (formerly Creating Milestones)",permalink:"/dapps/leavingTraces"},next:{title:"Technical White Paper",permalink:"/dapps/technicalWhitePaper"}},d=[{value:"Development Planning, Sprints and Where to get Involved.",id:"development-planning-sprints-and-where-to-get-involved",children:[]},{value:"Deployments and Branch Organisation",id:"deployments-and-branch-organisation",children:[]},{value:"Usage of Zenhub Boards",id:"usage-of-zenhub-boards",children:[{value:"Making a Pull Request",id:"making-a-pull-request",children:[]}]},{value:"Integration &amp; Testing",id:"integration--testing",children:[]},{value:"Quality Assurance Testing",id:"quality-assurance-testing",children:[]},{value:"Production Deployment",id:"production-deployment",children:[]},{value:"Back-end Webservices Documentation",id:"back-end-webservices-documentation",children:[]},{value:"FAQ",id:"faq",children:[]}],c={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This section details the Giveth TRACE development process, deployments, and how merging and testing is handled.")),(0,o.kt)("h2",{id:"development-planning-sprints-and-where-to-get-involved"},"Development Planning, Sprints and Where to get Involved."),(0,o.kt)("p",null,"We run on a 2 week sprint cycle with weekly developer meetings to plan sprints and assess progress. You can checkout when the next one is on our ",(0,o.kt)("a",{parentName:"p",href:"https://calendar.google.com/calendar/embed?src=givethdotio%40gmail.com"},"Google Calendar")," and you can also reach out on the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/XhN7eGmcCK"},"Giveth Discord")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"@moenick")," the Giveth TRACE project manager. You can find the current ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Giveth/giveth-dapp"},"Giveth TRACE repository on Github"),"."),(0,o.kt)("h2",{id:"deployments-and-branch-organisation"},"Deployments and Branch Organisation"),(0,o.kt)("p",null,"Giveth TRACE has transitioned from passive to active development for post-beta release coming soon. There are two deployments currently used for the development process."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Blockchain"),(0,o.kt)("th",{parentName:"tr",align:null},"Branch Deployed"),(0,o.kt)("th",{parentName:"tr",align:null},"Auto Deploy"),(0,o.kt)("th",{parentName:"tr",align:null},"Use"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://beta.giveth.io"},"beta")),(0,o.kt)("td",{parentName:"tr",align:null},"Mainnet/Rinkeby"),(0,o.kt)("td",{parentName:"tr",align:null},"master"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"Bridged deployment; Rinkeby for internal contract interactions, Mainnet for sending and receiving real funds.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://develop.giveth.io"},"develop")),(0,o.kt)("td",{parentName:"tr",align:null},"Ropsten Test Network"),(0,o.kt)("td",{parentName:"tr",align:null},"develop"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Development environment for integrating and testing new features. Feature and pull request branches are deployed to this environment.")))),(0,o.kt)("p",null,"The two branches below  are being used in the gitflow."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"master"),(0,o.kt)("td",{parentName:"tr",align:null},"The master branch tracks released code only. Commits are made to master around the middle of each month so as not to interfere with payment processes happening near the end and beginning of these months.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"develop"),(0,o.kt)("td",{parentName:"tr",align:null},"Deployments made to develop are from local builds and include new features and bug fixes.")))),(0,o.kt)("h2",{id:"usage-of-zenhub-boards"},"Usage of Zenhub Boards"),(0,o.kt)("p",null,"Currently we use the Zenhub Boards extension for Github to track progress on features and fixes. You can get the ",(0,o.kt)("a",{parentName:"p",href:"https://www.zenhub.com/extension"},"Zenhub extension here"),"."),(0,o.kt)("p",null,"The Current Github issue flow is as follows:\nName | Usage |\n-----|------------|\nNew Issues | Create a new Issue for a new feature request or to report a bug. Tag a developer or ",(0,o.kt)("inlineCode",{parentName:"p"},"@moenick")," to make sure it get's noticed. Use labels to add context to your issue.\nIcebox | Features and Ideas to consider for future development, to be assesed by the Giveth Team only when developer bandwidth allows.\nProduct Backlog | Issues that need to be dealt with or approved new features for development. These will be queued into the next sprint progressively.\nEpics | Large tasks which have been broken down into smaller issues.\nNeeds Clarification | Issues which require more clarification from the issue creator in order to move forward.\nSprint Backlog | Issues being worked on in the current sprint.\nBugs & Ops | Urgent tasks that need to be prioritized. Bandwidth is set aside in the sprint schedule for developers to address any issues here.\nIn Progress | Issues that have been picked up by a dev for the current sprint.\nCode Review | Devs should review code referenced in these issues for quality assurance and fixing potential issues before moving to user testing.\nUAT (User Acceptance Testing) | Features or Fixes ready to be user tested.\nDone | Issues ready to be merged to ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," according to the commit cycle."),(0,o.kt)("h3",{id:"making-a-pull-request"},"Making a Pull Request"),(0,o.kt)("p",null,"Before making new Pull Request, make sure that your code does not have any linter issues and can be deployed. Only PRs that successfully deploy and don't have any merge conflicts will be merged. You can also easily check the deploy preview on Github Netlify autodeploy integration.\n",(0,o.kt)("img",{parentName:"p",src:"https://d33wubrfki0l68.cloudfront.net/cfa6124f4e0bf556de850f40e97c6b4cc66231f9/d42f0/images/product-development/deploy-preview.png",alt:"Autodeploy Integration"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Deployment preview.")," Each pull request to the DApp repository has a Netlify deploy preview. You can access it at the bottom of the Conversation tab after clicking ",(0,o.kt)("strong",{parentName:"p"},"Show all checks")," button and ",(0,o.kt)("strong",{parentName:"p"},"Details"),"."),(0,o.kt)("h2",{id:"integration--testing"},"Integration & Testing"),(0,o.kt)("p",null,"Integration of new features is done by the ",(0,o.kt)("strong",{parentName:"p"},"development team")," after a DApp dev meeting where PRs are reviewed. After the PRs are reviewed and fixed, they are merged to the develop branch. Testing of the new features is done in the ",(0,o.kt)("a",{parentName:"p",href:"https://develop.giveth.io"},(0,o.kt)("inlineCode",{parentName:"a"},"develop"))," environment to ensure the features do what they say and work well with the rest of the DApp."),(0,o.kt)("h2",{id:"quality-assurance-testing"},"Quality Assurance Testing"),(0,o.kt)("p",null,"After new features are integrated and dev tested in the ",(0,o.kt)("a",{parentName:"p",href:"https://develop.giveth.io"},(0,o.kt)("inlineCode",{parentName:"a"},"develop"))," environment, developers will ping testers with requests or updates in the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/79uUbyVCtE"},"Giveth TRACE Dev Channel")," on Discord. Testing should not be done by developers and is open to anyone who wishes to contribute."),(0,o.kt)("h2",{id:"production-deployment"},"Production Deployment"),(0,o.kt)("p",null,"Only once all the newly introduced bugs are removed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"develop")," branch it can be merged to master and pushed to production. It is done manually by DApp devteam (by ",(0,o.kt)("inlineCode",{parentName:"p"},"@aminlatifi")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@MohammadPCh"),")."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To deploy the newest version of feathers-giveth")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ ssh user@feathers.alpha.giveth.io\n\n$ cd /home/deploy/feathers-giveth/\n$ sudo -u deploy bash\n\n$ git pull\n\n$ yarn install --pure-lockfile\n$ yarn serve\n")),(0,o.kt)("p",null,"Next, check the feathers deploy status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ pm2 logs\n")),(0,o.kt)("p",null,"If the logs are clear, the last step is to deploy the latest master branch commit on ",(0,o.kt)("a",{parentName:"p",href:"http://netlify.com/"},"Netlify")," and locking the deploy."),(0,o.kt)("h2",{id:"back-end-webservices-documentation"},"Back-end Webservices Documentation"),(0,o.kt)("p",null,"If you're a new contributor and would like more in depth technical documentation on all the Webservices leveraged from the back-end (feathers-giveth) to the front-end (giveth-dapp), check out our pages on ",(0,o.kt)("strong",{parentName:"p"},"Swagger")," for both Production and Staging deployments:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://feathers.beta.giveth.io/docs/?url=/docs#/"},"feathers-giveth Production"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://feathers.develop.giveth.io/docs"},"feathers-giveth Staging")),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"What is the definition of a feature?")),(0,o.kt)("p",null,"A Feature is any non-trivial improvement (less than 10 lines of code). Most features have issue in the corresponding Github Repository."),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"What about fixes?")),(0,o.kt)("p",null," Big non-critical fixes are treated just like any other feature. If a fix is time critical, it is created as new branch with ",(0,o.kt)("inlineCode",{parentName:"p"},"hotfix/")," prefix as a fork from the ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," branch. Such hotfix is tested at minimum by 2 people from dev team before being merged to ",(0,o.kt)("inlineCode",{parentName:"p"},"master"),"and ",(0,o.kt)("inlineCode",{parentName:"p"},"develop")," branches."),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"Where do we communicate what needs testing?")),(0,o.kt)("p",null,"The QA testing is announced in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Giveth-1 Dev")," channel on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/79uUbyVCtE"},"Discord"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How do we prioritize when tests fail / bug fixes?")),(0,o.kt)("p",null,"Bug fixes are done ad-hoc as soon as discovered during the testing process. The bugs can be tackled by the DApp dev team or external contributors can be asked to help. Bug fixing has a priority over new development."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Who does deployments and how are they deployed?")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"develop")," branch is autodeployed to its environment. The ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," branch is deployed by the dev team (",(0,o.kt)("inlineCode",{parentName:"p"},"@aminlatifi"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@RamRamez")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@MohammadPCh"),") once there are no new known bugs in the ",(0,o.kt)("inlineCode",{parentName:"p"},"develop")," branch. The process is manual and there is a deployment procedure."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What is the release cycle frequency?")),(0,o.kt)("p",null," There is new release every 2 weeks as depicted in the ",(0,o.kt)("a",{parentName:"p",href:"#product-development-testing-fig-release"},"product development cycle gant chart"),"."))}u.isMDXComponent=!0}}]);