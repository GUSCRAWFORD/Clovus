import {ClovusUi} from '../ClovusUi';
/**
 * This component is a resizable div
 * 
 */
export class ResizeableViewPanel {

}
ClovusUi.ngModule.component((ResizeableViewPanel as any).name.toCamelCase(), {
    controller: ResizeableViewPanel,
    template: require('./ViewSplit.partial.html')
});