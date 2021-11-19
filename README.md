# Fullstack-Typescript-Project

## Prerequisites

1. Install mongodb
2. Install nodejs

## Setting Up

1. Create a `.env` file in the root directory and copy the content from `.env.example`

2. Make sure mongodb is running
3. Install dependencies: `yarn`
4. Use this command for development mode: `yarn run watch`
5. If you need to customize your env, take a look at `secrets.ts` file

## Requirements

Below are the steps that you need to finish in order to finish this module

1. Explore the code base, start with `server.ts`
2. Create all the mongoose schema for your ERD
3. Start adding routers in the routers folder according to your REST API specs that you created
4. Separate the routers and controller, controller goes into the controller folders. Controllers only handles request and response
5. For business logic like saving data to database, filtering, searching or updating, these are services and goes into services folder
