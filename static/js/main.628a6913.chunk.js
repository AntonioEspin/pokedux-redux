(this["webpackJsonpreact-redux-course"]=this["webpackJsonpreact-redux-course"]||[]).push([[0],{130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(27),o=n.n(r),a=n(18),i=n(156),s=Object({NODE_ENV:"production",PUBLIC_URL:"/pokedux-redux",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).POKEAPI||"https://pokeapi.co/api/v2/",u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:151,t=fetch("".concat(s,"pokemon?limit=").concat(e));return t},l="SET_POKEMON",j="SET_ERROR",d="CLEAR_ERROR",O="TOGGLE_LOADER",b="SET_FAVORITE",f="SEARCH_POKEMON",p=function(){return{type:O}},m=function(){return function(e){u().then((function(e){return e.json()})).then((function(t){e(p());var n=t.results;return Promise.all(n.map((function(e){return fetch(e.url).then((function(e){return e.json()}))})))})).then((function(t){return e({type:l,payload:t},e(p()))})).catch((function(t){e({type:j,payload:{message:"ocurri\xf3 un error",error:t}}),e(p())}))}},h=n(154),v=n(150),x=n(110),E=n.p+"static/media/logo_v4.0905522d.svg",y=n(4),g=function(){return Object(y.jsx)(h.a,{fixed:"top",children:Object(y.jsxs)(v.a,{children:[Object(y.jsx)(h.a.Item,{to:"/",children:Object(y.jsx)(x.a,{size:"small",src:E})}),Object(y.jsx)(h.a.Item,{to:"/",children:"Home"}),Object(y.jsx)(h.a.Item,{to:"/",position:"right",children:"Favorites"})]})})},_=(n(130),function(e){var t=e.children,n=Object(a.b)(),c=Object(a.c)((function(e){return e.ui.error}));return Object(y.jsxs)("div",{children:[Object(y.jsx)(g,{}),c&&Object(y.jsx)("div",{className:"wrapper",children:Object(y.jsx)(i.a,{onDismiss:function(){var e;n({type:d,payload:e})},content:c,color:"red"})}),Object(y.jsx)("div",{className:"Layout-content",children:t})]})}),k=n(158),S=n(59),N=n(151),P=n(85),R=function(e){var t=e.pokemon,n=Object(a.b)(),c=t.favorite?"yellow":"grey";return t?Object(y.jsx)(k.a.Column,{mobile:16,tablet:8,computer:4,children:Object(y.jsxs)("div",{className:"PokemonCard",children:[Object(y.jsx)("button",{className:"PokemonCard-favorite",onClick:function(){var e;n((e={pokemonId:t.id},{type:b,payload:e}))},children:Object(y.jsx)(S.a,{name:"favorite",color:c})}),Object(y.jsx)(x.a,{centered:!0,src:t.sprites.front_default,alt:"Pokemon Front"}),Object(y.jsx)("h2",{className:"PokemonCard-title",children:t.name}),Object(y.jsx)(N.a,{}),t.types.map((function(e){return Object(y.jsx)(P.a,{color:"violet",children:e.type.name},"".concat(t.id,"-").concat(e.type.name))}))]})}):null},C=(n(131),function(e){var t=e.pokemons;return Object(y.jsx)(k.a,{className:"PokemonList",children:t.map((function(e,t){return Object(y.jsx)(R,{pokemon:e},"pokemon-".concat(t))}))})});C.defaultProps={pokemons:[]};var T=C,w=n(109),I=n(153);n(132);function D(){var e=Object(c.useState)(""),t=Object(w.a)(e,2),n=t[0],r=t[1],o=Object(a.b)();return Object(y.jsx)("div",{className:"Searcher wrapper",children:Object(y.jsx)(k.a,{children:Object(y.jsx)(k.a.Column,{widescreen:10,largeScreen:10,mobile:16,className:"Searcher",children:Object(y.jsx)(I.a,{aligned:"right",input:{fluid:!0},showNoResults:!1,placeholder:"Encuentra a tu Pokem\xf3n favorito",value:n,onSearchChange:function(e){var t;r(e.target.value),console.log(n),o(""!==n?(t=n.toLowerCase().trim(),{type:f,payload:t}):m())}})})})})}var L=n(155),A=n(152),H=function(){return Object(y.jsx)(L.a,{active:!0,children:Object(y.jsx)(A.a,{})})};n(133);var K=function(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.pokemon.list})),n=Object(a.c)((function(e){return e.ui.loading}));return Object(c.useEffect)((function(){e(m())}),[]),Object(y.jsxs)("div",{className:"Home",children:[Object(y.jsx)(D,{}),n&&Object(y.jsx)(H,{}),Object(y.jsx)(T,{pokemons:t})]})},F=(n(134),function(){return Object(y.jsx)(_,{children:Object(y.jsx)(K,{})})}),M=n(57),U=n(108),V=n(98),W=n(14),B={list:[]},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(W.a)(Object(W.a)({},e),{},{list:t.payload});case b:var n=Object(V.a)(e.list),c=n.findIndex((function(e){return e.id===t.payload.pokemonId}));return c>=0&&(n[c].favorite=!n[c].favorite),Object(W.a)(Object(W.a)({},e),{},{list:n});case f:var r=Object(V.a)(e.list),o=r.filter((function(e){return e.name.includes(t.payload)}));return console.log(o.length),Object(W.a)(Object(W.a)({},e),{},{list:o});default:return Object(W.a)({},e)}},J={error:"",loading:!1},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(W.a)(Object(W.a)({},e),{},{error:t.payload.message});case d:return Object(W.a)(Object(W.a)({},e),{},{error:""});case O:return Object(W.a)(Object(W.a)({},e),{},{loading:!e.loading});default:return Object(W.a)({},e)}},z=Object(M.b)({pokemon:G,ui:X}),q=(n(135),(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||M.c)(Object(M.a)(U.a,(function(e){return function(e){return function(t){console.log("Disparando",t),e(t)}}}),(function(e){return function(e){return function(t){var n=t.action;(null===n||void 0===n?void 0:n.type)===j&&console.error(n.payload),e(t)}}})))),Q=Object(M.d)(z,q);o.a.render(Object(y.jsx)(a.a,{store:Q,children:Object(y.jsx)(F,{})}),document.getElementById("root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.628a6913.chunk.js.map