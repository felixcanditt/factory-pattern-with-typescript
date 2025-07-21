import { ShapeFactory } from './ShapeFactory';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';
import { Square } from './Square';

main();

function main() {
  const firstShape = ShapeFactory.createShape({
    typeString: 'circle',
    xOrigin: 1,
    yOrigin: 2,
    radius: 3,
  });

  const secondShape = ShapeFactory.createShape({
    typeString: 'rectangle',
    xOrigin: 1,
    yOrigin: 2,
    width: 3,
    height: 4,
  });

  const thirdShape = ShapeFactory.createShape({
    typeString: 'square',
    xOrigin: 9,
    yOrigin: 4,
    width: 6,
    height: 8,
  });

  showResult(firstShape);
  showResult(secondShape);
  showResult(thirdShape);
}

function showResult(factoryResult: Circle | Rectangle | Square | string) {
  if (typeof factoryResult != 'string') {
    // ShapeFactory returns a string if typeString isn't provided correctly
    console.log(
      // factoryResult.toString(),
      // factoryResult.origin(),
      // 'Area:',
      // factoryResult.returnArea(),
      // 'Circumference:',
      // factoryResult.returnCircumference()
      factoryResult.toAnotherString(
        factoryResult.returnArea(),
        factoryResult.returnCircumference()
      )
    );
  } else {
    console.log(factoryResult);
  }
}
