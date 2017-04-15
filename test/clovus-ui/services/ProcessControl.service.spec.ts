
import * as ng from 'angular';
import 'angular-mocks';
import 'angular-route';
import {expect} from 'chai';
import * as ClovusUi from '../../../clovus-ui/ClovusUi';
import '../../../clovus-ui/services/ProcessControl.service';
describe('clovus-ui module', () => {
    var processControl : ClovusUi.ProcessControl;
    beforeEach(ng.mock.module('clovus-ui'));
    beforeEach(inject((_processControl_:ClovusUi.ProcessControl)=>{
        processControl = _processControl_
    }))
    it('calls lodash', ()=>{
        expect(processControl).to.exist;
    });
});