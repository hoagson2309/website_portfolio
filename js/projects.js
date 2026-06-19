// Background video
window.PORTFOLIO_HERO_VIDEOS = [
  {
    title: "Hand Gesture",
    client: "AI Project",
    src: "assets/videos/hand_gesture.mp4",
    poster: "assets/images/project-3.png"
  },
  {
    title: "AutoMaze Robot",
    client: "Embedded Project",
    src: "assets/videos/auto_maze.mp4",
    poster: "assets/images/project-5.png"
  },
  {
    title: "Stock Prediction",
    client: "AI Project",
    src: "assets/videos/nvda_stock.mp4",
    poster: "assets/images/project-1.png"
  }
];

// Edit this file to change your projects.
// Put your videos in assets/videos/ and images in assets/images/.

window.PORTFOLIO_PROJECTS = [
  {
    id: "nvda-stock",
    title: "NVDA Stock Price Prediction",
    client: "Personal Project",
    subtitle: "Predicting NVIDIA stock prices using machine learning models.",
    category: "ai",
    year: "2026",
    featured: false,
    mediaType: "image",
    media: "assets/images/project-1.png",
    link: "project.html?id=nvda-stock",

    role: "Data Scientist / ML Engineer",
    tools: ["Python", "Machine Learning", "Data Analysis", "Pandas", "Scikit-learn"],
    description: "Built a machine learning model to predict NVIDIA stock prices based on historical data and market indicators.",
    challenge: "Handling noisy financial data and selecting the right features to improve prediction accuracy.",
    outcome: "Successfully trained a model that captures stock price trends and provides useful predictions."
  },
  {
    id: "maze-robot",
    title: "Autonomous Maze Navigation Robot",
    client: "Personal Project",
    subtitle: "A robot that autonomously navigates through mazes.",
    category: "embedded",
    year: "2026",
    featured: false,
    mediaType: "image",
    media: "assets/images/project-5.png",
    link: "project.html?id=maze-robot",

    role: "Robotics / Embedded Developer",
    tools: ["C/C++", "Arduino", "Sensors", "Motor Control", "Algorithm Design"],
    description: "Built an autonomous robot capable of navigating through mazes using sensors and pathfinding algorithms.",
    challenge: "Implementing efficient pathfinding algorithms on resource-constrained embedded hardware.",
    outcome: "Created a robot that successfully navigates mazes autonomously using sensor-based decision making."
  },
  {
    id: "house-price",
    title: "House Price Prediction",
    client: "Personal Project",
    subtitle: "Predicting house prices using regression models.",
    category: "ai",
    year: "2026",
    featured: false,
    mediaType: "image",
    media: "assets/images/project-2.png",
    link: "project.html?id=house-price",

    role: "Data Scientist / ML Engineer",
    tools: ["Python", "Machine Learning", "Regression", "Pandas", "Matplotlib"],
    description: "Developed a regression model to predict house prices based on various property features like size, location, and condition.",
    challenge: "Feature engineering and dealing with missing data in the housing dataset.",
    outcome: "Created an accurate prediction model that can estimate house prices based on key property attributes."
  },
  {
    id: "hand-gesture",
    title: "Hand Gesture Recognition",
    client: "Personal Project",
    subtitle: "Real-time hand gesture recognition using computer vision.",
    category: "ai",
    year: "2026",
    featured: false,
    mediaType: "image",
    media: "assets/images/project-3.png",
    link: "project.html?id=hand-gesture",

    role: "AI / Computer Vision Developer",
    tools: ["Python", "Deep Learning", "OpenCV", "TensorFlow", "MediaPipe"],
    description: "Built a real-time hand gesture recognition system using computer vision and deep learning techniques.",
    challenge: "Achieving real-time performance while maintaining high accuracy across different lighting conditions.",
    outcome: "Developed a working system that recognizes hand gestures in real-time with high accuracy."
  },
  {
    id: "sensor-monitoring",
    title: "Embedded Sensor Monitoring System",
    client: "Personal Project",
    subtitle: "Real-time sensor data monitoring on embedded hardware.",
    category: "embedded",
    year: "2026",
    featured: false,
    mediaType: "image",
    media: "assets/images/project-4.png",
    link: "project.html?id=sensor-monitoring",

    role: "Embedded Systems Developer",
    tools: ["C/C++", "Raspberry Pi Pico", "Sensors", "RTOS", "Serial Communication"],
    description: "Designed and built an embedded system that monitors sensor data in real-time and displays readings on a connected interface.",
    challenge: "Managing real-time data collection from multiple sensors while maintaining system stability.",
    outcome: "Delivered a reliable monitoring system capable of handling multiple sensor inputs simultaneously."
  }
  
];