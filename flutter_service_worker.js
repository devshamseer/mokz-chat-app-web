'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3db4d3558c0a11dc4942934a8f4524b7",
"index.html": "d75c01c885146e37d9fe51d40bf1de81",
"/": "d75c01c885146e37d9fe51d40bf1de81",
"main.dart.js": "eeedfb8d47cf9a818a8a04b352e3bb21",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e1484dfaf887b2a396fcc2d1ff821594",
"assets/AssetManifest.json": "b077e7bdfd0f7eb6f5957166d1256306",
"assets/NOTICES": "abc509b1123e942c38f8818af473e037",
"assets/FontManifest.json": "e024588c84b5d20cb7869d6f908130e8",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "bcaf3ba974cf7900b3c158ca593f4971",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e57c20e07e5f4c43b0df5fe927d0849a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "523adda53464ab61c0fadc1f73d5118a",
"assets/fonts/MaterialIcons-Regular.otf": "c56d05ec5d5eda28bb941c015b5e1e85",
"assets/assets/images/chat_bg1.jpg": "480b065893357a40eecdf004709dad11",
"assets/assets/images/chat_bg3.jpg": "644bcc203d1a68f8141088b9cb3e3b18",
"assets/assets/images/chat_bg2.jpg": "eef613c0e51ee0d6232120ddca8adfa0",
"assets/assets/images/chat_bg4.jpg": "a1e0c2cd262d235cd795f807f459aebf",
"assets/assets/images/chat_bg_03.png": "eef613c0e51ee0d6232120ddca8adfa0",
"assets/assets/images/chat_bg_02.png": "43678b50763b93e2808733c5e239f8b9",
"assets/assets/images/chat_bg_04.png": "dc04665f653343e122f7aab63648874d",
"assets/assets/icons/docx.jpeg": "43c5b75ff95d2405b2f22ed57ac96ca9",
"assets/assets/icons/javscrpit-icon.png": "63cf9c6f8153aef1e884b7ae2815e06d",
"assets/assets/icons/python.png": "69bde9d207e914df93505d8bd8148f9b",
"assets/assets/icons/jpg-vector-icon.jpeg": "6ac40ff7a87136fd7616af66ff776cc1",
"assets/assets/icons/html-icon.png": "25b694ba78065655dcee6237019aceda",
"assets/assets/icons/scss-icon.png": "951d6e38db0a4b2e35cc00482c1d3784",
"assets/assets/icons/pdficon.png": "71a4951707e93ed405fc71e2c76bef15",
"assets/assets/icons/video-icon.jpeg": "e08b62b191f5eba0440eeaadf9146c87",
"assets/assets/icons/css-icon.png": "f24364a348a9f91675db9ffe3c248088",
"assets/assets/icons/json-icon.jpeg": "8c5de6802e3232042ec622f93e5fd347",
"assets/assets/icons/extext.png": "85f1b57707f31c19031882015398ce12",
"assets/assets/icons/txt-icon-2.png": "e2b1bd1016ae8646f30a2d83d21d5fb8",
"assets/assets/icons/mexcel1.png": "61fc140dcccebcb9dd34d8992f4d6fb1",
"assets/assets/icons/rar-icon.png": "4a45507a9ed9e74ebab467592a70af09",
"assets/assets/icons/img-png.png": "402ac11e38f1e4cdca37ce3c01e09d73",
"assets/assets/icons/zip-icon.jpeg": "54f8f7ddead0a5a4c977d9e357c8726c",
"assets/assets/icons/dart-icon.jpeg": "60fbd31aec7b4a720354e75682f53901",
"assets/assets/icons/c-icon.png": "c7b5a93c90dd67b69df0292f7ac4237f",
"assets/assets/icons/pdfsample.png": "76499210de3a023b64b1dda605310ea5",
"assets/assets/icons/exjpg.png": "63f035a98c4c11dc3e5c62a5ad72b483",
"assets/assets/icons/java-icon.png": "74e943d82452f81f6a0bb0b51ac6785d",
"assets/assets/icons/mword.png": "0be9a8a80a78df1308cc419c60f78453",
"assets/assets/icons/apk-icon.jpeg": "038c689288969105c0bfeec323e3288b",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
