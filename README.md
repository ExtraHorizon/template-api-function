# Getting started with your new API Function

## Setting up npmrc
First add the following lines to your `.npmrc` file

```
@extrahorizon:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<your-auth-token>
```

where `your-auth-token` is a github [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

This will allow you to use the Extra Horizon SDK.

## Setting up environment

You need to configure some environment variables so that the SDK can properly authenticate against the Extra Horizon cloud.
Edit `.env.example`, fill in all the environment variables there and save the file to `.env`.

## Local testing

Typically, an API Function runs in the context of the backend. However, you can test the API Function locally by invoking it through `invoke.js` (or use `yarn start`). 
This allows you to do some local testing.

# Scripts

## building

To build the project

`npm run build` or `yarn build`

## running

`npm run start` or `yarn start`

## testing

`npm run test` or `yarn test`

