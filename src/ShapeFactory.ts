import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

export class ShapeFactory {
  static createCircle(typeString: string, x: number, y: number, r: number) {
    return new Circle(x, y, r);
  }
  static createRectangle(
    typeString: string,
    x: number,
    y: number,
    w: number,
    h: number
  ) {
    return new Rectangle(x, y, w, h);
  }
}
