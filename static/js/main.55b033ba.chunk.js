(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(e,t,a){e.exports=a(323)},147:function(e,t,a){},232:function(e,t,a){},323:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(21),s=a.n(o),r=(a(147),a(18)),l=a(23),c=a(24),u=a(26),p=a(25),d=a(27),m=a(10),h=a(326),g=a(324),f=a(325),v=a(329),b=a(31),E=a.n(b),y=a(124),_=a.n(y),O=a(19),k=Object(O.createMuiTheme)({grid:{flexGrow:1},gridContent:{minHeight:"100vh"},gridAvatar:{flexBasis:"auto"},flex:{display:"flex"},flexCol:{flexDirection:"column"},flexRow:{flexDirection:"row"},flexSpaceBetween:{justifyContent:"space-between"},body:{padding:100},palette:{primary:{main:"#fff",dark:"dodgerblue"},type:"dark",background:{paper:"dodgerblue",default:"dodgerblue"}},link:{listStyleType:"none",textDecoration:"none",margin:"0 10px"},text:{color:"#303030"},buttonCloseRight:{float:"right",marginBottom:50},portfolio_home:{whiteSpace:"pre-line"},bigAvatar:{margin:10,width:300,height:300},avatar:{borderRadius:"100%"},inputSel:{position:"absolute"},input:{height:100},rootSel:{background:"#0483ff"},selCol:{background:"#0483ff"},tagsContainer:{display:"flex",justifyContent:"center",flexWrap:"wrap",padding:"20px",height:"40px",alignItems:"center",boxSizing:"content-box",backgroundColor:"#0483ff"},tag:{margin:"20px"},card:{width:320,marginTop:25,background:"dodgerblue"},cardContent:{flex:"1 0 auto"},typography:{useNextVariants:!0,htmlFontSize:10}}),j=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"btnOpen",value:function(){document.getElementsByClassName("dialog__animation")[0].showModal()}},{key:"btnClose",value:function(){document.getElementsByClassName("dialog__animation")[0].close()}},{key:"render",value:function(){var e=this.props,t=e.childElm,a=e.btnText,n=e.styleForButton;return i.a.createElement("div",null,i.a.createElement(E.a,{ref:"dialog__open",onClick:this.btnOpen,className:"dialog__open ".concat(n)},a),i.a.createElement("dialog",{ref:"dialog",className:"dialog__animation"},i.a.createElement(E.a,{ref:"dialog__close",onClick:this.btnClose,className:"dialog__close"},i.a.createElement(_.a,null)),t))}}]),t}(i.a.Component),S=Object(O.withStyles)(k)(j),C=(a(232),a(125)),N=a.n(C),w=a(48),x=a.n(w),B=a(28),R=a.n(B),L=a(13),V=a.n(L),A=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleChange=function(e){var t=e.map(function(e){return e.value});console.log("val",t),console.log("value",e),a.setState({langs:e})},a.handleInputChange=function(e){a.setState({inputValue:e})},a.state={langs:[],inputValue:""},a.handleSave=a.handleSave.bind(Object(m.a)(Object(m.a)(a))),a.handleInputChange=a.handleInputChange.bind(Object(m.a)(Object(m.a)(a))),a.handleChange=a.handleChange.bind(Object(m.a)(Object(m.a)(a))),a.deleteUserInfo=a.deleteUserInfo.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleSave",value:function(){this.props.onSubmitUser({VKname:document.getElementsByClassName("user_inp__name")[0].firstElementChild.value,photo:document.getElementsByClassName("user_inp__photo")[0].firstElementChild.value,gitLogin:document.getElementsByClassName("user_inp__gitLogin")[0].firstElementChild.value,age:Number(document.getElementsByClassName("user_inp__age")[0].firstElementChild.value),address:document.getElementsByClassName("user_inp__address")[0].firstElementChild.value,qual:document.getElementsByClassName("user_inp__qual")[0].firstElementChild.value,phone:document.getElementsByClassName("user_inp__phone")[0].firstElementChild.value,mail:document.getElementsByClassName("user_inp__mail")[0].firstElementChild.value,langs:this.state.langs})}},{key:"deleteUserInfo",value:function(){localStorage.removeItem("user_".concat(this.props.current_uid)),document.getElementsByClassName("saveBtn")[0].disabled=!0}},{key:"render",value:function(){var e=[];return this.props.data.pLangs.forEach(function(t){var a={};return a.value=t.toLowerCase(),a.label=t,e.push(a),e}),void 0!==this.props.vk?i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"container container-column "},i.a.createElement(x.a,{src:this.props.vk.photo,id:"avatar_big",alt:"user photo"}),i.a.createElement("div",{className:"container container-buttons bntContainer"},i.a.createElement(E.a,{variant:"contained",className:"saveBtn",onClick:this.handleSave},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),i.a.createElement(E.a,{variant:"contained",onClick:this.deleteUserInfo},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e"))),i.a.createElement("div",{className:"item-7"},i.a.createElement("form",{className:"container container-column"},i.a.createElement(V.a,{variant:"h6"},"\u041e \u0441\u0435\u0431\u0435"),i.a.createElement(R.a,{type:"text",className:"text user_inp__name",placeholder:"\u0438\u043c\u044f",defaultValue:this.props.vk.name}),i.a.createElement(R.a,{className:"text user_inp__photo",placeholder:"url \u0444\u043e\u0442\u043e",defaultValue:this.props.vk.photo}),i.a.createElement(R.a,{className:"user_inp__gitLogin text",type:"text",placeholder:"\u043b\u043e\u0433\u0438\u043d github",defaultValue:this.props.github.gitLogin}),i.a.createElement(R.a,{type:"number",placeholder:"\u0432\u043e\u0437\u0440\u0430\u0441\u0442",className:"user_inp__age text",defaultValue:this.props.data.age}),i.a.createElement(R.a,{type:"text",placeholder:"\u0430\u0434\u0440\u0435\u0441",className:"user_inp__address text",defaultValue:this.props.data.address}),i.a.createElement(R.a,{type:"text",placeholder:"\u043a\u0432\u0430\u043b\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",className:"user_inp__qual  text",defaultValue:this.props.data.qual}),i.a.createElement(V.a,{variant:"h6"},"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"),i.a.createElement(N.a,{isMulti:!0,onChange:this.handleChange,onInputChange:this.handleInputChange,value:this.state.langs,inputValue:this.state.inputValue,options:e}),i.a.createElement(V.a,{variant:"h6"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"),i.a.createElement(R.a,{type:"phone",placeholder:"\u0442\u0435\u043b\u0435\u0444\u043e\u043d",className:"user_inp__phone text",defaultValue:this.props.data.phone}),i.a.createElement(R.a,{type:"mail",placeholder:"\u043f\u043e\u0447\u0442\u0430",className:"user_inp__mail text",defaultValue:this.props.data.mail})))):null}}]),t}(i.a.Component),I=a(72),U=function(e){return i.a.createElement(I.b,{apiId:6772116,options:!0},i.a.createElement(I.a,{options:{onAuth:function(t){return e.VKOnAuth(t)}}}))},J=a(127),M=a.n(J),P=a(32),H=a.n(P),D=a(128),F=a.n(D),q=a(40),K=a.n(q),T=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).githubOnChange=function(e){var t=e.target.value;a.setState(function(e){var a=e.github;return a.gitLogin=t,Object(r.a)({},e,{gitLogin:a.gitLogin})})},a.renderPortfolio=a.renderPortfolio.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"renderRepos",value:function(e){var t=this;if(Array.isArray(e))return i.a.createElement(V.a,{className:"repos",variant:"body2"},e.map(function(a,n){return a?i.a.createElement("div",{className:" ".concat(t.props.classes.flex)},i.a.createElement(M.a,{key:n,href:a.html_url},a.name),t.props.current_uid===t.props.view_id?i.a.createElement(E.a,{style:{width:"12px"},onClick:function(){t.props.deleteRepo(e,a)}},"x"):null):null}))}},{key:"renderPortfolio",value:function(){var e=this,t=i.a.createElement(S,{styleForButton:this.props.classes.buttonCloseRight,childElm:i.a.createElement(A,{data:this.props.data,vk:this.props.vk,current_uid:this.props.current_uid,github:this.props.github,onSubmitUser:this.props.onSubmitUser,gitFetchUser:this.gitFetchUser,githubOnChange:this.githubOnChange}),btnText:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"});return i.a.createElement("div",null,this.props.current_uid===this.props.view_id?t:null,i.a.createElement(function(){return i.a.createElement("div",{className:"".concat(e.props.classes.grid)},i.a.createElement(H.a,{className:e.props.classes.gridContent,container:!0,spacing:16,direction:"column",justify:"space-between"},i.a.createElement(H.a,{className:"home",id:"home",container:!0,spacing:16,direction:"row",justify:"space-between"},i.a.createElement(H.a,{item:!0,xs:6},i.a.createElement(V.a,{component:"span",className:e.props.classes.portfolio_home,variant:"h6"},"Hello"),i.a.createElement(V.a,{component:"span",className:"".concat(e.props.classes.portfolio_home," home__info"),variant:"body2"},"\u042f ".concat(e.props.vk.name||"",",\n                                    \u041c\u043e\u0439 \u0432\u043e\u0437\u0440\u0430\u0441\u0442 ").concat(e.props.data.age," ;\n                                    \u041c\u0435\u0441\u0442\u043e \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f: ").concat(e.props.data.address||"",";\n                                    \u041c\u043e\u044f \u043a\u0432\u0430\u043b\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f: ").concat(e.props.data.qual||""))),i.a.createElement(H.a,{item:!0,xs:6,className:e.props.classes.gridAvatar},e.props.vk.read?i.a.createElement(x.a,{src:e.props.vk.photo,alt:"your photo",className:e.props.classes.bigAvatar}):i.a.createElement("img",{src:"",alt:"\u0412\u0430\u0448\u0435 \u0444\u043e\u0442\u043e"}))),i.a.createElement(H.a,{item:!0,xs:12},i.a.createElement(V.a,{component:"span",className:e.props.classes.portfolio_home,variant:"h6"},"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"),i.a.createElement("div",{className:"about__info ".concat(e.props.classes.flexRow," ").concat(e.props.classes.flex," ").concat(e.props.classes.flexSpaceBetween)},i.a.createElement(K.a,{className:e.props.classes.tagsContainer,style:0===e.props.data.langs.length?{display:"none"}:{display:"flex"}},e.props.data.langs.map(function(e,t){return i.a.createElement(F.a,{key:t,label:"string"===typeof e?e:e.label})})),i.a.createElement(V.a,{component:"span",className:"".concat(e.props.classes.portfolio_home," repos"),variant:"body2"},"\u0421\u043f\u0438\u0441\u043e\u043a \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432 \u043d\u0430 GitHub:",e.renderRepos(e.props.github.gitRepos)),i.a.createElement(V.a,{component:"span",className:"".concat(e.props.classes.portfolio_home," bio"),variant:"body2"},e.props.github.gitBio))),i.a.createElement(H.a,{item:!0,xs:12},e.props.data.phone||e.props.data.mail?i.a.createElement("div",null,i.a.createElement(V.a,{component:"span",className:e.props.classes.portfolio_home,variant:"h6"},"Contact"),e.props.data.phone?i.a.createElement(V.a,{component:"span",variant:"body2"},"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430: ",e.props.data.phone):null,e.props.data.mail?i.a.createElement(V.a,{component:"span",variant:"body2"},i.a.createElement("a",{href:"mailto:".concat(e.props.data.mail)},e.props.data.mail)):null):null)))},null))}},{key:"render",value:function(){return i.a.createElement("div",null,this.props.vk.read?this.renderPortfolio():i.a.createElement(S,{childElm:i.a.createElement(U,{callbackFn:this.props.cbForVkAuth,VKOnAuth:this.props.VKOnAuth}),btnText:"\u0412\u043e\u0439\u0442\u0438"}))}}]),t}(i.a.Component),W=Object(O.withStyles)(k)(T),z=a(141),G=a(328),$=function(e){function t(e){var a;Object(l.a)(this,t),a=Object(u.a)(this,Object(p.a)(t).call(this,e));var n=[];for(var i in localStorage)if(i.includes("user_"))try{n.push(JSON.parse(localStorage[i]))}catch(o){}return a.state={markers:[],map:null},a.buildMarkers=a.buildMarkers.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"buildMarkers",value:function(e){var t=this.state.map||e;if(null!=t){var a=window.google,n=new a.maps.LatLngBounds;this.state.markers.forEach(function(e){e.setMap(null)}),this.props.data.forEach(function(e){if(void 0!==e.location){var i=parseFloat(e.location.latitude),o=parseFloat(e.location.longitude);if(0!==o&&0!==i){var s=new a.maps.Marker({position:{lat:i,lng:o},map:t});s.infowindow=new a.maps.InfoWindow({content:'\n                            <div class="info-map-wrap">\n                                <img src="'.concat(e.vk.photo,'" height=200 width=200 style="object-fit:cover">\n                                <span>').concat(e.vk.name,"</span>\n                            </div>\n                        ")}),a.maps.event.addListener(s,"click",function(){this.infowindow.open(t,this)}),n.extend({lat:i,lng:o})}}}),t.fitBounds(n)}}},{key:"componentDidUpdate",value:function(e){this.buildMarkers()}},{key:"componentDidMount",value:function(){var e,t=this,a=window.google;void 0!==a&&(e=new a.maps.Map(document.getElementById("map"),{center:{lat:-34.397,lng:150.644},zoom:8}),setTimeout(function(){t.setState(Object(r.a)({},t.state,{map:e})),t.buildMarkers(e)},1200))}},{key:"render",value:function(){return i.a.createElement("div",{id:"map",style:{width:"70%",height:"auto"}})}}]),t}(i.a.Component),Q=Object(O.withStyles)(k)($),X=a(327),Y=a(129),Z=a.n(Y),ee=a(131),te=a.n(ee),ae=a(130),ne=a.n(ae);var ie=Object(O.withStyles)(k)(function(e){return i.a.createElement(g.a,{onClick:function(){console.log(e.item),e.viewPortfolio(e.item.vk.id)},to:Object(X.a)("/:id",{id:e.item.vk.id})},i.a.createElement(Z.a,{className:"".concat(e.classes.flex," ").concat(e.classes.card)},i.a.createElement("div",{className:"".concat(e.classes.flex," ").concat(e.classes.flexCol)},i.a.createElement(ne.a,{className:e.classes.cardContent},i.a.createElement(V.a,{variant:"subtitle1"},e.item.vk.name)),i.a.createElement(te.a,{className:"".concat(e.classes.bigAvatar," ").concat(e.classes.avatar),image:e.item.vk.photo}))))}),oe=a(132),se=a.n(oe),re=a(133),le=a.n(re),ce=function(e){function t(e){var a;Object(l.a)(this,t),a=Object(u.a)(this,Object(p.a)(t).call(this,e));var n=[];for(var i in localStorage)if(i.includes("user_"))try{n.push(JSON.parse(localStorage[i]))}catch(o){}return a.state={data:n,filteredData:n,search:"",searchBy:"name"},a.searchHandle=a.searchHandle.bind(Object(m.a)(Object(m.a)(a))),a.selectHandle=a.selectHandle.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"isInStr",value:function(e,t){return"string"===typeof e&&"string"===typeof t?e.toUpperCase().indexOf(t.toUpperCase())>-1:!!Array.isArray(e)&&e.map(function(e){return e.value.toUpperCase().indexOf(t.toUpperCase())>-1}).some(function(e){return!0===e})}},{key:"searchHandle",value:function(e){var t=this,a=this.state.searchBy,n=Object(z.a)(this.state.data);"name"===a?n=n.filter(function(a){return t.isInStr(a.vk.name,e.target.value)}):"city"===a?n=n.filter(function(a){return t.isInStr(a.data.address,e.target.value)}):"pLang"===a&&(n=n.filter(function(a){return t.isInStr(a.data.langs,e.target.value)})),this.setState(Object(r.a)({},this.state,{filteredData:n,search:e.target.value}))}},{key:"selectHandle",value:function(e){this.setState(Object(r.a)({},this.state,{searchBy:e.target.value}))}},{key:"render",value:function(){var e=this,t=this.props.classes;return i.a.createElement("div",null,i.a.createElement(R.a,{className:t.input,onChange:this.searchHandle}),i.a.createElement(se.a,{className:"".concat(t.input," ").concat(t.inputSel),onChange:this.selectHandle,value:this.state.searchBy},[{id:"name",label:"\u0418\u043c\u044f"},{id:"pLang",label:"\u042f\u0437\u044b\u043a\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"},{id:"city",label:"\u041b\u043e\u043a\u0430\u0446\u0438\u044f"}].map(function(e,t){return i.a.createElement(le.a,{key:t,value:e.id},e.label)})),i.a.createElement("div",{className:"".concat(t.flex," ").concat(t.flexSpaceBetween)},i.a.createElement("div",null,this.state.filteredData.map(function(t,a){return t.vk.name?i.a.createElement(ie,{key:a,viewPortfolio:e.props.viewPortfolio,item:t}):null})),i.a.createElement(Q,{data:this.state.filteredData})))}}]),t}(i.a.Component),ue=Object(G.a)(Object(O.withStyles)(k)(ce)),pe=a(135),de=a.n(pe),me=a(136),he=a.n(me),ge=a(137),fe=a.n(ge),ve=a(138),be=a.n(ve),Ee=a(139),ye=a.n(Ee),_e=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).VKOnAuth=function(e){var t=Object(r.a)({},a.state.vk),n=a.state;if(t.name="".concat(e.first_name," ").concat(e.last_name),t.photo=e.photo.replace(/amp;/g,""),t.read=!0,t.id=e.uid,void 0===localStorage["user_".concat(t.id)])localStorage["user_".concat(t.id)]=JSON.stringify(Object(r.a)({},a.state,{vk:t})),n.vk=t;else{try{n=JSON.parse(localStorage["user_".concat(t.id)]),[null,void 0,""].includes(n.vk.name)||(t.name=n.vk.name)}catch(i){n=a.state}n.vk=t,localStorage["user_".concat(t.id)]=JSON.stringify(n),a.getLocation(n,"user_".concat(t.id))}a.setState(Object(r.a)({},n,{current_uid:t.id,view_id:t.id}))},a.onSubmitUser=function(e){var t=e.VKname,n=e.photo,i=e.gitLogin,o=e.age,s=e.address,l=e.qual,c=e.phone,u=e.mail,p=e.langs;a.setState(function(e){var d,m=Object(r.a)({},e);m.vk.photo=n,m.vk.name=t,m.data.age=o,m.data.address=s,m.data.qual=l,m.data.phone=c,m.data.mail=u,m.data.langs=p;try{d=JSON.parse(localStorage["user_".concat(a.state.current_uid)])}catch(h){d=a.state,console.log("HARD ERROR",h)}return d.data=m.data,d.vk=m.vk,e.github.gitLogin!==i&&(m.github.gitLogin=i,d.github.gitLogin=i,a.gitFetchUser(i)),localStorage["user_".concat(a.state.current_uid)]=JSON.stringify(d),m})},a.gitFetchUser=function(e){var t=e||a.gitLogin||a.state.github.gitLogin;[void 0,""].includes(t)?console.log("no user with this login"):fetch("https://api.github.com/users/".concat(t)).then(function(e){return e.json()}).then(function(e){a.setState(function(t){var a={};return a.gitLogin=e.login,a.gitBio=e.bio,a.read=!0,Object(r.a)({},t,{github:a})});var t={};try{t=JSON.parse(localStorage["user_".concat(a.state.current_uid)])}catch(n){t=a.state,console.log("HARD ERROR",n)}t.github.gitLogin=a.state.github.gitLogin,t.github.gitBio=a.state.github.gitBio,localStorage["user_".concat(a.state.current_uid)]=JSON.stringify(t)}),fetch("https://api.github.com/users/".concat(t,"/repos")).then(function(e){return e.json()}).then(function(e){a.setState(function(t){var a=t.github;return a.gitRepos=e,Object(r.a)({},t,{github:a})});var t={};try{t=JSON.parse(localStorage["user_".concat(a.state.current_uid)])}catch(n){t=a.state,console.log("HARD ERROR",n)}t.github.gitRepos=a.state.github.gitRepos,localStorage["user_".concat(a.state.current_uid)]=JSON.stringify(t)})},a.initialState={current_uid:null,view_id:void 0,users:[],location:{longitude:0,latitude:0,city:""},data:{fetching:!1,name:"",age:"",address:"",qual:"",bio:"",phone:"",mail:"",pLangs:["JavaScript","Python","C++"],langs:[]},vk:{name:"",photo:"",read:!1,id:""},github:{gitLogin:"",gitBio:"",read:!1,gitRepos:[]}},a.state=a.initialState,a.getLocation=a.getLocation.bind(Object(m.a)(Object(m.a)(a))),a.viewPortfolio=a.viewPortfolio.bind(Object(m.a)(Object(m.a)(a))),a.deleteRepo=a.deleteRepo.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://my-json-server.typicode.com/darinapairel97/darinapairel97.github.io/users").then(function(e){return e.json()}).then(function(t){e.setState(Object(r.a)({},e.state,{users:t})),t.map(function(e){return localStorage["user_".concat(e.vk.id)]=JSON.stringify(e)})})}},{key:"getLocation",value:function(e,t){navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(a){var n=Object(r.a)({},this.state);n.location.latitude=a.coords.latitude,n.location.longitude=a.coords.longitude,e.location=n.location,localStorage[t]=JSON.stringify(e),this.setState(n)}.bind(this),function(e){})}},{key:"deleteRepo",value:function(e,t){e[e.indexOf(t)]=null,e=e.filter(function(e){return null!=e}),this.setState(function(t){var a=Object(r.a)({},t);return a.github.gitRepos=e,{userInfo:a}}),localStorage["user_".concat(this.state.current_uid)]=JSON.stringify(this.state)}},{key:"viewPortfolio",value:function(e){if(null===this.state.current_uid&&null===e)this.setState(this.initialState);else{var t=Object(r.a)({},this.state);["data","location","vk","github"].forEach(function(a){t[a]=JSON.parse(localStorage["user_".concat(e)])[a]}),t.view_id=e,this.setState(t)}}},{key:"openMenu",value:function(){var e=document.getElementsByClassName("menu")[0];"none"!==e.style.display?e.style.display="none":e.setAttribute("style","display:flex; width:100%; justify-content:space-around;")}},{key:"render",value:function(){var e=this,t=function(){return i.a.createElement(W,{deleteRepo:e.deleteRepo,onSubmitUser:e.onSubmitUser,VKOnAuth:e.VKOnAuth,current_uid:e.state.current_uid,view_id:e.state.view_id,vk:e.state.vk,github:e.state.github,data:e.state.data})};return i.a.createElement(h.a,null,i.a.createElement(O.MuiThemeProvider,{theme:k},i.a.createElement(de.a,null),i.a.createElement("div",null,i.a.createElement(he.a,{position:"static"},i.a.createElement(fe.a,{className:"".concat(this.props.classes.flex," ").concat(this.props.classes.flexSpaceBetween)},i.a.createElement(be.a,{className:"open-menu-button",onClick:this.openMenu,color:"inherit","aria-label":"Menu"},i.a.createElement(ye.a,null)),i.a.createElement("div",{className:"menu",style:{display:"flex",width:"100%",justifyContent:"space-around"}},i.a.createElement(V.a,{className:this.props.classes.text,variant:"subtitle1"},"\u0413\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440 \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e"),i.a.createElement(g.a,{className:"".concat(this.props.classes.text," ").concat(this.props.classes.link),to:"/list"},i.a.createElement(V.a,{variant:"subtitle1",color:"inherit"},"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e")),i.a.createElement(g.a,{onClick:function(){e.viewPortfolio(e.state.current_uid)},className:"".concat(this.props.classes.text," ").concat(this.props.classes.link),to:"/"},i.a.createElement(V.a,{variant:"subtitle1",color:"inherit"},"\u041c\u043e\u0435 \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e"))))),i.a.createElement("div",{className:this.props.classes.body},i.a.createElement(f.a,{path:"/",exact:!0,render:t}),i.a.createElement(v.a,null,i.a.createElement(f.a,{path:"/list",exact:!0,render:function(){return i.a.createElement(ue,{viewPortfolio:e.viewPortfolio,current_uid:e.state.current_uid})}}),i.a.createElement(f.a,{path:"/:id",exact:!0,render:t}))))))}}]),t}(n.Component),Oe=Object(O.withStyles)(k)(_e);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(Oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[142,2,1]]]);
//# sourceMappingURL=main.55b033ba.chunk.js.map