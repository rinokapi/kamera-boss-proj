(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["From Info"],{"63b2":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticClass:"mt-3"},[e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e("span",{staticClass:"display-1 font-weight-bold"},[t._v("Info Pelanggan")])]),e("v-col",{attrs:{cols:"4"}},[e("v-img",{attrs:{src:s("c121"),contain:"",height:"350px",width:"350px"}})],1),e("v-col",{attrs:{cols:"4"}},[e("div",{},[e("p",{staticClass:"title"},[t._v(t._s(t.productData.name))]),e("p",{staticClass:"subtitle-1"},[t._v("Id Pelanggan: "+t._s(t.productData._id))]),e("p",{staticClass:"subtitle-1"},[t._v("Nama Lengkap: "+t._s(t.productData.fullname))]),e("p",{staticClass:"subtitle-1"},[t._v("Alamat : "+t._s(t.productData.address))]),e("p",{staticClass:"subtitle-1"},[t._v("HP : "+t._s(t.productData.phone))]),e("p",{staticClass:"subtitle-1"},[t._v("Email : "+t._s(t.productData.email))])])])],1)],1)},n=[],o=s("1f57"),c={data(){return{productData:""}},mounted(){const t=this.$route.params.id;o["a"].getUser(t).then(t=>{this.productData=t.data,console.log(this.productData.username)},t=>{this.content=t.response&&t.response.data&&t.response.data.message||t.message||t.toString()})}},i=c,l=s("2877"),r=s("6544"),p=s.n(r),u=s("62ad"),d=s("a523"),g=s("adda"),m=s("0fd9"),v=Object(l["a"])(i,e,n,!1,null,null,null);a["default"]=v.exports;p()(v,{VCol:u["a"],VContainer:d["a"],VImg:g["a"],VRow:m["a"]})},c121:function(t,a,s){t.exports=s.p+"img/user.f7e5e3f5.png"}}]);
//# sourceMappingURL=From Info.405c41a0.js.map