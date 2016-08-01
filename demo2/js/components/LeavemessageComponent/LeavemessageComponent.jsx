var React = require('react');
var ReactDOM = require('react-dom');
var MessageActionCreator = require('../../actions/MessageActionCreator.js');

var LeavemessageComponent = React.createClass({
	render:function(){
		return(
			<div>	
				<input type="text" ref="msgCan"/>
				<button onClick={ this.clickHandler }> addMsg </button>
			</div>
		)
	},
	clickHandler:function(){
		var idstr = String( Math.random() ).slice(2);
		var contentStr = this.refs.msgCan.value ;
		//var contentStr = ReactDOM.findDOMNode(this) ;
		//console.log( contentStr );
		MessageActionCreator.createOne( 
			{
				id : idstr,
				content : contentStr 
			}
		);
	}
});

module.exports = LeavemessageComponent;