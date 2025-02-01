// insert data query
db.users.insertOne({ name: "Sadam", age: 22 });

// Embeded or nested data

db.users.insertOne({
  name: "sadam",
  age: 22,
  address: [
    {
      type: "home",
      city: "Multan",
    },
  ],
});

// insert many

db.users.insertMany([
  {
    _id: 1,
    name: "Ahmad",
    email: "ahmad@example.com",
  },
  {
    _id: 2,
    name: "Ali",
    email: "ali@example.com",
  },
  {
    _id: 3,
    name: "Sara",
    email: "sara@example.com",
  },
]);


