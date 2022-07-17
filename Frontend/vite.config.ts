import { defineConfig } from 'vite'
import { Md5 } from 'ts-md5/dist/md5'
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
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: function(chunkInfo) {
          return `assets/${new Md5().appendStr(chunkInfo.name + new Date().getTime().toString()).end()}.js`
        },
        assetFileNames: function(assetInfo) {
          return `assets/${new Md5().appendStr(assetInfo.source.toString()).end()}.${assetInfo.name.split('.').at(-1)}`
        }
      },
    },
  }
})
