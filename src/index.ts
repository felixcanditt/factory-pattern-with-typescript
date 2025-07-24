import { ShapeFactory } from './ShapeFactory';
import { Circle, CircleInterface } from './Circle';
import { Rectangle, RectangleInterface } from './Rectangle';
import { Square, SquareInterface } from './Square';

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
    height: 8,
  });
}

function orderShape(
  shapeSpecs: CircleInterface | RectangleInterface | SquareInterface
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
    factoryResult.toString(
      factoryResult.returnArea(),
      factoryResult.returnCircumference()
    ),
    factoryResult.origin(),
    'Area:',
    factoryResult.returnArea(),
    'Circumference:',
    factoryResult.returnCircumference()
  );
}
