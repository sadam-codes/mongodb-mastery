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

//---------------------------------

// for all experiences less than and equal to 1 year for all stuents , add a new field neglect:true
// for fist matched only
db.users.updateMany(
  { "experience.duration": { $lte: 1 } },
  { $set: { "experience.$.neglect": true } }
);

// Updates all elements in the experience array, regardless of condition.

db.users.updateMany(
  { "experience.duration": { $lte: 1 } },
  { $set: { "experience.$[].neglect": true } }
);

// ---------
// Use $[identifier] to update only elements that meet a specific condition.
db.users.updateMany(
  { "experience.duration": { $lte: 1 } },
  { $set: { "experience.$[elem].neglect": true } },
  { arrayFilters: [{ "elem.duration": { $lte: 1 } }] }
);
//-----------------------------------------------

// Add new company
db.users.updateOne(
  { name: "Sadam" },
  { $push: { experience: { company: "Hello", duration: 3 } } }
);

// remove only company
db.users.updateOne(
  { name: "Sadam" },
  { $pull: { experience: { company: "Hello", duration: 3 } } }
);

// remove only company from last one (Acending order)
db.users.updateOne({ name: "Sadam" }, { $pop: { experience: 1 } });

// remove only company from first one (descending order)
db.users.updateOne({ name: "Sadam" }, { $pop: { experience: -1 } });

// if not exists then add, otherwise already exsist (No duplication/Redundancy)
db.users.updateOne(
  { name: "Sadam" },
  { $addToSet: { experience: { company: "Hello", duration: 3 } } }
);
