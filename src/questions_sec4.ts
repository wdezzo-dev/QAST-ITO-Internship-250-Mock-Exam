import { Question } from "./types";

export const QUESTIONS_SEC4: Question[] = [
  {
    id: 151,
    text: "What does AI stand for?",
    options: [
      { key: "A", text: "Automated Intelligence" },
      { key: "B", text: "Artificial Intelligence" },
      { key: "C", text: "Advanced Internet" },
      { key: "D", text: "Artificial Internet" }
    ],
    correctAnswer: "B",
    explanation: "AI stands for Artificial Intelligence, focusing on building systems capable of mimicking cognitive human tasks.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 152,
    text: "Artificial Intelligence is primarily concerned with what objective?",
    options: [
      { key: "A", text: "Making computers perform tasks requiring human intelligence" },
      { key: "B", text: "Increasing internet speed" },
      { key: "C", text: "Building databases" },
      { key: "D", text: "Designing websites" }
    ],
    correctAnswer: "A",
    explanation: "AI targets the development of algorithms that enable computers to learn, reason, perceive, and make decisions.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 153,
    text: "Which of the following software services represents an active application of AI?",
    options: [
      { key: "A", text: "Calculator" },
      { key: "B", text: "Spam Email Filter" },
      { key: "C", text: "Keyboard" },
      { key: "D", text: "Printer" }
    ],
    correctAnswer: "B",
    explanation: "Modern spam email filters utilize supervised classification algorithms to analyze and quarantine unsolicited emails.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 154,
    text: "Machine Learning represents a direct subset of which science?",
    options: [
      { key: "A", text: "Networking" },
      { key: "B", text: "AI" },
      { key: "C", text: "Cloud Computing" },
      { key: "D", text: "Cybersecurity" }
    ],
    correctAnswer: "B",
    explanation: "Machine Learning is a specialized subfield of Artificial Intelligence focusing on teaching systems to learn patterns from datasets.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 155,
    text: "What classification of Artificial Intelligence exists in practical deployment today?",
    options: [
      { key: "A", text: "Artificial General Intelligence (AGI)" },
      { key: "B", text: "Artificial Super Intelligence (ASI)" },
      { key: "C", text: "Narrow AI" },
      { key: "D", text: "Conscious AI" }
    ],
    correctAnswer: "C",
    explanation: "Today's solutions represent Narrow AI, meaning they are engineered to execute specific task domains (e.g., translation) rather than human-like general reasoning.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 156,
    text: "Machine Learning allows compute systems to achieve what?",
    options: [
      { key: "A", text: "Learn from data without explicit programming" },
      { key: "B", text: "Build hardware" },
      { key: "C", text: "Increase RAM" },
      { key: "D", text: "Create databases" }
    ],
    correctAnswer: "A",
    explanation: "ML algorithms construct mathematical models based on training inputs to formulate predictions without explicit rule structures.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 157,
    text: "Which Machine Learning paradigm trains algorithms using labeled input-output pairs?",
    options: [
      { key: "A", text: "Reinforcement Learning" },
      { key: "B", text: "Supervised Learning" },
      { key: "C", text: "Unsupervised Learning" },
      { key: "D", text: "Self Learning" }
    ],
    correctAnswer: "B",
    explanation: "Supervised Learning guides model adjustments using structured training datasets containing explicit solution labels.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 158,
    text: "Which Machine Learning paradigm works with unlabeled datasets to find hidden structures?",
    options: [
      { key: "A", text: "Supervised Learning" },
      { key: "B", text: "Unsupervised Learning" },
      { key: "C", text: "Reinforcement Learning" },
      { key: "D", text: "Rule-Based Learning" }
    ],
    correctAnswer: "B",
    explanation: "Unsupervised learning identifies clusters, groupings, or associations within inputs without relying on predefined labels.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 159,
    text: "Which Machine Learning paradigm utilizes environmental feedback loops consisting of rewards and penalties?",
    options: [
      { key: "A", text: "Supervised" },
      { key: "B", text: "Reinforcement" },
      { key: "C", text: "Unsupervised" },
      { key: "D", text: "Classification" }
    ],
    correctAnswer: "B",
    explanation: "Reinforcement Learning trains autonomous agents to maximize cumulative rewards through action feedback loops.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 160,
    text: "Predicting continuous values like real estate valuations represents what task?",
    options: [
      { key: "A", text: "Classification" },
      { key: "B", text: "Regression" },
      { key: "C", text: "Clustering" },
      { key: "D", text: "Reinforcement Learning" }
    ],
    correctAnswer: "B",
    explanation: "Regression tasks model relationships to output continuous numeric values, whereas classification predicts discrete categories.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 161,
    text: "Which of the following represents a classic classification algorithm?",
    options: [
      { key: "A", text: "Decision Tree" },
      { key: "B", text: "Bubble Sort" },
      { key: "C", text: "Merge Sort" },
      { key: "D", text: "DFS" }
    ],
    correctAnswer: "A",
    explanation: "Decision Trees map attribute splits to sort datasets into discrete target classes or numerical approximations.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 162,
    text: "Which algorithm segments unlabeled datasets into clusters based on similarity?",
    options: [
      { key: "A", text: "K-Means" },
      { key: "B", text: "Linear Regression" },
      { key: "C", text: "Decision Tree" },
      { key: "D", text: "Random Forest" }
    ],
    correctAnswer: "A",
    explanation: "K-Means divides datasets into 'K' distinct clusters based on mathematical proximity to centroids.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 163,
    text: "Which algorithm predicts continuous values by fitting linear equations to dataset variables?",
    options: [
      { key: "A", text: "Logistic Regression" },
      { key: "B", text: "Linear Regression" },
      { key: "C", text: "K-Means" },
      { key: "D", text: "KNN" }
    ],
    correctAnswer: "B",
    explanation: "Linear Regression maps linear coefficients to model dependencies between inputs and output variables.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 164,
    text: "Decision Tree models can be successfully applied to handle which ML categories?",
    options: [
      { key: "A", text: "Classification only" },
      { key: "B", text: "Regression only" },
      { key: "C", text: "Both Classification and Regression" },
      { key: "D", text: "Neither" }
    ],
    correctAnswer: "C",
    explanation: "Decision Trees support both categorical splits (classification) and scalar estimation (regression).",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 165,
    text: "What structure forms the basis of a Random Forest model?",
    options: [
      { key: "A", text: "Multiple Decision Trees" },
      { key: "B", text: "Neural Networks" },
      { key: "C", text: "Databases" },
      { key: "D", text: "APIs" }
    ],
    correctAnswer: "A",
    explanation: "Random Forest is an ensemble learning algorithm that aggregates predictions from multiple decision trees.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 166,
    text: "Deep Learning represents a subset of machine learning based on which structural system?",
    options: [
      { key: "A", text: "Decision Trees" },
      { key: "B", text: "Neural Networks" },
      { key: "C", text: "SQL" },
      { key: "D", text: "HTML" }
    ],
    correctAnswer: "B",
    explanation: "Deep Learning utilizes multi-layered Artificial Neural Networks to model complex features within datasets.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 167,
    text: "The nodes of artificial neural networks are modeled after which biological structures?",
    options: [
      { key: "A", text: "Human Brain" },
      { key: "B", text: "CPU" },
      { key: "C", text: "Database" },
      { key: "D", text: "Hard Drive" }
    ],
    correctAnswer: "A",
    explanation: "Artificial neural network structures are inspired by the biological neurons in human brains.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 168,
    text: "Which of the following is a leading open-source library for Deep Learning?",
    options: [
      { key: "A", text: "TensorFlow" },
      { key: "B", text: "Bootstrap" },
      { key: "C", text: "React" },
      { key: "D", text: "Django" }
    ],
    correctAnswer: "A",
    explanation: "TensorFlow is an open-source library created by Google specifically for training and deploying deep neural networks.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 169,
    text: "What is PyTorch primarily utilized for?",
    options: [
      { key: "A", text: "Web Design" },
      { key: "B", text: "Deep Learning" },
      { key: "C", text: "Networking" },
      { key: "D", text: "Operating Systems" }
    ],
    correctAnswer: "B",
    explanation: "PyTorch is an open-source machine learning library designed for research and production-grade neural networks.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 170,
    text: "Deep Learning models typically outperform shallow models when handling what type of data?",
    options: [
      { key: "A", text: "Small datasets" },
      { key: "B", text: "Large datasets" },
      { key: "C", text: "Empty datasets" },
      { key: "D", text: "No data" }
    ],
    correctAnswer: "B",
    explanation: "Deep Learning neural networks scale effectively with massive, unstructured datasets (e.g., image libraries).",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 171,
    text: "What is the primary objective of data analysis?",
    options: [
      { key: "A", text: "Collecting and interpreting data" },
      { key: "B", text: "Building websites" },
      { key: "C", text: "Installing software" },
      { key: "D", text: "Creating networks" }
    ],
    correctAnswer: "A",
    explanation: "Data analysis processes and models information to extract valuable insights and support decision-making.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 172,
    text: "Which Python library is the standard tool for handling structured tabular datasets?",
    options: [
      { key: "A", text: "NumPy" },
      { key: "B", text: "Pandas" },
      { key: "C", text: "Flask" },
      { key: "D", text: "Requests" }
    ],
    correctAnswer: "B",
    explanation: "Pandas introduces DataFrame objects, enabling clean data manipulation, merging, and analysis in Python.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 173,
    text: "Which Python library is optimized for handling fast multi-dimensional matrix mathematics?",
    options: [
      { key: "A", text: "NumPy" },
      { key: "B", text: "Django" },
      { key: "C", text: "React" },
      { key: "D", text: "Express" }
    ],
    correctAnswer: "A",
    explanation: "NumPy supports high-speed mathematical operations on multi-dimensional array structures (ndarrays).",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 174,
    text: "The standard DataFrame object structure belongs to which library?",
    options: [
      { key: "A", text: "Pandas" },
      { key: "B", text: "NumPy" },
      { key: "C", text: "TensorFlow" },
      { key: "D", text: "Matplotlib" }
    ],
    correctAnswer: "A",
    explanation: "Pandas structures structured data into two-dimensional tables called DataFrames.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 175,
    text: "Which Pandas function outputs the first few rows of a DataFrame?",
    options: [
      { key: "A", text: "head()" },
      { key: "B", text: "first()" },
      { key: "C", text: "show()" },
      { key: "D", text: "top()" }
    ],
    correctAnswer: "A",
    explanation: "head() displays the first 5 rows of a DataFrame by default, helping inspect its structure.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 176,
    text: "Which of the following represents Python's foundational plotting library?",
    options: [
      { key: "A", text: "Matplotlib" },
      { key: "B", text: "Requests" },
      { key: "C", text: "Flask" },
      { key: "D", text: "OpenCV" }
    ],
    correctAnswer: "A",
    explanation: "Matplotlib is the core plotting framework used to generate static, animated, or interactive charts in Python.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 177,
    text: "Which chart is optimal for comparing discrete categories?",
    options: [
      { key: "A", text: "Bar Chart" },
      { key: "B", text: "Pie Chart" },
      { key: "C", text: "Scatter Plot" },
      { key: "D", text: "Histogram" }
    ],
    correctAnswer: "A",
    explanation: "Bar charts cleanly display differences in values across distinct categorical groups.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 178,
    text: "Which chart is ideal for visualizing relationships between two continuous variables?",
    options: [
      { key: "A", text: "Pie Chart" },
      { key: "B", text: "Scatter Plot" },
      { key: "C", text: "Histogram" },
      { key: "D", text: "Bar Chart" }
    ],
    correctAnswer: "B",
    explanation: "Scatter plots map variables as coordinate points to reveal correlations and trends.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 179,
    text: "Which chart is designed specifically to reveal the probability distribution of a numeric variable?",
    options: [
      { key: "A", text: "Histogram" },
      { key: "B", text: "Pie Chart" },
      { key: "C", text: "Table" },
      { key: "D", text: "Flowchart" }
    ],
    correctAnswer: "A",
    explanation: "Histograms group numerical data into bins, plotting the count or frequency in each bin to show its distribution.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 180,
    text: "What is the primary benefit of data visualization?",
    options: [
      { key: "A", text: "Understand patterns and trends" },
      { key: "B", text: "Increase CPU speed" },
      { key: "C", text: "Compress files" },
      { key: "D", text: "Install drivers" }
    ],
    correctAnswer: "A",
    explanation: "Data visualization translates complex datasets into intuitive charts to help identify patterns and trends.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 181,
    text: "What does the abbreviation NLP stand for in computer science?",
    options: [
      { key: "A", text: "Network Learning Process" },
      { key: "B", text: "Natural Language Processing" },
      { key: "C", text: "Neural Learning Platform" },
      { key: "D", text: "Network Language Processing" }
    ],
    correctAnswer: "B",
    explanation: "Natural Language Processing (NLP) focuses on enabling computers to understand, process, and generate human language.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 182,
    text: "Which application is a direct application of NLP technologies?",
    options: [
      { key: "A", text: "Chatbots" },
      { key: "B", text: "Monitor" },
      { key: "C", text: "Printer" },
      { key: "D", text: "Scanner" }
    ],
    correctAnswer: "A",
    explanation: "Chatbots utilize NLP to parse, interpret, and respond to text input from users.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 183,
    text: "What is the primary objective of Sentiment Analysis?",
    options: [
      { key: "A", text: "Internet speed" },
      { key: "B", text: "Emotional tone of text" },
      { key: "C", text: "CPU temperature" },
      { key: "D", text: "Database size" }
    ],
    correctAnswer: "B",
    explanation: "Sentiment Analysis evaluates text to identify its emotional tone (e.g., positive, negative, or neutral).",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 184,
    text: "Machine Translation engines focus on which operation?",
    options: [
      { key: "A", text: "Images into videos" },
      { key: "B", text: "One language into another" },
      { key: "C", text: "Audio into hardware" },
      { key: "D", text: "Numbers into charts" }
    ],
    correctAnswer: "B",
    explanation: "Machine Translation automatically translates text or speech from one natural language to another.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 185,
    text: "Which research lab created the ChatGPT LLM?",
    options: [
      { key: "A", text: "Microsoft" },
      { key: "B", text: "Google" },
      { key: "C", text: "OpenAI" },
      { key: "D", text: "Amazon" }
    ],
    correctAnswer: "C",
    explanation: "OpenAI built, trained, and launched the ChatGPT large language model.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 186,
    text: "Computer Vision algorithms primarily focus on which goal?",
    options: [
      { key: "A", text: "Understanding images and videos" },
      { key: "B", text: "SQL queries" },
      { key: "C", text: "Networking" },
      { key: "D", text: "Cloud Storage" }
    ],
    correctAnswer: "A",
    explanation: "Computer Vision processes visual inputs to extract high-level semantic insights.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 187,
    text: "Facial recognition represents a practical application of which subfield?",
    options: [
      { key: "A", text: "Computer Vision" },
      { key: "B", text: "Database Design" },
      { key: "C", text: "Networking" },
      { key: "D", text: "Cloud Computing" }
    ],
    correctAnswer: "A",
    explanation: "Facial recognition uses computer vision to detect, align, and identify faces in images or video streams.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 188,
    text: "Which open-source library is widely used for computer vision tasks?",
    options: [
      { key: "A", text: "OpenCV" },
      { key: "B", text: "NumPy" },
      { key: "C", text: "Bootstrap" },
      { key: "D", text: "Laravel" }
    ],
    correctAnswer: "A",
    explanation: "OpenCV (Open Source Computer Vision Library) provides highly optimized functions for real-time visual processing.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 189,
    text: "What does an Image Classification model predict?",
    options: [
      { key: "A", text: "The category of an image" },
      { key: "B", text: "SQL queries" },
      { key: "C", text: "CPU usage" },
      { key: "D", text: "Internet speed" }
    ],
    correctAnswer: "A",
    explanation: "Image classification maps entire input images to specific categorical labels (e.g., 'cat').",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 190,
    text: "What is the primary output of an Object Detection system?",
    options: [
      { key: "A", text: "Only image colors" },
      { key: "B", text: "Objects and their locations" },
      { key: "C", text: "Only file names" },
      { key: "D", text: "Only text" }
    ],
    correctAnswer: "B",
    explanation: "Object detection identifies the type and specifies the coordinate boundaries (bounding boxes) of items in an image.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 191,
    text: "When does AI Bias typically manifest?",
    options: [
      { key: "A", text: "AI produces unfair results" },
      { key: "B", text: "CPU overheats" },
      { key: "C", text: "RAM is full" },
      { key: "D", text: "Database crashes" }
    ],
    correctAnswer: "A",
    explanation: "AI bias occurs when systematic prejudices in training data or algorithm assumptions cause discriminatory outputs.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 192,
    text: "To ensure fairness and reliability, training datasets should ideally be:",
    options: [
      { key: "A", text: "Diverse and representative" },
      { key: "B", text: "Empty" },
      { key: "C", text: "Randomly deleted" },
      { key: "D", text: "Encrypted only" }
    ],
    correctAnswer: "A",
    explanation: "Diverse and representative training datasets prevent models from developing biased prediction behaviors.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 193,
    text: "When does overfitting occur during model training?",
    options: [
      { key: "A", text: "The model learns training data too well" },
      { key: "B", text: "The model learns nothing" },
      { key: "C", text: "The model deletes data" },
      { key: "D", text: "The model runs faster" }
    ],
    correctAnswer: "A",
    explanation: "Overfitting occurs when a model captures noise and specific patterns in the training set, failing to generalize to new, unseen data.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 194,
    text: "What does classification Accuracy measure?",
    options: [
      { key: "A", text: "Percentage of correct predictions" },
      { key: "B", text: "Internet speed" },
      { key: "C", text: "CPU usage" },
      { key: "D", text: "Storage size" }
    ],
    correctAnswer: "A",
    explanation: "Accuracy is the ratio of correctly predicted samples to total samples in a test set.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 195,
    text: "Which of the following metrics evaluates classification models?",
    options: [
      { key: "A", text: "Accuracy" },
      { key: "B", text: "Bandwidth" },
      { key: "C", text: "Throughput" },
      { key: "D", text: "Latency" }
    ],
    correctAnswer: "A",
    explanation: "Accuracy, Precision, Recall, and F1-score are standard evaluation metrics for classification tasks.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 196,
    text: "Which file format is most commonly used for datasets?",
    options: [
      { key: "A", text: "CSV" },
      { key: "B", text: "MP3" },
      { key: "C", text: "PNG" },
      { key: "D", text: "EXE" }
    ],
    correctAnswer: "A",
    explanation: "CSV (Comma-Separated Values) is a lightweight, widely supported plain text format for structured tables.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 197,
    text: "What preparation step is usually required before training an ML model?",
    options: [
      { key: "A", text: "Cleaning" },
      { key: "B", text: "Deleting" },
      { key: "C", text: "Encrypting" },
      { key: "D", text: "Compressing" }
    ],
    correctAnswer: "A",
    explanation: "Data cleaning removes duplicates, handles missing values, and fixes formatting errors to improve model quality.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 198,
    text: "Which programming language is most widely used for AI development?",
    options: [
      { key: "A", text: "Python" },
      { key: "B", text: "HTML" },
      { key: "C", text: "CSS" },
      { key: "D", text: "PHP" }
    ],
    correctAnswer: "A",
    explanation: "Python is favored for AI due to its readability and powerful data science libraries.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 199,
    text: "What is the primary role of a Test Dataset in machine learning?",
    options: [
      { key: "A", text: "Evaluate model performance" },
      { key: "B", text: "Train the model" },
      { key: "C", text: "Store backups" },
      { key: "D", text: "Build databases" }
    ],
    correctAnswer: "A",
    explanation: "The test set acts as unseen data to evaluate how well the trained model generalises.",
    section: "Artificial Intelligence & Data Analysis"
  },
  {
    id: 200,
    text: "What is typically the very first step in an AI or data science project?",
    options: [
      { key: "A", text: "Collect and understand the data" },
      { key: "B", text: "Deploy the model" },
      { key: "C", text: "Build the website" },
      { key: "D", text: "Buy a GPU" }
    ],
    correctAnswer: "A",
    explanation: "Successful AI development starts with collecting, exploring, and understanding target data parameters.",
    section: "Artificial Intelligence & Data Analysis"
  }
];
