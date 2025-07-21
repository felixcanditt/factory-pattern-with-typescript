import { Rectangle } from './Rectangle';
import { RectangleSquareInterface } from './Rectangle';

export interface SquareInterface extends RectangleSquareInterface {
  typeString: 'square';
}

export class Square extends Rectangle {
  constructor(squareSpecs: SquareInterface) {
    super(squareSpecs);
  }

  toString(): string {
    return `This square has an area of ${this.area} and a circumference of ${this.circumference}.`;
  }
}
