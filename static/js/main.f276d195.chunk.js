(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{66:function(e,t,n){e.exports=n(86)},71:function(e,t,n){},73:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),o=n.n(i),c=(n(71),n(32)),s=n(33),l=n(41),m=n(34),u=n(42),h=(n(73),n(134)),f=n(57),g=n.n(f),d=n(125),p=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={term:""},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"onInputChange",value:function(e){this.setState({term:e}),this.props.onTermChange(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(h.a,{InputProps:{endAdornment:r.a.createElement(d.a,null,r.a.createElement(g.a,null))},placeholder:"SEARCH",onChange:function(t){return e.onInputChange(t.target.value)}}),"\xa0")}}]),t}(a.Component),v=n(127),b=n(128),E=n(126),y=n(129),w=n(133),j=n(130),k=n(85),C=n(138),S=n(131),T=n(132),O=n(137),N=n(58),W=n.n(N),x=n(59),L=n.n(x),B={width:140,height:140},R=Object(k.a)({typography:{fontFamily:'"Rajdhani", "Helvetica", "Arial", sans-serif',fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,h1:{fontWeight:"fontWeightRegular",fontFamily:"Lobster Two",fontSize:"2em"},h2:{fontWeight:900,fontFamily:"Lobster Two",fontSize:"1.5em"},h3:{fontWeight:500,fontFamily:"Lobster Two",fontSize:"1.17em"}},overrides:{MuiSelect:{root:{color:"#9B8449"},icon:{fill:"#9B8449"}},MuiTabs:{indicator:{backgroundColor:"#9B8449"}},MuiTab:{root:{"&$selected":{}}}}}),P=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).handleChange=function(t,n){e.setState({imgUrl:a+"/thumb/"},function(){console.log("imgUrl on  "+this.state.imgUrl)}),e.setState({activeTab:t.target.value},function(){}),e.setState({value:n},function(){});var a=n;e.setState({url:"https://my-json-server.typicode.com/jannejk/myjsonapi/"+a},function(){this.getProducts()}),e.setState({imgUrl:a+"/thumb/"},function(){})},e.selectChange=function(t){e.setState({selectedValue:t.target.value});var a,r=n(84),i=t.target.value;"name"===i?a=r(e.state.items,"title","asc"):"price"===i?a=r(e.state.items,"price-range","asc"):"preferability"===i&&(a=r(e.state.items,"preferability","des")),e.setState({items:a})},e.state={items:[],options:[{name:"Beers",value:"beers"},{name:"Energy Drinks",value:"energy-drinks"}],sortOptions:[{name:"Name",value:"name"},{name:"Price",value:"price"},{name:"Rating",value:"preferability"}],url:"https://my-json-server.typicode.com/jannejk/myjsonapi/beers",imgUrl:"beers/thumb/",searchString:"",selectedValue:"",activeTab:"beers"},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"getProducts",value:function(){var e=this;fetch(this.state.url,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return e}).then(function(t){e.setState({items:t})}).catch(function(e){console.log("fetch error"+e)})}},{key:"componentDidMount",value:function(){this.getProducts()}},{key:"handleTermChange",value:function(e){var t=this.state.items.filter(function(t){return t.title.toLocaleLowerCase().includes(e.toLocaleLowerCase())});""===e&&this.getProducts(),this.setState({items:t})}},{key:"render",value:function(){var e=this,t=this.state.imgUrl,n=this.state,a=n.options,i=n.value,o=this.state,c=o.sortOptions;o.sortValue;return r.a.createElement(C.a,{theme:R},r.a.createElement("div",{className:"App"},r.a.createElement(v.a,{position:"sticky"},r.a.createElement(b.a,null,r.a.createElement(y.a,{className:"menurow",container:!0,spacing:0},r.a.createElement(y.a,{item:!0,xs:12,md:6,sm:12},r.a.createElement(w.a,{value:i,onChange:this.handleChange,centered:!0},a.map(function(e){return r.a.createElement(j.a,{key:e.value,label:e.name,value:e.value})}))),r.a.createElement(y.a,{className:"menuitem",item:!0,xs:6,sm:6,md:3},r.a.createElement(T.a,{className:"myDrop",displayEmpty:!0,id:"sortBy",onChange:this.selectChange,value:this.state.selectedValue},r.a.createElement(O.a,{value:"",disabled:!0},r.a.createElement("div",{className:"myem"},"SORT BY")),c.map(function(e){return r.a.createElement(O.a,{value:e.value,primaryText:e.name,key:e.value},e.name)}))),r.a.createElement(y.a,{className:"menuitem",item:!0,xs:6,sm:6,md:3},r.a.createElement(p,{onTermChange:function(t){return e.handleTermChange(t)}}))))),r.a.createElement(y.a,{className:"containerGrid",container:!0,justify:"center",align:"center",mx:"auto"},this.state.items.map(function(e,n){return r.a.createElement(y.a,{className:"myCard",item:!0,xs:12,sm:6,md:4},r.a.createElement("div",{className:"box",key:n},r.a.createElement(S.a,{onError:function(e){e.target.src="./images/beers/thumb/no-image.png"},alt:"nopic",src:"./images/"+t+e.images,style:Object.assign({},B)}),r.a.createElement("p",null),r.a.createElement(E.a,{variant:"h1"},e.title),r.a.createElement("br",null),r.a.createElement(E.a,{component:"p"},e.description),r.a.createElement("br",null),r.a.createElement(y.a,{className:"boxcontent",container:!0,direction:"row"},r.a.createElement(y.a,{item:!0},r.a.createElement(W.a,null),"\xa0"),r.a.createElement(y.a,{item:!0},r.a.createElement(E.a,{component:"p"},"Price: ",e["price-range"])),r.a.createElement(y.a,{className:"boxcontent",container:!0,direction:"row",alignItems:"center"},r.a.createElement(y.a,{item:!0},"\xa0\xa0",r.a.createElement(L.a,null),"\xa0"),r.a.createElement(y.a,{item:!0},r.a.createElement(E.a,{component:"p"},"Rating: ",e.preferability))))))}))))}}]),t}(a.Component),U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(P,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/beerFrontend",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/beerFrontend","/service-worker.js");U?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):A(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):A(e)})}}()}},[[66,2,1]]]);
//# sourceMappingURL=main.f276d195.chunk.js.map