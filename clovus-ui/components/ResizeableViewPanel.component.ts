import {ClovusUi} from '../ClovusUi';
import * as Models from '../../process-control-models';
import * as ng from 'angular';
/**
 * This component is a resizable div
 * 
 */
export class ResizeableViewPanel {
    public static $inject = ['$element', '$scope'];
    constructor (
        private $element : ng.IRootElementService,
        private $scope : ng.IScope
                ) {
        this.$element.on('mousedown', this.handleMouseDown(this));
        this.mouse = new Models.Location();
    }

    public size : Models.Size;
    public mouse : Models.Location;
    

    handleMouseDown (ctrl : ResizeableViewPanel) { return (event : any)=> {
        ctrl.mouse.x = event.offsetX;
        ctrl.mouse.y = event.offsetY;
        ctrl.$scope.$apply();
    } }
}
ClovusUi.ngModule.component((ResizeableViewPanel as any).name.toCamelCase(), {
    controller: ResizeableViewPanel,
    template: require('./ResizeableViewPanel.partial.html')
});