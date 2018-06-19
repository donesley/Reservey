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
    this.route('classroom', { path: ':reservation_id' }, function () {
      this.route('reservations');
    });
    this.route('reservations', function() {
      this.route('new');
    });
  });

  this.route('rs-service', { path: '/service-panel' }, function (){
    this.route('new');
    this.route('edit', { path: '/:issue_id/edit' });
  });

  this.route('admin', function() {
    this.route('service');
    this.route('edit', { path: '/:classroom_id/edit' });
    this.route('new');
  });
});

export default Router;
