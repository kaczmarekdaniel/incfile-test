(window.webpackJsonp=window.webpackJsonp||[]).push([[36,45],{E2cJ:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(s){r=!0,i=s}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return u}));var i=n("q1tI"),o=n.n(i);var l=function(e){var t=Object(i.useRef)();return t.current||(t.current={v:e()}),t.current.v},s=Object(i.createContext)(),c=Object(i.createContext)(),d=function(e){var t=e.state,n=e.children,a=Object(i.useState)(0),r=l((function(){return{tabs:0,panels:0}})),d=t||a;return o.a.createElement(c.Provider,{value:r},o.a.createElement(s.Provider,{value:d},n))},u=function(){var e=r(Object(i.useContext)(s),2),t=e[0],n=e[1],a=Object(i.useContext)(c),o=l((function(){var e=a.tabs;return a.tabs+=1,e})),d=l((function(){return function(){return n(o)}}));return Object(i.useMemo)((function(){return{isActive:t===o,onClick:d}}),[t,d,o])},p=function(){var e=r(Object(i.useContext)(s),1)[0],t=Object(i.useContext)(c);return l((function(){var e=t.panels;return t.panels+=1,e}))===e},m=function(e){var t=e.active,n=e.children;return p()||t?n:null}},JZ7b:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("Bl7J"),o=n("vrFN"),l=n("Wdr8"),s=n("ZXdF"),c=n("MZ2l"),d=n("I95+"),u=n("vOnD"),p=n("qcxv"),m=n("AZup"),g=u.b.div.withConfig({displayName:"heading-left__Wrapper",componentId:"mj8p4g-0"})(["display:flex;flex-direction:column;justify-content:center;h2,p,a{text-align:left;}h2{max-width:","px;margin-bottom:24px;}p{max-width:","px;margin-bottom:24px;}a{margin-bottom:24px;}"],(function(e){return e.headlineWidth?e.headlineWidth:"610"}),(function(e){return e.textWidth?e.textWidth:"750"})),h=function(e){var t=e.headline,n=e.headlineWidth,a=e.text,i=e.textWidth,o=e.linkText,l=e.linkUrl;return r.a.createElement(g,{headlineWidth:n,textWidth:i},t&&r.a.createElement(m.a,{partialVisibility:!0,once:!0},(function(e){var n=e.isVisible;return r.a.createElement("h2",{className:n?"slideUp enter":"slideUp"},t)})),a&&r.a.createElement(m.a,{partialVisibility:!0,once:!0},(function(e){var t=e.isVisible;return r.a.createElement("p",{className:t?"slideUp enter":"slideUp"},a)})),o&&r.a.createElement(m.a,{partialVisibility:!0,once:!0},(function(e){var t=e.isVisible;return r.a.createElement(p.a,{href:l,className:t?"slideUp enter":"slideUp"},o)})))},f=n("+EVf"),y=n("4ePV"),w=n("H0Ff"),v=n("vvhN"),b=n("+e4l"),x=n("Uwy9"),E=(n("0Xjs"),n("QWzL")),A=(n("aYt9"),n("oSDl")),I=(n("ufX1"),n("xVvc")),k=n("xNyn"),C=u.b.section.withConfig({displayName:"manage-your-company-registered-agent__BusinessOwnerResponsibilities",componentId:"sc-2difjw-0"})(["position:relative;padding-top:75px;padding-bottom:64px;h3,p{max-width:100%;padding-bottom:24px;}h3{&.pt32{padding-top:32px;}&.pt48{padding-top:48px;}}p{&.pb32{padding-bottom:32px;}&.pb40{padding-bottom:40px;}}.colorbox{margin-bottom:48px;}"]),N=u.b.div.withConfig({displayName:"manage-your-company-registered-agent__Service",componentId:"sc-2difjw-1"})(["background-color:",";padding:64px 0;"],v.a.babyblue3),W=u.b.section.withConfig({displayName:"manage-your-company-registered-agent__RequirementsByState",componentId:"sc-2difjw-2"})(["padding-top:100px;.wrapper{display:flex;flex-direction:column;align-items:center;& > p{width:100%;max-width:770px;text-align:left;padding-top:48px;}}"]),_=u.b.div.withConfig({displayName:"manage-your-company-registered-agent__OrangeBackground",componentId:"sc-2difjw-3"})(["background-image:",";"],v.b.orange3),R=u.b.div.withConfig({displayName:"manage-your-company-registered-agent__Imageboxes",componentId:"sc-2difjw-4"})(["padding-top:112px;padding-bottom:92px;& > h4{text-align:center;}& > p{width:100%;max-width:770px;margin:0 auto;padding-bottom:32px;}.wrapper{display:grid;grid-template-columns:1fr;grid-gap:30px;width:100%;max-width:970px;padding:40px 0;margin:0 auto;@media(min-width:769px){grid-template-columns:1fr 1fr;}}"]),j=u.b.div.withConfig({displayName:"manage-your-company-registered-agent__FAQ",componentId:"sc-2difjw-5"})(["padding-top:75px;.wrapper{display:flex;flex-direction:column;align-items:center;}"]),q=u.b.div.withConfig({displayName:"manage-your-company-registered-agent__AdventagesBox",componentId:"sc-2difjw-6"})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:30px;width:100%;max-width:970px;padding:140px 0;margin:0 auto;"]),z={items:[{headline:"Handling all of Your Documents",text:"An always-available Registered Agent who will receive state and IRS mail correspondence, documents and legal proceedings on your LLC’s or corporation’s behalf"},{headline:"Online Dashboard",text:"A digital dashboard where you can access, store and retrieve any information we’ve received for your business"},{headline:"Tailored Notifications",text:"Email and SMS notification whenever we receive documents for your business"},{headline:"Automatic Mail Forwarding",text:"Automatic mail forwarding of all legal correspondence, documentation and information directly to you."},{headline:"First Year Free",text:"The first year free ($119 a year after), when you incorporate with Incfile through any of our business packages."}]},S={items:[{question:"How will I be notified if service of process is received?",answer:"Your service will be managed through the Registered Agent Dashboard any service of process that is received by us will be uploaded to the dashboard and an email notification will sent informing you that the documents have been uploaded to your account."},{question:"How will I know when it is time to renew my Registered Agent?",answer:"The Registered Agent service is renewed annually. An email with renewal instructions will be sent one month prior to the due date. The service may be renewed anytime through the Registered Agent Dashboard."},{question:"How much will it cost to renew my Registered Agent service?",answer:"The annual fee for the Registered Agent service is $119."},{question:"Who will be responsible for updating the Registered Agent information with the state?",answer:"Filing the Change of Agent for your company will be offered within the order process. If you select this option the state fee will be added to the cost of the Registered Agent service. If you elect to not have us update the Registered Agent on file it will be your responsibility to submit the necessary paperwork."},{question:"What is the name and address of my Registered Agent?",answer:"The Registered Agent information will be listed in the confirmation email. It may also be obtained by logging into the Registered Agent Dashboard after the order is placed."},{question:"What happens if I require the signature of the Registered Agent?",answer:"If the signature of the Registered Agent is required please contact our support staff for assistance. We are typically able to return the signed documents to our clients electronically however some states require original signatures on official documents. If an original signature is required we will mail you the signed documents."}]};t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation",description:"Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing."}),r.a.createElement(f.a,{imageName:"mrs-bulb-registered-agent",imageAlt:"Mrs Bulb register agent service holding a phone"},r.a.createElement("h1",null,"Registered Agent Service"),r.a.createElement("p",null,"Dependable, Easy, and Free for the First Year When You Incorporate with Incfile. A nationwide Registered Agent service provider you can trust at an affordable price. Available in all U.S. states."),r.a.createElement(l.a,null,r.a.createElement(s.a,{to:"#",theme:"primary56",width:"200px",arrow:!0},"Order Now"))),r.a.createElement(C,null,r.a.createElement(y.a,{image:"chart",paddingTop:"60"},r.a.createElement("p",null,"Doing business is complicated enough. A Registered Agent service gives you the convenience, reassurance and accountability to help manage your vital legal documents and avoid complications or errors."),r.a.createElement(c.a,{className:"colorbox",theme:"icon",Icon:x.a,color:v.a.orange3,curve:!0,curveColor:v.a.orange1},r.a.createElement("h4",null,"Why Should You Incorporate with Incfile"),r.a.createElement("p",null,"Signing up for the Incfile Registered Agent service also gives you access to your own business dashboard, so when you’re ready to form your business, or even just register a DBA, it’s all at your fingertips! We’re making it easy, so you can focus on the important things.")),r.a.createElement("p",null,"And why is your first year free if you incorporate with Incfile? We care about growing entrepreneurship, because we’re entrepreneurs ourselves. We don’t want anything to stop you getting started."),r.a.createElement("h3",{className:"pt48"},"Does My Business Need a Registered Agent?"),r.a.createElement("p",null,"Yes. Every LLC or corporation is required to have an official Registered Agent (sometimes called a statutory agent, resident agent or agent for service of process) in each state where it does business. A Registered Agent serves as a permanent physical presence in the state, and the Registered Agent address is where the state government can contact you with legal and tax correspondence, including franchise tax forms, notices of litigation and required annual report forms."),r.a.createElement("h3",{className:"pt48"},"Why Use a Registered Agent Service?"),r.a.createElement("p",null,"Registered Agent services like the one offered by Incfile help you avoid the hassles and inconvenience of managing all of your own documentation from the state. They also help preserve your privacy by setting up a public-facing address for your business that is separate from your home. When you use a Registered Agent service, any official legal or tax correspondence will be forwarded to your personal, private contact address. Incfile’s Registered Agent service also helps you stay on top of deadlines (such as required annual reports) to keep your business in good standing."))),r.a.createElement(N,null,r.a.createElement(b.a,null,r.a.createElement(d.a,{headline:"Incfile’s Resident Agent Service Includes",headlineWidth:"950"}),r.a.createElement(q,null,z.items.map((function(e){return r.a.createElement(k.a,{headline:e.headline,text:e.text})}))),r.a.createElement(d.a,{headline:"Registered Agent Service",text:"A good Registered Agent service can help you respond quickly in the event of a lawsuit, avoid missed deadlines,  fines and penalties for non-compliance, and otherwise manage the details of paperwork so you can focus on running your business.  Set yourself up for success with a Registered Agent looking out for you. Join the Incfile community of entrepreneurs.",linkText:"Learn more",linkUrl:"#",headlineWidth:"700"}))),r.a.createElement(W,null,r.a.createElement(b.a,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement(h,{headline:"Why Is Incfile Offering a Free Registered Agent?",text:"Incfile already offers free LLC and other business formation—why is a free Registered Agent, included, too? Generally brands seek to find ways to charge you more for products and services.  Incfile approaches things differently. Why? Because we care greatly about nurturing and supporting entrepreneurship.  We believe entrepreneurs are the driving force behind our economy's growth by creating clever solutions to solve the world's problems.",headlineWidth:"770"}),r.a.createElement(R,null,r.a.createElement("h4",null,"The Incfile package"),r.a.createElement("div",{className:"wrapper"},r.a.createElement(A.a,{image:"free-business",color:v.a.orange3},r.a.createElement("h4",null,"Free business formation"),r.a.createElement("p",null,"We offer forming your LLC or a corporation free of charge. We take care of the paperwork while you can focus on running your business!")),r.a.createElement(A.a,{image:"free-agent",color:v.a.purple3},r.a.createElement("h4",null,"Free registered agent"),r.a.createElement("p",null,"Incfile’s registered agent service cover all areas like filing forms to the IRS or receiving government communication."))),r.a.createElement("p",null,"Our radical offerings like $0 business formation and a free Registered Agent with incorporation are a direct result of client loyalty. Because we have loyal clients like you, we’re able to continue to grow our business and improve efficiencies with our technology. That means we can offer the best value around. Why would we do that? Because entrepreneurship is our M.O."),r.a.createElement("p",null,"We’re entrepreneurs for entrepreneurs."))))),r.a.createElement(_,null,r.a.createElement(j,null,r.a.createElement(b.a,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement(d.a,{headline:"Common questions about establishing Registered Agent service",headlineWidth:"750"}),r.a.createElement(I.default,{faq:S})))),r.a.createElement(E.a,null)),r.a.createElement(w.a,null))}},Uwy9:function(e,t,n){"use strict";var a=n("q1tI");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i=a.createElement("path",{d:"M30.08 18.18L26.3 29.51a2.498 2.498 0 01-.36.71c-.212.057-.43.084-.65.08H3.21a1.52 1.52 0 01-1.51-1.51V13.73a.57.57 0 010-.13c.126-.04.258-.061.39-.06h6.29v-.07c.255-.458.571-.878.94-1.25.28-.32.57-.62.8-.91a55.104 55.104 0 004-5.38c.86-1.4 1.45-3.29 3.24-3.58.16-.016.32-.016.48 0a3 3 0 013 3.7s-.45 1.26-2.19 5.18c-.73 1.65.45 1.6 2.47 2l6 1c2.39.19 3.57 1.94 2.96 3.95z",fill:"#fff"}),o=a.createElement("path",{clipRule:"evenodd",d:"M10 12.22V30.3H3.21a1.52 1.52 0 01-1.51-1.51V13.73a.57.57 0 010-.13 1.5 1.5 0 011.5-1.38H10zM32 16.86l-3.78 11.33a3.07 3.07 0 01-2.28 2c-.212.057-.43.084-.65.08H10V13.53c0-.479.109-.95.32-1.38A15.84 15.84 0 0112.06 10a55.207 55.207 0 004-5.38c.44-.72.81-1.57 1.32-2.26A2.8 2.8 0 0119.83 1a3 3 0 013 3.7s-.47 1.3-2.21 5.17c-.73 1.65.46 1.6 2.47 2l6 1c2.34.23 3.51 1.98 2.91 3.99z",stroke:"#1D1D1B",strokeWidth:1.4,strokeLinecap:"round",strokeLinejoin:"round"}),l=a.createElement("path",{d:"M5.85 24.27v3.44",stroke:"#1D1D1B",strokeWidth:1.4,strokeLinecap:"round",strokeLinejoin:"round"});t.a=function(e){return a.createElement("svg",r({width:33,height:31,fill:"none"},e),i,o,l)}},"Y+kd":function(e,t,n){"use strict";n("Z2Ku"),n("L9s1"),n("dRSK");var a=n("fzJm"),r=n("q1tI"),i=n.n(r),o=n("Wbzz"),l=n("9eSz"),s=n.n(l);t.a=function(e){return i.a.createElement(o.StaticQuery,{query:"1938523414",render:function(t){var n=t.images.edges.find((function(t){return t.node.relativePath.includes(e.filename)}));if(!n)return null;var a=n.node.childImageSharp.fluid;return i.a.createElement(s.a,{alt:e.alt,fluid:a})},data:a})}},nQ0c:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("vOnD"),o=n("vvhN"),l=i.b.span.withConfig({displayName:"circle__Wrapper",componentId:"bbx9ay-0"})(["display:flex;justify-content:center;align-items:center;height:",";width:32px;background:",";border-radius:",";overflow:hidden;color:",";font-family:Avenir,sans-serif;font-weight:600;font-size:16px;line-height:24px;border:1px solid ",";pointer-events:none;svg{transform:",";path{fill:",";}}"],(function(e){return"empty"===e.theme?"5px":"32px"}),(function(e){return e.circleColor?e.circleColor:o.a.grey4}),(function(e){return"empty"===e.theme?"2.5px":"50%"}),(function(e){return e.iconColor?e.iconColor:""}),(function(e){return e.border?e.border:"transparent"}),(function(e){return e.transform?e.transform:""}),(function(e){return e.iconColor?e.iconColor:""}));t.a=function(e){var t=e.children,n=e.className,a=e.theme,i=e.height,o=e.width,s=e.transform,c=e.circleColor,d=e.iconColor,u=e.border,p=e.margin,m=e.padding;return r.a.createElement(l,{className:n,theme:a,height:i,width:o,transform:s,circleColor:c,iconColor:d,border:u,margin:p,padding:m},t)}},xNyn:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("vOnD"),o=n("vvhN"),l=n("/e4F"),s=n("Wbzz"),c=n("JBFi"),d=n("nQ0c"),u=n("Y+kd"),p=i.b.div.withConfig({displayName:"adventages__Wrapper",componentId:"sc-15zlie4-0"})(["padding-top:24px;width 100%;@media (min-width:470px){max-width:",";margin:0 auto 30px;}"],(function(e){return e.width?e.width:"470px"})),m=i.b.div.withConfig({displayName:"adventages__Box",componentId:"sc-15zlie4-1"})(["display:flex;flex-direction:column;align-items:center;height:100%;width:100%;max-width:",";padding:48px 40px 40px;position:relative;background-color:",";box-shadow:",";border-radius:20px;h4{width:100%;line-height:27px;}p{margin-top:16px;width:100%;font-size:16px;line-height:24px;}"],(function(e){return e.width}),o.a.white,l.a.white1),g=i.b.span.withConfig({displayName:"adventages__Circle",componentId:"sc-15zlie4-2"})(["display:flex;justify-content:center;align-items:center;height:48px;width:48px;border-radius:50%;background-color:",";box-shadow:",";position:absolute;top:-24px;left:40px;"," span{font-family:Avenir-Heavy,sans-serif;color:white;font-size:16px;line-height:24px;}svg{height:20px;width:20px;fill:none;stroke:",";stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:18;stroke-dashoffset:0;transform:translate3d(0,0,0);z-index:1;}"],(function(e){return e.circleBackgroundColor}),(function(e){return e.circleBackgroundShadow}),(function(e){return e.position&&"center"===e.position&&"left: calc(50% - 24px);"}),(function(e){return e.colorStroke})),h=Object(i.b)(s.Link).withConfig({displayName:"adventages__AdeventageLink",componentId:"sc-15zlie4-3"})(["font-family:Avenir-Heavy,sans-serif;margin-top:24px;display:flex;align-items:center;justify-content:center;> span{margin-left:-32px;}"]),f=function(e){var t=e.className,n=e.headline,a=e.text,i=e.colorStroke,l=e.circleBackgroundColor,s=e.circleBackgroundShadow,f=e.circlePosition,w=e.circleText,v=e.url,b=e.urlText,x=e.style,E=e.width,A=e.imageName;return r.a.createElement(p,{className:t,headline:n,text:a,style:x,width:E},r.a.createElement(m,{width:E},r.a.createElement(g,{position:f,circleBackgroundColor:l,circleBackgroundShadow:s,colorStroke:i},!w&&r.a.createElement("svg",{viewBox:"-1 0 16 12"},r.a.createElement("polyline",{points:"2 6 4.5 9 10.5 3"})),w&&r.a.createElement("span",null,w)),A&&r.a.createElement(y,null,r.a.createElement(u.a,{filename:A})),n&&r.a.createElement("h4",null,n),a&&r.a.createElement("p",null,a),v&&r.a.createElement(h,{to:v},r.a.createElement(d.a,{circleColor:"transparent",iconColor:o.a.blue1},r.a.createElement(c.a,null)),b)))},y=i.b.div.withConfig({displayName:"adventages__ImageWrapper",componentId:"sc-15zlie4-4"})(["width:150px;margin:0 auto 30px;"]);f.defaultProps={colorStroke:o.a.white,circleBackgroundColor:o.a.green1,circleBackgroundShadow:l.a.green1,width:"470px"},t.a=f},xVvc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("Wbzz"),o=n("vOnD"),l=n("E2cJ"),s=n("ZMKu"),c=n("vvhN"),d=n("xjTF"),u=n("eH7y"),p=n("AZup"),m=o.b.div.withConfig({displayName:"accordion__Wrapper",componentId:"sc-1cq2zsm-0"})(["display:flex;width:100%;position:relative;margin-top:80px;@media (min-width:769px){width:auto;padding:25px 29px 0;}"]),g=o.b.div.withConfig({displayName:"accordion__Curve",componentId:"sc-1cq2zsm-1"})(["height:25px;width:25px;position:absolute;top:-16px;left:-13px;@media (min-width:769px){top:0;left:0;}"]),h=o.b.div.withConfig({displayName:"accordion__TabsWrapper",componentId:"sc-1cq2zsm-2"})(["display:flex;flex-direction:column;width:100%;max-width:770px;"]),f=o.b.div.withConfig({displayName:"accordion__TabBox",componentId:"sc-1cq2zsm-3"})(["box-shadow:0 24px 32px 0 rgba(236,236,236,0.5);margin-bottom:8px;.accordion-panel{overflow:hidden;}"]),y=o.b.div.withConfig({displayName:"accordion__PanelWrapper",componentId:"sc-1cq2zsm-4"})(["display:flex;flex-direction:column;background:#fff;margin-bottom:7px;padding:15px;z-index:1;@media (min-width:769px){padding:24px 40px 40px 80px;}h3{margin-bottom:48px;}p,li{color:",";font-family:Avenir,sans-serif;max-width:650px;text-align:left;}p{font-size:16px;line-height:24px;a{color:",";font-size:inherit;line-height:inherit;text-decoration:none;}}li{font-size:14px;line-height:19px;}ul{padding-left:16px;li{padding-top:16px;}}"],c.a.grey1,c.a.orange1),w=o.b.button.withConfig({displayName:"accordion__Button",componentId:"sc-1cq2zsm-5"})(["height:80px;width:100%;line-height:80px;color:#4e4e4e;background:#fff;display:flex;cursor:pointer;position:relative;border-radius:5px;overflow:hidden;border:none;&.active{border-radius:5px 5px 0 0;font-weight:600;svg{transform:rotate(0deg);}}"]),v=o.b.div.withConfig({displayName:"accordion__Content",componentId:"sc-1cq2zsm-6"})(["display:flex;justify-content:space-between;align-items:center;flex-grow:1;padding-right:40px;span{color:#4e4e4e;font-family:Avenir;font-size:16px;}"]),b=o.b.div.withConfig({displayName:"accordion__Icon",componentId:"sc-1cq2zsm-7"})(["display:flex;align-items:center;justify-content:center;height:80px;width:80px;opacity:0.75;svg{transform:rotate(180deg);transition:transform 0.3s ease;}"]),x=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")},E=function(e){var t=e.children,n=Object(l.d)(),a=n.isActive,i=n.onClick;return r.a.createElement(w,{className:x("accordion-tab",a&&"active"),onClick:i},t)},A={hidden:{height:0},visible:{height:"auto"}},I=function(e){var t=e.children,n=Object(l.c)();return r.a.createElement(s.a.div,{className:"accordion-panel",animate:n?"visible":"hidden",transition:{ease:"easeOut",duration:.3},variants:A},t)};t.default=function(e){var t=e.faq;return r.a.createElement(p.a,{partialVisibility:!0,once:!0},(function(e){var n=e.isVisible;return r.a.createElement(m,{className:n?"slideUp enter":"slideUp"},r.a.createElement(g,null,r.a.createElement(u.a,null)),r.a.createElement(l.b,null,r.a.createElement(h,null,t.items.map((function(e){return r.a.createElement(f,null,r.a.createElement(E,null,r.a.createElement(b,null,r.a.createElement(d.a,null)),r.a.createElement(v,null,r.a.createElement("span",null,e.question))),r.a.createElement(I,null,r.a.createElement(y,null,"string"==typeof e.answer?r.a.createElement("p",null,e.answer):null,"object"==typeof e.answer?r.a.createElement("p",null,e.answer.map((function(e,t){return t%2?r.a.createElement(i.Link,{to:e.url}," "+e.text+" "):e.text}))):null,e.list&&r.a.createElement("ul",null,e.list.map((function(e){return r.a.createElement("li",null,e)}))))))})))))}))}}}]);
//# sourceMappingURL=component---src-pages-manage-your-company-registered-agent-js-991f3ec0820482f513d1.js.map