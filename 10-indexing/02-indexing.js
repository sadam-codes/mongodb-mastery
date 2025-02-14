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
// indexing
