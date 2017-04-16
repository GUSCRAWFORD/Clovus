
import * as ng from 'angular';
import 'angular-mocks';
import 'angular-route';
import {expect} from 'chai';
import * as ClovusUi from '../../../clovus-ui/ClovusUi';
describe('ChartView component', () => {
    var ctrl : ClovusUi.ChartView;
    beforeEach(ng.mock.module('clovus-ui'));
    beforeEach(
        inject((
            $componentController:ng.IComponentControllerService
        )=>{
            
            ng.element('<div></div>');
            ctrl = $componentController('chartView', 
                {
                    $element:ng.element('<div></div>')
                }, {
                    /* bindings*/
                }) as ClovusUi.ChartView;
        })
    )
    it('controller loads', ()=>{
        expect(ctrl).to.exist;
    });
    describe('.handleMouseDown', ()=>{
        it('(MouseEvent) calls', ()=>{
            
        })
    });
});