import {ClovusUi} from '../ClovusUi';
import * as Models from '../../process-control-models';
import * as ng from 'angular';
/**
 * This component is a resizable div
 * 
 */
enum Sides {
    none,
    left,
    top,
    right,
    bottom
}
export class ResizeableViewPanel {
    public static $inject = ['$element', '$scope'];
    public static edgeSize : number = 15;
    constructor (
        private $element : ng.IRootElementService,
        private $scope : ng.IScope
                ) {
        this.eventHash = {
            mousedown :  this.handleMouseDown(this),
            mouseup: this.handleMouseUp(this)
        };
        for (var key in this.eventHash) this.$element.on(key,(this.eventHash as any)[key]);
        this.mouse = new Models.Location();
        this.size = new Models.Size();
        this.size.units = Models.Units.px;

        var elm = this.$element[0];
        elm.style.left = elm.style.right = elm.style.top = elm.style.bottom = "0";
    }

    private eventHash : any;
    public size : Models.Size;
    public mouse : Models.Location;
    
    resize(side : Sides, value : number, units : Models.Units = Models.Units.px) {
        var elm = this.$element[0],
            currentStyle = elm.style[Sides[side] as any].match(/\d+/),
            current = currentStyle ? parseInt(currentStyle[0],10):0;
        elm.style[Sides[side] as any] = String(current + value) + Models.Units[units];
    }
    handleMouseUp (ctrl : ResizeableViewPanel) { return (event : any)=> {
        ctrl.$element.off('mousemove', ctrl.eventHash.mousemove);
    } }
    handleMouseDown (ctrl : ResizeableViewPanel) { return (event : any)=> {
        var elm = ctrl.$element[0];
        ctrl.mouse.x = event.offsetX;
        ctrl.mouse.y = event.offsetY;
        ctrl.size.width = elm.offsetWidth;
        ctrl.size.height = elm.offsetHeight;
        ctrl.$scope.$apply();
        var side : Sides = ctrl.onEdge(ctrl);
        if (side) {
            ctrl.eventHash.mousemove = ctrl.handleMouseMove(ctrl, side);
            ctrl.$element.on('mousemove', ctrl.eventHash.mousemove);
        } 
        else ctrl.$element.off('mousemove', ctrl.eventHash.mousemove);
    } }
    onEdge(ctrl : ResizeableViewPanel) :Sides {
        if (ctrl.mouse.x < ResizeableViewPanel.edgeSize) {
            return Sides.left;
        }
        if (ctrl.mouse.y < ResizeableViewPanel.edgeSize) {
            return Sides.top;
        }
        if (ctrl.size.width - ctrl.mouse.x < ResizeableViewPanel.edgeSize) {
            return Sides.right;
        }
        if (ctrl.size.height - ctrl.mouse.y < ResizeableViewPanel.edgeSize) {
            return Sides.bottom;
        }
        return Sides.none;
    }
    handleMouseMove (ctrl : ResizeableViewPanel, side : Sides) { return (event : any)=> {
        var elm = ctrl.$element[0];
        ctrl.resize(side, side % 2 ? event.movementX : event.movementY);
        ctrl.$scope.$apply();
    } }    
}
ClovusUi.ngModule.component((ResizeableViewPanel as any).name.toCamelCase(), {
    controller: ResizeableViewPanel,
    template: require('./ResizeableViewPanel.partial.html')
});