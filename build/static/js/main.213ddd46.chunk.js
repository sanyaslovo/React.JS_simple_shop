(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(t,e,n){t.exports=n(44)},32:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(11),o=n.n(r),u=(n(32),n(45)),l=n(5),i=n(22),s=n.n(i),E=[{exact:!0,path:"/",component:Object(a.lazy)(function(){return n.e(5).then(n.bind(null,72))})},{exact:!0,path:"/shop",component:Object(a.lazy)(function(){return n.e(4).then(n.bind(null,68))})},{exact:!0,path:"/contact",component:Object(a.lazy)(function(){return n.e(8).then(n.bind(null,69))})},{exact:!0,path:"/sign-in",component:Object(a.lazy)(function(){return Promise.all([n.e(10),n.e(6)]).then(n.bind(null,73))})},{exact:!0,path:"/checkout",component:Object(a.lazy)(function(){return n.e(7).then(n.bind(null,70))})},{exact:!0,path:"/shop/:category",component:Object(a.lazy)(function(){return n.e(3).then(n.bind(null,71))})},{exact:!0,path:"*",component:Object(a.lazy)(function(){return n.e(9).then(n.bind(null,74))})}],d=function t(e){return e?c.a.createElement(a.Suspense,{fallback:c.a.createElement(s.a,{loaded:!0,lines:13,length:20,width:10,radius:30,corners:1,rotate:0,direction:1,color:"#000",speed:1,trail:60,shadow:!1,hwaccel:!1,className:"spinner",zIndex:2e9,top:"50%",left:"50%",scale:1,loadedClassName:"loadedContent"})},c.a.createElement(u.c,null,e.map(function(e,n){var r=e.guard||a.Fragment,o=e.layout||a.Fragment,l=e.component;return c.a.createElement(u.a,{key:n,path:e.path,exact:e.exact,render:function(n){return c.a.createElement(r,null,c.a.createElement(o,null,e.routes?t(e.routes):c.a.createElement(l,n)))}})}))):null};var p=function(){return d(E)},m=n(19),O=n(24),b=n(6),T=n(14),_=n(25),f=n.n(_),h=n(10),I=n(7),R=n(9),y={cartItems:[],isOpened:!1},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case R.a.ADD_ITEM_TO_CART:if(t.cartItems.find(function(t){return t.id===e.payload.id})){var n=t.cartItems.map(function(t){return t.id===e.payload.id?Object(I.a)({},t,{quantity:t.quantity+1}):t});return Object(I.a)({},t,{cartItems:Object(h.a)(n)})}return Object(I.a)({},t,{cartItems:[].concat(Object(h.a)(t.cartItems),[e.payload])});case R.a.REMOVE_ITEM_FROM_CART:var a=t.cartItems.filter(function(t){return t.id!==e.payload});return Object(I.a)({},t,{cartItems:Object(h.a)(a)});case R.a.INCREASE_CART_ITEM:var c=t.cartItems.map(function(t){return t.id===e.payload?(t.quantity+=1,t):t});return Object(I.a)({},t,{cartItems:Object(h.a)(c)});case R.a.DECREASE_CART_ITEM:var r=t.cartItems.map(function(t){return t.id===e.payload&&t.quantity>0?(t.quantity-=1,t):t});return Object(I.a)({},t,{cartItems:Object(h.a)(r)});case R.a.TOGGLE_CART:return Object(I.a)({},t,{isOpened:e.payload});default:return t}},A={key:"root",storage:f.a,whitelist:["cart"]},C=Object(b.b)({cart:j}),M=Object(T.a)(A,C),w=Object(b.c)(M),x=Object(T.b)(w),g=(n(43),Object(l.a)()),v=function(){return c.a.createElement(m.a,{store:w},c.a.createElement(u.b,{history:g},c.a.createElement(O.a,{persistor:x},c.a.createElement(p,null))))};o.a.render(c.a.createElement(v,null),document.getElementById("root"))},9:function(t,e,n){"use strict";e.a={ADD_ITEM_TO_CART:"ADD_ITEM_TO_CART",REMOVE_ITEM_FROM_CART:"REMOVE_ITEM_FROM_CART",INCREASE_CART_ITEM:"INCREASE_CART_ITEM",DECREASE_CART_ITEM:"DECREASE_CART_ITEM",TOGGLE_CART:"TOGGLE_CART"}}},[[27,1,2]]]);
//# sourceMappingURL=main.213ddd46.chunk.js.map