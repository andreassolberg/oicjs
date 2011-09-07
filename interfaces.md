# OpenID Connect Lab Interfaces

Currently only a set of examples. 

## Entity Metadata


### OpenID Connect Consumer


	{
		// The identifier of this consumer
		'client_id': 'testConsumer',
		
		// Which user data schema is supported by this consumer.
		'schema': ['openid'],
		
		'redirect_uri': [
			'http://consumer.example.org/callback'
		]
	}


### OpenID Connect Provider

	{
		// The identifier of this Provider
		'issuer': 'provider',
		
		// Client credentials of a client that is trusted by the provider.
		// This needs to be configured by the provider together with the
		// 'redirect_uri' of the test utility. 
		'client_auth': {
			'client_id': 'testConsumer',
			'password': 'secret'
		}
	
		// Which user data schema is supported by this provider.
		'schema': ['openid'],
		'endpoints': {
			authorization: 'http://provider.example.org/authorization',
			token: 'http://provider.example.org/token',
			checksession: 'http://provider.example.org/session/check',
			refreshsession: 'http://provider.example.org/session/refresh',
			endsession: 'http://provider.example.org/session/end'
		}
	}




## Test flow definitions








## Test flow output









