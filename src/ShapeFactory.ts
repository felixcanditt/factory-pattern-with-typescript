import { Circle } from './Circle';

export class ShapeFactory {
  static createShape(typeString: string, x: number, y: number, r: number) {
    return new Circle(x, y, r);
  }
}
