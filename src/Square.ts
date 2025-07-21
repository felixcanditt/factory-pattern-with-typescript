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
    const area = super.getPrivateArea;
    const circumference = super.getPrivateCircumference;
    return `This square has an area of ${area} and a circumference of ${circumference}.`;
  }
}
