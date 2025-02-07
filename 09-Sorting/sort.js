db.users.find().sort({ age: 1 }); // ascending order
db.users.find().sort({ age: -1 }); // descending order

//If you want to sort first by age (ascending) and then by name (ascending), use
db.users.find().sort({ age: 1, name: 1 });

//If you want to sort first by age (descending) and then by name (descending), use
db.users.find().sort({ age: -1, name: -1 });

// skip() and limit()
db.users.find().sort({ age: 1 }).skip(5).limit(10);
// .skip(5): Skips the first 5 documents.
// .limit(10): Limits the result to 10 documents only.
