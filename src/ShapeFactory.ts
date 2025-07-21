import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

interface CircleInterface {
  typeString: 'circle';
  x: number;
  y: number;
  r: number;
}

interface RectangleInterface {
  typeString: 'rectangle';
  x: number;
  y: number;
  w: number;
  h: number;
}

export class ShapeFactory {
  static createShape(
    shapeSpecs: CircleInterface | RectangleInterface
  ): Circle | Rectangle | string {
    if (shapeSpecs.typeString === 'circle') {
      return new Circle(shapeSpecs);
    } else if (shapeSpecs.typeString === 'rectangle') {
      return new Rectangle(shapeSpecs);
    } else {
      return "typeString needs to be 'circle' or 'rectangle'";
    }
  }
}
