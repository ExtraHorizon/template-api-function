import { requestLogger } from 'axios-logger';
export declare const sdk: import("@extrahorizon/javascript-sdk").Client<{
    host: string;
    consumerKey: string;
    consumerSecret: string;
    requestLogger: typeof requestLogger;
}>;
export declare function authenticateSDK(): Promise<void>;
