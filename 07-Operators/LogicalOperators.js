//  $or , $and  , $nor , $not

db.users.insertOne({ name: "sadam", age: 22 });
db.users.insertOne({ name: "Ali", age: 25 });
db.users.find();

// Logical operators

db.users.find({ $or: [{ age: { $lte: 25 } }, { age: { $gte: 20 } }] });
db.users.find({ $and: [{ name: { $eq: "Ali" } }, { age: { $eq: 25 } }] });
db.users.find({ $nor: [{ name: { $eq: "Hamza" } }, { age: { $eq: 20 } }] });

// less use of $not
db.users.find({
  $and: [{ name: { $not: { $eq: "Hamza" } } }, { section: { $eq: "B" } }],
});
// use alternative of $not
db.users.find({
  $and: [{ name: { $ne: "Hamza" } }, { section: { $ne: "B" } }],
});
