# REST API using Express and MongoDB

To start the server use
`npm run start`

it will automatically connect to the DB running on your localhost on the port `27018`

To populate the seed I created run the command `npm run seed`. It will create a table `fitness` with a collection `exercises` in MongoDB.

## Documentation for API Endpoints

All URIs are relative to _https://localhost:4001/api_

| HTTP request                       | Description     |
| ---------------------------------- | --------------- |
| **GET** /exercises/{exerciseId}    | Get Exercise    |
| **GET** /exercises                 | Get Exercises   |
| **POST** /exercises                | Post Exercise   |
| **PUT** /exercises/{exerciseId}    | Update Exercise |
| **DELETE** /exercises/{exerciseId} | Delete Exercise |
