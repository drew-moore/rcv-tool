
import { AngularFireModule } from "angularfire2";
import { ModuleWithProviders } from "@angular/core";

export const conf = {
  apiKey: "AIzaSyB5ApOYeojd02ifiw3YChF_J-OmXYYaqWs",
  authDomain: "rcv-app.firebaseapp.com",
  databaseURL: "https://rcv-app.firebaseio.com",
  storageBucket: "rcv-app.appspot.com",
  messagingSenderId: "770556859838"
};

export const FirebaseModule: ModuleWithProviders = AngularFireModule.initializeApp(conf);
