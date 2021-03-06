
import * as ng from 'angular';
import 'angular-mocks';
import 'angular-route';
import {expect} from 'chai';
import * as ClovusUi from '../../../clovus-ui/ClovusUi';
describe('Default view', () => {
    var ctrl : ng.IComponentController;
    beforeEach(ng.mock.module('clovus-ui'));
    beforeEach(inject(($componentController:ng.IComponentControllerService)=>{
        ctrl = $componentController('default', null, {});
    }))
    it('controller loads', ()=>{
        expect(ctrl).to.exist;
    });
});