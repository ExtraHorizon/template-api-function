"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiConfig = void 0;
const dotenvSafe = require("dotenv-safe");
dotenvSafe.config();
exports.apiConfig = {
    host: process.env.API_HOST,
    oauthConsumer: {
        key: process.env.API_OAUTH_CONSUMER_KEY,
        secret: process.env.API_OAUTH_CONSUMER_SECRET,
    },
    oauthToken: {
        key: process.env.API_OAUTH_TOKEN,
        secret: process.env.API_OAUTH_TOKEN_SECRET,
    },
};
