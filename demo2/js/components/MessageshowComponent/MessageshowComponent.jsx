var React = require('react');
var ReactDOM = require('react-dom');
var MsgStore = require( '../../stores/MsgStore.js' );

var MessageshowComponent = React.createClass({

	getInitialState:function(){
	    return {
	          allMsg:{}
	    };
	},

	componentDidMount:function(){
		  console.log( "componentDidMount",this._onChange );
	      MsgStore.addChangeListener( this._onChange );
	},

	componentWillUnmount:function(){
	      MsgStore.removeChangeListener( this._onChange );
	},

	render:function(){
		var allMsgArr = [];
		for( var p in this.state.allMsg ){
			
			allMsgArr.push(
				<div>
					{ this.state.allMsg[p] }
				</div>
			);
		}

		return(
			<div>
				{ allMsgArr }
			</div>
		)
	},

	_onChange:function(){
		this.setState( { allMsg:MsgStore.getAll() } );
	}
});

module.exports = MessageshowComponent;