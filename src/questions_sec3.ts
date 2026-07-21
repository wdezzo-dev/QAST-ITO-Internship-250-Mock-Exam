import { Question } from "./types";

export const QUESTIONS_SEC3: Question[] = [
  {
    id: 101,
    text: "What does SQL stand for in database architecture?",
    options: [
      { key: "A", text: "Structured Query Language" },
      { key: "B", text: "Simple Query Language" },
      { key: "C", text: "System Query Logic" },
      { key: "D", text: "Structured Question Language" }
    ],
    correctAnswer: "A",
    explanation: "SQL (Structured Query Language) is the ANSI standard language for operating relational database management systems.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 102,
    text: "Which SQL statement is designed to fetch/retrieve records from databases?",
    options: [
      { key: "A", text: "INSERT" },
      { key: "B", text: "UPDATE" },
      { key: "C", text: "SELECT" },
      { key: "D", text: "DELETE" }
    ],
    correctAnswer: "C",
    explanation: "The SELECT statement targets, filters, and returns rows of data based on query expressions.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 103,
    text: "Which SQL statement inserts new rows into database tables?",
    options: [
      { key: "A", text: "INSERT" },
      { key: "B", text: "UPDATE" },
      { key: "C", text: "CREATE" },
      { key: "D", text: "ALTER" }
    ],
    correctAnswer: "A",
    explanation: "INSERT adds specific column-value datasets as new rows inside targeted tables.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 104,
    text: "Which SQL statement modifies existing datasets?",
    options: [
      { key: "A", text: "INSERT" },
      { key: "B", text: "UPDATE" },
      { key: "C", text: "DELETE" },
      { key: "D", text: "SELECT" }
    ],
    correctAnswer: "B",
    explanation: "UPDATE modifies columns of matching rows, usually constrained by a WHERE conditional filter.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 105,
    text: "Which SQL statement deletes records from database tables?",
    options: [
      { key: "A", text: "DELETE" },
      { key: "B", text: "DROP" },
      { key: "C", text: "REMOVE" },
      { key: "D", text: "ERASE" }
    ],
    correctAnswer: "A",
    explanation: "DELETE removes targeted records matching standard where conditional clauses.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 106,
    text: "Which SQL clause limits and filters rows prior to sorting or aggregations?",
    options: [
      { key: "A", text: "GROUP BY" },
      { key: "B", text: "ORDER BY" },
      { key: "C", text: "WHERE" },
      { key: "D", text: "LIMIT" }
    ],
    correctAnswer: "C",
    explanation: "The WHERE clause excludes non-matching records from execution evaluation streams.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 107,
    text: "Which SQL clause sorts query records chronologically or alphabetically?",
    options: [
      { key: "A", text: "ORDER BY" },
      { key: "B", text: "GROUP BY" },
      { key: "C", text: "WHERE" },
      { key: "D", text: "HAVING" }
    ],
    correctAnswer: "A",
    explanation: "ORDER BY arranges return objects ascending (ASC) or descending (DESC) based on columns.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 108,
    text: "Which built-in SQL mathematical function counts evaluated table rows?",
    options: [
      { key: "A", text: "SUM()" },
      { key: "B", text: "COUNT()" },
      { key: "C", text: "AVG()" },
      { key: "D", text: "MAX()" }
    ],
    correctAnswer: "B",
    explanation: "COUNT() returns the total record count matching criteria paths.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 109,
    text: "Which SQL keyword filters out duplicate output lines from result sets?",
    options: [
      { key: "A", text: "DISTINCT" },
      { key: "B", text: "UNIQUE" },
      { key: "C", text: "FILTER" },
      { key: "D", text: "REMOVE" }
    ],
    correctAnswer: "A",
    explanation: "DISTINCT ensures only unique variations of row datasets are returned in select pipelines.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 110,
    text: "Which SQL operator searches for specific wildcard patterns inside columns?",
    options: [
      { key: "A", text: "BETWEEN" },
      { key: "B", text: "LIKE" },
      { key: "C", text: "IN" },
      { key: "D", text: "EXISTS" }
    ],
    correctAnswer: "B",
    explanation: "The LIKE operator, along with wildcards (% and _), facilitates string match queries.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 111,
    text: "A database Primary Key must fulfill which criteria?",
    options: [
      { key: "A", text: "Duplicate" },
      { key: "B", text: "Nullable" },
      { key: "C", text: "Unique" },
      { key: "D", text: "Optional" }
    ],
    correctAnswer: "C",
    explanation: "A Primary Key uniquely identifies row instances and strictly prohibits duplicate or null entries.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 112,
    text: "What is the primary operational purpose of defining a Foreign Key?",
    options: [
      { key: "A", text: "Store passwords" },
      { key: "B", text: "Link two tables" },
      { key: "C", text: "Create indexes" },
      { key: "D", text: "Sort records" }
    ],
    correctAnswer: "B",
    explanation: "A Foreign Key establishes reference relationships, mapping keys to primary keys of remote tables.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 113,
    text: "Database normalization is mainly implemented to reduce what negative factor?",
    options: [
      { key: "A", text: "CPU usage" },
      { key: "B", text: "Data redundancy" },
      { key: "C", text: "RAM usage" },
      { key: "D", text: "Network traffic" }
    ],
    correctAnswer: "B",
    explanation: "Normalization restructures tables to eliminate duplicate redundant data and protect relational integrity.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 114,
    text: "Which Normal Form removes repeating groups and demands atomic values in all table attributes?",
    options: [
      { key: "A", text: "1NF" },
      { key: "B", text: "2NF" },
      { key: "C", text: "3NF" },
      { key: "D", text: "BCNF" }
    ],
    correctAnswer: "A",
    explanation: "First Normal Form (1NF) guarantees atomic attributes, meaning columns store single, indivisible values.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 115,
    text: "Which structural relationship layout requires creating a junction or bridge table?",
    options: [
      { key: "A", text: "One-to-One" },
      { key: "B", text: "One-to-Many" },
      { key: "C", text: "Many-to-Many" },
      { key: "D", text: "Self Join" }
    ],
    correctAnswer: "C",
    explanation: "A Many-to-Many association requires mapping connections through a separate middle junction table.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 116,
    text: "Which SQL JOIN option returns strictly records that have matching keys in both tables?",
    options: [
      { key: "A", text: "LEFT JOIN" },
      { key: "B", text: "INNER JOIN" },
      { key: "C", text: "RIGHT JOIN" },
      { key: "D", text: "FULL JOIN" }
    ],
    correctAnswer: "B",
    explanation: "INNER JOIN filters out any records that do not contain corresponding values in both tables.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 117,
    text: "Which JOIN returns all rows from the first table and matches from the second?",
    options: [
      { key: "A", text: "LEFT JOIN" },
      { key: "B", text: "INNER JOIN" },
      { key: "C", text: "CROSS JOIN" },
      { key: "D", text: "SELF JOIN" }
    ],
    correctAnswer: "A",
    explanation: "LEFT JOIN retains all rows of the left source, presenting NULL values for unmatched right columns.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 118,
    text: "Which JOIN matches every row of the left table to every row of the right table?",
    options: [
      { key: "A", text: "INNER JOIN" },
      { key: "B", text: "CROSS JOIN" },
      { key: "C", text: "LEFT JOIN" },
      { key: "D", text: "RIGHT JOIN" }
    ],
    correctAnswer: "B",
    explanation: "CROSS JOIN produces a complete Cartesian product of all rows across both datasets.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 119,
    text: "Which clause aggregates rows sharing identical values into summary rows?",
    options: [
      { key: "A", text: "ORDER BY" },
      { key: "B", text: "GROUP BY" },
      { key: "C", text: "LIMIT" },
      { key: "D", text: "WHERE" }
    ],
    correctAnswer: "B",
    explanation: "GROUP BY organizes matching data into logical segments to run aggregate math processes (e.g., SUM).",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 120,
    text: "Which clause acts as a filter on grouped datasets AFTER aggregation completes?",
    options: [
      { key: "A", text: "WHERE" },
      { key: "B", text: "GROUP BY" },
      { key: "C", text: "HAVING" },
      { key: "D", text: "ORDER BY" }
    ],
    correctAnswer: "C",
    explanation: "HAVING filters out aggregated groups, whereas WHERE only screens individual records.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 121,
    text: "What is the primary operational objective of creating a column index?",
    options: [
      { key: "A", text: "Speed up queries" },
      { key: "B", text: "Store backups" },
      { key: "C", text: "Encrypt data" },
      { key: "D", text: "Delete duplicates" }
    ],
    correctAnswer: "A",
    explanation: "Indexes speed up data queries but slightly slow down write transactions.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 122,
    text: "Which SQL statement quickly purges all rows from a table while preserving its schema structures?",
    options: [
      { key: "A", text: "DROP" },
      { key: "B", text: "DELETE" },
      { key: "C", text: "TRUNCATE" },
      { key: "D", text: "REMOVE" }
    ],
    correctAnswer: "C",
    explanation: "TRUNCATE removes all rows quickly without logging individual row deletion records.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 123,
    text: "Which SQL command deletes a table, its metadata schema, and all data permanently?",
    options: [
      { key: "A", text: "DELETE" },
      { key: "B", text: "DROP" },
      { key: "C", text: "REMOVE" },
      { key: "D", text: "CLEAR" }
    ],
    correctAnswer: "B",
    explanation: "DROP TABLE destroys the table structure, constraints, indexes, and content entirely.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 124,
    text: "Database transaction safety must fulfill which set of structural properties?",
    options: [
      { key: "A", text: "HTTP" },
      { key: "B", text: "ACID" },
      { key: "C", text: "CRUD" },
      { key: "D", text: "REST" }
    ],
    correctAnswer: "B",
    explanation: "ACID properties (Atomicity, Consistency, Isolation, Durability) ensure reliable database transactions.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 125,
    text: "What does the 'A' represent in ACID transaction metrics?",
    options: [
      { key: "A", text: "Authorization" },
      { key: "B", text: "Atomicity" },
      { key: "C", text: "Availability" },
      { key: "D", text: "Accuracy" }
    ],
    correctAnswer: "B",
    explanation: "Atomicity guarantees that a transaction is completed entirely or rolled back completely (all-or-nothing).",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 126,
    text: "Which of the following database engines represents a NoSQL (non-relational) technology?",
    options: [
      { key: "A", text: "MySQL" },
      { key: "B", text: "PostgreSQL" },
      { key: "C", text: "MongoDB" },
      { key: "D", text: "Oracle Database" }
    ],
    correctAnswer: "C",
    explanation: "MongoDB is a document-oriented NoSQL engine that stores data in flexible JSON-like documents.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 127,
    text: "How does MongoDB organize and represent data?",
    options: [
      { key: "A", text: "Tables" },
      { key: "B", text: "Documents" },
      { key: "C", text: "Rows" },
      { key: "D", text: "Sheets" }
    ],
    correctAnswer: "B",
    explanation: "MongoDB organizes data as documents within collections, rather than rows inside tables.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 128,
    text: "Which database type is optimal for highly structured relational schema models?",
    options: [
      { key: "A", text: "MongoDB" },
      { key: "B", text: "MySQL" },
      { key: "C", text: "Redis" },
      { key: "D", text: "Cassandra" }
    ],
    correctAnswer: "B",
    explanation: "Relational database engines like MySQL are ideal for enforcing strict relations and schemas.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 129,
    text: "Redis is primarily deployed to serve what type of function?",
    options: [
      { key: "A", text: "Cache" },
      { key: "B", text: "Spreadsheet" },
      { key: "C", text: "IDE" },
      { key: "D", text: "Web Browser" }
    ],
    correctAnswer: "A",
    explanation: "Redis is an in-memory key-value store widely used for low-latency caching and message broking.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 130,
    text: "Which database uses high-speed key-value formats as its core architecture?",
    options: [
      { key: "A", text: "Redis" },
      { key: "B", text: "PostgreSQL" },
      { key: "C", text: "MySQL" },
      { key: "D", text: "SQLite" }
    ],
    correctAnswer: "A",
    explanation: "Redis maps arbitrary strings directly to complex data values in memory for high-speed lookups.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 131,
    text: "What does cloud computing allow users to achieve?",
    options: [
      { key: "A", text: "Use internet-based computing resources" },
      { key: "B", text: "Increase monitor resolution" },
      { key: "C", text: "Install Windows faster" },
      { key: "D", text: "Replace RAM" }
    ],
    correctAnswer: "A",
    explanation: "Cloud computing provides on-demand delivery of server power, database storage, and apps over the internet.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 132,
    text: "Which cloud deployment model is dedicated strictly to a single organization?",
    options: [
      { key: "A", text: "Public Cloud" },
      { key: "B", text: "Private Cloud" },
      { key: "C", text: "Hybrid Cloud" },
      { key: "D", text: "Community Cloud" }
    ],
    correctAnswer: "B",
    explanation: "A Private Cloud is hosted, managed, and accessed solely by one entity, either internally or by third parties.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 133,
    text: "Which cloud model combines secure local private clouds with dynamic public cloud services?",
    options: [
      { key: "A", text: "Private" },
      { key: "B", text: "Hybrid" },
      { key: "C", text: "Local" },
      { key: "D", text: "Shared" }
    ],
    correctAnswer: "B",
    explanation: "Hybrid Clouds bridge local infrastructure and public clouds to support dynamic workload demands.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 134,
    text: "Which enterprise company developed the AWS cloud ecosystem?",
    options: [
      { key: "A", text: "Microsoft" },
      { key: "B", text: "Google" },
      { key: "C", text: "Amazon" },
      { key: "D", text: "IBM" }
    ],
    correctAnswer: "C",
    explanation: "Amazon launched and manages the comprehensive Amazon Web Services (AWS) cloud portfolio.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 135,
    text: "Which enterprise software company developed Azure?",
    options: [
      { key: "A", text: "Amazon" },
      { key: "B", text: "Microsoft" },
      { key: "C", text: "Oracle" },
      { key: "D", text: "Cisco" }
    ],
    correctAnswer: "B",
    explanation: "Microsoft developed and runs the Azure cloud hosting platform.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 136,
    text: "Which cloud delivery service model provides raw virtual servers, storage, and networking?",
    options: [
      { key: "A", text: "SaaS" },
      { key: "B", text: "IaaS" },
      { key: "C", text: "DNS" },
      { key: "D", text: "SMTP" }
    ],
    correctAnswer: "B",
    explanation: "Infrastructure as a Service (IaaS) supplies underlying compute, storage, and networking infrastructure.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 137,
    text: "Which cloud service model provides a pre-configured platform environment for web developers?",
    options: [
      { key: "A", text: "PaaS" },
      { key: "B", text: "IaaS" },
      { key: "C", text: "SaaS" },
      { key: "D", text: "FTP" }
    ],
    correctAnswer: "A",
    explanation: "Platform as a Service (PaaS) manages OS, middleware, and database frameworks so developers can focus solely on code.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 138,
    text: "Which cloud tier delivers directly functional software systems to final customers over the web?",
    options: [
      { key: "A", text: "SaaS" },
      { key: "B", text: "PaaS" },
      { key: "C", text: "IaaS" },
      { key: "D", text: "LAN" }
    ],
    correctAnswer: "A",
    explanation: "Software as a Service (SaaS) distributes ready-to-run applications over web connections, typically billed via subscriptions.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 139,
    text: "Amazon EC2 is categorized under which cloud service classification?",
    options: [
      { key: "A", text: "Database" },
      { key: "B", text: "Virtual Machine" },
      { key: "C", text: "DNS" },
      { key: "D", text: "CDN" }
    ],
    correctAnswer: "B",
    explanation: "Amazon Elastic Compute Cloud (EC2) provides resizable on-demand virtual machine servers (instances).",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 140,
    text: "What is Amazon S3 primarily designed to store?",
    options: [
      { key: "A", text: "Object Storage" },
      { key: "B", text: "Email" },
      { key: "C", text: "SQL Queries" },
      { key: "D", text: "Virtual Machines" }
    ],
    correctAnswer: "A",
    explanation: "Amazon Simple Storage Service (S3) provides cloud-based flat-namespace object storage.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 141,
    text: "What is the primary operational purpose of using Docker?",
    options: [
      { key: "A", text: "Containerization" },
      { key: "B", text: "Database Backup" },
      { key: "C", text: "Antivirus" },
      { key: "D", text: "IDE" }
    ],
    correctAnswer: "A",
    explanation: "Docker isolates and packages applications with their exact dependencies into light, portable containers.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 142,
    text: "What primary role does Kubernetes perform in modern DevOps pipelines?",
    options: [
      { key: "A", text: "Container Orchestration" },
      { key: "B", text: "Database Design" },
      { key: "C", text: "SQL Queries" },
      { key: "D", text: "Web Hosting Only" }
    ],
    correctAnswer: "A",
    explanation: "Kubernetes is an open-source system designed to automate deployment, scaling, and scheduling of container clusters.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 143,
    text: "What is a container?",
    options: [
      { key: "A", text: "A lightweight isolated application environment" },
      { key: "B", text: "A physical server" },
      { key: "C", text: "A database table" },
      { key: "D", text: "A network cable" }
    ],
    correctAnswer: "A",
    explanation: "Containers package application files and run isolated on a shared OS kernel, making them lightweight and portable.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 144,
    text: "What does the DevOps abbreviation CI/CD stand for?",
    options: [
      { key: "A", text: "Continuous Integration / Continuous Deployment" },
      { key: "B", text: "Central Internet Connection" },
      { key: "C", text: "Computer Integrated Design" },
      { key: "D", text: "Continuous Internal Database" }
    ],
    correctAnswer: "A",
    explanation: "CI/CD automates code integration, testing, build verification, and server deployment.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 145,
    text: "What is the primary role of GitHub Actions in software development?",
    options: [
      { key: "A", text: "CI/CD Automation" },
      { key: "B", text: "Database Storage" },
      { key: "C", text: "DNS Management" },
      { key: "D", text: "Operating Systems" }
    ],
    correctAnswer: "A",
    explanation: "GitHub Actions runs automated script workflows directly on repository triggers, facilitating continuous testing and deployment.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 146,
    text: "Which SQL command is used to instantiate a new database table?",
    options: [
      { key: "A", text: "CREATE TABLE" },
      { key: "B", text: "NEW TABLE" },
      { key: "C", text: "MAKE TABLE" },
      { key: "D", text: "ADD TABLE" }
    ],
    correctAnswer: "A",
    explanation: "CREATE TABLE sets up table names, column constraints, and primitive types.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 147,
    text: "Which SQL statement modifies columns or structures of an existing table?",
    options: [
      { key: "A", text: "ALTER TABLE" },
      { key: "B", text: "UPDATE TABLE" },
      { key: "C", text: "MODIFY TABLE" },
      { key: "D", text: "CHANGE TABLE" }
    ],
    correctAnswer: "A",
    explanation: "ALTER TABLE appends, deletes, or adjusts existing columns, parameters, and key relationships.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 148,
    text: "Which cloud technology provider developed the GCP ecosystem?",
    options: [
      { key: "A", text: "Amazon" },
      { key: "B", text: "Microsoft" },
      { key: "C", text: "Google" },
      { key: "D", text: "Oracle" }
    ],
    correctAnswer: "C",
    explanation: "GCP stands for Google Cloud Platform, Google's public cloud hosting ecosystem.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 149,
    text: "Which AWS service provides managed relational databases?",
    options: [
      { key: "A", text: "EC2" },
      { key: "B", text: "RDS" },
      { key: "C", text: "S3" },
      { key: "D", text: "Lambda" }
    ],
    correctAnswer: "B",
    explanation: "Amazon Relational Database Service (RDS) hosts and operates engines like Postgres and MySQL, automating patches and backups.",
    section: "Databases & Cloud Infrastructure"
  },
  {
    id: 150,
    text: "Which database practice provides the most significant improvement to query search speeds?",
    options: [
      { key: "A", text: "Proper indexing" },
      { key: "B", text: "Using longer passwords" },
      { key: "C", text: "Increasing monitor size" },
      { key: "D", text: "Deleting backups" }
    ],
    correctAnswer: "A",
    explanation: "Creating indexes prevents the engine from performing slow full-table scans, drastically speeding up queries.",
    section: "Databases & Cloud Infrastructure"
  }
];
