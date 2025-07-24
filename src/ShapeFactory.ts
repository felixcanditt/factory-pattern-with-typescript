import { Circle, CircleInterface } from './Circle';
import { Rectangle, RectangleSquareInterface } from './Rectangle';
import { Square } from './Square';

export class ShapeFactory {
  static createShape(
    shapeSpecs: CircleInterface | RectangleSquareInterface
  ): Circle | Rectangle | Square {
    if (shapeSpecs.typeString === 'circle') {
      return new Circle(shapeSpecs);
    } else if (shapeSpecs.typeString === 'rectangle') {
      return new Rectangle(shapeSpecs);
    } else if (shapeSpecs.typeString === 'square') {
      return new Square(shapeSpecs);
    } else {
      // fallback if typeString isnt provided correctly
      throw new Error(
        "Invalid typeString: must be 'circle', 'rectangle', or 'square'"
      );
    }
  }
}
