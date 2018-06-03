import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('rs-agenda', { path: '/agenda' });

  this.route('rs-reservations-overview', { path: '/reservations-overview' });

  this.route('classrooms', function() {
    this.route('classroom', { path: ':slug' }, function () {
      this.route('reservations');
    });
  });

});

export default Router;
