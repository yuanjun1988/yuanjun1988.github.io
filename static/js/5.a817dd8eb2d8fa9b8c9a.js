webpackJsonp([5],{"hon+":function(t,i){},zUuh:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("wSez"),c={data:function(){return{isActive:!1,isActive1:!1,isActive2:!1,isActive3:!1,content:""}},methods:{chooselabel:function(){this.isActive?this.isActive=!1:this.isActive=!0},chooselabel1:function(){this.isActive1?this.isActive1=!1:this.isActive1=!0},chooselabel2:function(){this.isActive2?this.isActive2=!1:this.isActive2=!0},chooselabel3:function(){this.isActive3?this.isActive3=!1:this.isActive3=!0},reportsumbit:function(){""!=this.content?Object(s.Toast)("提交成功"):Object(s.Toast)("请选择或描述您要举报的内容")}}},n={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"frame"},[t._m(0),t._v(" "),e("div",{staticClass:"label"},[e("div",{class:t.isActive?"virtual yes":"virtual",on:{click:t.chooselabel}},[t._v("虚假职位")]),t._v(" "),e("div",{class:t.isActive1?"advertising yes":"advertising",on:{click:t.chooselabel1}},[t._v("广告")]),t._v(" "),e("div",{class:t.isActive2?"charge yes":"charge",on:{click:t.chooselabel2}},[t._v("收费")]),t._v(" "),e("div",{class:t.isActive3?"pornographic yes":"pornographic",on:{click:t.chooselabel3}},[t._v("色情")])]),t._v(" "),e("div",[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"input",attrs:{placeholder:"选择不够？直接描述其他您想举报的内容"},domProps:{value:t.content},on:{input:function(i){i.target.composing||(t.content=i.target.value)}}})]),t._v(" "),e("div",{staticClass:"submit",on:{click:t.reportsumbit}},[t._v("\r\n        提交\r\n    ")])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"remind"},[i("p",[this._v("请选择或描述您想举报的内容")])])}]};var o=e("C7Lr")(c,n,!1,function(t){e("hon+")},"data-v-55ccc0d5",null);i.default=o.exports}});