(window.webpackJsonp=window.webpackJsonp||[]).push([[18,28],{C9un:function(e,t,n){"use strict";var i=n("q1tI");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var o=i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 56c15.464 0 28-12.536 28-28S43.464 0 28 0 0 12.536 0 28s12.536 28 28 28z",fill:"#FD8550"}),r=i.createElement("path",{d:"M29.452 21.415a1 1 0 00-1.413-.004l-.656.652a1 1 0 00-.002 1.417l3.794 3.794H20.25a1 1 0 00-1 1v.91a1 1 0 001 1h10.925l-3.794 3.794a1 1 0 00.002 1.417l.657.652a1 1 0 001.412-.003l6.593-6.609a1 1 0 000-1.412l-6.593-6.608z",fill:"#fff"});t.a=function(e){return i.createElement("svg",a({width:56,height:56,fill:"none"},e),o,r)}},E2cJ:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,a=!1,o=void 0;try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done)&&(n.push(r.value),!t||n.length!==t);i=!0);}catch(l){a=!0,o=l}finally{try{i||null==s.return||s.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return u}));var o=n("q1tI"),r=n.n(o);var s=function(e){var t=Object(o.useRef)();return t.current||(t.current={v:e()}),t.current.v},l=Object(o.createContext)(),c=Object(o.createContext)(),p=function(e){var t=e.state,n=e.children,i=Object(o.useState)(0),a=s((function(){return{tabs:0,panels:0}})),p=t||i;return r.a.createElement(c.Provider,{value:a},r.a.createElement(l.Provider,{value:p},n))},u=function(){var e=a(Object(o.useContext)(l),2),t=e[0],n=e[1],i=Object(o.useContext)(c),r=s((function(){var e=i.tabs;return i.tabs+=1,e})),p=s((function(){return function(){return n(r)}}));return Object(o.useMemo)((function(){return{isActive:t===r,onClick:p}}),[t,p,r])},d=function(){var e=a(Object(o.useContext)(l),1)[0],t=Object(o.useContext)(c);return s((function(){var e=t.panels;return t.panels+=1,e}))===e},m=function(e){var t=e.active,n=e.children;return d()||t?n:null}},EK5L:function(e,t,n){"use strict";var i=n("q1tI");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var o=i.createElement("path",{d:"M29.59 11.23v13.28a4 4 0 01-.44 1.84 3.35 3.35 0 01-1.47.35H4.82a3.68 3.68 0 01-3.54-3.81V9.6a4 4 0 01.43-1.81 3.28 3.28 0 011.49-.36h22.86a3.68 3.68 0 013.53 3.8z",fill:"#fff"}),r=i.createElement("path",{clipRule:"evenodd",d:"M31.21 9.6v13.29a3.84 3.84 0 01-2.06 3.46 3.35 3.35 0 01-1.47.35H4.82a3.68 3.68 0 01-3.54-3.81V9.6a4 4 0 01.43-1.81 3.51 3.51 0 013.11-2h22.86a3.68 3.68 0 013.53 3.81z",stroke:"#1D1D1B",strokeWidth:1.4,strokeLinecap:"round",strokeLinejoin:"round"}),s=i.createElement("path",{d:"M18.62 16.25h8.51M18.62 20.83h8.51M7 13.36a2.73 2.73 0 012.66-2.67h.66a2.74 2.74 0 011.38 5.05c-.91.58-2.67.81-2.72 2.67v1.17M8.92 21.58v.24",stroke:"#1D1D1B",strokeWidth:1.4,strokeLinecap:"round",strokeLinejoin:"round"});t.a=function(e){return i.createElement("svg",a({width:32,height:32,fill:"none"},e),o,r,s)}},"m4/u":function(e,t,n){"use strict";var i=n("q1tI"),a=n.n(i),o=n("vOnD"),r=o.b.div.withConfig({displayName:"left-content-right-object__Wrapper",componentId:"sc-7j6uhz-0"})(["display:flex;flex-direction:column;width:100%;@media(min-width:768px){flex-direction:row;}"]),s=o.b.div.withConfig({displayName:"left-content-right-object__Content",componentId:"sc-7j6uhz-1"})(["display:flex;flex-direction:column;justify-content:center;@media (min-width:768px){width:60%;max-width:700px;padding-right:100px;}h2{max-width:","px;}p{max-width:","px;}h2{text-align:left;padding-bottom:56px;}h4{padding-bottom:24px;}p{padding-bottom:24px;}"],(function(e){return e.headlineWidth?e.headlineWidth:""}),(function(e){return e.textWidth?e.textWidth:""})),l=o.b.div.withConfig({displayName:"left-content-right-object__Objectbox",componentId:"sc-7j6uhz-2"})(["display:flex;align-items:center;@media (min-width:768px){width:40%;}"]);t.a=function(e){var t=e.children,n=e.className,i=e.object,o=e.headlineWidth,c=e.textWidth;return a.a.createElement(r,{className:n},a.a.createElement(s,{headlineWidth:o,textWidth:c},t),a.a.createElement(l,null,i))}},nQ0c:function(e,t,n){"use strict";var i=n("q1tI"),a=n.n(i),o=n("vOnD"),r=n("vvhN"),s=o.b.span.withConfig({displayName:"circle__Wrapper",componentId:"bbx9ay-0"})(["display:flex;justify-content:center;align-items:center;height:",";width:32px;background:",";border-radius:",";overflow:hidden;color:",";font-family:Avenir,sans-serif;font-weight:600;font-size:16px;line-height:24px;border:1px solid ",";pointer-events:none;svg{transform:",";path{fill:",";}}"],(function(e){return"empty"===e.theme?"5px":"32px"}),(function(e){return e.circleColor?e.circleColor:r.a.grey4}),(function(e){return"empty"===e.theme?"2.5px":"50%"}),(function(e){return e.iconColor?e.iconColor:""}),(function(e){return e.border?e.border:"transparent"}),(function(e){return e.transform?e.transform:""}),(function(e){return e.iconColor?e.iconColor:""}));t.a=function(e){var t=e.children,n=e.className,i=e.theme,o=e.height,r=e.width,l=e.transform,c=e.circleColor,p=e.iconColor,u=e.border,d=e.margin,m=e.padding;return a.a.createElement(s,{className:n,theme:i,height:o,width:r,transform:l,circleColor:c,iconColor:p,border:u,margin:d,padding:m},t)}},oSDl:function(e,t,n){"use strict";var i=n("q1tI"),a=n.n(i),o=n("vOnD"),r=n("vvhN"),s=n("/e4F"),l=n("tBDR"),c=o.b.div.withConfig({displayName:"top-image-box__Wrapper",componentId:"dtx1hl-0"})(["width:100%;max-width:470px;padding:16px 16px 40px;position:relative;border-radius:5px;background-color:",";box-shadow:",";.top{display:flex;justify-content:center;align-items:center;height:128px;width:100%;background-color:",";border-radius:5px;.gatsby-image-wrapper{height:96px;width:96px;}}h4{padding:24px 24px 16px;}p{font-size:16px;line-height:24px;color:",";padding:0 24px;}"],r.a.white,s.a.white1,(function(e){return e.color?e.color:r.a.white}),r.a.grey1);t.a=function(e){var t=e.className,n=e.image,i=e.color,o=e.children;return a.a.createElement(c,{className:t,color:i},a.a.createElement("div",{className:"top"},n&&a.a.createElement(l.a,{filename:n})),a.a.createElement("div",{className:"content"},o))}},suVG:function(e,t,n){"use strict";n.r(t);n("f3/d");var i=n("q1tI"),a=n.n(i),o=n("Bl7J"),r=n("vrFN"),s=n("ZXdF"),l=n("MZ2l"),c=n("dhGm"),p=n("vOnD"),u=n("+EVf"),d=n("4ePV"),m=n("H0Ff"),h=n("vvhN"),f=n("/e4F"),g=n("+e4l"),w=n("EK5L"),b=n("m4/u"),v=n("xVvc"),x=n("QWzL"),y=n("aYt9"),E=(n("oSDl"),n("C9un"),n("DNaL"),n("yEnY"),n("ufX1")),C=n("nQ0c"),N=n("qcxv"),k=p.b.section.withConfig({displayName:"manage-your-company-dissolution__BusinessOwnerResponsibilities",componentId:"sc-19bc20l-0"})(["position:relative;padding-top:75px;padding-bottom:64px;h3,p{max-width:100%;padding-bottom:24px;}h3{&.pt32{padding-top:32px;}&.pt48{padding-top:48px;}}p{&.pb32{padding-bottom:32px;}&.pb40{padding-bottom:40px;}}.colorbox{margin-bottom:48px;}a{margin-bottom:72px;}.numericlist{list-style:none;margin-bottom:72px;li{position:relative;padding:28px 8px 28px 80px;background-color:",";box-shadow:",";&:first-child{margin-top:8px;}&:not(:last-child){margin-bottom:8px;}.circleicon{position:absolute;top:24px;left:24px;}h5{margin-bottom:24px;}p{font-size:16px;line-height:24px;padding:0;}a{margin-top:24px;}}}"],h.a.white,f.a.white1),I=p.b.section.withConfig({displayName:"manage-your-company-dissolution__RequirementsByState",componentId:"sc-19bc20l-1"})(["background-image:",";padding-top:100px;.wrapper{display:flex;flex-direction:column;align-items:center;}.help{padding-bottom:150px;}.numericlist{display:grid;grid-template-columns:270px 270px;grid-gap:30px;list-style:none;margin-top:24px;li{position:relative;padding-left:52px;font-family:Avenir,sans-serif;font-size:16px;line-height:24px;color:",";svg{position:absolute;top:0;left:0;}}}"],h.b.blue3,h.a.grey2),_=p.b.div.withConfig({displayName:"manage-your-company-dissolution__Buttonsbox",componentId:"sc-19bc20l-2"})(["display:flex;flex-direction:column;@media (min-width:768px){flex-direction:row;}"]),A=(p.b.div.withConfig({displayName:"manage-your-company-dissolution__Boxes",componentId:"sc-19bc20l-3"})(["display:flex;flex-direction:column;align-items:stretch;padding-top:72px;@media (min-width:768px){flex-direction:row;}.box{width:100%;box-shadow:",";padding:40px 48px;.icon{display:flex;justify-content:center;align-items:center;height:120px;width:120px;margin:0 auto 60px;.gatsby-image-wrapper{height:100%;width:100%;img{object-fit:contain !important;}}}h4{padding-bottom:16px;}p{font-size:16px;line-height:24px;color:",";}}.circle{align-self:center;height:30px;width:100%;max-width:30px;position:relative;& > span{display:flex;justify-content:center;align-items:center;height:96px;width:96px;background-color:",";box-shadow:inset ",";box-shadow:inset 0 0 32px 0 rgba(236,236,236,0.4);border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(90deg);@media (min-width:768px){transform:translate(-50%,-50%) rotate(0);}}}"],f.a.white1,h.a.grey1,h.a.white,f.a.white1),p.b.div.withConfig({displayName:"manage-your-company-dissolution__FAQ",componentId:"sc-19bc20l-4"})(["padding-top:75px;.wrapper{display:flex;flex-direction:column;align-items:center;& > div{&:first-child{width:100%;h2{max-width:100%;}}}}"])),j={items:[{question:"What are Articles of Distribution exactly?",answer:"The articles formalize the cessation of activity as an incorporated entity. They define parameters surrounding the dissolution of a company. This could include the distribution or sale of assets, how shareholders will be compensated and responsibilities divided among management."},{question:"How much will it cost to file Articles of Dissolution?",answer:"The state fee varies by state our service fee to file Articles of Dissolution is $149. To review the fee in your state click on the “order now” button and select the state and entity type."},{question:"What contingencies would prohibit me from filing a dissolution?",answer:"The only stipulation that would prohibit the owners of an entity from filing a dissolution is if the company owes outstanding taxes or has annual reports outstanding. In this event the company would need to bring the itself to good standing with the state before filing the dissolution."},{question:"How long will it take to have the Articles of Dissolution filed?",answer:"The filing time is dependent on the governing state agency and varies by state."},{question:"What will I receive when the Articles of Dissolution are filed?",answer:"The governing state agency will return a copy of the filed articles which are then mailed to the client."}]},O=(p.b.div.withConfig({displayName:"manage-your-company-dissolution__CTA",componentId:"sc-19bc20l-5"})(["padding-top:75px;"]),E.a.state.map((function(e){return e.name}))),q=a.a.createElement(y.a,{headline:"Dissolution",price:"149",dropdownOnePlaceholder:"Select Entity Type",dropdownOneOptions:["LCC","Corporation","Nonprofit"],dropdownTwoPlaceholder:"Select State",dropdownTwoOptions:O});t.default=function(){return a.a.createElement(o.a,null,a.a.createElement(r.a,{title:"Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation",description:"Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing."}),a.a.createElement(u.a,{imageName:"mrs-bulb-dissolution",imageAlt:"Mrs Bulb with closed sign"},a.a.createElement("h1",null,"Filing Articles of Dissolution"),a.a.createElement("p",null,"From $199 + Federal Fee"),a.a.createElement(_,null,a.a.createElement(s.a,{to:"#",theme:"primary56",width:"200px",arrow:!0},"Order now"))),a.a.createElement(k,null,a.a.createElement(d.a,{image:"dissolation",paddingTop:"60"},a.a.createElement("p",null,"A corporation or LLC can come to a place of dissolution for several reasons. It can simply be a decision you've made for your company because it is no longer successful, you are moving on to a new adventure or your shareholders wish to dissolve its assets. This will, fortunately, stop the necessary tax filings and other requirements that come with having a record of operation on file with the secretary of state. But, the emotional decision to dissolve your company can be tough at times, if you put your heart and sweat into building your own business."),a.a.createElement(N.a,null,"Let Incfile do the dissolution paperwork for you"),a.a.createElement("h3",null,"How to Close an LLC or Corporation"),a.a.createElement("p",null,"A company begins with Articles of Incorporation when it is formed, therefore it makes sense that Articles must be filed to dissolve a company that has been in operation. Without filing the proper paperwork, the business owner will continue to be liable for taxes and other state requirements. Fortunately, closing a company is really a matter of paperwork."),a.a.createElement(l.a,{className:"colorbox",theme:"icon",Icon:w.a,color:h.a.orange3,curve:!0,curveColor:h.a.blue1},a.a.createElement("h4",null,"Closing Your Business"),a.a.createElement("p",null,"In order to properly close a corporation or LLC that is no longer transacting business, the company must file Articles of Dissolution with the state of incorporation. Neglecting to file Articles of Dissolution for a company that is no longer active may expose the corporation or LLC to unnecessary recurring fees or taxes.")),a.a.createElement("p",null,"Business dissolution is primarily an act of filing Articles of Dissolution with your secretary of state. However, if a business is not in a sound position with the state to dissolve, other legal matters may complicate the process."),a.a.createElement("h3",null,"How to Close an LLC or Corporation"),a.a.createElement("p",null,"A company begins with Articles of Incorporation when it is formed, therefore it makes sense that Articles must be filed to dissolve a company that has been in operation. Without filing the proper paperwork, the business owner will continue to be liable for taxes and other state requirements. Fortunately, closing a company is really a matter of paperwork."),a.a.createElement("ul",{className:"numericlist"},a.a.createElement("li",null,a.a.createElement(C.a,{className:"circleicon",circleColor:h.a.blue1,iconColor:h.a.white},"1"),a.a.createElement("h5",null,"Hold a meeting with the Board of Directors"),a.a.createElement("p",null,"In this case, you want the minutes of your meeting to reflect that a vote was taken and appropriate majority (as outlined in your incorporation papers) was achieved. Those companies with shareholders will want a written documentation of this decision signed by all company owners. Some companies, such as single-member LLCs will not need to complete this step.")),a.a.createElement("li",null,a.a.createElement(C.a,{className:"circleicon",circleColor:h.a.blue1,iconColor:h.a.white},"2"),a.a.createElement("h5",null,"File the Articles of Dissolution"),a.a.createElement("p",null,"The paperwork must be completed and signed by the Registered Agent of your company. You will be issued a Certificate of Dissolution that formalizes the termination of business activity in your state. Once dissolution is properly documented, all branches in other states will automatically be dissolved as well. The dissolution of a company must take place in the state where incorporation took place.")),a.a.createElement("li",null,a.a.createElement(C.a,{className:"circleicon",circleColor:h.a.blue1,iconColor:h.a.white},"3"),a.a.createElement("h5",null,"Notify the IRS"),a.a.createElement("p",null,'This step is important because it will provide you with a "consent to dissolution" or "tax clearance" that makes the process a smooth one. It will be necessary to pay all federal and state taxes due at this time to receive this consent. This document(s) will be required by the secretary of state to achieve a formal dissolution. While we\'ll help you file your Articles of Dissolution, you will be responsible for contacting the IRS to receive any tax clearances, etc.'))),a.a.createElement("p",null,"An additional step often recommended at this point is the closing of all credit lines and accounts that pertain to your business. Letting your creditors know that you have dissolved a company will set you up for more favorable circumstances should debt still be present. Finally, if you have any fictitious names in other states, you'll want to cancel those as well."))),a.a.createElement(I,null,a.a.createElement(g.a,null,a.a.createElement("div",{className:"wrapper"},a.a.createElement(b.a,{className:"help",headlineWidth:"450",object:q},a.a.createElement("h2",null,"Save your time. We'll handle the paperwork."),a.a.createElement("h4",null,"Requirements to file Articles of Dissolution:"),a.a.createElement("p",null,"The company must be in good standing with the state of incorporation and cannot be in arrears of franchise taxes or annual reporting requirements. In the event that the entity is not in good standing reinstatement would be required in order to proceed with the dissolution."))))),a.a.createElement(A,null,a.a.createElement(g.a,null,a.a.createElement("div",{className:"wrapper"},a.a.createElement(c.a,{headline:"Common questions on filing Dissolution"}),a.a.createElement(v.default,{faq:j})))),a.a.createElement(x.a,null),a.a.createElement(m.a,null))}},ufX1:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i={state:[{name:"Alabama",url:"https://revenue.alabama.gov/business-license/"},{name:"Alaska",url:"https://www.commerce.alaska.gov/web/cbpl/businesslicensing.aspx"},{name:"Arizona",url:"https://azdor.gov/transaction-privilege-tax/tpt-license/license-fees-cancellation-and-other-changes"},{name:"Arkansas",url:"https://www.businesslicenses.com/Licenses/AR/"},{name:"California",url:"http://www.calgold.ca.gov/"},{name:"Colorado",url:"https://www.colorado.gov/pacific/dora/licenses-permits-and-filings"},{name:"Connecticut",url:"https://www.advancect.org/advancing-business/assistance/"},{name:"Delaware",url:"https://onestop.delaware.gov/Operate_Register"},{name:"District of Columbia",url:"https://dc.gov/page/permits-licenses-and-certifications"},{name:"Florida",url:"https://dos.myflorida.com/library-archives/research/florida-information/business/starting-a-business-in-florida/small-business/license/"},{name:"Georgia",url:"http://sos.ga.gov/index.php/?section=licensing"},{name:"Guam",url:"http://www.investguam.com/business-in-guam/business-development/"},{name:"Hawaii",url:"https://portal.ehawaii.gov/business/professional-licensing/"},{name:"Idaho",url:"http://www.state.id.us/business/"},{name:"Illinois",url:"https://www2.illinois.gov/business/registration-licenses-permits"},{name:"Indiana",url:"https://www.in.gov/core/business_guide.html"},{name:"Iowa",url:"https://tax.iowa.gov/starting-business"},{name:"Kansas",url:"https://ksbiz.kansas.gov/start/obtain-licenses-and-permits/"},{name:"Kentucky",url:"https://onestop.ky.gov/Pages/default.aspx"},{name:"Louisiana",url:"https://www.sos.la.gov/BusinessServices/StartABusiness/CreateABusinessLicenseChecklist/Pages/default.aspx"},{name:"Maine",url:"https://www.maine.gov/portal/business/licensing.html"},{name:"Maryland",url:"https://marylandtaxes.gov/business/types-of-business-licenses.php"},{name:"Massachusett",url:"https://www.mass.gov/topics/business-licenses-permits"},{name:"Michigan",url:"https://www.michigan.gov/statelicensesearch/"},{name:"Minnesota",url:"https://mn.gov/elicense/"},{name:"Mississippi",url:"https://www.mssbdc.org/resources/faqs#blicense"},{name:"Missouri",url:"https://openforbiz.mo.gov/"},{name:"Montana",url:"https://mtrevenue.gov/?s=business+license"},{name:"Nebraska",url:"https://sos.nebraska.gov/licensing/licensing-division"},{name:"Nevada",url:"https://www.nvsos.gov/sos/licensing/state-business-license"},{name:"New Hampshire",url:"https://www.revenue.nh.gov/faq/new-business-tax.htm"},{name:"New Jersey",url:"https://www.nj.gov/njbusiness/licenses/"},{name:"New Mexico",url:"https://www.businesslicenses.com/Licenses/NM/"},{name:"New York",url:"https://www.dos.ny.gov/licensing/"},{name:"North Carolina",url:"https://edpnc.com/start-or-grow-a-business/start-a-business/"},{name:"North Dakota",url:"http://www.nd.gov/businessreg/license/index.html"},{name:"Ohio",url:"http://business.ohio.gov/licensing/"},{name:"Oklahoma",url:"https://www.okcommerce.gov/doing-business/startups-entrepreneurs/business-licensing-operating-requirements/"},{name:"Oregon",url:"https://apps.oregon.gov/SOS/LicenseDirectory/"},{name:"Pennsylvania",url:"https://www.dos.pa.gov/ProfessionalLicensing/LicensingServices/Pages/default.aspx"},{name:"Puerto Rico",url:"http://www2.pr.gov/Pages/default.aspx"},{name:"Rhode Island",url:"https://www.ri.gov/business/index.php?subcategory=17&linkgroup=75"},{name:"South Carolina",url:"http://sc.gov/business/Pages/LICENSESANDPERMITSBUSINESS.aspx"},{name:"South Dakota",url:"https://sd.gov/business.aspx"},{name:"Tennessee",url:"https://www.tn.gov/content/tn/business/licenses-permits.html"},{name:"Texas",url:"https://www.tdlr.texas.gov/"},{name:"U.S. Virgin Islands",url:"http://www.usvichamber.com/business_steps.htm"},{name:"Utah",url:"http://www.dopl.utah.gov/renewal.html"},{name:"Vermont",url:"https://www.vermont.gov/work/licenses-and-permits"},{name:"Virginia",url:"http://www.bos.virginia.gov/starting.shtml"},{name:"Washington",url:"https://www.dol.wa.gov/business/"},{name:"West Virginia",url:"https://business4.wv.gov/operatemybusiness/Pages/LicPermRenewal.aspx"},{name:"Wisconsin",url:"http://dsps.wi.gov/Licenses-Permits/Credentialing"},{name:"Wyoming",url:"https://www.wyomingbusiness.org/content/licensing-and-permitting"}]}},xVvc:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),a=n.n(i),o=n("vOnD"),r=n("E2cJ"),s=n("ZMKu"),l=n("xjTF"),c=n("eH7y"),p=n("AZup"),u=o.b.div.withConfig({displayName:"accordion__Wrapper",componentId:"sc-1cq2zsm-0"})(["display:flex;width:100%;position:relative;margin-top:80px;@media (min-width:768px){width:auto;padding:25px 29px 0;}"]),d=o.b.div.withConfig({displayName:"accordion__Curve",componentId:"sc-1cq2zsm-1"})(["height:25px;width:25px;position:absolute;top:-16px;left:-13px;@media (min-width:768px){top:0;left:0;}"]),m=o.b.div.withConfig({displayName:"accordion__TabsWrapper",componentId:"sc-1cq2zsm-2"})(["display:flex;flex-direction:column;width:100%;max-width:770px;"]),h=o.b.div.withConfig({displayName:"accordion__TabBox",componentId:"sc-1cq2zsm-3"})(["box-shadow:0 24px 32px 0 rgba(236,236,236,0.5);margin-bottom:8px;.accordion-panel{overflow:hidden;}"]),f=o.b.div.withConfig({displayName:"accordion__PanelWrapper",componentId:"sc-1cq2zsm-4"})(["display:flex;flex-direction:column;background:#fff;margin-bottom:7px;padding:15px;z-index:1;@media (min-width:768px){padding:24px 40px 40px 80px;}h3{margin-bottom:48px;}p,li{color:#4e4e4e;font-family:Avenir,sans-serif;max-width:650px;text-align:left;}p{font-size:16px;line-height:24px;}li{font-size:14px;line-height:19px;}ul{padding-left:16px;li{padding-top:16px;}}"]),g=o.b.button.withConfig({displayName:"accordion__Button",componentId:"sc-1cq2zsm-5"})(["height:80px;width:100%;line-height:80px;color:#4e4e4e;background:#fff;display:flex;cursor:pointer;position:relative;border-radius:5px;overflow:hidden;border:none;&.active{border-radius:5px 5px 0 0;font-weight:600;svg{transform:rotate(0deg);}}"]),w=o.b.div.withConfig({displayName:"accordion__Content",componentId:"sc-1cq2zsm-6"})(["display:flex;justify-content:space-between;align-items:center;flex-grow:1;padding-right:40px;span{color:#4e4e4e;font-family:Avenir;font-size:16px;}"]),b=o.b.div.withConfig({displayName:"accordion__Icon",componentId:"sc-1cq2zsm-7"})(["display:flex;align-items:center;justify-content:center;height:80px;width:80px;opacity:0.75;svg{transform:rotate(180deg);transition:transform 0.3s ease;}"]),v=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")},x=function(e){var t=e.children,n=Object(r.d)(),i=n.isActive,o=n.onClick;return a.a.createElement(g,{className:v("accordion-tab",i&&"active"),onClick:o},t)},y={hidden:{height:0},visible:{height:"auto"}},E=function(e){var t=e.children,n=Object(r.c)();return a.a.createElement(s.a.div,{className:"accordion-panel",animate:n?"visible":"hidden",transition:{ease:"easeOut",duration:.3},variants:y},t)};t.default=function(e){var t=e.faq;return a.a.createElement(p.a,{partialVisibility:!0,once:!0},(function(e){var n=e.isVisible;return a.a.createElement(u,{className:n?"slideUp enter":"slideUp"},a.a.createElement(d,null,a.a.createElement(c.a,null)),a.a.createElement(r.b,null,a.a.createElement(m,null,t.items.map((function(e){return a.a.createElement(h,null,a.a.createElement(x,null,a.a.createElement(b,null,a.a.createElement(l.a,null)),a.a.createElement(w,null,a.a.createElement("span",null,e.question))),a.a.createElement(E,null,a.a.createElement(f,null,a.a.createElement("p",null,e.answer),e.list&&a.a.createElement("ul",null,e.list.map((function(e){return a.a.createElement("li",null,e)}))))))})))))}))}},yEnY:function(e,t,n){"use strict";var i=n("q1tI");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var o=i.createElement("defs",null,i.createElement("path",{d:"M10.328 15.84a.784.784 0 00-1.1 0 .763.763 0 000 1.089l3.889 3.846c.303.3.796.3 1.1 0l8.555-8.462a.763.763 0 000-1.088.784.784 0 00-1.1 0l-8.005 7.918-3.34-3.302z",id:"circle-status-check-blue_inline_svg__a"})),r=i.createElement("g",{fill:"none",fillRule:"evenodd"},i.createElement("circle",{fill:"#5089FD",cx:16,cy:16,r:16}),i.createElement("use",{stroke:"#FFF",fill:"#FFF",fillRule:"nonzero",xlinkHref:"#circle-status-check-blue_inline_svg__a"}));t.a=function(e){return i.createElement("svg",a({width:32,height:32},e),o,r)}}}]);
//# sourceMappingURL=component---src-pages-manage-your-company-dissolution-js-265792849bcd2d480cbd.js.map