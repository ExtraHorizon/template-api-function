// production code here
import { ApiFunctionRequestObject, ApiFunctionResponseObject } from '@extrahorizon/javascript-sdk';
import { authenticateSDK, sdk } from './services/sdk';

export async function handler(requestObject: ApiFunctionRequestObject): Promise<ApiFunctionResponseObject> {
  await authenticateSDK();

  /* Use the sdk to interact with Extra Horizon */
  console.log('User:', await sdk.users.me());

  /* Print Received event */
  console.log('requestObject:', requestObject);

  const method = requestObject.requestContext.http.method;

  return {
    statusCode: 200,
    // @ts-expect-error body is typed wrongly
    body: {
      hello: `The request method was: ${method}`
    }
  };
}
