db.users.insertOne({
  name: "Ahmad",
  age: 22,
  Hobbies: ["Reading", "Walking"],
  bio: "I am a full-stack developer",
  experience: [
    {
      company: "Xeven",
      duration: 1,
    },
    {
      company: "Amazon",
      duration: 2,
    },
    {
      company: "Devsacrh",
      duration: 5,
    },
  ],
});
//--------------------------------

// find students whos hobbies is cricket
db.users.find({ Hobbies: "Cicket" });

// students who have experience in amazon
db.users.find({ "experience.company": "Amazon" });

//-------------------------------

// How many students have worked in Xeven
db.users.find({ "experience.company": "Xeven" }).size();
db.users.find({ "experience.company": "Xeven" }).count();

// How many students who have worked in 3 companies
db.users.find({ experience: { $size: 3 } });

// $size operator does not support comparison operators like $lte or $gte e.t.c
db.users.find({ experience: { $size: { $lte: 3 } } }); // this will show error
// show same thing with different method
db.users.find({ $expr: { $lte: [{ $size: "$experience" }, 3] } }); // The argument to $size must be an array, but was of type: missing

// perfect (first check it exists and then apply condition)
db.users.find({
  $and: [
    { experience: { $exists: true } },
    { $expr: { $lte: [{ $size: "$experience" }, 3] } },
  ],
});

//---------------------------------

// How many students whose Hobbies are walking and Reading ?

// but this will exactly match same pattern
db.users.find({ Hobbies: ["Reading", "Walking"] }).count();

// so we use this method ($all)
db.users.find({ Hobbies: { $all: ["Walking", "Reading"] } }).count();

// Following tells that , in walking or reading ,if anyone has been stisfied and show data
db.users.find({ Hobbies: { $in: ["Walking", "Reading"] } }).count();

//---------------------------------

// $elemMatch
db.users.find({ experience: { $elemMatch: { company: "Xeven" } } });
// another example
db.users.find({
  experience: { $elemMatch: { company: "Xeven", duration: { $gte: 1 } } },
});
