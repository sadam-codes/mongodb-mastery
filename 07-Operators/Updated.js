// increase age of all students by 2
db.users.updateMany({}, { $inc: { age: 2 } });

// decrease age of all students by 2
db.users.updateMany({}, { $inc: { age: -2 } });

// set age of Haider to 30 if his age is greater than 40
db.users.updateMany({ name: "Haider" }, { $min: { age: 30 } });

// set age of Haider to 50 if his age is less than 30
db.users.updateMany({ name: "Haider" }, { $max: { age: 50 } });

// multiply Haider's age with 2
db.users.updateMany({ name: "Haider" }, { $mul: { age: 2 } });

// unset
db.users.updateMany({ name: "Haider" }, { $unset: { age: "" } });

// $rename
db.users.updateMany({}, { $rename: { age: "StudenstAge" } });

// $upsert
db.users.updateOne(
  { name: "Unknown person" },
  { $set: { age: 20 } },
  { upsert: true }
);

// If "Unknown person" exists → Updates their age to 20.
// If "Unknown person" does not exist → Inserts a new document { name: "Unknown person", age: 20 }.

//------------------------------------------------


