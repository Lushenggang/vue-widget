webpackJsonp([3],{a3In:function(e,s){},uoxT:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={data:function(){return{show:!1,messages:[],bgColor:""}},methods:{notify:function(e){var s=this;this.messages.push(e),setTimeout(function(){s.messages.length&&s.messages[0]===e&&s.messages.shift()},1e3)}},mounted:function(){this.notify("提示")}},a={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[0!==e.messages.length?t("div",{staticClass:"alert show"},[t("ul",e._l(e.messages,function(s,n){return t("li",{key:n,domProps:{innerHTML:e._s(s)}})}))]):e._e()])},staticRenderFns:[]};var i=t("VU/8")(n,a,!1,function(e){t("a3In")},"data-v-36b565a2",null);s.default=i.exports}});
//# sourceMappingURL=3.3a001842b116b4a27291.js.map