import EmberRouter from '@ember/routing/router';
import config from 'emberapp/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('arch-diagram');
  this.route('workflow');
  this.route('cost-analysis');
});
