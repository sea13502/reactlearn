var MessageServerActionCreators = require("../actions/MessageServerActionCreators.jsx");

module.exports = {
	getAllMsg:function(){
		var rawMsg = [
			{
				id:"123124123",
				content:"hello world1"
			}
			,
			{
				id:"123124125",
				content:"hello world2"
			}
		];
		//模拟数据请求
		setTimeout(function(){
			MessageServerActionCreators.receiveAll( rawMsg );
		},100);

	}
}