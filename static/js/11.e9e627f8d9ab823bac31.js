webpackJsonp([11],{"11lU":function(t,e){},UhP5:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("gyMJ"),a=s("mHYM"),i=(s("mZiP"),{data:function(){return{isActive:!0,settingtype:1,isshow:!0,codetip:"获取验证码",acount:"",countdown:"59",smskey:"",newPassword_1:"",newPassword_2:"",userphone:a.a.replaceP(a.a.sessiongetItem("userInfo",1).phone)}},created:function(){console.log(a.a.sessiongetItem("companyInfo",1).id)},methods:{cheackTab:function(t){this.isActive="2"!=t,this.settingtype=t},getCode:function(){var t=this;if(a.a.checkNumber(this.acount,1)&&this.acount){this.isshow=!1;var e=setInterval(function(){t.countdown=t.countdown-1,0==t.countdown&&(t.isshow=!0,t.codetip="重新获取",t.countdown=59,clearInterval(e))},1e3),s={phone:this.acount};Object(n.p)(s).then(function(e){t.smskey=e.key})}},setUserCode:function(){var t=this;if(this.newPassword_1==this.newPassword_2){var e={newPassword:this.newPassword_2};Object(n.F)(e,a.a.sessiongetItem("companyInfo",1).userId).then(function(e){0==e.resp_code&&t.$message({message:"修改成功",type:"success"})})}else this.$message({message:"两次输入密码不一致",type:"warning"})},cheackOutPassword:function(){a.a.checkNumber(this.phoneCode,5)&&a.a.checkNumber(this.acount,5)&&(this.acount&&this.phoneCode&&this.acount===this.phoneCode?this.isReady=!0:Toast("两次密码输入不一致！",!1))}}}),c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("div",{staticClass:"account-setting"},[s("div",{staticClass:"account-tab"},[s("div",{staticClass:"account-title"},[t._v("\n                账号设置  \n            ")]),t._v(" "),s("div",{class:[t.isActive?"active":"unactive"],on:{click:function(e){return t.cheackTab("1")}}},[s("span",[t._v("修改手机号")]),t._v(" "),s("span",{class:t.isActive?"soilditem-1":""})]),t._v(" "),s("div",{class:[t.isActive?"unactive":"active"],on:{click:function(e){return t.cheackTab("2")}}},[s("span",[t._v("修改登录密码")]),t._v(" "),s("span",{class:t.isActive?"":"soilditem-2"})])]),t._v(" "),1==t.settingtype?s("div",{staticClass:"setting-account"},[s("div",{staticClass:"setting-title"},[s("span",[t._v("当前绑定手机号码")]),t._v(" "),s("span",[t._v(t._s(t.userphone))])]),t._v(" "),s("div",{staticClass:"input-item"},[s("el-input",{attrs:{placeholder:"输入新的手机号",clearable:"",type:"number",resize:"none"},on:{blur:t.cheackOutNumber},model:{value:t.acount,callback:function(e){t.acount=e},expression:"acount"}})],1),t._v(" "),s("div",{staticClass:"input-item code"},[s("el-input",{attrs:{placeholder:"输入收到的验证码",maxlength:"4"},model:{value:t.phoneCode,callback:function(e){t.phoneCode=e},expression:"phoneCode"}}),t._v(" "),s("div",{staticClass:"code-solid"}),t._v(" "),t.isshow?s("div",{staticClass:"get-code",on:{click:function(e){return e.stopPropagation(),t.getCode(e)}}},[t._v(t._s(t.codetip))]):s("div",{staticClass:"get-code"},[t._v("重新发送 "+t._s(t.countdown)+"s")])],1),t._v(" "),t._m(0)]):t._e(),t._v(" "),2==t.settingtype?s("div",{staticClass:"setting-account"},[s("div",{staticClass:"setting-title"},[s("span",[t._v("当前登录的账号")]),t._v(" "),s("span",[t._v(t._s(t.userphone))])]),t._v(" "),s("div",{staticClass:"setting-title code-title"},[t._v("\n                设置登录密码\n            ")]),t._v(" "),s("div",[s("div",{staticClass:"input-item"},[s("el-input",{staticClass:"code-input",attrs:{placeholder:"请输入密码",clearable:"",type:"password"},on:{blur:t.cheackOutNumber},model:{value:t.newPassword_1,callback:function(e){t.newPassword_1=e},expression:"newPassword_1"}})],1),t._v(" "),s("div",{staticClass:"input-item"},[s("el-input",{attrs:{placeholder:"请确认密码",clearable:"",type:"password"},on:{blur:t.cheackOutNumber},model:{value:t.newPassword_2,callback:function(e){t.newPassword_2=e},expression:"newPassword_2"}})],1)]),t._v(" "),s("div",{staticClass:"submit-btn",on:{click:t.setUserCode}},[s("span",[t._v("设置密码")])])]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"submit-btn"},[e("span",[this._v("修改手机号码")])])}]};var o=s("C7Lr")(i,c,!1,function(t){s("11lU")},"data-v-d2351d2e",null);e.default=o.exports}});