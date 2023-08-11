'use strict';

module.exports = function (deployTarget) {
  var ENV = {
    build: {},

    s3: {
      // accessKeyId: '<your-aws-access-key>',
      // secretAccessKey: '<your-aws-secret>',
      filePattern:
        '**/*.{js,css,png,gif,ico,jpg,jpeg,map,xml,txt,svg,swf,eot,ttf,woff,woff2,html}',
      bucket: 'sambordo.ninja',
      region: 'us-east-1',
    },
    's3-index': {
      bucket: 'sambordo.ninja',
      region: 'us-east-1',
      allowOverwrite: true,
    },
  };
  // include other plugin configuration that applies to all deploy targets here

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
