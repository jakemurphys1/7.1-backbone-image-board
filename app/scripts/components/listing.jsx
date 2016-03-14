var React = require("react");
var ReactDOM = require("react-dom");
var Backbone = require("backbone");
var $ = require("jquery")



var ListItem = React.createClass({
   mixins:[Backbone.React.Component.mixin],
   handleOnClick:function(e){
     e.preventDefault();
   },
   render:function(){
     return(
     <div>
     <img src = {{URL}}/>
     <span>{{Caption}}</span>
     </div>
     )
   },

 });

module.exports=ListItem;
