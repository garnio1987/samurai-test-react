(this["webpackJsonptraining-project"]=this["webpackJsonptraining-project"]||[]).push([[0],{125:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(43),a=n(5),s="SEND-MESSAGE",c={dialogs:[{id:1,name:"Oleg"},{id:2,name:"Tanya"},{id:3,name:"Egor"},{id:4,name:"Mary"},{id:5,name:"Kostya"}],messages:[{id:1,message:"Hello"},{id:2,message:"How are you?"},{id:3,message:"HI"},{id:4,message:"I am fine"},{id:5,message:"Yo"}]},o=function(e){return{type:s,newMessage:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;return t.type===s?Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:t.newMessage}])}):e}},130:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__wtb4F",selectedPage:"Users_selectedPage__1RPzF"}},164:function(e,t,n){},165:function(e,t,n){},17:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var r=n(131),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"fd69a4ff-ee08-4944-9786-7f2ed6d43576"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followUser:function(e){return a.post("follow/".concat(e))},unfollowUser:function(e){return a.delete("follow/".concat(e))},getUser:function(e){return console.warn("Obsolete method. Please use ProfileAPI object"),c.getUser(e)}},c={getUser:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})}},o={auth:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},18:function(e,t,n){e.exports={nav:"Navbar_nav__C-uM0",item:"Navbar_item__3HqmT",activeLink:"Navbar_activeLink__1dXwh"}},289:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,294)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},a=n(0),s=n.n(a),c=n(68),o=n.n(c),i=(n(164),n(35)),u=n(36),l=n(39),d=n(38),f=(n(165),n(20)),j=n(18),p=n.n(j),b=n(1),g=function(){return Object(b.jsxs)("nav",{className:p.a.nav,children:[Object(b.jsx)("div",{className:p.a.item,children:Object(b.jsx)(f.a,{to:"/profile",activeClassName:p.a.activeLink,children:"Profile"})}),Object(b.jsx)("div",{className:p.a.item,children:Object(b.jsx)(f.a,{to:"/dialogs",activeClassName:p.a.activeLink,children:"Messages"})}),Object(b.jsx)("div",{className:p.a.item,children:Object(b.jsx)(f.a,{to:"/users",activeClassName:p.a.activeLink,children:"Users"})}),Object(b.jsx)("div",{className:p.a.item,children:Object(b.jsx)(f.a,{to:"/news",activeClassName:p.a.activeLink,children:"News"})}),Object(b.jsx)("div",{className:p.a.item,children:Object(b.jsx)(f.a,{to:"/music",activeClassName:p.a.activeLink,children:"Music"})}),Object(b.jsx)("div",{className:p.a.item,children:Object(b.jsx)(f.a,{to:"/settings",activeClassName:p.a.activeLink,children:"Settings"})})]})},h=n(9),O=n(14),m=n(57),v=n(127),x=n(72),w=n.n(x),P=function(e){for(var t=e.totalUsersCount,n=e.pageSize,r=e.currentPage,s=e.onPageChanged,c=e.portionSize,o=void 0===c?10:c,i=Math.ceil(t/n),u=[],l=1;l<=i;l++)u.push(l);var d=Math.ceil(i/o),f=Object(a.useState)(1),j=Object(v.a)(f,2),p=j[0],g=j[1],h=(p-1)*o+1,O=p*o;return Object(a.useEffect)((function(){g(Math.ceil(r/o))}),[r]),Object(b.jsxs)("div",{className:w.a.paginator,children:[p>1&&Object(b.jsx)("button",{onClick:function(){g(p-1)},children:"Prev"}),u.filter((function(e){return e>=h&&e<=O})).map((function(e){return Object(b.jsx)("span",{className:r===e?w.a.selectedPage:w.a.pageNumber,onClick:function(){return s(e)},children:e},e)})),p<d&&Object(b.jsx)("button",{onClick:function(){g(p+1)},children:"Next"})]})},C=n(130),y=n.n(C),S=n.p+"static/media/user.6c53c0a1.png",_=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,a=e.unfollow;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:Object(b.jsx)(f.a,{to:"/profile/"+t.id,children:Object(b.jsx)("img",{src:null!==t.photos.small?t.photos.small:S,alt:"",className:y.a.userPhoto})})}),Object(b.jsx)("div",{children:t.followed?Object(b.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){return a(t.id)},children:"Unfollow"}):Object(b.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){return r(t.id)},children:"Follow"})})]}),Object(b.jsxs)("span",{children:[Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:t.name}),Object(b.jsx)("div",{children:t.status})]}),Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:"user.country"}),Object(b.jsx)("div",{children:"user.city"})]})]})]})},I=["currentPage","pageSize","totalUsersCount","onPageChanged","users","followingInProgress","follow","unfollow"],k=function(e){var t=e.currentPage,n=e.pageSize,r=e.totalUsersCount,a=e.onPageChanged,s=e.users,c=e.followingInProgress,o=e.follow,i=e.unfollow;Object(m.a)(e,I);return Object(b.jsxs)("div",{children:[Object(b.jsx)(P,{currentPage:t,pageSize:n,totalUsersCount:r,onPageChanged:a}),s.map((function(e){return Object(b.jsx)(_,{user:e,followingInProgress:c,follow:o,unfollow:i},e.id)}))]})},N=n(52),U=n(11),E=n.n(U),L=n(23),F=n(43),T=n(5),z=n(17),A=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(T.a)(Object(T.a)({},e),r):e}))},R="FOLLOW",M="UNFOLLOW",H="SET-USERS",D="SET-CURRENT-PAGE",G="SET-TOTAL-USER-COUNT",W="TOGGLE-IS-FETCHING",q="TOGGLE-IS-FOLLOWING-PROGRESS",B={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},J=function(e){return{type:R,userId:e}},K=function(e){return{type:M,userId:e}},Y=function(e){return{type:D,page:e}},Z=function(e){return{type:W,isFetching:e}},V=function(e,t){return{type:q,isFetching:e,userId:t}},X=function(){var e=Object(L.a)(E.a.mark((function e(t,n,r,a){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(V(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(V(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(T.a)(Object(T.a)({},e),{},{users:A(e.users,t.userId,"id",{followed:!0})});case M:return Object(T.a)(Object(T.a)({},e),{},{users:A(e.users,t.userId,"id",{followed:!1})});case H:return Object(T.a)(Object(T.a)({},e),{},{users:t.users});case D:return Object(T.a)(Object(T.a)({},e),{},{currentPage:t.page});case G:return Object(T.a)(Object(T.a)({},e),{},{totalUsersCount:t.userCount});case W:return Object(T.a)(Object(T.a)({},e),{},{isFetching:t.isFetching});case q:return Object(T.a)(Object(T.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(F.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},$=function(e){return e.usersPage.users},ee=function(e){return e.usersPage.pageSize},te=function(e){return e.usersPage.totalUsersCount},ne=function(e){return e.usersPage.currentPage},re=function(e){return e.usersPage.isFetching},ae=function(e){return e.usersPage.followingInProgress},se=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[this.props.isFetching?Object(b.jsx)(N.a,{}):null,Object(b.jsx)(k,{onPageChanged:this.onPageChanged,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress})]})}}]),n}(s.a.Component),ce=Object(O.b)((function(e){return{users:$(e),pageSize:ee(e),totalUsersCount:te(e),currentPage:ne(e),isFetching:re(e),followingInProgress:ae(e)}}),{follow:function(e){return function(t){X(t,e,z.c.followUser.bind(z.c),J)}},unfollow:function(e){return function(t){X(t,e,z.c.unfollowUser.bind(z.c),K)}},requestUsers:function(e,t){return function(){var n=Object(L.a)(E.a.mark((function n(r){var a;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(Z(!0)),r(Y(e)),n.next=4,z.c.getUsers(e,t);case 4:a=n.sent,r((c=a.items,{type:H,users:c})),r((s=a.totalCount,{type:G,userCount:s})),r(Z(!1));case 8:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()}})(se),oe=n(92),ie=n.n(oe),ue=function(e){return Object(b.jsxs)("header",{className:ie.a.header,children:[Object(b.jsx)("img",{src:"https://image.freepik.com/free-vector/vintage-monochrome-serious-russian-bear_225004-583.jpg",alt:""}),Object(b.jsx)("div",{className:ie.a.loginBlock,children:e.isAuth?Object(b.jsxs)("div",{children:[e.login," - ",Object(b.jsx)("button",{onClick:e.logout,children:"Logout"})]}):Object(b.jsx)(f.a,{to:"/login",children:"Login"})})]})},le=n(45),de="samurai-network/auth/SET-USER-DATA",fe={userId:null,email:null,login:null,isAuth:!1},je=function(e,t,n,r){return{type:de,payload:{userId:e,email:t,login:n,isAuth:r}}},pe=function(){return function(){var e=Object(L.a)(E.a.mark((function e(t){var n,r,a,s,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.auth();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.login,s=r.id,c=r.email,t(je(s,c,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;return t.type===de?Object(T.a)(Object(T.a)({},e),t.payload):e},ge=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsx)(ue,Object(T.a)({},this.props))}}]),n}(s.a.Component),he=Object(O.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(L.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.logout();case 2:0===e.sent.data.resultCode&&t(je(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ge),Oe=n(126),me=n(33),ve=n(87),xe=n(44),we=n.n(xe),Pe=Object(Oe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(b.jsxs)("form",{onSubmit:t,children:[Object(me.c)("Login",me.a,"login",[ve.b]),Object(me.c)("Password",me.a,"password",[ve.b],{type:"password"}),Object(me.c)(null,me.a,"rememberMe",[],{type:"checkbox"},"Remember me"),n&&Object(b.jsx)("div",{className:we.a.formErrorWrapper,children:Object(b.jsx)("span",{className:we.a.formSummaryError,children:n})}),Object(b.jsx)("button",{children:"Login"})]})})),Ce=Object(O.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(L.a)(E.a.mark((function r(a){var s,c;return E.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,z.a.login(e,t,n);case 2:0===(s=r.sent).data.resultCode?a(pe()):(c=s.data.messages.length>0?s.data.messages[0]:"Some error",a(Object(le.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(b.jsx)(h.Redirect,{to:"/profile"}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsx)(Pe,{onSubmit:function(t){e.login(t.login,t.password,t.rememberMe)}})]})})),ye=n(10),Se="SET-INITIALIZED",_e={initialized:!1},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;return t.type===Se?Object(T.a)(Object(T.a)({},e),{},{initialized:!0}):e},ke=n(125),Ne=n(95),Ue=n(133),Ee=n(128),Le=Object(ye.c)({profilePage:Ne.b,dialogsPage:ke.b,usersPage:Q,auth:be,form:Ee.a,app:Ie}),Fe=Object(ye.e)(Le,Object(ye.a)(Ue.a));window.store=Fe;var Te=Fe,ze=n(134),Ae=s.a.lazy((function(){return n.e(4).then(n.bind(null,296))})),Re=s.a.lazy((function(){return n.e(3).then(n.bind(null,295))})),Me=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getInitialized()}},{key:"render",value:function(){return this.props.initialized?Object(b.jsxs)("div",{className:"app-wrapper",children:[Object(b.jsx)(he,{}),Object(b.jsx)(g,{}),Object(b.jsxs)("div",{className:"app-wrapper-content",children:[Object(b.jsxs)(a.Suspense,{fallback:Object(b.jsx)(N.a,{}),children:[Object(b.jsx)(h.Route,{path:"/dialogs",render:function(){return Object(b.jsx)(Ae,{})}}),Object(b.jsx)(h.Route,{path:"/profile/:userId?",render:function(){return Object(b.jsx)(Re,{})}})]}),Object(b.jsx)(h.Route,{path:"/users",render:function(){return Object(b.jsx)(ce,{})}}),Object(b.jsx)(h.Route,{path:"/login",render:function(){return Object(b.jsx)(Ce,{})}})]})]}):Object(b.jsx)(N.a,{})}}]),n}(a.Component),He=Object(ye.d)(h.withRouter,Object(O.b)((function(e){return{initialized:e.app.initialized}}),{getInitialized:function(){return function(e){e(pe()).then((function(){e({type:Se})}))}}}))(Me),De=function(e){return Object(b.jsx)(ze.HashRouter,{children:Object(b.jsx)(O.a,{store:Te,children:Object(b.jsx)(He,{})})})};o.a.render(Object(b.jsx)(De,{}),document.getElementById("root")),r()},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return p}));var r=n(5),a=n(57),s=(n(0),n(44)),c=n.n(s),o=n(90),i=n(1),u=["input","meta"],l=["input","meta"],d=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,s=n&&r;return Object(i.jsxs)("div",{className:c.a.formControl+" "+(s?c.a.error:""),children:[Object(i.jsx)("div",{children:a}),s&&Object(i.jsx)("span",{children:r})]})},f=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,u));return Object(i.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},j=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,l));return Object(i.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},p=function(e){var t=e.placeholder,n=e.component,a=e.name,s=e.validators,c=e.props,u=void 0===c?{}:c,l=e.text,d=void 0===l?"":l;return Object(i.jsxs)("div",{children:[Object(i.jsx)(o.a,Object(r.a)({placeholder:t,component:n,name:a,validate:s},u))," ",d]})}},44:function(e,t,n){e.exports={formControl:"FormsControls_formControl__11DPe",error:"FormsControls_error__CV30H",formErrorWrapper:"FormsControls_formErrorWrapper__2v5cf",formSummaryError:"FormsControls_formSummaryError__wUp24"}},52:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/Spinner.a7a15b42.svg",a=n(1);t.a=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{width:"50px",height:"50px",src:r,alt:""})})}},72:function(e,t,n){e.exports={paginator:"Paginator_paginator__1IP1r",pageNumber:"Paginator_pageNumber__2-ib5",selectedPage:"Paginator_selectedPage__3ZIg1"}},87:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},92:function(e,t,n){e.exports={header:"Header_header__3-e-A",loginBlock:"Header_loginBlock__3fNwI"}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return O}));var r=n(11),a=n.n(r),s=n(23),c=n(43),o=n(5),i=n(17),u="ADD-POST",l="SET-USER-PROFILE",d="SET-USER-STATUS",f="DELETE-POST",j={posts:[{id:1,message:"Hello",likesCount:12},{id:2,message:"How are you?",likesCount:11},{id:3,message:"Its my first post",likesCount:40}],profile:null,status:""},p=function(e){return{type:u,newPost:e}},b=function(e){return{type:d,status:e}},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getUser(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(b(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPost,likesCount:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n])});case f:return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.id}))});case l:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case d:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});default:return e}}}},[[289,1,2]]]);
//# sourceMappingURL=main.7f0be2b3.chunk.js.map