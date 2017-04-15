import * as ng from 'angular';
import * as ngRoute from 'angular-route';
import * as lodash from 'lodash';
export class ClovusUi {
    public static moduleName : string = 'clovus-ui';
    public static ngModule : ng.IModule = ng.module('clovus-ui', ['ngRoute']);
}
(String.prototype as any).toCamelCase = function (arg:string) {
    if (arg) return lodash.camelCase(arg);
    return lodash.camelCase(this);
}
export * from './views';
export * from './components';

ng.element(()=>ng.bootstrap(document, [ClovusUi.moduleName]));