db.users.insertOne({ name: "sadam", age: 22 });
db.users.insertOne({ name: "Ali", age: 25 });

db.users.find();

// comparison operators
// basic
db.users.find({ name: sadam });
db.users.find({ age: 25 });

// equal to and not equal to ....
db.users.find({ name: { $eq: sadam } });
db.users.find({ name: { $ne: sadam } });

// less than and less than equal to ...
db.users.find({ age: { $lt: 25 } });
db.users.find({ age: { $lte: 25 } });

// greater than and greater than equal to ...
db.users.find({ age: { $gt: 22 } });
db.users.find({ age: { $gte: 22 } });

// in and notIn
db.users.find({ age: { $in: [22, 25, 26] } });
db.users.find({ age: { $nin: [22, 25, 26] } });

// with name (in and notIn)
db.users.find({ name: { $in: ["sadam", "Ali"] } });
db.users.find({ name: { $nin: ["sadam", "Ali"] } });
