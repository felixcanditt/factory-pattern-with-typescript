import { Rectangle, RectangleSquareInterface } from './Rectangle';

export class Square extends Rectangle {
  constructor(squareSpecs: RectangleSquareInterface) {
    super(squareSpecs);
  }

  // toString(): string {
  //   const area = super.getPrivateArea;
  //   const circumference = super.getPrivateCircumference;
  //   return `This square has an area of ${area} and a circumference of ${circumference}.`;
  // }
}
