(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6dcea652"],{"894d":function(t,n,e){var i=e("9295");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=e("499e").default;r("7db27a9e",i,!0,{})},9295:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,"\n.van-cell[data-v-71a410cc]{\n    height: 50px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 15px;\n    color: #323233;\n}\n.van-cell__title[data-v-71a410cc]{\n    font-size: 15px !important;\n}\n.van-cell__value[data-v-71a410cc]{\n    color: #323233;\n}\n.error-text[data-v-71a410cc] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    font-size: 14px;\n    text-align: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #666666;\n}\n.error-btn[data-v-71a410cc]{\n    border:1px solid rgba(102,102,102,.5);\n    height: 36px;\n    width: 110px;\n    border-radius: 20px;\n    background-color: transparent;\n    color: #666666;\n    line-height: 32px;\n}\n.info[data-v-71a410cc] {\n    background-color: #FAFAFA;\n    height: 100%;\n    padding-top: 1px;\n}\n.mail-btn[data-v-71a410cc] {\n    display: block;\n    margin: 65px auto;\n    border: 1px solid rgba(26, 40, 78, 0.6);\n    border-radius: 5px;\n    font-size: 15px;\n    font-family: PingFang SC;\n    font-weight: 400;\n    color: rgba(26, 40, 78, 1);\n    background-color: rgba(255, 255, 255, 0);\n    height: 34px;\n    width: 240px;\n    text-align: center;\n    line-height: 32px;\n}\n",""])},b090:function(t,n,e){"use strict";e.r(n);e("8e6e"),e("ac6a"),e("456d");var i=e("bd86"),r=(e("96cf"),e("3b8d")),o=e("c24f"),a=e("acf9"),c=e("1ca8"),s=e("5f87"),l=e("5880"),h=e("2241"),u=e("d399");function f(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function p(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?f(Object(e),!0).forEach((function(n){Object(i["a"])(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var b={name:"safeSetting",data:function(){return{secretKey:"",link:!1,showNone:!1,showInfo:!0,info:"您还未认证，暂无安全设置，请立即认证",btnInfo:"点击认证",path:"",user:""}},methods:{sendMail:function(){var t=this,n=this.user.email;if(null!==n&&""!==n&&void 0!==n){var e=this.secretKey,i={email:n,content:e};Object(c["p"])(i).then((function(t){Object(u["a"])("发送成功")})).catch((function(t){}))}else h["a"].confirm({message:"您还未绑定邮箱，点击立即绑定邮箱？"}).then((function(){t.$router.push("/resetEmail")})).catch((function(){}))},go:function(){this.$router.push(this.path)},toWhiteList:function(){this.$router.push("/whiteList")},gKey:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var n,e,i,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="",e="",t.next=4,Object(a["d"])().then((function(t){n=t})).catch((function(t){}));case 4:return i=Object(s["a"])("Token"),r={token:i},t.next=8,Object(o["a"])(r).then((function(t){e=t})).catch((function(t){}));case 8:this.user=e,null!==n&&(c=n.filter((function(t){return t.mercId===e.mercId})),0!==c.length&&(this.secretKey=c[0].secretKey)),""===this.secretKey&&(this.link=!0);case 11:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()},created:function(){"0"===this.state?(this.showInfo=!0,this.showNone=!1):"1"===this.state?(this.showInfo=!1,this.showNone=!0,this.path="/authen"):(this.info="您正在审核中，暂无安全设置",this.btnInfo="点击返回",this.path="/myinfo",this.showInfo=!1,this.showNone=!0),this.gKey()},filters:{hiddenKey:function(t){if(""!==t&&null!==t&&void 0!==t)return t.substring(0,5)+"******"+t.substring(t.length-5)}},computed:p({},Object(l["mapGetters"])(["name","phone","state"]))},d=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"info"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showInfo,expression:"showInfo"}]},[e("van-cell-group",{staticStyle:{"margin-top":"15px"}},[e("van-cell",{attrs:{title:"IP白名单","is-link":""},on:{click:t.toWhiteList}}),t._v(" "),e("van-cell",{staticClass:"key",attrs:{title:"密钥","is-link":t.link}},[t._v("\n                "+t._s(t._f("hiddenKey")(t.secretKey))+"\n            ")])],1),t._v(" "),e("van-button",{staticClass:"mail-btn",attrs:{size:"large"},on:{click:t.sendMail}},[t._v("发送密钥至企业联系人邮箱")])],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showNone,expression:"showNone"}],staticClass:"error-text"},[e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("div",[t._v(t._s(t.info))]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("van-button",{staticClass:"error-btn",attrs:{type:"default"},on:{click:t.go}},[t._v(t._s(t.btnInfo))])],1)])},v=[],g=e("2455");function w(t){e("894d")}var x=!1,m=w,y="data-v-71a410cc",_=null,O=Object(g["a"])(b,d,v,x,m,y,_);n["default"]=O.exports}}]);