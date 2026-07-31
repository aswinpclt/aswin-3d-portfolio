import { insuranceAiTechStack, jarvisTechStack, pizzeriaTechStack, blogTechStack } from './techStacks.js';

export const projects = [
  {
    id: "insurance-ai-project",
    title: "Insurance AI Project",
    description: "An AI-powered backend application that applies machine learning to insurance data — built as an academic project to explore predictive modeling and backend API design together.",
    image: "/images/project2.png",
    techStack: insuranceAiTechStack,
    features: [
      {
        title: "ML-Powered Predictions",
        description: "Uses a trained Scikit-learn model to generate predictions from insurance data",
        icon: "FaRocket"
      },
      {
        title: "REST API",
        description: "FastAPI backend exposing clean, documented endpoints for the model",
        icon: "FaServer"
      },
      {
        title: "Data Processing",
        description: "Pandas-based data cleaning and feature preparation pipeline",
        icon: "FaDatabase"
      }
    ],
    implementation: {
      architecture: "Python backend with FastAPI serving a trained ML model",
      highlights: [
        "Object-oriented structure separating data processing, model, and API layers",
        "FastAPI used for request validation and automatic API docs",
        "Model trained and evaluated using Scikit-learn"
      ],
      codeSnippet: "# Example prediction endpoint\n@app.post('/predict')\ndef predict(data: InsuranceInput):\n    features = preprocess(data)\n    prediction = model.predict([features])\n    return {\"prediction\": prediction[0]}"
    },
    demonstrations: [
      {
        title: "Prediction Endpoint",
        description: "API endpoint that accepts insurance data and returns a model prediction.",
        image: "/images/project2.png"
      }
    ],
    impact: {
      metrics: [],
      outcomes: [
        "Built as a hands-on academic project to practice integrating ML models into a real backend service",
        "Strengthened understanding of the full pipeline from data preprocessing to API deployment"
      ]
    },
    githubUrl: "https://github.com/aswinpclt/mojito",
    liveUrl: ""
  },
  {
    id: "jarvis",
    title: "JARVIS",
    description: "A JavaScript-based voice assistant project inspired by conversational AI assistants — built to explore browser speech APIs and interactive front-end logic.",
    image: "/images/project3.png",
    techStack: jarvisTechStack,
    features: [
      {
        title: "Voice Interaction",
        description: "Uses the Web Speech API to listen for and respond to voice commands",
        icon: "FaMobile"
      },
      {
        title: "Command Handling",
        description: "JavaScript logic to parse commands and trigger corresponding actions",
        icon: "FaServer"
      }
    ],
    implementation: {
      architecture: "Client-side JavaScript using the browser's Speech Recognition and Synthesis APIs",
      highlights: [
        "Event-driven architecture for handling voice input",
        "Modular command structure for easy extension"
      ],
      codeSnippet: "// Example command listener\nrecognition.onresult = (event) => {\n  const command = event.results[0][0].transcript;\n  handleCommand(command);\n};"
    },
    demonstrations: [
      {
        title: "Voice Command Demo",
        description: "The assistant listens for a spoken command and responds accordingly.",
        image: "/images/project3.png"
      }
    ],
    impact: {
      metrics: [],
      outcomes: [
        "Explored browser-native speech recognition and synthesis without external APIs",
        "Practiced structuring JavaScript logic for real-time, event-driven interaction"
      ]
    },
    githubUrl: "https://github.com/aswinpclt/JARVIS",
    liveUrl: ""
  },
  {
    id: "pizzeria",
    title: "Pizzeria",
    description: "A Django-powered pizza ordering web application built to practice full-stack development — from database models to server-rendered templates.",
    image: "/images/food.png",
    techStack: pizzeriaTechStack,
    features: [
      {
        title: "Menu & Ordering",
        description: "Browse a pizza menu and place orders through a Django-powered interface",
        icon: "FaMobile"
      },
      {
        title: "Database-Backed",
        description: "Django ORM models for menu items and orders, backed by SQLite",
        icon: "FaDatabase"
      }
    ],
    implementation: {
      architecture: "Django MVT (Model-View-Template) architecture",
      highlights: [
        "Django models for structured, relational data storage",
        "Server-rendered templates styled with HTML/CSS",
        "Practiced Django's built-in admin and ORM for rapid development"
      ],
      codeSnippet: "# Example Django model\nclass Order(models.Model):\n    item = models.ForeignKey(MenuItem, on_delete=models.CASCADE)\n    quantity = models.PositiveIntegerField(default=1)\n    created_at = models.DateTimeField(auto_now_add=True)"
    },
    demonstrations: [
      {
        title: "Order Flow",
        description: "A simple ordering flow from browsing the menu to placing an order.",
        image: "/images/food.png"
      }
    ],
    impact: {
      metrics: [],
      outcomes: [
        "Built to strengthen Django fundamentals — models, views, templates, and the admin panel",
        "First full-stack project combining backend logic with a working UI"
      ]
    },
    githubUrl: "https://github.com/aswinpclt/pizzeria",
    liveUrl: ""
  },
  {
    id: "blog",
    title: "Blog",
    description: "A simple, clean personal blogging site built with HTML, CSS, and JavaScript to practice front-end fundamentals.",
    image: "/images/readme.png",
    techStack: blogTechStack,
    features: [
      {
        title: "Responsive Layout",
        description: "Clean, readable layout that adapts to different screen sizes",
        icon: "FaMobile"
      },
      {
        title: "Static Front-End",
        description: "Built with vanilla HTML/CSS/JS to reinforce core web fundamentals",
        icon: "FaServer"
      }
    ],
    implementation: {
      architecture: "Static front-end site using HTML, CSS, and vanilla JavaScript",
      highlights: [
        "No frameworks — built to strengthen core HTML/CSS/JS skills",
        "Focus on clean, semantic markup and readable styling"
      ],
      codeSnippet: ""
    },
    demonstrations: [
      {
        title: "Blog Layout",
        description: "The main blog layout showing article listing and styling.",
        image: "/images/readme.png"
      }
    ],
    impact: {
      metrics: [],
      outcomes: [
        "One of the first projects built while learning front-end fundamentals",
        "Practiced structuring a multi-page static site from scratch"
      ]
    },
    githubUrl: "https://github.com/aswinpclt/blog",
    liveUrl: ""
  }
];
