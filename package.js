Package.describe({
  name: 'johnantoni:meteor-skeleton',
  summary: 'Skeleton: A dead simple, responsive boilerplate, built for Meteor.',
  version: '0.0.1',
  git: 'https://github.com/johnantoni/meteor-skeleton.git'
});

Package.on_use(function(api) {
  api.add_files([
    'vendor/normalize.css',
    'vendor/skeleton.css'
  ], ['client']);
});
