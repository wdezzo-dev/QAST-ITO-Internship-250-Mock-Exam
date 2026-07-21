import { Question } from "./types";

export const QUESTIONS_SEC1: Question[] = [
  {
    id: 1,
    text: "Which of the following is not a programming language?",
    options: [
      { key: "A", text: "Python" },
      { key: "B", text: "Java" },
      { key: "C", text: "HTML" },
      { key: "D", text: "C#" }
    ],
    correctAnswer: "C",
    explanation: "HTML is a markup language, not a programming language.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 2,
    text: "What is the output of the following Python code?\n\nx = 10\ny = 5\nprint(x // y)",
    options: [
      { key: "A", text: "2" },
      { key: "B", text: "2.0" },
      { key: "C", text: "2.5" },
      { key: "D", text: "Error" }
    ],
    correctAnswer: "A",
    explanation: "// performs integer (floor) division in Python, yielding an integer rather than a float.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 3,
    text: "Which data structure stores elements in key-value pairs?",
    options: [
      { key: "A", text: "List" },
      { key: "B", text: "Tuple" },
      { key: "C", text: "Dictionary" },
      { key: "D", text: "Set" }
    ],
    correctAnswer: "C",
    explanation: "Dictionaries store data as key-value pairs for high-performance direct mapping.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 4,
    text: "Which loop executes at least once before checking the condition?",
    options: [
      { key: "A", text: "for" },
      { key: "B", text: "while" },
      { key: "C", text: "do...while" },
      { key: "D", text: "foreach" }
    ],
    correctAnswer: "C",
    explanation: "do...while loops execute their statement blocks once before checking the conditional statement.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 5,
    text: "What does OOP stand for?",
    options: [
      { key: "A", text: "Object Oriented Programming" },
      { key: "B", text: "Open Operating Process" },
      { key: "C", text: "Object Operating Program" },
      { key: "D", text: "Operational Object Programming" }
    ],
    correctAnswer: "A",
    explanation: "OOP stands for Object Oriented Programming, structured around classes and objects.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 6,
    text: "Which keyword creates an object in Java?",
    options: [
      { key: "A", text: "class" },
      { key: "B", text: "new" },
      { key: "C", text: "object" },
      { key: "D", text: "create" }
    ],
    correctAnswer: "B",
    explanation: "The new keyword instantiates an object and allocates memory space on the heap.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 7,
    text: "Which access modifier allows access from anywhere?",
    options: [
      { key: "A", text: "private" },
      { key: "B", text: "protected" },
      { key: "C", text: "public" },
      { key: "D", text: "default" }
    ],
    correctAnswer: "C",
    explanation: "public members are accessible from any other classes or packages in the environment.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 8,
    text: "Which method is the entry point of a Java program?",
    options: [
      { key: "A", text: "start()" },
      { key: "B", text: "execute()" },
      { key: "C", text: "main()" },
      { key: "D", text: "run()" }
    ],
    correctAnswer: "C",
    explanation: "public static void main(String[] args) is the default entry point of a Java runtime environment.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 9,
    text: "Which is not a primitive type in Java?",
    options: [
      { key: "A", text: "int" },
      { key: "B", text: "double" },
      { key: "C", text: "String" },
      { key: "D", text: "char" }
    ],
    correctAnswer: "C",
    explanation: "String is an instantiated class object reference in Java, not a primitive type.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 10,
    text: "Which collection in Java allows duplicate elements?",
    options: [
      { key: "A", text: "Set" },
      { key: "B", text: "HashSet" },
      { key: "C", text: "List" },
      { key: "D", text: "TreeSet" }
    ],
    correctAnswer: "C",
    explanation: "Lists allow duplicate elements and preserve insertion order, unlike Set implementations.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 11,
    text: "What is the output of the following Python statement?\n\nprint(len(\"Hello\"))",
    options: [
      { key: "A", text: "4" },
      { key: "B", text: "5" },
      { key: "C", text: "6" },
      { key: "D", text: "Error" }
    ],
    correctAnswer: "B",
    explanation: "The string \"Hello\" has five characters, so len() returns 5.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 12,
    text: "How do you define a function in Python?",
    options: [
      { key: "A", text: "function test():" },
      { key: "B", text: "def test():" },
      { key: "C", text: "func test():" },
      { key: "D", text: "create test():" }
    ],
    correctAnswer: "B",
    explanation: "def is the Python keyword specifically used for defining a standard function.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 13,
    text: "Which statement block handles exceptions in Python?",
    options: [
      { key: "A", text: "catch" },
      { key: "B", text: "error" },
      { key: "C", text: "try-except" },
      { key: "D", text: "except-only" }
    ],
    correctAnswer: "C",
    explanation: "Python utilizes try and except block keywords to capture and handle runtime exceptions.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 14,
    text: "Which Python data type is immutable?",
    options: [
      { key: "A", text: "List" },
      { key: "B", text: "Dictionary" },
      { key: "C", text: "Tuple" },
      { key: "D", text: "Set" }
    ],
    correctAnswer: "C",
    explanation: "Tuples are immutable; they cannot be altered, appended, or modified after creation.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 15,
    text: "Which keyword imports a module in Python?",
    options: [
      { key: "A", text: "using" },
      { key: "B", text: "include" },
      { key: "C", text: "import" },
      { key: "D", text: "require" }
    ],
    correctAnswer: "C",
    explanation: "The import statement brings code modules, packages, or specific libraries into scope.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 16,
    text: "Which company developed JavaScript?",
    options: [
      { key: "A", text: "Microsoft" },
      { key: "B", text: "Netscape" },
      { key: "C", text: "Google" },
      { key: "D", text: "IBM" }
    ],
    correctAnswer: "B",
    explanation: "JavaScript was designed and developed at Netscape by Brendan Eich in 1995.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 17,
    text: "Which keyword declares a block-scoped variable in JavaScript?",
    options: [
      { key: "A", text: "var" },
      { key: "B", text: "let" },
      { key: "C", text: "define" },
      { key: "D", text: "static" }
    ],
    correctAnswer: "B",
    explanation: "let (along with const) declares a block-scoped variable, preventing scope leakage unlike var.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 18,
    text: "Which symbol is used for strict equality in JavaScript?",
    options: [
      { key: "A", text: "=" },
      { key: "B", text: "==" },
      { key: "C", text: "===" },
      { key: "D", text: ":=" }
    ],
    correctAnswer: "C",
    explanation: "The triple equals (===) performs strict comparison, evaluating both value and data type.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 19,
    text: "What does DOM stand for?",
    options: [
      { key: "A", text: "Data Object Model" },
      { key: "B", text: "Document Object Model" },
      { key: "C", text: "Dynamic Object Method" },
      { key: "D", text: "Document Oriented Method" }
    ],
    correctAnswer: "B",
    explanation: "DOM stands for Document Object Model, which represents web pages as a node structure tree.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 20,
    text: "Which function prints to the browser developer console in JavaScript?",
    options: [
      { key: "A", text: "print()" },
      { key: "B", text: "console.log()" },
      { key: "C", text: "echo()" },
      { key: "D", text: "printf()" }
    ],
    correctAnswer: "B",
    explanation: "console.log() outputs information directly to the developer inspect environment console.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 21,
    text: "Which HTML tag creates a hyperlink?",
    options: [
      { key: "A", text: "<href>" },
      { key: "B", text: "<a>" },
      { key: "C", text: "<link>" },
      { key: "D", text: "<url>" }
    ],
    correctAnswer: "B",
    explanation: "The anchor tag (<a>) along with the href parameter specifies a destination hyperlink address.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 22,
    text: "Which HTML tag displays the largest heading?",
    options: [
      { key: "A", text: "<h6>" },
      { key: "B", text: "<heading>" },
      { key: "C", text: "<h1>" },
      { key: "D", text: "<title>" }
    ],
    correctAnswer: "C",
    explanation: "<h1> is the highest hierarchy level header element on an HTML page.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 23,
    text: "Which CSS property changes text color?",
    options: [
      { key: "A", text: "font-color" },
      { key: "B", text: "text-color" },
      { key: "C", text: "color" },
      { key: "D", text: "foreground" }
    ],
    correctAnswer: "C",
    explanation: "The CSS 'color' property assigns font forecolor values to matching elements.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 24,
    text: "Which property makes an element a flex container?",
    options: [
      { key: "A", text: "display: flex;" },
      { key: "B", text: "position: flex;" },
      { key: "C", text: "flex: true;" },
      { key: "D", text: "layout: flex;" }
    ],
    correctAnswer: "A",
    explanation: "display: flex; formats the targeted container as a flexible block, aligning inner child nodes.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 25,
    text: "Which CSS selector targets an element with id=\"main\"?",
    options: [
      { key: "A", text: ".main" },
      { key: "B", text: "#main" },
      { key: "C", text: "*main" },
      { key: "D", text: "main#" }
    ],
    correctAnswer: "B",
    explanation: "The hash symbol (#) designates an ID-specific target match inside stylesheet files.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 26,
    text: "React is mainly used for which of the following?",
    options: [
      { key: "A", text: "Databases" },
      { key: "B", text: "Backend APIs" },
      { key: "C", text: "Building User Interfaces" },
      { key: "D", text: "Operating Systems" }
    ],
    correctAnswer: "C",
    explanation: "React is a modular client-side framework used primarily to manage and build dynamic user interfaces.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 27,
    text: "Which hook manages state inside React functional components?",
    options: [
      { key: "A", text: "useData()" },
      { key: "B", text: "useState()" },
      { key: "C", text: "useValue()" },
      { key: "D", text: "useStorage()" }
    ],
    correctAnswer: "B",
    explanation: "useState declares local mutable variables, triggering component re-renders when updated.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 28,
    text: "JSX stands for which of the following terms?",
    options: [
      { key: "A", text: "Java XML" },
      { key: "B", text: "JavaScript XML" },
      { key: "C", text: "JSON XML" },
      { key: "D", text: "Java Syntax XML" }
    ],
    correctAnswer: "B",
    explanation: "JSX stands for JavaScript XML, allowing developers to write HTML-like formats directly inside JS scripts.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 29,
    text: "In React, what are props?",
    options: [
      { key: "A", text: "Functions" },
      { key: "B", text: "Variables" },
      { key: "C", text: "Read-only inputs" },
      { key: "D", text: "Components" }
    ],
    correctAnswer: "C",
    explanation: "Props (properties) are read-only input parameters passed from a parent component down to children.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 30,
    text: "Which hook runs side effects (e.g., fetching data, setup event listeners) in functional React?",
    options: [
      { key: "A", text: "useState()" },
      { key: "B", text: "useRef()" },
      { key: "C", text: "useEffect()" },
      { key: "D", text: "useMemo()" }
    ],
    correctAnswer: "C",
    explanation: "useEffect facilitates off-flow tasks such as API data fetching, subscriptions, and DOM updates.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 31,
    text: "Where does Node.js execute JavaScript code?",
    options: [
      { key: "A", text: "In browsers only" },
      { key: "B", text: "On servers" },
      { key: "C", text: "Inside SQL" },
      { key: "D", text: "Inside Java" }
    ],
    correctAnswer: "B",
    explanation: "Node.js is an open-source runtime container that executes JavaScript on host computers (servers).",
    section: "Software Development & Web Technologies"
  },
  {
    id: 32,
    text: "Which Node.js built-in module creates an HTTP web server?",
    options: [
      { key: "A", text: "express" },
      { key: "B", text: "http" },
      { key: "C", text: "server" },
      { key: "D", text: "node" }
    ],
    correctAnswer: "B",
    explanation: "The core http module provides functions and events necessary to handle and respond to web client requests.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 33,
    text: "Which package manager is default for Node.js environments?",
    options: [
      { key: "A", text: "pip" },
      { key: "B", text: "npm" },
      { key: "C", text: "apt" },
      { key: "D", text: "gradle" }
    ],
    correctAnswer: "B",
    explanation: "npm (Node Package Manager) coordinates third-party module installations and tracking.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 34,
    text: "Express is primarily used to build what type of software components?",
    options: [
      { key: "A", text: "Games" },
      { key: "B", text: "APIs" },
      { key: "C", text: "Databases" },
      { key: "D", text: "Mobile Apps" }
    ],
    correctAnswer: "B",
    explanation: "Express is a fast, unopinionated minimalist framework for creating web APIs and backend controllers.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 35,
    text: "Which command installs all project dependencies declared inside package.json?",
    options: [
      { key: "A", text: "npm install" },
      { key: "B", text: "npm run" },
      { key: "C", text: "npm update" },
      { key: "D", text: "node install" }
    ],
    correctAnswer: "A",
    explanation: "npm install reads package.json and updates the local node_modules library tree.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 36,
    text: "GET requests in web technology are primarily intended to perform which action?",
    options: [
      { key: "A", text: "Delete data" },
      { key: "B", text: "Retrieve data" },
      { key: "C", text: "Update data" },
      { key: "D", text: "Create data" }
    ],
    correctAnswer: "B",
    explanation: "GET methods should only fetch data representations without modifying any database states.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 37,
    text: "POST requests are typically utilized to do what?",
    options: [
      { key: "A", text: "Read" },
      { key: "B", text: "Delete" },
      { key: "C", text: "Create" },
      { key: "D", text: "Cache" }
    ],
    correctAnswer: "C",
    explanation: "POST transmits body data payloads to create new resources on server endpoints.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 38,
    text: "What does HTTP status code 404 signify?",
    options: [
      { key: "A", text: "Success" },
      { key: "B", text: "Unauthorized" },
      { key: "C", text: "Not Found" },
      { key: "D", text: "Server Error" }
    ],
    correctAnswer: "C",
    explanation: "HTTP 404 indicates the host connected successfully but could not match the requested endpoint url.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 39,
    text: "What does HTTP status code 500 signify?",
    options: [
      { key: "A", text: "Client Error" },
      { key: "B", text: "Success" },
      { key: "C", text: "Redirect" },
      { key: "D", text: "Internal Server Error" }
    ],
    correctAnswer: "D",
    explanation: "500 is a generic catch-all indicator representing uncaught errors occurring on the server.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 40,
    text: "What does REST stand for in web API architecture?",
    options: [
      { key: "A", text: "Representational State Transfer" },
      { key: "B", text: "Remote Service Transfer" },
      { key: "C", text: "Resource State Terminal" },
      { key: "D", text: "Remote State Technique" }
    ],
    correctAnswer: "A",
    explanation: "REST stands for Representational State Transfer, utilizing HTTP verbs to operate on target resources.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 41,
    text: "Git is mainly used for which operation in software engineering?",
    options: [
      { key: "A", text: "Cloud Storage" },
      { key: "B", text: "Version Control" },
      { key: "C", text: "Database Management" },
      { key: "D", text: "Hosting" }
    ],
    correctAnswer: "B",
    explanation: "Git is a distributed version control engine used to track and merge source code file histories.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 42,
    text: "Which command pulls down a remote repository onto your local workstation storage?",
    options: [
      { key: "A", text: "git pull" },
      { key: "B", text: "git clone" },
      { key: "C", text: "git commit" },
      { key: "D", text: "git push" }
    ],
    correctAnswer: "B",
    explanation: "git clone duplicates remote repository files, logs, and branch mappings locally.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 43,
    text: "Which Agile/Scrum meeting happens on a daily basis for status coordination?",
    options: [
      { key: "A", text: "Sprint Planning" },
      { key: "B", text: "Daily Stand-up" },
      { key: "C", text: "Sprint Review" },
      { key: "D", text: "Retrospective" }
    ],
    correctAnswer: "B",
    explanation: "The Daily Stand-up is a quick sync to coordinate achievements, upcoming targets, and bottlenecks.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 44,
    text: "Which software design principle stands for 'Don't Repeat Yourself'?",
    options: [
      { key: "A", text: "SOLID" },
      { key: "B", text: "DRY" },
      { key: "C", text: "KISS" },
      { key: "D", text: "OOP" }
    ],
    correctAnswer: "B",
    explanation: "DRY (Don't Repeat Yourself) advocates for abstracting code patterns to avoid duplicate functional states.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 45,
    text: "What type of testing validates individual functions or small units in isolation?",
    options: [
      { key: "A", text: "Integration Testing" },
      { key: "B", text: "Unit Testing" },
      { key: "C", text: "System Testing" },
      { key: "D", text: "Acceptance Testing" }
    ],
    correctAnswer: "B",
    explanation: "Unit Testing targets the smallest testable logic elements to prove correct programmatic behavior.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 46,
    text: "What is the worst-case time complexity of binary search on a sorted array?",
    options: [
      { key: "A", text: "O(n)" },
      { key: "B", text: "O(log n)" },
      { key: "C", text: "O(n²)" },
      { key: "D", text: "O(1)" }
    ],
    correctAnswer: "B",
    explanation: "Binary search repeatedly splits search areas in half, achieving highly efficient O(log n) runtimes.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 47,
    text: "Which data structure operates on a First-In, First-Out (FIFO) principle?",
    options: [
      { key: "A", text: "Stack" },
      { key: "B", text: "Queue" },
      { key: "C", text: "Tree" },
      { key: "D", text: "Graph" }
    ],
    correctAnswer: "B",
    explanation: "Queues enforce FIFO ordering: elements appended first are processed and exited first.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 48,
    text: "Which data structure operates on a Last-In, First-Out (LIFO) principle?",
    options: [
      { key: "A", text: "Queue" },
      { key: "B", text: "Array" },
      { key: "C", text: "Stack" },
      { key: "D", text: "Linked List" }
    ],
    correctAnswer: "C",
    explanation: "Stacks utilize LIFO ordering: the most recently stored element is popped first.",
    section: "Software Development & Web Technologies"
  },
  {
    id: 49,
    text: "Which sorting algorithm achieves an average time complexity of O(n log n)?",
    options: [
      { key: "A", text: "Bubble Sort" },
      { key: "B", text: "Merge Sort" },
      { key: "C", text: "Selection Sort" },
      { key: "D", text: "Insertion Sort" }
    ],
    correctAnswer: "B",
    explanation: "Merge Sort splits arrays recursively and merges sorted halves, performing stably at O(n log n).",
    section: "Software Development & Web Technologies"
  },
  {
    id: 50,
    text: "Which practice helps systematically prevent bugs during the lifecycle of an application?",
    options: [
      { key: "A", text: "Writing no comments" },
      { key: "B", text: "Version control" },
      { key: "C", text: "Skipping testing" },
      { key: "D", text: "Hardcoding values" }
    ],
    correctAnswer: "B",
    explanation: "Using version control tracks project histories, facilitating team code reviews and error isolation.",
    section: "Software Development & Web Technologies"
  }
];
