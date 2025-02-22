db.students.insertMany([
  {
    _id: 1,
    name: "Ali Khan",
    age: 22,
    department: "Computer Science",
    cgpa: 3.8,
    courses: ["Database Systems", "AI", "Web Development"],
  },
  {
    _id: 2,
    name: "Fatima Malik",
    age: 21,
    department: "Software Engineering",
    cgpa: 3.6,
    courses: ["Data Structures", "Algorithms", "Software Design"],
  },
  {
    _id: 3,
    name: "Ahmed Raza",
    age: 23,
    department: "Information Technology",
    cgpa: 3.4,
    courses: ["Networking", "Cyber Security", "Cloud Computing"],
  },
  {
    _id: 4,
    name: "Sara Ahmed",
    age: 20,
    department: "Artificial Intelligence",
    cgpa: 3.9,
    courses: ["Machine Learning", "Deep Learning", "AI Ethics"],
  },
  {
    _id: 5,
    name: "Hassan Ali",
    age: 24,
    department: "Data Science",
    cgpa: 3.7,
    courses: ["Big Data", "Data Analytics", "Statistics"],
  },
  {
    _id: 6,
    name: "Ayesha Noor",
    age: 22,
    department: "Computer Science",
    cgpa: 3.5,
    courses: ["OOP", "Database Systems", "Cloud Computing"],
  },
  {
    _id: 7,
    name: "Usman Tariq",
    age: 23,
    department: "Software Engineering",
    cgpa: 3.2,
    courses: ["Mobile App Development", "Web Development", "UI/UX Design"],
  },
  {
    _id: 8,
    name: "Zainab Bukhari",
    age: 21,
    department: "Artificial Intelligence",
    cgpa: 3.85,
    courses: ["AI Ethics", "Neural Networks", "Computer Vision"],
  },
  {
    _id: 9,
    name: "Bilal Sheikh",
    age: 24,
    department: "Information Technology",
    cgpa: 3.3,
    courses: ["Cloud Computing", "Blockchain", "Cyber Security"],
  },
  {
    _id: 10,
    name: "Mehwish Farooq",
    age: 20,
    department: "Data Science",
    cgpa: 3.6,
    courses: ["Data Mining", "Big Data", "Machine Learning"],
  },
]);

// -----
db.students.find();
db.students.find({ name: "Hassan Ali", age: 24 });
db.students.find({ $and: [{ name: "Hassan Ali" }, { age: 24 }] });
// -----------
// without indexing
db.students.find({ age: { $lte: 20 } }).explain();
db.students.find({ age: { $lte: 20 } }).explain("executionStats")
// this will show collection scan


//indexing
db.students.createIndex({ age: 1 })
db.students.getIndexes() // check indexes
db.students.dropIndex("age_1") // delete Index
// now again run following command and check executionStats
// total documents examined and returned and IndexScan
db.students.find({ age: { $lte: 20 } }).explain();
db.students.find({ age: { $lte: 20 } }).explain("executionStats")

// compound indexing
db.students.createIndex({ name: 1, age: -1 }); // name ascending, age descending (Order matters)
//  Make 2nd index
db.students.createIndex({ "age": 1, "cgpa": 1 })
db.students.find({ age: { $gte: 20 }, cgpa: { $gte: 3.3 } }).explain("executionStats")  //  stage: 'IXSCAN',
db.students.find({ age: { $gte: 20 } }).explain("executionStats")    //  stage: 'IXSCAN',
db.students.find({ cgpa: { $gte: 3.3 } }).explain("executionStats")  //   stage: 'COLLSCAN',
db.students.createIndex({ name: 1 }, { unique: true }); // 2 names should't be same
//--------------------------------------
// partial Filter
db.students.createIndex({ age: 1 }, { partialFilterExpression: { age: { $gt: 22 } } });
db.students.createIndex({ "expires": 1 }, { expireAfterSeconds: 3600 })// this works on dated fields and single field index
// -------------------------------------

// covered Query ?
// A covered Query is a query in which 
// 1) All fields in the query are part of an index
// 2) All the fields returned in a query are in the same index
// Example
db.students.find({ name: "Sadam" }, { _id: 0, name: 1 })
db.students.find({ name: "Sadam" }, { _id: 0, name: 1 }).explain("executionStats")  //  stage: 'PROJECTION_COVERED', ||  stage: 'IXSCAN', 
db.students.find({ name: "Sadam" }).explain("executionStats")  //   stage: 'FETCH', ||  stage: 'IXSCAN', 

//-------------------------------------------------------

// winning plan
// in case of multiple indexes for the same query

students > db.students.getIndexes()
[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  { v: 2, key: { name: 1 }, name: 'name_1' },
  { v: 2, key: { name: 1, cgpa: 1 }, name: 'name_1_cgpa_1' }
]
// Which Index Will MongoDB Use?
// If you run this query -:
db.students.find({ name: "Sadam" })

// MongoDB has two possible indexes to use:
// 1) name_1 (index on name only)
// 2) name_1_cgpa_1 (compound index on name and cgpa)

// 🔹 How MongoDB Chooses the Index:
// MongoDB tests both indexes on a small sample of documents.
// It picks the faster one as the Winning Plan.
// For future similar queries, it reuses the winning plan (stored in cache) instead of testing again.

// 🔹 Which One Wins?
// Most likely, MongoDB will use name_1, because:

// The query only has { name: "Sadam" }, so it doesn’t need cgpa.
// A single-field index is often more efficient than a compound one for a simple lookup.

// Cache is reset after -:
// 1) After 1000 writes
// 2) index is reset
// 3) mongo server is restarted
// 4) other indexes are manipulated
db.students.find({ name: "Sadam" }).explain("allPlansExecution");

//
rejectedPlans: [
  { indexName: 'name_1_cgpa_1' }
]
//
winningPlan: {
  indexName: 'name_1'
}

//-----------------------------------------
// Multi key index ?

// A multi-key index is an index that MongoDB creates when you index on array field.
//  This allows MongoDB to efficiently search for elements inside arrays.

db.students.insertMany([
  { _id: 21, name: "Sadam", subjects: ["Math", "Physics", "CS"] },
  { _id: 22, name: "Ali", subjects: ["Biology", "Math"] },
  { _id: 23, name: "Ahmed", subjects: ["Physics", "CS"] }
]);

// Testing
db.createIndex({ subjects: 1 })
db.students.find({ subjects: "Math" }).explain("executionStats"); //   stage: 'IXSCAN',
db.students.find({ subjects: "Math" }).count();  //   2
// 2nd testing
db.students.find({ subjects: "Biology" }).explain("executionStats"); //   stage: 'IXSCAN',
db.students.find({ subjects: "Biology" }).count();  //   2



