import {Size} from './Size';
import {Location} from './Location';

export interface IRenderable {
    /**
     * This interface must be implemented to be a displayable item in a ChartView
     * @property location - a structure reflecting an object's location in a chart
     * @property size - a structure reflecting an object's width and height in a chart
     */
    location: Location,
    size: Size
}