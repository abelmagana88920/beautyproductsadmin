/*
*   put all global variables
*   inside GLOBAL object
*/

var GLOBAL = {
    //host: 'https://jsonplaceholder.typicode.com',
    host: 'http://localhost/beautyadmin/assets/jsonfile',
    socket: 'http:socket',
    url : function (route) {
		var query_string = '';
		for (var key in route) {
			var _id = '';
			if (route[key]) {
				_id = '/' + route[key];
			}
			var new_key = '/' + key + _id;
			var new_str = query_string + new_key;
			query_string = new_str;
		};
		return GLOBAL.host + query_string;
	},
	header : function (token) {
		if (token) {
			return {
				'Access-Token' : token
			};
		} else {
			return false;
		}
	},
	transform : function (file) {
		if (file)
			return angular.identity;
		else
			return false;
	},
	user : function (cookies, state, stateName) {
		var user = cookies.getObject('user');
		if (user) {
			return user; 
		} else if (stateName == 'admin-login' || stateName == 'login') {
			state.go(stateName);
		} else {
			state.go('login');
		}
	},
	query : function (params) {
		if (params) 
			return params;
		else
			return false;
	},
	check_file : function (data, callback) {
		var fd = new FormData();
		if (data.photo || data.logo || data.license || data.police_clearance || 
			data.nbi_clearance || data.vehicle_photo) {
			for (var key in data) {
				fd.append(key, data[key]);
			};
			callback(fd, true);
		} else {
			callback(data, false);
		}
	},
	clean_object : function (object) {
		for(var key in object) {
			if (!object[key]) {
				delete object[key];
			}
		};
		return object;
	},
	clean_data : function (data) {
		if (!data) {
			return false;
		} else {
			return data;
		}
	},

};