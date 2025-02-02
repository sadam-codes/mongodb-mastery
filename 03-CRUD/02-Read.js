//  Find All Documents
db.users.find();

// Find One Document
db.users.findOne({ name: "Sadam" });

// Find with a Specific Condition
db.users.find({ name: "Ali" });

// Find by _id
db.users.find({ _id: ObjectId("123") });
db.users.find({ _id: 1 });

//  Find and Limit the Number of Results
db.users.find().limit(2);

// Find with Projection (Return Specific Fields)
db.users.find({}, { name: 1, email: 1, _id: 0 });

// Find Nested Documents (Embedded Data)
db.users.find({ "address.city": "Multan" });
db.users.find({ "address.type": "home" });

// Count Documents in a Collection
db.users.countDocuments();

// Count users with name: "Ali".
db.users.countDocuments({ name: "Ali" });

// Find One Document and Return Only a Specific Field
db.users.findOne({ name: "Hasnain" }, { age: 1, _id: 0 });

// find using less than and greater than queries
db.users.find({ age: { $lt: 25 } });
db.users.find({ age: { $lte: 25 } });
db.users.find({ age: { $gt: 25 } });
db.users.find({ age: { $gte: 25 } });
db.users.find({ age: { $gte: 25, $lte: 30 } });
db.users.find({ age: { $gte: 25, $lte: 30 } }).count();

//if u will apply findOne ,then it will only give top one document
