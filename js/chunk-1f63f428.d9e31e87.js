(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f63f428"],{"0e37":function(e,t,a){"use strict";a("8e6e"),a("ac6a"),a("456d");var r=a("bd86"),o=a("5880");function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){Object(r["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var l={name:"searchItem",data:function(){return{search_data:{startTime:"",endTime:"",name:"",proname:"",showRevertQuery:!1,showQuery:!1},rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"}]},value1:""}},computed:i({},Object(o["mapGetters"])(["searchBtnDisabled"])),mounted:function(){this.search_data.showQuery=this.showquery,this.search_data.showRevertQuery=this.showRevertQuery},props:{showquery:Boolean,showRevertQuery:Boolean,showInfo:{type:Boolean,default:!0}},created:function(){},methods:{supplierExeclDownload:function(){this.$emit("supplierExeclDownload",this.value1)},merchantExeclDownload:function(){this.$emit("merchantExeclDownload",this.value1)},revertQuery:function(){this.$emit("revertQuery")},onScreeoutMoney:function(e){this.$emit("searchstr",e)},onProName:function(e){this.$emit("searchPro",e)},allQuery:function(e,t){this.$emit("searchAll",e,t)},onAddMoney:function(){this.$emit("showDialog","add")}}},s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search_container searchArea"},[a("el-form",{ref:"search_data",staticClass:"demo-form-inline search-form",attrs:{inline:!0,model:e.search_data,rules:e.rules}},[e.showInfo?a("el-form-item",{attrs:{label:""}},[a("el-input",{attrs:{placeholder:"商户名称"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onScreeoutMoney(e.search_data.name)}},model:{value:e.search_data.name,callback:function(t){e.$set(e.search_data,"name",t)},expression:"search_data.name"}})],1):e._e(),e._v(" "),e.showInfo?a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"mini",icon:"search"},on:{click:function(t){return e.onScreeoutMoney(e.search_data.name)}}},[e._v("筛选")])],1):e._e(),e._v(" "),e.showInfo?e._e():a("el-form-item",[a("el-date-picker",{staticStyle:{width:"300px"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),e._v(" "),e.showInfo?e._e():a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.supplierExeclDownload()}}},[e._v("供应商调用信息下载")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.merchantExeclDownload()}}},[e._v("商户调用信息下载")])],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.search_data.showQuery,expression:"search_data.showQuery"}],attrs:{label:""}},[a("el-input",{attrs:{placeholder:"产品名称"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onProName(e.search_data.name)}},model:{value:e.search_data.proname,callback:function(t){e.$set(e.search_data,"proname",t)},expression:"search_data.proname"}})],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.search_data.showQuery,expression:"search_data.showQuery"}]},[a("el-button",{attrs:{type:"primary",size:"mini",icon:"search"},on:{click:function(t){return e.onProName(e.search_data.proname)}}},[e._v("筛选")])],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.search_data.showQuery,expression:"search_data.showQuery"}]},[a("el-button",{attrs:{type:"primary",size:"mini",icon:"search"},on:{click:function(t){return e.allQuery(e.search_data.name,e.search_data.proname)}}},[e._v("同时查询")])],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.search_data.showRevertQuery,expression:"search_data.showRevertQuery"}]},[a("el-button",{attrs:{size:"mini",icon:"search",type:"danger"},on:{click:e.revertQuery}},[e._v("撤销查询")])],1),e._v(" "),a("el-form-item",{staticClass:"btnRight"},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.showquery,expression:"!showquery"}],attrs:{type:"primary",size:"mini",icon:"view"},on:{click:function(t){return e.onAddMoney()}}},[e._v("添加")])],1)],1)],1)},c=[],u=a("2455");function p(e){a("4013")}var m=!1,d=p,f="data-v-c19fa978",h=null,b=Object(u["a"])(l,s,c,m,d,f,h);t["a"]=b.exports},"16e8":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"\n.search_container[data-v-282da2c0] {\n  margin-bottom: 20px;\n}\n.btnRight[data-v-282da2c0] {\n  float: right;\n  margin-right: 0px !important;\n}\n.searchArea[data-v-282da2c0] {\n  background: #ffffff;\n  border-radius: 2px;\n  padding: 18px 18px 0;\n}\n",""])},"20d6":function(e,t,a){"use strict";var r=a("5ca1"),o=a("0a49")(6),n="findIndex",i=!0;n in[]&&Array(1)[n]((function(){i=!1})),r(r.P+r.F*i,"Array",{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(n)},4013:function(e,t,a){var r=a("b247");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=a("499e").default;o("252ff698",r,!0,{})},"44a2":function(e,t,a){var r=a("aa2b");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=a("499e").default;o("52355b1c",r,!0,{})},"61f7":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return n}));a("28a5");function r(e){return/^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+){0,4}@(qq.com|163.com|126.com|gurusidt.com|aliyun.com|sina.com)$/.test(e)}function o(e){if("boolean"==typeof e)return!1;if("number"==typeof e)return!1;if(e instanceof Array){if(0==e.length)return!0}else{if(!(e instanceof Object))return"null"==e||null==e||"undefined"==e||void 0==e||""==e;if("{}"===JSON.stringify(e))return!0}return!1}function n(e){var t=/^([^0]|[1-9][0-9]*)$/;return t.test(String(e))}},"869a":function(e,t,a){var r=a("16e8");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=a("499e").default;o("6bae42bc",r,!0,{})},aa2b:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"\n.table_container[data-v-0bc56700] {\n  padding: 10px;\n  background: #fff;\n  border-radius: 2px;\n}\n.el-dialog--small[data-v-0bc56700] {\n  width: 600px !important;\n}\n.pagination[data-v-0bc56700] {\n  text-align: left;\n  margin-top: 10px;\n}\n.pagination[data-v-0bc56700] {\n  text-align: right;\n}\n",""])},b247:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"\n.search_container[data-v-c19fa978] {\n  margin-bottom: 20px;\n}\n.btnRight[data-v-c19fa978] {\n  float: right;\n  margin-right: 0px !important;\n}\n.searchArea[data-v-c19fa978] {\n  background: #ffffff;\n  border-radius: 2px;\n  padding: 18px 18px 0;\n}\n",""])},ca00:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("28a5"),a("386d"),a("a481"),a("6b54"),a("456d"),a("ac6a"),a("61f7");var r=function(e){var t=Object.prototype.toString,a={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regExp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object"};return e instanceof Element?"element":a[t.call(e)]},o=function e(t){var a,o=r(t);if("array"===o)a=[];else{if("object"!==o)return t;a={}}if("array"===o)for(var n=0,i=t.length;n<i;n++)a.push(e(t[n]));else if("object"===o)for(var l in t)a[l]=e(t[l]);return a}},f250:function(e,t,a){"use strict";a.r(t);a("ac6a"),a("20d6");var r=a("5880"),o=a("f2bd"),n=a("0e37"),i=(a("8e6e"),a("456d"),a("7f7f"),a("96cf"),a("3b8d")),l=(a("c5f6"),a("bd86")),s=(a("6655"),a("cebe"),a("acf9")),c=a("1ca8"),u=a("ca00");function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){Object(l["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={name:"productDialogs",data:function(){return{errorJsonObj:[{errorKey:"",errorValue:""}],fileList:[],fileList1:[],addressImg:"http://59.110.227.223:8088/api/nzzndata/web/show/uploadimage",isVisible:this.isShow,proCategList:[],proCategId:"",form:{id:0,pcode:"",pversion:"",isShow:"",state:"",ptype:"",categName:"",name:"",desci:"",detal:"",headUrl:"",bkgroudUrl:"",useScope:"",useMethod:"",dataScale:"",feeType:"",standFee:0,interfaceType:"",isHot:"0",testApi:"",testCnt:0,freeCnt:0,proApi:"",errorCode:"[]",demoCode:"",loginShow:"",signMethod:"",signData:"",inputPara:"[]",inputExam:"",outputPara:"[]",outputExam:""},dialog:{width:"400px",formLabelWidth:"120px"}}},props:{isShow:Boolean,dialogRow:Object},computed:m({},Object(r["mapGetters"])(["productDialog"])),created:function(){var e=this;"edit"===this.productDialog.type?this.$nextTick((function(){e.form=Object(u["a"])(e.dialogRow),e.form.standFee=window.Math.formatFloat(e.form.standFee/100,3),e.proCategId=Number(e.form.ptype),e.errorJsonObj=JSON.parse(e.form.errorCode),e.fileList=""!=e.form.headUrl?[{name:e.form.headUrl,url:e.form.headUrl}]:[],e.fileList1=""!=e.form.bkgroudUrl?[{name:e.form.bkgroudUrl,url:e.form.bkgroudUrl}]:[]})):this.$nextTick((function(){e.$refs["form"].resetFields()})),this.gProCateg()},mounted:function(){},methods:{removeCount:function(e){1!=this.errorJsonObj.length?this.errorJsonObj.splice(e,1):this.$message.error("不能再删了 T_T")},addCount:function(){var e={code:"",disc:"",errorKey:""};this.errorJsonObj.push(e)},gProCateg:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["h"])().then((function(e){t.proCategList=e.filter((function(e){return"1"===e.state}))}));case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),handleRemove1:function(e,t){this.form.headUrl=""},handleRemove2:function(e,t){this.form.bkgroudUrl=""},handlePreview:function(e){},handleExceed:function(e,t){this.$message.warning("当前限制选择 3 个文件，本次选择了 ".concat(e.length," 个文件，共选择了 ").concat(e.length+t.length," 个文件"))},beforeRemove:function(e,t){return this.$confirm("确定移除 ".concat(e.name,"？"))},closeDialog:function(){this.$emit("closeDialog")},onSubmit:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var a,r,o,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.form.errorCode=JSON.stringify(this.errorJsonObj),this.form.ptype=this.proCategId,a=this.proCategList.filter((function(e){if(e.id===n.proCategId)return e.categName})),this.form.categName=a[0].categName,r=this.form,o={id:r.id,pcode:r.pcode,pversion:r.pversion,isShow:r.isShow,state:r.state,ptype:r.ptype,categName:r.categName,name:r.name,desci:r.desci,detal:r.detal,headUrl:r.headUrl,bkgroudUrl:r.bkgroudUrl,useScope:r.useScope,useMethod:r.useMethod,dataScale:r.dataScale,feeType:r.feeType,standFee:window.Math.formatFloat(100*Number(r.standFee),1),interfaceType:r.interfaceType,isHot:r.isHot,testApi:r.testApi,testCnt:r.testCnt,freeCnt:r.freeCnt,proApi:r.proApi,errorCode:r.errorCode,demoCode:r.demoCode,loginShow:r.loginShow},"edit"!==this.productDialog.type){e.next=11;break}return e.next=9,Object(s["I"])(o).then((function(e){n.$message({message:"修改成功",type:"success"}),n.$refs["form"].resetFields(),n.isVisible=!1,n.$emit("getFundList")})).catch((function(e){}));case 9:e.next=13;break;case 11:return e.next=13,Object(s["q"])(o).then((function(e){n.$message({message:"新增成功",type:"success"}),n.$refs["form"].resetFields(),n.isVisible=!1,n.$emit("getFundList")})).catch((function(e){}));case 13:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),saveHeadImg:function(e,t){this.form.headUrl=e.message},saveBgImg:function(e,t){this.form.bkgroudUrl=e.message}}},f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.isVisible,title:e.productDialog.title,"close-on-click-modal":!1,"close-on-press-escape":!1,"modal-append-to-body":!1},on:{"update:visible":function(t){e.isVisible=t},close:e.closeDialog}},[a("div",{staticClass:"form"},[a("el-form",{ref:"form",staticStyle:{margin:"10px",width:"auto"},attrs:{model:e.form,"label-width":e.dialog.formLabelWidth}},[a("el-form-item",{attrs:{prop:"categName",label:"产品代码:"}},[a("el-input",{attrs:{type:"text"},model:{value:e.form.pcode,callback:function(t){e.$set(e.form,"pcode",t)},expression:"form.pcode"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"categName",label:"产品版本:"}},[a("el-input",{attrs:{type:"text"},model:{value:e.form.pversion,callback:function(t){e.$set(e.form,"pversion",t)},expression:"form.pversion"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"categName",label:"展示版本:"}},[a("el-input",{attrs:{type:"text"},model:{value:e.form.isShow,callback:function(t){e.$set(e.form,"isShow",t)},expression:"form.isShow"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"categName",label:"产品状态:"}},[a("el-input",{attrs:{type:"text",placeholder:"1:有效产品  0：删除[无效]产品"},model:{value:e.form.state,callback:function(t){e.$set(e.form,"state",t)},expression:"form.state"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"categName",label:"是否登录时展示:"}},[a("el-input",{attrs:{type:"text",placeholder:"1:登录时展示  0：全展示"},model:{value:e.form.loginShow,callback:function(t){e.$set(e.form,"loginShow",t)},expression:"form.loginShow"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"categName",label:"产品类型:"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.proCategId,callback:function(t){e.proCategId=t},expression:"proCategId"}},e._l(e.proCategList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.categName,value:e.id}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{prop:"categName",label:"产品名称:"}},[a("el-input",{attrs:{type:"text"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"categName",label:"产品描述:"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.desci,callback:function(t){e.$set(e.form,"desci",t)},expression:"form.desci"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"categName",label:"产品详情:"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.detal,callback:function(t){e.$set(e.form,"detal",t)},expression:"form.detal"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"imgUrl",label:"产品图标地址:"}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:e.addressImg,"before-remove":e.beforeRemove,"on-remove":e.handleRemove1,multiple:"",limit:1,"on-exceed":e.handleExceed,"on-success":e.saveHeadImg,"file-list":e.fileList}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v("\n                    只能上传jpg/png文件，且不超过500kb\n                ")],1)],1),e._v(" "),a("el-form-item",{attrs:{prop:"imgUrl",label:"产品背景地址:"}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:e.addressImg,"before-remove":e.beforeRemove,"on-remove":e.handleRemove2,multiple:"",limit:1,"on-exceed":e.handleExceed,"on-success":e.saveBgImg,"file-list":e.fileList1}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v("\n                    只能上传jpg/png文件，且不超过500kb\n                ")],1)],1),e._v(" "),a("el-form-item",{attrs:{prop:"categName",label:"使用范围:"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.useScope,callback:function(t){e.$set(e.form,"useScope",t)},expression:"form.useScope"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"categName",label:"热点名称:"}},[a("el-input",{attrs:{type:"text"},model:{value:e.form.hotName,callback:function(t){e.$set(e.form,"hotName",t)},expression:"form.hotName"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"categName",label:"使用方法:"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.useMethod,callback:function(t){e.$set(e.form,"useMethod",t)},expression:"form.useMethod"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"categName",label:"数据规模:"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.dataScale,callback:function(t){e.$set(e.form,"dataScale",t)},expression:"form.dataScale"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"categName",label:"计费方式:"}},[a("el-radio-group",{model:{value:e.form.feeType,callback:function(t){e.$set(e.form,"feeType",t)},expression:"form.feeType"}},[a("el-radio",{attrs:{label:"CX"}},[e._v("查询计费")]),e._v(" "),a("el-radio",{attrs:{label:"CD"}},[e._v("查得计费")])],1)],1),e._v(" "),a("el-form-item",{attrs:{prop:"categName",label:"官方价格(元):"}},[a("el-input",{attrs:{type:"text"},model:{value:e.form.standFee,callback:function(t){e.$set(e.form,"standFee",t)},expression:"form.standFee"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"categName",label:"接口方式:"}},[a("el-input",{attrs:{type:"text"},model:{value:e.form.interfaceType,callback:function(t){e.$set(e.form,"interfaceType",t)},expression:"form.interfaceType"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"categName",label:"首页推荐:"}},[a("el-input",{attrs:{type:"text",placeholder:"1:推荐产品  0：非推荐产品"},model:{value:e.form.isHot,callback:function(t){e.$set(e.form,"isHot",t)},expression:"form.isHot"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"categName",label:"测试地址:"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.testApi,callback:function(t){e.$set(e.form,"testApi",t)},expression:"form.testApi"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"categName",label:"测试条数:"}},[a("el-input",{attrs:{type:"text"},model:{value:e.form.testCnt,callback:function(t){e.$set(e.form,"testCnt",t)},expression:"form.testCnt"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"categName",label:"免费条数:"}},[a("el-input",{attrs:{type:"text"},model:{value:e.form.freeCnt,callback:function(t){e.$set(e.form,"freeCnt",t)},expression:"form.freeCnt"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"categName",label:"生产地址:"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.proApi,callback:function(t){e.$set(e.form,"proApi",t)},expression:"form.proApi"}})],1),e._v(" "),a("div",[a("el-row",[e._l(e.errorJsonObj,(function(t,r){return[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{prop:"categName",label:"代码:"}},[a("el-input",{attrs:{type:"text"},model:{value:t.code,callback:function(a){e.$set(t,"code",a)},expression:"item.code"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{prop:"categName",label:"描述:"}},[a("el-input",{attrs:{type:"text"},model:{value:t.disc,callback:function(a){e.$set(t,"disc",a)},expression:"item.disc"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{prop:"categName",label:"编号:"}},[a("el-input",{attrs:{type:"text"},model:{value:t.errorkey,callback:function(a){e.$set(t,"errorkey",a)},expression:"item.errorkey"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:1,offset:1}},[a("el-button",{on:{click:function(t){return e.removeCount(r)}}},[e._v("-")])],1)]})),e._v(" "),a("el-col",{attrs:{span:1,offset:1}},[a("el-button",{on:{click:e.addCount}},[e._v("+")])],1)],2)],1),e._v(" "),a("el-form-item",{attrs:{prop:"categName",label:"案例代码:"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.demoCode,callback:function(t){e.$set(e.form,"demoCode",t)},expression:"form.demoCode"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"categName",label:"签名方法:"}},[a("el-input",{attrs:{type:"text"},model:{value:e.form.signMethod,callback:function(t){e.$set(e.form,"signMethod",t)},expression:"form.signMethod"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"categName",label:"签名数据:"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.signData,callback:function(t){e.$set(e.form,"signData",t)},expression:"form.signData"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"categName",label:"输入参数:"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.inputPara,callback:function(t){e.$set(e.form,"inputPara",t)},expression:"form.inputPara"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"categName",label:"输出参数:"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.outputPara,callback:function(t){e.$set(e.form,"outputPara",t)},expression:"form.outputPara"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"categName",label:"输入案例:"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.inputExam,callback:function(t){e.$set(e.form,"inputExam",t)},expression:"form.inputExam"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"categName",label:"输出案例:"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.outputExam,callback:function(t){e.$set(e.form,"outputExam",t)},expression:"form.outputExam"}})],1),e._v(" "),a("el-form-item",{staticClass:"text_right"},[a("el-button",{on:{click:e.closeDialog}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("form")}}},[e._v("提 交")])],1)],1)],1)])},h=[],b=a("2455");function g(e){a("869a")}var v=!1,w=g,y="data-v-282da2c0",_=null,x=Object(b["a"])(d,f,h,v,w,y,_),k=x.exports,O={name:"product",data:function(){return{pageData:{pageSize:10,curpage:1},productList:[],tableData:[],tableHeight:0,loading:!0,isShow:!1,editid:"",rowIds:[],sortnum:0,productDialog:{show:!1,dialogRow:{}},incomePayData:{page:1,limit:20,name:""},pageTotal:0,count:0}},components:{SearchItem:n["a"],ProductDialog:k},mounted:function(){this.gProductList(this.pageData)},methods:{handCurrend:function(e){this.pageData.curpage=e,this.gProductList(this.pageData)},gProductList:function(){var e=this;Object(s["g"])(this.pageData).then((function(t){e.productList=t.data,e.pageData.curPage=t.curPage,e.count=t.count})).catch((function(e){}))},setTableHeight:function(){var e=this;this.$nextTick((function(){e.tableHeight=document.body.clientHeight-300}))},showProductDialog:function(e){this.$store.commit("SET_PRODUCT_TITLE",e),this.productDialog.show=!0},handClose:function(){this.productDialog.show=!1},hideProductDialog:function(e){var t=this.productList.findIndex((function(t){return e.id==t.id}));if(t>=0){this.productList[t]=e;var a=Object(u["a"])(this.productList);this.productList=a,this.productList[t].standFee=window.Math.formatFloat(100*this.productList[t].standFee,1)}this.productDialog.show=!1},getPay:function(e){return o["c"](e)?-e:e},onEditMoney:function(e){this.productDialog.dialogRow=e,this.showProductDialog()},selectTable:function(e,t){this.setSearchBtn(e)},selectAll:function(e){var t=this;e.forEach((function(e){t.rowIds.push(e.id)})),this.setSearchBtn(e)},setSearchBtn:function(e){var t=!0;t=!(e.length>0),this.$store.commit("SET_SEARCHBTN_DISABLED",t)}}},C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fillcontain"},[a("search-item",{on:{showDialog:e.showProductDialog,searchList:e.productList}}),e._v(" "),a("div",{staticClass:"table_container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.productList,align:"center",border:"",height:"500"}},[a("el-table-column",{attrs:{prop:"id",label:"id",align:"center",width:"70"}}),e._v(" "),a("el-table-column",{attrs:{prop:"pcode",label:"产品代码",align:"center",width:"70"}}),e._v(" "),a("el-table-column",{attrs:{prop:"pversion",label:"产品版本",align:"center",width:"70"}}),e._v(" "),a("el-table-column",{attrs:{prop:"isShow",label:"展示版本",align:"center",width:"70"}}),e._v(" "),a("el-table-column",{attrs:{prop:"state",label:"产品状态",align:"center",width:"70"}}),e._v(" "),a("el-table-column",{attrs:{prop:"loginShow",label:"是否登录时展示",align:"center",width:"70"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ptype",label:"产品类型",align:"center",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{prop:"categName",label:"产品类型名称",align:"center",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"产品名称",align:"center",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"desci",label:"产品描述",align:"center",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{prop:"detal",label:"产品详情",align:"center",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{prop:"headUrl",label:"产品图标地址",align:"center",width:"140"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.headUrl,width:"45",height:"45"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"bkgroudUrl",label:"产品背景地址",align:"center",width:"140"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.bkgroudUrl,width:"45",height:"45"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"useScope",label:"使用范围",align:"center",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"useMethod",label:"使用方法",align:"center",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"dataScale",label:"数据规模",align:"center",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{prop:"feeType",label:"计费方式",align:"center",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s("CD"==t.row.feeType?"查得计费":"查询计费")+"\n                ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"官方价格",align:"center",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(t.row.standFee/100)+"\n                ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"interfaceType",label:"接口方式",align:"center",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{prop:"isHot",label:"首页推荐",align:"center",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{prop:"testApi",label:"测试地址",align:"center",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{prop:"testCnt",label:"测试条数",align:"center",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{prop:"freeCnt",label:"免费条数",align:"center",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{prop:"proApi",label:"生产地址",align:"center",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"errorCode",label:"错误代码",align:"center",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"demoCode",label:"案例代码",align:"center",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{prop:"signMethod",label:"签名方法",align:"center",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{prop:"signData",label:"签名数据",align:"center",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"inputPara",label:"输入参数",align:"center",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"outputPara",label:"输出参数",align:"center",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"inputExam",label:"输入案例",align:"center",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,prop:"outputExam",label:"输出案例",align:"center",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",prop:"operation",align:"center",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"warning",icon:"edit",size:"mini"},on:{click:function(a){return e.onEditMoney(t.row)}}},[e._v("编辑\n                    ")]),e._v(" "),a("el-button",{attrs:{type:"danger",icon:"delete",size:"mini"},on:{click:function(a){return e.onDeleteMoney(t.row,t.$index)}}},[e._v("删除\n                    ")])]}}])})],1),e._v(" "),e.productDialog.show?a("productDialog",{attrs:{isShow:e.productDialog.show,dialogRow:e.productDialog.dialogRow},on:{getFundList:e.gProductList,closeDialog:e.handClose}}):e._e(),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.count},on:{"current-change":e.handCurrend}})],1)],1)],1)},S=[];function j(e){a("44a2")}var D=!1,$=j,N="data-v-0bc56700",P=null,E=Object(b["a"])(O,C,S,D,$,N,P);t["default"]=E.exports}}]);