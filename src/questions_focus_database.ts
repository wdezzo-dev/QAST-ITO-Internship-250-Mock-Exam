import { Question } from "./types";

export const QUESTIONS_FOCUS_DATABASE: Question[] = [
  {
    id: 1101,
    text: "In database design, what is the primary purpose of an Index?",
    options: [
      { key: "A", text: "To guarantee that no duplicate records exist in a table" },
      { key: "B", text: "To dramatically speed up data retrieval and query execution times" },
      { key: "C", text: "To enforce referential integrity constraints between parent and child tables" },
      { key: "D", text: "To compress database storage size to save disk space" }
    ],
    correctAnswer: "B",
    explanation: "An index acts like a book index, allowing the query engine to look up data rows directly without scanning the entire table from top to bottom.",
    section: "Database"
  },
  {
    id: 1102,
    text: "Which of the following describes a Foreign Key constraint?",
    options: [
      { key: "A", text: "A key that must always be unique and cannot contain NULL values" },
      { key: "B", text: "A field in one table that links to the primary key of another table to maintain relationships" },
      { key: "C", text: "An encryption key used to protect sensitive tables" },
      { key: "D", text: "A key generated from an external third-party API" }
    ],
    correctAnswer: "B",
    explanation: "Foreign keys link tables together and enforce referential integrity, making sure orphaned rows are not accidentally created.",
    section: "Database"
  },
  {
    id: 1103,
    text: "What does the 'I' stand for in ACID, representing the core properties of database transactions?",
    options: [
      { key: "A", text: "Integrity" },
      { key: "B", text: "Isolation" },
      { key: "C", text: "Indexing" },
      { key: "D", text: "Inheritance" }
    ],
    correctAnswer: "B",
    explanation: "Isolation ensures that concurrent execution of transactions leaves the database in the same state as if they were executed sequentially.",
    section: "Database"
  },
  {
    id: 1104,
    text: "Which type of SQL JOIN returns only the rows that have matching values in both tables?",
    options: [
      { key: "A", text: "LEFT OUTER JOIN" },
      { key: "B", text: "RIGHT OUTER JOIN" },
      { key: "C", text: "INNER JOIN" },
      { key: "D", text: "FULL OUTER JOIN" }
    ],
    correctAnswer: "C",
    explanation: "An INNER JOIN matches records across tables based on a shared join condition, ignoring rows with no match on either side.",
    section: "Database"
  },
  {
    id: 1105,
    text: "What is database Normalization primarily used for?",
    options: [
      { key: "A", text: "To convert all characters to uppercase for uniform storage" },
      { key: "B", text: "To minimize data redundancy and prevent update anomalies" },
      { key: "C", text: "To back up tables into secondary offline servers" },
      { key: "D", text: "To translate SQL structures into NoSQL JSON documents" }
    ],
    correctAnswer: "B",
    explanation: "Normalization structures database schemas systematically to remove redundancy and ensure dependencies are logically organized.",
    section: "Database"
  },
  {
    id: 1106,
    text: "What is the key difference between relational (SQL) databases and NoSQL databases?",
    options: [
      { key: "A", text: "SQL databases cannot be stored on cloud servers, whereas NoSQL can" },
      { key: "B", text: "SQL databases use structured schemas and tables, whereas NoSQL databases are usually schema-less and support documents, key-values, or graphs" },
      { key: "C", text: "SQL databases only support numbers, while NoSQL databases support text strings" },
      { key: "D", text: "NoSQL databases completely reject ACID properties under all configurations" }
    ],
    correctAnswer: "B",
    explanation: "SQL databases are table-based and highly structured. NoSQL databases offer flexible, schema-free designs optimized for scaling out horizontally.",
    section: "Database"
  },
  {
    id: 1107,
    text: "Which SQL clause is used to filter group results after applying an aggregation (like COUNT or SUM)?",
    options: [
      { key: "A", text: "WHERE" },
      { key: "B", text: "HAVING" },
      { key: "C", text: "GROUP BY" },
      { key: "D", text: "LIMIT" }
    ],
    correctAnswer: "B",
    explanation: "WHERE filters raw individual records BEFORE aggregation. HAVING filters grouped datasets AFTER aggregation is applied.",
    section: "Database"
  },
  {
    id: 1108,
    text: "What is the consequence of a database 'Deadlock'?",
    options: [
      { key: "A", text: "The physical server burns out due to high memory use" },
      { key: "B", text: "Two transactions are blocked because each is waiting for a lock held by the other, stalling both indefinitely" },
      { key: "C", text: "All backup logs are permanently deleted" },
      { key: "D", text: "The network router rejects incoming connection packets" }
    ],
    correctAnswer: "B",
    explanation: "A deadlock is a gridlock state where transaction A waits for resource X (locked by B), while B waits for resource Y (locked by A). The database must detect and abort one to break the loop.",
    section: "Database"
  },
  {
    id: 1109,
    text: "In database design, a Primary Key must satisfy which of the following requirements?",
    options: [
      { key: "A", text: "It must be unique and cannot contain any NULL values" },
      { key: "B", text: "It must be an auto-incrementing integer starting at 1" },
      { key: "C", text: "It must be composed of at least two composite column combinations" },
      { key: "D", text: "It must be encrypted with a public-key cipher" }
    ],
    correctAnswer: "A",
    explanation: "A primary key uniquely identifies each record in a table, requiring absolute uniqueness and preventing null assignments so referential rows are reliable.",
    section: "Database"
  },
  {
    id: 1110,
    text: "Which SQL statement is used to remove a complete table structure along with all its data permanently from the database schema?",
    options: [
      { key: "A", text: "DELETE TABLE" },
      { key: "B", text: "REMOVE TABLE" },
      { key: "C", text: "DROP TABLE" },
      { key: "D", text: "TRUNCATE TABLE" }
    ],
    correctAnswer: "C",
    explanation: "DROP TABLE completely deletes both the data rows AND the structural definition from the catalog. TRUNCATE and DELETE keep the empty structure intact.",
    section: "Database"
  },
  {
    id: 1111,
    text: "What is the primary difference between DROP TABLE and TRUNCATE TABLE?",
    options: [
      { key: "A", text: "DROP deletes structural metadata, whereas TRUNCATE deletes data rows but keeps the structural metadata and columns" },
      { key: "B", text: "TRUNCATE deletes the table metadata, while DROP keeps columns" },
      { key: "C", text: "DROP is reversible using ROLLBACK, whereas TRUNCATE is never reversible" },
      { key: "D", text: "TRUNCATE takes significantly longer to run than DROP" }
    ],
    correctAnswer: "A",
    explanation: "DROP deletes both data and schema. TRUNCATE deletes all data rows extremely fast by deallocating the pages, keeping the empty schema intact.",
    section: "Database"
  },
  {
    id: 1112,
    text: "Which database Normal Form (NF) requires that all non-key attributes be fully functionally dependent on the entire primary key, eliminating partial dependencies?",
    options: [
      { key: "A", text: "First Normal Form (1NF)" },
      { key: "B", text: "Second Normal Form (2NF)" },
      { key: "C", text: "Third Normal Form (3NF)" },
      { key: "D", text: "Boyce-Codd Normal Form (BCNF)" }
    ],
    correctAnswer: "B",
    explanation: "2NF requires that a table is in 1NF and has no partial dependencies (i.e., no non-prime attribute depends on a subset of a composite primary key).",
    section: "Database"
  },
  {
    id: 1113,
    text: "What is Third Normal Form (3NF) designed to eliminate?",
    options: [
      { key: "A", text: "Repeating groups and multi-valued attributes" },
      { key: "B", text: "Partial key dependencies" },
      { key: "C", text: "Transitive dependencies (non-key attributes depending on other non-key attributes)" },
      { key: "D", text: "Primary key indexes" }
    ],
    correctAnswer: "C",
    explanation: "3NF requires a table to be in 2NF, and ensures that every non-key column depends directly on the primary key, removing transitive dependencies.",
    section: "Database"
  },
  {
    id: 1114,
    text: "What does the 'A' in ACID properties guarantee?",
    options: [
      { key: "A", text: "Atomicity: All operations in a transaction succeed, or the entire transaction fails and is rolled back completely" },
      { key: "B", text: "Access: Users are checked for correct security credentials before reading tables" },
      { key: "C", text: "Availability: The database server maintains 99.9% uptime" },
      { key: "D", text: "Aggregation: Aggregates like COUNT or SUM are executed concurrently" }
    ],
    correctAnswer: "A",
    explanation: "Atomicity ensures transactions are 'all-or-nothing'. If one SQL statement fails inside a transaction, all preceding changes are rolled back.",
    section: "Database"
  },
  {
    id: 1115,
    text: "What does the 'D' in ACID properties guarantee?",
    options: [
      { key: "A", text: "Distribution: Tables are divided automatically across backup servers" },
      { key: "B", text: "Durability: Once a transaction commits, its changes survive even in the event of a power loss or system crash" },
      { key: "C", text: "Deadlock prevention: The system automatically resolves lock dependencies" },
      { key: "D", text: "Dynamic scaling: The query cache scales up based on demand" }
    ],
    correctAnswer: "B",
    explanation: "Durability ensures committed transaction changes are written to non-volatile disk logs, making them resilient to sudden crashes.",
    section: "Database"
  },
  {
    id: 1116,
    text: "Which SQL constraint prevents null values in a column?",
    options: [
      { key: "A", text: "UNIQUE" },
      { key: "B", text: "NOT NULL" },
      { key: "C", text: "CHECK" },
      { key: "D", text: "DEFAULT" }
    ],
    correctAnswer: "B",
    explanation: "NOT NULL forces a column to always have a value, preventing row insertions that omit this data.",
    section: "Database"
  },
  {
    id: 1117,
    text: "What type of index is physically stored in the same order as the actual rows on disk, meaning a table can have only one of this type?",
    options: [
      { key: "A", text: "Non-clustered Index" },
      { key: "B", text: "Clustered Index" },
      { key: "C", text: "Hash Index" },
      { key: "D", text: "Bitmap Index" }
    ],
    correctAnswer: "B",
    explanation: "A clustered index defines the physical sort order of data rows on disk. Since physical files can only have one sort order, a table is limited to one clustered index (usually on the Primary Key).",
    section: "Database"
  },
  {
    id: 1118,
    text: "Which SQL command is used to add a new column named 'birth_date' to an existing table named 'Employees'?",
    options: [
      { key: "A", text: "UPDATE Employees ADD birth_date DATE;" },
      { key: "B", text: "INSERT INTO Employees (birth_date) VALUES (DATE);" },
      { key: "C", text: "ALTER TABLE Employees ADD birth_date DATE;" },
      { key: "D", text: "MODIFY TABLE Employees ADD birth_date DATE;" }
    ],
    correctAnswer: "C",
    explanation: "ALTER TABLE modifies the schema structure of an existing table, using the 'ADD' keyword to append new columns.",
    section: "Database"
  },
  {
    id: 1119,
    text: "Which SQL keyword is used to retrieve only unique and non-duplicate rows from a query?",
    options: [
      { key: "A", text: "UNIQUE" },
      { key: "B", text: "DISTINCT" },
      { key: "C", text: "GROUP BY" },
      { key: "D", text: "SINGLE" }
    ],
    correctAnswer: "B",
    explanation: "DISTINCT filters duplicate values or records from the SELECT output list, keeping only unique instances.",
    section: "Database"
  },
  {
    id: 1120,
    text: "In database isolation levels, what is a 'Dirty Read'?",
    options: [
      { key: "A", text: "A transaction reads data that has been modified by another transaction but is not yet committed" },
      { key: "B", text: "A user reads outdated logs from the disk cache" },
      { key: "C", text: "The query engine reads corrupted sectors from the physical drive" },
      { key: "D", text: "A query retrieves duplicate rows due to an incorrect JOIN condition" }
    ],
    correctAnswer: "A",
    explanation: "A dirty read occurs when Transaction A reads changes made by Transaction B. If B aborts or rolls back, Transaction A's read data becomes invalid and never actually existed.",
    section: "Database"
  },
  {
    id: 1121,
    text: "Which database isolation level is the highest and most strict, completely preventing dirty reads, non-repeatable reads, and phantom reads?",
    options: [
      { key: "A", text: "Read Uncommitted" },
      { key: "B", text: "Read Committed" },
      { key: "C", text: "Repeatable Read" },
      { key: "D", text: "Serializable" }
    ],
    correctAnswer: "D",
    explanation: "Serializable is the highest isolation level. It isolates transactions as if they were running one after another sequentially, though it reduces concurrency performance.",
    section: "Database"
  },
  {
    id: 1122,
    text: "What does the CAP Theorem state about distributed data systems?",
    options: [
      { key: "A", text: "A system can only guarantee Capacity, Availability, and Portability simultaneously" },
      { key: "B", text: "A distributed system can guarantee at most two out of three properties: Consistency, Availability, and Partition Tolerance" },
      { key: "C", text: "Relational database transactions must compile indexes with high caching priorities" },
      { key: "D", text: "Cloud databases must restrict tables to columns containing primitive keys" }
    ],
    correctAnswer: "B",
    explanation: "The CAP Theorem proves that a distributed database can only satisfy two out of: Consistency (all nodes see the same data), Availability (every request receives a response), and Partition Tolerance (system functions despite node drops).",
    section: "Database"
  },
  {
    id: 1123,
    text: "Which type of NoSQL database stores data in documents (such as JSON or BSON formats) rather than tables?",
    options: [
      { key: "A", text: "Key-Value Store (e.g., Redis)" },
      { key: "B", text: "Document Store (e.g., MongoDB)" },
      { key: "C", text: "Column-Family Store (e.g., Cassandra)" },
      { key: "D", text: "Graph Database (e.g., Neo4j)" }
    ],
    correctAnswer: "B",
    explanation: "Document databases represent rows as highly flexible JSON/BSON structures, nested objects, and arrays without requiring fixed table schemas.",
    section: "Database"
  },
  {
    id: 1124,
    text: "What is the purpose of the SQL 'GROUP BY' clause?",
    options: [
      { key: "A", text: "To sort the final query results in alphabetical order" },
      { key: "B", text: "To group rows that have the same values in specified columns into summary rows (like finding total salary per department)" },
      { key: "C", text: "To join multiple tables together based on a shared key" },
      { key: "D", text: "To group similar tables in a folder" }
    ],
    correctAnswer: "B",
    explanation: "GROUP BY collapses identical column values into single rows, enabling mathematical aggregations like SUM, COUNT, or AVG to run over grouped brackets.",
    section: "Database"
  },
  {
    id: 1125,
    text: "Which SQL command is used to remove all rows from a table permanently without deleting the table structure itself, and cannot be rolled back in some engines because it is a DDL operation?",
    options: [
      { key: "A", text: "DELETE" },
      { key: "B", text: "TRUNCATE" },
      { key: "C", text: "REMOVE" },
      { key: "D", text: "DROP" }
    ],
    correctAnswer: "B",
    explanation: "TRUNCATE is a Data Definition Language (DDL) command that empties a table by deallocating the database pages directly, making it extremely fast compared to DELETE.",
    section: "Database"
  },
  {
    id: 1126,
    text: "What is a 'Subquery' in SQL?",
    options: [
      { key: "A", text: "A query that is nested inside another SQL query (like in the WHERE or FROM clause)" },
      { key: "B", text: "A database transaction running on a secondary backup server" },
      { key: "C", text: "An index search query operating over a subset of records" },
      { key: "D", text: "A query that only searches NoSQL document formats" }
    ],
    correctAnswer: "A",
    explanation: "A subquery is an inner query block evaluated first to feed values or records to the parent outer query.",
    section: "Database"
  },
  {
    id: 1127,
    text: "What is a 'View' in a relational database?",
    options: [
      { key: "A", text: "A physical table replica that occupies duplicate space on the disk" },
      { key: "B", text: "A virtual table defined by a stored SQL query, which is evaluated dynamically when queried" },
      { key: "C", text: "A screen layout used by web clients to edit records" },
      { key: "D", text: "An admin console used to monitor database transaction loads" }
    ],
    correctAnswer: "B",
    explanation: "Views are pre-saved query templates. They look and act like standard tables but do not store data themselves, pulling records from underlying tables in real-time.",
    section: "Database"
  },
  {
    id: 1128,
    text: "Which of the following database objects executes automatically in response to certain events (like INSERT, UPDATE, or DELETE) on a table?",
    options: [
      { key: "A", text: "View" },
      { key: "B", text: "Trigger" },
      { key: "C", text: "Stored Procedure" },
      { key: "D", text: "Index" }
    ],
    correctAnswer: "B",
    explanation: "A trigger is a database procedural routine bound to a table that fires automatically before or after DML modifications to enforce custom rules or logging.",
    section: "Database"
  },
  {
    id: 1129,
    text: "In SQL, what is the default order of sorting for the 'ORDER BY' clause?",
    options: [
      { key: "A", text: "Descending order (DESC)" },
      { key: "B", text: "Ascending order (ASC)" },
      { key: "C", text: "Unsorted physical disk order" },
      { key: "D", text: "Alphabetical length of key columns" }
    ],
    correctAnswer: "B",
    explanation: "ORDER BY defaults to ascending order (A-Z, 0-9) if neither the 'ASC' nor 'DESC' modifier is explicitly specified.",
    section: "Database"
  },
  {
    id: 1130,
    text: "Which type of SQL Join returns all rows from the left table, and the matched rows from the right table, filling with NULL values if there is no match?",
    options: [
      { key: "A", text: "INNER JOIN" },
      { key: "B", text: "LEFT JOIN" },
      { key: "C", text: "RIGHT JOIN" },
      { key: "D", text: "FULL OUTER JOIN" }
    ],
    correctAnswer: "B",
    explanation: "A LEFT JOIN keeps every single row from the left table. If the right table has no matching join keys, its columns are filled with NULLs.",
    section: "Database"
  },
  {
    id: 1131,
    text: "What does the SQL 'LIKE' operator with the '%' wildcard do (e.g., WHERE name LIKE 'A%')?",
    options: [
      { key: "A", text: "Finds rows where the name contains only the character 'A'" },
      { key: "B", text: "Finds rows where the name starts with the character 'A' followed by any sequence of characters" },
      { key: "C", text: "Finds rows where the name length is exactly two characters" },
      { key: "D", text: "Matches usernames that are equal to 'A'" }
    ],
    correctAnswer: "B",
    explanation: "The percentage symbol '%' acts as a multi-character wildcard in SQL LIKE statements. 'A%' matches anything starting with an uppercase 'A'.",
    section: "Database"
  },
  {
    id: 1132,
    text: "What is referential integrity?",
    options: [
      { key: "A", text: "Ensuring that passwords are encrypted in the database" },
      { key: "B", text: "Maintaining consistent, logical relationships between table keys so a Foreign Key column must always match an existing Primary Key in the referenced table" },
      { key: "C", text: "Saving database transaction logs in multiple cloud zones" },
      { key: "D", text: "Filtering out non-numeric values from aggregate columns" }
    ],
    correctAnswer: "B",
    explanation: "Referential integrity ensures that references across tables remain valid. If row X points to parent row Y, row Y cannot be deleted as long as the reference exists.",
    section: "Database"
  },
  {
    id: 1133,
    text: "What database transaction isolation level prevents 'Dirty Reads' and 'Non-Repeatable Reads', but still permits 'Phantom Reads'?",
    options: [
      { key: "A", text: "Read Uncommitted" },
      { key: "B", text: "Read Committed" },
      { key: "C", text: "Repeatable Read" },
      { key: "D", text: "Serializable" }
    ],
    correctAnswer: "C",
    explanation: "Repeatable Read locks read rows to prevent them from being updated/deleted during a transaction (blocking non-repeatable reads), but doesn't prevent new rows from being inserted by other transactions (which causes phantom reads).",
    section: "Database"
  },
  {
    id: 1134,
    text: "What is a 'Surrogate Key' in database modeling?",
    options: [
      { key: "A", text: "A key derived from physical business attributes like SSN or email" },
      { key: "B", text: "A system-generated, artificial unique identifier (like an auto-incrementing integer or UUID) with no business meaning" },
      { key: "C", text: "An encryption key used to authenticate client logins" },
      { key: "D", text: "A secondary key used for indexing backup log records" }
    ],
    correctAnswer: "B",
    explanation: "A surrogate key is an artificial identifier (e.g., id 12053) created purely to identify rows uniquely, free from dependency on volatile real-world attributes (natural keys).",
    section: "Database"
  },
  {
    id: 1135,
    text: "Which SQL function returns the total count of records in a table, including rows with null fields?",
    options: [
      { key: "A", text: "COUNT(column_name)" },
      { key: "B", text: "COUNT(*)" },
      { key: "C", text: "SUM(1)" },
      { key: "D", text: "TOTAL(*)" }
    ],
    correctAnswer: "B",
    explanation: "COUNT(*) counts all rows matching the criteria, regardless of whether individual columns contain NULL values. COUNT(column_name) skips rows where that specific column is NULL.",
    section: "Database"
  },
  {
    id: 1136,
    text: "What is the purpose of the 'EXPLAIN' statement in relational SQL databases?",
    options: [
      { key: "A", text: "To output code comments detailing table structures" },
      { key: "B", text: "To show the query execution plan generated by the optimizer, detailing index scans, join paths, and cost estimates" },
      { key: "C", text: "To translate SQL statements into standard English" },
      { key: "D", text: "To print help documentations for database commands" }
    ],
    correctAnswer: "B",
    explanation: "Executing EXPLAIN before a query reveals how the database engine plans to execute it, which is essential for identifying bottlenecks like full table scans.",
    section: "Database"
  },
  {
    id: 1137,
    text: "Which of the following database anomalies can occur if database normalization is neglected?",
    options: [
      { key: "A", text: "Insert, Update, and Delete Anomalies" },
      { key: "B", text: "Network Timeout and Port Anomalies" },
      { key: "C", text: "Processor Thread and Memory Anomalies" },
      { key: "D", text: "User Password and Encryption Anomalies" }
    ],
    correctAnswer: "A",
    explanation: "Denormalized schemas suffer from anomalies. For example, an Update Anomaly occurs when changing data in one place leaves matching duplicate records elsewhere outdated.",
    section: "Database"
  },
  {
    id: 1138,
    text: "What does a 'Foreign Key' column refer to?",
    options: [
      { key: "A", text: "An index containing decrypted passwords" },
      { key: "B", text: "A primary key column in another (referenced) table" },
      { key: "C", text: "A key that connects to a third-party server" },
      { key: "D", text: "A column storing international text characters" }
    ],
    correctAnswer: "B",
    explanation: "Foreign keys point directly to primary keys of target tables to establish and enforce physical relationships.",
    section: "Database"
  },
  {
    id: 1139,
    text: "What is the purpose of a database 'Transaction'?",
    options: [
      { key: "A", text: "To back up tables to offline storage files" },
      { key: "B", text: "To execute a sequence of SQL commands as a single logical unit of work that must succeed or fail in its entirety" },
      { key: "C", text: "To encrypt communications between application servers and client terminals" },
      { key: "D", text: "To dynamically re-sort physical table rows on disk" }
    ],
    correctAnswer: "B",
    explanation: "Transactions bundle multiple updates (like deducting money from account A and adding to account B) to guarantee data integrity.",
    section: "Database"
  },
  {
    id: 1140,
    text: "Which of the following statements about a NoSQL Key-Value store is true?",
    options: [
      { key: "A", text: "It strictly enforces referential integrity between keys" },
      { key: "B", text: "It retrieves data by referencing a unique key to get its associated value, offering extreme speed and simplicity" },
      { key: "C", text: "It requires normalized tables and composite primary keys" },
      { key: "D", text: "It is designed to support deep nested SQL INNER JOIN statements" }
    ],
    correctAnswer: "B",
    explanation: "Key-value stores act like persistent hash maps, mapping a lookup string (key) to a blob/string/integer (value) with minimal overhead.",
    section: "Database"
  },
  {
    id: 1141,
    text: "In SQL, what is the difference between a WHERE clause and a HAVING clause?",
    options: [
      { key: "A", text: "WHERE filters rows before they are grouped and aggregated, while HAVING filters grouped results after aggregation" },
      { key: "B", text: "HAVING is used only for text columns, while WHERE is used for numbers" },
      { key: "C", text: "WHERE is a NoSQL command, whereas HAVING is a relational command" },
      { key: "D", text: "There is no functional difference between the two" }
    ],
    correctAnswer: "A",
    explanation: "WHERE applies to individual rows before GROUP BY. HAVING applies conditions to grouped summaries (e.g., HAVING SUM(sales) > 1000).",
    section: "Database"
  },
  {
    id: 1142,
    text: "What is a 'Composite Primary Key' in database tables?",
    options: [
      { key: "A", text: "A key that links to multiple external servers" },
      { key: "B", text: "A primary key that is composed of two or more columns to guarantee uniqueness" },
      { key: "C", text: "An index containing encrypted composite variables" },
      { key: "D", text: "A key auto-generated by a NoSQL cluster manager" }
    ],
    correctAnswer: "B",
    explanation: "When no single column is guaranteed to be unique, a composite primary key combines multiple columns (e.g., student_id + class_id) to form a unique identifier.",
    section: "Database"
  },
  {
    id: 1143,
    text: "What SQL join type returns a Cartesian product, matching every single row of the left table with every single row of the right table?",
    options: [
      { key: "A", text: "INNER JOIN" },
      { key: "B", text: "LEFT JOIN" },
      { key: "C", text: "CROSS JOIN" },
      { key: "D", text: "FULL OUTER JOIN" }
    ],
    correctAnswer: "C",
    explanation: "CROSS JOIN generates all possible pairs of rows across tables. If table A has 10 rows and table B has 5, a CROSS JOIN produces 50 rows.",
    section: "Database"
  },
  {
    id: 1144,
    text: "Which SQL command is used to update the values in existing rows of a database table?",
    options: [
      { key: "A", text: "MODIFY" },
      { key: "B", text: "CHANGE" },
      { key: "C", text: "UPDATE" },
      { key: "D", text: "ALTER" }
    ],
    correctAnswer: "C",
    explanation: "UPDATE modifies existing values within table rows, usually filtered by a WHERE condition to target specific records.",
    section: "Database"
  },
  {
    id: 1145,
    text: "Which of the following properties of database transactions guarantees that a transaction moves the database from one valid state to another, maintaining all schema constraints?",
    options: [
      { key: "A", text: "Atomicity" },
      { key: "B", text: "Consistency" },
      { key: "C", text: "Isolation" },
      { key: "D", text: "Durability" }
    ],
    correctAnswer: "B",
    explanation: "Consistency ('C' in ACID) ensures that any transaction commits leave the database in a state that obeys all rules, foreign keys, and unique checks.",
    section: "Database"
  },
  {
    id: 1146,
    text: "What is 'Database Replication'?",
    options: [
      { key: "A", text: "Creating empty tables with identical configurations" },
      { key: "B", text: "The practice of copying data across multiple database servers to improve data availability, fault tolerance, and read performance" },
      { key: "C", text: "Normalizing tables up to BCNF automatically" },
      { key: "D", text: "Encrypting backup drive partitions" }
    ],
    correctAnswer: "B",
    explanation: "Replication copies updates from primary servers to replica nodes, distributing read queries and ensuring failover capacity.",
    section: "Database"
  },
  {
    id: 1147,
    text: "Which database index structure is most commonly used by relational query engines due to its balanced tree height and range query friendliness?",
    options: [
      { key: "A", text: "B-Tree Index" },
      { key: "B", text: "Hash Index" },
      { key: "C", text: "Inverted Index" },
      { key: "D", text: "LSM Tree Index" }
    ],
    correctAnswer: "A",
    explanation: "B-Tree (and B+ Tree) structures keep sorted data with logarithmic time complexity for lookups, insertions, and range scans, making them the standard choice for SQL databases.",
    section: "Database"
  },
  {
    id: 1148,
    text: "What is a 'Stored Procedure' in relational database systems?",
    options: [
      { key: "A", text: "A local backup copy of user table structures" },
      { key: "B", text: "A prepared set of SQL statements and procedural logic stored directly in the database catalog that can be called repeatedly" },
      { key: "C", text: "A temporary file saved on the client machine" },
      { key: "D", text: "An error log generated by full table scans" }
    ],
    correctAnswer: "B",
    explanation: "Stored procedures compile SQL statements and control flow directly on the database server, reducing network latency and improving security controls.",
    section: "Database"
  },
  {
    id: 1149,
    text: "Which SQL clause is used to restrict the maximum number of rows returned by a query?",
    options: [
      { key: "A", text: "HAVING" },
      { key: "B", text: "LIMIT (or FETCH FIRST / TOP depending on SQL dialect)" },
      { key: "C", text: "WHERE" },
      { key: "D", text: "GROUP BY" }
    ],
    correctAnswer: "B",
    explanation: "LIMIT (in PostgreSQL/MySQL), FETCH FIRST (in Oracle/SQL Server), or SELECT TOP restricts the number of returned rows.",
    section: "Database"
  },
  {
    id: 1150,
    text: "What is a 'Candidate Key' in a relational database table?",
    options: [
      { key: "A", text: "A key that has been deleted by an administrator" },
      { key: "B", text: "A minimal set of columns that can uniquely identify a row in a table, eligible to be chosen as the Primary Key" },
      { key: "C", text: "A temporary key used during table index migrations" },
      { key: "D", text: "A foreign key that points to a non-existent primary key" }
    ],
    correctAnswer: "B",
    explanation: "A candidate key is any column or combination of columns that satisfies the unique constraint. The primary key is chosen from these candidates.",
    section: "Database"
  }
];
