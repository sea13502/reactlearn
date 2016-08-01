var BbsDispatcher = require("../dispatcher/BbsDispatcher.jsx");
var BbsConstants = require( "../constants/BbsConstants.jsx" );

var ActionTypes = BbsConstants.ActionTypes;

module.exports = {
	createOne:function( msg ){
		BbsDispatcher.dispatch({
			type:ActionTypes.CREATE_NEW_MESSAGE,
			msg:msg
		});
	}
}