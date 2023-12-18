import path from "path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import autoprefixer from "autoprefixer"
import px2rem from "postcss-pxtorem"
import autoimport from "unplugin-auto-import/vite"
import viteCompression from "vite-plugin-compression"
import components from "unplugin-vue-components/vite"
import { VantResolver } from "unplugin-vue-components/resolvers"


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    components({
      resolvers: [VantResolver()]
    }),
    autoimport({
      resolvers: [VantResolver()]
    }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz"
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/")
    }
  },
  css: {
    postcss: {
      plugins: [autoprefixer(), px2rem({
        rootValue: 37.5,
        propList: ["*"]
      })]
    }
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  server: {
    host: true,
    // port: 3000,
    port: 8000,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:58375",
        changeOrigin: true
      }
    }
  },
  base: '/template'
})
