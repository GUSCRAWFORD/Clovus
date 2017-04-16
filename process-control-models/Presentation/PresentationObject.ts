import {ChartObject} from '../Data/ChartObject';
import {IRenderable} from './IRenderable';
import {Size} from './Size';
import {Location} from './Location';
export class PresentationObject extends ChartObject implements IRenderable {
    /**
     * This class models all drawable items in a chart
     * @property location - a structure reflecting an object's location in a chart
     * @property size - a structure reflecting an object's width and height in a chart
     */
    location: Location;
    size: Size;
}