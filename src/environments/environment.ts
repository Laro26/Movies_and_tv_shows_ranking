// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrlAPI:'https://api.themoviedb.org/3/search/movie?api_key=485d67ef1381674ce7e2e5fde2c99463&language=en-US&',//url search peliculas
  baseUrlAPIid:' https://api.themoviedb.org/3/movie',
  baseUrlAPI2:'https://api.themoviedb.org/3/search/tv?api_key=485d67ef1381674ce7e2e5fde2c99463&language=en-US&',// url search series
  baseUrlAPI2id:'https://api.themoviedb.org/3/tv',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CL