// $exist , $type

db.users.find({ name: { $exists: true } });
db.users.find({ name: { $exists: true, $type: "string" } });
db.users.find({ name: { $exists: true, $type: 2 } }); // return same string (available types)

db.students.find({ age: { $type: "int" } }); // mongoDB doest have number type , it has "int" , "long" and e.t.c
db.students.find({ age: { $exists: true, $type: 16 } });

// numbers

// Double   1  "double"
// String   2  "string"
// Boolean  8  "bool"
// int      16  "int"

// e.t.c
