(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"8o2o":function(e,t,r){"use strict";function i(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}r.d(t,"a",(function(){return i}))},"9eSz":function(e,t,r){"use strict";var i=r("5NKs");t.__esModule=!0,t.default=void 0;var n,a=i(r("v06X")),o=i(r("XEEL")),s=i(r("uDP2")),l=i(r("j8BX")),d=i(r("q1tI")),u=i(r("17x9")),c=function(e){var t=(0,l.default)({},e),r=t.resolutions,i=t.sizes,n=t.critical;return r&&(t.fixed=r,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=O([].concat(t.fluid))),t.fixed&&(t.fixed=O([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed,i=h(t||r||[]);return i&&i.src},h=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},g=Object.create({}),m=function(e){var t=c(e),r=p(t);return g[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,w=new WeakMap;function S(e){return e.map((function(e){var t=e.src,r=e.srcSet,i=e.srcSetWebp,n=e.media,a=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},i&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:i,sizes:a}),d.default.createElement("source",{media:n,srcSet:r,sizes:a}))}))}function O(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function E(e){return e.map((function(e){var t=e.src,r=e.media,i=e.tracedSVG;return d.default.createElement("source",{key:t,media:r,srcSet:i})}))}function C(e){return e.map((function(e){var t=e.src,r=e.media,i=e.base64;return d.default.createElement("source",{key:t,media:r,srcSet:i})}))}function T(e,t){var r=e.srcSet,i=e.srcSetWebp,n=e.media,a=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?i:r)+'" '+(a?'sizes="'+a+'" ':"")+"/>"}var k=function(e,t){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return r&&(r.observe(e),w.set(e,t)),function(){r.unobserve(e),w.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?T(e,!0):"")+T(e)})).join("")+"<img "+d+o+s+r+i+t+a+n+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=d.default.forwardRef((function(e,t){var r=e.src,i=e.imageVariants,n=e.generateSources,a=e.spreadProps,o=e.ariaHidden,s=d.default.createElement(x,(0,l.default)({ref:t,src:r},a,{ariaHidden:o}));return i.length>1?d.default.createElement("picture",null,n(i),s):s})),x=d.default.forwardRef((function(e,t){var r=e.sizes,i=e.srcSet,n=e.src,a=e.style,o=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,h=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:r,srcSet:i,src:n},h,{onLoad:o,onError:u,ref:t,loading:c,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))}));x.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var V=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&m(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&v&&!r.isCritical&&!r.seenBefore;var i=r.isCritical||y&&(b||!r.useIOSupport);return r.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=d.default.createRef(),r.placeholderRef=t.placeholderRef||d.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,a.default)(r)),r.handleRef=r.handleRef.bind((0,a.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=c(e),(r=p(t))&&(g[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=c(this.props),t=e.title,r=e.alt,i=e.className,n=e.style,a=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,g=e.fluid,m=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,w=e.itemProp,O=e.loading,T=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,l.default)({opacity:k?1:0,transition:V?"opacity "+y+"ms":"none"},s),P="boolean"==typeof b?"lightgray":b,j={transitionDelay:y+"ms"},z=(0,l.default)({opacity:this.state.imgLoaded?0:1},V&&j,s,f),_={title:t,alt:this.state.isVisible?"":r,style:z,className:p,itemProp:w};if(g){var W=g,D=h(g);return d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:D.maxWidth?D.maxWidth+"px":null,maxHeight:D.maxHeight?D.maxHeight+"px":null},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(D.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/D.aspectRatio+"%"}}),P&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:P,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&j)}),D.base64&&d.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:D.base64,spreadProps:_,imageVariants:W,generateSources:C}),D.tracedSVG&&d.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:D.tracedSVG,spreadProps:_,imageVariants:W,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(W),d.default.createElement(x,{alt:r,title:t,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:O,draggable:T})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:r,title:t,loading:O},D,{imageVariants:W}))}}))}if(m){var M=m,H=h(m),N=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},a);return"inherit"===a.display&&delete N.display,d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},P&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:P,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},V&&j)}),H.base64&&d.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:_,imageVariants:M,generateSources:C}),H.tracedSVG&&d.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:_,imageVariants:M,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(M),d.default.createElement(x,{alt:r,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:O,draggable:T})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:r,title:t,loading:O},H,{imageVariants:M}))}}))}return null},t}(d.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),P=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function j(e){return function(t,r,i){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+i+"`, but their values are both `undefined`.");u.default.checkPropTypes(((n={})[r]=e,n),t,"prop",i)}}V.propTypes={resolutions:I,sizes:P,fixed:j(u.default.oneOfType([I,u.default.arrayOf(I)])),fluid:j(u.default.oneOfType([P,u.default.arrayOf(P)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var z=V;t.default=z},"aqT/":function(e,t,r){var i;i=function(e,t){return function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t,r){e.exports=r(5)()},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=function(e,t,r){var i=e.direction,n=e.value;switch(i){case"top":return r.top+n<t.top&&r.bottom>t.bottom&&r.left<t.left&&r.right>t.right;case"left":return r.left+n<t.left&&r.bottom>t.bottom&&r.top<t.top&&r.right>t.right;case"bottom":return r.bottom-n>t.bottom&&r.left<t.left&&r.right>t.right&&r.top<t.top;case"right":return r.right-n>t.right&&r.left<t.left&&r.top<t.top&&r.bottom>t.bottom}}},function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return b}));var i=r(1),n=r.n(i),a=r(2),o=r.n(a),s=r(0),l=r.n(s),d=r(3),u=r.n(d);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e){function t(e){var r,i,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,n=p(t).call(this,e),r=!n||"object"!==c(n)&&"function"!=typeof n?h(i):n,m(h(r),"getContainer",(function(){return r.props.containment||window})),m(h(r),"addEventListener",(function(e,t,i,n){var a;r.debounceCheck||(r.debounceCheck={});var o=function(){a=null,r.check()},s={target:e,fn:n>-1?function(){a||(a=setTimeout(o,n||0))}:function(){clearTimeout(a),a=setTimeout(o,i||0)},getLastTimeout:function(){return a}};e.addEventListener(t,s.fn),r.debounceCheck[t]=s})),m(h(r),"startWatching",(function(){r.debounceCheck||r.interval||(r.props.intervalCheck&&(r.interval=setInterval(r.check,r.props.intervalDelay)),r.props.scrollCheck&&r.addEventListener(r.getContainer(),"scroll",r.props.scrollDelay,r.props.scrollThrottle),r.props.resizeCheck&&r.addEventListener(window,"resize",r.props.resizeDelay,r.props.resizeThrottle),!r.props.delayedCall&&r.check())})),m(h(r),"stopWatching",(function(){if(r.debounceCheck)for(var e in r.debounceCheck)if(r.debounceCheck.hasOwnProperty(e)){var t=r.debounceCheck[e];clearTimeout(t.getLastTimeout()),t.target.removeEventListener(e,t.fn),r.debounceCheck[e]=null}r.debounceCheck=null,r.interval&&(r.interval=clearInterval(r.interval))})),m(h(r),"check",(function(){var e,t,i=r.node;if(!i)return r.state;if(e=function(e){return void 0===e.width&&(e.width=e.right-e.left),void 0===e.height&&(e.height=e.bottom-e.top),e}(r.roundRectDown(i.getBoundingClientRect())),r.props.containment){var n=r.props.containment.getBoundingClientRect();t={top:n.top,left:n.left,bottom:n.bottom,right:n.right}}else t={top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth};var a=r.props.offset||{};"object"===c(a)&&(t.top+=a.top||0,t.left+=a.left||0,t.bottom-=a.bottom||0,t.right-=a.right||0);var o={top:e.top>=t.top,left:e.left>=t.left,bottom:e.bottom<=t.bottom,right:e.right<=t.right},s=e.height>0&&e.width>0,l=s&&o.top&&o.left&&o.bottom&&o.right;if(s&&r.props.partialVisibility){var d=e.top<=t.bottom&&e.bottom>=t.top&&e.left<=t.right&&e.right>=t.left;"string"==typeof r.props.partialVisibility&&(d=o[r.props.partialVisibility]),l=r.props.minTopValue?d&&e.top<=t.bottom-r.props.minTopValue:d}"string"==typeof a.direction&&"number"==typeof a.value&&(console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",a.direction,a.value),l=u()(a,e,t));var f=r.state;return r.state.isVisible!==l&&(f={isVisible:l,visibilityRect:o},r.setState(f),r.props.onChange&&r.props.onChange(l)),f})),r.state={isVisible:null,visibilityRect:{}},r}var r,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),r=t,(i=[{key:"componentDidMount",value:function(){this.node=o.a.findDOMNode(this),this.props.active&&this.startWatching()}},{key:"componentWillUnmount",value:function(){this.stopWatching()}},{key:"componentDidUpdate",value:function(e){this.node=o.a.findDOMNode(this),this.props.active&&!e.active?(this.setState({isVisible:null,visibilityRect:{}}),this.startWatching()):this.props.active||this.stopWatching()}},{key:"roundRectDown",value:function(e){return{top:Math.floor(e.top),left:Math.floor(e.left),bottom:Math.floor(e.bottom),right:Math.floor(e.right)}}},{key:"render",value:function(){return this.props.children instanceof Function?this.props.children({isVisible:this.state.isVisible,visibilityRect:this.state.visibilityRect}):n.a.Children.only(this.props.children)}}])&&f(r.prototype,i),a&&f(r,a),t}(n.a.Component);m(b,"defaultProps",{active:!0,partialVisibility:!1,minTopValue:0,scrollCheck:!1,scrollDelay:250,scrollThrottle:-1,resizeCheck:!1,resizeDelay:250,resizeThrottle:-1,intervalCheck:!0,intervalDelay:100,delayedCall:!1,offset:{},containment:null,children:n.a.createElement("span",null)}),m(b,"propTypes",{onChange:l.a.func,active:l.a.bool,partialVisibility:l.a.oneOfType([l.a.bool,l.a.oneOf(["top","right","bottom","left"])]),delayedCall:l.a.bool,offset:l.a.oneOfType([l.a.shape({top:l.a.number,left:l.a.number,bottom:l.a.number,right:l.a.number}),l.a.shape({direction:l.a.oneOf(["top","right","bottom","left"]),value:l.a.number})]),scrollCheck:l.a.bool,scrollDelay:l.a.number,scrollThrottle:l.a.number,resizeCheck:l.a.bool,resizeDelay:l.a.number,resizeThrottle:l.a.number,intervalCheck:l.a.bool,intervalDelay:l.a.number,containment:"undefined"!=typeof window?l.a.instanceOf(window.Element):l.a.any,children:l.a.oneOfType([l.a.element,l.a.func]),minTopValue:l.a.number})},function(e,t,r){"use strict";var i=r(6);function n(){}function a(){}a.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,a,o){if(o!==i){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:n};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])},e.exports=i(r("q1tI"),r("i8i4"))}}]);
//# sourceMappingURL=f5c7d4ba8d9be79ca97573112c8735380fc52f02-af042c752f5313e83fea.js.map