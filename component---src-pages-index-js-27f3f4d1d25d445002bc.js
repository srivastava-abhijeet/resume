(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RXBc:function(e,t,l){"use strict";l.r(t);var a=l("q1tI"),n=l.n(a),o=l("7oih");var r=l("dI71"),i=l("dwco"),c=l.n(i),s=function(e){return e.children},m=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}Object(r.a)(t,e);var l=t.prototype;return l.componentDidMount=function(){c.a.polyfill()},l.handleClick=function(e){e.preventDefault();var t=0,l=!0,a=this.props,n=a.type,o=a.element,r=a.offset,i=a.timeout;if(n&&o)switch(n){case"class":l=!!(t=document.getElementsByClassName(o)[0]);break;case"id":l=!!(t=document.getElementById(o))}l?this.scrollTo(t,r,i):console.log("Element not found: "+o)},l.scrollTo=function(e,t,l){void 0===t&&(t=0),void 0===l&&(l=null);var a=e?e.getBoundingClientRect().top+window.pageYOffset:0;l?setTimeout((function(){window.scroll({top:a+t,left:0,behavior:"smooth"})}),l):window.scroll({top:a+t,left:0,behavior:"smooth"})},l.render=function(){return n.a.createElement(s,null,"object"==typeof this.props.children?n.a.cloneElement(this.props.children,{onClick:this.handleClick}):n.a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(n.a.Component),d=l("TUGy"),p=l.n(d),u=l("obyI"),f=l.n(u);t.default=function(){return n.a.createElement(o.a,null,n.a.createElement("section",{id:"banner"},n.a.createElement("div",{className:"inner"},n.a.createElement("h2",null,f.a.heading),n.a.createElement("p",null,f.a.subHeading)),n.a.createElement(m,{type:"id",element:"two"},n.a.createElement("a",{href:"#two",className:"more"},"Learn More"))),n.a.createElement("section",{id:"two",className:"wrapper alt style2"},n.a.createElement("section",{className:"spotlight"},n.a.createElement("div",{className:"content"},n.a.createElement("h2",null,"Hey, I'm Abhijeet.",n.a.createElement("br",null)),n.a.createElement("p",null,f.a.about),n.a.createElement("p",null,n.a.createElement("div",null,"HIGHLIGHTS"),n.a.createElement("br",null),n.a.createElement("ul",null,f.a.highlights.map((function(e){return n.a.createElement("li",null,e)}))))),n.a.createElement("div",{className:"image"},n.a.createElement("img",{src:p.a,alt:""}))),n.a.createElement("section",{className:"experience-section"},n.a.createElement("div",{className:"overlay-wrapper"},n.a.createElement("div",{className:"content"},n.a.createElement("h1",{className:"section-heading"},"Education"),n.a.createElement("span",{className:"divider center"}),n.a.createElement("div",{className:"experience-wrapper"},n.a.createElement("div",{id:"timeline"},f.a.education.map((function(e){return n.a.createElement("div",{className:"timeline-block"},n.a.createElement("div",{className:"timeline-content"},n.a.createElement("h2",{className:"position"},e.degree),n.a.createElement("h3",{className:"company"},n.a.createElement("a",{href:"{{item.url}}",target:"_blank"},e.university))),n.a.createElement("div",{className:"timeline-img"},n.a.createElement("div",{className:"sprite university"})),n.a.createElement("span",{className:"date"},e.year))}))),n.a.createElement("i",{className:"down-arrow"}))),n.a.createElement("div",{className:"content"},n.a.createElement("h1",{className:"section-heading"},"Experience"),n.a.createElement("span",{className:"divider center"}),n.a.createElement("div",{className:"experience-wrapper"},n.a.createElement("div",{id:"timeline"},f.a.experience.map((function(e){return n.a.createElement("div",{className:"timeline-block"},n.a.createElement("div",{className:"timeline-content"},n.a.createElement("h2",{className:"position"},e.role),n.a.createElement("h3",{className:"company"},n.a.createElement("a",{href:"{{item.url}}",target:"_blank"},e.client)),n.a.createElement("p",{className:"job-desc"},e.description)),n.a.createElement("div",{className:"timeline-img"},n.a.createElement("div",{className:"sprite industry"})),n.a.createElement("span",{className:"date"},e.year))}))),n.a.createElement("i",{className:"down-arrow"})))))),n.a.createElement("section",{id:"skill",className:"skill-spotlight wrapper alt style2"},n.a.createElement("div",{className:"skill-wrapper"},n.a.createElement("h1",{style:{textAlign:"center"}},"Skills",n.a.createElement("br",null)),n.a.createElement("div",{className:"skill-content"},n.a.createElement("div",{style:{padding:"2em"}},n.a.createElement("div",null,"Language/ Environment"),n.a.createElement("br",null),n.a.createElement("ul",null,f.a.skills.language.map((function(e){return n.a.createElement("li",{id:e.id},e.value)})))),n.a.createElement("div",{style:{padding:"2em"}},n.a.createElement("div",null,"Web Technologies"),n.a.createElement("br",null),n.a.createElement("ul",null,f.a.skills.technology.map((function(e){return n.a.createElement("li",{id:e.id},e.value)})))),n.a.createElement("div",{style:{padding:"2em"}},n.a.createElement("div",null,"Framework"),n.a.createElement("br",null),n.a.createElement("ul",null,f.a.skills.framework.map((function(e){return n.a.createElement("li",{id:e.id},e.value)})))),n.a.createElement("div",{style:{padding:"2em"}},n.a.createElement("div",null,"IDE/ Tools"),n.a.createElement("br",null),n.a.createElement("ul",null,f.a.skills.tools.map((function(e){return n.a.createElement("li",{id:e.id},e.value)}))))))),n.a.createElement("section",{className:"certification-section"},n.a.createElement("div",{className:"overlay-wrapper"},n.a.createElement("div",{className:"certification-content"},n.a.createElement("h1",{className:"section-heading"},"Certifications"),n.a.createElement("span",{className:"divider center"}),n.a.createElement("div",{className:"certification-wrapper"},n.a.createElement("ul",null,f.a.certification.map((function(e){return n.a.createElement("li",{id:e.id,className:"certificate-logo"},e.name)}))))))))}},TUGy:function(e,t,l){e.exports=l.p+"static/avatar-ad76548bd7444be2d6f1adac7f169968.png"},dwco:function(e,t,l){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var l,a=e.HTMLElement||e.Element,n={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:a.prototype.scroll||i,scrollIntoView:a.prototype.scrollIntoView},o=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,r=(l=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?f.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):n.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?n.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):f.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},a.prototype.scroll=a.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var e=arguments[0].left,t=arguments[0].top;f.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},a.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},a.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var l=p(this),a=l.getBoundingClientRect(),o=this.getBoundingClientRect();l!==t.body?(f.call(this,l,l.scrollLeft+o.left-a.left,l.scrollTop+o.top-a.top),"fixed"!==e.getComputedStyle(l).position&&e.scrollBy({left:a.left,top:a.top,behavior:"smooth"})):e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function i(e,t){this.scrollLeft=e,this.scrollTop=t}function c(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(e,t){return"Y"===t?e.clientHeight+r<e.scrollHeight:"X"===t?e.clientWidth+r<e.scrollWidth:void 0}function m(t,l){var a=e.getComputedStyle(t,null)["overflow"+l];return"auto"===a||"scroll"===a}function d(e){var t=s(e,"Y")&&m(e,"Y"),l=s(e,"X")&&m(e,"X");return t||l}function p(e){for(;e!==t.body&&!1===d(e);)e=e.parentNode||e.host;return e}function u(t){var l,a,n,r,i=(o()-t.startTime)/468;r=i=i>1?1:i,l=.5*(1-Math.cos(Math.PI*r)),a=t.startX+(t.x-t.startX)*l,n=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,a,n),a===t.x&&n===t.y||e.requestAnimationFrame(u.bind(e,t))}function f(l,a,r){var c,s,m,d,p=o();l===t.body?(c=e,s=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,d=n.scroll):(c=l,s=l.scrollLeft,m=l.scrollTop,d=i),u({scrollable:c,method:d,startTime:p,startX:s,startY:m,x:a,y:r})}}}}()}}]);
//# sourceMappingURL=component---src-pages-index-js-27f3f4d1d25d445002bc.js.map