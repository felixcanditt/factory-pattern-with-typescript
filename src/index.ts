import { ShapeFactory } from './ShapeFactory';
import { Circle, CircleInterface } from './Circle';
import { Rectangle, RectangleSquareInterface } from './Rectangle';
import { Square } from './Square';

main();

function main(): void {
  orderShape({
    typeString: 'circle',
    xOrigin: 1,
    yOrigin: 2,
    radius: 3,
  });

  orderShape({
    typeString: 'rectangle',
    xOrigin: 1,
    yOrigin: 2,
    width: 3,
    height: 4,
  });

  orderShape({
    typeString: 'square',
    xOrigin: 9,
    yOrigin: 4,
    width: 6,
    height: 6,
  });
}

function orderShape(
  shapeSpecs: CircleInterface | RectangleSquareInterface
): void {
  try {
    const newShape = ShapeFactory.createShape(shapeSpecs);
    showResult(newShape);
  } catch (error) {
    console.error('Shape creation failed:', (error as Error).message);
  }
}

function showResult(factoryResult: Circle | Rectangle | Square): void {
  console.log(
    factoryResult.toString(),
    factoryResult.origin(),
    'Area:',
    factoryResult.getArea(),
    'Circumference:',
    factoryResult.getCircumference()
  );
}
