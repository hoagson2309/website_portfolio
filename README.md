# Son Cao — Portfolio

Personal portfolio website showcasing my projects in AI, Machine Learning, and Embedded Systems. Built with HTML, CSS, and JavaScript.

## Features

- Hero section with auto-cycling background video slider
- Scroll-triggered animations (fade, slide, parallax, gradient reveal)
- Project filtering by category (AI & ML / Embedded)
- Individual project detail pages
- About section with light/dark mode transition
- Responsive navbar with smooth color blending
- Magnetic hover effects on interactive elements

## Projects

- **NVDA Stock Price Prediction** — ML model for predicting NVIDIA stock prices
- **Autonomous Maze Navigation Robot** — Robot that navigates mazes using sensors and pathfinding
- **House Price Prediction** — Regression model for estimating house prices
- **Hand Gesture Recognition** — Real-time hand gesture recognition with computer vision
- **Embedded Sensor Monitoring System** — Real-time sensor data monitoring on embedded hardware

## Structure

```
├── index.html              Main page
├── project.html            Project detail page
├── css/styles.css          All styles
├── js/
│   ├── projects.js         Project data & hero videos
│   ├── main.js             Core functionality & animations
│   └── project-page.js     Project detail page logic
└── assets/
    ├── images/             Project screenshots & photos
    └── videos/             Hero background videos
```

## How to edit

- **Projects** — Edit `js/projects.js` to add/remove/update projects
- **Text & content** — Edit `index.html`
- **Colors** — Edit CSS variables at the top of `css/styles.css`
- **Videos** — Drop MP4 files in `assets/videos/` and reference them in `projects.js`

## Run locally

Open `index.html` in your browser, or use VS Code with the Live Server extension.

## Tech

HTML / CSS / JavaScript — no frameworks, no dependencies.

## Author

Son Cao — Computer Science @ Saxion University of Applied Sciences
