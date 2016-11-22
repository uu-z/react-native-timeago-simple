'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}




var format={
'zh':{
years:function years(t){return t+'\u5E74\u524D';},
months:function months(t){return t+'\u6708\u524D';},
weeks:function weeks(t){return t+'\u5468\u524D';},
days:function days(t){return t+'\u5929\u524D';},
hours:function hours(t){return t+'\u5C0F\u65F6\u524D';},
miniutes:function miniutes(t){return t+'\u5206\u949F\u524D';},
seconds:function seconds(t){return t+'\u79D2\u524D';},
now:function now(t){return'\u521A\u521A';}},

"en":{
years:function years(t){return t+' '+(t>1?'years':'year')+' ago';},
months:function months(t){return t+' '+(t>1?'months':'month')+' ago';},
weeks:function weeks(t){return t+' '+(t>1?'weeks':'week')+' ago';},
days:function days(t){return t+' '+(t>1?'days':'day')+' ago';},
hours:function hours(t){return t+' '+(t>1?'hours':'hour')+' ago';},
miniutes:function miniutes(t){return t+' '+(t>1?'miniutes':'miniute')+' ago';},
seconds:function seconds(t){return t+' '+(t>1?'seconds':'second')+' ago';},
now:function now(t){return'just now';}}};var



TimeAgo=function(_React$Component){_inherits(TimeAgo,_React$Component);function TimeAgo(){var _ref;var _temp,_this,_ret;_classCallCheck(this,TimeAgo);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=TimeAgo.__proto__||Object.getPrototypeOf(TimeAgo)).call.apply(_ref,[this].concat(args))),_this),_this.




checkTime=function(time){var _this$props$language=

_this.props.language,language=_this$props$language===undefined?'en':_this$props$language;
var formatLanguage=format[language];

var seconds=Math.floor((new Date()-Date.parse(time))/1000);
var interval=Math.floor(seconds/31536000);

if(interval>=1)return formatLanguage.years(interval);

interval=Math.floor(seconds/2592000);
if(interval>=1)return formatLanguage.months(interval);

interval=Math.floor(seconds/604800);
if(interval>=1)return formatLanguage.weeks(interval);

interval=Math.floor(seconds/86400);
if(interval>=1)return formatLanguage.days(interval);

interval=Math.floor(seconds/3600);
if(interval>=1)return formatLanguage.hours(interval);

interval=Math.floor(seconds/60);
if(interval>=1)return formatLanguage.miniutes(interval);

if(interval>=1&&interval<=60)return formatLanguage.seconds(interval);

return formatLanguage.now();

},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(TimeAgo,[{key:'render',value:function render()

{var _props=
this.props,time=_props.time,language=_props.language,style=_props.style;
return(
_react2.default.createElement(_reactNative.Text,{style:style},this.checkTime(time)));

}}]);return TimeAgo;}(_react2.default.Component);TimeAgo.defaultProps={language:'en'};exports.default=TimeAgo;