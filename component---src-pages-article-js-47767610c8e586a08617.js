(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"4M6O":function(e,t,n){"use strict";n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("T39b");var a=n("TqRt");t.__esModule=!0,t.insertScript=function(e,t,n){var a=window.document.createElement("script");return a.async=!0,a.src=e,a.id=t,n.appendChild(a),a},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var a;return function(){var i=this,o=arguments,r=function(){a=null,n||e.apply(i,o)},s=n&&!a;window.clearTimeout(a),a=setTimeout(r,t),s&&e.apply(i,o)}},t.isReactElement=r,t.shallowComparison=function(e,t){var n,a=new Set(Object.keys(e).concat(Object.keys(t)));return 0!==(n=[]).concat.apply(n,(0,i.default)(a)).filter((function(n){return e[n]!==t[n]&&!r(e[n])})).length};var i=a(n("RIqP")),o=a(n("q1tI"));function r(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return o.default.isValidElement(e)}))}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},ORnI:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.default=void 0;var i=a(n("VUT9"));t.Disqus=i.default;var o=a(n("qASQ"));t.CommentCount=o.default;var r=a(n("vAJ3"));t.CommentEmbed=r.default;var s=i.default;t.default=s},RIqP:function(e,t,n){var a=n("Ijbi"),i=n("EbDI"),o=n("ZhPi"),r=n("Bnag");e.exports=function(e){return a(e)||i(e)||o(e)||r()}},Sid9:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),o=n("vOnD"),r=n("Wbzz"),s=n("bfge"),l=n("JBFi"),c=Object(o.b)(r.Link).withConfig({displayName:"path__Wrapper",componentId:"irt7xd-0"})(["display:inline-flex;align-items:center;text-decoration:none;span{font-size:16px;line-height:24px;font-weight:600;color:",";transition:color 0.3s ease;}&:hover{span{color:",";}svg{path{fill:",";}}}"],s.a.orange1,s.a.blue1,s.a.blue1),u=o.b.div.withConfig({displayName:"path__Arrow",componentId:"irt7xd-1"})(["display:flex;align-items:center;justify-content:center;height:12px;width:12px;margin-left:10px;svg{path{transition:fill 0.3s ease;fill:",";}}"],s.a.black);t.a=function(e){var t=e.children,n=e.className,a=e.to;return i.a.createElement(c,{to:a,className:n},i.a.createElement("span",null,t),i.a.createElement(u,null,i.a.createElement(l.a,null)))}},VUT9:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.default=void 0;var i=a(n("pVnL")),o=a(n("8OQS")),r=a(n("VbXa")),s=a(n("q1tI")),l=a(n("17x9")),c=n("4M6O"),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="incfile",n}(0,r.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&this.shortname&&this.cleanInstance(),this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,c.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.DISQUS&&window.document.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.shortname,(0,c.insertScript)("https://"+this.shortname+".disqus.com/embed.js","disqus-embed-script",window.document.body))},n.cleanInstance=function(){(0,c.removeScript)("disqus-embed-script",window.document.body),window&&window.DISQUS&&window.DISQUS.reset();try{delete window.DISQUS}catch(t){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild)},n.render=function(){var e=this.props,t=(e.config,(0,o.default)(e,["config"]));return s.default.createElement("div",(0,i.default)({id:"disqus_thread"},t,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:76,columnNumber:7}}))},t}(s.default.Component);t.default=u,u.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string,language:l.default.string,remoteAuthS3:l.default.string,apiKey:l.default.string})}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}},ZhPi:function(e,t,n){var a=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}},qASQ:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.default=void 0;var i=a(n("pVnL")),o=a(n("8OQS")),r=a(n("VbXa")),s=a(n("q1tI")),l=a(n("17x9")),c=n("4M6O"),u=(0,c.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="incfile",n}(0,r.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,c.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?u():(0,c.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,c.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.placeholder,a=(0,o.default)(e,["config","placeholder"]);return s.default.createElement("span",(0,i.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},a,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:49,columnNumber:7}}),n)},t}(s.default.Component);t.default=d,d.defaultProps={placeholder:"..."},d.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string}),placeholder:l.default.string}},vAJ3:function(e,t,n){"use strict";n("xfY5"),n("a1Th"),n("Btvt");var a=n("TqRt");t.__esModule=!0,t.default=void 0;var i=a(n("VbXa")),o=a(n("q1tI")),r=a(n("17x9")),s=function(e){function t(){return e.apply(this,arguments)||this}(0,i.default)(t,e);var n=t.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){return o.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentEmbed.jsx",lineNumber:17,columnNumber:13}})},t}(o.default.Component);t.default=s,s.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},s.propTypes={commentId:r.default.string.isRequired,width:r.default.number,height:r.default.number,showMedia:r.default.bool,showParentComment:r.default.bool}},z8hX:function(e,t,n){"use strict";n.r(t);var a,i=n("q1tI"),o=n.n(i),r=n("vOnD"),s=n("ORnI"),l=n("bfge"),c=n("gqKf"),u=n("Bl7J"),d=n("vrFN"),p=n("93Zh"),m=n("5T/x"),f=n("Xx49"),h=n("gb9J"),g=n("AuJ4"),w=n("Sid9"),y=r.b.span.withConfig({displayName:"article-path__Wrapper",componentId:"kqlk2r-0"})(["font-family:Avenir,sans-serif;font-size:16px;color:",";margin-bottom:24px;a{margin-right:10px;white-space:nowrap;}"],l.a.grey1),b=function(){return o.a.createElement(y,null,o.a.createElement(w.a,{to:"/"},"Home"),o.a.createElement(w.a,{to:"/tag"},"Business Logistics"),"Steps You Can Take Today to Get Your Home Business Off the Ground")},v=n("jplB"),x=n("jVWb"),E=r.b.div.withConfig({displayName:"article-title__Wrapper",componentId:"sc-1g3933a-0"})(["display:flex;min-height:92px;width:100%;padding-bottom:8px;h1{font-size:40px;line-height:48px;}"]),I=function(e){var t=e.className,n=e.content;return o.a.createElement(E,{className:t},o.a.createElement("h1",null,n))},_=r.b.div.withConfig({displayName:"article-meta__Wrapper",componentId:"man2qr-0"})(["display:flex;width:100%;padding-bottom:24px;p,a{font-size:16px;line-height:24px;}p{color:",";}a{text-decoration:none;transition:color .3s ease;&:hover{color:",";}}"],l.a.grey2,l.a.orange1),C=function(e){var t=e.className,n=e.date,a=e.from;return o.a.createElement(_,{className:t},o.a.createElement("p",null,n," in ",o.a.createElement("a",{href:"#"},a)))},N=r.b.div.withConfig({displayName:"article-header__Wrapper",componentId:"pwowsz-0"})(["display:flex;flex-direction:column;"]),q=function(e){var t=e.className,n=e.content;return o.a.createElement(N,{className:t},o.a.createElement(I,{content:n.title?n.title:""}),o.a.createElement(C,{date:n.meta.date?n.meta.date:"",from:n.meta.from?n.meta.from:""}))},S=n("Y+kd"),k=r.b.div.withConfig({displayName:"article-content__Wrapper",componentId:"sc-113rtpg-0"})(["display:flex;flex-direction:column;.gatsby-image-wrapper{margin:24px 0;}"]),D=function(e){var t=e.className,n=e.content;return o.a.createElement(k,{className:t},console.log(n),o.a.createElement("p",null,n.paragraph1),o.a.createElement(S.a,{filename:n.image1}),o.a.createElement("p",null,n.subtitle1),o.a.createElement("p",null,n.paragraph2))},T=n("0BfC"),O=r.b.div.withConfig({displayName:"article-footer__Wrapper",componentId:"sc-128g3ne-0"})(["display:flex;flex-direction:column;padding-top:48px;.background{padding:24px 32px 32px 128px;position:relative;.gatsby-image-wrapper{height:80px;width:80px;border-radius:50%;position:absolute !important;top:24px;left:24px;}h4{margin-bottom:24px;}p{font-size:16px;line-height:24px;}}"]),W=(r.b.span.withConfig({displayName:"article-footer__Avatar",componentId:"sc-128g3ne-1"})([""]),function(e){var t=e.className;return o.a.createElement(O,{className:t},o.a.createElement(T.a,{className:"background"},o.a.createElement(S.a,{className:"avatar",filename:"mattweik"}),o.a.createElement("h4",null,"Matt Weik"),o.a.createElement("p",null,"Matt Weik is the Founder/Owner of Weik Fitness, LLC and is a well-respected fitness expert/author with a global following. He’s a certified strength and conditioning specialist, personal trainer, and sports nutritionist. His work has been featured in over 85 fitness magazines and over 1,500 websites. You can contact Matt via www.weikfitness.com or on his social channels found on his website.")))}),B=r.b.div.withConfig({displayName:"article-single__Wrapper",componentId:"sc-1fz7z2e-0"})(["height:100%;width:100%;.card{display:flex;flex-direction:column;justify-content:space-between;height:100%;padding:32px;}"]),M={title:"​Steps You Can Take Today to Get Your Home Business Off the Ground",meta:{date:"February 25, 2020",author:"Melissa Clark",from:"State Information"},content:(a={paragraph1:"One of the most difficult parts of starting a business is finding the perfect name. You need to find the right balance of functionality and appeal — letting your customers know what you do with a business name that’s memorable and builds trust. You’ll also need to conduct a corporation/LLC name search with your state to make sure it isn’t already in use before you can officially register your business.  Read on for our advice on choosing the perfect name and how to run a business entity search in your state so you can get your business up and running.",image1:"baloons",subtitle1:"Why the Right Business Name Matters"},a.paragraph1="Now that you have a short list of names that are unique and not used by another business in your state, you can decide on your favorite. For each name on your list, go through the questions again and make sure the name fits with your intent for your business. Talk to the people you know, speak with potential customers and get feedback on the name. Then, you can make the final decision and get your business started.\n                    Don’t forget that Incfile makes it easy to start your business. If you use our Business Name Search tool, you can choose to form your business with us once you’ve settled on a name. Incfile provides unmatched customer service and has formed well over 250,000 companies. Our experience provides us with vast knowledge and experience in filing business entities, and we are familiar with the nuances of each of the 50 states.",a)},j=function(e){var t=e.className;return o.a.createElement(B,{className:t},o.a.createElement(v.a,{className:"card",overflow:!0},o.a.createElement("div",null,o.a.createElement(x.a,{content:["Business Logistics"]}),o.a.createElement(q,{content:M})),o.a.createElement(D,{content:M.content}),o.a.createElement(W,null)))},A=n("H0Ff"),U=r.b.section.withConfig({displayName:"article__Wrapper",componentId:"sc-1yr9p2f-0"})(["padding:72px 0;background-color:",";"],l.a.grey5),R=r.b.div.withConfig({displayName:"article__Content",componentId:"sc-1yr9p2f-1"})(["display:grid;grid-template-columns:100%;grid-gap:30px;@media(min-width:768px){grid-template-columns:2fr 1fr;}"]),L=r.b.div.withConfig({displayName:"article__Single",componentId:"sc-1yr9p2f-2"})(["display:flex;flex-direction:column;"]),P=r.b.div.withConfig({displayName:"article__Sidebar",componentId:"sc-1yr9p2f-3"})(["width:100%;& > div{&:not(:last-child){margin-bottom:30px;}}"]),Q=r.b.div.withConfig({displayName:"article__Disqusbox",componentId:"sc-1yr9p2f-4"})(["display:flex;justify-content:center;align-items:center;width:100%;height:500px;border-radius:5px;background-color:",";margin-top:48px;h2{color:",";}"],l.a.grey3,l.a.grey2),z=r.b.div.withConfig({displayName:"article__Related",componentId:"sc-1yr9p2f-5"})([""]);t.default=function(){var e={url:"https://riotters.github.io/incfile-test/article/",identifier:"1",title:"title"};return o.a.createElement(u.a,null,o.a.createElement(d.a,{title:"Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation",description:"Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing."}),o.a.createElement(p.a,{headline:"Where Business Begins. Your Resource to Grow.",text:"The Incfile Blog",imageName:"business-checklist"}),o.a.createElement(U,null,o.a.createElement(m.a,null,o.a.createElement(R,null,o.a.createElement(L,null,o.a.createElement(b,null),o.a.createElement(j,null),o.a.createElement(Q,null,o.a.createElement("h2",null,"Disqus")),o.a.createElement(s.CommentCount,{config:e,placeholder:"..."}),"/* Post Contents */",o.a.createElement(s.Disqus,{config:e})),o.a.createElement(P,null,o.a.createElement(h.a,null),o.a.createElement(f.a,null),o.a.createElement(g.a,{content:c.b}))),o.a.createElement(z,null),o.a.createElement(A.a,null))))}}}]);
//# sourceMappingURL=component---src-pages-article-js-47767610c8e586a08617.js.map