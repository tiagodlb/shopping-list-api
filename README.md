<!-- This is a Shopping-List-API Repository, use as needed! -->

<!-- Project Summary -->

<br />

<div align="center">
   <img src="./info/cart.png" alt="shopping-list-api Logo" width="150"/>
</p>
  </a>

  <h3>Built With</h3>
    <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" height="30px"/>
    <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
    <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
    <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
    <img src="https://img.shields.io/badge/JWT-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink" height="30px"/>
    <img src="https://img.shields.io/badge/JEST-207AFC?style=for-the-badge&logo=jest&logoColor=green" height="30px"/>
  </div>
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br />

<div align="center">
  <a href="https://github.com/NivaldoFarias/typescript-project-template/releases/tag/v2.0.0" alt="Current template version badge">
    <img src="https://img.shields.io/github/package-json/v/NivaldoFarias/typescript-project-template?style=flat-square" />
  </a>
  <a href="https://github.com/NivaldoFarias/typescript-project-template/releases/tag/v2.0.0" alt="Current template version badge">
    <img src="https://img.shields.io/badge/license-MIT-%23A8D1FF?style=flat-square" />
  </a>
</div>

<!-- Table of Contents -->

# Table of Contents

- [Installation and Usage](#installation-and-usage)
- [Middlewares](#middlewares)
- [API Reference](#api-reference)
  - [Models](#models)
  - [Routes](#routes)
  - [Items](#items)

<!-- Installation and Usage -->

## Installation and Usage

###### Pre-requisites: Node.js `^16.14.0`, PostgreSQL `^12.11`

There are two available options for you to use this template for your next Back End project: either use Github's built-in `Use this api` feature (green button left of the _'About'_ section), or download the zip file and extract it in the root of a new project folder by running these commands:

```bash
wget https://github.com/tiagodlb/shopping-list-api/archive/refs/heads/main.zip
```

Then run the following command to install the project's dependencies:

```bash
npm install
```

That's it! You can now start developing your TypeScript Project by running the command below. Happy coding!

```bash
npm run dev
```

###### _ps.: Make sure to update the package.json file with your own credentials!_

<!-- Middlewares -->

## Middlewares

While aiming to provide a reusable, modular and extensible architecture, the middlewares are generally the first structures to be refactored into self-contained modules. The `errorHandlerMiddleware()`, `validateSchemaMiddleware()` middlewares were set in order to achieve that goal. The following section describes **`useMiddleware()`**, which incorporates the forementioned functions as _key–value_ pairs in an Object, along with their structure and usage.

# API Reference

In this section, you will find the example API's endpoints and their respective descriptions, along with the request and response examples, as well as the [Prisma](https://www.prisma.io/) models for each entity, that can be used as guide for data formatting. All data is sent and received as JSON.

<!-- Models -->

## Models

### User model _`item`_

- `id`: A unique identifier for each user. `serial4`
- `title`: The item title. `text`  An title may only be registered once.
- `url`: The item's image url. `text`
- `description`: The item's description. `text`
- `amount`: The quantity in stock. `Integer`

## Routes

### [Items](#items) _`/items`_

- [Items](#---post-and-get)

###### &nbsp; &nbsp; POST _`/items`_

### &nbsp; ☰ &nbsp; Request

###### Body

```json
{
    "title": "lorem ipsulum",
    "url": "www.loremipsulum.com",
    "description": "Non architecto nam unde sint. Ex tenetur dolor facere optilo aut consequatur. Ea laudantium reiciendis repellendus.",
    "amount": 123
}
```

###### Headers

```json
{
  "Content-Type": "application/json"
}
```

### &nbsp; ☰ &nbsp; Responses

| Status Code |       Description        |          Properties           |
| :---------: | :----------------------: | :---------------------------: |
|   **201**   |         Created          |          `data: {}`           |
|   **409**   | Item already registered | `error: { type, message }`     |
|   **422**   |      Invalid Input       | `error: { type, message }`    |
|   **500**   |  Internal Server Error   | `error: { type, message }`    |


###### &nbsp; &nbsp; GET _`/items`_

### &nbsp; ☰ &nbsp; Request

###### Body

```json
{
  //empty
}
```

###### Headers

```json
{
  "Content-Type": "application/json"
}
```

### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |          Properties           |
| :---------: | :-------------------: | :---------------------------: |
|   **200**   |          OK           |       `data: {  items  }`     |
|   **500**   | Internal Server Error | `error: { type, message }`    |

###### &nbsp; &nbsp; GET _`/items/:id`_

### &nbsp; ☰ &nbsp; Request

###### Body

```json
{
  //empty
}
```

###### Headers

```json
{
  "Content-Type": "application/json"
}
```

### &nbsp; ☰ &nbsp; Responses

| Status Code |      Description      |          Properties           |
| :---------: | :-------------------: | :---------------------------: |
|   **200**   |          OK           |       `data: { item }`        |
|   **404**   |    Item not found     | `error: { type, message }`    |
|   **500**   | Internal Server Error | `error: { type, message }`    |

#

###### Template created by [Nivaldo Farias](https://github.com/NivaldoFarias/typescript-project-template).
