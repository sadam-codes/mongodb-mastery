// Schema Validation (Built-in MongoDB Validation)
// Mongoose Validation (Recommended for Node.js)
// Using Zod for Validation in Node.js

// we will discuss by-default validation here

db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        age: {
          bsonType: "int",
          minimum: 18,
          description: "must be an integer and at least 18",
        },
      },
    },
  },
  validationAction: "error", // can also be warn
});


// modify

db.runCommand({
  collMod: "users",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age", "dept"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        age: {
          bsonType: "int",
          minimum: 18,
          description: "must be an integer and at least 18",
        },
        dept: {
          bsonType: "string",
          description: "must be a string and is required",
        },
      },
    },
  },
  validationAction: "error", // can also be warn
});
