// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyC3Hj2ce05uTHtDJcDgrLfL3oeowSBRJVw",
    authDomain: "presopuestoapp.firebaseapp.com",
    projectId: "presopuestoapp",
    storageBucket: "presopuestoapp.appspot.com",
    messagingSenderId: "815859542479",
    appId: "1:815859542479:web:d47a69e82fe880224b4aba"
  },
  apiConfig: {
    apiUrl: "https://superheroapi.com/api/",
    token: "b2db602f073241ccf79529027610df4d/",
    endPoint: "search/"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
