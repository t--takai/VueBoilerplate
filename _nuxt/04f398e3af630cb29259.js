(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{217:function(t,e,r){var content=r(229);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("60005a62",content,!0,{sourceMap:!1})},218:function(t,e,r){var content=r(233);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("63303fe6",content,!0,{sourceMap:!1})},219:function(t,e,r){var content=r(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("725b8c36",content,!0,{sourceMap:!1})},220:function(t,e,r){var content=r(237);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("21272039",content,!0,{sourceMap:!1})},221:function(t,e,r){var content=r(239);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("3021bfc6",content,!0,{sourceMap:!1})},222:function(t,e,r){var content=r(241);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("3ac49dcb",content,!0,{sourceMap:!1})},223:function(t,e,r){var content=r(246);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("3efc4212",content,!0,{sourceMap:!1})},226:function(t,e,r){"use strict";r(24),r(40),r(30),r(79),r(80),r(59),r(31);var n=r(19),o=r(37),c=(r(78),{name:"BaseNuxtLink",props:{colorType:{type:String,default:"green",validator:function(t){return["green","grey","white"].includes(t)}},exactActiveClass:{type:String,default:""},text:{type:String,require:!0,default:"Text"},url:{type:String,default:"###"}},computed:{className:function(){var t=this.colorType.toLowerCase();return this.$style[t]}}}),l=r(228),f=r(29);var d=Object(f.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("NuxtLink",{class:this.className,attrs:{to:this.url,exactActiveClass:this.exactActiveClass}},[this._t("default"),e("span",{domProps:{textContent:this._s(this.text)}})],2)}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null).exports,h=r(230),m={name:"FeatherIcon",components:{ArrowDownLeftIcon:h.b,ArrowDownRightIcon:h.c,ArrowDownIcon:h.a,ArrowLeftIcon:h.d,ArrowRightIcon:h.e,ArrowUpLeftIcon:h.g,ArrowUpRightIcon:h.h,ArrowUpIcon:h.f,FacebookIcon:h.i,GithubIcon:h.j,InstagramIcon:h.k,TwitterIcon:h.l},props:{iconSize:{type:String,default:"1x",validate:function(t){return["24","1x","1.5x","2x","3x","4x"].includes(t)}},iconName:{type:String,default:"ArrowDownLeftIcon",validate:function(t){return["ArrowDownLeftIcon","ArrowDownRightIcon","ArrowDownIcon","ArrowLeftIcon","ArrowRightIcon","ArrowUpLeftIcon","ArrowUpRightIcon","ArrowUpIcon","FacebookIcon","GithubIcon","InstagramIcon","TwitterIcon"].includes(t)}}}},w=Object(f.a)(m,(function(){var t=this.$createElement;return(this._self._c||t)(this.iconName,{tag:"component",attrs:{size:this.iconSize}})}),[],!1,null,null,null).exports;function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var x={name:"BindNavigation",components:{BaseNuxtLink:d,FeatherIcon:w},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)(["isMobile","isTablet","isDesktop","sitemap"]))},v=r(232);var _=Object(f.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{class:t.$style.wrapper},t._l(t.sitemap,(function(e,i){return r("li",{key:i},[r("BaseNuxtLink",{class:t.$style.listItem,attrs:{text:e.name,url:e.path,exactActiveClass:t.$style.isActive}},[r("transition",{attrs:{appear:""}},[t.$route.path===e.path?r("FeatherIcon",{class:t.$style.icon,attrs:{iconName:"ArrowRightIcon"}}):t._e()],1)],1)],1)})),0)}),[],!1,(function(t){this.$style=v.default.locals||v.default}),null,null).exports,j=(r(62),r(158),{name:"BaseLinkText",props:{colorType:{type:String,default:"green",validator:function(t){return["green","grey","white"].includes(t)}},text:{type:String,require:!0,default:"Text"},url:{type:String,default:"###"}},computed:{className:function(){var t=this.colorType.toLowerCase();return this.$style[t]}}}),O=r(234);var I={name:"LinkTextWithIcon",components:{FeatherIcon:w,BaseLinkText:Object(f.a)(j,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{class:this.className,attrs:{target:"_blank",title:this.text,href:this.url}},[this._t("default"),e("span",{domProps:{textContent:this._s(this.text)}})],2)}),[],!1,(function(t){this.$style=O.default.locals||O.default}),null,null).exports},props:{iconName:{type:String,default:"TwitterIcon"},iconSize:{type:String,default:"1.5x"},colorType:{type:String,default:"green",validator:function(t){return["green","grey","white"].includes(t)}},text:{type:String,require:!0,default:"Text"},url:{type:String,require:!0,default:"https://ja.nuxtjs.org/"}}},N=(r(236),{name:"BaseFooter",components:{LinkTextWithIcon:Object(f.a)(I,(function(){var t=this.$createElement,e=this._self._c||t;return e("BaseLinkText",{attrs:{url:this.url,colorType:this.colorType,text:this.text}},[e("FeatherIcon",{staticClass:"icon",attrs:{iconName:this.iconName,iconSize:this.iconSize}})],1)}),[],!1,null,"49a57cb6",null).exports},props:{isMobile:{type:Boolean,default:!0},bindStatus:{type:String,default:"Vuex Binding"},repoUrl:{type:String,default:"https://github.com/nuxt/nuxt.js"},authorName:{type:String,default:"Author Name"},authorPosition:{type:String,default:"UI Designer / Front-end Engineer"},twitterUrl:{type:String,default:"https://twitter.com/nuxt_js"}},computed:{rowClassName:function(){return this.isMobile?this.$style.rowMobile:this.$style.row},repoName:function(){var t=this.repoUrl.split("/");return t[t.length-1]},twitterName:function(){var t=this.twitterUrl.split("/");return"@"+t[t.length-1]}}}),k=r(238);function T(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var S={name:"BindFooter",components:{BaseFooter:Object(f.a)(N,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{class:t.$style.footer},[r("dl",[r("div",{class:t.rowClassName},[r("dt",[t._v("Vuex Binding")]),r("dd",[t._v(t._s(t.bindStatus))])]),r("div",{class:t.rowClassName},[r("dt",[t._v("GitHub")]),r("dd",[r("LinkTextWithIcon",{attrs:{iconName:"GithubIcon",colorType:"white",text:t.repoName,url:t.repoUrl}})],1)]),r("div",{class:t.rowClassName},[r("dt",[t._v("Author")]),r("dd",[r("div",[t._v(t._s(t.authorName)+" ("+t._s(t.authorPosition)+")")]),r("LinkTextWithIcon",{attrs:{iconName:"TwitterIcon",colorType:"white",text:t.twitterName,url:t.twitterUrl}})],1)])]),r("div",{class:t.$style.copy},[t._v("© 2020 "+t._s(t.authorName)+".")])])}),[],!1,(function(t){this.$style=k.default.locals||k.default}),null,null).exports},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?T(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):T(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)(["isMobile","isTablet","isDesktop","author","repositoryUrl"]),{statusText:function(){var text="isMobile";return this.isTablet?text="isTablet":this.isDesktop&&(text="isDesktop"),text}})},P={name:"BaseLayout",components:{BindNavigation:_,BindFooter:Object(f.a)(S,(function(){var t=this.$createElement;return(this._self._c||t)("BaseFooter",{attrs:{isMobile:this.isMobile,bindStatus:this.statusText,repoUrl:this.repositoryUrl,authorName:this.author.name,authorPosition:this.author.position,twitterUrl:this.author.twitterUrl}})}),[],!1,null,null,null).exports}},$=r(240);var A=Object(f.a)(P,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:this.$style.layout},[e("main",{class:this.$style.main},[this._t("default"),e("BindNavigation",{class:this.$style.nav})],2),e("BindFooter",{class:this.$style.footer})],1)}),[],!1,(function(t){this.$style=$.default.locals||$.default}),null,null);e.a=A.exports},227:function(t,e,r){"use strict";r(242);var n={name:"Typography",props:{text:{type:String,default:"15:00"},level:{type:Number,default:2,validator:function(t){return t>=1&&t<=4}}},computed:{tagName:function(){return"h".concat(this.level)}}},o=(r(245),r(29)),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)(this.tagName,{tag:"component",class:this.tagName,domProps:{textContent:this._s(this.text)}})}),[],!1,null,"ecce1064",null);e.a=component.exports},228:function(t,e,r){"use strict";var n=r(217),o=r.n(n);e.default=o.a},229:function(t,e,r){(e=r(57)(!1)).push([t.i,".green_29mRo{padding:.1em;max-width:90vw;display:inline-flex;align-items:center;justify-content:center;line-height:1.2;border-radius:.4rem;color:#3b8070;text-decoration:underline;transition:transform .1s cubic-bezier(.46,.03,.52,.96);white-space:pre-line;word-wrap:break-word}.green_29mRo:hover{text-decoration:none;transform:scale(1.1)}.grey_fY1T1{padding:.1em;max-width:90vw;display:inline-flex;align-items:center;justify-content:center;line-height:1.2;border-radius:.4rem;color:#35495e;text-decoration:underline;transition:transform .1s cubic-bezier(.46,.03,.52,.96);white-space:pre-line;word-wrap:break-word}.grey_fY1T1:hover{text-decoration:none;transform:scale(1.1)}.white_1VWKT{padding:.1em;max-width:90vw;display:inline-flex;align-items:center;justify-content:center;line-height:1.2;border-radius:.4rem;color:#f5f5f5;text-decoration:underline;transition:transform .1s cubic-bezier(.46,.03,.52,.96);white-space:pre-line;word-wrap:break-word}.white_1VWKT:hover{text-decoration:none;transform:scale(1.1)}",""]),e.locals={green:"green_29mRo",grey:"grey_fY1T1",white:"white_1VWKT"},t.exports=e},232:function(t,e,r){"use strict";var n=r(218),o=r.n(n);e.default=o.a},233:function(t,e,r){(e=r(57)(!1)).push([t.i,".wrapper_9HhbN{display:block}.wrapper_9HhbN .listItem_mamEB{position:relative;padding-left:1.2em;font-size:2.6rem;font-weight:700}.wrapper_9HhbN .listItem_mamEB.isActive_2cauG{color:#8a2be2}.wrapper_9HhbN .listItem_mamEB .icon_1piFU{position:absolute;left:0}",""]),e.locals={wrapper:"wrapper_9HhbN",listItem:"listItem_mamEB",isActive:"isActive_2cauG",icon:"icon_1piFU"},t.exports=e},234:function(t,e,r){"use strict";var n=r(219),o=r.n(n);e.default=o.a},235:function(t,e,r){(e=r(57)(!1)).push([t.i,".green_jf0ZO{padding:.1em;max-width:90vw;display:inline-flex;align-items:center;justify-content:center;line-height:1.2;border-radius:.4rem;color:#3b8070;text-decoration:underline;transition:transform .1s cubic-bezier(.46,.03,.52,.96);white-space:pre-line;word-wrap:break-word}.green_jf0ZO:hover{text-decoration:none;transform:scale(1.1)}.grey_34K27{padding:.1em;max-width:90vw;display:inline-flex;align-items:center;justify-content:center;line-height:1.2;border-radius:.4rem;color:#35495e;text-decoration:underline;transition:transform .1s cubic-bezier(.46,.03,.52,.96);white-space:pre-line;word-wrap:break-word}.grey_34K27:hover{text-decoration:none;transform:scale(1.1)}.white_136qk{padding:.1em;max-width:90vw;display:inline-flex;align-items:center;justify-content:center;line-height:1.2;border-radius:.4rem;color:#f5f5f5;text-decoration:underline;transition:transform .1s cubic-bezier(.46,.03,.52,.96);white-space:pre-line;word-wrap:break-word}.white_136qk:hover{text-decoration:none;transform:scale(1.1)}",""]),e.locals={green:"green_jf0ZO",grey:"grey_34K27",white:"white_136qk"},t.exports=e},236:function(t,e,r){"use strict";var n=r(220);r.n(n).a},237:function(t,e,r){(e=r(57)(!1)).push([t.i,".icon[data-v-49a57cb6]{margin-right:.4rem}",""]),t.exports=e},238:function(t,e,r){"use strict";var n=r(221),o=r.n(n);e.default=o.a},239:function(t,e,r){(e=r(57)(!1)).push([t.i,".footer_3UxDG{background-color:#35495e;color:#f5f5f5;font-size:1.6rem;padding:3em 5em 1em}.copy_3_KBa,.footer_3UxDG{font-weight:400}.copy_3_KBa{margin-top:1.6rem;border-top:1px solid hsla(0,0%,96.1%,.4);padding:1.6rem 0;text-align:center;font-size:1rem}.row_19dPf{display:flex;align-items:flex-start;justify-content:flex-start;min-height:2em}.row_19dPf:not(:first-of-type){margin-top:.4rem}.row_19dPf>dt{flex:0 0 8em}.row_19dPf>dd{flex:1 1 100%}.rowMobile_2LmRb{display:flex;align-items:flex-start;justify-content:flex-start;min-height:2em;flex-wrap:wrap}.rowMobile_2LmRb:not(:first-of-type){margin-top:.8rem}.rowMobile_2LmRb>dt{flex:1 1 100%}",""]),e.locals={footer:"footer_3UxDG",copy:"copy_3_KBa",row:"row_19dPf",rowMobile:"rowMobile_2LmRb"},t.exports=e},240:function(t,e,r){"use strict";var n=r(222),o=r.n(n);e.default=o.a},241:function(t,e,r){(e=r(57)(!1)).push([t.i,".layout_3VWbo{min-height:100vh;width:100vw;overflow:hidden}.layout_3VWbo .main_1UymR{display:flex;height:90vh;padding-right:1.6rem;padding-left:1.6rem;padding-bottom:5vh;margin:0 auto;justify-content:center;align-items:center;flex-direction:column}.layout_3VWbo .main_1UymR .nav_277b0{margin-top:1.6rem}.layout_3VWbo .footer_2z2sP{min-height:10vh}",""]),e.locals={layout:"layout_3VWbo",main:"main_1UymR",nav:"nav_277b0",footer:"footer_2z2sP"},t.exports=e},245:function(t,e,r){"use strict";var n=r(223);r.n(n).a},246:function(t,e,r){(e=r(57)(!1)).push([t.i,".h1[data-v-ecce1064]{font-size:11rem}.h1[data-v-ecce1064],.h2[data-v-ecce1064]{display:block;color:#333;line-height:1.15;max-width:100vw;white-space:pre-line;word-wrap:break-word;font-weight:400}.h2[data-v-ecce1064]{font-size:6.8rem}.h3[data-v-ecce1064]{font-size:4.2rem}.h3[data-v-ecce1064],.h4[data-v-ecce1064]{display:block;color:#333;line-height:1.15;max-width:100vw;white-space:pre-line;word-wrap:break-word;font-weight:700}.h4[data-v-ecce1064]{font-size:2.6rem}",""]),t.exports=e}}]);