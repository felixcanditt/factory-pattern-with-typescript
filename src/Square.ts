import { Rectangle } from './Rectangle';
import { RectangleInterface } from './Rectangle';

// export interface SquareInterface {
//   typeString: 'square';
//   xOrigin: number;
//   yOrigin: number;
//   width: number;
//   height: number;
// }

export class Square extends Rectangle {
  constructor(squareSpecs: RectangleInterface) {
    super(squareSpecs);
  }

  // toString(): string {
  //   return `This rectangle has an area of ${this.area} and a circumference of ${this.circumference}.`;
  // }
}
