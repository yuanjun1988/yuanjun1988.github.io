webpackJsonp([12],{"0wvX":function(e,i){},OCuI:function(e,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t=a("mHYM"),l=a("gyMJ"),s=(a("mZiP"),{data:function(){return{dynamicTags:[],inputVisible:!1,inputValue:"",tagIsShow:!0,upCompanyVideoUrl:"",upProductVideoUrl:"",upTeamVideoUrl:"",isNeedCard:"",isCall:"",partJobwWorkTime:"",formLabelAlign:{name:"",job:"",edu:"",exp:"",maxsalary:"",minsalary:"",description:"",advantage:"",hy:"",mun:"",adress:[],adressdetail:"",saralymin:"",saralymax:"",partSaraly:"",partBillingCycle:"",salaryForm:"",partIdentity:"",companyVideoUrl:"",productVideoUrl:"",teamVideoUrl:""},sextab:"1",bigdatadic:{},allPositionList:[],optionProps:{value:"id",label:"name",children:"list"},optionCityProps:{value:"id",label:"name",children:"children"},cityOptions:[{value:"1",name:"22222"}],positiontype:[{name:"全职",type:"1"},{name:"灵工",type:"2"}],indstrylableArr:[],positionTypeStatus:this.$route.query.type,cityInfo:{},companyPosition:{},industryTip:"请选择",adressTip:"请选择",industryName:"单行输入",eduName:"请选择",expName:"请选择",partSaralyName:"请输入薪资",partIdentityName:"请选择",salaryFormDicName:"不限",partBillingCycleName:"请选择",minsalaryName:"请选择",maxsalaryName:"请选择",centerDialogVisible:!1,videoPreviewUrl:""}},created:function(){1==this.$route.query.type?this.getPositionFullInfo():this.getCompanypartjob(),this.bigdatadic=t.a.sessiongetItem("bigdatadic",1),this.getAllPositionList(),this.getAllCity()},methods:{previewVideo:function(e){this.centerDialogVisible=!0,this.videoPreviewUrl=this.$qiniuUpParams_1.url+e},getCompanypartjob:function(){var e=this,i={partJobId:this.$route.query.id};Object(l.n)(i).then(function(i){var a=i.datas;e.companyPosition=a,e.industryTip=a.nameDicName,e.industryName=a.name,e.eduName=a.eduDicName,e.expName=a.expDicName,e.isNeedCard=a.isHealth,e.partSaralyName=a.salary,e.salaryFormDicName=a.salaryFormDicName,e.partBillingCycleName=a.salaryTypeDicName,e.partIdentityName=a.identityDicName,e.isCall=a.isContact,e.partJobwWorkTime="长期"==a.workDateTypeDicName?"1":"2",e.formLabelAlign.adressdetail=a.address,e.dynamicTags=a.skillLabelList,a.provinceDicName&&(e.adressTip=a.provinceDicName+"/"+a.cityDicName+"/"+a.threeCityDicName),a.videos.forEach(function(i){0==i.videoType&&(e.upCompanyVideoUrl=i.videoUrl,e.formLabelAlign.companyVideoUrl=e.videoposterFilter(i.videoUrl,202,122)),1==i.videoType&&(e.upTeamVideoUrl=i.videoUrl,e.formLabelAlign.teamVideoUrl=e.videoposterFilter(i.videoUrl,202,122)),2==i.videoType&&(e.upProductVideoUrl=i.videoUrl,e.formLabelAlign.productVideoUrl=e.videoposterFilter(i.videoUrl,202,122))})})},getPositionFullInfo:function(){var e=this,i={id:this.$route.query.id};Object(l.q)(i).then(function(i){var a=i.datas.companyJob;e.companyPosition=a,e.dynamicTags=a.ability,e.industryName=a.name,e.eduName=a.eduBody,e.expName=a.expBody,e.maxsalaryName=a.maxsalaryBody,e.minsalaryName=a.minsalaryBody,e.formLabelAlign.description=a.description,e.formLabelAlign.advantage=a.advantage,e.formLabelAlign.adressdetail=a.fullAddress,e.industryTip=a.jobBody,a.province&&(e.adressTip=a.province+"/"+a.cityName+"/"+a.threeCityName),0!=a.videos.length&&a.videos.forEach(function(i){0==i.videoType&&(e.upCompanyVideoUrl=i.videoUrl,e.formLabelAlign.companyVideoUrl=e.videoposterFilter(i.videoUrl,202,122)),1==i.videoType&&(e.upTeamVideoUrl=i.videoUrl,e.formLabelAlign.teamVideoUrl=e.videoposterFilter(i.videoUrl,202,122)),2==i.videoType&&(e.upProductVideoUrl=i.videoUrl,e.formLabelAlign.productVideoUrl=e.videoposterFilter(i.videoUrl,202,122))})})},editPosition:function(){1==this.positionTypeStatus?this.editFullPositionInfo():this.editPartPositionInfo()},getAllCity:function(){var e=this;Object(l.i)({}).then(function(i){e.cityOptions=i.datas||[]})},handleChange:function(e){var i=this.$refs.cascaderAddr.getCheckedNodes()[0].pathLabels;this.cityInfo={provinceid:e[0],provinceName:i[0],cityid:e[1],cityBody:i[1],threeCityid:e[2],threeCityBody:i[2]}},editFullPositionInfo:function(){var e=this,i=[];""!=this.upCompanyVideoUrl&&i.push({videoName:"",videoType:"0",videoUrl:this.upCompanyVideoUrl}),""!=this.upTeamVideoUrl&&i.push({videoName:"",videoType:"1",videoUrl:this.upTeamVideoUrl}),""!=this.upProductVideoUrl&&i.push({videoName:"",videoType:"2",videoUrl:this.upProductVideoUrl});var a=this.companyPosition,s={id:this.$route.query.id,cid:t.a.sessiongetItem("companyInfo",1).comId,name:this.formLabelAlign.name||a.name,job:this.formLabelAlign.job[1]||a.job,jobBody:this.indstrylableArr[1]||a.jobBody,edu:this.selectSplit(this.formLabelAlign.edu)[0]||a.edu,eduBody:this.selectSplit(this.formLabelAlign.edu)[1]||a.eduBody,exp:this.selectSplit(this.formLabelAlign.exp)[0]||a.exp,expBody:this.selectSplit(this.formLabelAlign.exp)[1]||a.expBody,maxsalary:this.selectSplit(this.formLabelAlign.maxsalary)[0]||a.maxsalary,maxsalaryBody:this.selectSplit(this.formLabelAlign.maxsalary)[1]||a.maxsalaryBody,minsalaryBody:this.selectSplit(this.formLabelAlign.minsalary)[1]||a.minsalaryBody,minsalary:this.selectSplit(this.formLabelAlign.minsalary)[0]||a.minsalary,description:this.formLabelAlign.description||a.description,advantage:this.formLabelAlign.advantage||a.advantage,ability:this.dynamicTags||a.ability,provinceid:this.cityInfo.provinceid||a.provinceid,province:this.cityInfo.provinceName||a.province,cityid:this.cityInfo.cityid||a.cityid,cityName:this.cityInfo.cityBody||a.cityName,threeCityid:this.cityInfo.threeCityid||a.threeCityid,threeCityName:this.cityInfo.threeCityBody||a.threeCityName,fullAddress:this.formLabelAlign.adressdetail||a.fullAddress,videos:i};Object(l.g)(s).then(function(i){0==i.resp_code&&(e.$message({message:"操作成功",type:"success"}),e.$router.push({path:"/position/positionmanage",query:{type:1}}))})},editPartPositionInfo:function(){var e=this,i=[];""!=this.upCompanyVideoUrl&&i.push({videoName:"",videoType:"0",videoUrl:this.upCompanyVideoUrl}),""!=this.upTeamVideoUrl&&i.push({videoName:"",videoType:"1",videoUrl:this.upTeamVideoUrl}),""!=this.upProductVideoUrl&&i.push({videoName:"",videoType:"2",videoUrl:this.upProductVideoUrl});var a=this.companyPosition,s={id:this.$route.query.id,cid:t.a.sessiongetItem("companyInfo",1).comId,name:this.formLabelAlign.name||a.name,nameDicId:this.formLabelAlign.job[1]||a.nameDicId,nameDicName:this.indstrylableArr[1]||a.nameDicName,eduDicId:this.selectSplit(this.formLabelAlign.edu)[0]||a.eduDicId,expDicId:this.selectSplit(this.formLabelAlign.exp)[0]||a.expDicId,expDicName:this.selectSplit(this.formLabelAlign.exp)[1]||a.expDicName,eduDicName:this.selectSplit(this.formLabelAlign.edu)[1]||a.eduDicName,salary:this.formLabelAlign.partSaraly||a.salary,salaryFormDicId:this.selectSplit(this.formLabelAlign.salaryForm)[0]||a.salaryFormDicId,salaryFormDicName:this.selectSplit(this.formLabelAlign.salaryForm)[1]||a.salaryFormDicName,salaryTypeDicId:this.selectSplit(this.formLabelAlign.partBillingCycle)[0]||a.salaryTypeDicId,salaryTypeDicName:this.selectSplit(this.formLabelAlign.partBillingCycle)[1]||a.salaryTypeDicName,workDesc:this.formLabelAlign.description||a.workDesc,skillLabelList:this.dynamicTags||a.skillLabelList,workDateTypeDicId:1==this.partJobwWorkTime?"43":"42",workDateTypeDicName:1==this.partJobwWorkTime?"长期":"短期",isHealth:this.isNeedCard||a.isHealth,threeCityDicId:this.cityInfo.threeCityid||a.threeCityDicId,threeCityDicName:this.cityInfo.threeCityBody||a.threeCityDicName,provinceDicId:this.cityInfo.provinceid||a.provinceDicId,provinceDicName:this.cityInfo.provinceName||a.provinceDicName,cityDicId:this.cityInfo.cityid||a.cityDicId,cityDicName:this.cityInfo.cityBody||a.cityDicName,identityDicId:this.selectSplit(this.formLabelAlign.partIdentity)[0]||a.identityDicId,identityDicName:this.selectSplit(this.formLabelAlign.partIdentity)[1]||a.identityDicName,address:this.formLabelAlign.adressdetail||a.address,videos:i};Object(l.h)(s).then(function(i){0==i.resp_code&&(e.$message({message:"操作成功",type:"success"}),e.$router.push({path:"/position/positionmanage",query:{type:2}}))})},getAllPositionList:function(){var e=this;Object(l.j)({}).then(function(i){e.allPositionList=i.datas||[]})},handleClose:function(e){this.dynamicTags.splice(this.dynamicTags.indexOf(e),1)},showInput:function(){var e=this;this.inputVisible=!0,this.$nextTick(function(i){e.$refs.saveTagInput.$refs.input.focus()})},handleInputConfirm:function(){var e=this.inputValue,i={name:e};e&&this.dynamicTags.push(i),console.log(this.dynamicTags),this.inputVisible=!1,this.inputValue=""},uploadComVideo:function(e){console.log(this.dynamicTags);var i=e.target.files;2==t.a.fileJudgeType(i)?this.uploadFunc(e,1):this.$message({message:"只能上传视频",type:"warning"})},uploadCertificate:function(e){var i=e.target.files;console.log(t.a.fileJudgeType(i)),2==t.a.fileJudgeType(i)?this.uploadFunc(e,2):this.$message({message:"只能上传视频",type:"warning"})},uploadproductVideo:function(e){var i=e.target.files;console.log(t.a.fileJudgeType(i)),2==t.a.fileJudgeType(i)?this.uploadFunc(e,3):this.$message({message:"只能上传视频",type:"warning"})},uploadFunc:function(e,i){var a=this;this.uploadQiniu(e,1).then(function(e){1==i?(a.formLabelAlign.companyVideoUrl=a.$qiniuUpParams_1.url+e.key+"?vframe/jpg/offset/0",a.upCompanyVideoUrl=e.key):2==i?(a.formLabelAlign.teamVideoUrl=a.$qiniuUpParams_1.url+e.key+"?vframe/jpg/offset/0",a.upTeamVideoUrl=e.key):3==i&&(a.formLabelAlign.productVideoUrl=a.$qiniuUpParams_1.url+e.key+"?vframe/jpg/offset/0",a.upProductVideoUrl=e.key)})},handleChangePosition:function(e){this.indstrylableArr=this.$refs.cascaderPositionAddr.getCheckedNodes()[0].pathLabels}},watch:{}}),o={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"main"},[t("div",{staticClass:"main_con"},[t("div",{staticClass:"posiiton_tab"},[t("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/position/positionmanage"}}},[e._v("职位管理")]),e._v(" "),t("el-breadcrumb-item",[e._v("编辑职位")])],1)],1),e._v(" "),t("div",{staticClass:"position_section"},[t("el-form",{staticClass:"el-form",attrs:{"label-width":"170px",model:e.formLabelAlign}},[t("el-form-item",{attrs:{required:"",label:"职位："}},[t("el-cascader",{ref:"cascaderPositionAddr",attrs:{options:e.allPositionList,props:e.optionProps,placeholder:e.industryTip,clearable:""},on:{change:e.handleChangePosition},model:{value:e.formLabelAlign.job,callback:function(i){e.$set(e.formLabelAlign,"job",i)},expression:"formLabelAlign.job"}})],1),e._v(" "),t("el-form-item",{attrs:{required:"",label:"职位名称："}},[t("el-input",{attrs:{placeholder:e.industryName},model:{value:e.formLabelAlign.name,callback:function(i){e.$set(e.formLabelAlign,"name",i)},expression:"formLabelAlign.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"工作经验："}},[t("el-select",{attrs:{placeholder:e.expName},model:{value:e.formLabelAlign.exp,callback:function(i){e.$set(e.formLabelAlign,"exp",i)},expression:"formLabelAlign.exp"}},e._l(e.bigdatadic.workYears,function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id+"|"+e.name}})}),1)],1),e._v(" "),t("el-form-item",{attrs:{label:"学历要求："}},[t("el-select",{attrs:{placeholder:e.eduName},model:{value:e.formLabelAlign.edu,callback:function(i){e.$set(e.formLabelAlign,"edu",i)},expression:"formLabelAlign.edu"}},e._l(e.bigdatadic.diploma,function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id+"|"+e.name}})}),1)],1),e._v(" "),2==e.positionTypeStatus?t("el-form-item",{attrs:{label:"身份要求："}},[t("el-select",{attrs:{placeholder:e.partIdentityName},model:{value:e.formLabelAlign.partIdentity,callback:function(i){e.$set(e.formLabelAlign,"partIdentity",i)},expression:"formLabelAlign.partIdentity"}},e._l(e.bigdatadic.partIdentityTypeList,function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id+"|"+e.name}})}),1)],1):e._e(),e._v(" "),t("div",{staticClass:"skill_item"},[t("div",{staticClass:"skill_title"},[t("span",[e._v("技能要求：")]),e._v(" "),t("span",[e._v("选择技能标签（0/5）")])]),e._v(" "),t("div",{staticClass:"skill_tab"},[e._l(e.dynamicTags,function(i){return t("el-tag",{key:i.name,attrs:{closable:"","disable-transitions":!1},on:{close:function(a){return e.handleClose(i)}}},[e._v("\n                      "+e._s(i.name)+"\n                      ")])}),e._v(" "),e.inputVisible?t("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small",maxlength:"6"},on:{blur:e.handleInputConfirm},nativeOn:{keyup:function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"enter",13,i.key,"Enter")?null:e.handleInputConfirm(i)}},model:{value:e.inputValue,callback:function(i){e.inputValue=i},expression:"inputValue"}}):t("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:e.showInput}},[e._v("+ 自定义")])],2)]),e._v(" "),2==e.positionTypeStatus?t("el-form-item",{attrs:{required:"",label:"是否需要健康证："}},[t("el-radio",{attrs:{label:"Y"},model:{value:e.isNeedCard,callback:function(i){e.isNeedCard=i},expression:"isNeedCard"}},[e._v("是")]),e._v(" "),t("el-radio",{attrs:{label:"N"},model:{value:e.isNeedCard,callback:function(i){e.isNeedCard=i},expression:"isNeedCard"}},[e._v("否")])],1):e._e(),e._v(" "),2==e.positionTypeStatus?t("el-form-item",{attrs:{required:"",label:"职位薪资："}},[t("div",{staticClass:"saraly_item"},[t("el-input",{attrs:{placeholder:e.partSaralyName},model:{value:e.formLabelAlign.partSaraly,callback:function(i){e.$set(e.formLabelAlign,"partSaraly",i)},expression:"formLabelAlign.partSaraly"}}),e._v(" "),t("el-select",{staticClass:"select_item",attrs:{"el-select":"",clearable:"",placeholder:e.salaryFormDicName},model:{value:e.formLabelAlign.salaryForm,callback:function(i){e.$set(e.formLabelAlign,"salaryForm",i)},expression:"formLabelAlign.salaryForm"}},e._l(e.bigdatadic.partSalaryTypeList,function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id+"|"+e.name}})}),1)],1)]):t("el-form-item",{attrs:{label:"职位月薪："}},[t("div",{staticClass:"saraly_item"},[t("el-select",{staticClass:"select_item",attrs:{"el-select":"",clearable:"",placeholder:e.minsalaryName},model:{value:e.formLabelAlign.minsalary,callback:function(i){e.$set(e.formLabelAlign,"minsalary",i)},expression:"formLabelAlign.minsalary"}},e._l(e.bigdatadic.saraly,function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id+"|"+e.name}})}),1),e._v(" "),t("span",[e._v("\n                          至\n                      ")]),e._v(" "),t("el-select",{staticClass:"select_item",attrs:{clearable:"",placeholder:e.maxsalaryName},model:{value:e.formLabelAlign.maxsalary,callback:function(i){e.$set(e.formLabelAlign,"maxsalary",i)},expression:"formLabelAlign.maxsalary"}},e._l(e.bigdatadic.saraly,function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id+"|"+e.name}})}),1)],1)]),e._v(" "),2==e.positionTypeStatus?t("el-form-item",{attrs:{label:"结算方式："}},[t("el-select",{attrs:{placeholder:e.partBillingCycleName},model:{value:e.formLabelAlign.partBillingCycle,callback:function(i){e.$set(e.formLabelAlign,"partBillingCycle",i)},expression:"formLabelAlign.partBillingCycle"}},e._l(e.bigdatadic.partBillingCycleList,function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id+"|"+e.name}})}),1)],1):e._e(),e._v(" "),t("el-form-item",{attrs:{label:"职位描述："}},[t("el-input",{attrs:{type:"textarea",placeholder:"请输入内容",maxlength:"5000","show-word-limit":"",rows:"8"},model:{value:e.formLabelAlign.description,callback:function(i){e.$set(e.formLabelAlign,"description",i)},expression:"formLabelAlign.description"}})],1),e._v(" "),1==e.positionTypeStatus?t("el-form-item",{attrs:{label:"职位优势："}},[t("el-input",{attrs:{type:"textarea",placeholder:"请输入内容",maxlength:"100","show-word-limit":"",rows:"4"},model:{value:e.formLabelAlign.advantage,callback:function(i){e.$set(e.formLabelAlign,"advantage",i)},expression:"formLabelAlign.advantage"}})],1):e._e(),e._v(" "),2==e.positionTypeStatus?t("el-form-item",{attrs:{required:"",label:"工作时间："}},[t("el-radio",{attrs:{label:"1"},model:{value:e.partJobwWorkTime,callback:function(i){e.partJobwWorkTime=i},expression:"partJobwWorkTime"}},[e._v("长期")]),e._v(" "),t("el-radio",{attrs:{label:"2"},model:{value:e.partJobwWorkTime,callback:function(i){e.partJobwWorkTime=i},expression:"partJobwWorkTime"}},[e._v("短期")])],1):e._e(),e._v(" "),t("el-form-item",{attrs:{label:"企业地址："}},[t("el-cascader",{ref:"cascaderAddr",attrs:{options:e.cityOptions,props:e.optionCityProps,placeholder:e.adressTip,emitPath:""},on:{change:e.handleChange},model:{value:e.formLabelAlign.adress,callback:function(i){e.$set(e.formLabelAlign,"adress",i)},expression:"formLabelAlign.adress"}})],1),e._v(" "),t("el-form-item",{attrs:{label:""}},[t("el-input",{attrs:{placeholder:"填写详细地址：如单元门牌号"},model:{value:e.formLabelAlign.adressdetail,callback:function(i){e.$set(e.formLabelAlign,"adressdetail",i)},expression:"formLabelAlign.adressdetail"}})],1),e._v(" "),2==e.positionTypeStatus?t("el-form-item",{attrs:{required:"",label:"允许求职者主动联系："}},[t("el-radio",{attrs:{label:"Y"},model:{value:e.isCall,callback:function(i){e.isCall=i},expression:"isCall"}},[e._v("是")]),e._v(" "),t("el-radio",{attrs:{label:"N"},model:{value:e.isCall,callback:function(i){e.isCall=i},expression:"isCall"}},[e._v("否")])],1):e._e()],1),e._v(" "),t("div",{staticClass:"update_video"},[t("div",{staticClass:"update_video_item"},[""!=e.formLabelAlign.companyVideoUrl?t("div",{staticClass:"cover-img",style:{background:"url("+e.formLabelAlign.companyVideoUrl+") no-repeat"}},[t("img",{staticClass:"video_btn",attrs:{src:a("PC5q"),alt:""},on:{click:function(i){return i.stopPropagation(),e.previewVideo(e.upCompanyVideoUrl)}}})]):t("div",{staticClass:"cover-img"},[""==e.formLabelAlign.companyVideoUrl?t("img",{staticClass:"add_btn",attrs:{src:a("gCCZ"),alt:""}}):e._e(),e._v(" "),t("label",{staticClass:"updatebtn"},[t("input",{ref:"setvalue",staticClass:"updatebtn",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:e.uploadComVideo}})]),e._v(" "),(e.companyVideoUrl="")?t("div",[e._v("添加视频")]):e._e()]),e._v(" "),t("div",{staticClass:"update_type"},[e._v("\n                          企业环境\n                      ")])]),e._v(" "),t("div",{staticClass:"update_video_item"},[""!=e.formLabelAlign.teamVideoUrl?t("div",{staticClass:"cover-img",style:{background:"url("+e.formLabelAlign.teamVideoUrl+") no-repeat"}},[t("img",{staticClass:"video_btn",attrs:{src:a("PC5q"),alt:""},on:{click:function(i){return i.stopPropagation(),e.previewVideo(e.upTeamVideoUrl)}}})]):t("div",{staticClass:"cover-img"},[""==e.formLabelAlign.teamVideoUrl?t("img",{staticClass:"add_btn",attrs:{src:a("gCCZ"),alt:""}}):e._e(),e._v(" "),t("label",{staticClass:"updatebtn"},[t("input",{ref:"setvalue",staticClass:"updatebtn",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:e.uploadCertificate}})]),e._v(" "),(e.teamVideoUrl="")?t("div",[e._v("添加视频")]):e._e()]),e._v(" "),t("div",{staticClass:"update_type"},[e._v("\n                          团队风采\n                      ")])]),e._v(" "),t("div",{staticClass:"update_video_item"},[""!=e.formLabelAlign.productVideoUrl?t("div",{staticClass:"cover-img",style:{background:"url("+e.formLabelAlign.productVideoUrl+") no-repeat"}},[t("img",{staticClass:"video_btn",attrs:{src:a("PC5q"),alt:""},on:{click:function(i){return i.stopPropagation(),e.previewVideo(e.upProductVideoUrl)}}})]):t("div",{staticClass:"cover-img"},[""==e.formLabelAlign.productVideoUrl?t("img",{staticClass:"add_btn",attrs:{src:a("gCCZ"),alt:""}}):e._e(),e._v(" "),t("label",{staticClass:"updatebtn"},[t("input",{ref:"setvalue",staticClass:"updatebtn",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:e.uploadproductVideo}})]),e._v(" "),(e.teamVideoUrl="")?t("div",[e._v("添加视频")]):e._e()]),e._v(" "),t("div",{staticClass:"update_type"},[e._v("\n                          产品成果\n                      ")])])]),e._v(" "),t("div",{staticClass:"position_bottom"},[t("el-button",{staticClass:"update_btn update_cancel_btn",attrs:{"el-button":""}},[e._v("取消")]),e._v(" "),t("el-button",{staticClass:"update_btn update_save_btn",attrs:{"el-button":""},on:{click:e.editPosition}},[e._v("保存")])],1)],1)]),e._v(" "),t("el-dialog",{staticClass:"video_preview",attrs:{title:"",visible:e.centerDialogVisible,center:""},on:{"update:visible":function(i){e.centerDialogVisible=i}}},[t("div",{},[t("video",{staticClass:"playitem",attrs:{controls:"",src:e.videoPreviewUrl,autoplay:"autoplay"}})])])],1)},staticRenderFns:[]};var r=a("C7Lr")(s,o,!1,function(e){a("0wvX")},"data-v-6a1ce880",null);i.default=r.exports}});