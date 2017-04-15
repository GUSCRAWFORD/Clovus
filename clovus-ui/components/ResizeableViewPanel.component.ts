import {ClovusUi} from '../ClovusUi';
import * as ng from 'angular';
/**
 * This component is a resizable div
 * 
 */
export class ResizeableViewPanel {
    constructor (private $element : ng.IRootElementService) {
        this.$element.on('mousedown', this.handleMouseDown)
    }
    handleMouseDown (event : any) {
        
    }
}
ClovusUi.ngModule.component((ResizeableViewPanel as any).name.toCamelCase(), {
    controller: ResizeableViewPanel,
    template: require('./ViewSplit.partial.html')
});