webpackJsonp([6],{UVba:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("gyMJ"),a={data:function(){return{disX:0,rangeStatus:!1,formLabelAlign:{name:"",pr:"",hy:"",mun:"",adress:"",adressdetail:""},sextab:"1",userInfo:{},resume:{},resumeEduList:[],resumeTrainingList:[],resumeProjectList:[],resumeWorkExpeList:[],selectedSkilllableServiceList:[],resumeWorksshowList:[],routerType:1==this.$route.query.type?"/resume/resumemanage":"/home/homepage",centerDialogVisible:!1,interviewTime:"",interviewerName:"",jobType:"",contactPhone:"",userId:"",interviewAddress:"",interviewDetailAddress:"",remark:"",optionProps:{value:"id",label:"name",children:"list"},optionCityProps:{value:"id",label:"name",children:"children"},cityOptions:[],videoPreviewDia:!1,videoPreviewUrl:""}},created:function(){this.getResumeInfo(),this.getAllCity()},methods:{previewVideo:function(e){this.videoPreviewDia=!0,this.videoPreviewUrl=this.$qiniuUpParams_1.url+e},getAllCity:function(){var e=this;Object(i.i)({}).then(function(t){e.cityOptions=t.datas||[]})},handleChange:function(e){var t=this.$refs.cascaderAddr.getCheckedNodes()[0].pathLabels;this.cityInfo={provinceid:e[0],provinceName:t[0],cityid:e[1],cityBody:t[1],threeCityid:e[2],threeCityBody:t[2]}},sendInterview:function(){var e=this,t={resumeId:this.$route.query.resumeId,jobType:"",interviewerName:"",userId:this.$route.query.userId};Object(i.E)(t).then(function(t){var s=t.datas;e.userInfo=s.userInfo,e.resume=s.resume,e.resumeEduList=s.resumeEduList||[],e.resumeTrainingList=s.resumeTrainingList||[],e.resumeProjectList=s.resumeProjectList||[],e.resumeWorkExpeList=s.resumeWorkExpeList||[],e.selectedSkilllableServiceList=s.selectedSkilllableServiceList||[],e.resumeWorksshowList=s.resumeWorksshowList||[],e.showListLength=s.resumeWorksshowList.length})},getResumeInfo:function(){var e=this,t={resumeId:this.$route.query.resumeId,userId:this.$route.query.userId};Object(i.s)(t).then(function(t){var s=t.datas;e.userInfo=s.userInfo,e.resume=s.resume,e.resumeEduList=s.resumeEduList||[],e.resumeTrainingList=s.resumeTrainingList||[],e.resumeProjectList=s.resumeProjectList||[],e.resumeWorkExpeList=s.resumeWorkExpeList||[],e.selectedSkilllableServiceList=s.selectedSkilllableServiceList||[],e.resumeWorksshowList=s.resumeWorksshowList||[],e.showListLength=s.resumeWorksshowList.length})}}},r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main"},[i("div",{staticClass:"main_con"},[i("div",{staticClass:"posiiton_tab"},[i("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[i("el-breadcrumb-item",{attrs:{to:{path:e.routerType}}},[e._v("简历管理")]),e._v(" "),i("el-breadcrumb-item",[e._v("查看简历")])],1)],1),e._v(" "),i("div",{staticClass:"position_section"},[i("div",{staticClass:"resume_con"},[i("div",{staticClass:"resume_detail_left"},[0!=e.resumeWorksshowList.length?i("div",{staticClass:"carousel_item"},[i("el-carousel",{staticClass:"el-carousel__content",attrs:{interval:4e3,height:"186px"}},e._l(e.resumeWorksshowList,function(t){return i("el-carousel-item",{key:t,style:{background:"url("+e.videoposterFilter(t.worksUrl)+") center no-repeat"}},[i("img",{staticClass:"video_btn",attrs:{src:s("PC5q"),alt:""},on:{click:function(s){return e.previewVideo(t.worksUrl)}}})])}),1)],1):e._e(),e._v(" "),i("div",{staticClass:"position_require"},[i("div",{staticClass:"header_item"},[e.userInfo.headportrait?i("img",{staticClass:"header_img",attrs:{src:e.photoFilter(e.userInfo.headportrait,80,80),alt:""}}):i("img",{staticClass:"header_img",attrs:{src:s("Qn29"),alt:""}}),e._v(" "),"女"==e.userInfo.sexName?i("img",{staticClass:"sex_icon",attrs:{src:s("aN8N"),alt:""}}):e._e(),e._v(" "),"男"==e.userInfo.sexName?i("img",{staticClass:"sex_icon",attrs:{src:s("K7+H"),alt:""}}):e._e()]),e._v(" "),i("div",{staticClass:"position_info"},[i("div",{staticClass:"position_user_info"},[i("div",[e._v(e._s(e.userInfo.userName))]),e._v(" "),i("div",[e.userInfo.age?i("span",[e._v(e._s(e.userInfo.age)+"岁")]):e._e(),e._v(" "),e.userInfo.workYearName?i("span",[e._v("丨")]):e._e(),e._v(" "),i("span",[e._v(e._s(e.userInfo.workYearName))]),e._v(" "),e.userInfo.diplomaName?i("span",[e._v("丨")]):e._e(),e._v(" "),i("span",[e._v(e._s(e.userInfo.diplomaName))]),e._v(" "),e.resume.jobStatusName?i("span",[e._v("丨")]):e._e(),e._v(" "),i("span",[e._v(e._s(e.resume.jobStatusName))])])]),e._v(" "),i("div",{staticClass:"address_info"},[i("span",[e._v(e._s(e.userInfo.domicileAddress))]),e._v(" "),e.userInfo.mobilePhone?i("span",[e._v("丨")]):e._e(),e._v(" "),i("span",[e._v(e._s(e.replaceP(e.userInfo.mobilePhone)))])])])]),e._v(" "),i("div",{staticClass:"content_item"},[i("div",[i("div",{staticClass:"resume_title"},[e._v("\n                                  求职意向\n                              ")]),e._v(" "),i("div",{staticClass:"resume_position"},[i("span",[e._v(e._s(e.resume.intentionPositionName))]),e._v(" "),e.resume.minsalaryName?i("span",[e._v("丨")]):e._e(),e._v(" "),i("span",[e._v(e._s(e.resume.minsalaryName))]),e._v(" "),e.resume.maxsalaryName&&e.resume.minsalaryName||e.resume.maxsalaryName?i("span",[e._v("-")]):e._e(),e._v(" "),i("span",[e._v(e._s(e.resume.maxsalaryName))]),e._v(" "),e.resume.intentionCityName?i("span",[e._v("丨")]):e._e(),e._v(" "),i("span",[e._v(e._s(e.resume.intentionCityName))])])]),e._v(" "),e.resume.advantage?i("div",[i("div",{staticClass:"resume_title"},[e._v("\n                                  个人优势\n                              ")]),e._v(" "),i("div",{staticClass:"skill_text"},[e._v("\n                                  \n                              "+e._s(e.resume.advantage)+"\n                              ")])]):e._e(),e._v(" "),0!=e.selectedSkilllableServiceList.length?i("div",[i("div",{staticClass:"resume_title"},[e._v("\n                                  技能标签\n                              ")]),e._v(" "),i("div",{staticClass:"skil_item"},e._l(e.selectedSkilllableServiceList,function(t,s){return i("span",{key:s},[e._v(e._s(t.name))])}),0)]):e._e(),e._v(" "),0!=e.resumeWorkExpeList.length?i("div",[i("div",{staticClass:"resume_title"},[e._v("\n                                  工作经历\n                              ")]),e._v(" "),e._l(e.resumeWorkExpeList,function(t,s){return i("div",{key:t.workExpeId},[i("div",{staticClass:"working_experience"},[i("span",{staticClass:"experience_time"},[i("span",[e._v(e._s(e.formatData(t.startdate,"month")))]),i("span",[e._v(e._s(e.formatData(t.enddate,"month")))])]),e._v(" "),i("span",[e._v(e._s(t.companyName))]),e._v(" "),i("span",[e._v(e._s(t.positionName))])]),e._v(" "),i("div",{staticClass:"experience_text"},[e._v("\n                                      "+e._s(t.workContent)+"\n                                  ")])])})],2):e._e(),e._v(" "),0!=e.resumeEduList.length?i("div",[i("div",{staticClass:"resume_title"},[e._v("\n                                  教育经历\n                              ")]),e._v(" "),e._l(e.resumeEduList,function(t,s){return i("div",{key:t.resumeEduId,staticClass:"working_experience"},[i("span",{staticClass:"experience_time"},[i("span",[e._v(e._s(e.formatData(t.startdate,"month")))]),i("span",[e._v(e._s(e.formatData(t.enddate,"month")))])]),e._v(" "),i("span",[e._v(e._s(t.schoolName))]),e._v(" "),i("span",[e._v(e._s(t.profession))])])})],2):e._e()])]),e._v(" "),i("div",{staticClass:"solid_item"}),e._v(" "),e._m(0)])])]),e._v(" "),i("el-dialog",{attrs:{title:"面试邀请",visible:e.centerDialogVisible,center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[i("div",{staticClass:"video_preview"},[i("el-form",{staticClass:"el-form",attrs:{"label-width":"100px"}},[i("div",{staticClass:"dialog_top"},[i("div",{staticClass:"header_item"},[i("img",{staticClass:"header_img",attrs:{src:s("Qn29"),alt:""}}),e._v(" "),"女"==e.userInfo.sexName?i("img",{staticClass:"sex_icon",attrs:{src:s("aN8N"),alt:""}}):e._e(),e._v(" "),"男"==e.userInfo.sexName?i("img",{staticClass:"sex_icon",attrs:{src:s("K7+H"),alt:""}}):e._e()]),e._v(" "),i("span",[e._v(e._s(e.userInfo.userName))])]),e._v(" "),i("el-form-item",{attrs:{required:"",label:"面试职位："}},[i("span",{staticClass:"inten_PositionName"},[e._v("\n                      "+e._s(e.resume.intentionPositionName)+"\n                   ")])]),e._v(" "),i("el-form-item",{attrs:{required:"",label:"面试时间："}},[i("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:e.interviewTime,callback:function(t){e.interviewTime=t},expression:"interviewTime"}})],1),e._v(" "),i("el-form-item",{attrs:{required:"",label:"面试地址："}},[i("el-cascader",{ref:"cascaderAddr",attrs:{options:e.cityOptions,props:e.optionCityProps,emitPath:""},on:{change:e.handleChange},model:{value:e.interviewAddress,callback:function(t){e.interviewAddress=t},expression:"interviewAddress"}})],1),e._v(" "),i("el-form-item",{attrs:{label:""}},[i("el-input",{attrs:{placeholder:"填写详细地址：如单元门牌号"},model:{value:e.interviewDetailAddress,callback:function(t){e.interviewDetailAddress=t},expression:"interviewDetailAddress"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"联系人：",required:""}},[i("el-input",{attrs:{placeholder:"请输入联系人"},model:{value:e.interviewerName,callback:function(t){e.interviewerName=t},expression:"interviewerName"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"联系方式：",required:""}},[i("el-input",{attrs:{placeholder:"请输入手机号码"},model:{value:e.contactPhone,callback:function(t){e.contactPhone=t},expression:"contactPhone"}})],1),e._v(" "),1==e.positionTypeStatus?i("el-form-item",{attrs:{label:"备注："}},[i("el-input",{attrs:{type:"textarea",placeholder:"请输入内容",maxlength:"5","show-word-limit":"",rows:"4"},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}})],1):e._e()],1)],1),e._v(" "),i("div",{staticClass:"position_bottom"},[i("el-button",{staticClass:"update_btn update_cancel_btn",attrs:{"el-button":""}},[e._v("取消")]),e._v(" "),i("el-button",{staticClass:"update_btn update_save_btn",attrs:{"el-button":""},on:{click:e.sendInterview}},[e._v("确认")])],1)]),e._v(" "),i("el-dialog",{staticClass:"video_preview",attrs:{title:"",visible:e.videoPreviewDia,center:""},on:{"update:visible":function(t){e.videoPreviewDia=t}}},[i("div",{},[i("video",{staticClass:"playitem",attrs:{controls:"",src:e.videoPreviewUrl,autoplay:"autoplay"}})])])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"resume_detail_right"},[i("div",{staticClass:"position_tab"},[i("div",{staticClass:"company_title"},[i("img",{attrs:{src:s("rnBO"),alt:""}}),e._v(" "),i("span",[e._v("收藏")])]),e._v(" "),i("div",{staticClass:"company_title"},[i("img",{attrs:{src:s("t7xA"),alt:""}}),e._v(" "),i("span",[e._v("转发")])])]),e._v(" "),i("div",{staticClass:"chat_btn"},[e._v("\n                          立即沟通\n                      ")]),e._v(" "),i("div",{staticClass:"chat_btn"},[e._v("\n                          邀请面试\n                      ")])])}]};var n=s("C7Lr")(a,r,!1,function(e){s("VAGP")},"data-v-4594edda",null);t.default=n.exports},VAGP:function(e,t){},rnBO:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAC0UlEQVQ4T52UT2hdRRTGv28ed6HQRdud4CKpoaSJxryZSUIIltAu01WQaKtUDMYg4qKkoBjow0A33QjtooG06R8qllIKQhZtd4JJvTPzKs/4B41m1U03QkMpPvPmyMSXkELee8RZzeWc8+PMd79ziBanXC4fiTFeIcn19fXx/v7+u81K2Czovc8ArAD4S0SE5H4AB4wx/zSqawp0zr1P8qJSqiMBYoy/i8iktfbyroGlUkmNjIz8LCLfW2tPJoBz7iqAgYWFhc5SqRR3gjbs0Hv/JoCvSXZrrX9JxUtLS51Zli0DeMsYc6slcHFx8YUsy15VSr0eYzyllPpJaz26vTCEcDvG2EXyyxhjpVqt/jg0NLS2mcMQwisi8jmAPhE5SLIA4BnJ5Rjjh9bah9uBzrnepCuAbgAvAhAAf5J0McYSvfcVEXmJZLLGw1qt9oO19leStWYOEBHlve8g+ZqI9JCcAPAoAf8WkXlr7WQrTzaLO+cuATjOdCF5guTbWus7/wcaQhgTkeupsdRhJiLpbx4j+a7W+uZuoHmev6OUmheR28aYExu2EZFCCOEagDEA48aY5LeWJ4TwnojMAbihtU5DUNvyYV3kOaXUyVqtNtDX1+eaEfM8t4VC4UF6ptZ6guSG0Z8zdp7ng0qp77Isa+/p6VltBqxUKu3VavUPpdRgsVhc2vLh9qI8zz9SSp01xuyt+6shM+2KEMITEZmy1s7uCHTOzZLsNMa80VLA/2Z7EUDZWvvxjkDv/QMAuTHmk82Ecrl8OMY4k76VUtPFYvHbzVgIIU3MIa31VgPPaei9fwrgU2PM+RDCAIAZETkKYGM5AOgEcK9QKEz39vY659xpkp8ZY/Y16vBxfY5/q4NWROSL1dXVr1JBW1tbGoAz6QrgPoCutHittS830nCU5AUReULy3Nra2pXh4eH17XrWt/g4gCmSe2KMH1hrv9nM+RdB50oxjpVTdgAAAABJRU5ErkJggg=="},t7xA:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACI0lEQVQ4T62VPYhTQRSFz5n3cDUh/jRptPUHUkjem8CCFgEXRIS1Ea0VbcRm0UpsLFwLLcRiF0EES12wsAhb6KYSXt5MIsRCEIu1shDMbtjFZ4p3ZYKBGDd/i9PNnZnv3rnnMMNms3mo0+k8BTAPYAZ/jw2SpTAMv/TCxphTJFdFZI3kota61n+ExpgVkhcHQL3pJkndD7TWnib5VkS6yUm+A7AYhuFad26t/QVgD8mT7Xb7cz+4XC53SKaDyaIoOuL7/m0A1wBk/6zXlFJ3HVBcQGvNIVX+ExYRL47jed/3r4vIub4N21MDG43GXJqmSwCODmYi+WYqoDFmgeQjAArAOslnaZp+JLni2gZgdmJgHMdXlFLPAYiIPMhkMvcKhULHGHOf5B0nThiGcxMBjTHHSX4AsI/kQhiGj911oyja7/v+VwAHSZ5xSk8EtNauAjgL4JXW+nKvd9baWwBcC2pa69mebUaqHMdxSSkVk9wSkWNa6299Jr9K8olS6kIQBM6PXR+OBFprHwJwnlvWWt8YZ62xQGOMq67ked75YrFYGQa01lZJtkcCRYT1en3biaGUygdB8H0nYLVa3ZvL5X4CSEYCK5XKTD6f/wFgQ2t9eFh1EwMdwFp7wvO8pFgsrv8X4DgR3PpUFe4GmLiH1ff9oNVqfZoEMLgnm80GSqn3ADadKC8BXNoNaIczLxzwgIgsk3RfQO+xnJa/BeB1kiQ3fwPcMQJtJmJ1pwAAAABJRU5ErkJggg=="}});