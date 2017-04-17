import {ClovusUi} from '../ClovusUi';
import * as Models from '../../process-control-models';
import * as ng from 'angular';
/**
 * This component is a resizable div
 * 
 */

enum CssProp {
    none,
    left,
    top,
    right,
    bottom,
    width,
    height
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
        elm.style.left = elm.style.top = "0px";
        elm.style.width = elm.offsetWidth + "px";
        elm.style.height = elm.offsetHeight + "px";
    }

    private eventHash : any;
    public size : Models.Size;
    public mouse : Models.Location;
    
    resize(side : CssProp, value : number, units : Models.Units = Models.Units.px) {
        var elm = this.$element[0],
            currentStyle = elm.style[CssProp[side] as any].match(/\d+/),
            current = currentStyle ? parseInt(currentStyle[0],10):0;
        elm.style[CssProp[side] as any] = String(current + value) + Models.Units[units];
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
        var side : CssProp = ctrl.onEdge(ctrl);
        if (side) {
            ctrl.eventHash.mousemove = ctrl.handleMouseMove(ctrl, side);
            ctrl.$element.on('mousemove', ctrl.eventHash.mousemove);
        } 
        else ctrl.$element.off('mousemove', ctrl.eventHash.mousemove);
    } }
    onEdge(ctrl : ResizeableViewPanel) : CssProp {
        if (ctrl.mouse.x < ResizeableViewPanel.edgeSize) {
            return CssProp.left;
        }
        if (ctrl.mouse.y < ResizeableViewPanel.edgeSize) {
            return CssProp.top;
        }
        if (ctrl.size.width - ctrl.mouse.x < ResizeableViewPanel.edgeSize) {
            return CssProp.right;
        }
        if (ctrl.size.height - ctrl.mouse.y < ResizeableViewPanel.edgeSize) {
            return CssProp.bottom;
        }
        return CssProp.none;
    }
    handleMouseMove (ctrl : ResizeableViewPanel, side : CssProp) { return (event : any)=> {
        var elm = ctrl.$element[0];
        ctrl.resize(side, side % 2 ?
            (side === CssProp.right ? (-1) * event.movementX : event.movementX)
                : (side === CssProp.bottom ? (-1) * event.movementY : event.movementY));
        ctrl.$scope.$apply();
    } }    
}
ClovusUi.ngModule.component((ResizeableViewPanel as any).name.toCamelCase(), {
    controller: ResizeableViewPanel,
    template: require('./ResizeableViewPanel.partial.html')
});