/*
	Author: Bastin Robin
	Title: ConnectDb.js
	Description: ConnectDb.js is an inbuild browser DB supported of HTML5 Offline APi
*/

(function () {
	//Initialization of ConnectDB Framework
	ConnectDb = {
		version : "0.1",
		date : "26/Nov/2013",

		//Check if the browser supports ConnectDB
		checkBrowser: function() {
			if(window.localStorage) { 
				return true; 
			} else { return false; }  
		},

		//Check if the any db exist
		checkEmpty: function() {
			if(localStorage.length > 0) {
				return true;
			} else { return false; }
		}


	}
})(window);