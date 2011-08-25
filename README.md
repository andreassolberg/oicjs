# Proof of concept implementation of ID Token and JWT

This library can run both in modern browsers and in Node.js.

Currently ID Token is implemented, as well as JWT and JWS. Currently only `HS256` is implemented.


## Create an JWT

Using the JWT library will require a configuration object:

	var options = {
		'iss': 'https://issuer.example.org',
		'aud': 'https://example.org',
		'secret': '87as6d87sa6d87a6s',
		'supported_claims' : ['customclaim']
	};

Then you create the JWT (here an empty JWT):

	var j = jwt(options);

You can create a new JWT based upon a set of claims:

	var j = jwt(options).init({'customclaim': 'foo'});

When you create a new JWT you probably want to sign it as well:

	var packed = jwt(options).init({'customclaim': 'foo'}).sign();


## Parsing and validating a JWT

You just feed the packed JWT string to the init function, and use `getClaims()`.

	var unpacked = jwt(options).init("jwtheader.jwtclaims.jwtsignature").getClaims();

If the JWT is not valid it will throw an exception.

## Creating an ID Token

Creating an ID Token

	claims = {
		'user_id': 'andreassolberg',
		'client_id': 'https://consumer.example.org',
		'aud': 'https://example.org'
	};
	// Expires in one hour.
	var packedToken = idtoken(options).init(claims).setTimeHeaders(3600).sign();

The `setTimeHeaders(expiresInSeconds)` sets the `exp`, `iat` and `nbf` headers.

## Parsing and validating an ID Token

You just feed the packed ID Token string to the init function, and use `getClaims()`.

	var unpacked = idtoken(options).init("jwtheader.jwtclaims.jwtsignature").getClaims();

If the ID Token is not valid it will throw an exception.