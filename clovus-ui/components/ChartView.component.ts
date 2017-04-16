import {ClovusUi} from '../ClovusUi';
import * as Models from '../../process-control-models'
import * as ng from 'angular';
/**
 * This component is a resizable div
 * 
 */
export class ChartView {
    constructor (private $element : ng.IRootElementService) {
        this.$element.on('mousedown', this.handleMouseDown)
    }
    public items : Models.PresentationObject;
    
    handleMouseDown (event : any) {
        
    }

}
ClovusUi.ngModule.component((ChartView as any).name.toCamelCase(), {
    controller: ChartView,
    template: require('./ChartView.partial.html')
});