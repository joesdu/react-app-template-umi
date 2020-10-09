const isHttps = document.location.protocol === 'https:';

if ('serviceWorker' in navigator && isHttps) {
  // unregister service worker
  const { serviceWorker } = navigator;
  if (serviceWorker.getRegistrations) {
    serviceWorker.getRegistrations().then((sws: readonly ServiceWorkerRegistration[]) => {
      sws.forEach((sw: ServiceWorkerRegistration) => {
        sw.unregister();
      });
    });
  }
  serviceWorker.getRegistration().then((sw: ServiceWorkerRegistration | undefined) => {
    if (sw) sw.unregister();
  });
  // remove all caches
  if (window.caches && window.caches.keys) {
    caches.keys().then((keys: Array<string>) => {
      keys.forEach((key: string) => {
        caches.delete(key);
      });
    });
  }
}
