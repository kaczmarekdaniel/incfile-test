(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{AZup:function(e,t,n){"use strict";var a=n("8o2o"),i=n("9Hrx"),r=n("q1tI"),o=n.n(r),c=n("aqT/"),l=n.n(c),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={active:!0},n}return Object(i.a)(t,e),t.prototype.render=function(){var e=this,t=this.state.active,n=this.props,i=n.once,r=n.children,c=Object(a.a)(n,["once","children"]);return o.a.createElement(l.a,Object.assign({active:t,onChange:function(t){return i&&t&&e.setState({active:!1},(function(){return console.log("turned the thing off!")}))}},c),(function(e){var t=e.isVisible;return r({isVisible:t})}))},t}(r.Component);d.defaultProps={once:!1},t.a=d},"BV+q":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("bfge"),c=r.b.div.withConfig({displayName:"color-box__Wrapper",componentId:"sc-1itcyy6-0"})(["width:100%;background-color:",";"],(function(e){return e.color?e.color:o.a.blue3}));t.a=function(e){var t=e.className,n=e.children,a=e.color,r=e.overflow;return i.a.createElement(c,{className:t,color:a,overflow:r},n)}},KpOY:function(e,t,n){"use strict";var a=n("q1tI");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r=a.createElement("path",{d:"M0 1.389c0 .746.599 1.349 1.354 1.384a26.869 26.869 0 0112.317 3.66c6.754 3.954 11.098 10.402 12.544 17.451A1.4 1.4 0 0027.592 25c.89 0 1.556-.806 1.38-1.666-1.599-7.79-6.398-14.916-13.863-19.286A29.704 29.704 0 001.46.002 1.393 1.393 0 000 1.387v.002z",fill:"#C9A3EE",fillRule:"evenodd"});t.a=function(e){return a.createElement("svg",i({width:29,height:25},e),r)}},Nkkb:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("E2cJ"),c=n("bfge"),l=n("eqkC"),d=n("Za2R"),s=r.b.div.withConfig({displayName:"benefits-accordion__Wrapper",componentId:"sc-1eq2kjf-0"})(["display:flex;flex-direction:column;width:100%;"]),m=r.b.div.withConfig({displayName:"benefits-accordion__TabsWrapper",componentId:"sc-1eq2kjf-1"})(["display:flex;align-items:center;height:48px;width:100%;background-color:",";box-shadow:",";border-radius:24px;margin:0 auto 80px;overflow:hidden;button{margin-right:4px;&:first-child{margin-left:4px;}}"],c.a.white,l.a.white1),p=r.b.div.withConfig({displayName:"benefits-accordion__PanelsWrapper",componentId:"sc-1eq2kjf-2"})(["display:block;"]),u=r.b.div.withConfig({displayName:"benefits-accordion__Grid",componentId:"sc-1eq2kjf-3"})(["display:grid;grid-template-columns:1fr;grid-gap:30px;width:100%;@media (min-width:769px){grid-template-columns:1fr 1fr;}@media (min-width:992px){grid-template-columns:1fr 1fr 1fr;}"]),h=r.b.div.withConfig({displayName:"benefits-accordion__Scroller",componentId:"sc-1eq2kjf-4"})(["display:flex;justify-content:flex-start;align-items:center;overflow-x:scroll;border-radius:24px;width:100%;&::-webkit-scrollbar,&::-webkit-scrollbar{display:none;}"]),f=r.b.button.withConfig({displayName:"benefits-accordion__Button",componentId:"sc-1eq2kjf-5"})(["display:flex;justify-content:center;align-items:center;height:40px;min-width:252px;background-color:",";border-radius:24px;border:none;cursor:pointer;transition:background-color 0.3s ease,color 0.2s ease;color:",";font-family:Avenir,sans-serif;font-weight:400;font-size:16px;line-height:24px;flex-grow:1;&:hover{background-color:",";}&.active{background-color:",";color:",";font-weight:900;}"],c.a.white,c.a.grey1,c.a.blue3,c.a.blue1,c.a.white),g=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")},b=function(e){var t=e.children,n=Object(o.d)(),a=n.isActive,r=n.onClick;return i.a.createElement(f,{className:g("accordion-tab",a&&"active"),onClick:r},t)};t.a=function(){return i.a.createElement(o.b,null,i.a.createElement(s,null,i.a.createElement(m,null,i.a.createElement(h,null,i.a.createElement(b,null,"Company Changes"),i.a.createElement(b,null,"Compiliance"),i.a.createElement(b,null,"Registered Agent"),i.a.createElement(b,null,"IRS Filings"))),i.a.createElement(p,null,i.a.createElement(o.a,null,i.a.createElement(u,null,i.a.createElement(d.a,{content:{header:"Amendment",text:"Filed if a company requires changes to membership, addresses or  company name."},color:c.a.purple3,image:"bc-01"}),i.a.createElement(d.a,{content:{header:"Dissolution",text:"Used to formally terminate the existence of a entity."},color:c.a.babyblue3,image:"bc-20"}),i.a.createElement(d.a,{content:{header:"Used to formally terminate the existence of a entity.",text:"Filed when you need to expand your entity to new states."},color:c.a.blue3,image:"bc-03"}),i.a.createElement(d.a,{content:{header:"Fictitious Business Name",text:"Filed if a company requires assumed business/fictitious name."},color:c.a.orange3,image:"bc-19"}))),i.a.createElement(o.a,null,i.a.createElement(u,null,i.a.createElement(d.a,{content:{header:"File Annual Report",text:"The majority of states require that companies file periodic reports that affirm the current information of the companies members, directors, and business address."},color:c.a.babyblue3,image:"bc-05"}),i.a.createElement(d.a,{content:{header:"Order Registered Agent",text:"Order registered agent service and receive your new registered agent information immediately."},color:c.a.orange3,image:"bc-11"}),i.a.createElement(d.a,{content:{header:"Certificate of Good Standing",text:"Required by governmental and private agencies to validate a companies status in order to facilitate specified transactions."},color:c.a.blue3,image:"bc-10"}),i.a.createElement(d.a,{content:{header:"Business License Search",text:"Determine all business licenses and permits required at the federal, state, county, and municipal level."},color:c.a.yellow3,image:"bc-17"}),i.a.createElement(d.a,{content:{header:"Trademark Name Search",text:"Take steps to protect your brand and valuable company assets such as your name, logo, and tagline."},color:c.a.purple3,image:"bc-07"}))),i.a.createElement(o.a,null,i.a.createElement(u,null,i.a.createElement(d.a,{content:{header:"Order Registered Agent",text:"Order registered agent service and receive your new registered agent information immediately."},color:c.a.orange3,image:"bc-11"}),i.a.createElement(d.a,{content:{header:"Renew Registered Agent",text:"Click here if you have existing registered agent service and would like to renew it."},color:c.a.green3,image:"bc-18"}),i.a.createElement(d.a,{content:{header:"Change Registered Agent",text:"Use to update the registered agent on file with the state of formation."},color:c.a.blue3,image:"bc-16"}))),i.a.createElement(o.a,null,i.a.createElement(u,null,i.a.createElement(d.a,{content:{header:"EIN / Tax ID #",text:"An EIN is required to open a bank account, file taxes and submit payroll taxes."},color:c.a.red3,image:"bc-12"}),i.a.createElement(d.a,{content:{header:"File Business Taxes",text:"Work with a tax professional to file your federal business tax return."},color:c.a.blue3,image:"bc-13"}),i.a.createElement(d.a,{content:{header:"File S Corp Tax Election",text:"Reduce the Tax You Pay by Having Your LLC Treated as an S Corp for Tax Purposes."},color:c.a.babyblue3,image:"bc-15"}))))))}},Tzsx:function(e,t,n){"use strict";var a=n("8o2o"),i=n("q1tI"),r=n.n(i),o=n("vOnD"),c=n("5T/x"),l=o.b.div.withConfig({displayName:"content-center__Wrapper",componentId:"gze970-0"})(["display:flex;justify-content:center;width:100%;position:relative;@media(min-width:769px){flex-direction:row;}"]),d=o.b.div.withConfig({displayName:"content-center__Content",componentId:"gze970-1"})(["display:flex;flex-direction:column;align-items:center;width:100%;@media (min-width:769px){max-width:",";}"],(function(e){return e.contentWidth?e.contentWidth+"px":""}));t.a=function(e){var t=e.className,n=e.children,i=e.contentWidth,o=e.headlineWidth,s=e.textWidth,m=Object(a.a)(e,["className","children","contentWidth","headlineWidth","textWidth"]);return r.a.createElement(c.a,null,r.a.createElement(l,Object.assign({className:t},m),r.a.createElement(d,{contentWidth:i,headlineWidth:o,textWidth:s},n)))}},Wdr8:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD").b.div.withConfig({displayName:"top-buttons-box__Wrapper",componentId:"sc-12jcaeq-0"})(["display:flex;flex-direction:column;width:100%;@media (min-width:576px){align-items:center;}@media (min-width:","){flex-direction:row;}"],(function(e){return e.mediaXL?"1200px":"992px"}));t.a=function(e){var t=e.children,n=e.mediaXL;return i.a.createElement(r,{mediaXL:n},t)}},XuRJ:function(e,t,n){"use strict";var a=n("8o2o"),i=n("9Hrx"),r=n("q1tI"),o=n.n(r),c=n("aqT/"),l=n.n(c),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={active:!0},n}return Object(i.a)(t,e),t.prototype.render=function(){var e=this,t=this.state.active,n=this.props,i=n.once,r=n.children,c=Object(a.a)(n,["once","children"]);return o.a.createElement(l.a,Object.assign({active:t,onChange:function(t){return i&&t&&e.setState({active:!1},(function(){return console.log("turned the thing off!")}))}},c),(function(e){var t=e.isVisible;return r({isVisible:t})}))},t}(r.Component);d.defaultProps={once:!1},t.a=d},Za2R:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("bfge"),c=n("eqkC"),l=n("Y+kd"),d=n("cQKk"),s=n("TvSw"),m=n("RRzO"),p=r.b.div.withConfig({displayName:"top-image-box__Wrapper",componentId:"zjlf26-0"})(["width:100%;max-width:470px;padding:16px 16px 40px;position:relative;border-radius:5px;background-color:",";box-shadow:",";margin:0 auto;.top{display:flex;justify-content:center;align-items:center;height:128px;width:100%;background-color:",";border-radius:5px;.gatsby-image-wrapper{height:96px;width:96px;}}.content{padding:24px 24px 0;}p,a{font-size:16px;line-height:24px;}p{color:",";}"],o.a.white,(function(e){return e.noShadow?"":c.a.white1}),(function(e){return e.color?e.color:o.a.white}),o.a.grey1);t.a=function(e){var t=e.className,n=e.image,a=e.color,r=e.content,o=e.noShadow;return i.a.createElement(p,{className:t,color:a,noShadow:o},i.a.createElement("div",{className:"top"},n&&i.a.createElement(l.a,{filename:n})),i.a.createElement("div",{className:"content"},i.a.createElement(d.a,{size:"4",bottomMargin:"16"},r.header),i.a.createElement(s.a,{bottomMargin:"0"},r.text),r.link&&i.a.createElement(m.a,{content:r.link,bottomMargin:"0",topMargin:"24"})))}},bcDI:function(e,t,n){"use strict";var a=n("8o2o"),i=n("q1tI"),r=n.n(i),o=n("vOnD"),c=n("bfge"),l=n("XuRJ"),d=n("5T/x"),s=n("/61k"),m=n("dBvy"),p=o.b.div.withConfig({displayName:"top__Wrapper",componentId:"sc-1ld4c8g-0"})(["display:flex;flex-direction:column;align-items:center;position:relative;padding-top:80px;@media (min-width:992px){flex-direction:row;height:100vh;max-height:777px;padding-top:0;}"]),u=o.b.div.withConfig({displayName:"top__Oval",componentId:"sc-1ld4c8g-1"})(['width:90%;position:absolute;top:0;right:0;z-index:-1;@media (min-width:992px){width:50%;}@media (min-width:1200px){max-width:850px;max-height:777px;}&::after{content:"";display:block;padding-bottom:100%;}& > svg{position:absolute;right:0;bottom:0;defs{radialGradient{stop{&:nth-child(1){stop-color:',";}&:nth-child(2){stop-color:",";}}}}path{transform:matrix(1,0,0,-1,-115,777);}}"],(function(e){return function(e){switch(e){case"blue":return c.a.blue1;case"orange":return c.a.orange1;case"purple":return"#9168ff";case"purple-2":return"#d2aafb";case"yellow":return"#ffc95b";case"green":return"#97e0c7";case"sun":return"#ffb059";case"sun-2":return"#ffc95b";case"blackpink":return"#ffb8b8";case"darkblue":return"#7891fc";case"lightpurple":return"#d2aafb";case"love":return"#fdabab";case"babyblue":return"#71bef8";default:return""}}(e.ovalColor)}),(function(e){return function(e){switch(e){case"blue":return c.a.babyblue2;case"orange":return c.a.orange2;case"purple":return"#dad2ff";case"purple-2":return"#ede0fa";case"yellow":return"#fff5d4";case"green":return"#d5f3e8";case"sun":return"#ffe3c5";case"sun-2":return"#fff5d4";case"blackpink":return"#ffdddd";case"darkblue":return"#ced7ff";case"lightpurple":return"#ede0fa";case"love":return"#f9e0e0";case"babyblue":return"#d2eeff";default:return""}}(e.ovalColor)})),h=o.b.div.withConfig({displayName:"top__Content",componentId:"sc-1ld4c8g-2"})(["display:flex;flex-wrap:wrap;"]),f=o.b.div.withConfig({displayName:"top__TextContainer",componentId:"sc-1ld4c8g-3"})(["display:flex;flex-direction:column;align-items:center;width:100%;padding-top:32px;@media (min-width:992px){width:","%;align-items:flex-start;}@media (min-width:1200px){padding-top:150px;}h1{width:100%;text-align:center;padding-bottom:40px;@media (min-width:992px){text-align:left;padding-bottom:24px;}@media (min-width:992px){max-width:","px;}}p{margin-bottom:32px;text-align:center;@media (min-width:992px){text-align:left;max-width:","px;}}"],(function(e){return e.contentWidth?e.contentWidth:"50"}),(function(e){return e.headlineWidth?e.headlineWidth:"480"}),(function(e){return e.textWidth?e.textWidth:e.headlineWidth?e.headlineWidth:"480"})),g=o.b.div.withConfig({displayName:"top__ImageContainer",componentId:"sc-1ld4c8g-4"})(["display:flex;max-width:",";width:100%;top:50%;right:55%;@media (min-width:992px){position:absolute;width:55%;transform:translate(100%,-50%);}.gatsby-image-wrapper{width:100%;img{object-fit:contain !important;}}"],(function(e){return e.imageWidth?e.imageWidth+"px":"950px"})),b=function(e){var t=e.children,n=e.imageName,i=e.imageAlt,o=e.imageWidth,c=e.contentWidth,b=e.headlineWidth,x=e.textWidth,w=e.ovalColor,v=Object(a.a)(e,["children","imageName","imageAlt","imageWidth","contentWidth","headlineWidth","textWidth","ovalColor"]);return r.a.createElement(p,v,r.a.createElement(l.a,{partialVisibility:!0,once:!0},(function(e){var t=e.isVisible;return r.a.createElement(u,{className:t?"scaleUp enter":"scaleUp",ovalColor:w},r.a.createElement(m.a,null))})),r.a.createElement(g,{imageWidth:o},r.a.createElement(s.a,{filename:n,alt:i})),r.a.createElement(d.a,null,r.a.createElement(h,null,r.a.createElement(l.a,{partialVisibility:!0,once:!0},(function(e){var n=e.isVisible;return r.a.createElement(f,{className:n?"slideRight enter":"slideRight",contentWidth:c,headlineWidth:b,textWidth:x},t)})))))};t.a=b,b.defaultProps={OvalSVGFile:m.a}},bxJw:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("RRzO"),c=n("AZup"),l=n("Tzsx"),d=r.b.div.withConfig({displayName:"heading-center__Wrapper",componentId:"sc-1uzslhg-0"})(["position:relative;margin-bottom:",";@media (min-width:992px){margin-bottom:",";}h2{max-width:","px;margin:0 auto 24px;}p{max-width:","px;text-align:center;margin:0 auto 24px;}a{margin:0 auto 24px;}"],(function(e){return e.bottomMargin?e.bottomMargin+"px":""}),(function(e){return e.bottomMarginLG?e.bottomMarginLG+"px":""}),(function(e){return e.headlineWidth?e.headlineWidth:"610"}),(function(e){return e.textWidth?e.textWidth:"750"}));t.a=function(e){var t=e.className,n=e.headline,a=e.headlineWidth,r=e.text,s=e.textWidth,m=e.linkText,p=e.linkUrl,u=e.bottomMargin,h=e.bottomMarginLG,f={text:m,url:p};return i.a.createElement(d,{className:t,headlineWidth:a,textWidth:s,bottomMargin:u,bottomMarginLG:h},i.a.createElement(l.a,null,n&&i.a.createElement(c.a,{partialVisibility:!0,once:!0},(function(e){var t=e.isVisible;return i.a.createElement("h2",{className:t?"slideUp enter":"slideUp"},n)})),r&&i.a.createElement(c.a,{partialVisibility:!0,once:!0},(function(e){var t=e.isVisible;return i.a.createElement("p",{className:t?"slideUp enter":"slideUp"},r)})),m&&i.a.createElement(c.a,{partialVisibility:!0,once:!0},(function(e){var t=e.isVisible;return i.a.createElement(o.a,{content:f,className:t?"slideUp enter":"slideUp"})}))))}},kDk7:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("5T/x"),c=n("Y+kd"),l=r.b.div.withConfig({displayName:"left-image-right-content__Wrapper",componentId:"oxrm8t-0"})(["position:relative;"]),d=r.b.div.withConfig({displayName:"left-image-right-content__Flex",componentId:"oxrm8t-1"})(["display:flex;justify-content:space-between;"]),s=r.b.div.withConfig({displayName:"left-image-right-content__Content",componentId:"oxrm8t-2"})(["display:flex;flex-direction:column;justify-content:",";width:100%;max-width:670px;padding-top:","px;"],(function(e){return e.contentCenter?"center":""}),(function(e){return e.paddingTop?e.paddingTop:"60"})),m=r.b.div.withConfig({displayName:"left-image-right-content__Sticky",componentId:"oxrm8t-3"})(["display:block;width:100%;.gatsby-image-wrapper{position:sticky !important;top:100px;}"]),p=r.b.div.withConfig({displayName:"left-image-right-content__Imagebox",componentId:"oxrm8t-4"})(["display:none;width:100%;max-width:","px;position:relative;@media(min-width:769px){display:flex;}.gatsby-image-wrapper{height:auto;width:100%;}"],(function(e){return e.imageWidth?e.imageWidth:"485"}));t.a=function(e){var t=e.children,n=e.image,a=e.paddingTop,r=e.contentCenter,u=e.imageWidth;return i.a.createElement(l,null,i.a.createElement(o.a,null,i.a.createElement(d,null,i.a.createElement(p,{imageWidth:u},i.a.createElement(m,null,i.a.createElement(c.a,{filename:n}))),i.a.createElement(s,{paddingTop:a,contentCenter:r},t))))}},odDa:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("5T/x"),c=n("Nkkb"),l=n("Tzsx"),d=n("cQKk"),s=n("TvSw"),m=r.b.div.withConfig({displayName:"benefits__Wrapper",componentId:"sc-110f3q3-0"})(["padding-top:50px;position:relative;@media (min-width:769px){padding-top:105px;}.heading{h3,p{text-align:center;}}"]);t.a=function(){return i.a.createElement(m,null,i.a.createElement(o.a,null,i.a.createElement(l.a,{className:"heading"},i.a.createElement(d.a,{size:"3"},"Providing everything you need when you need it"),i.a.createElement(s.a,{big:!0,bottomMargin:"48",maxWidth:"770"},"We are here to help you every step of the way. We provide lifetime company alerts to make sure that you never miss an important due date and can assist with protecting your good standing by filing any mandatory reports with the state.")),i.a.createElement(c.a,null)))}}}]);
//# sourceMappingURL=a807fe5b507a8d9fd0da8183b7514c257dacae13-88c1c1f125ae42f0a78d.js.map