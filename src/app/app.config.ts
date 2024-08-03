import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, persistentLocalCache, persistentMultipleTabManager, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [  provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
                provideFirebaseApp(() => initializeApp({
                  "projectId":"angularfire-72f62",
                  "appId":"1:326245839841:web:eca823eba3c04a2c4f58a0",
                  "storageBucket":"angularfire-72f62.appspot.com",
                  "apiKey":"AIzaSyDlpuF5-ANVEtx_ieGA0uv3K4rfKeYJt1g",
                  "authDomain":"angularfire-72f62.firebaseapp.com",
                  "messagingSenderId":"326245839841"})),

                provideAuth(() => getAuth()),
                provideFirestore(() => getFirestore()/* ,{
                  localCache: persistentLocalCache({
                    tabManager: persistentMultipleTabManager()
                  })
                } */),
                provideStorage(() => getStorage()), provideAnimationsAsync()
              ]
};
