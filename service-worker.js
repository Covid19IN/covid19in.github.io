if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"12658e430691be80179140223a9f740a","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"12658e430691be80179140223a9f740a","url":"index.html"},{"revision":"9c05aec6812c9078c5ed12c063d4a238","url":"precache-manifest.9c05aec6812c9078c5ed12c063d4a238.js"},{"revision":"659fcbdcf1070cd596a9ed8ef5f80710","url":"static/css/15.aa9ef476.chunk.css"},{"revision":"7d4e1e17bdf366f877b4d150879e4be7","url":"static/js/0.4e9d56d0.chunk.js"},{"revision":"6ed2f273d40383f32ae357274d944def","url":"static/js/1.041abf02.chunk.js"},{"revision":"7ae6dd8459831d5d50eacadb0be705bc","url":"static/js/10.8468e465.chunk.js"},{"revision":"1d15010736a0f69fee03d12bed4a5638","url":"static/js/11.60335480.chunk.js"},{"revision":"55b76b38a67d4c49d6c28333c9462b65","url":"static/js/12.39a10b0b.chunk.js"},{"revision":"096fee898e0b50ec5b4485ef2cdd4737","url":"static/js/13.96ce3f32.chunk.js"},{"revision":"8af8974fc737426190440f3410f1ea4d","url":"static/js/14.852392d3.chunk.js"},{"revision":"7261c035cd36cf24327234e25c9ddc5c","url":"static/js/15.8862f125.chunk.js"},{"revision":"97a9e037f359866bcaf32700f810de85","url":"static/js/16.39d12edc.chunk.js"},{"revision":"b3776b54f6f6603f88914d42c00caeeb","url":"static/js/17.1becda0e.chunk.js"},{"revision":"6e72221693b7d6e94ed9f7dd5ae59074","url":"static/js/18.5e29c43c.chunk.js"},{"revision":"cc6cc1af065cde69c59baab689f4ae52","url":"static/js/19.e036a738.chunk.js"},{"revision":"22a0ea3abb6535a17d1d2ae3bbadffe7","url":"static/js/2.852d72c6.chunk.js"},{"revision":"386a61bf4962b7ed706914d22b3f5ce2","url":"static/js/20.bd08814b.chunk.js"},{"revision":"b06a8f482e27e6700cb982d9505d06a2","url":"static/js/21.0941bf20.chunk.js"},{"revision":"e60c36cc1f844c45192e42d96f18b27f","url":"static/js/22.b9a592e5.chunk.js"},{"revision":"9bf28e2fe88ff3364a5983d7a0375d55","url":"static/js/23.87922df9.chunk.js"},{"revision":"1fb304c462203ee16696bf3a3baad0ad","url":"static/js/24.49035fcb.chunk.js"},{"revision":"48f6c0a7b66d5583292d123916c6bcab","url":"static/js/25.bb64025f.chunk.js"},{"revision":"ba8a5936d5ddfb2b621ddb5c75acc1f1","url":"static/js/26.854bf183.chunk.js"},{"revision":"df90ee1b1a9d1fa50b27721e7c294f09","url":"static/js/27.ec18cd13.chunk.js"},{"revision":"368d7337df794178e5703af8fe8b49fc","url":"static/js/28.8a01e847.chunk.js"},{"revision":"11a3a8e2702fc75b5ce45dcf0774ab36","url":"static/js/29.bf273d4f.chunk.js"},{"revision":"a0ac6d90f855433940989d7fbf6d851f","url":"static/js/3.6fe98d4a.chunk.js"},{"revision":"fc19ed415b455b63563103f39fd216d7","url":"static/js/30.b8140486.chunk.js"},{"revision":"0fed23e6802ff990b30f049c0d21acd4","url":"static/js/31.e89f5f0f.chunk.js"},{"revision":"c8c006e2105c0adc8bbc7b40be5f7e61","url":"static/js/32.635cfbe3.chunk.js"},{"revision":"a51e2576b1e3461e33154bea3ca9bac7","url":"static/js/33.29db453d.chunk.js"},{"revision":"965ba605665845c51406a5afbe362d37","url":"static/js/34.de6c5534.chunk.js"},{"revision":"bd9f3e033d0f6c286723e528b2af9b23","url":"static/js/35.309bb3da.chunk.js"},{"revision":"2307d744338e233d550767144b0007de","url":"static/js/36.cf4753e8.chunk.js"},{"revision":"b14616e5e282d44f2ba3581eb4633128","url":"static/js/37.e517f828.chunk.js"},{"revision":"00e3498b70ae455474cd214f6e46840d","url":"static/js/4.16b66fb0.chunk.js"},{"revision":"a2dd7702cc8797a5895a81e8cc53f551","url":"static/js/5.518f6213.chunk.js"},{"revision":"41fea8d5ec3bba285026a654481d1512","url":"static/js/6.5a1f1fab.chunk.js"},{"revision":"52e53a8c5849b835891a455bbadf8149","url":"static/js/9.177c3174.chunk.js"},{"revision":"674ef54286e3166bec0f153de477d7fc","url":"static/js/main.1ad5a9f1.chunk.js"},{"revision":"e9f6daea9374c60543af646a8e1007d6","url":"static/js/runtime-main.fb406969.js"}]);

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
