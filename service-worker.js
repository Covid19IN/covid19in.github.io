if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"ab574e1f43dbd8de9cc759ac027331f9","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"ab574e1f43dbd8de9cc759ac027331f9","url":"index.html"},{"revision":"49efea6435f51d8b74a24d5cbbc4b6d9","url":"precache-manifest.49efea6435f51d8b74a24d5cbbc4b6d9.js"},{"revision":"9c521b86d8ef346d9cf0b95355e74d06","url":"static/css/15.692fba38.chunk.css"},{"revision":"5d664dd3923e07c6b813f09c89534c27","url":"static/js/0.522cfe1f.chunk.js"},{"revision":"ee369e10f8ec22dd9f4cc3873dfece28","url":"static/js/1.bdf6ab3f.chunk.js"},{"revision":"e77cd18fed8142cd8b5828e3fc7c805b","url":"static/js/10.6b333433.chunk.js"},{"revision":"5375d4e4e34446fa50fde03469e87269","url":"static/js/11.fbe4b18e.chunk.js"},{"revision":"eff9968b19dde19ea5fca807abea2dc8","url":"static/js/12.96b7e1a3.chunk.js"},{"revision":"a20e3cf40c944c3c648540c662585846","url":"static/js/13.2ebfc61a.chunk.js"},{"revision":"8e38177b8421d8571fada4a934b3c41d","url":"static/js/14.53acc5d4.chunk.js"},{"revision":"a5dfca7b783ca0290da1a55dfdb37d40","url":"static/js/15.9958fa8f.chunk.js"},{"revision":"cbf01b7c3f9f428b4d0bee1ca9705eb6","url":"static/js/16.f1a9e9d3.chunk.js"},{"revision":"82405ecaa4b4e9bc3430d331da9ebd4a","url":"static/js/17.5641e39a.chunk.js"},{"revision":"6ce12560538acb76cf0f7b80eb263b3f","url":"static/js/18.fdd48912.chunk.js"},{"revision":"3a065808a82dfd9d23d347de47a4639d","url":"static/js/19.f229a017.chunk.js"},{"revision":"fd25b52e5937750808ca862c97d0d5cb","url":"static/js/2.fec62075.chunk.js"},{"revision":"9a9a581329d74c6de80589471325f855","url":"static/js/20.245cef8c.chunk.js"},{"revision":"49209e3f732d0c420c788dffb8644fcf","url":"static/js/21.5ff74021.chunk.js"},{"revision":"931fa0075e132aefded16810d98717c0","url":"static/js/22.56ce7ec4.chunk.js"},{"revision":"5c8df03fee1f5b40da8f87ff6355ada0","url":"static/js/23.3685f6bf.chunk.js"},{"revision":"d1ec4702af7a71e776efe1fdcd30179f","url":"static/js/24.ddc5e1c9.chunk.js"},{"revision":"caa63d194dfaa0381f50e1e277bce918","url":"static/js/25.2eefc9e4.chunk.js"},{"revision":"3a1a0d972ccaf532b2e5af3301d18422","url":"static/js/26.a2e41af3.chunk.js"},{"revision":"6049ea1447696af19ad17eba8d34b2fb","url":"static/js/27.f9c2060d.chunk.js"},{"revision":"a27381daa9be389c7ccaa7f9769fd955","url":"static/js/28.ca90e195.chunk.js"},{"revision":"71860866cbda9720a07a941ef572101e","url":"static/js/29.ff250911.chunk.js"},{"revision":"cd16f0b551f6d54c78fe9c96f229e58d","url":"static/js/3.2fc0a95b.chunk.js"},{"revision":"a664b26e8ed77d26f61ff589e4965cd1","url":"static/js/30.257d2734.chunk.js"},{"revision":"f8e4c032f70502dc5c0804c50e8679fe","url":"static/js/31.43102c53.chunk.js"},{"revision":"880212392bc4de73da446a87ee033a52","url":"static/js/32.29f45193.chunk.js"},{"revision":"c4ef53efc19e3029d48f79b768a07bee","url":"static/js/33.91364241.chunk.js"},{"revision":"9b1cb961014949263ce37da98113624f","url":"static/js/34.36e82ba8.chunk.js"},{"revision":"02a4760d658597249cb6a1ebf74a6634","url":"static/js/35.d3fc188d.chunk.js"},{"revision":"23fd2346829f2c71b6fc38ffb5e7faff","url":"static/js/36.8baf2c29.chunk.js"},{"revision":"50df64dec7178d810cb0be3938657c31","url":"static/js/37.6654740c.chunk.js"},{"revision":"8c92a01159b2da2e7cf254c4edc1d608","url":"static/js/38.10ce54d2.chunk.js"},{"revision":"4338faea2b6d8fb16ba9f4bcc447fcf9","url":"static/js/39.9ba2c9e5.chunk.js"},{"revision":"5603902e8bf4f228592ccdb6b7574107","url":"static/js/4.7335247a.chunk.js"},{"revision":"5d91b93c36adcc38c0803a9bcd727ffb","url":"static/js/5.7ce0efae.chunk.js"},{"revision":"a258bd655604e731f28b576e772bc0d8","url":"static/js/6.7b1d466b.chunk.js"},{"revision":"47da0a522ece7667f53f5a1ca0e242c4","url":"static/js/9.ac05a06b.chunk.js"},{"revision":"ebdabb359f70f04d45170c2ebe37cff4","url":"static/js/main.b559888a.chunk.js"},{"revision":"dfffc49ef9cb550fd6fca7414041caee","url":"static/js/runtime-main.a62303f3.js"}]);

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
