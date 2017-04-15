import {ClovusUi} from '../ClovusUi';
export class Default {
    constructor () {

    }
}
ClovusUi.ngModule.component((Default as any).name.toCamelCase(), {
    template: require('./Default.partial.html'),
    controller: Default
}).config(
    ($routeProvider : any) =>
        $routeProvider.when('/', {
            template: '<default></default>'
        })
);