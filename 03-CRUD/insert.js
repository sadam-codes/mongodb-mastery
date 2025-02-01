// insert data query
db.users.insertOne({ name: "Sadam", age: 22 });

// Embeded

db.users.insertOne({
  _id: 1,
  name: "sadam",
  email: "sadam@example.com",
  addresses: [
    {
      type: "home",
      city: "Multan",
    },
  ],
});
