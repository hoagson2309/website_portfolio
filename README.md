# Son Cao Cinematic Portfolio Template

This is an editable portfolio website inspired by cinematic creative-studio layouts: large hero video, project filters, bold typography, featured cards, and contact section.

## How to edit

### Text
Edit `index.html` for hero text, about text, navigation, and contact links.

### Projects
Edit `js/projects.js`. Add, remove, or rename project objects.

Example project:
```js
{
  title: "My Project",
  client: "Client or School",
  subtitle: "Short project description",
  category: "web",
  year: "2026",
  featured: true,
  mediaType: "video",
  media: "assets/videos/my-project.mp4",
  poster: "assets/images/my-project-poster.jpg",
  link: "https://example.com"
}
```

### Videos
Put videos in `assets/videos/`.
- Replace `assets/videos/hero.mp4` for the homepage background.
- Replace `assets/videos/about.mp4` for the about section.
- Use MP4 files for easiest browser support.

The site works even without videos because it has gradient/image fallbacks.

### Colors
Edit the variables at the top of `css/styles.css`:
```css
:root {
  --bg: #050505;
  --text: #f4f1ea;
  --accent: #ff5a2f;
  --accent-2: #d7ff4f;
}
```

### Run locally
Open `index.html` directly in your browser, or use VS Code with the Live Server extension.

## Deploy
Good free options:
- GitHub Pages
- Netlify
- Vercel

Upload the folder as a static website.
