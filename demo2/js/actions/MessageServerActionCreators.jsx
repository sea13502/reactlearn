var BbsDispatcher = require("../dispatcher/BbsDispatcher.jsx");
var BbsConstants = require( "../constants/BbsConstants.jsx" );

var ActionTypes = BbsConstants.ActionTypes;

module.exports = {
	receiveAll:function( rawMsg ){
		BbsDispatcher.dispatch({
			type:ActionTypes.RECEIVE_RAW_MESSAGES,
			rawMsg:rawMsg
		});
	}
}