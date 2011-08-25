var 
	// Internal requirements
	// http = require('http'),  
	// net = require('net'),
	// sys = require("sys"),
	// 
	//     url = require("url"),
	//     fs = require("fs"),
	//     path = require("path"),
    
	// Third party dependencies


	// Local requirements
//	oauth = require('./OAuthServer.js'),
	jwt = require('./JWT.js'),
	
	// Local variables
	j, o, claims, options, dj
	;


claims = {
	'sdf': 'lksdjflkdsjflkdsjf',
	'user_id': 'sdlkfjsdlkfj',
	'client_id': 'sldkjfldskjf',
	'aud': 'sldkjfldskjf',
	'sdf': 'foo'
};

options = {
	'iss': 'https://issuer.example.org',
	'aud': 'sldkjflsdskjf',
//	'alg': 'HS256',
	'secret': '87as6d87sa6d87a6s',
	'supported_claims' : ['sdf']
};





console.log('Creating and signing a JWT');
j = jwt.idtoken(options).init(claims);
j.setTimeHeaders(3600); // Set validity of this token to one hour.
o = j.sign();
console.log('Created a signed JWT: ' + o);

//o = 'eyJ0eXAiOiJKV1QiLA0KICJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJqb2UiLA0KICJleHAiOjEzMDA4MTkzODAsDQogImh0dHA6Ly9leGFtcGxlLmNvbS9pc19yb290Ijp0cnVlfQ.dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk';
//o = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZGYiOiJsa3NkamZsa2RzamZsa2RzamYiLCJ0eXAiOiJKV1QiLCJpc3MiOiJodHRwczovL2lzc3Vlci5leGFtcGxlLm9yZyIsImlhdCI6MTMxNDE4NzM1MiwibmJmIjoxMzE0MTg3MTcyLCJleHAiOjEzMTQxOTA5NTJ9.QRpRy/L49bk8NokHIrGXAyaqdRkGJzaHh0GgL8Y35WE';


console.log('Decoding a JWT');
dj = new jwt.idtoken(options).init(o);
console.log(dj.header);
console.log(dj.getClaims());

console.log('done');


