# Cheat Note Backend

https://cheatnote.onrender.com/

A lightweight Express + MongoDB backend for the Cheat Note application. It stores a user-generated start string and text payload, and exposes simple API routes for registration and note updates.

## Tech Stack

- Node.js
- Express
- MongoDB with Mongoose
- CORS
- dotenv

## Project Structure

```bash
.
├── Controllers/
│   └── user.js
├── Models/
│   └── User.js
├── Routes/
│   └── user.js
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## Features

- Register a user using a unique `startString`
- Save text data for an existing user
- Connect to MongoDB using environment variables
- Expose API routes under `/api/user`
- Auto-expire user records after 3 hours via the Mongoose schema

## Prerequisites

Before running the project, make sure you have:

- Node.js installed
- MongoDB running locally or a MongoDB connection URL available
- A `.env` file configured in the project root

## Environment Variables

Create a `.env` file in the project root with the following values:

```env
PORT=5000
MONG_URL=mongodb://localhost:27017/your-database-name
```

> Replace the MongoDB URL with your actual database connection string.

## Installation

```bash
npm install
```

## Run the Server

```bash
node server.js
```

The server will start on the port defined in your `.env` file.

## API Endpoints

### Root

```http
GET /
```

Returns a welcome response:

```json
{
  "message": "Welcome to Cheat Note Backend",
  "success": true
}
```

### Register User

```http
POST /api/user/register
```

Request body:

```json
{
  "startString": "abc123"
}
```

### Add Text

```http
POST /api/user/addtext
```

Request body:

```json
{
  "startString": "abc123",
  "textString": "Your saved note content"
}
```

## Notes

- `startString` is used as the identifier for a user record.
- Matching records are checked before creating a new one.
- User data expires after 3 hours according to the schema configuration in `Models/User.js`.

## License

This project is licensed under the ISC license.
