import { ShapeFactory } from './ShapeFactory';

function main() {
  const newCircle = ShapeFactory.createCircle('circle', 1, 2, 3);
  console.log(
    newCircle.toString(),
    newCircle.origin(),
    'Area:',
    newCircle.returnArea(),
    'Circumference:',
    newCircle.returnCircumference()
  );

  const newRectangle = ShapeFactory.createRectangle('rectangle', 1, 2, 3, 4);
  console.log(
    newRectangle.toString(),
    newRectangle.origin(),
    'Area:',
    newRectangle.returnArea(),
    'Circumference:',
    newRectangle.returnCircumference()
  );
}

main();
