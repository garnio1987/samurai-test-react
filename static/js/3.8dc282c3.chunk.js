(this["webpackJsonptraining-project"]=this["webpackJsonptraining-project"]||[]).push([[3],{290:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__Nwj8Y"}},291:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__mRWPf",posts:"MyPosts_posts__2anfK"}},292:function(t,e,s){t.exports={item:"Post_item__mKyuP"}},294:function(t,e,s){"use strict";s.r(e);var n=s(5),i=s(35),c=s(36),o=s(39),r=s(38),a=s(0),u=s.n(a),j=s(13),p=s(51),l=s(290),d=s.n(l),b=s(127),f=s(1),h=function(t){var e=Object(a.useState)(!1),s=Object(b.a)(e,2),n=s[0],i=s[1],c=Object(a.useState)(t.status),o=Object(b.a)(c,2),r=o[0],u=o[1];return Object(a.useEffect)((function(){return u(t.status)}),[t.status]),Object(f.jsxs)("div",{children:[!n&&Object(f.jsx)("div",{children:Object(f.jsx)("span",{onDoubleClick:function(){i(!0)},children:t.status||"-------"})}),n&&Object(f.jsx)("div",{children:Object(f.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.updateStatus(r)},value:r})})]})},O=function(t){var e=t.profile,s=t.status,n=t.updateStatus;return e?Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:"https://img5.goodfon.ru/wallpaper/nbig/5/df/osen-nebo-listia-colorful-iaponiia-japan-red-klen-gora-fudzh.jpg",alt:""})}),Object(f.jsxs)("div",{className:d.a.descriptionBlock,children:[Object(f.jsx)("img",{src:e.photos.large,alt:""}),Object(f.jsx)(h,{status:s,updateStatus:n})]})]}):Object(f.jsx)(p.a,{})},x=s(95),m=s(90),g=s(126),v=s(33),P=s(87),k=s(291),S=s.n(k),_=s(292),y=s.n(_),U=function(t){return Object(f.jsxs)("div",{className:y.a.item,children:[Object(f.jsx)("img",{src:"https://i.pinimg.com/originals/8b/6e/c6/8b6ec60427f9b17c1d9aaf4c415babe3.png",alt:""}),t.message,Object(f.jsx)("div",{children:Object(f.jsxs)("span",{children:["like ",t.likesCount]})})]})},B=u.a.memo((function(t){var e=t.profilePage.posts.map((function(t){return Object(f.jsx)(U,{message:t.message,likesCount:t.likesCount})}));return Object(f.jsxs)("div",{className:S.a.postsBlock,children:["My posts",Object(f.jsx)(C,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(f.jsx)("div",{className:S.a.posts,children:e})]})})),w=Object(P.a)(10),C=Object(g.a)({form:"profileAddPostForm"})((function(t){return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(f.jsx)("div",{children:Object(f.jsx)(m.a,{component:v.b,name:"newPostText",validate:[P.b,w],placeholder:"Post message"})}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{children:"Add Post"})})]})})})),I=B,N=Object(j.b)((function(t){return{profilePage:t.profilePage}}),(function(t){return{addPost:function(e){t(Object(x.a)(e))}}}))(I),A=function(t){return Object(f.jsxs)("div",{children:[Object(f.jsx)(O,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(f.jsx)(N,{})]})},M=s(9),z=s(10),T=function(t){Object(o.a)(s,t);var e=Object(r.a)(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getUserStatus(t)}},{key:"render",value:function(){return Object(f.jsx)(A,Object(n.a)(Object(n.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateUserStatus}))}}]),s}(u.a.Component);e.default=Object(z.d)(Object(j.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:x.c,getUserStatus:x.d,updateUserStatus:x.e}),M.f)(T)}}]);
//# sourceMappingURL=3.8dc282c3.chunk.js.map