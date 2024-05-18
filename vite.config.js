import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import vsharp from 'vite-plugin-vsharp';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vsharp(
    {
      excludePublic: [],
      includePublic: [
        "public/*", // Include this particular image
      ],
      ".jpg": {
        "quality": 60
      },
      ".jpeg": {
        "quality": 60
      },
      ".png": {
        "quality": 60,
        "palette": true
      },
      ".webp": {
        "lossless": true
      },
      "preserveMetadata": {
        "orientation": false
      }
    }
  )],
})
