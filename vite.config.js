import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['./img/icon-192x192.png', './img/icon-256x256.png', './img/icon-384x384.png', './img/icon-512x512.png'],
      manifest: {
        'theme_color': '#ffffff',
        'background_color': '#000000',
        'display': 'fullscreen',
        'scope': 'https://jdvm.vercel.app/',
        'start_url': 'https://jdvm.vercel.app/',
        'name': 'JDVM',
        'short_name': 'JDVM',
        'description': 'JDVM Web App',
        'icons': [
          {
            'src': '/img/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png',
            "purpose": "any maskable"
          },
          {
            'src': '/img/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png',
            "purpose": "any maskable"
          },
          {
            'src': '/img/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png',
            "purpose": "any maskable"
          },
          {
            'src': '/img/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png',
            "purpose": "any maskable"
          }
        ]

      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
