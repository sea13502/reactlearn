var BaseComponent = React.createClass({
	componentDidMount:function(){
		console.log( this.props.children );
	},
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
				<div>
					{this.props.text}
				</div>
			</div>
		)
	}
});

ReactDOM.render(
	<BaseComponent>
		<div>
			asdasd
		</div>
	</BaseComponent>,
			document.getElementById('target_can'));
