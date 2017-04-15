import * as ng from 'angular';
import {ClovusUi} from '../ClovusUi';
import * as Models from '../../process-control-models';
export class ProcessControl {
    public static $inject = ['$q'];
    constructor (private $q : ng.IQService) {

    }
}
ClovusUi.ngModule.service((ProcessControl as any).name.toCamelCase(), ProcessControl);