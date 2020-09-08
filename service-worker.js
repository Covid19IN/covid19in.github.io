if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"48c9d3b450587ad77c9c3e3d30fcbd96","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"48c9d3b450587ad77c9c3e3d30fcbd96","url":"index.html"},{"revision":"56f995063cbd3cee3aabcad2ad985e62","url":"precache-manifest.56f995063cbd3cee3aabcad2ad985e62.js"},{"revision":"659fcbdcf1070cd596a9ed8ef5f80710","url":"static/css/15.aa9ef476.chunk.css"},{"revision":"7d4e1e17bdf366f877b4d150879e4be7","url":"static/js/0.4e9d56d0.chunk.js"},{"revision":"faf4506225e537c1fc02a596791f99d6","url":"static/js/1.9df9cc7f.chunk.js"},{"revision":"50a47dc25bdc0392b578c3723631bbd7","url":"static/js/10.ccb8fdb0.chunk.js"},{"revision":"289e263ba2a6dd8107a626e16135aa9a","url":"static/js/11.75ad32b2.chunk.js"},{"revision":"a54bfc1c45f14ee8f132ac841cad13fc","url":"static/js/12.b30837db.chunk.js"},{"revision":"6bec4b3787dcb1fce1272b3bf08b1015","url":"static/js/13.3a2233d2.chunk.js"},{"revision":"814fbd2b36e91bbd0eb759dc67735028","url":"static/js/14.05f2ad19.chunk.js"},{"revision":"ef84fe0f43097c7260e24c8c26b60cf5","url":"static/js/15.f3052c39.chunk.js"},{"revision":"4627332cdf413306d2aa363a885bc69c","url":"static/js/16.add2ea25.chunk.js"},{"revision":"684b2bdf9812551561e73c821762d032","url":"static/js/17.84de0f32.chunk.js"},{"revision":"2642d292e774aba56f6f8f2f99227670","url":"static/js/18.e8bc6d37.chunk.js"},{"revision":"5a986575a49beb2c81f45a4230014d65","url":"static/js/19.351239b7.chunk.js"},{"revision":"1ec9805825180985e30afa489f2d1b07","url":"static/js/2.44514ee2.chunk.js"},{"revision":"5f252003936206f925c4a0b94d0dd1f9","url":"static/js/20.793cc1b3.chunk.js"},{"revision":"b06a8f482e27e6700cb982d9505d06a2","url":"static/js/21.0941bf20.chunk.js"},{"revision":"d2ba255fe13f430b58800a27ecacd8ef","url":"static/js/22.2ed5a457.chunk.js"},{"revision":"4a08c40fbc6c4dbc623807df55a4fcac","url":"static/js/23.d8ba0f65.chunk.js"},{"revision":"01baf4304b96d85b8e001a9062a9026d","url":"static/js/24.273d7cff.chunk.js"},{"revision":"8b57f9e57ab0bd7a27a03742c80b46f3","url":"static/js/25.77b39458.chunk.js"},{"revision":"43bf000aa7e404b65616f6755460fd1f","url":"static/js/26.e85fe879.chunk.js"},{"revision":"0ae5a4d743b2eb32fdc503044f6adea4","url":"static/js/27.3459d078.chunk.js"},{"revision":"201af2b5aff6fd52170cb7371bcb5134","url":"static/js/28.8af470f7.chunk.js"},{"revision":"c239c0d89f26e961f943adc0721f7f89","url":"static/js/29.6cd352b9.chunk.js"},{"revision":"7aa03382337c4b075489fbc4afd97feb","url":"static/js/3.109a602a.chunk.js"},{"revision":"733ec7d4c52caff39aba646f1bdb7071","url":"static/js/30.c297b421.chunk.js"},{"revision":"c07c6bf5899d0a43e75bf4f742543a85","url":"static/js/31.a82a96d9.chunk.js"},{"revision":"400c4890afd4a15b11230056fe0d3056","url":"static/js/32.44ee0dd9.chunk.js"},{"revision":"3873c4ef47678d6b591f3b691291ff4a","url":"static/js/33.5c1e9d06.chunk.js"},{"revision":"965ba605665845c51406a5afbe362d37","url":"static/js/34.de6c5534.chunk.js"},{"revision":"5358984910e08816a8d0341229250605","url":"static/js/35.258a0900.chunk.js"},{"revision":"2307d744338e233d550767144b0007de","url":"static/js/36.cf4753e8.chunk.js"},{"revision":"b14616e5e282d44f2ba3581eb4633128","url":"static/js/37.e517f828.chunk.js"},{"revision":"347c89d6d6a9b05cea48d7f40e3b3784","url":"static/js/4.d98fecb6.chunk.js"},{"revision":"02bff3eea5d1ec3d4c6c124a20aa4c30","url":"static/js/5.e0acf73d.chunk.js"},{"revision":"d34932aa518a16a6944934adaa814f2e","url":"static/js/6.f02e2618.chunk.js"},{"revision":"52e53a8c5849b835891a455bbadf8149","url":"static/js/9.177c3174.chunk.js"},{"revision":"c2c57456c271fb9602995db989ab3ca2","url":"static/js/main.3d8ad728.chunk.js"},{"revision":"a2ef8a251d5e699a08c6f72a39c18983","url":"static/js/runtime-main.101e29fe.js"}]);

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
