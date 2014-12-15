Package.describe({
  name: 'johnantoni:meteor-skeleton',
  summary: 'Skeleton: A dead simple, responsive boilerplate, built for Meteor.',
  version: '0.0.2',
  git: 'https://github.com/johnantoni/meteor-skeleton.git'
});

Package.on_use(function(api) {
  api.add_files([
    'vendor/css/normalize.css',
    'vendor/css/skeleton.css'
  ], ['client']);
});
