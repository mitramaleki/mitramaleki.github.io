# Portfolio Cosmos

An award-winning interactive portfolio website presented as an immersive cinematic night sky experience.

## Features

- Interactive 3D environment using Three.js and React Three Fiber
- Scroll-driven cinematic camera movement
- Clickable objects representing different sections of your portfolio
- Glassmorphism overlay for detailed information
- Optimized for performance (targeting 60 FPS)
- Ready for deployment to GitHub Pages

## Tech Stack

- React 18
- Vite
- Three.js
- React Three Fiber
- Drei (helpers for R3F)
- GSAP (for animations)
- HTML/CSS for overlay

## Project Structure

```
/portfolio-cosmos
  /public
  /src
    /components
    /scenes
    /objects
    /ui
    /assets
  index.html
  package.json
  vite.config.js
  README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Deployment to GitHub Pages

1. Make sure you have the `gh-pages` package installed (it's in devDependencies).
2. Push your code to GitHub.
3. Deploy using:

```bash
npm run deploy
```

This will build the project and push it to the `gh-pages` branch.

**Note**: If your repository is named `portfolio-cosmos`, your site will be available at:
`https://username.github.io/portfolio-cosmos/`

If you are using a different repository name, update the `base` in `vite.config.js` to match your repository name (e.g., `/your-repo-name/`).

## Customization

### Adding Your Own Models

Replace the placeholder geometries in the `/src/objects` directory with your own 3D models (GLTF/GLB format). You can use the `useLoader` hook from drei to load models.

### Changing Content

Edit the `objectData` object in `App.jsx` to change the text content for each section.

### Adjusting the Camera Path

Modify the `points` array in `mainScene.jsx` to change the camera movement path.

## Performance Tips

- The project uses InstancedMesh for stars and fireflies for better performance.
- Consider using GPUInstancing for large numbers of objects.
- Textures should be optimized and compressed.
- Enable gzip compression on your server.

## License

MIT

## Acknowledgements

- Inspired by the works of Lusion, Active Theory, and Bruno Simon
- Three.js and React Three Fiber communities
- GSAP for animations