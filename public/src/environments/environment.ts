/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAjUvTTsq_an_FG3w36rGeAY9mrUur5bd4",
    authDomain: "yourfleetman-bd7ec.firebaseapp.com",
    databaseURL: "https://yourfleetman-bd7ec.firebaseio.com",
    projectId: "yourfleetman-bd7ec",
    storageBucket: "yourfleetman-bd7ec.appspot.com",
    messagingSenderId: "162144364547"
  }
};
