(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{14:function(t,e,r){"use strict";e.a={addUser:function(t){return{type:"ADD_USER",payload:t}},deleteUser:function(t){return{type:"DELETE_USER",payload:t}},addNumber:function(t){return{type:"ADD_NUMBER",payload:t}},deleteNumber:function(t){return{type:"DELETE_NUMBER",payload:t}},createNumber:function(t){return{type:"CREATE_NUMBER",payload:t}},filterName:function(t){return{type:"SET_FILTER",payload:t}}}},16:function(t,e,r){"use strict";var n=r(6),c=r(24),a=r.n(c);a.a.defaults.baseURL="http://localhost:4000";e.a={getOrders:function(){return function(t){return t(Object(n.i)()),a.a.get("/contacts").then((function(e){var r=e.data;return console.log("getOrdersSuccess",r),t(Object(n.j)(r))})).catch((function(e){return t(Object(n.h)(e))}))}},addOrder:function(t){return function(e){e(Object(n.b)()),a.a.post("/contacts",t).then((function(t){var r=t.data;return console.log("addOrderSuccess",r),e(Object(n.c)(r))})).catch((function(t){return e(Object(n.a)(t))}))}},deleteOrder:function(t){return function(e){e(Object(n.e)()),a.a.delete("/contacts/".concat(t)).then((function(r){var c=r.data;return console.log("DELETE from deleteOrder",c),e(Object(n.f)(t))})).catch((function(t){return e(Object(n.d)(t))}))}}}},17:function(t,e,r){"use strict";r.d(e,"c",(function(){return c})),r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return o}));var n=r(26),c=function(t){return t.contacts},a=function(t){return t.filterOrder},o=Object(n.a)([c,a],(function(t,e){return e=e.toLowerCase(),t.filter((function(t){return t.name.toLowerCase().includes(e)}))}))},25:function(t,e,r){t.exports={list:"ContactList_list__2T7aG",listBtn:"ContactList_listBtn__3aXXE",listLi:"ContactList_listLi__28toc"}},29:function(t,e,r){"use strict";var n=r(3),c=Object(n.b)("GET_QUERY_VALUE"),a=Object(n.b)("GET_FETCH_COCKTEILS"),o=Object(n.b)("MODAL");e.a={getQueryVAlue:c,getFetchCocktails:a,changeShowModal:o}},30:function(t,e,r){t.exports={filter:"Filter_filter__1E5tH"}},46:function(t,e,r){"use strict";r.r(e);r(0);var n=r(47),c=r.n(n),a=r(20),o=r(1);e.default=function(t){var e=t.title;return Object(o.jsx)("main",{children:Object(o.jsx)(a.b,{to:"/",exact:"true",children:Object(o.jsx)("h1",{className:c.a.center,children:e||"Home"})})})}},47:function(t,e,r){t.exports={center:"Main_center__2k4H9"}},48:function(t,e,r){"use strict";r.r(e);var n=r(7),c=r(18),a=r(19),o=r(23),i=r(22),u=r(0),l=r(95),s=r(49),d=r.n(s),f=r(13),O=r(14),b=r(16),j=r(17),p=r(1),h=function(t){Object(o.a)(r,t);var e=Object(i.a)(r);function r(){var t;Object(c.a)(this,r);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={name:"",tel:"",id:""},t.handleChange=function(e){(0,t.props.getValue)(e.target),t.setState(Object(n.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){var r=t.props.contacts;e.preventDefault();var n=t.state,c=n.name,a=n.tel,o={id:Object(l.a)(),name:c,tel:a};r.some((function(t){return t.name===o.name}))?alert("\u0423\u0432\u0430\u0433\u0430 \u0434\u0430\u043d\u0435 \u0456\u043c\u044f \u0443\u0436\u0435 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f!"):t.props.addMyOrder(o),t.formReset()},t.formReset=function(){t.setState({name:"",tel:""})},t}return Object(a.a)(r,[{key:"render",value:function(){var t=this.handleChange,e=this.handleSubmit,r=(this.handleDelete,this.filterSubmit,this.state),n=r.name,c=r.tel,a=this.props;a.myOrders,a.addNumber;return Object(p.jsxs)("form",{onSubmit:e,className:d.a.form,children:[Object(p.jsx)("input",{onChange:t,type:"text",name:"name",id:"name",placeholder:"\u0406\u043c'\u044f",value:n,required:!0}),Object(p.jsx)("input",{onChange:t,type:"number",name:"tel",id:"tel",placeholder:"\u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443",value:c,required:!0}),Object(p.jsx)("button",{type:"submit",children:"\u0414\u043e\u0434\u0430\u0442\u0438"})]})}}]),r}(u.Component),m={addNumber:O.a.addNumber,addMyOrder:b.a.addOrder};e.default=Object(f.b)((function(t){return{contacts:Object(j.c)(t)}}),m)(h)},49:function(t,e,r){t.exports={form:"ContactForm_form__1fuOn"}},52:function(t,e,r){"use strict";r.r(e);r(0);var n=r(25),c=r.n(n),a=r(13),o=r(14),i=r(16),u=(r(17),r(1)),l={delnum:o.a.deleteNumber,deleteMyOrder:i.a.deleteOrder};e.default=Object(a.b)((function(t){return{contacts:t.contacts,filter:t.filter}}),l)((function(t){var e=t.contacts,r=(t.delnum,t.filter),n=(t.filteredContacts,t.deleteMyOrder);t.getMyOrders;return Object(u.jsx)(u.Fragment,{children:e.length>0?Object(u.jsx)("ul",{className:c.a.list,children:e.filter((function(t){return!r||t.name.toLowerCase().includes(r)})).map((function(t){return Object(u.jsxs)("li",{className:c.a.listLi,children:[Object(u.jsxs)("span",{children:[t.name,":"]}),Object(u.jsx)("span",{children:t.tel}),Object(u.jsx)("span",{children:Object(u.jsx)("button",{className:c.a.listBtn,onClick:function(){return n(t.id)},children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})})]},t.id)}))}):Object(u.jsx)("ul",{className:c.a.list,children:Object(u.jsx)("li",{className:c.a.listLi,children:"\u0423 \u0432\u0430\u0441 \u043f\u043e\u0440\u043e\u0436\u043d\u0456\u0439 \u0441\u043f\u0438\u0441\u043e\u043a !"})})})}))},54:function(t,e,r){"use strict";var n=r(15),c=r(7),a=r(18),o=r(19),i=r(23),u=r(22),l=(r(61),r(0)),s=(r(24),r(46)),d=r(48),f=r(52),O=r(30),b=r.n(O),j=r(13),p=r(14),h=r(17),m=r(6),E=r(1),g=function(t){Object(i.a)(r,t);var e=Object(u.a)(r);function r(){var t;Object(a.a)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={filter:""},t.handleChange=function(e){var r=t.props.filterName;t.setState(Object(c.a)({},e.target.name,e.target.value)),r(e.target.value)},t.filterSubmit=function(e){e.preventDefault(),t.props.getMyFilter(t.state.filter)},t}return Object(o.a)(r,[{key:"render",value:function(){var t=this,e=this.handleChange,r=this.filterSubmit,n=this.props,c=n.filter;n.filteredOrders;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("div",{className:b.a.filter,children:["\u0412\u0430\u0448 \u043e\u0441\u0442\u0430\u043d\u043d\u0456\u0439 \u0437\u0430\u043f\u0438\u0442 ",c," "]}),Object(E.jsx)("form",{className:b.a.form,onSubmit:r,children:Object(E.jsx)("input",{id:"filter",className:b.a.filter,onInput:e,onChange:function(e){t.setState({filter:e.target.value}),t.props.getMyFilter(e.target.value)},type:"text",name:"filter",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c\u044f",defaultValue:c})})]})}}]),r}(l.Component),y={filterName:p.a.filterName,getMyFilter:m.g},R=Object(j.b)((function(t){return{contacts:t.contacts,filter:t.filter}}),y)(g),v={filterName:function(t){return{type:"SET_FILTER",payload:t}},claearFilter:function(t){return{type:"CLEAR_FILTER",payload:t}}},_=r(29),S=r(16),D=function(t){Object(i.a)(r,t);var e=Object(u.a)(r);function r(){var t;Object(a.a)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={contacts:[],filter:""},t.addContact=function(e){console.log("add contact check",t.props),t.props.contacts.some((function(t){return t.name===e.name}))?alert("\u0423\u0432\u0430\u0433\u0430 \u0434\u0430\u043d\u0435 \u0456\u043c\u044f \u0443\u0436\u0435 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f!"):t.setState((function(t){return{}}))},t.getValue=function(e){t.setState(Object(c.a)({},e.name,e.value))},t.toGetFilteredContacts=function(){var e=t.props,r=e.contacts,n=e.filter;return r.filter((function(t){return t.name.toLowerCase().includes(n)}))},t.getList=function(){var e=t.state,r=e.contacts,n=e.filter,c=t.toGetFilteredContacts();return n?c:r},t.toDelete=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return!(t.id===e)}))}}))},t}return Object(o.a)(r,[{key:"componentDidMount",value:function(){console.log("---------------",this.props.getMyOrders);var t=JSON.parse(localStorage.getItem("contacts"));t?this.setState((function(){return{contacts:Object(n.a)(t)}})):this.props.getMyOrders()}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.getValue,e=this.getList,r=this.props,n=r.myOrders,c=r.addMyOrder,a=r.getMyOrders,o=r.deleteMyOrder,i=r.getMyFilter,u=r.filteredOrders;return Object(E.jsxs)("div",{className:"App",children:[Object(E.jsx)(s.default,{title:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430 \u043a\u043d\u0438\u0436\u043a\u0430 v.1.4"}),Object(E.jsx)(d.default,{getValue:t,myOrders:n,addMyOrder:c,getMyOrders:a}),Object(E.jsx)("h2",{className:"pApp",children:"\u041f\u043e\u0448\u0443\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432 "}),Object(E.jsx)(R,{filterContact:t,getMyOrders:a,getMyFilter:i,filteredOrders:u}),Object(E.jsx)(f.default,{contacts:e(),getMyOrders:a,deleteMyOrder:o})]})}}]),r}(l.Component),x={adnum:p.a.addNumber,delnum:p.a.deleteNumber,filter:v.filter,myChangeModal:_.a.changeShowModal,getMyOrders:S.a.getOrders,addMyOrder:S.a.addOrder,deleteMyOrder:S.a.deleteOrder};e.a=Object(j.b)((function(t){return console.log("store",t),{filter:t.filteredContacts,contacts:Object(h.c)(t)}}),x)(D)},6:function(t,e,r){"use strict";r.d(e,"i",(function(){return c})),r.d(e,"j",(function(){return a})),r.d(e,"h",(function(){return o})),r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return u})),r.d(e,"a",(function(){return l})),r.d(e,"e",(function(){return s})),r.d(e,"f",(function(){return d})),r.d(e,"d",(function(){return f})),r.d(e,"g",(function(){return O}));var n=r(3),c=Object(n.b)("GET_ORDERS_REQUEST"),a=Object(n.b)("GET_ORDERS_SUCCESS"),o=Object(n.b)("GET_ORDERS_ERROR"),i=Object(n.b)("ADD_ORDER_REQUEST"),u=Object(n.b)("ADD_ORDER_SUCCESS"),l=Object(n.b)("ADD_ORDER_ERROR"),s=(Object(n.b)("UPDATE_ORDER_REQUEST"),Object(n.b)("UPDATE_ORDER_SUCCESS"),Object(n.b)("UPDATE_ORDER_ERROR"),Object(n.b)("DELETE_ORDER_REQUEST")),d=Object(n.b)("DELETE_ORDER_SUCCESS"),f=Object(n.b)("DELETE_ORDER_ERROR"),O=Object(n.b)("FILTER_ORDERS")},60:function(t,e,r){},61:function(t,e,r){},94:function(t,e,r){"use strict";r.r(e);var n,c=r(45),a=r(0),o=r.n(a),i=r(28),u=r.n(i),l=(r(60),r(54),r(20)),s=r(13),d=r(15),f=r(5),O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CREATE_NUMBER":console.log("CREATE_NUMBER");var r=e.payload;return r;default:return t}},b=[],j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0,r=e.type,n=e.payload;switch(r){case"ADD_USER":var c=[].concat(Object(d.a)(t),[n]);return console.log("ADD_USER",c),c;case"DELETE_USER":var a=t.filter((function(t){return t.email!==n}));return console.log(a),a;case"ADD_NUMBER":var o=[].concat(Object(d.a)(t),[n]);return console.log("ADD_NUMBER",o),o;case"DELETE_NUMBER":var i=t.filter((function(t){return t.id!==n}));return console.log("DELETE_NUMBER",i),i;default:return t}},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,r=e.type,n=e.payload;switch(r){case"SET_FILTER":return n;case"CLEAR_FILTER":return"";default:return t}},h=r(3),m=r(53),E=(r(90),r(7)),g=r(29),y={modalReducer:Object(h.c)(!1,Object(E.a)({},g.a.changeShowModal,(function(t,e){return e.payload})))},R=r(6),v={orderReducer:Object(h.c)([],(n={},Object(E.a)(n,R.j,(function(t,e){return e.payload})),Object(E.a)(n,R.c,(function(t,e){var r=e.payload;return[].concat(Object(d.a)(t),[r])})),Object(E.a)(n,R.f,(function(t,e){var r=e.payload;return t.filter((function(t){return t.id!==r}))})),n)),filterReducer:Object(h.c)("",Object(E.a)({},R.g,(function(t,e){return e.payload})))},_=(Object(f.c)({filter:p,contacts:j,user:O,showModal:y.modalReducer,mycontacts:v.orderReducer,filterOrder:v.filterReducer},localStorage.contacts),localStorage.getItem("reduxState")&&JSON.parse(localStorage.getItem("reduxState")),Object(h.a)({reducer:{showModal:y.modalReducer,contacts:v.orderReducer,filterOrder:v.filterReducer},middleware:Object(d.a)(Object(h.d)({serializableCheck:!1}))}));_.subscribe((function(){localStorage.setItem("reduxState",JSON.stringify(_.getState()))}));Object(m.a)(_),r(93);var S=r(4),D=r(95),x=[{key:Object(D.a)(),exact:!0,path:"/",component:Object(a.lazy)((function(){return r.e(3).then(r.bind(null,96))})),private:!0,restricted:!0},{key:Object(D.a)(),exact:!0,path:"/contacts",component:Object(a.lazy)((function(){return Promise.resolve().then(r.bind(null,52))})),private:!0,restricted:!0},{key:Object(D.a)(),exact:!0,path:"/addcontact",component:Object(a.lazy)((function(){return Promise.resolve().then(r.bind(null,48))})),private:!0,restricted:!0},{key:Object(D.a)(),exact:!0,path:"/test",component:Object(a.lazy)((function(){return Promise.resolve().then(r.bind(null,46))})),private:!0,restricted:!0}],C=r(1);u.a.render(Object(C.jsx)(s.a,{store:_,children:Object(C.jsx)(l.a,{children:Object(C.jsx)(o.a.StrictMode,{children:Object(C.jsx)(a.Suspense,{fallback:"Waiting...",children:Object(C.jsx)(S.c,{children:x.map((function(t){return Object(C.jsx)(S.a,Object(c.a)({},t))}))})})})})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.9221b5b7.chunk.js.map