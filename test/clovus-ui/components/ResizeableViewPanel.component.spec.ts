
import * as ng from 'angular';
import 'angular-mocks';
import 'angular-route';
import {expect} from 'chai';
import * as ClovusUi from '../../../clovus-ui/ClovusUi';
describe('ResizeableViewPanel component', () => {
    var ctrl : ClovusUi.ResizeableViewPanel,
        $rootScope : ng.IRootScopeService,
        $scope;
    beforeEach(ng.mock.module('clovus-ui'));
    beforeEach(
        inject((
            $componentController:ng.IComponentControllerService,
            _$rootScope_ : ng.IRootScopeService
        )=>{
            $rootScope = _$rootScope_;
            ng.element('<div></div>');
            ctrl = $componentController('resizeableViewPanel', 
                {
                    $element:ng.element('<div></div>'),
                    $scope:$scope = $rootScope.$new()
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
            ctrl.handleMouseDown(ctrl)({offsetX:0,offsetY:0});
            
        })
    });
});