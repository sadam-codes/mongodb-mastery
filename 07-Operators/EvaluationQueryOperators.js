// $expr , $jsonSchema , $mod , $regex , $text , $where

// Evaluation query operators in MongoDB are used to perform advanced filtering, such as regular expressions,
// JavaScript-based queries, and array element matching. These operators help in evaluating values dynamically.

// -------------------------
// 1. $expr → Use Aggregation Expressions in Queries

// The $expr operator allows using aggregation expressions inside find() queries.
//Example: Find students where GPA is greater than CGPA

db.users.find({
  $expr: { $gt: ["$GPA", "$CGPA"] },
});

// ✅ Explanation: Compares GPA and CGPA for each document and returns those where GPA > CGPA.

// -------------------------

// 2. $jsonSchema → Validate Documents Using JSON Schema

// The $jsonSchema operator is used to enforce schema validation.
//Example: Find users with a specific schema

db.users.find({
  $jsonSchema: {
    bsonType: "object",
    required: ["name", "GPA", "CGPA"],
    properties: {
      name: { bsonType: "string" },
      GPA: {
        bsonType: ["double", "int", "decimal"],
        minimum: 0.0,
        maximum: 4.0,
      },
      CGPA: {
        bsonType: ["double", "int", "decimal"],
        minimum: 0.0,
        maximum: 4.0,
      },
    },
  },
});

// ✅ Explanation: Finds students with required fields (name, GPA, CGPA) and ensures GPA and CGPA
// is between 0.0 - 4.0.
// ---------------------------------

// 3. $mod → Check if a Value is a Multiple of Another

// This operator returns documents where the field value divided by a given divisor has a specific remainder.
//Example: Find students whose roll number is even

db.users.find({ rollNumber: { $mod: [2, 0] } });
// ✅ Explanation: Finds students where rollNumber % 2 === 0 (even numbers).
// #mod only applicable on int , double and decimal

// ---------------------------------

// 4. $regex → Match Text with Regular Expressions

//The $regex operator is used to match string patterns.
//Example 1: Find users whose names start with 'S'

db.users.find({ name: { $regex: "^S" } });

//----------------------------------

// 5. $text → Full-Text Search on Indexed Fields

// This operator performs full-text search on a field, but it requires a text index.
//Step 1: Create a Text Index
db.users.createIndex({ name: "text" });
// Step 2: Search for Users Containing a Word
db.users.find({ $text: { $search: "Sadam" } });
// Step 3: Search for Multiple Words
db.users.find({ $text: { $search: "Haider Sadam" } });

//---------------------------------
