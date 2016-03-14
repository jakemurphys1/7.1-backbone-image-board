var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jquery")
var Backbone = require("backbone")

var Model = Backbone.Model.extend({
  urlRoot:"http://tiny-lasagna-server.herokuapp.com/collections/Jake-React2/",
   idAttribute: "_id",
});

var ModelCollection = Backbone.Collection.extend({
  model:Model,
  url:"http://tiny-lasagna-server.herokuapp.com/collections/Jake-React2/",
})

module.exports={
  "Model":Model,
  "ModelCollection":ModelCollection,
}
