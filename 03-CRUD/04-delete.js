// Delete a Single Document
db.users.deleteOne({ name: "Sadam" });

// Delete Multiple Documents
db.users.deleteMany({ age: 22 });

// Delete All Documents (Clear Collection)
db.users.deleteMany({});

// Remove a Specific Field from a Document
db.users.updateOne({ name: "Ali" }, { $unset: { email: "" } });

// delete collection
db.users.drop();

// Drop (Delete) a Database
db.dropDatabase();
