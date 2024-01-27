// Copyright 2017, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// Hierarchical node.js configuration with command-line arguments, environment
// variables, and files.
const nconf = module.exports = require('nconf');
const path = require('path');

nconf
  // 1. Command-line arguments
  .argv()
  // 2. Environment variables
  // .env([
  //   'cloudsql',
  //   'fleetman',
  //   'fleetman-225308:us-west1:fleetman',
  //   'root',
  //   'zxc123',
  //   'production',
  //   '8080'
  // ])
  // 3. Config file
  .file({ file: path.join(__dirname, 'config.json') })
  // 4. Defaults
  .defaults({
    // dataBackend can be 'datastore' or 'cloudsql'. Be sure to
    // configure the appropriate settings for each storage engine below.
    // If you are unsure, use datastore as it requires no additional
    // configuration.
    // DATA_BACKEND: 'cloudsql',

    // This is the id of your project in the Google Cloud Developers Console.
    // GCLOUD_PROJECT: 'fleetman',

    MYSQL_USER: 'yourfspl_root',
    MYSQL_PASSWORD: 'zxc123',
    // INSTANCE_CONNECTION_NAME:'fleetman-225308:us-west1:fleetman',
    // NODE_ENV:'production',

    PORT: process.env.PORT || 8080
  });

// // Check for required settings
// checkConfig('GCLOUD_PROJECT');

// if (nconf.get('DATA_BACKEND') === 'cloudsql') {
//   checkConfig('MYSQL_USER');
//   checkConfig('MYSQL_PASSWORD');
//   if (nconf.get('NODE_ENV') === 'production') {
//     checkConfig('INSTANCE_CONNECTION_NAME');
//   }
// }

// function checkConfig (setting) {
//   if (!nconf.get(setting)) {
//     throw new Error(`You must set ${setting} as an environment variable or in config.json!`);
//   }
// }