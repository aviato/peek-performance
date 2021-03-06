import EmberRouter from '@ember/routing/router';
import config from 'peek-performance/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('date', { path: '/date/:iso_date' });
});
