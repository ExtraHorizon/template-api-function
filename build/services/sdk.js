"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateSDK = exports.sdk = void 0;
const javascript_sdk_1 = require("@extrahorizon/javascript-sdk");
const axios_logger_1 = require("axios-logger");
const config_1 = require("../config");
exports.sdk = (0, javascript_sdk_1.createClient)({
    host: config_1.apiConfig.host,
    consumerKey: config_1.apiConfig.oauthConsumer.key,
    consumerSecret: config_1.apiConfig.oauthConsumer.secret,
    requestLogger: axios_logger_1.requestLogger,
});
async function authenticateSDK() {
    await exports.sdk.auth.authenticate({
        token: config_1.apiConfig.oauthToken.key,
        tokenSecret: config_1.apiConfig.oauthToken.secret,
    });
}
exports.authenticateSDK = authenticateSDK;
