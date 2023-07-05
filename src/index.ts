// production code here

import { authenticateSDK, sdk } from "./services/sdk";

export async function handler(event: any) {
  await authenticateSDK();

  /* Use the sdk to interact with Extra Horizon */
  console.log("User:", await sdk.users.me());

  /* Print Received event */
  console.log("Event:", event);
}
