(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["em-overtimes'~sv-overtimes'"],{"257a":function(e,t,r){"use strict";var n=r("7a23"),c=Object(n["createElementVNode"])("div",{class:"row"},[Object(n["createElementVNode"])("div",{class:"col-12"},[Object(n["createElementVNode"])("div",{class:"alert alert-primary"}," dfjklsdfjl ")])],-1),o={class:"row"},a={class:"col-12"},l={class:"card"},s={class:"card-header"},i=Object(n["createElementVNode"])("h3",{class:"card-title"}," Overtime Requests ",-1),u={class:"card-tools"},m=Object(n["createElementVNode"])("i",{class:"fas fa fa-plus mr-1"},null,-1),d=Object(n["createTextVNode"])(" Create Request"),b=[m,d],f={class:"card-body p-0"},O={class:"table table-striped table-sm table-hover"},j=Object(n["createElementVNode"])("thead",null,[Object(n["createElementVNode"])("tr",{class:"text-center"},[Object(n["createElementVNode"])("th",{class:"text-left"},"Date"),Object(n["createElementVNode"])("th",null,"From"),Object(n["createElementVNode"])("th",null,"To"),Object(n["createElementVNode"])("th",null,"Reason"),Object(n["createElementVNode"])("th",null,"Status"),Object(n["createElementVNode"])("th",null,"Actions")])],-1),p={key:0},v=Object(n["createElementVNode"])("tr",{class:"text-center"},[Object(n["createElementVNode"])("td",{colspan:"10"},[Object(n["createElementVNode"])("i",{class:"fas fa-spinner fa-pulse fa-2x"})])],-1),E=[v],V={key:1},N={class:"text-left"},h={key:0,class:"fas fa fa-exclamation text-warning"},g={key:1,class:"fas fa fa-check text-success"},R={key:2,class:"fas fa fa-times text-danger"},w=["onClick"],k=Object(n["createElementVNode"])("i",{class:"fas fa-search"},null,-1),x=[k],q=["onClick"],y=Object(n["createElementVNode"])("i",{class:"fas fa-times"},null,-1),B=[y],C={key:1};function T(e,t,r,m,d,v){return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[c,Object(n["createElementVNode"])("div",o,[Object(n["createElementVNode"])("div",a,[Object(n["createElementVNode"])("div",l,[Object(n["createElementVNode"])("div",s,[i,Object(n["createElementVNode"])("div",u,[Object(n["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(t){return e.EmOvertime.setComponentTo("overtime-create-request-component")}),class:"btn btn-primary btn-sm"},b)])]),Object(n["createElementVNode"])("div",f,[Object(n["createElementVNode"])("table",O,[j,e.EmOvertime.isRequestLoading?(Object(n["openBlock"])(),Object(n["createElementBlock"])("tbody",p,E)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("tbody",V,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.requests,(function(t,r){return Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{class:"text-center",key:t.id},[Object(n["createElementVNode"])("td",N,Object(n["toDisplayString"])(t.date),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.from.standard),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.to.standard),1),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.reason),1),Object(n["createElementVNode"])("td",null,["Pending"==t.status?(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",h)):Object(n["createCommentVNode"])("",!0),"Approved"==t.status?(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",g)):Object(n["createCommentVNode"])("",!0),"Disapproved"==t.status?(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",R)):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("td",null,["Pending"==t.status?(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:0},[Object(n["createElementVNode"])("button",{onClick:function(r){return e.editRequest(t.id)},class:"btn btn-primary btn-xs mr-1"},x,8,w),Object(n["createElementVNode"])("button",{onClick:function(n){return e.deleteRequest(t.id,r)},class:"btn btn-danger btn-xs mr-1"},B,8,q)],64)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("p",C,"Not applicable"))])])})),128))]))])])])])])],64)}var D=r("1da1"),S=(r("96cf"),r("a293")),L=r("854a"),M=Object(n["defineComponent"])({setup:function(){return Object(D["a"])(regeneratorRuntime.mark((function e(){var t,r,c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=Object(S["a"])(),r=Object(n["computed"])((function(){return t.getAllRequests})),c=function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.setSelectedRequest(r),t.setComponentTo("overtime-show-request-component");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(r,n){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(c=confirm("Delete this request?"),!c){e.next=4;break}return e.next=4,t.deleteEmployeeOvertimeRequest(r,n);case 4:L["success"]("Overtime request deleted.");case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),e.abrupt("return",{EmOvertime:t,requests:r,editRequest:c,deleteRequest:o});case 5:case"end":return e.stop()}}),e)})))()}}),F=r("6b0d"),U=r.n(F);const A=U()(M,[["render",T]]);t["a"]=A},"56fb":function(e,t,r){"use strict";var n=r("7a23"),c=Object(n["createElementVNode"])("div",{class:"row"},[Object(n["createElementVNode"])("div",{class:"col-12"},[Object(n["createElementVNode"])("div",{class:"alert alert-primary"}," dfjklsdfjl ")])],-1),o={class:"row"},a={class:"col-12"},l={class:"card"},s={class:"card-header"},i=Object(n["createElementVNode"])("h3",{class:"card-title"},"Edit Overtime",-1),u={class:"card-tools"},m=Object(n["createElementVNode"])("i",{class:"fas fa fa-sign-out-alt"},null,-1),d=Object(n["createTextVNode"])(" Cancel Request "),b=[m,d],f={class:"card-body"},O={class:"row"},j={class:"form-group col-12"},p=Object(n["createElementVNode"])("label",null,"Date",-1),v={class:"form-group col-xs-12 col-md-6"},E=Object(n["createElementVNode"])("label",null,"From",-1),V={class:"form-group col-xs-12 col-md-6"},N=Object(n["createElementVNode"])("label",null,"To",-1),h={class:"form-group col-xs-12 col-12"},g=Object(n["createElementVNode"])("label",null,"Reason",-1),R=Object(n["createElementVNode"])("div",{class:"card-footer"},[Object(n["createElementVNode"])("button",{type:"submit",class:"btn btn-primary btn-sm"},"Submit Request")],-1);function w(e,t,r,m,d,w){return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[c,Object(n["createElementVNode"])("div",o,[Object(n["createElementVNode"])("div",a,[Object(n["createElementVNode"])("div",l,[Object(n["createElementVNode"])("div",s,[i,Object(n["createElementVNode"])("div",u,[Object(n["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(t){return e.EmOvertime.setComponentTo("overtime-request-component")}),class:"btn btn-danger btn-sm"},b)])]),Object(n["createElementVNode"])("form",{onSubmit:t[5]||(t[5]=Object(n["withModifiers"])((function(t){return e.updateRequest()}),["prevent"]))},[Object(n["createElementVNode"])("div",f,[Object(n["createElementVNode"])("div",O,[Object(n["createElementVNode"])("div",j,[p,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.form.date=t}),type:"date",class:"form-control form-control-sm"},null,512),[[n["vModelText"],e.form.date]])]),Object(n["createElementVNode"])("div",v,[E,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.form.from=t}),type:"time",class:"form-control form-control-sm"},null,512),[[n["vModelText"],e.form.from]])]),Object(n["createElementVNode"])("div",V,[N,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.form.to=t}),type:"time",class:"form-control form-control-sm"},null,512),[[n["vModelText"],e.form.to]])]),Object(n["createElementVNode"])("div",h,[g,Object(n["withDirectives"])(Object(n["createElementVNode"])("textarea",{"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.form.reason=t}),cols:"30",rows:"10",class:"form-control"},null,512),[[n["vModelText"],e.form.reason]])])])]),R],32)])])])],64)}var k=r("1da1"),x=(r("96cf"),r("a293")),q=r("854a"),y=Object(n["defineComponent"])({setup:function(){var e=Object(x["a"])(),t=Object(n["computed"])((function(){return e.getSelectedRequest})),r=function(){var r=Object(k["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.updateEmployeeOvertimeRequest(t.value,null===(n=t.value)||void 0===n?void 0:n.id),r.next=3,e.setComponentTo("overtime-request-component");case 3:q["success"]("Overtime request updated.");case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return{EmOvertime:e,form:t,updateRequest:r}}}),B=r("6b0d"),C=r.n(B);const T=C()(y,[["render",w]]);t["a"]=T},"7db0":function(e,t,r){"use strict";var n=r("23e7"),c=r("b727").find,o=r("44d2"),a="find",l=!0;a in[]&&Array(1)[a]((function(){l=!1})),n({target:"Array",proto:!0,forced:l},{find:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),o(a)},a293:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("1da1"),c=(r("96cf"),r("7db0"),r("a434"),r("be92")),o=r("5a15"),a=Object(c["b"])({id:"employee_overtime",state:function(){return{overtimes:[],selected_id:0,active_component:"overtime-request-component",isRequestLoading:!1}},getters:{getAllRequests:function(){return this.overtimes},getOvertimeCount:function(){return this.overtimes.length},getSelectedRequest:function(){var e=this;return this.overtimes.find((function(t){return t.id==e.selected_id}))}},actions:{loadEmployeeOvertimeRequests:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!=e.overtimes.length){t.next=7;break}return e.isRequestLoading=!0,t.next=4,o["a"].get("/api/em/overtimes");case 4:r=t.sent,e.overtimes=r.data.data,e.isRequestLoading=!1;case 7:case"end":return t.stop()}}),t)})))()},setComponentTo:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.active_component=e;case 1:case"end":return r.stop()}}),r)})))()},setSelectedRequest:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.selected_id=e;case 1:case"end":return r.stop()}}),r)})))()},addEmployeeOvertimeRequest:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.isRequestLoading=!0,r.next=3,o["a"].post("/api/em/overtimes",e);case 3:n=r.sent,t.overtimes.unshift(n.data.data),t.isRequestLoading=!1;case 6:case"end":return r.stop()}}),r)})))()},updateEmployeeOvertimeRequest:function(e,t){var r=this;return Object(n["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r.isRequestLoading=!0,n.next=3,o["a"].patch("/api/em/overtimes/".concat(t),e);case 3:n.sent,r.isRequestLoading=!1;case 5:case"end":return n.stop()}}),n)})))()},deleteEmployeeOvertimeRequest:function(e,t){var r=this;return Object(n["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r.isRequestLoading=!0,n.next=3,o["a"].delete("/api/em/overtimes/".concat(e));case 3:r.overtimes.splice(t,1),r.isRequestLoading=!1;case 5:case"end":return n.stop()}}),n)})))()}}})},b727:function(e,t,r){var n=r("0366"),c=r("44ad"),o=r("7b0b"),a=r("50c4"),l=r("65f0"),s=[].push,i=function(e){var t=1==e,r=2==e,i=3==e,u=4==e,m=6==e,d=7==e,b=5==e||m;return function(f,O,j,p){for(var v,E,V=o(f),N=c(V),h=n(O,j,3),g=a(N.length),R=0,w=p||l,k=t?w(f,g):r||d?w(f,0):void 0;g>R;R++)if((b||R in N)&&(v=N[R],E=h(v,R,V),e))if(t)k[R]=E;else if(E)switch(e){case 3:return!0;case 5:return v;case 6:return R;case 2:s.call(k,v)}else switch(e){case 4:return!1;case 7:s.call(k,v)}return m?-1:i||u?u:k}};e.exports={forEach:i(0),map:i(1),filter:i(2),some:i(3),every:i(4),find:i(5),findIndex:i(6),filterReject:i(7)}},f94d:function(e,t,r){"use strict";var n=r("7a23"),c=Object(n["createElementVNode"])("div",{class:"row"},[Object(n["createElementVNode"])("div",{class:"col-12"},[Object(n["createElementVNode"])("div",{class:"alert alert-primary"}," dfjklsdfjl ")])],-1),o={class:"row"},a={class:"col-12"},l={class:"card"},s={key:0,class:"overlay"},i=Object(n["createElementVNode"])("i",{class:"fas fa-spinner fa-pulse fa-2x"},null,-1),u=[i],m={class:"card-header"},d=Object(n["createElementVNode"])("h3",{class:"card-title"},"Create Overtime",-1),b={class:"card-tools"},f=Object(n["createElementVNode"])("i",{class:"fas fa fa-sign-out-alt"},null,-1),O=Object(n["createTextVNode"])(" Cancel Request "),j=[f,O],p={class:"card-body"},v={class:"row"},E={class:"form-group col-12"},V=Object(n["createElementVNode"])("label",null,"Date",-1),N={class:"form-group col-xs-12 col-md-6"},h=Object(n["createElementVNode"])("label",null,"From",-1),g={class:"form-group col-xs-12 col-md-6"},R=Object(n["createElementVNode"])("label",null,"To",-1),w={class:"form-group col-xs-12 col-12"},k=Object(n["createElementVNode"])("label",null,"Reason",-1),x=Object(n["createElementVNode"])("div",{class:"card-footer"},[Object(n["createElementVNode"])("button",{type:"submit",class:"btn btn-primary btn-sm"},"Submit Request")],-1);function q(e,t,r,i,f,O){return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[c,Object(n["createElementVNode"])("div",o,[Object(n["createElementVNode"])("div",a,[Object(n["createElementVNode"])("div",l,[e.EmOvertime.isRequestLoading?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",s,u)):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("div",m,[d,Object(n["createElementVNode"])("div",b,[Object(n["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(t){return e.EmOvertime.setComponentTo("overtime-request-component")}),class:"btn btn-danger btn-sm"},j)])]),Object(n["createElementVNode"])("form",{onSubmit:t[5]||(t[5]=Object(n["withModifiers"])((function(t){return e.submitRequest()}),["prevent"]))},[Object(n["createElementVNode"])("div",p,[Object(n["createElementVNode"])("div",v,[Object(n["createElementVNode"])("div",E,[V,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.form.date=t}),type:"date",class:"form-control form-control-sm"},null,512),[[n["vModelText"],e.form.date]])]),Object(n["createElementVNode"])("div",N,[h,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.form.from=t}),type:"time",class:"form-control form-control-sm"},null,512),[[n["vModelText"],e.form.from]])]),Object(n["createElementVNode"])("div",g,[R,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.form.to=t}),type:"time",class:"form-control form-control-sm"},null,512),[[n["vModelText"],e.form.to]])]),Object(n["createElementVNode"])("div",w,[k,Object(n["withDirectives"])(Object(n["createElementVNode"])("textarea",{"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.form.reason=t}),cols:"30",rows:"10",class:"form-control"},null,512),[[n["vModelText"],e.form.reason]])])])]),x],32)])])])],64)}var y=r("1da1"),B=(r("96cf"),r("a293")),C=r("854a"),T=Object(n["defineComponent"])({setup:function(){var e=Object(B["a"])(),t=Object(n["reactive"])({date:null,from:null,to:null,reason:null}),r=function(){var r=Object(y["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.addEmployeeOvertimeRequest(t);case 2:return r.next=4,e.setComponentTo("overtime-request-component");case 4:C["success"]("Overtime request added.");case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return{EmOvertime:e,form:t,submitRequest:r}}}),D=r("6b0d"),S=r.n(D);const L=S()(T,[["render",q]]);t["a"]=L}}]);
//# sourceMappingURL=em-overtimes'~sv-overtimes'.9e11b094.js.map