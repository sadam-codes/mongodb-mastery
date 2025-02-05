// In MongoDB, a concern (write concern) defines the level of acknowledgment requested
// from MongoDB when performing write operations. It determines how MongoDB confirms the
// success of a write operation, ensuring data durability and consistency.

// insertOne({value}, {options})
db.users.insertOne(
  { _id: 2, name: "Ali", age: 20 },
  { writeConcern: { w: 0, j: true, wtimeout: 2000 } }
);

// w: 0 → MongoDB acknowledges will false
// j: true → The write is acknowledged only after being committed to the journal.
// wtimeout: 2000 → Timeout of 2000ms for acknowledgment.

// ------------------------

// Atomicity in MongoDB
// Atomicity refers to the principle that a database operation must be fully completed or fully rolled back.
// there is no in-between state. In MongoDB, atomicity ensures that operations are all-or-nothing,
// preventing partial updates that could lead to inconsistent data.

// Atomocity is achieved at document level
