import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {TestComponent} from './test.component'
import {ParentService} from './test.service'
import {ChildService} from './test.service'

bootstrap(AppComponent);
//bootstrap(TestComponent)

// (function(app) {
//   document.addEventListener('DOMContentLoaded', function() {
//     ng.platform.browser.bootstrap(app.AppComponent);
//   });
// })(window.app || (window.app = {}));