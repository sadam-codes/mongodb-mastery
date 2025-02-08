// What is Indexing in MongoDB?

// Indexing in MongoDB is a mechanism that improves the efficiency of queries by allowing the database
// to locate documents more quickly. An index is a special data structure that stores a small portion
// of the collection’s data in a way that makes searches faster.

// By default, MongoDB creates an index on the _id field for every collection, but additional indexes can
// be created on other fields to optimize performance.
//-------------------------------------------------
// Why Do We Use Indexing in MongoDB?

// 1- Faster Query Execution
// Without an index, MongoDB performs a collection scan, meaning it checks every document in the collection.
// This is slow for large datasets.
// With an index, MongoDB directly locates the required documents, making queries much faster.
// ------------------------------------------------
// When Not to Use Indexing?

// Too many indexes slow down write operations (inserts, updates, deletes).
// If a field is rarely queried, indexing it wastes memory.
// Small collections don't need indexing since scanning is already fast.
