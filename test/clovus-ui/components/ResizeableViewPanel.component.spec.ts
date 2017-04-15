
import * as ng from 'angular';
import 'angular-mocks';
import 'angular-route';
import {expect} from 'chai';
import * as ClovusUi from '../../../clovus-ui/ClovusUi';
describe('ResizeableViewPanel component', () => {
    var ctrl : ClovusUi.ResizeableViewPanel;
    beforeEach(ng.mock.module('clovus-ui'));
    beforeEach(
        inject((
            $componentController:ng.IComponentControllerService
        )=>{
            
            ng.element('<div></div>');
            ctrl = $componentController('resizeableViewPanel', 
                {
                    $element:ng.element('<div></div>')
                }, {
                    /* bindings*/
                }) as ClovusUi.ResizeableViewPanel;
        })
    )
    it('controller loads', ()=>{
        expect(ctrl).to.exist;
    });
    describe('.handleMouseDown', ()=>{
        it('(MouseEvent) calls', ()=>{
            ctrl.handleMouseDown({offsetX:0,offsetY:0});
            
        })
    });
});