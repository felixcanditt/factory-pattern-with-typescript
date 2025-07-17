import { Circle } from './Circle';

export class ShapeFactory {
  static createShape() {
    return new Circle(3, 67, 8);
  }
}
