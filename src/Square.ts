import { Rectangle, RectangleSquareInterface } from './Rectangle';

export class Square extends Rectangle {
  constructor(squareSpecs: RectangleSquareInterface) {
    if (squareSpecs.width !== squareSpecs.height) {
      throw new Error('A square must have equal width and height.');
    }
    super(squareSpecs);
  }
}
