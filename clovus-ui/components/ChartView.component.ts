import {ClovusUi} from '../ClovusUi';
import * as Models from '../../process-control-models'
import * as ng from 'angular';
/**
 * This component is a resizable div
 * 
 */
export class ChartView {
    constructor (private $element : ng.IRootElementService) {
    }
    public items : Models.PresentationObject;
    

}
ClovusUi.ngModule.component((ChartView as any).name.toCamelCase(), {
    controller: ChartView,
    template: require('./ChartView.partial.html')
});