(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{28:function(e,t,a){},37:function(e,t,a){},58:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(29),c=a.n(i),r=a(8),o=a(2),l=(a(37),a(1));var m=function(){return document.querySelector("title").textContent="Movie Box | About",Object(l.jsxs)("div",{className:"about",children:[Object(l.jsx)("h1",{children:"Welcome to movie box!"}),Object(l.jsx)("span",{children:'"It is not our abilities that show what we truly are, it is our choices - Dumbledore, Harry Potter"'}),Object(l.jsx)("div",{className:"bg"})]})},j=a(17),d=a.n(j),u=a(30),b=a(11),v=a(12),h=a(14),x=a(13),O=a(31),g=a.n(O);a(58);var p=function(e){var t=e.id,a=e.title,s=e.summary,n=e.poster,i=e.year,c=e.genres,o=e.detailPoster,m=e.bgImage;return Object(l.jsx)(r.b,{to:{pathname:"movie/".concat(t),state:{title:a,summary:s,poster:n,year:i,genres:c,detailPoster:o,bgImage:m}},children:Object(l.jsxs)("div",{className:"movie",children:[Object(l.jsx)("img",{src:n,alt:a,title:a}),Object(l.jsxs)("div",{className:"movie__data",children:[Object(l.jsx)("h3",{className:"movie__title",children:a}),Object(l.jsx)("h5",{className:"movie__year",children:i}),Object(l.jsx)("ul",{className:"genres",children:c.map((function(e,t){return Object(l.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(l.jsx)("p",{className:"movie__summary",children:s})]})]})})},_=(a(28),a(67),function(e){Object(h.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(b.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(d.a.mark((function t(){var a,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,s=a.data.data.movies,e.setState({movies:s,isLoading:!1}),console.log(s);case 6:case"end":return t.stop()}}),t)}))),e.renderMovie=function(){var t=e.state.movies;return document.querySelector("title").textContent="Movie Box | Home",t.map((function(e){return Object(l.jsx)(p,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,detailPoster:e.large_cover_image,genres:e.genres,bgImage:e.background_image},e.id)}))},e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state.isLoading;return Object(l.jsx)("section",{className:"container",children:e?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(l.jsx)("div",{className:"movies",children:this.renderMovie()})})}}]),a}(n.a.Component)),y=(a(68),function(e){Object(h.a)(a,e);var t=Object(x.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/"),document.querySelector("title").textContent="Movie Box | ".concat(t.state.title)}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(l.jsxs)("div",{className:"detail",children:[Object(l.jsx)("img",{className:"detail__bg",src:e.state.bgImage,alt:e.state.title}),Object(l.jsx)("img",{className:"detail__large",src:e.state.detailPoster,alt:e.state.title,title:e.state.title}),Object(l.jsxs)("div",{className:"detail__text",children:[Object(l.jsxs)("div",{className:"title__gap",children:[Object(l.jsxs)("span",{className:"detail__title",children:[e.state.title," "]}),Object(l.jsxs)("span",{className:"detail__year",children:["(",e.state.year,")"]})]}),Object(l.jsx)("span",{className:"detail__genres",children:e.state.genres.map((function(e,t){return Object(l.jsx)("li",{className:"detail__genre",children:e},t)}))}),Object(l.jsx)("p",{className:"detail__summary",children:e.state.summary})]})]}):null}}]),a}(n.a.Component));a(69);var f=function(){return Object(l.jsxs)("div",{className:"navigation",children:[Object(l.jsx)(r.b,{to:"/",className:"navigator",children:"Home"}),Object(l.jsx)(r.b,{to:"/about",className:"navigator",children:"About"})]})};var N=function(){return Object(l.jsxs)(r.a,{children:[Object(l.jsx)(f,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:_}),Object(l.jsx)(o.a,{path:"/about",component:m}),Object(l.jsx)(o.a,{path:"/movie/:id",component:y})]})};c.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.8eda2f19.chunk.js.map