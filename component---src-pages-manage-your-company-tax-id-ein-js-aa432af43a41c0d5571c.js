(window.webpackJsonp=window.webpackJsonp||[]).push([[24,30],{"1u1j":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("Wbzz"),i=n("vOnD"),l=n("vvhN"),s=n("JBFi"),c=n("dcbx"),p=Object(i.b)(o.Link).withConfig({displayName:"button__Wrapper",componentId:"sc-1hu3mue-0"})(["display:flex;justify-content:center;align-items:center;height:",";width:",";background-color:",";border:2px solid ",";border-radius:50px;color:",";font-family:MarkPro;font-size:16px;line-height:32px;text-align:center;text-decoration:none;white-space:nowrap;position:relative;padding:",";margin:",";transition:background-color 0.3s ease,color 0.3s ease;@media (min-width:768px){margin:",";}&:hover{background-color:",";color:",";.arrow1,.arrow2{transform:translate(3px,-50%);}.arrow1{svg{path{fill:",";}}}.arrow2{svg{path{fill:",";}}}}"],(function(e){return e.height?e.height:"auto"}),(function(e){return e.width?e.width:"auto"}),(function(e){return"primary40"===e.theme||"primary48"===e.theme||"primary56"===e.theme?l.a.orange1:l.a.white}),l.a.orange1,(function(e){return"primary40"===e.theme||"primary48"===e.theme||"primary56"===e.theme?l.a.white:l.a.orange1}),(function(e){return e.padding?e.padding:"primary40"===e.theme||"secondary40"===e.theme?"2px 30px":"primary48"===e.theme||"secondary48"===e.theme?"6px 38px":"primary56"===e.theme||"secondary56"===e.theme?"10px 46px":""}),(function(e){return e.margin?e.margin:""}),(function(e){return e.marginMD?e.marginMD:""}),(function(e){return"primary40"===e.theme||"primary48"===e.theme||"primary56"===e.theme?l.a.white:l.a.orange1}),(function(e){return"primary40"===e.theme||"primary48"===e.theme||"primary56"===e.theme?l.a.orange1:l.a.white}),(function(e){return"primary40"===e.theme||"primary48"===e.theme||"primary56"===e.theme?l.a.orange1:l.a.white}),l.a.white),u=i.b.div.withConfig({displayName:"button__Arrow",componentId:"sc-1hu3mue-1"})(["display:none;align-items:center;justify-content:center;height:12px;width:12px;position:absolute;top:50%;right:16px;transform:translate(0,-50%);transition:transform 0.3s ease;@media (min-width:768px){display:flex;}svg{path{transition:fill 0.3s ease;}}&.arrow1{svg{path{fill:",";}}}&.arrow2{svg{path{fill:",";}}}"],(function(e){return"primary40"===e.theme||"primary48"===e.theme||"primary56"===e.theme?l.a.white:l.a.orange1}),l.a.orange1);t.a=function(e){var t=e.content,n=e.className,a=e.theme,o=e.height,i=e.width,l=e.arrow,d=e.arrow2,m=e.margin,h=e.marginMD,f=e.padding,y=e.right;return r.a.createElement(p,{className:n,to:t.url?t.url:t,height:o,width:i,arrow:l,arrow2:d,theme:a,margin:m,marginMD:h,padding:f},t.text?t.text:t,l&&r.a.createElement(u,{className:"arrow1",theme:a,right:y},r.a.createElement(s.a,null)),d&&r.a.createElement(u,{className:"arrow2"},r.a.createElement(c.a,null)))}},E2cJ:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(s){r=!0,o=s}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return u}));var o=n("q1tI"),i=n.n(o);var l=function(e){var t=Object(o.useRef)();return t.current||(t.current={v:e()}),t.current.v},s=Object(o.createContext)(),c=Object(o.createContext)(),p=function(e){var t=e.state,n=e.children,a=Object(o.useState)(0),r=l((function(){return{tabs:0,panels:0}})),p=t||a;return i.a.createElement(c.Provider,{value:r},i.a.createElement(s.Provider,{value:p},n))},u=function(){var e=r(Object(o.useContext)(s),2),t=e[0],n=e[1],a=Object(o.useContext)(c),i=l((function(){var e=a.tabs;return a.tabs+=1,e})),p=l((function(){return function(){return n(i)}}));return Object(o.useMemo)((function(){return{isActive:t===i,onClick:p}}),[t,p,i])},d=function(){var e=r(Object(o.useContext)(s),1)[0],t=Object(o.useContext)(c);return l((function(){var e=t.panels;return t.panels+=1,e}))===e},m=function(e){var t=e.active,n=e.children;return d()||t?n:null}},EK5L:function(e,t,n){"use strict";var a=n("q1tI");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o=a.createElement("path",{d:"M29.59 11.23v13.28a4 4 0 01-.44 1.84 3.35 3.35 0 01-1.47.35H4.82a3.68 3.68 0 01-3.54-3.81V9.6a4 4 0 01.43-1.81 3.28 3.28 0 011.49-.36h22.86a3.68 3.68 0 013.53 3.8z",fill:"#fff"}),i=a.createElement("path",{clipRule:"evenodd",d:"M31.21 9.6v13.29a3.84 3.84 0 01-2.06 3.46 3.35 3.35 0 01-1.47.35H4.82a3.68 3.68 0 01-3.54-3.81V9.6a4 4 0 01.43-1.81 3.51 3.51 0 013.11-2h22.86a3.68 3.68 0 013.53 3.81z",stroke:"#1D1D1B",strokeWidth:1.4,strokeLinecap:"round",strokeLinejoin:"round"}),l=a.createElement("path",{d:"M18.62 16.25h8.51M18.62 20.83h8.51M7 13.36a2.73 2.73 0 012.66-2.67h.66a2.74 2.74 0 011.38 5.05c-.91.58-2.67.81-2.72 2.67v1.17M8.92 21.58v.24",stroke:"#1D1D1B",strokeWidth:1.4,strokeLinecap:"round",strokeLinejoin:"round"});t.a=function(e){return a.createElement("svg",r({width:32,height:32,fill:"none"},e),o,i,l)}},IPhN:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("vOnD").b.div.withConfig({displayName:"h3-text__Wrapper",componentId:"njrw2y-0"})([""]);t.a=function(e){var t=e.className,n=e.content;return r.a.createElement(o,{className:t},n.header&&r.a.createElement("h3",null,n.header),n.text&&r.a.createElement("p",null,n.text))}},IeLH:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("Bl7J"),i=n("vrFN"),l=n("1u1j"),s=n("I95+"),c=n("vOnD"),p=n("+EVf"),u=n("4ePV"),d=n("H0Ff"),m=n("vvhN"),h=n("/e4F"),f=n("+e4l"),y=n("EK5L"),g=n("m4/u"),b=n("xVvc"),x=n("QWzL"),w=n("aYt9"),E=n("IPhN"),v=n("bfge"),I=c.b.div.withConfig({displayName:"color-box__Wrapper",componentId:"sc-1itcyy6-0"})(["background-color:",";border-radius:5px 50px 50px 5px;padding:",";h4{padding-bottom:",";}p{font-size:16px;line-height:24px;color:",";padding-bottom:0;}ul{list-style:none;li{font-family:Avenir,sans-serif;font-size:16px;line-height:24px;color:#63666E;padding-left:26px;position:relative;&::before{content:'';height:4px;width:4px;background-color:",";border-radius:50%;position:absolute;top:9px;left:6px;}&:not(:last-child){margin-bottom:12px;}}}svg{position:absolute;left:44px;}"],(function(e){return e.color?e.color:""}),(function(e){return e.Icon?"40px 40px 40px 112px":"40px"}),(function(e){return e.Icon?"16px":"24px"}),v.a.grey1,(function(e){return e.dotsColor?e.dotsColor:""})),N=function(e){var t=e.className,n=e.color,a=e.Icon,o=e.dotsColor,i=e.content;return r.a.createElement(I,{className:t,color:n,Icon:a,dotsColor:o},a&&r.a.createElement(a,null),i.header&&r.a.createElement("h4",null,i.header),i.text&&r.a.createElement("p",null,i.text),i.list&&r.a.createElement("ul",null,i.list.map((function(e){return r.a.createElement("li",null,e)}))))},C=n("7cWy"),F=c.b.div.withConfig({displayName:"curve__Wrapper",componentId:"m3fwf7-0"})(["height:25px;width:29px;svg{path{fill:","}}"],(function(e){return e.color?e.color:""})),D=function(e){var t=e.className,n=e.color;return r.a.createElement(F,{className:t,color:n},r.a.createElement(C.a,null))},j=c.b.div.withConfig({displayName:"h4-text-c__Wrapper",componentId:"sc-1q2lg5e-0"})(["position:relative;margin-top:16px;.curve{position:absolute;top:-24px;right:-29px;path{fill:","}}"],(function(e){return e.curveColor?e.curveColor:""})),k=function(e){var t=e.className,n=e.Icon,a=e.color,o=e.dotsColor,i=e.curve,l=e.curveColor,s=e.content;return r.a.createElement(j,{className:t},i&&r.a.createElement(D,{className:"curve",color:l}),r.a.createElement(N,{color:a,dotsColor:o,Icon:n,content:s}))},_=n("qcxv"),A=c.b.section.withConfig({displayName:"manage-your-company-tax-id-ein__BusinessOwnerResponsibilities",componentId:"sc-1g9vy70-0"})(["position:relative;padding-top:75px;padding-bottom:64px;h3,p{max-width:100%;padding-bottom:24px;}h3{&.pt32{padding-top:32px;}&.pt48{padding-top:48px;}}p{&.pb32{padding-bottom:32px;}&.pb40{padding-bottom:40px;}}.colorbox{margin-bottom:48px;}"]),q=c.b.section.withConfig({displayName:"manage-your-company-tax-id-ein__RequirementsByState",componentId:"sc-1g9vy70-1"})(["background-image:",";padding-top:100px;.wrapper{display:flex;flex-direction:column;align-items:center;}.help{padding-bottom:150px;}.numericlist{display:grid;grid-template-columns:270px 270px;grid-gap:30px;list-style:none;margin-top:24px;li{position:relative;padding-left:52px;font-family:Avenir,sans-serif;font-size:16px;line-height:24px;color:",";svg{position:absolute;top:0;left:0;}}}"],m.b.blue3,m.a.grey2),L=c.b.div.withConfig({displayName:"manage-your-company-tax-id-ein__Buttonsbox",componentId:"sc-1g9vy70-2"})(["display:flex;flex-direction:column;@media (min-width:768px){flex-direction:row;}"]),S=(c.b.div.withConfig({displayName:"manage-your-company-tax-id-ein__Boxes",componentId:"sc-1g9vy70-3"})(["display:flex;flex-direction:column;align-items:stretch;padding-top:72px;@media (min-width:768px){flex-direction:row;}.box{width:100%;box-shadow:",";padding:40px 48px;.icon{display:flex;justify-content:center;align-items:center;height:120px;width:120px;margin:0 auto 60px;.gatsby-image-wrapper{height:100%;width:100%;img{object-fit:contain !important;}}}h4{padding-bottom:16px;}p{font-size:16px;line-height:24px;color:",";}}.circle{align-self:center;height:30px;width:100%;max-width:30px;position:relative;& > span{display:flex;justify-content:center;align-items:center;height:96px;width:96px;background-color:",";box-shadow:inset ",";box-shadow:inset 0 0 32px 0 rgba(236,236,236,0.4);border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(90deg);@media (min-width:768px){transform:translate(-50%,-50%) rotate(0);}}}"],h.a.white1,m.a.grey1,m.a.white,h.a.white1),c.b.div.withConfig({displayName:"manage-your-company-tax-id-ein__FAQ",componentId:"sc-1g9vy70-4"})(["padding-top:75px;.wrapper{display:flex;flex-direction:column;align-items:center;}"])),W={header:"Federal Employer Identification Number (EIN) / Tax ID Number",text:"Understanding What, Where, When & Hows of Your Business EIN",button:[{text:"Order now",url:"https://www.incfile.com/ein-form.php"}]},O={items:[{text:"The SS4 is the IRS form required to obtain an EIN (Employer Identification Number, frequently called a Tax ID number). The EIN/Tax ID number can be thought of as a Social Security Number for your business. It is usually required to open a bank account in the name of the business and to properly pay and account for any wage/payroll employees of your company. IncFile will obtain your federal EIN electronically and have it back to you via email within one business day."},{header:"Do You Need a Federal EIN for Your Business Entity?",text:"In general, unless your business is a sole proprietorship with no employees and no separate legal entity for your business, you need to get an EIN. Sometimes if you own an LLC and it is a single-member LLC with simple accounting, you can get by just using your personal Social Security Number for tax purposes and for receiving payments from clients. But even the simplest businesses can generally benefit from using an EIN – the EIN serves as a tax ID for your LLC or other corporate entity."},{header:"Where & When You'll Use an EIN",text:"Your EIN is necessary for several situations in running your business. \n      You will need to use your EIN for certain tax forms, such as filing your tax returns for your business, \n      and filling out W9 forms for clients (if you run a service business), and other forms related to managing payroll for your employees. \n      Your EIN is also necessary to set up a business bank account and apply for business loans. \n      The same types of reasons for needing a Social Security Number in your personal life are also the reasons to use an EIN in managing your business."},{header:"How Do You Get an EIN? Apply for an EIN Online",text:"Business owners can get an EIN by filing IRS Form SS-4. IncFile offers a convenient service to help you apply for an EIN online to obtain your EIN number quickly and efficiently. \n      If you're looking for a way to get an EIN, whether in Texas, Florida, Michigan or anywhere in the United States, IncFile can provide one for you in one day. Apply for an EIN online with IncFile, \n      and we'll obtain your federal tax ID electronically and have your new EIN back to you via email within one business day."}]},z={items:[{header:"What is an Employer Identification Number (EIN)?",text:"Also known as a “Tax ID number,” the EIN is a business federal tax ID that works like a Social Security Number for your business. Your EIN helps you file tax returns for your business, is typically required to open a business bank account under the name of your business, helps you properly pay and account for wages and payroll for your company’s employees, and otherwise helps establish credit for your business and maintain your business’s official standing as a legal business entity."},{header:"What is an Employer Identification Number (EIN)?",list:["Partnerships: an EIN is required for all general partnerships and limited partnerships.","Multiple-member LLCs: This type of business entity needs an EIN regardless of whether you have employees.","Single-member LLCs: If you plan to hire employees within the next 12 months, you will need to get an EIN. And even if your single-member LLC has no employees, and even if you can get by with using your own individual Social Security Number for tax purposes, it’s still a good idea to get an EIN because many banks and lenders will prefer to use an EIN to do business with you.","LLC taxed as a Corporation: If your LLC chooses to be taxed as a Corporation (for example, by electing to be treated as an S-Corporation for tax purposes), you will need to get an EIN.","Sole proprietorship with employees: Even if you do not have an LLC or any other legal entity for your business and you run a simple sole proprietorship, you still need to get an EIN if you have employees or plan to hire employees in the next 12 months."]}]},T={items:[{question:"Will I need an EIN in order to obtain a business account with a bank?",answer:"Yes, under most circumstances business entities other than DBA's must present an EIN along with the filed Articles of Organization or Incorporation in order for an account to be opened."},{question:"What circumstances require me to change my EIN?",answer:"If you already have an EIN, and the organization or ownership of your business changes, you may need to apply for a new number. Some of the circumstances under which a new number is required are as follows:"},{question:"When will I receive my Federal Employer Identification Number?",answer:"If it is a stand alone order for an existing entity we can obtain and email the EIN within 1 business day.",list:["An existing business is purchased or inherited by an individual who will operate it as a sole proprietorship.","A sole proprietorship changes to an LLC, corporation, or partnership.","A partnership changes to an LLC, corporation, or sole proprietorship.","A corporation changes to an LLC, partnership, or sole proprietorship.","An LLC changes to a corporation, partnership, or sole proprietorship.","An individual owner dies, and the estate takes over the business."]},{question:"What is the SS4/EIN/Tax ID Number?",answer:"The SS4 is the IRS form required to obtain an EIN (Employer Identification Number, frequently called a Tax ID number). The EIN/Tax ID number can be thought of as a Social Security Number for your business. It is usually required to open a bank account in the name of the business and to properly pay and account for any wage/payroll employees of your company."}]},M=r.a.createElement(w.a,{headline:"TAX ID / EIN",price:"70",image:"clock"});t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation",description:"Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing."}),r.a.createElement(p.a,{imageName:"mrs-bulb-tax-number",imageAlt:"Mrs Bulb with numbers"},r.a.createElement("h1",null,W.header),r.a.createElement("p",null,W.text),r.a.createElement(L,null,r.a.createElement(l.a,{content:W.button[0],theme:"primary56",width:"200px",arrow:!0}))),r.a.createElement(A,null,r.a.createElement(u.a,{image:"envelope",paddingTop:"60"},r.a.createElement(E.a,{content:O.items[0]}),r.a.createElement(k,{className:"colorbox",icon:y.a,color:m.a.orange3,curve:!0,curveColor:m.a.blue1,content:z.items[0]}),r.a.createElement(E.a,{content:O.items[1]}),r.a.createElement(k,{className:"colorbox",color:m.a.green3,dotsColor:m.a.green1,content:z.items[1]}),r.a.createElement(E.a,{content:O.items[2]}),r.a.createElement(E.a,{content:O.items[3]}),r.a.createElement(_.a,null,"Apply for an EIN online to obtain your EIN number quickly"))),r.a.createElement(q,null,r.a.createElement(f.a,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement(g.a,{className:"help",headlineWidth:"450",object:M},r.a.createElement("h2",null,"Help Obtain a EIN / Tax ID Number"),r.a.createElement("h4",null,"Save your time. We'll handle the paperwork."),r.a.createElement("p",null,"If you would like to use our services to facilitate the filing of your Tax ID / EIN please place the order and a representative from IncFile will contact you to obtain specific information required to complete and file the Tax ID / EIN in your state of formation."))))),r.a.createElement(S,null,r.a.createElement(f.a,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement(s.a,{headline:"Common questions about filing a Certificate of Good Standing"}),r.a.createElement(b.default,{faq:T})))),r.a.createElement(x.a,null),r.a.createElement(d.a,null))}},bfge:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={black:"#1D1D1D",grey1:"#4E4E4E",grey2:"#7A7A7A",grey3:"#DDDDDD",grey4:"#F4F4F4",grey5:"#FCFCFC",white:"#ffffff",babyblue1:"#A6D5E9",blue1:"#5089FD",green1:"#97E0C7",orange1:"#FD8550",purple1:"#C8A3EC",red1:"#F1A0A0",yellow1:"#F3D699",babyblue2:"#E0F4FD",blue2:"#D2E0FE",green2:"#D5F3E8",orange2:"#FCE7D0",purple2:"#EDE0FA",red2:"#F5CDCD",yellow2:"#FAEFC8",babyblue3:"#EEF9FE",blue3:"#F2F6FF",green3:"#F2F8F3",orange3:"#FEF6ED",purple3:"#FAF2F8",red3:"#FCEFEF",yellow3:"#FEF7E0"}},"m4/u":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("vOnD"),i=o.b.div.withConfig({displayName:"left-content-right-object__Wrapper",componentId:"sc-7j6uhz-0"})(["display:flex;flex-direction:column;width:100%;@media(min-width:768px){flex-direction:row;}"]),l=o.b.div.withConfig({displayName:"left-content-right-object__Content",componentId:"sc-7j6uhz-1"})(["display:flex;flex-direction:column;justify-content:center;@media (min-width:768px){width:60%;max-width:700px;padding-right:100px;}h2{max-width:","px;}p{max-width:","px;}h2{text-align:left;padding-bottom:56px;}h4{padding-bottom:24px;}p{padding-bottom:24px;}"],(function(e){return e.headlineWidth?e.headlineWidth:""}),(function(e){return e.textWidth?e.textWidth:""})),s=o.b.div.withConfig({displayName:"left-content-right-object__Objectbox",componentId:"sc-7j6uhz-2"})(["display:flex;align-items:center;@media (min-width:768px){width:40%;}"]);t.a=function(e){var t=e.children,n=e.className,a=e.object,o=e.headlineWidth,c=e.textWidth;return r.a.createElement(i,{className:n},r.a.createElement(l,{headlineWidth:o,textWidth:c},t),r.a.createElement(s,null,a))}},xVvc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("Wbzz"),i=n("vOnD"),l=n("E2cJ"),s=n("ZMKu"),c=n("vvhN"),p=n("xjTF"),u=n("eH7y"),d=n("AZup"),m=i.b.div.withConfig({displayName:"accordion__Wrapper",componentId:"sc-1cq2zsm-0"})(["display:flex;width:100%;position:relative;margin-top:80px;@media (min-width:768px){width:auto;padding:25px 29px 0;}"]),h=i.b.div.withConfig({displayName:"accordion__Curve",componentId:"sc-1cq2zsm-1"})(["height:25px;width:25px;position:absolute;top:-16px;left:-13px;@media (min-width:768px){top:0;left:0;}"]),f=i.b.div.withConfig({displayName:"accordion__TabsWrapper",componentId:"sc-1cq2zsm-2"})(["display:flex;flex-direction:column;width:100%;max-width:770px;"]),y=i.b.div.withConfig({displayName:"accordion__TabBox",componentId:"sc-1cq2zsm-3"})(["box-shadow:0 24px 32px 0 rgba(236,236,236,0.5);margin-bottom:8px;.accordion-panel{overflow:hidden;}"]),g=i.b.div.withConfig({displayName:"accordion__PanelWrapper",componentId:"sc-1cq2zsm-4"})(["display:flex;flex-direction:column;background:#fff;margin-bottom:7px;padding:15px;z-index:1;@media (min-width:768px){padding:24px 40px 40px 80px;}h3{margin-bottom:48px;}p,li{color:",";font-family:Avenir,sans-serif;max-width:650px;text-align:left;}p{font-size:16px;line-height:24px;a{color:",";font-size:inherit;line-height:inherit;text-decoration:none;}}li{font-size:14px;line-height:19px;}ul{padding-left:16px;li{padding-top:16px;}}"],c.a.grey1,c.a.orange1),b=i.b.button.withConfig({displayName:"accordion__Button",componentId:"sc-1cq2zsm-5"})(["height:80px;width:100%;line-height:80px;color:#4e4e4e;background:#fff;display:flex;cursor:pointer;position:relative;border-radius:5px;overflow:hidden;border:none;&.active{border-radius:5px 5px 0 0;font-weight:600;svg{transform:rotate(0deg);}}"]),x=i.b.div.withConfig({displayName:"accordion__Content",componentId:"sc-1cq2zsm-6"})(["display:flex;justify-content:space-between;align-items:center;flex-grow:1;padding-right:40px;span{color:#4e4e4e;font-family:Avenir;font-size:16px;}"]),w=i.b.div.withConfig({displayName:"accordion__Icon",componentId:"sc-1cq2zsm-7"})(["display:flex;align-items:center;justify-content:center;height:80px;width:80px;opacity:0.75;svg{transform:rotate(180deg);transition:transform 0.3s ease;}"]),E=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")},v=function(e){var t=e.children,n=Object(l.d)(),a=n.isActive,o=n.onClick;return r.a.createElement(b,{className:E("accordion-tab",a&&"active"),onClick:o},t)},I={hidden:{height:0},visible:{height:"auto"}},N=function(e){var t=e.children,n=Object(l.c)();return r.a.createElement(s.a.div,{className:"accordion-panel",animate:n?"visible":"hidden",transition:{ease:"easeOut",duration:.3},variants:I},t)};t.default=function(e){var t=e.faq;return r.a.createElement(d.a,{partialVisibility:!0,once:!0},(function(e){var n=e.isVisible;return r.a.createElement(m,{className:n?"slideUp enter":"slideUp"},r.a.createElement(h,null,r.a.createElement(u.a,null)),r.a.createElement(l.b,null,r.a.createElement(f,null,t.items.map((function(e){return r.a.createElement(y,null,r.a.createElement(v,null,r.a.createElement(w,null,r.a.createElement(p.a,null)),r.a.createElement(x,null,r.a.createElement("span",null,e.question))),r.a.createElement(N,null,r.a.createElement(g,null,console.log(typeof e.answer),"string"==typeof e.answer?r.a.createElement("p",null,e.answer):null,"object"==typeof e.answer?r.a.createElement("p",null,e.answer.map((function(e,t){return t%2?r.a.createElement(o.Link,{to:e.url}," "+e.text+" "):e.text}))):null,e.list&&r.a.createElement("ul",null,e.list.map((function(e){return r.a.createElement("li",null,e)}))))))})))))}))}}}]);
//# sourceMappingURL=component---src-pages-manage-your-company-tax-id-ein-js-aa432af43a41c0d5571c.js.map