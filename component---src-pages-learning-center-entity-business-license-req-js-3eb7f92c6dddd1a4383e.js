(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{"/61k":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("Wbzz"),o=n("9eSz"),s=n.n(o);t.a=function(e){return i.a.createElement(r.StaticQuery,{query:"2913463957",render:function(t){var n=t.images.edges.find((function(t){return t.node.relativePath.includes(e.filename)}));if(!n)return null;var a=n.node.childImageSharp.fluid;return i.a.createElement(s.a,{alt:e.alt,fluid:a})}})}},"/e4F":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={white1:"0 24px 32px 0 rgba(236,236,236,0.50)",white2:"0 40px 80px 0 rgba(171,171,171,0.50)",babyblue1:"0 32px 48px 0 rgba(144,181,197,0.80)",blue1:"0 32px 48px 0 rgba(80,137,253,0.64)",green1:"0 32px 48px 0 rgba(151,224,199,0.59)",orange1:"0 32px 48px 0 rgba(253,133,80,0.62)",purple1:"0 32px 48px 0 rgba(200,163,236,0.64)",red1:"0 32px 48px 0 rgba(197,144,144,0.64)",yellow1:"0 32px 48px 0 rgba(223,194,134,0.64)",babyblue2:"0 24px 32px 0 rgba(166,213,233,0.50)",blue2:"0 24px 32px 0 rgba(177,190,222,0.50)",green2:"0 24px 32px 0 rgba(179,219,217,0.50)",orange2:"0 24px 32px 0 rgba(219,202,188,0.50)",purple2:"0 24px 32px 0 rgba(199,186,213,0.50)",red2:"0 24px 32px 0 rgba(224,178,178,0.50)",yellow2:"0 24px 32px 0 rgba(231,216,162,0.63)"}},AZup:function(e,t,n){"use strict";var a=n("8o2o"),i=n("9Hrx"),r=n("q1tI"),o=n.n(r),s=n("aqT/"),l=n.n(s),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={active:!0},n}return Object(i.a)(t,e),t.prototype.render=function(){var e=this,t=this.state.active,n=this.props,i=n.once,r=n.children,s=Object(a.a)(n,["once","children"]);return o.a.createElement(l.a,Object.assign({active:t,onChange:function(t){return i&&t&&e.setState({active:!1},(function(){return console.log("turned the thing off!")}))}},s),(function(e){var t=e.isVisible;return r({isVisible:t})}))},t}(r.Component);c.defaultProps={once:!1},t.a=c},CiOp:function(e,t,n){"use strict";var a=n("q1tI");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r=a.createElement("defs",null,a.createElement("linearGradient",{id:"top-right-transparent-purple2_inline_svg__a",x1:"100%",x2:"100%",y1:"95.674%",y2:"0%"},a.createElement("stop",{offset:"0%",stopColor:"#FFF",stopOpacity:0}),a.createElement("stop",{offset:"100%",stopColor:"#eeefff"}))),o=a.createElement("path",{fill:"url(#top-right-transparent-purple2_inline_svg__a)",fillRule:"evenodd",d:"M420 0v420H0C0 188.04 188.04 0 420 0z",transform:"matrix(1 0 0 -1 0 420)"});t.a=function(e){return a.createElement("svg",i({viewBox:"0 0 420 420"},e),r,o)}},H0Ff:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("5T/x"),s=n("40+L"),l=n.n(s),c=(n("VLDe"),n("xHx8")),p=n("7cWy"),u=n("Huyp"),d=n("AZup"),m=n("w0o3"),g=n("CiOp"),h=r.b.div.withConfig({displayName:"articles__Wrapper",componentId:"npf85z-0"})(["padding-top:80px;padding-bottom:80px;position:relative;overflow:hidden;"]),f=r.b.div.withConfig({displayName:"articles__PurpleCurve",componentId:"npf85z-1"})(["height:25px;width:29px;position:absolute;top:38px;right:-15px;"]),x=r.b.div.withConfig({displayName:"articles__PinkCurve",componentId:"npf85z-2"})(["height:21px;width:24px;position:absolute;bottom:52px;left:-10px;"]),b=r.b.div.withConfig({displayName:"articles__Content",componentId:"npf85z-3"})(["h3{text-align:center;margin:0 auto 35px;}"]),w=r.b.div.withConfig({displayName:"articles__CarouselWrapper",componentId:"npf85z-4"})(["margin:0 -15px;overflow:hidden;padding:0 15px;.react-multi-carousel-list{overflow:visible;.react-multi-carousel-item{pointer-events:none;transition:opacity 0.3s ease;&--active{opacity:1;pointer-events:auto;a{box-shadow:0 20px 30px 0 #e6e6e6;}}}}.react-multi-carousel-dot-list{position:relative;z-index:1;margin-top:48px;.react-multi-carousel-dot{button{width:8px;height:8px;background-color:#fce7d0;border:none;border-radius:4px;transition:width 0.3s ease;}&--active{button{width:16px;background-color:#fd8550;}}}}"]),v=r.b.div.withConfig({displayName:"articles__MobileWrapper",componentId:"npf85z-5"})(["display:flex;flex-direction:column;@media (min-width:769px){display:none;}a{box-shadow:0 20px 30px 0 #e6e6e6;}"]),y={desktop:{breakpoint:{max:9999,min:992},items:3,slidesToSlide:3},tablet:{breakpoint:{max:992,min:768},items:2,slidesToSlide:2},mobile:{breakpoint:{max:768,min:0},items:0}};t.a=function(e){var t=e.oval;return i.a.createElement(h,null,t&&i.a.createElement(m.a,{height:"341",width:"341",top:"25",right:"0"},i.a.createElement(g.a,null)),i.a.createElement(o.a,null,i.a.createElement(b,null,i.a.createElement(d.a,{partialVisibility:!0,once:!0},(function(e){var t=e.isVisible;return i.a.createElement("h3",{className:t?"slideUp enter":"slideUp"},"Related Articles")})),i.a.createElement(w,null,i.a.createElement(f,null,i.a.createElement(p.a,null)),i.a.createElement(x,null,i.a.createElement(u.a,null)),i.a.createElement(l.a,{responsive:y,arrows:!1,showDots:!0,renderDotsOutside:!0},i.a.createElement(c.a,{img:"bike",top:"0",topLG:"-50px",scale:"1.1"},"Here’s Seven Tips to Steer You in the Right Direction."),i.a.createElement(c.a,{img:"baloons"},"How to Balance Owning Multiple Businesses."),i.a.createElement(c.a,{img:"newspaper",top:"0",topLG:"-30px",scale:"1.1"},"Here’s Seven Tips to Steer You in the Right Direction."),i.a.createElement(c.a,{img:"bike",top:"0",topLG:"-50px",scale:"1.1"},"How to Balance Owning Multiple Businesses."),i.a.createElement(c.a,{img:"newspaper",top:"0",topLG:"-30px",scale:"1.1"},"Here’s Seven Tips to Steer You in the Right Direction."),i.a.createElement(c.a,{img:"baloons"},"How to Balance Owning Multiple Businesses."),i.a.createElement(c.a,{img:"bike",top:"0",topLG:"-50px",scale:"1.1"},"Here’s Seven Tips to Steer You in the Right Direction."),i.a.createElement(c.a,{img:"baloons"},"How to Balance Owning Multiple Businesses."),i.a.createElement(c.a,{img:"newspaper",top:"0",topLG:"-30px",scale:"1.1"},"Here’s Seven Tips to Steer You in the Right Direction."),i.a.createElement(c.a,{img:"bike",top:"0",topLG:"-50px",scale:"1.1"},"How to Balance Owning Multiple Businesses."),i.a.createElement(c.a,{img:"newspaper",top:"0",topLG:"-30px",scale:"1.1"},"Here’s Seven Tips to Steer You in the Right Direction."),i.a.createElement(c.a,{img:"baloons"},"How to Balance Owning Multiple Businesses."))),i.a.createElement(v,null,i.a.createElement(c.a,null,"Here’s Seven Tips to Steer You in the Right Direction."),i.a.createElement(c.a,null,"How to Balance Owning Multiple Businesses."),i.a.createElement(c.a,null,"Here’s Seven Tips to Steer You in the Right Direction."),i.a.createElement(c.a,null,"How to Balance Owning Multiple Businesses."),i.a.createElement(c.a,null,"Here’s Seven Tips to Steer You in the Right Direction."),i.a.createElement(c.a,null,"How to Balance Owning Multiple Businesses."),i.a.createElement(c.a,null,"Here’s Seven Tips to Steer You in the Right Direction."),i.a.createElement(c.a,null,"How to Balance Owning Multiple Businesses."),i.a.createElement(c.a,null,"Here’s Seven Tips to Steer You in the Right Direction."),i.a.createElement(c.a,null,"How to Balance Owning Multiple Businesses."),i.a.createElement(c.a,null,"Here’s Seven Tips to Steer You in the Right Direction."),i.a.createElement(c.a,null,"How to Balance Owning Multiple Businesses.")))))}},Huyp:function(e,t,n){"use strict";var a=n("q1tI");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r=a.createElement("path",{d:"M24 19.833c0-.626-.496-1.133-1.12-1.163a21.996 21.996 0 01-10.194-3.074C7.096 12.275 3.501 6.859 2.305.937A1.163 1.163 0 10.024 1.4c1.322 6.545 5.294 12.53 11.472 16.2A24.316 24.316 0 0022.793 21 1.16 1.16 0 0024 19.835v-.002z",fill:"#F2CFCF",fillRule:"evenodd"});t.a=function(e){return a.createElement("svg",i({width:24,height:21},e),r)}},"I95+":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("qcxv"),s=n("AZup"),l=r.b.div.withConfig({displayName:"heading-center__Wrapper",componentId:"sc-16prid1-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;h2{max-width:","px;margin-bottom:24px;}p{max-width:","px;text-align:center;margin-bottom:24px;}a{margin-bottom:24px;}"],(function(e){return e.headlineWidth?e.headlineWidth:"610"}),(function(e){return e.textWidth?e.textWidth:"750"}));t.a=function(e){var t=e.className,n=e.headline,a=e.headlineWidth,r=e.text,c=e.textWidth,p=e.linkText,u=e.linkUrl;return i.a.createElement(l,{className:t,headlineWidth:a,textWidth:c},n&&i.a.createElement(s.a,{partialVisibility:!0,once:!0},(function(e){var t=e.isVisible;return i.a.createElement("h2",{className:t?"slideUp enter":"slideUp"},n)})),r&&i.a.createElement(s.a,{partialVisibility:!0,once:!0},(function(e){var t=e.isVisible;return i.a.createElement("p",{className:t?"slideUp enter":"slideUp"},r)})),p&&i.a.createElement(s.a,{partialVisibility:!0,once:!0},(function(e){var t=e.isVisible;return i.a.createElement(o.a,{href:u,className:t?"slideUp enter":"slideUp"},p)})))}},TvSw:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("8o2o"),i=n("q1tI"),r=n.n(i),o=n("vOnD"),s=n("vvhN"),l=n("Wbzz"),c=o.b.p.withConfig({displayName:"paragraph__StyledParagraph",componentId:"si4vm-0"})(["font-family:Avenir,sans-serif;font-size:","px;line-height:","px;max-width:",";padding-bottom:",";margin-bottom:","px;margin-top:",";"," "," "," span.big{font-family:Avenir-Heavy,sans-serif;}span.blue{color:","}a{color:",";font-size:","px;line-height:","px;"," transition:all 0.3s ease-in-out;&:hover{color:",";}}"],(function(e){return e.big?"20":"16"}),(function(e){return e.big?"32":"24"}),(function(e){return e.maxWidth?e.maxWidth+"px":""}),(function(e){return e.bottomPadding?e.bottomPadding+"px":""}),(function(e){return e.bottomMargin}),(function(e){return e.topMargin?e.topMargin+"px":""}),(function(e){return e.flex&&"display: flex;"}),(function(e){return e.flexAlign&&"align-items: "+e.flexAlignValue+";"}),(function(e){return e.flexJustify&&"justify-content: "+e.flexJustifyValue+";"}),s.a.blue1,s.a.blue1,(function(e){return e.big?"20":"16"}),(function(e){return e.big?"32":"24"}),(function(e){return e.big&&"font-family: Avenir-Heavy, sans-serif;"}),s.a.orange1),p=function(e){var t=e.children,n=e.maxWidth,i=e.mixed,o=Object(a.a)(e,["children","maxWidth","mixed"]);return r.a.createElement(c,Object.assign({maxWidth:n},o),"string"==typeof t||i?t:null,"object"==typeof t&&!1===i?t.map((function(e){return e.url?r.a.createElement(l.Link,{to:e.url}," "+e.text+" "):e.text})):null)};p.defaultProps={flex:!1,flexAlign:!1,flexJustify:!1,flexJustifyValue:"center",flexAlignValue:"center",bottomMargin:32,mixed:!1}},Wdr8:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD").b.div.withConfig({displayName:"top-buttons-box__Wrapper",componentId:"sc-12jcaeq-0"})(["display:flex;flex-direction:column;width:100%;@media (min-width:576px){align-items:center;}@media (min-width:","){flex-direction:row;}"],(function(e){return e.mediaXL?"1200px":"992px"}));t.a=function(e){var t=e.children,n=e.mediaXL;return i.a.createElement(r,{mediaXL:n},t)}},XuRJ:function(e,t,n){"use strict";var a=n("8o2o"),i=n("9Hrx"),r=n("q1tI"),o=n.n(r),s=n("aqT/"),l=n.n(s),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={active:!0},n}return Object(i.a)(t,e),t.prototype.render=function(){var e=this,t=this.state.active,n=this.props,i=n.once,r=n.children,s=Object(a.a)(n,["once","children"]);return o.a.createElement(l.a,Object.assign({active:t,onChange:function(t){return i&&t&&e.setState({active:!1},(function(){return console.log("turned the thing off!")}))}},s),(function(e){var t=e.isVisible;return r({isVisible:t})}))},t}(r.Component);c.defaultProps={once:!1},t.a=c},Zar6:function(e,t,n){"use strict";var a=n("q1tI");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r=a.createElement("defs",null,a.createElement("linearGradient",{id:"top-left-transparent-blue2_inline_svg__a",x1:"100%",x2:"100%",y1:"95.674%",y2:"0%"},a.createElement("stop",{offset:"0%",stopColor:"#FFF",stopOpacity:0}),a.createElement("stop",{offset:"100%",stopColor:"#D2E0FE"}))),o=a.createElement("path",{fill:"url(#top-left-transparent-blue2_inline_svg__a)",fillRule:"evenodd",d:"M136 0v136H0C0 60.89 60.89 0 136 0z",transform:"rotate(180 68 68)"});t.a=function(e){return a.createElement("svg",i({viewBox:"0 0 136 136"},e),r,o)}},bcDI:function(e,t,n){"use strict";var a=n("8o2o"),i=n("q1tI"),r=n.n(i),o=n("vOnD"),s=n("bfge"),l=n("XuRJ"),c=n("5T/x"),p=n("/61k"),u=n("dBvy"),d=o.b.div.withConfig({displayName:"top__Wrapper",componentId:"sc-1ld4c8g-0"})(["display:flex;flex-direction:column;align-items:center;position:relative;padding-top:80px;@media (min-width:992px){flex-direction:row;height:",";max-height:777px;padding-top:0;}"],(function(e){return e.heightSM?e.heightSM:"100vh"})),m=o.b.div.withConfig({displayName:"top__Oval",componentId:"sc-1ld4c8g-1"})(['width:90%;position:absolute;top:0;right:0;z-index:-1;@media (min-width:992px){width:50%;}@media (min-width:1200px){max-width:850px;max-height:777px;}&::after{content:"";display:block;padding-bottom:100%;}& > svg{position:absolute;right:0;bottom:0;defs{radialGradient{stop{&:nth-child(1){stop-color:',";}&:nth-child(2){stop-color:",";}}}}path{transform:matrix(1,0,0,-1,-115,777);}}"],(function(e){return function(e){switch(e){case"blue":return s.a.blue1;case"orange":return s.a.orange1;case"purple":return"#9168ff";case"purple-2":return"#d2aafb";case"yellow":return"#ffc95b";case"green":return"#97e0c7";case"sun":return"#ffb059";case"sun-2":return"#ffc95b";case"blackpink":return"#ffb8b8";case"darkblue":return"#7891fc";case"lightpurple":return"#d2aafb";case"love":return"#fdabab";case"babyblue":return"#71bef8";default:return""}}(e.ovalColor)}),(function(e){return function(e){switch(e){case"blue":return s.a.babyblue2;case"orange":return s.a.orange2;case"purple":return"#dad2ff";case"purple-2":return"#ede0fa";case"yellow":return"#fff5d4";case"green":return"#d5f3e8";case"sun":return"#ffe3c5";case"sun-2":return"#fff5d4";case"blackpink":return"#ffdddd";case"darkblue":return"#ced7ff";case"lightpurple":return"#ede0fa";case"love":return"#f9e0e0";case"babyblue":return"#d2eeff";default:return""}}(e.ovalColor)})),g=o.b.div.withConfig({displayName:"top__Content",componentId:"sc-1ld4c8g-2"})(["display:flex;flex-wrap:wrap;"]),h=o.b.div.withConfig({displayName:"top__TextContainer",componentId:"sc-1ld4c8g-3"})(["display:flex;flex-direction:column;align-items:center;width:100%;padding-top:32px;@media (min-width:992px){width:","%;align-items:flex-start;}@media (min-width:1200px){padding-top:","px;}h1{width:100%;text-align:center;padding-bottom:40px;@media (min-width:992px){text-align:left;padding-bottom:24px;}@media (min-width:992px){max-width:","px;}}p{margin-bottom:32px;text-align:center;@media (min-width:992px){text-align:left;max-width:","px;}}"],(function(e){return e.contentWidth?e.contentWidth:"50"}),(function(e){return e.contentPaddingTop?e.contentPaddingTop:"150"}),(function(e){return e.headlineWidth?e.headlineWidth:"480"}),(function(e){return e.textWidth?e.textWidth:e.headlineWidth?e.headlineWidth:"480"})),f=o.b.div.withConfig({displayName:"top__ImageContainer",componentId:"sc-1ld4c8g-4"})(["display:flex;max-width:",";width:100%;top:50%;right:55%;@media (min-width:992px){position:absolute;width:55%;transform:translate(100%,-50%);","}.gatsby-image-wrapper{width:100%;img{object-fit:contain !important;}}"],(function(e){return e.imageWidth?e.imageWidth+"px":"950px"}),(function(e){return e.imagePositionRight&&"right: "+e.imagePositionRight+";"})),x=function(e){var t=e.children,n=e.imageName,i=e.imageAlt,o=e.imageWidth,s=e.imagePositionRight,x=e.contentWidth,b=e.headlineWidth,w=e.textWidth,v=e.ovalColor,y=Object(a.a)(e,["children","imageName","imageAlt","imageWidth","imagePositionRight","contentWidth","headlineWidth","textWidth","ovalColor"]);return r.a.createElement(d,y,r.a.createElement(l.a,{partialVisibility:!0,once:!0},(function(e){var t=e.isVisible;return r.a.createElement(m,{className:t?"scaleUp enter":"scaleUp",ovalColor:v},r.a.createElement(u.a,null))})),r.a.createElement(f,{imageWidth:o,imagePositionRight:s},r.a.createElement(p.a,{filename:n,alt:i})),r.a.createElement(c.a,null,r.a.createElement(g,null,r.a.createElement(l.a,{partialVisibility:!0,once:!0},(function(e){var n=e.isVisible;return r.a.createElement(h,Object.assign({className:n?"slideRight enter":"slideRight",contentWidth:x,headlineWidth:b,textWidth:w},y),t)})))))};t.a=x,x.defaultProps={OvalSVGFile:u.a}},dBvy:function(e,t,n){"use strict";var a=n("q1tI");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r=a.createElement("defs",null,a.createElement("radialGradient",{cx:"0%",cy:"100%",fx:"0%",fy:"100%",r:"110.957%",gradientTransform:"scale(.94296 1) rotate(-44.136 0 1)",id:"oval_inline_svg__a"},a.createElement("stop",{stopColor:"#FFB8DA",offset:"0%"}),a.createElement("stop",{stopColor:"#FCEFEF",offset:"100%"}))),o=a.createElement("path",{d:"M948.2 0v777l-824-.007C149.072 343.7 508.48 0 948.2 0z",transform:"matrix(1 0 0 -1 -124 777)",fill:"url(#oval_inline_svg__a)",fillRule:"evenodd"});t.a=function(e){return a.createElement("svg",i({viewBox:"0 0 824 777"},e),r,o)}},eqkC:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={white1:"0 24px 32px 0 rgba(236,236,236,0.50)",white2:"0 40px 80px 0 rgba(171,171,171,0.50)",babyblue1:"0 32px 48px 0 rgba(144,181,197,0.80)",blue1:"0 32px 48px 0 rgba(80,137,253,0.64)",green1:"0 32px 48px 0 rgba(151,224,199,0.59)",orange1:"0 32px 48px 0 rgba(253,133,80,0.62)",purple1:"0 32px 48px 0 rgba(200,163,236,0.64)",red1:"0 32px 48px 0 rgba(197,144,144,0.64)",yellow1:"0 32px 48px 0 rgba(223,194,134,0.64)",babyblue2:"0 24px 32px 0 rgba(166,213,233,0.50)",blue2:"0 24px 32px 0 rgba(177,190,222,0.50)",green2:"0 24px 32px 0 rgba(179,219,217,0.50)",orange2:"0 24px 32px 0 rgba(219,202,188,0.50)",purple2:"0 24px 32px 0 rgba(199,186,213,0.50)",red2:"0 24px 32px 0 rgba(224,178,178,0.50)",yellow2:"0 24px 32px 0 rgba(231,216,162,0.63)"}},kDk7:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("5T/x"),s=n("Y+kd"),l=r.b.div.withConfig({displayName:"left-image-right-content__Wrapper",componentId:"oxrm8t-0"})(["position:relative;"]),c=r.b.div.withConfig({displayName:"left-image-right-content__Flex",componentId:"oxrm8t-1"})(["display:flex;justify-content:space-between;"]),p=r.b.div.withConfig({displayName:"left-image-right-content__Content",componentId:"oxrm8t-2"})(["display:flex;flex-direction:column;justify-content:",";width:100%;max-width:670px;padding-top:","px;"],(function(e){return e.contentCenter?"center":""}),(function(e){return e.paddingTop?e.paddingTop:"60"})),u=r.b.div.withConfig({displayName:"left-image-right-content__Sticky",componentId:"oxrm8t-3"})(["display:block;width:100%;.gatsby-image-wrapper{position:sticky !important;top:100px;}"]),d=r.b.div.withConfig({displayName:"left-image-right-content__Imagebox",componentId:"oxrm8t-4"})(["display:none;width:100%;max-width:","px;position:relative;@media(min-width:769px){display:flex;}.gatsby-image-wrapper{height:auto;width:100%;}"],(function(e){return e.imageWidth?e.imageWidth:"485"}));t.a=function(e){var t=e.children,n=e.image,a=e.paddingTop,r=e.contentCenter,m=e.imageWidth;return i.a.createElement(l,null,i.a.createElement(o.a,null,i.a.createElement(c,null,i.a.createElement(d,{imageWidth:m},i.a.createElement(u,null,i.a.createElement(s.a,{filename:n}))),i.a.createElement(p,{paddingTop:a,contentCenter:r},t))))}},nW6E:function(e,t,n){"use strict";n.r(t);var a,i,r,o=n("q1tI"),s=n.n(o),l=n("Bl7J"),c=n("vrFN"),p=(n("Wdr8"),n("1u1j")),u=n("FQHe"),d=n("28u8"),m=n("vGqF"),g=n("bcDI"),h=n("vOnD"),f=n("bfge"),x=n("cQKk"),b=n("TvSw"),w=n("kDk7"),v=h.b.section.withConfig({displayName:"about__About",componentId:"l2up7e-0"})(["position:relative;padding-bottom:120px;p{color:",";}ul{margin-bottom:0;}"],f.a.grey2),y=function(e){var t=e.className,n=e.content;return s.a.createElement(v,{className:t},s.a.createElement(w.a,{image:"business-license-requirements-about",imageWidth:"350"},s.a.createElement(x.a,{size:3,bottomMargin:"48"},n.header),s.a.createElement(b.a,{big:!0,bottomMargin:"0"},n.text)))},E=n("vvhN"),C=n("ufX1"),_=n("4pRe"),I=n("Tzsx"),S=n("I95+"),N=n("oSDl"),k=n("w0o3"),W=n("Zar6"),O=h.b.div.withConfig({displayName:"search-tool__SearchTool",componentId:"sc-1vemxh1-0"})(["padding-bottom:100px;padding-top:100px;position:relative;background-image:",";"],E.b.blue3),B=h.b.div.withConfig({displayName:"search-tool__ImageBoxes",componentId:"sc-1vemxh1-1"})(["display:grid;grid-template-columns:1fr;grid-gap:30px;padding-top:80px;padding-bottom:48px;width:100%;@media(min-width:769px){grid-template-columns:1fr 1fr;}@media (min-width:970px){width:970px;margin:0 auto;}.box{padding:16px 16px 56px;h4{text-align:center;padding:24px 0 0;}&--left{border-radius:5px;@media (min-width:769px){border-radius:50px 5px 5px 50px;}.top{border-radius:5px;@media (min-width:769px){border-radius:35px 5px 5px 5px;}}}&--right{border-radius:5px;@media (min-width:769px){border-radius:5px 50px 50px 5px;}.top{border-radius:5px;@media (min-width:769px){border-radius:5px 35px 5px 5px;}}}}.dropdown{max-width:304px;margin:0 auto;"]),D=(h.b.div.withConfig({displayName:"search-tool__GreenCurve",componentId:"sc-1vemxh1-2"})(["position:absolute;right:-115px;bottom:-122px;width:115px;"]),C.a.state.map((function(e){return e.name}))),R=["Option 1","Option 2","Option 3"],M=function(e){var t=e.content,n=t.cards;return s.a.createElement(O,null,s.a.createElement(k.a,{heigh:"720",width:"720",top:"0",left:"0"},s.a.createElement(W.a,null)),s.a.createElement(I.a,null,s.a.createElement(S.a,{headline:t.header,headlineWidth:"700",text:t.text}),s.a.createElement(B,null,s.a.createElement(N.a,{className:"box box--left",image:"your-state",color:E.a.blue3},s.a.createElement(x.a,{size:"4"},n[0]),s.a.createElement(_.a,{className:"dropdown",placeholder:"Select",options:D})),s.a.createElement(N.a,{className:"box box--right",image:"forming-a-corporation",color:E.a.orange3},s.a.createElement(x.a,{size:"4"},n[1]),s.a.createElement(_.a,{className:"dropdown",placeholder:"Select",options:R}))),s.a.createElement(p.a,{content:t.button,theme:"primary56",arrow:!0})))},T=n("H0Ff"),H="Do I need a Business License?",j="Find out what licenses and permits you may need for \n    your new business.",L={header:"Find out what licenses and permits you may need for your new business.",text:"Whether you’re starting a home-based business or running a startup with multiple employees, it’s important to ensure you’re meeting all legal requirements at the federal, state, and local levels. The business licenses you need can depend on a variety of factors, including the services you offer, your location, the type of business you’re running, or the products you sell."},q={header:"Incfile’s Business License Search Tool",text:"Our Business License Search Tool helps you narrow down the requirements for your business. Just enter the relevant information below to learn the likely registrations, permits, or licenses you’ll need.",cards:["Your State","Your Industy"],button:{text:"Check Requirements",url:"/"}};(r={header:"Here are the licenses you will need",cardResults:[(a={text:"Your State"},a.text="California",a),(i={text:"Your Industry"},i.text="Construction",i)],list:["General Contractor License","Specialty Contractor License","Sales Tax Registration","Payroll Tax Registration"],link:{text:"Search Again",url:"/"}}).header="Want more 1-on-1 help?",r.text="Our Business License Research Package offers total peace of mind by having \n    our licensing specialist conduct the necessary research to determine all of the licenses and permits required on a city, state, and county level specifically for your business.",r.button={text:"Do the research for me",url:"/"},t.default=function(){return s.a.createElement(l.a,null,s.a.createElement(c.a,{title:"Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation",description:"Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing."}),s.a.createElement(g.a,{imageName:"mrs-bulb-business-license-requirements",imageAlt:"Mrs Bulb and with checklist",ovalColor:"sun",headlineWidth:"460",textWidth:"480"},s.a.createElement("h1",null,H),s.a.createElement("p",null,j),s.a.createElement(u.a,{topMargin:"0"},s.a.createElement(d.a,null),s.a.createElement(m.a,null))),s.a.createElement(y,{content:L}),s.a.createElement(M,{content:q}),s.a.createElement(T.a,null))}},oSDl:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("vvhN"),s=n("/e4F"),l=n("tBDR"),c=r.b.div.withConfig({displayName:"top-image-box__Wrapper",componentId:"dtx1hl-0"})(["width:100%;padding:16px 16px 40px;position:relative;border-radius:5px;background-color:",";box-shadow:",";max-width:470px;justify-self:center;@media (min-width:1024px){width:100%;}& > .top{display:flex;justify-content:center;align-items:center;height:128px;width:100%;background-color:",";border-radius:5px;.gatsby-image-wrapper{height:96px;width:96px;}}h4{padding:24px 24px 16px;}p,a{font-size:16px;line-height:24px;}p{color:",";padding:0 24px;}"],o.a.white,(function(e){return e.noShadow?"":s.a.white1}),(function(e){return e.color?e.color:o.a.white}),o.a.grey1);t.a=function(e){var t=e.className,n=e.image,a=e.color,r=e.children,o=e.noShadow;return i.a.createElement(c,{className:t,color:a,noShadow:o},i.a.createElement("div",{className:"top"},n&&i.a.createElement(l.a,{filename:n})),i.a.createElement("div",{className:"content"},r))}},qcxv:function(e,t,n){"use strict";var a=n("8o2o"),i=n("q1tI"),r=n.n(i),o=n("vOnD"),s=n("JBFi"),l=o.b.a.withConfig({displayName:"arrow-link__Wrapper",componentId:"icd0r5-0"})(["display:flex;align-items:baseline;text-decoration:none;margin-bottom:15px;&:last-child{margin-bottom:0;}span{transition:color 0.3s ease;font-weight:600;font-size:",";}&:hover{color:#fd8550;svg{path{fill:#fd8550;}}}"],(function(e){return e.fontSize?e.fontSize:"initial"})),c=o.b.div.withConfig({displayName:"arrow-link__Arrow",componentId:"icd0r5-1"})(["display:flex;align-items:center;justify-content:center;height:12px;width:12px;margin-right:10px;svg{path{transition:fill 0.3s ease;fill:#5088fd;}}"]);t.a=function(e){var t=e.children,n=e.className,i=e.url,o=Object(a.a)(e,["children","className","url"]);return r.a.createElement(l,Object.assign({href:null!=i?i:"#",className:n},o),r.a.createElement(c,null,r.a.createElement(s.a,null)),r.a.createElement("span",null,t))}},tBDR:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("Wbzz"),o=n("9eSz"),s=n.n(o);t.a=function(e){return i.a.createElement(r.StaticQuery,{query:"1938523414",render:function(t){var n=t.images.edges.find((function(t){return t.node.relativePath.includes(e.filename)}));if(!n)return null;var a="";return null!==n.node.childImageSharp&&(a=n.node.childImageSharp.fluid),a?i.a.createElement(s.a,{alt:e.alt,fluid:a}):null}})}},ufX1:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={state:[{name:"Alabama",url:"https://revenue.alabama.gov/business-license/"},{name:"Alaska",url:"https://www.commerce.alaska.gov/web/cbpl/businesslicensing.aspx"},{name:"Arizona",url:"https://azdor.gov/transaction-privilege-tax/tpt-license/license-fees-cancellation-and-other-changes"},{name:"Arkansas",url:"https://www.businesslicenses.com/Licenses/AR/"},{name:"California",url:"http://www.calgold.ca.gov/"},{name:"Colorado",url:"https://www.colorado.gov/pacific/dora/licenses-permits-and-filings"},{name:"Connecticut",url:"https://www.advancect.org/advancing-business/assistance/"},{name:"Delaware",url:"https://onestop.delaware.gov/Operate_Register"},{name:"District of Columbia",url:"https://dc.gov/page/permits-licenses-and-certifications"},{name:"Florida",url:"https://dos.myflorida.com/library-archives/research/florida-information/business/starting-a-business-in-florida/small-business/license/"},{name:"Georgia",url:"http://sos.ga.gov/index.php/?section=licensing"},{name:"Guam",url:"http://www.investguam.com/business-in-guam/business-development/"},{name:"Hawaii",url:"https://portal.ehawaii.gov/business/professional-licensing/"},{name:"Idaho",url:"http://www.state.id.us/business/"},{name:"Illinois",url:"https://www2.illinois.gov/business/registration-licenses-permits"},{name:"Indiana",url:"https://www.in.gov/core/business_guide.html"},{name:"Iowa",url:"https://tax.iowa.gov/starting-business"},{name:"Kansas",url:"https://ksbiz.kansas.gov/start/obtain-licenses-and-permits/"},{name:"Kentucky",url:"https://onestop.ky.gov/Pages/default.aspx"},{name:"Louisiana",url:"https://www.sos.la.gov/BusinessServices/StartABusiness/CreateABusinessLicenseChecklist/Pages/default.aspx"},{name:"Maine",url:"https://www.maine.gov/portal/business/licensing.html"},{name:"Maryland",url:"https://marylandtaxes.gov/business/types-of-business-licenses.php"},{name:"Massachusett",url:"https://www.mass.gov/topics/business-licenses-permits"},{name:"Michigan",url:"https://www.michigan.gov/statelicensesearch/"},{name:"Minnesota",url:"https://mn.gov/elicense/"},{name:"Mississippi",url:"https://www.mssbdc.org/resources/faqs#blicense"},{name:"Missouri",url:"https://openforbiz.mo.gov/"},{name:"Montana",url:"https://mtrevenue.gov/?s=business+license"},{name:"Nebraska",url:"https://sos.nebraska.gov/licensing/licensing-division"},{name:"Nevada",url:"https://www.nvsos.gov/sos/licensing/state-business-license"},{name:"New Hampshire",url:"https://www.revenue.nh.gov/faq/new-business-tax.htm"},{name:"New Jersey",url:"https://www.nj.gov/njbusiness/licenses/"},{name:"New Mexico",url:"https://www.businesslicenses.com/Licenses/NM/"},{name:"New York",url:"https://www.dos.ny.gov/licensing/"},{name:"North Carolina",url:"https://edpnc.com/start-or-grow-a-business/start-a-business/"},{name:"North Dakota",url:"http://www.nd.gov/businessreg/license/index.html"},{name:"Ohio",url:"http://business.ohio.gov/licensing/"},{name:"Oklahoma",url:"https://www.okcommerce.gov/doing-business/startups-entrepreneurs/business-licensing-operating-requirements/"},{name:"Oregon",url:"https://apps.oregon.gov/SOS/LicenseDirectory/"},{name:"Pennsylvania",url:"https://www.dos.pa.gov/ProfessionalLicensing/LicensingServices/Pages/default.aspx"},{name:"Puerto Rico",url:"http://www2.pr.gov/Pages/default.aspx"},{name:"Rhode Island",url:"https://www.ri.gov/business/index.php?subcategory=17&linkgroup=75"},{name:"South Carolina",url:"http://sc.gov/business/Pages/LICENSESANDPERMITSBUSINESS.aspx"},{name:"South Dakota",url:"https://sd.gov/business.aspx"},{name:"Tennessee",url:"https://www.tn.gov/content/tn/business/licenses-permits.html"},{name:"Texas",url:"https://www.tdlr.texas.gov/"},{name:"U.S. Virgin Islands",url:"http://www.usvichamber.com/business_steps.htm"},{name:"Utah",url:"http://www.dopl.utah.gov/renewal.html"},{name:"Vermont",url:"https://www.vermont.gov/work/licenses-and-permits"},{name:"Virginia",url:"http://www.bos.virginia.gov/starting.shtml"},{name:"Washington",url:"https://www.dol.wa.gov/business/"},{name:"West Virginia",url:"https://business4.wv.gov/operatemybusiness/Pages/LicPermRenewal.aspx"},{name:"Wisconsin",url:"http://dsps.wi.gov/Licenses-Permits/Credentialing"},{name:"Wyoming",url:"https://www.wyomingbusiness.org/content/licensing-and-permitting"}]}},xHx8:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("JBFi"),s=n("tBDR"),l=r.b.article.withConfig({displayName:"article__Wrapper",componentId:"sc-1wgljsm-0"})(["margin-bottom:8px;@media (min-width:769px){padding:0 15px;height:275px;margin-bottom:0;}"]),c=r.b.a.withConfig({displayName:"article__Content",componentId:"sc-1wgljsm-1"})(["display:block;background-color:#fff;border-radius:6px;text-decoration:none;user-drag:none;transition:transform 0.3s ease,box-shadow 0.3s ease;z-index:0;&:hover{box-shadow:0 40px 80px 0 #e6e6e6;transform:scale(1.02);}"]),p=r.b.div.withConfig({displayName:"article__ImageBox",componentId:"sc-1wgljsm-2"})(["display:none;height:180px;background-color:#a4eed0;overflow:hidden;img{top:"," !important;transform:scale(",");@media (min-width:1070px){top:"," !important;}}@media (min-width:769px){display:block;}"],(function(e){return e.top?e.top:"0"}),(function(e){return e.scale?e.scale:"1"}),(function(e){return e.topLG?e.topLG:"0"})),u=r.b.div.withConfig({displayName:"article__Text",componentId:"sc-1wgljsm-3"})(["display:flex;align-items:center;height:95px;padding:24px;span{color:#5088fd;font-family:Avenir;font-weight:600;font-size:16px;line-height:19px;}"]),d=r.b.div.withConfig({displayName:"article__Arrow",componentId:"sc-1wgljsm-4"})(["display:flex;align-items:center;justify-content:center;height:12px;width:12px;margin-right:24px;svg{path{transition:fill 0.3s ease;fill:#5088fd;}}"]);t.a=function(e){var t=e.children,n=e.img,a=e.top,r=e.topLG,m=e.scale;return i.a.createElement(l,null,i.a.createElement(c,{href:"#"},n?i.a.createElement(p,{top:a,topLG:r,scale:m},i.a.createElement(s.a,{filename:n})):null,i.a.createElement(u,null,i.a.createElement(d,null,i.a.createElement(o.a,null)),i.a.createElement("span",null,t))))}}}]);
//# sourceMappingURL=component---src-pages-learning-center-entity-business-license-req-js-3eb7f92c6dddd1a4383e.js.map