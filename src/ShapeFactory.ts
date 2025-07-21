import { Circle } from './Circle';
import { CircleInterface } from './Circle';
import { Rectangle } from './Rectangle';
import { RectangleInterface } from './Rectangle';
import { Square } from './Square';

export class ShapeFactory {
  static createShape(
    shapeSpecs: CircleInterface | RectangleInterface
  ): Circle | Rectangle | string {
    if (shapeSpecs.typeString === 'circle') {
      return new Circle(shapeSpecs);
    } else if (shapeSpecs.typeString === 'rectangle') {
      return new Rectangle(shapeSpecs);
    } else {
      // fallback if typeString isnt provided correctly
      return "typeString needs to be 'circle' or 'rectangle'";
    }
  }
}
