!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.GoogleLogin=t(require("react")):e.GoogleLogin=t(e.react)}(this,function(e){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=o(3),l=n(a),u=function(e){function t(e){r(this,t);var o=i(this,Object.getPrototypeOf(t).call(this,e));return o.onBtnClick=o.onBtnClick.bind(o),o}return c(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.clientId,o=e.scope,n=e.cookiePolicy,r=e.loginHint,i=e.hostedDomain;!function(e,t,o,n){var r=e.getElementsByTagName(t)[0],i=r,c=r;c=e.createElement(t),c.id=o,c.src="//apis.google.com/js/platform.js",i.parentNode.insertBefore(c,i),c.onload=n}(document,"script","google-login",function(){var e={client_id:t,cookiepolicy:n,login_hint:r,hosted_domain:i,scope:o};window.gapi.load("auth2",function(){window.gapi.auth2.getAuthInstance()||window.gapi.auth2.init(e)})})}},{key:"onBtnClick",value:function(){var e=window.gapi.auth2.getAuthInstance(),t=this.props,o=t.offline,n=t.redirectUri,r=t.callback;if(o){var i={redirect_uri:n};e.grantOfflineAccess(i).then(function(e){r(e)})}else e.signIn().then(function(e){r(e)})}},{key:"render",value:function(){var e={display:"inline-block",background:"#d14836",color:"#fff",width:190,paddingTop:10,paddingBottom:10,borderRadius:2,border:"1px solid transparent",fontSize:16,fontWeight:"bold",fontFamily:"Roboto"},t=this.props,o=t.cssClass,n=t.buttonText,r=t.children;return l["default"].createElement("button",{className:o,onClick:this.onBtnClick,style:o?{}:e},r?r:n)}}]),t}(a.Component);u.propTypes={callback:a.PropTypes.func.isRequired,clientId:a.PropTypes.string.isRequired,buttonText:a.PropTypes.string,offline:a.PropTypes.bool,scope:a.PropTypes.string,cssClass:a.PropTypes.string,redirectUri:a.PropTypes.string,cookiePolicy:a.PropTypes.string,loginHint:a.PropTypes.string,hostedDomain:a.PropTypes.string,children:l["default"].PropTypes.node},u.defaultProps={buttonText:"Login with Google",scope:"profile email",redirectUri:"postmessage",cookiePolicy:"single_host_origin"},t["default"]=u},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(1),i=n(r);t["default"]=i["default"]},function(t,o){t.exports=e}])});
//# sourceMappingURL=google-login.js.map