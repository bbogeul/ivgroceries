Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard'
});

Router.route('/items/new', {
  name: 'items.new'
});
Router.route('/newItem', {
  name: 'newItem',
    layoutTemplate: 'appLayout'
});
Router.plugin('ensureSignedIn', {
  only: ['newItem']
});
Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
