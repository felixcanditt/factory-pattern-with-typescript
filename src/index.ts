import { ShapeFactory } from './ShapeFactory';

function main() {
  const newCircle = ShapeFactory.createShape('circle', 1, 2, 3);
  console.log(
    newCircle.toString(),
    newCircle.origin(),
    'Area:',
    newCircle.returnArea(),
    'Circumference:',
    newCircle.returnCircumference()
  );
}

main();
