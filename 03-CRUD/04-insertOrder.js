db.users.insertMany([
  {
    _id: 1,
    name: "BookA",
    price: 1,
  },
  {
    _id: 2,
    name: "BookB",
    price: 2,
  },
  {
    _id: 3,
    name: "BookC",
    price: 3,
  },
]);

// now if i insert other three books data with same _id , then it will
// show error and dont insert all data next to that matched _id
// so in real , it should only show error on that same existed _id and should store other data
// so for that purpose , we will insert its order

//insert havae two thngs
//  =>  insertMany(data , options)
// so add options

db.users.insertMany(
  [
    {
      _id: 3,
      name: "Book3",
      price: 1,
    },
    {
      _id: 4,
      name: "BookD",
      price: 2,
    },
    {
      _id: 5,
      name: "BookE",
      price: 3,
    },
  ],
  { ordered: false }
);

// by-default { ordered: true }
// Now this will not save _id : 3 data , due to same key/_id
// but will save all other data instead of matched _id
