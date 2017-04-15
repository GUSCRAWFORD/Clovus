
import * as ng from 'angular';
import 'angular-mocks';
import 'angular-route';
import {expect} from 'chai';
import * as ClovusUi from '../clovus-ui/ClovusUi';
describe('clovus-ui module', () => {
    beforeEach(ng.mock.module('clovus-ui'))
    it('returns camel case from Pascal case', ()=>{
        var x = "PascalCase";
        expect((x as any).toCamelCase()).to.equal("pascalCase");
        expect((String.prototype as any).toCamelCase(x)).to.equal("pascalCase");
    });
    it('returns camel case from Spinal case', ()=>{
        var x = "spinal-case";
        expect((x as any).toCamelCase()).to.equal("spinalCase");
        expect((String.prototype as any).toCamelCase(x)).to.equal("spinalCase");
    });    
});