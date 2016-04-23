Package.describe({
  name: 'd-i-b:meteor-baidu-map-js',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A package to use Biadu map api',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('ecmascript');
  api.addFiles('client/templates/app.html','client');
  api.mainModule('meteor-baidu-map-js.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('d-i-b:meteor-baidu-map-js');
  api.mainModule('meteor-baidu-map-js-tests.js');
});
