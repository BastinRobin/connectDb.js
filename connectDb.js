/*
 * ConnectDb.js
 * Version: 0.1
 * Description: ConnectDb.js is an inbuild browser DB supported of HTML5 Offline APi
 * Copyright (c) 2013 Bastin Robins.J
 * Project repository: https://github.com/bastinrobin/ConnectDB.js
 * Dual licensed under GPL licenses.
*/

(function () {
	//Initialization of ConnectDB Framework
	connectDb = {
		version : "0.1",
		date : "Nov-2013",

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
		},

		//Clear any existing db completely
		clear : function() {
			localStorage.clear();
			console.log('Cleared Successfully');
		},

		//Create New Collection or Db
		createDb : function (key, value) {
			localStorage.setItem(key, value);
		},

		//Remove a specific row
		removeRow : function(key) {
			localStorage.clear(key);
		},

		//View Complete Row by iteration key values
		viewRow: function() {
			for(key in localStorage) {
				console.log(localStorage[key]);
			}
		},

		//Create JSON Db or collection
		createJSON: function(key, json) {
			localStorage.setItem(key, JSON.stringify(json));
		},

		//Read JSON from Db or Collections
		readJSON: function(key) {
			return JSON.parse(localStorage.key)
		}
	}
})(window);