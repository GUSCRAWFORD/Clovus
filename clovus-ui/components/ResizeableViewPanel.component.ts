import {ClovusUi} from '../ClovusUi';
import * as Models from '../../process-control-models';
import * as ng from 'angular';
/**
 * This component is a resizable div
 * 
 */
enum Sides {
    Left,
    Top,
    Right,
    Bottom
}
export class ResizeableViewPanel {
    public static $inject = ['$element', '$scope'];
    
    constructor (
        private $element : ng.IRootElementService,
        private $scope : ng.IScope
                ) {
        this.$element.on('mousedown', this.handleMouseDown(this));
        this.mouse = new Models.Location();
        this.size = new Models.Size();
        this.size.units = Models.Units.px;
    }

    public size : Models.Size;
    public mouse : Models.Location;
    
    resize(side : Sides, value : number, units : Models.Units = Models.Units.px) {
        var elm = this.$element[0],
            currentStyle = elm.style[(Sides[side] as any).toCamelCase()].match(/\d+/),
            current = currentStyle ? parseInt(currentStyle[0],10):0;
        elm.style[(Sides[side] as any).toCamelCase()] = String(current + value) + Models.Units[units];
    }

    handleMouseDown (ctrl : ResizeableViewPanel) { return (event : any)=> {
        var elm = ctrl.$element[0];
        ctrl.mouse.x = event.offsetX;
        ctrl.mouse.y = event.offsetY;
        ctrl.size.width = elm.offsetWidth;
        ctrl.size.height = elm.offsetHeight;
        ctrl.$scope.$apply();
        ctrl.resize(Sides.Left, 1);
    } }
}
ClovusUi.ngModule.component((ResizeableViewPanel as any).name.toCamelCase(), {
    controller: ResizeableViewPanel,
    template: require('./ResizeableViewPanel.partial.html')
});