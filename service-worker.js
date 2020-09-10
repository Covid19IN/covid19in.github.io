if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"765314d33f060e9379e61b8f1f0ee485","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"765314d33f060e9379e61b8f1f0ee485","url":"index.html"},{"revision":"ca3961059c842e8e12889424a262c65c","url":"precache-manifest.ca3961059c842e8e12889424a262c65c.js"},{"revision":"aa4f273250d91f1168144711a38940f2","url":"static/css/15.3b8676f4.chunk.css"},{"revision":"7d4e1e17bdf366f877b4d150879e4be7","url":"static/js/0.4e9d56d0.chunk.js"},{"revision":"58c46ad0690cd8eed36b0b97cdd26ae0","url":"static/js/1.6757e1cc.chunk.js"},{"revision":"aca816298652d506aa0b60b7e773f742","url":"static/js/10.2557bc3a.chunk.js"},{"revision":"97411b3b5e03a60d9e35488bac76ad31","url":"static/js/11.e2c461fe.chunk.js"},{"revision":"8afec5b2d0d20b28585126d836bea3a5","url":"static/js/12.c37cc7be.chunk.js"},{"revision":"9c86ecb3cfde1c789763e6bc18112073","url":"static/js/13.6780c69e.chunk.js"},{"revision":"8f9f9a17314c2e51cc63de113cfce2c9","url":"static/js/14.6d488207.chunk.js"},{"revision":"cbffc70fb9b5b0c328652506e426a42b","url":"static/js/15.7a68a6d1.chunk.js"},{"revision":"269dda85cd47ff8f4582f4d320cf4c2c","url":"static/js/16.2eb38d5b.chunk.js"},{"revision":"063723a0f4645591f24f898986bb0f18","url":"static/js/17.7177f102.chunk.js"},{"revision":"bf34c85a106e2eddd3856dc88094e592","url":"static/js/18.bb2f8c84.chunk.js"},{"revision":"b03aceef3d9ef00559252c0b0f54cc89","url":"static/js/19.b2736615.chunk.js"},{"revision":"f3022508be3378443607586ceba906ad","url":"static/js/2.41254f57.chunk.js"},{"revision":"a4833f3df8028f6458930cbe027e8032","url":"static/js/20.d9061f33.chunk.js"},{"revision":"ce48fe521e96483b95069dbc84077ac9","url":"static/js/21.ed0b4d86.chunk.js"},{"revision":"1cc2b194f2ee923e0e0172e084be18cb","url":"static/js/22.459976c1.chunk.js"},{"revision":"9c529ce38a1ac537372592fd3abe0ca7","url":"static/js/23.d864a3ae.chunk.js"},{"revision":"144877673fbe3b1e3a0d1227527d5fe2","url":"static/js/24.e499ccbb.chunk.js"},{"revision":"15c9659015e73d8931876a109eb02548","url":"static/js/25.ad94ce18.chunk.js"},{"revision":"fb3adbb0f3bd44ca9fe0d1516f54ba3c","url":"static/js/26.fa21d1c3.chunk.js"},{"revision":"fb353e485d5f277a88976aa96cac5722","url":"static/js/27.6e34a7c4.chunk.js"},{"revision":"6be9879a1c2aabcfb6d9ce63847078c8","url":"static/js/28.371f7415.chunk.js"},{"revision":"ce7aee05a767179747c6c0a94f94c314","url":"static/js/29.ee58f39a.chunk.js"},{"revision":"ae6664af16f262168fe8c92e1210832c","url":"static/js/3.cbf37514.chunk.js"},{"revision":"25c364ce4c4bd2499f087aed4d0cbd37","url":"static/js/30.b30d8d61.chunk.js"},{"revision":"df9f0c0f6c88279ff96e9401cd037789","url":"static/js/31.d49b8850.chunk.js"},{"revision":"84609fddf35b7808d1b45e2f519f6058","url":"static/js/32.5d296934.chunk.js"},{"revision":"71690fc357d01e8c2441a65974fededd","url":"static/js/33.ca9afb04.chunk.js"},{"revision":"dec472bee83b78e1635216164b34737c","url":"static/js/34.fe7e97f3.chunk.js"},{"revision":"612cb47d3f1895935ca3c5ddafc58594","url":"static/js/35.cb1f6f81.chunk.js"},{"revision":"bef74fc3e0c7ca1f227dc369fce83056","url":"static/js/36.93916f45.chunk.js"},{"revision":"e22047187f015b740c2549097e0ccd1c","url":"static/js/37.c0f83229.chunk.js"},{"revision":"15ad0ddec239e270607aa8d7c9d444da","url":"static/js/38.6857e25c.chunk.js"},{"revision":"0bcbe51313d6c0be655fe38166a56745","url":"static/js/4.eebbb433.chunk.js"},{"revision":"f240e345a94d04a9d3f24fa9b5c4b846","url":"static/js/5.fd9f2622.chunk.js"},{"revision":"6c233312e8a8fb9dce681a0553df4905","url":"static/js/6.f666043c.chunk.js"},{"revision":"47da0a522ece7667f53f5a1ca0e242c4","url":"static/js/9.ac05a06b.chunk.js"},{"revision":"7941038667b2664e4d7b2ce5f525d1b2","url":"static/js/main.05c32857.chunk.js"},{"revision":"c9805adfcedeb71d1996992958bc7f45","url":"static/js/runtime-main.d71337b5.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
