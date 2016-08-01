var React = require('react');
var ReactDOM = require('react-dom');
var BbsComponent = require('./components/BbsComponent.jsx');

var BbsAPIUtils = require('./utils/BbsAPIUtils.js');

BbsAPIUtils.getAllMsg();

ReactDOM.render(
	<BbsComponent />,document.getElementById("targeCan")
);
