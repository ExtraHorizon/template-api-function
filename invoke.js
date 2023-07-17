const sdk = require('@extrahorizon/javascript-sdk');

require('./build')
    .handler({
        version: '2.0',
        headers: {},
        body: 'hello',
        isBase64Encoded: false,
        rawPath: '/',
        rawQueryString: '',
        requestContext: {http: {method: sdk.ApiFunctionRequestMethod.POST}},
    })
    .then(() => console.log('FINISHED'));
