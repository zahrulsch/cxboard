import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import 'src/styles/respmixin.scss'; @import 'src/styles/uamixin.scss';`
      }
    }
  }
})
