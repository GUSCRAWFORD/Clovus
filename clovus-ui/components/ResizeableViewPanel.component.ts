import {ClovusUi} from '../ClovusUi';
import * as Models from '../../process-control-models';
import * as ng from 'angular';
/**
 * This component is a resizable div
 * 
 */
<<<<<<< HEAD
export class ResizeableViewPanel {
    public static $inject = ['$element', '$scope'];
=======
enum Sides {
    Left,
    Top,
    Right,
    Bottom
}
export class ResizeableViewPanel {
    public static $inject = ['$element', '$scope'];
    
>>>>>>> parent of c2491d7... work on reszising
    constructor (
        private $element : ng.IRootElementService,
        private $scope : ng.IScope
                ) {
        this.$element.on('mousedown', this.handleMouseDown(this));
        this.mouse = new Models.Location();
<<<<<<< HEAD
=======
        this.size = new Models.Size();
        this.size.units = Models.Units.px;
>>>>>>> parent of c2491d7... work on reszising
    }

    public size : Models.Size;
    public mouse : Models.Location;
    
<<<<<<< HEAD
=======
    resize(side : Sides, value : number, units : Models.Units = Models.Units.px) {
        var elm = this.$element[0],
            currentStyle = elm.style[(Sides[side] as any).toCamelCase()].match(/\d+/),
            current = currentStyle ? parseInt(currentStyle[0],10):0;
        elm.style[(Sides[side] as any).toCamelCase()] = String(current + value) + Models.Units[units];
    }
>>>>>>> parent of c2491d7... work on reszising

    handleMouseDown (ctrl : ResizeableViewPanel) { return (event : any)=> {
        ctrl.mouse.x = event.offsetX;
        ctrl.mouse.y = event.offsetY;
        ctrl.$scope.$apply();
<<<<<<< HEAD
=======
        ctrl.resize(Sides.Left, 1);
>>>>>>> parent of c2491d7... work on reszising
    } }
}
ClovusUi.ngModule.component((ResizeableViewPanel as any).name.toCamelCase(), {
    controller: ResizeableViewPanel,
    template: require('./ResizeableViewPanel.partial.html')
});