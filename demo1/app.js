var BaseComponent = React.createClass({
	render:function(){
		return(
			<SonComponent text="hello world"/>		
		)
	}
});

var SonComponent = React.createClass({
	render:function(){
		return(
			<div>
				{this.props.text}
			</div>
		)
	}
});

ReactDOM.render(
	<BaseComponent />,
			document.getElementById('target_can'));