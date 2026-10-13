"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
async function handler(requestObject) {
    console.log('requestObject:', requestObject);
    const method = requestObject.requestContext.http.method;
    return {
        statusCode: 200,
        body: `The request method was: ${method}`
    };
}
exports.handler = handler;
