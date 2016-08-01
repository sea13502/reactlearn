var React = require('react');
var ReactDOM = require('react-dom');

var LeavemessageComponent = require('./LeavemessageComponent/LeavemessageComponent.jsx');
var MessageshowComponent = require('./MessageshowComponent/MessageshowComponent.jsx');

var BbsComponent = React.createClass({
	render:function(){
		return (
			<div>
				<MessageshowComponent />
				<LeavemessageComponent />
			</div>
		)
	}
});

module.exports = BbsComponent;