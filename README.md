
<img height="200px" src="https://github.com/RaamVijith/react-streaming-app-task/blob/main/src/assets/demo-video.gif"/>

# True Streaming Text Demo

This project demonstrates a real-time text streaming application built using Vite, React, and Tailwind CSS.

## Demo Video

A demo video showcasing the app is available in the `assets` directory.
https://github.com/RaamVijith/react-streaming-app-task/blob/main/src/assets/demo-video.mp4

---

## Installation

Follow these steps to install and run the project locally:

### Steps

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```
---

### Performance Optimizations in this application 
1. Memoized Components:
   - Used `React.memo` to prevent unnecessary re-renders of child components.
2. Efficient State Management:
   - Leveraged `useState` and `useCallback` to minimize state update overhead.
3. Stream Handling:
   - Used the `AbortController` API to handle and cancel ongoing streams efficiently.

---

