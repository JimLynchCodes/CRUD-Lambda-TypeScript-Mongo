# CRUD-Lambda-TypeScript-Mongo



A little serverless lambda providing CRUD functionality for a MongoDB collection! 🎉 



# Motivation
As a software engineer, I often find myself recreating a simple backend server that exposes CRUD (create, read, update, and delete) operations. In order to make my future developments faster I have created this project as somewhat of a reference guide.


# Mongo & TypeScript
This "CRUD Lambda" project is written in _TypeScript_ and exposes CRUD operations for the _MongoDB_ database.

TypeScript is an excellent superset of JavaScript that allows the written code to be explicitly about the types of objects and contains an experimental meant to make development more pleasant.

MongoDB is a NoSql database that provides excellent querying & aggregation apis and fantastically balances speed and scalability.

# What We're Building

The goal of this project is to have a lambda function that exposes 5 endpoints relating to CRUD operations:

- GET - /books # returns all books
- GET - /books/:id # returns a book with id 1
- POST - /books # inserts a new book into the table
- DELETE - /books/:id # deletes a book with id of 1
- PUT - /books/:id # updates a book with id of 1

Notice that the endpoints in every case are consistent and plural (ie. books with an s). Following this practice is very common and highly recommended. 

Our Mongo Database will contain a collection of Books where each books has the same shape as this object:
```
{
    "title": "Clojure for the Brave and True",
    "author": "Daniel Higginbotham",
    "datePublished": "10/15/2015",
    "pages": 328
}
```


# Usage

## 0. Install Mongo Locally
Following the guide [here](https://github.com/mongodb/homebrew-brew), I used brew:
```
brew tap mongodb/brew
brew install mongodb-community@4.2
```

Then to use this as your default `mongodb-community` run this command:
```
brew link mongodb-community
```

If your mongo is out of control, you can track it down with this:
```
sudo lsof -iTCP -sTCP:LISTEN -n -P
```

and if you need to:
```
kill <pid>
```


### 1. Create the .env File

First, copy the `.env_SAMPLE` file and rename it to `.env`:
```
mv .env_SAMPLE .env
```

Enter your mongo credentials in the .env file.


### 2. Use Node v12

If you have nvm this command will use .nvmrc to switch to the correct node version:
```
nvm use
```

### 3. Install Dependencies
```
npm i
```

### 4. Run Local Mongo
```
brew start services mongo
```

FYI - to check if mongo is running:
```

```

Use seed script to enter a few sample books into the collection.
```
./seed-db.sh
```

### 5. Execute Endpoints Locally

#### Option B) With "Serverless Invoke"


#### Option A) With "Serverless Offline"


#### Calling Endpoints From Postman (Manually)


### 6. Run Unit Tests (Mocha)


### 7. Run End-To-End Tests (Postman From Command Line)


# Mongoose
This repo uses the mongoose library. Mongoose provides an "ORM" whereby you define models and use methods on them to interact with the database. This is nice because it makes it slightly hard to do the wrong thing. 😉


# Shoutouts

This project was proudly scaffolded with the serverless cli:
```
sls create --template aws-nodejs-typescript
```

Shoutout to [this excellent article](https://tutorialedge.net/typescript/typescript-mongodb-beginners-tutorial/) by [Elliot Forbes](https://twitter.com/elliot_f) which served as a great guide for me to follow and use for inspiration!


Shoutout to everyone I've ever worked with for shaping me to be the person I am today. 🙏


# Contributing
Feel free to open Issues or PR's if you have any comments or suggestions. ❤️

Also, feel free to tweet at me here: https://twitter.com/JimLynchCodes