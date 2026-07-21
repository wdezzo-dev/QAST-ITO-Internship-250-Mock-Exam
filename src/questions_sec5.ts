import { Question } from "./types";

export const QUESTIONS_SEC5: Question[] = [
  {
    id: 201,
    text: "What is an algorithm?",
    options: [
      { key: "A", text: "A step-by-step set of instructions to solve a problem" },
      { key: "B", text: "A computer keyboard" },
      { key: "C", text: "A database table" },
      { key: "D", text: "A programming language" }
    ],
    correctAnswer: "A",
    explanation: "An algorithm is a precise, finite sequence of step-by-step instructions designed to solve a specific problem.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 202,
    text: "Which of the following is a fundamental programming loop structure?",
    options: [
      { key: "A", text: "for" },
      { key: "B", text: "if" },
      { key: "C", text: "switch" },
      { key: "D", text: "let" }
    ],
    correctAnswer: "A",
    explanation: "A 'for' loop is an iterative control flow structure used to execute code blocks repeatedly.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 203,
    text: "What is the binary value of the decimal number 5?",
    options: [
      { key: "A", text: "101" },
      { key: "B", text: "100" },
      { key: "C", text: "110" },
      { key: "D", text: "111" }
    ],
    correctAnswer: "A",
    explanation: "In binary representation, 5 is calculated as (1 * 4) + (0 * 2) + (1 * 1) which translates to 101.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 204,
    text: "What does CPU stand for?",
    options: [
      { key: "A", text: "Central Processing Unit" },
      { key: "B", text: "Computer Processing Unit" },
      { key: "C", text: "Central Process Program" },
      { key: "D", text: "Computer Process Program" }
    ],
    correctAnswer: "A",
    explanation: "CPU stands for Central Processing Unit, the hardware core that executes instruction sets.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 205,
    text: "What does RAM stand for?",
    options: [
      { key: "A", text: "Random Access Memory" },
      { key: "B", text: "Read Access Memory" },
      { key: "C", text: "Random Active Memory" },
      { key: "D", text: "Read Active Memory" }
    ],
    correctAnswer: "A",
    explanation: "RAM stands for Random Access Memory, high-speed volatile storage used for active runtime applications.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 206,
    text: "What type of data is volatile and is lost when a computer is powered down?",
    options: [
      { key: "A", text: "RAM" },
      { key: "B", text: "SSD" },
      { key: "C", text: "HDD" },
      { key: "D", text: "ROM" }
    ],
    correctAnswer: "A",
    explanation: "RAM is volatile memory, requiring electrical current to retain its active state values.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 207,
    text: "Which numbering system uses base-16 representations?",
    options: [
      { key: "A", text: "Hexadecimal" },
      { key: "B", text: "Binary" },
      { key: "C", text: "Octal" },
      { key: "D", text: "Decimal" }
    ],
    correctAnswer: "A",
    explanation: "Hexadecimal uses digits 0-9 and letters A-F to represent numbers using base 16.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 208,
    text: "Which of the following represents a primitive data type?",
    options: [
      { key: "A", text: "Integer" },
      { key: "B", text: "Class" },
      { key: "C", text: "Interface" },
      { key: "D", text: "Array" }
    ],
    correctAnswer: "A",
    explanation: "An Integer is a basic, primitive value type representing whole numbers.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 209,
    text: "What value does a Boolean data type represent?",
    options: [
      { key: "A", text: "True or False" },
      { key: "B", text: "Numbers" },
      { key: "C", text: "Text strings" },
      { key: "D", text: "Arrays" }
    ],
    correctAnswer: "A",
    explanation: "Booleans are logical operators that evaluate to exactly one of two values: True or False.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 210,
    text: "What does compilation do in software engineering?",
    options: [
      { key: "A", text: "Converts source code into machine code" },
      { key: "B", text: "Deletes code files" },
      { key: "C", text: "Saves backups" },
      { key: "D", text: "Creates databases" }
    ],
    correctAnswer: "A",
    explanation: "Compilers translate human-readable source code into binary machine instructions executed by processor hardware.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 211,
    text: "What is an IDE?",
    options: [
      { key: "A", text: "Integrated Development Environment" },
      { key: "B", text: "Internet Design Engine" },
      { key: "C", text: "Integrated Database Engine" },
      { key: "D", text: "Internal Device Driver" }
    ],
    correctAnswer: "A",
    explanation: "An IDE provides tools (e.g., editors, debuggers, compilers) in a single unified interface.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 212,
    text: "Which program runs human-readable code line-by-line at runtime, without ahead-of-time compilation?",
    options: [
      { key: "A", text: "Interpreter" },
      { key: "B", text: "Compiler" },
      { key: "C", text: "Linker" },
      { key: "D", text: "Hardware" }
    ],
    correctAnswer: "A",
    explanation: "Interpreters parse and execute instructions sequentially, bypassing compilation phases.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 213,
    text: "What is a bug in computer programming?",
    options: [
      { key: "A", text: "An error in software causing incorrect behavior" },
      { key: "B", text: "A physical computer wire" },
      { key: "C", text: "A database query" },
      { key: "D", text: "A keyboard key" }
    ],
    correctAnswer: "A",
    explanation: "A bug is a syntax, runtime, or logical error that causes programs to produce incorrect or unexpected results.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 214,
    text: "What does debugging achieve?",
    options: [
      { key: "A", text: "Finding and resolving bugs" },
      { key: "B", text: "Writing new features" },
      { key: "C", text: "Installing updates" },
      { key: "D", text: "Compressing files" }
    ],
    correctAnswer: "A",
    explanation: "Debugging is the systematic process of identifying, isolating, and fixing bugs in code.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 215,
    text: "Which of the following is a classic high-level programming language?",
    options: [
      { key: "A", text: "Python" },
      { key: "B", text: "HTML" },
      { key: "C", text: "CSS" },
      { key: "D", text: "SQL" }
    ],
    correctAnswer: "A",
    explanation: "Python is a high-level programming language featuring abstract syntax structures that are intuitive for humans.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 216,
    text: "What does the abbreviation OOP stand for?",
    options: [
      { key: "A", text: "Object-Oriented Programming" },
      { key: "B", text: "Official Operating Program" },
      { key: "C", text: "Open-source Operational Portal" },
      { key: "D", text: "Object-Oriented Protocol" }
    ],
    correctAnswer: "A",
    explanation: "OOP (Object-Oriented Programming) is a programming paradigm built around objects and classes.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 217,
    text: "What OOP concept hides internal state details, requiring all interaction to occur via public methods?",
    options: [
      { key: "A", text: "Encapsulation" },
      { key: "B", text: "Inheritance" },
      { key: "C", text: "Polymorphism" },
      { key: "D", text: "Abstraction" }
    ],
    correctAnswer: "A",
    explanation: "Encapsulation bundles data attributes and methods inside objects, restricting direct external access.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 218,
    text: "What OOP concept lets a new class inherit properties and behaviors from an existing parent class?",
    options: [
      { key: "A", text: "Inheritance" },
      { key: "B", text: "Encapsulation" },
      { key: "C", text: "Polymorphism" },
      { key: "D", text: "Composition" }
    ],
    correctAnswer: "A",
    explanation: "Inheritance facilitates code reuse by letting subclass definitions inherit fields and methods from a superclass.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 219,
    text: "What OOP concept allows a single interface or method signature to have multiple underlying implementations?",
    options: [
      { key: "A", text: "Polymorphism" },
      { key: "B", text: "Encapsulation" },
      { key: "C", text: "Inheritance" },
      { key: "D", text: "Cohesion" }
    ],
    correctAnswer: "A",
    explanation: "Polymorphism lets child classes override parent behaviors while sharing the same method name.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 220,
    text: "What blueprint structure is used to instantiate objects in OOP?",
    options: [
      { key: "A", text: "Class" },
      { key: "B", text: "Method" },
      { key: "C", text: "Variable" },
      { key: "D", text: "Interface" }
    ],
    correctAnswer: "A",
    explanation: "A Class is a template or blueprint that defines the initial properties and methods of instantiated objects.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 221,
    text: "What index is used to access the very first element of an array in most languages?",
    options: [
      { key: "A", text: "0" },
      { key: "B", text: "1" },
      { key: "C", text: "-1" },
      { key: "D", text: "A" }
    ],
    correctAnswer: "A",
    explanation: "Most programming languages use zero-based indexing, meaning the first array item is located at index 0.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 222,
    text: "Which linear data structure follows the LIFO (Last-In, First-Out) principle?",
    options: [
      { key: "A", text: "Stack" },
      { key: "B", text: "Queue" },
      { key: "C", text: "Linked List" },
      { key: "D", text: "Array" }
    ],
    correctAnswer: "A",
    explanation: "A Stack restricts data mutations to one end, ensuring the last item added is the first one retrieved.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 223,
    text: "Which linear data structure follows the FIFO (First-In, First-Out) principle?",
    options: [
      { key: "A", text: "Queue" },
      { key: "B", text: "Stack" },
      { key: "C", text: "Tree" },
      { key: "D", text: "Graph" }
    ],
    correctAnswer: "A",
    explanation: "A Queue appends new items to the back and removes items from the front, processing elements in order of arrival.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 224,
    text: "What type of data structure consists of nodes connected by pointers, where each node points to the next?",
    options: [
      { key: "A", text: "Linked List" },
      { key: "B", text: "Array" },
      { key: "C", text: "Stack" },
      { key: "D", text: "Queue" }
    ],
    correctAnswer: "A",
    explanation: "A Linked List links nodes sequentially using memory pointers, rather than using contiguous memory blocks like arrays.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 225,
    text: "Which data structure maps unique keys to values for fast O(1) average lookup speeds?",
    options: [
      { key: "A", text: "Hash Table" },
      { key: "B", text: "Linked List" },
      { key: "C", text: "Binary Tree" },
      { key: "D", text: "Stack" }
    ],
    correctAnswer: "A",
    explanation: "Hash Tables use hash functions to map keys directly to array buckets, enabling fast constant-time lookups.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 226,
    text: "What does recursion do in computer programming?",
    options: [
      { key: "A", text: "A function calls itself" },
      { key: "B", text: "A loop that never ends" },
      { key: "C", text: "An error in compilation" },
      { key: "D", text: "A database query" }
    ],
    correctAnswer: "A",
    explanation: "Recursion is a programming technique where a function calls itself to break down a problem into smaller subproblems.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 227,
    text: "What critical component prevents recursive functions from executing indefinitely and crashing?",
    options: [
      { key: "A", text: "Base case" },
      { key: "B", text: "Loop counter" },
      { key: "C", text: "Pointer" },
      { key: "D", text: "Database connection" }
    ],
    correctAnswer: "A",
    explanation: "The base case defines a terminating condition that stops recursion and returns a value.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 228,
    text: "What is the Big O time complexity of a standard Binary Search algorithm?",
    options: [
      { key: "A", text: "O(log n)" },
      { key: "B", text: "O(n)" },
      { key: "C", text: "O(n log n)" },
      { key: "D", text: "O(n²)" }
    ],
    correctAnswer: "A",
    explanation: "Binary Search halves the remaining search range in each step, achieving logarithmic O(log n) time complexity.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 229,
    text: "What is the worst-case time complexity of a standard Bubble Sort algorithm?",
    options: [
      { key: "A", text: "O(n²)" },
      { key: "B", text: "O(n)" },
      { key: "C", text: "O(n log n)" },
      { key: "D", text: "O(log n)" }
    ],
    correctAnswer: "A",
    explanation: "Bubble Sort uses nested loops to compare adjacent elements, resulting in quadratic O(n²) time complexity.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 230,
    text: "Which of the following sorting algorithms utilizes a Divide-and-Conquer approach to achieve O(n log n) efficiency?",
    options: [
      { key: "A", text: "Merge Sort" },
      { key: "B", text: "Bubble Sort" },
      { key: "C", text: "Insertion Sort" },
      { key: "D", text: "Selection Sort" }
    ],
    correctAnswer: "A",
    explanation: "Merge Sort splits arrays in half, sorts the sub-arrays recursively, and merges them back together in linear time.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 231,
    text: "What is the binary representation of decimal number 2?",
    options: [
      { key: "A", text: "10" },
      { key: "B", text: "01" },
      { key: "C", text: "11" },
      { key: "D", text: "00" }
    ],
    correctAnswer: "A",
    explanation: "Decimal 2 is represented as 10 in binary: (1 * 2¹) + (0 * 2⁰).",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 232,
    text: "What is the binary representation of decimal number 10?",
    options: [
      { key: "A", text: "1010" },
      { key: "B", text: "1001" },
      { key: "C", text: "1100" },
      { key: "D", text: "1111" }
    ],
    correctAnswer: "A",
    explanation: "Decimal 10 is represented as 1010 in binary: (1 * 8) + (0 * 4) + (1 * 2) + (0 * 1).",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 233,
    text: "How many bits are in a single standard byte?",
    options: [
      { key: "A", text: "8" },
      { key: "B", text: "4" },
      { key: "C", text: "16" },
      { key: "D", text: "32" }
    ],
    correctAnswer: "A",
    explanation: "A standard byte consists of exactly 8 bits, which can represent up to 256 unique values.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 234,
    text: "Which logic gate outputs true ONLY if both input parameters are true?",
    options: [
      { key: "A", text: "AND" },
      { key: "B", text: "OR" },
      { key: "C", text: "XOR" },
      { key: "D", text: "NOT" }
    ],
    correctAnswer: "A",
    explanation: "An AND gate outputs high/true only when both inputs are high/true.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 235,
    text: "Which logic gate outputs true if at least one of the inputs is true?",
    options: [
      { key: "A", text: "OR" },
      { key: "B", text: "AND" },
      { key: "C", text: "NOT" },
      { key: "D", text: "NAND" }
    ],
    correctAnswer: "A",
    explanation: "An OR gate outputs true if either input (or both) is true.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 236,
    text: "Which logic gate inverts its input signal?",
    options: [
      { key: "A", text: "NOT" },
      { key: "B", text: "AND" },
      { key: "C", text: "OR" },
      { key: "D", text: "XOR" }
    ],
    correctAnswer: "A",
    explanation: "A NOT gate is an inverter that outputs the logical negation of its input.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 237,
    text: "Which logic gate outputs true if the inputs are different, and false if they are the same?",
    options: [
      { key: "A", text: "XOR" },
      { key: "B", text: "AND" },
      { key: "C", text: "OR" },
      { key: "D", text: "NOT" }
    ],
    correctAnswer: "A",
    explanation: "The XOR (Exclusive OR) gate outputs true only when its inputs differ.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 238,
    text: "What does the abbreviation RAM stand for in computer hardware?",
    options: [
      { key: "A", text: "Random Access Memory" },
      { key: "B", text: "Read Access Memory" },
      { key: "C", text: "Random Active Memory" },
      { key: "D", text: "Read Active Memory" }
    ],
    correctAnswer: "A",
    explanation: "RAM stands for Random Access Memory, a fast volatile storage medium.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 239,
    text: "What does CPU stand for in computer hardware?",
    options: [
      { key: "A", text: "Central Processing Unit" },
      { key: "B", text: "Computer Processing Unit" },
      { key: "C", text: "Central Process Program" },
      { key: "D", text: "Computer Process Program" }
    ],
    correctAnswer: "A",
    explanation: "The CPU is the central processing unit responsible for executing system instructions.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 240,
    text: "What type of data structure consists of nodes organized in a parent-child hierarchy?",
    options: [
      { key: "A", text: "Tree" },
      { key: "B", text: "Array" },
      { key: "C", text: "Stack" },
      { key: "D", text: "Queue" }
    ],
    correctAnswer: "A",
    explanation: "A Tree is a hierarchical, non-linear data structure consisting of connected parent and child nodes.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 241,
    text: "What is the topmost node of a Tree structure called?",
    options: [
      { key: "A", text: "Root" },
      { key: "B", text: "Leaf" },
      { key: "C", text: "Branch" },
      { key: "D", text: "Parent" }
    ],
    correctAnswer: "A",
    explanation: "The Root node is the entry point of a tree structure and has no parent nodes.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 242,
    text: "What are the nodes at the bottom of a tree that have no children called?",
    options: [
      { key: "A", text: "Leaves" },
      { key: "B", text: "Roots" },
      { key: "C", text: "Branches" },
      { key: "D", text: "Parents" }
    ],
    correctAnswer: "A",
    explanation: "Leaf nodes are the terminating nodes at the bottom of a tree and have no children.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 243,
    text: "Which search algorithm explores a branch to its maximum depth before backtracking?",
    options: [
      { key: "A", text: "Depth-First Search (DFS)" },
      { key: "B", text: "Breadth-First Search (BFS)" },
      { key: "C", text: "Binary Search" },
      { key: "D", text: "Linear Search" }
    ],
    correctAnswer: "A",
    explanation: "Depth-First Search (DFS) explores as deep as possible along each branch before backtracking.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 244,
    text: "Which search algorithm explores nodes level-by-level, visiting all neighbors first?",
    options: [
      { key: "A", text: "Breadth-First Search (BFS)" },
      { key: "B", text: "Depth-First Search (DFS)" },
      { key: "C", text: "Binary Search" },
      { key: "D", text: "Linear Search" }
    ],
    correctAnswer: "A",
    explanation: "Breadth-First Search (BFS) explores nodes level-by-level, checking all direct neighbors before moving to the next level.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 245,
    text: "What does HTML stand for in web technologies?",
    options: [
      { key: "A", text: "HyperText Markup Language" },
      { key: "B", text: "HyperLink Markup Language" },
      { key: "C", text: "HyperText Modern Language" },
      { key: "D", text: "HyperLink Modern Language" }
    ],
    correctAnswer: "A",
    explanation: "HTML stands for HyperText Markup Language, the standard formatting language for web browsers.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 246,
    text: "What does CSS stand for in web styling?",
    options: [
      { key: "A", text: "Cascading Style Sheets" },
      { key: "B", text: "Computer Style Sheets" },
      { key: "C", text: "Creative Style Sheets" },
      { key: "D", text: "Cascading System Sheets" }
    ],
    correctAnswer: "A",
    explanation: "CSS stands for Cascading Style Sheets, used to specify colors, layouts, and styles for web pages.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 247,
    text: "What does JS stand for in web technologies?",
    options: [
      { key: "A", text: "JavaScript" },
      { key: "B", text: "Java Source" },
      { key: "C", text: "Just Style" },
      { key: "D", text: "Junction Script" }
    ],
    correctAnswer: "A",
    explanation: "JS stands for JavaScript, the standard client-side scripting language for the web.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 248,
    text: "Which of the following is an open-source client-side library for building user interfaces?",
    options: [
      { key: "A", text: "React" },
      { key: "B", text: "Node.js" },
      { key: "C", text: "Express" },
      { key: "D", text: "MongoDB" }
    ],
    correctAnswer: "A",
    explanation: "React is an open-source, component-based frontend library managed by Meta.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 249,
    text: "What is the primary role of Node.js in web development?",
    options: [
      { key: "A", text: "Run JavaScript on the server" },
      { key: "B", text: "Style web pages" },
      { key: "C", text: "Manage databases" },
      { key: "D", text: "Register domain names" }
    ],
    correctAnswer: "A",
    explanation: "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JS server-side.",
    section: "Computer Science Fundamentals & Problem Solving"
  },
  {
    id: 250,
    text: "What is typically the most optimal first step when solving a programming problem?",
    options: [
      { key: "A", text: "Understand the requirements and plan your approach" },
      { key: "B", text: "Write code immediately" },
      { key: "C", text: "Copy code from the internet" },
      { key: "D", text: "Compile the program" }
    ],
    correctAnswer: "A",
    explanation: "Successful problem-solving begins by clearly understanding the requirements and constraints, and planning an algorithm before writing code.",
    section: "Computer Science Fundamentals & Problem Solving"
  }
];
