// Update Sadam's Age
db.users.updateOne({ name: "Sadam" }, { $set: { age: 25 } });

// Update Ahmad's Email
db.users.updateOne({ _id: 1 }, { $set: { email: "ahmad_updated@gmail.com" } });

// Update Ali's Name
db.users.updateOne({ _id: 2 }, { $set: { name: "Ali Khan" } });

// Update Sara's Email & Add Age
db.users.updateOne(
  { _id: 3 },
  { $set: { email: "sara_updated@gmail.com", age: 23 } }
);

// Update Hasnain's Address (Change City) only 0 index
db.users.updateOne(
  { name: "Hasnain" },
  { $set: { "address.0.city": "Lahore" } }
);

//
// Update Hasnain's all nested documents Address (Change City)
db.users.updateOne(
  { name: "Hasnain" },
  { $set: { "address.$.city": "Lahore" } }
);
// Update All Users to Add a status Field
db.users.updateMany({}, { $set: { status: "active" } });
