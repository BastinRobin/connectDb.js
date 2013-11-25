/*
	Author: Bastin Robin
	Title: ConnectDb.js
	Description: ConnectDb.js is an inbuild browser DB supported of HTML5 Offline APi
*/

//Check if browser supports ConnectDb.js
var checkBrowser = function() {
	if(window.localStorage) {
		return true;
	} else {
		return false; 
	}
}

//Check if DB exist
var checkEmpty = function() {
	if(localStorage.length) {
		return true;
	} else {
		return false;
	}
}
