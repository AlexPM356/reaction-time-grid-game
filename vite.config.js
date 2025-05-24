import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: "/src/assets",
      components: "/src/components",
      data: "/src/data",
      gameplay: "/src/features/gameplay",
      hooks: "/src/hooks",
      pages: "/src/pages",
      utils: "/src/utils",
    }
  }
})
