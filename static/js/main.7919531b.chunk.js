(this.webpackJsonpglink=this.webpackJsonpglink||[]).push([[0],{65:function(e,a,t){e.exports=t.p+"static/media/suggestions.c02edc1f.svg"},66:function(e,a,t){e.exports=t.p+"static/media/gmailLogo.82d5fafd.ico"},73:function(e,a,t){e.exports=t(89)},78:function(e,a,t){},79:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),c=t.n(l),i=(t(78),t(15)),o=t(16),s=t(18),m=t(17),u=t(129),d=t(130),p=t(131),g=(t(79),t(80),t(47)),f=t.n(g),b=t(60),h=t(45),y=t(48),v=t(126),E=t(125),x=t(127),k=t(128),w=(t(85),t(86),t(65)),S=t.n(w),j=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).getEmojie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\ud83d\udc49";return r.a.createElement("span",{role:"img","aria-label":"arrow",className:"padding-right-2"},e)},e}return Object(o.a)(t,[{key:"render",value:function(){var e=I();return r.a.createElement("div",{className:"".concat(e?"instruction-img-mob":"instruction-img")},r.a.createElement("div",{className:"".concat(e?"background-image-mob":"background-image"),style:{backgroundImage:"url(".concat(S.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"".concat(e?"156px 212px":"317px 212px"),WebkitBackgroundSize:"".concat(e?"156px":"317px 212px"),MozBackgroundSize:"".concat(e?"156px":"317px 212px"),OBackgroundSize:"".concat(e?"156px":"317px 212px"),textAlign:"center",position:"relative",height:"".concat(e?"200px":"212px"),width:"".concat(e?"150px":"200px")}}),r.a.createElement("div",{className:"container font-style-lobster ".concat(e?"container_mobile":"")},r.a.createElement("ol",{className:"".concat(e?"ol_mobile":"ol")},r.a.createElement("li",null,"It works only for Gmail Users (Free / Premium)."),r.a.createElement("li",null,"Gmail Sharable Link works only if another person there in Mail thread."),r.a.createElement("li",null,"This page will not store any of your data."))))}}]),t}(r.a.Component),O=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).getSharableLink=function(){var e=n.state.messageId;return e?"https://mail.google.com/mail/u/0/#search/rfc822msgid%3A".concat(encodeURIComponent(e.trim())):null},n.validate=function(e){var a={};return e.email||(a.email="Message ID: Email body > 3-dot Menu > Show Original > Copy Message-ID"),a},n.onSubmit=function(){var e=Object(b.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(a);case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),n.copyMailText=function(){""!==document.getElementById("generatedURL").value&&(document.getElementById("generatedURL").select(),document.execCommand("Copy"),n.setState({copySuccess:"Copied!"}))},n.handleChange=function(e){var a=e.target.value;a!==n.state.messageId&&n.setState({messageId:a.trim(),submitAction:!1})},n.openMailLink=function(){var e=document.getElementById("generatedURL").value;e&&window.open(e)},n.state={messageId:null,submitAction:!1},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.messageId,n=a.submitAction,l=I();return r.a.createElement("div",{className:"".concat(l?"col-flex":"row-flex")},r.a.createElement("div",{className:"mail-comp-page"},r.a.createElement(v.a,null),r.a.createElement(h.b,{onSubmit:function(){},validate:this.validate,render:function(a){var c=a.handleSubmit,i=a.form,o=a.submitting,s=a.pristine,m=a.values;return r.a.createElement("form",{onSubmit:c,onChange:function(a){e.handleChange(a)}},r.a.createElement(E.a,{style:{padding:16,width:l?"":"600px"}},r.a.createElement(x.a,{container:!0,spacing:2},r.a.createElement(x.a,{container:!0,item:!0,alignItems:"flex-start",xs:12},r.a.createElement(h.a,{name:"email",fullWidth:!0,required:!0,component:y.TextField,type:"text",label:"Message ID",autoComplete:"off"})),r.a.createElement(x.a,{className:"display-flex",item:!0,alignItems:"flex-end"},r.a.createElement(k.a,{onClick:function(){var a=m.email;e.setState({messageId:a,submitAction:!0,copySuccess:""})},variant:"contained",color:"primary",type:"submit",disabled:o||s},"Submit"),r.a.createElement(k.a,{onClick:function(){i.reset(),e.setState({submitAction:!1})},variant:"contained",className:"padding-left-lg",color:"primary",type:"submit",disabled:!t||s,style:{marginLeft:l?"10px":"15px"}},"Clear")),!n&&!l&&r.a.createElement(x.a,{container:!0,spacing:2,style:{padding:8,fontFamily:"monospace"},className:"color-dark-gray"},r.a.createElement("span",{className:"italic padding-left-10 user-instructions"},"Please follow the Instructions below \xa0",r.a.createElement("span",{role:"img","aria-label":"arrow"},"\ud83d\udc47")),r.a.createElement("span",null,r.a.createElement("ul",{style:{listStyleType:"disc"}},r.a.createElement("li",null,"It works only for Gmail Free/Premium Users."),r.a.createElement("li",null,"Gmail Sharable Link works only if another person there in Mail thread."),r.a.createElement("li",null,"This page will not store any of your data.")))),t&&n&&!s&&r.a.createElement(x.a,{container:!0,spacing:2,style:{padding:8}},r.a.createElement(x.a,{item:!0,alignItems:"flex-start",xs:12},r.a.createElement(h.a,{name:"result",id:"generatedURL",fullWidth:!0,component:y.TextField,type:"text",defaultValue:e.getSharableLink(),label:"Sharable Link",autoComplete:"off"})),r.a.createElement(x.a,{item:!0,alignItems:"flex-end"},r.a.createElement(k.a,{variant:"contained",color:"primary",type:"submit",onClick:e.copyMailText},"Copy"),!l&&r.a.createElement(k.a,{variant:"contained",color:"primary",type:"submit",style:{marginLeft:l?"10px":"15px"},onClick:e.openMailLink},"Open Mail Link"),e.state.copySuccess?r.a.createElement("div",{className:"left-padding",style:{color:"green"}},"Copied!"):null)))))}})),r.a.createElement(j,null))}}]),t}(r.a.Component),C=(t(87),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).returnAdsense=function(){return r.a.createElement("span",null,r.a.createElement("script",{async:!0,src:"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}),r.a.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-8510549292628710","data-ad-slot":"8485434580","data-ad-format":"auto"}),r.a.createElement("script",null,"(adsbygoogle = window.adsbygoogle || []).push(",");"))},e.returnDevEcoBanner=function(){var e=I();return r.a.createElement("div",null,r.a.createElement("a",{target:"_blank",href:"https://bit.ly/developereconomics"},r.a.createElement("img",{className:"".concat(e?"dev_ad_mob":"dev_ad"),src:"https://images.prismic.io/developer-economics/e4f6d8f2-9756-4d94-85e0-c1520d30afc4_850x315.png?auto=compress,format"})))},e}return Object(o.a)(t,[{key:"render",value:function(){var e=I();return r.a.createElement("div",{className:"add_panel ".concat(e?"add_panel-mob":"add_panel-web")},this.returnAdsense(),this.returnDevEcoBanner())}}]),t}(r.a.Component)),I=(t(88),function(){return window.innerWidth<=760}),N=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mail-comp-sec"},r.a.createElement(O,null),r.a.createElement(C,null))}}]),t}(r.a.Component),L=t(66),B=t.n(L),M=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={canSubmit:!1},n}return Object(o.a)(t,[{key:"disableButton",value:function(){this.setState({canSubmit:!1})}},{key:"enableButton",value:function(){this.setState({canSubmit:!0})}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(u.a,{dark:!0,color:"primary"},r.a.createElement("div",{className:"header"},r.a.createElement(d.a,{href:"https://gmaillink.github.io/"},r.a.createElement("img",{className:"homepage_logo",src:B.a,alt:"",height:"30px",width:"30px"}),"Gmail Sharable Link Creator"))),r.a.createElement(p.a,{style:{marginBottom:0,height:"95vh"},className:"mail-comp"},r.a.createElement(N,null)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[73,1,2]]]);
//# sourceMappingURL=main.7919531b.chunk.js.map