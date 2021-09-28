import { defineConfig } from 'vite'
import pugPlugin from "vite-plugin-pug"
import vue from '@vitejs/plugin-vue'
import path from 'path'

const options = { pretty: true } // FIXME: pug pretty is deprecated!
const locals = { name: "My Pug" }

export default defineConfig({
  plugins: [vue(), pugPlugin(options, locals)],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '@user': path.resolve(__dirname, '/src/containers/User'),
      '@dashboard': path.resolve(__dirname, '/src/containers/Dashboard'),
    },
  }
})