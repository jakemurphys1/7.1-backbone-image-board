var React = require("react");
var ReactDOM = require("react-dom");
var models = require("./models/image.js");
var Backbone = require("backbone")
var $ = require("jquery");
require("backbone-react-component");
var ImageList = require("./components/form.jsx")

var myCollection = new models.ModelCollection();
var myModel = new models.Model()

myCollection.fetch();

ReactDOM.render(<ImageList collection={myCollection} model={myModel}/>,document.getElementById('app'));
