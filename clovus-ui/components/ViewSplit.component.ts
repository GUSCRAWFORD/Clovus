import {ClovusUi} from '../ClovusUi';
export class ViewSplit {

}
ClovusUi.ngModule.component((ViewSplit as any).name.toCamelCase(), {
    controller: ViewSplit,
    template: require('./ViewSplit.partial.html')
});