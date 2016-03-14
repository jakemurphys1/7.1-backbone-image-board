var React = require("react");
var ReactDOM = require("react-dom");
var Backbone = require("backbone");
var $ = require("jquery");
var Input = require("react-bootstrap/lib/Input")

//local
var ListItem = require("./listing.jsx")

var ImageList = React.createClass({
   mixins:[Backbone.React.Component.mixin],
   handleOnClick:function(e){
     e.preventDefault();
     var addNew = {URL:$("#URL").val(),Caption:$("#Caption").val()}
   this.props.collection.create(addNew);

   },
   render:function(){

     var theList = this.props.collection.map(function(model){
     return <ImageItem model = {model} key={model.get("Caption")}/>
     })

     return(
       <div>
         <form>
           <input type="text" id="URL" placeholder="Image URL"/><br/>
           <input type="text" id="Caption" placeholder="Caption"/><br/><br/>
           <button id="addImage" onClick = {this.handleOnClick}>Add Image</button>
           <button id="Cancel">Cancel</button>
         </form>
         <ul className = "List">
                    {theList}
                </ul>
        </div>
     )
   },
 });


 var ImageItem = React.createClass({
 handleDelete:function(e){
 var curID = e.currentTarget.id;


 },
 handleUpdate:function(e){

console.log("update works")
 },
 render:function(){
 return(<li className="imageContainer"><img src ={this.props.model.get("URL")}/><p className="CaptionName">{this.props.model.get("Caption")}</p>
<button onClick = {this.handleDelete} id = {this.props.model.get("Caption")} className = "deletebutton">Delete</button>
<button onClick = {this.handleUpdate} id = {this.props.model.get("Caption")} className = "deletebutton">Update</button>
 </li>)
 }
 })

module.exports=ImageList;
