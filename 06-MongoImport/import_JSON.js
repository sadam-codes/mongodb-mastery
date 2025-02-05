// download =>  MongoDB Command Line Database Tools Download (msi)
// install
// copy path of tools till bin and set .env
//
// now you can run the mongoimport command in cmd
// dummy Data

//steps
// 1- Save the JSON data as students.json

[
  {
    name: "Ali Khan",
    department: "Computer Science",
    section: "A",
  },
  {
    name: "Ahmad",
    department: "Software Engineering",
    section: "B",
  },
  {
    name: "Bilal Hussain",
    department: "Information Technology",
    section: "A",
  },
  {
    name: "Sara Malik",
    department: "Electrical Engineering",
    section: "C",
  },
  {
    name: "Hamza Raza",
    department: "Mechanical Engineering",
    section: "B",
  },
];

// 2- Run the mongoimport Command in new cmd
// mongoimport --file "C:\Users\k\Desktop\hy\dummy.json" --db university --collection students --jsonArray --drop

// explanation

// --file → Specifies the JSON file path.
// --db university → Uses the university database.
// --collection students → Imports data into the students collection.
// --jsonArray → Specifies that the file contains an array of JSON objects.
// --drop → Deletes existing data in the collection before importing.

// verify

// use university
// db.students.find()
