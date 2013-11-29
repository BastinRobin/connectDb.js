/*
 * ConnectDb.js
 * Version: 0.1
 * Description: ConnectDb.js is an inbuild browser DB supported of HTML5 Offline APi
 * Copyright (c) 2013 Bastin Robins.J
 * Project repository: https://github.com/bastinrobin/ConnectDB.js
*/

(function () {
	//Initialization of ConnectDB Framework
	connectDb = {
		version : "0.1",
		date : "25/Nov/2013",

		//Check if the browser supports ConnectDB
		checkBrowser: function() {
			if(window.localStorage) { 
				return true; 
			} else { 
				return false; 
			}  
		},

		//Check if the any db exist
		isempty: function() {
			if(localStorage.length == 0) {
				return true;
			} else { 
				return false; 
			}
		},

		//Clear any existing db completely
		clear : function() {
			localStorage.clear();
			return true;
		},

		//Create New Collection or Db
		createRow : function (key, value) {
			localStorage.setItem(key, value);
		},

		//Retrieve a JSON with key
		getRow : function (key) {
			return localStorage.getItem(key);
		},

		//Remove a specific row
		removeRow : function(key) {
			localStorage.removeItem(key);
		},

		//View Complete Row by iteration key values
		viewRow: function() {
			for(key in localStorage) {
				console.log(localStorage[key]);
			}
		},

		//Create JSON Db or collection
		setJSON: function(key, json) {
			localStorage.setItem(key, JSON.stringify(json));
		},

		//Read JSON from Db or Collections
		getJSON: function(key) {
			if(localStorage[key]) {
				return JSON.parse(localStorage[key]);
			} else {
				return false;
			}
		},

		//Check the size of JSON array		
		length : function (key) {
			return JSON.parse(localStorage[key]).length;
		},

		//Secure Storage using session
		createSecureRow : function (key, value) {
			sessionStorage.setItem(key, value);
		},

		//Get Secure storage array
		getSecureRow : function (key) {
			return sessionStorage.getItem(key);
		},

		//Remove a secure row
		removeSecureRow : function (key) {
			sessionStorage.removeItem(key);
		}

	}	
})(window);
