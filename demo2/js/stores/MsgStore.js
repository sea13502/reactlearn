var BbsDispatcher = require( "../dispatcher/BbsDispatcher.jsx" );
var BbsConstants = require( "../constants/BbsConstants.jsx" );
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
console.log( "assign",assign );
var ActionTypes = BbsConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _messages = {};

function _addMsg( allMsg ){
	for( var i = 0 ; i < allMsg.length ; i++ ){
		_messages[ allMsg[i].id ] = allMsg[i].content;
	}
}

function _addNewMsg( msg ){
	_messages[ msg.id ] = msg.content ;
}

var MsgStore = assign({}, EventEmitter.prototype, {
	  emitChange: function() {
	  	console.log( CHANGE_EVENT );
    	this.emit(CHANGE_EVENT);
	  },

	  addChangeListener: function(callback) {
	  	console.log( callback );
	    this.on(CHANGE_EVENT, callback);
	  },

	  removeChangeListener: function(callback) {
	    this.removeListener(CHANGE_EVENT, callback);
	  },

	  getAll: function() {
	    return _messages;
	  }
});

MsgStore.dispatchToken = BbsDispatcher.register(function( action ){
	switch( action.type ){
		case ActionTypes.RECEIVE_RAW_MESSAGES:
			//console.log( "msgStore",action );
			//BbsDispatcher.waitFor([]);
			_addMsg( action.rawMsg );
			//setTimeout(function(){
			MsgStore.emitChange();
			//},3000);
			break;
		case ActionTypes.CREATE_NEW_MESSAGE:
			_addNewMsg( action.msg )
			MsgStore.emitChange();
			break;
		default:
      	// do nothing
	}
});

module.exports = MsgStore;