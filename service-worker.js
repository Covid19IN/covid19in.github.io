if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"12f72b285d1d5a0502cfe66ab33d65ed","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"12f72b285d1d5a0502cfe66ab33d65ed","url":"index.html"},{"revision":"2f0366883c1acf77cd90833e6c36634b","url":"precache-manifest.2f0366883c1acf77cd90833e6c36634b.js"},{"revision":"0322103a93fc9290c7b65ed742ceaaaf","url":"static/css/13.aa9ef476.chunk.css"},{"revision":"7d4e1e17bdf366f877b4d150879e4be7","url":"static/js/0.4e9d56d0.chunk.js"},{"revision":"c100cf3f3312a1702b743c32881e8f2c","url":"static/js/1.e9cc8f0b.chunk.js"},{"revision":"d974a3d44d67c4013343fac757ce2f5a","url":"static/js/10.e254f8db.chunk.js"},{"revision":"31150450c45e50177c6461ad497bcba1","url":"static/js/11.8a2a12b5.chunk.js"},{"revision":"dc7a3943950abda0e20f291efd071825","url":"static/js/12.1092cd7d.chunk.js"},{"revision":"b2058bcbc8ea0964c4670ceb9a80553a","url":"static/js/13.e9ab64af.chunk.js"},{"revision":"41e3368bf3900876522e727268c0eecb","url":"static/js/14.00a1ec49.chunk.js"},{"revision":"6cccbf5341f6ab4a2050b7e0317c0d4b","url":"static/js/15.9ded00c2.chunk.js"},{"revision":"31e963580785bf5888ec3fc1a6279d74","url":"static/js/16.8611b423.chunk.js"},{"revision":"26c756c7c8393716bfe986570476fae2","url":"static/js/17.e8c1e316.chunk.js"},{"revision":"b4eff6b996fd3c875255b25077c80db0","url":"static/js/18.a075b833.chunk.js"},{"revision":"e5078e3b5c504f93d8008e3419c49e6a","url":"static/js/19.144b7dbe.chunk.js"},{"revision":"da31397bab3f5f91c3c4b9ce6c189e68","url":"static/js/2.6a331105.chunk.js"},{"revision":"f2c7131bf48e767702e6c3e4c7bf800b","url":"static/js/20.46f346f5.chunk.js"},{"revision":"201512f5b47d18f8e09b98bde5fc8f21","url":"static/js/21.a4e05cd9.chunk.js"},{"revision":"1d7cd635977c3469b57ecb077c16a448","url":"static/js/22.6531af76.chunk.js"},{"revision":"69607d571d0b2263c505ee04fc778b02","url":"static/js/23.914a8ca6.chunk.js"},{"revision":"300367ce344c3bb10c7c0956f08eea66","url":"static/js/24.1fbeef7e.chunk.js"},{"revision":"cecf9f645060bba3cf975adf77971cd9","url":"static/js/25.172fd028.chunk.js"},{"revision":"4e611d8956fdb1f615bebc58bffa4cd9","url":"static/js/26.6cf10457.chunk.js"},{"revision":"c5979614329ba8d55ebe90a58270556b","url":"static/js/27.11be6755.chunk.js"},{"revision":"f4eaf92cb239e9eb88731d05b7c08e83","url":"static/js/28.f24f29ee.chunk.js"},{"revision":"e6b1130af4158c9606828d58f9f5eba3","url":"static/js/29.b11c3f91.chunk.js"},{"revision":"04150b7ba77c65775fb8ed2392f8fc87","url":"static/js/3.4d6b12c9.chunk.js"},{"revision":"97bbca1dadf3de9b801017cf25abec27","url":"static/js/30.459dcd23.chunk.js"},{"revision":"7b9e412413c5c9f6d3e1d42d0c5e9308","url":"static/js/31.5a3719fa.chunk.js"},{"revision":"704c3170bfe31e0772cf63e54e1759f2","url":"static/js/32.6bde3d7d.chunk.js"},{"revision":"f470785d20a8e7ba5d58a4e010e03cb6","url":"static/js/33.ef7b8c57.chunk.js"},{"revision":"3cebdceb0b07eeee1e90e492690bacaa","url":"static/js/34.ae75df15.chunk.js"},{"revision":"0b19d1653c64e6893d58f8fd5b911481","url":"static/js/35.421d718e.chunk.js"},{"revision":"2e0f0ca4714c9ea3f4c43bb4e457d189","url":"static/js/4.19f9bb9e.chunk.js"},{"revision":"eac98bd5a20a5b7faffa4e11b5b02847","url":"static/js/5.889189a2.chunk.js"},{"revision":"cbb292800f770afb24e55d328965c921","url":"static/js/8.14f39206.chunk.js"},{"revision":"02bd8f0c069ccd3af7f0d256cf97a0ce","url":"static/js/9.afe9ae58.chunk.js"},{"revision":"b76fc4f51a628ad5f7f236ce373cf307","url":"static/js/main.8206b79a.chunk.js"},{"revision":"53b03f85d048a5c1e8cb059a8139da84","url":"static/js/runtime-main.2a167ef8.js"}]);

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