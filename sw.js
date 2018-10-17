importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "idtaysaev.com",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.1f5c7ac436f55539a43f.js",
    "revision": "2e3d62b76d41d14d7fcab84dbb7f71aa"
  },
  {
    "url": "/_nuxt/layouts/blank.a735da5edcaf8a53894b.js",
    "revision": "ffea81ff74bab1594ab49120b252afb4"
  },
  {
    "url": "/_nuxt/layouts/default.c0db7146b2d74d275e85.js",
    "revision": "e8f37d336b90479768da38abba694f83"
  },
  {
    "url": "/_nuxt/layouts/light.7d92819dd0ad6a58e5be.js",
    "revision": "c04fe9f6086ad1e0cd355efa769c5514"
  },
  {
    "url": "/_nuxt/layouts/post.550031aa0c942d28c7e5.js",
    "revision": "a6de8ae68caadc2a56ab432e752fe56c"
  },
  {
    "url": "/_nuxt/manifest.adc941f23ea6ed15dc70.js",
    "revision": "7d451ab5d4e9473725b0cbcf787d7c59"
  },
  {
    "url": "/_nuxt/pages/about.72d0438525bf6ba09712.js",
    "revision": "cf8b0edbd30f8c8a18ef04db80df7993"
  },
  {
    "url": "/_nuxt/pages/blog/first-post.97a6487ff9fea0562821.js",
    "revision": "6d0c0df5ab784c2cd8c35c1fdf678b2e"
  },
  {
    "url": "/_nuxt/pages/blog/index.8788d4c255fc38b49164.js",
    "revision": "e96a73e11a1c69bd8ce66c9bf32fb3d5"
  },
  {
    "url": "/_nuxt/pages/index.056f180619fd664c7896.js",
    "revision": "aff5656642c9c10df46996c3750cead4"
  },
  {
    "url": "/_nuxt/pages/portfolio.b9f18b05ace66615afd8.js",
    "revision": "753c94674dfc5567df7d7eabce577c2c"
  },
  {
    "url": "/_nuxt/vendor.6318ba0c822c30ea4619.js",
    "revision": "9952f41d9171684b5bdab48ae9fce202"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

